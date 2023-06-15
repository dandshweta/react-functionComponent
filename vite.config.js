import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.Layout"],
});
// module.exports = {
//   // Other configuration options...
//   assetsInclude: ["**/*.Layout"],
// };
