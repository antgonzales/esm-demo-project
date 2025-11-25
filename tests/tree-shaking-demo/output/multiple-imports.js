
    // Import MULTIPLE related functions through barrel files
    import { formatString, formatDate, Button, ApiService } from '/Users/anthonygonzales/development/esm-demo-project/src/index.js';
    
    export const stringResult = formatString('test', 'upper');
    export const dateResult = formatDate(new Date());
    export const ButtonComponent = Button;
    export const service = new ApiService('test-config');
    
    console.log('Multiple imports working');
  