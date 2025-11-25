#!/usr/bin/env node
/**
 * ESM Compliance Test: Rollup Build Output
 * 
 * This test validates that our Rollup build transforms "problematic" patterns
 * into ESM-compliant code that works in strict Node.js ESM mode.
 */

import { strict as assert } from 'assert';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rollupOutput = path.resolve(__dirname, '../../results/rollup-esm');

console.log('🧪 Testing Rollup ESM Build Output...\n');

try {
  // ============================================================================
  // TEST 1: Import from main barrel file (deepest "problematic" pattern)
  // ============================================================================
  console.log('📦 Test 1: Importing from main barrel file...');
  
  // This import tests the deepest possible re-export chain:
  // index.js -> components/index.js -> Button/index.js -> Button.tsx
  const { 
    Button, 
    Modal, 
    formatString, 
    formatDate, 
    ApiService, 
    cache,
    app,
    allComponents,
    Components,
    Utils,
    Services
  } = await import(`${rollupOutput}/index.js`);
  
  console.log('  ✅ Main barrel file imports successful');
  
  // ============================================================================
  // TEST 2: Verify all imports are correctly typed and functional
  // ============================================================================
  console.log('📦 Test 2: Validating imported functionality...');
  
  assert(typeof Button === 'function', 'Button should be a function/component');
  assert(typeof Modal === 'function', 'Modal should be a function/component');
  assert(typeof formatString === 'function', 'formatString should be a function');
  assert(typeof formatDate === 'function', 'formatDate should be a function');
  assert(typeof ApiService === 'function', 'ApiService should be a constructor function');
  assert(typeof cache === 'object', 'cache should be an object');
  assert(typeof app === 'object', 'app should be an object');
  assert(typeof allComponents === 'object', 'allComponents should be an object');
  assert(typeof Components === 'object', 'Components namespace should be an object');
  assert(typeof Utils === 'object', 'Utils namespace should be an object');
  assert(typeof Services === 'object', 'Services namespace should be an object');
  
  console.log('  ✅ All imports have correct types');
  
  // ============================================================================
  // TEST 3: Test complex re-export patterns work correctly
  // ============================================================================
  console.log('📦 Test 3: Testing complex re-export patterns...');
  
  // Test that we can import the same thing multiple ways (barrel file flexibility)
  const { Button: ButtonDirect } = await import(`${rollupOutput}/components/index.js`);
  const { Button: ButtonFromButton } = await import(`${rollupOutput}/components/Button/index.js`);
  
  assert(Button === ButtonDirect, 'Button imports should be identical (re-export chain works)');
  assert(Button === ButtonFromButton, 'Direct and barrel imports should be identical');
  
  console.log('  ✅ Complex re-export patterns work correctly');
  
  // ============================================================================
  // TEST 4: Test utility functions work correctly
  // ============================================================================
  console.log('📦 Test 4: Testing utility functions...');
  
  const formattedString = formatString('  test string  ', { trim: true, uppercase: true });
  assert(formattedString === 'TEST STRING', 'String formatting should work correctly');
  
  const formattedDate = formatDate(new Date('2023-12-25'), 'short');
  assert(typeof formattedDate === 'string', 'Date formatting should return string');
  
  console.log('  ✅ Utility functions work correctly');
  
  // ============================================================================
  // TEST 5: Test service classes work correctly
  // ============================================================================
  console.log('📦 Test 5: Testing service classes...');
  
  const apiInstance = new ApiService({
    baseUrl: 'https://test.example.com',
    timeout: 5000
  });
  
  assert(apiInstance instanceof ApiService, 'ApiService should be instantiable');
  assert(typeof cache.set === 'function', 'Cache should have set method');
  assert(typeof cache.get === 'function', 'Cache should have get method');
  
  console.log('  ✅ Service classes work correctly');
  
  // ============================================================================
  // TEST 6: Test namespace imports work (export * as patterns)
  // ============================================================================
  console.log('📦 Test 6: Testing namespace imports...');
  
  assert(typeof Components.Button === 'function', 'Namespace import should work');
  assert(typeof Utils.formatString === 'function', 'Utility namespace import should work');
  assert(typeof Services.ApiService === 'function', 'Services namespace import should work');
  
  console.log('  ✅ Namespace imports work correctly');
  
  console.log('\n🎉 Rollup ESM Build: ALL TESTS PASSED!');
  console.log('✅ Barrel files work perfectly with Rollup + tsc-alias');
  console.log('✅ export * patterns are ESM-compliant when built correctly');
  console.log('✅ Mixed default/named exports work flawlessly');
  console.log('✅ Deep re-export chains cause no ESM issues');
  
} catch (error) {
  console.error('\n❌ Rollup ESM Build: TEST FAILED!');
  console.error('Error:', error.message);
  console.error('\nThis indicates that the build configuration needs adjustment.');
  console.error('Stack trace:', error.stack);
  process.exit(1);
}