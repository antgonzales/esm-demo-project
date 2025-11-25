
    // Import EVERYTHING to see maximum bundle size
    import * as everything from '/Users/anthonygonzales/development/esm-demo-project/src/index.js';
    
    export const allImports = everything;
    console.log('All imports:', Object.keys(everything).length, 'exports');
  