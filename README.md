# ESM Guidelines: Evidence-Based Analysis (2025)

## TL;DR - What You Need to Know

**Traditional ESM guidelines have changed. Modern build tools solve most concerns, but some development performance trade-offs remain.**

### ⚡ Key Findings

| Guideline               | Status                     | Reality                                        |
| ----------------------- | -------------------------- | ---------------------------------------------- |
| "Avoid barrel files"    | ⚠️ **Context-dependent**   | 2-14x slower dev imports, 0% prod penalty      |
| "Avoid default exports" | 🎨 **Personal preference** | Tools handle both patterns identically         |
| "Avoid `export *`"      | ✅ **Largely obsolete**    | Tree-shaking works perfectly (99% elimination) |

### 🎯 Quick Decision Guide

| Use Case                          | Recommendation  | Why                           |
| --------------------------------- | --------------- | ----------------------------- |
| **Frequently imported utilities** | Direct imports  | 2-14x faster development      |
| **Public API/library exports**    | Barrel files OK | Clean interface, 0% prod cost |
| **React components**              | Default exports | Team preference (works great) |

---

## 📊 Performance Evidence

### Development Impact (Measurable)

```bash
Direct import:     0.241ms average
Barrel import:     0.515ms average
Impact:            2.1x slower (14x for cold imports)

🧪 Test: node tests/node-esm/test-development-performance.mjs
```

### Production Impact (Solved)

```bash
Bundle size difference:  0 bytes (barrel vs direct)
Tree-shaking:           99.0% code elimination
Build overhead:         Minimal (0.39s difference)

🧪 Test: cd tests/tree-shaking-demo && node tree-shaking-performance-demo.mjs
```

---

## 🚀 Modern Recommendations

### When to Use Direct Imports

- High-frequency utilities (formatters, validators, helpers)
- Development-focused modules (debugging tools)
- Performance-critical paths (if every millisecond matters)

### When Barrel Files Are Fine

- Public API boundaries (library exports)
- Infrequently imported modules (configs, constants)
- Production-optimized packages (tree-shaking handles it)

### Default Export Guidelines

- **React components**: Widely accepted and functional
- **Utility modules**: Named exports often clearer
- **Team consistency**: Pick one pattern, stick with it

---

## 🧪 Reproduce These Results

```bash
# Clone and install
git clone <this-repo>
pnpm install

# Test development performance
node tests/node-esm/test-development-performance.mjs

# Test tree-shaking effectiveness
cd tests/tree-shaking-demo
node tree-shaking-performance-demo.mjs

# Test default export compatibility
node tests/node-esm/test-default-export-interop.mjs

# Test build tool compliance
pnpm test:esm
```

---

## 🎯 Summary

**The performance bottleneck shifted from production (solved) to development (measurable but minor).**

Modern build tools eliminate production concerns about barrel files and export patterns. The remaining consideration is development import performance - a 2-14x difference measured in milliseconds that may or may not matter for your specific workflow.

**Recommendation**: Measure the actual impact in your codebase and decide based on your team's development experience priorities.

