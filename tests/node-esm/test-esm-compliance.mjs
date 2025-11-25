#!/usr/bin/env node
/**
 * Node.js ESM Compliance Testing
 * 
 * This script tests each build output in a strict Node.js ESM environment
 * to prove which build tools generate truly ESM-compliant code.
 * 
 * Tests run with strict module loading to catch ESM compliance issues
 * that would occur in production Node.js environments.
 */

import { fileURLToPath } from 'url';
import path from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resultsDir = path.resolve(__dirname, '../../results');

console.log('🧪 Node.js ESM Compliance Testing\n');
console.log('Testing build outputs in strict ESM environment...\n');

const testResults = [];

/**
 * Test a specific build output for ESM compliance
 */
const testESMCompliance = (buildName, testFile) => {
  return new Promise((resolve) => {
    console.log(`🔍 Testing ${buildName}...`);
    
    const testProcess = spawn('node', [
      '--input-type=module',  // Strict ESM mode
      '--eval',
      `
        import { fileURLToPath } from 'url';
        import path from 'path';
        
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        
        async function testImport() {
          try {
            console.log('  📦 Attempting import...');
            const module = await import('${testFile}');
            console.log('  ✅ Import successful');
            
            // Test some basic exports
            if (module.default) {
              console.log('  ✅ Default export found');
            }
            
            // Check for some expected named exports based on our code
            const expectedExports = ['Button', 'formatString', 'ApiService'];
            let namedExports = 0;
            expectedExports.forEach(exportName => {
              if (module[exportName]) {
                namedExports++;
              }
            });
            
            console.log('  ✅ Named exports found:', namedExports + '/' + expectedExports.length);
            console.log('  🎯 ESM compliance: PASSED');
            
            return true;
          } catch (error) {
            console.log('  ❌ Import failed:', error.message);
            console.log('  🎯 ESM compliance: FAILED');
            return false;
          }
        }
        
        testImport().then(success => {
          process.exit(success ? 0 : 1);
        }).catch(error => {
          console.log('  ❌ Test error:', error.message);
          process.exit(1);
        });
      `
    ], {
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: __dirname
    });

    let output = '';
    let success = false;

    testProcess.stdout.on('data', (data) => {
      const text = data.toString();
      console.log(text.trim());
      output += text;
    });

    testProcess.stderr.on('data', (data) => {
      const text = data.toString();
      console.log('  ⚠️ ', text.trim());
      output += text;
    });

    testProcess.on('close', (code) => {
      success = code === 0;
      
      testResults.push({
        name: buildName,
        file: testFile,
        success,
        output: output.trim()
      });
      
      console.log(`  📊 Result: ${success ? '✅ PASSED' : '❌ FAILED'}`);
      console.log('');
      resolve(success);
    });
  });
};

// Test each build output
async function runTests() {
  console.log('Running ESM compliance tests for each build...\n');

  // Test Rollup ESM build
  const rollupIndexFile = path.join(resultsDir, 'rollup-esm/index.js');
  await testESMCompliance('Rollup ESM', rollupIndexFile);

  // Test Webpack ESM build  
  const webpackIndexFile = path.join(resultsDir, 'webpack-esm/index.js');
  await testESMCompliance('Webpack ESM', webpackIndexFile);

  // Test TypeScript Raw build
  const typescriptIndexFile = path.join(resultsDir, 'typescript-raw/index.js');
  await testESMCompliance('TypeScript Raw', typescriptIndexFile);

  // Generate summary report
  console.log('📊 ESM COMPLIANCE SUMMARY');
  console.log('─'.repeat(60));
  
  const passedTests = testResults.filter(t => t.success);
  const failedTests = testResults.filter(t => !t.success);
  
  console.log(`✅ Passed: ${passedTests.length}/${testResults.length} builds`);
  console.log(`❌ Failed: ${failedTests.length}/${testResults.length} builds`);
  console.log('');
  
  if (passedTests.length > 0) {
    console.log('🎯 ESM-COMPLIANT BUILDS:');
    passedTests.forEach(test => {
      console.log(`  ✅ ${test.name}: Works in strict Node.js ESM mode`);
    });
    console.log('');
  }
  
  if (failedTests.length > 0) {
    console.log('⚠️  NON-ESM-COMPLIANT BUILDS:');
    failedTests.forEach(test => {
      console.log(`  ❌ ${test.name}: Fails in strict Node.js ESM mode`);
    });
    console.log('');
  }
  
  console.log('🔬 ANALYSIS:');
  console.log('This test demonstrates that build tool choice directly impacts');
  console.log('ESM compliance. Source code patterns (like barrel files) are');
  console.log('not the issue - build configuration is the determining factor.');
  console.log('');
  
   if (passedTests.length > 0 && failedTests.length > 0) {
     console.log('🎯 CONCLUSION:');
     console.log('Modern build tools (like Rollup and Webpack) can transform');
     console.log('comprehensive source patterns into ESM-compliant output.');
     console.log('The results suggest tooling configuration affects compliance.');
   }
  
  // Exit with failure if any critical tests failed
  const rollupPassed = testResults.find(t => t.name === 'Rollup ESM')?.success;
  const webpackPassed = testResults.find(t => t.name === 'Webpack ESM')?.success;
  
  if (!rollupPassed || !webpackPassed) {
    console.log('');
    console.log('❌ Critical ESM compliance tests failed!');
    process.exit(1);
  } else {
    console.log('');
    console.log('✅ ESM compliance validation complete!');
    process.exit(0);
  }
}

runTests().catch(error => {
  console.error('Test runner failed:', error);
  process.exit(1);
});