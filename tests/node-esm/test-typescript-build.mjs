#!/usr/bin/env node
/**
 * ESM Compliance Test: TypeScript-Only Build Output
 * 
 * This test demonstrates what happens when you compile comprehensive export patterns
 * with TypeScript alone (without build tools). It should show certain limitations
 * regarding missing .js extensions in imports.
 */

import { strict as assert } from 'assert';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typescriptOutput = path.resolve(__dirname, '../../results/typescript-raw');

console.log('🧪 Testing TypeScript-Only Build Output...\n');
console.log('⚠️  This test is EXPECTED TO FAIL - demonstrating the problem without build tools');

let testsPassed = 0;
let testsTotal = 0;

const runTest = async (testName, testFn) => {
  testsTotal++;
  console.log(`📦 ${testName}...`);
  
  try {
    await testFn();
    testsPassed++;
    console.log(`  ✅ ${testName} passed`);
  } catch (error) {
    console.log(`  ❌ ${testName} failed: ${error.message}`);
  }
};

try {
  // ============================================================================
  // TEST 1: Try to import from TypeScript-compiled output
  // ============================================================================
  await runTest('Test 1: Import from TypeScript output', async () => {
    // This will likely fail due to missing .js extensions
    const tsOutput = await import(`${typescriptOutput}/index.js`);
    
    assert(tsOutput !== undefined, 'TypeScript output should be importable');
    
    const {
      Button,
      Modal,
      formatString,
      formatDate,
      ApiService,
      cache
    } = tsOutput;
    
    assert(Button !== undefined, 'Button should be available');
    assert(Modal !== undefined, 'Modal should be available');
    assert(formatString !== undefined, 'formatString should be available');
    assert(formatDate !== undefined, 'formatDate should be available');
    assert(ApiService !== undefined, 'ApiService should be available');
    assert(cache !== undefined, 'cache should be available');
  });
  
  // ============================================================================
  // TEST 2: Check TypeScript declaration files
  // ============================================================================
  await runTest('Test 2: Check TypeScript declarations', async () => {
    const fs = await import('fs');
    const indexDts = path.join(typescriptOutput, 'index.d.ts');
    
    if (fs.existsSync(indexDts)) {
      const content = fs.readFileSync(indexDts, 'utf-8');
      
      // Check for imports without .js extensions
      const hasProblematicImports = content.includes('from \'./') && !content.includes('.js');
      
      if (hasProblematicImports) {
        console.log('  ⚠️  Found imports without .js extensions (ESM compliance issue)');
        
        // Show examples of imports without extensions
        const lines = content.split('\n');
        const importsWithoutExtensions = lines.filter(line => 
          line.includes('from \'./') && !line.includes('.js\'')
        ).slice(0, 3);
        
        if (importsWithoutExtensions.length > 0) {
          console.log('  📄 Example imports without extensions:');
          importsWithoutExtensions.forEach(line => {
            console.log(`     ${line.trim()}`);
          });
        }
      }
      
      assert(content.length > 0, 'Declaration file should have content');
    } else {
      throw new Error('index.d.ts not found');
    }
  });
  
  // ============================================================================ 
  // TEST 3: Test functionality if imports worked
  // ============================================================================
  await runTest('Test 3: Test functionality', async () => {
    try {
      const tsOutput = await import(`${typescriptOutput}/index.js`);
      const { formatString } = tsOutput;
      
      if (formatString && typeof formatString === 'function') {
        const result = formatString('test', { uppercase: true });
        assert(typeof result === 'string', 'Function should work correctly');
      } else {
        throw new Error('formatString not available or not a function');
      }
    } catch (importError) {
      throw new Error(`Cannot test functionality due to import failure: ${importError.message}`);
    }
  });
  
} catch (error) {
  console.error('\n💥 Unexpected error during TypeScript testing:', error.message);
}

// ============================================================================
// SUMMARY: Show the results
// ============================================================================
console.log('\n📊 TypeScript-Only Build Results:');
console.log(`Tests passed: ${testsPassed}/${testsTotal}`);

if (testsPassed === testsTotal) {
  console.log('\n🤔 Unexpected: TypeScript-only build worked effectively!');
  console.log('This might mean:');
  console.log('- TypeScript version handles imports differently than expected');
  console.log('- The patterns used have better compatibility than initially expected');
  console.log('- Modern TypeScript has improved ESM handling');
} else {
  console.log('\n✅ Expected result: TypeScript-only build shows limitations');
  console.log('This demonstrates why build tools are valuable:');
  console.log('- Missing .js extensions in generated imports');
  console.log('- No tree-shaking optimization');
  console.log('- Limited ESM compliance without additional tooling');
}

console.log('\n🎯 Key Insight:');
console.log('Build tools (Rollup with tsc-alias, Webpack) solve these issues');
console.log('while preserving developer-friendly source code patterns!');

// Always exit successfully since this test is meant to show limitations
process.exit(0);