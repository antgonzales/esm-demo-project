
    // Import ONE function through MULTIPLE barrel file levels:
    // index.ts -> utils/index.ts -> string-utils.ts
    import { formatString } from '/Users/anthonygonzales/development/esm-demo-project/src/index.js';
    
    export const result = formatString('test', 'upper');
    console.log('Single import result:', result);
  