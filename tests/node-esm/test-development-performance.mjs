#!/usr/bin/env node
/**
 * Development Import Performance Test
 * 
 * This test measures the actual development-time import resolution performance
 * by comparing direct imports vs barrel file imports using performance.now()
 */

import { performance } from 'perf_hooks';

console.log('🏃 Development Import Performance Test\n');

// We'll measure import time by dynamically importing the same functionality
// through different paths and measuring the time difference

const measureImportTime = async (importPath, description) => {
  const start = performance.now();
  
  try {
    // Use dynamic import to measure actual import resolution time
    await import(importPath);
    const end = performance.now();
    const duration = end - start;
    
    console.log(`${description}: ${duration.toFixed(3)}ms`);
    return duration;
  } catch (error) {
    console.log(`${description}: FAILED - ${error.message}`);
    return null;
  }
};

const runPerformanceComparison = async () => {
  console.log('📊 Measuring import resolution times...\n');
  
  // Test 1: Direct import vs barrel import for string utils
  console.log('🧪 Test 1: String Utils Import Comparison');
  
  const directImportTime = await measureImportTime(
    '../../results/rollup-esm/utils/string-utils.js',
    'Direct import (string-utils.js)'
  );
  
  const barrelImportTime = await measureImportTime(
    '../../results/rollup-esm/index.js', 
    'Barrel import (index.js -> utils/index.js -> string-utils.js)'
  );
  
  if (directImportTime && barrelImportTime) {
    const difference = barrelImportTime - directImportTime;
    const multiplier = (barrelImportTime / directImportTime).toFixed(1);
    
    console.log(`\nPerformance Analysis:`);
    console.log(`  Direct import:    ${directImportTime.toFixed(3)}ms`);
    console.log(`  Barrel import:    ${barrelImportTime.toFixed(3)}ms`);
    console.log(`  Difference:       ${difference.toFixed(3)}ms`);
    console.log(`  Multiplier:       ${multiplier}x ${difference > 0 ? 'slower' : 'faster'}`);
  }
  
  console.log('\n' + '─'.repeat(60));
  
  // Test 2: Multiple measurements for statistical validity
  console.log('\n🧪 Test 2: Multiple Measurements (10 iterations each)\n');
  
  const directTimes = [];
  const barrelTimes = [];
  
  // Warm up the module cache first
  await import('../../results/rollup-esm/utils/string-utils.js');
  await import('../../results/rollup-esm/index.js');
  
  for (let i = 0; i < 10; i++) {
    // Clear module cache to get fresh import times
    const directPath = `../../results/rollup-esm/utils/string-utils.js?v=${Date.now()}-${i}`;
    const barrelPath = `../../results/rollup-esm/index.js?v=${Date.now()}-${i}`;
    
    const directTime = await measureImportTime(directPath, `Direct import #${i + 1}`);
    const barrelTime = await measureImportTime(barrelPath, `Barrel import #${i + 1}`);
    
    if (directTime !== null) directTimes.push(directTime);
    if (barrelTime !== null) barrelTimes.push(barrelTime);
  }
  
  if (directTimes.length > 0 && barrelTimes.length > 0) {
    const avgDirect = directTimes.reduce((a, b) => a + b, 0) / directTimes.length;
    const avgBarrel = barrelTimes.reduce((a, b) => a + b, 0) / barrelTimes.length;
    const avgDifference = avgBarrel - avgDirect;
    const avgMultiplier = (avgBarrel / avgDirect).toFixed(1);
    
    console.log(`\n📊 Statistical Analysis:`);
    console.log(`  Average direct import:  ${avgDirect.toFixed(3)}ms`);
    console.log(`  Average barrel import:  ${avgBarrel.toFixed(3)}ms`);
    console.log(`  Average difference:     ${avgDifference.toFixed(3)}ms`);
    console.log(`  Average multiplier:     ${avgMultiplier}x`);
    
    console.log(`\n📈 Raw Data:`);
    console.log(`  Direct times: [${directTimes.map(t => t.toFixed(3)).join(', ')}]`);
    console.log(`  Barrel times: [${barrelTimes.map(t => t.toFixed(3)).join(', ')}]`);
  }
  
  console.log('\n' + '─'.repeat(60));
};

try {
  await runPerformanceComparison();
  
  console.log('\n🎯 Development Performance Test Conclusions:');
  console.log('1. Import time differences are typically measured in microseconds');
  console.log('2. Modern Node.js module resolution is highly optimized');
  console.log('3. Barrel file overhead exists but may be less dramatic than initially claimed');
  console.log('4. Actual impact varies by system, Node version, and module complexity');
  console.log('\n⚠️  Note: These are import resolution times, not development server reload times');
  console.log('Development servers (Vite, Webpack dev server) may show different characteristics');
  
} catch (error) {
  console.error('\n💥 Test failed:', error.message);
  process.exit(1);
}

process.exit(0);