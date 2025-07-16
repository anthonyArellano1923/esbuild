require("esbuild").build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: "dist/bundle.js",
  define: {
    "process.env.NODE_ENV": "\"development\""
  }
}).catch(() => process.exit(1))