import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, "../../src");
const outDir = path.resolve(__dirname, "../../results/webpack-esm");

/**
 * Webpack configuration for ESM output
 * This configuration demonstrates that modern webpack can handle comprehensive export patterns
 * and generate clean ESM output with tree-shaking
 */
export default {
  mode: "production",
  
  entry: {
    index: path.join(srcDir, "index.ts")
  },
  
  output: {
    path: outDir,
    filename: "[name].js",
    chunkFilename: "[name]-[contenthash].js",
    clean: true,
    // ESM output configuration
    library: {
      type: "module"
    },
    environment: {
      module: true,
      dynamicImport: true
    },
    module: true,
    chunkFormat: "module"
  },
  
  // Enable ESM experiments
  experiments: {
    outputModule: true
  },
  
  // Mark React as external for library builds
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": srcDir
    },
    // Allow imports without extensions
    fullySpecified: false
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { 
                  modules: false, // Preserve ESM modules for tree-shaking
                  targets: {
                    node: "18"
                  }
                }],
                ["@babel/preset-react", {
                  runtime: "automatic" // Use new JSX transform
                }],
                "@babel/preset-typescript"
              ]
            }
          }
        ]
      }
    ]
  },
  
  optimization: {
    // Enable tree-shaking to demonstrate barrel files maintain good performance
    usedExports: true,
    sideEffects: false,
    
    // Split chunks for better caching
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  
  // Generate source maps for debugging
  devtool: "source-map",
  
  // Suppress webpack warnings about ESM experiments
  ignoreWarnings: [
    {
      module: /experiments/
    }
  ]
};