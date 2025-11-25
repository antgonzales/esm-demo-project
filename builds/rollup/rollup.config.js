import path from "node:path";
import { fileURLToPath } from "node:url";

import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { replaceTscAliasPaths } from "tsc-alias";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensions = [".ts", ".tsx", ".js", ".json"];
const srcDir = path.resolve(__dirname, "../../src");
const outDir = path.resolve(__dirname, "../../results/rollup-esm");

/**
 * Rollup configuration for ESM output with proper TypeScript declaration handling
 * This configuration demonstrates that barrel files and export * work effectively with proper tooling
 * @type {import('rollup').RollupOptions}
 */
const rollupConfig = {
  input: path.join(srcDir, "index.ts"),
  
  output: {
    dir: outDir,
    format: "esm", // Pure ESM output
    preserveModules: true, // Keep module structure for better tree-shaking
    preserveModulesRoot: srcDir,
    sourcemap: true,
    // Use .js extensions in output (ESM requirement)
    entryFileNames: '[name].js',
    chunkFileNames: '[name]-[hash].js'
  },

  // Mark React as external since this is a library demo
  external: [
    /^react/,
    /^@babel/,
    /^core-js/
  ],

  plugins: [
    // Resolve TypeScript path mapping (if any existed)
    alias({
      entries: [
        { find: '@', replacement: srcDir }
      ]
    }),

    // Compile TypeScript to JavaScript and generate declarations
    typescript({
      tsconfig: path.join(__dirname, "tsconfig.json"),
      outDir: outDir,
      declaration: true,
      declarationMap: true,
      rootDir: srcDir,
      exclude: ["**/*.test.*", "**/*.spec.*"]
    }),

    // Resolve node modules
    resolve({
      browser: false,
      extensions,
      preferBuiltins: true
    }),

    // Handle CommonJS modules
    commonjs(),

    // Transpile for broader compatibility  
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        ["@babel/preset-env", { 
          modules: false, // Keep ESM modules
          targets: { node: "18" }
        }],
        "@babel/preset-typescript"
      ]
    }),

    // CRITICAL: Use tsc-alias to fix TypeScript declaration imports with .js extensions
    // This is the key fix that makes our comprehensive barrel files ESM-compliant
    {
      name: "tscAliasESMFix",
      closeBundle() {
        console.log("🔧 Fixing TypeScript declarations for ESM compliance...");
        return replaceTscAliasPaths({
          outDir: outDir,
          verbose: true,
          resolveFullPaths: true, // Resolve relative paths
          resolveFullExtension: '.js' // Add .js extensions to imports
        }).then(() => {
          console.log("✅ ESM compliance fix complete! TypeScript declarations now have .js extensions");
        });
      }
    }
  ]
};

export default rollupConfig;