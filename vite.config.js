import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入path模块,用来设置路径别名
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8888,
    open: true
  },
  resolve: {
    //配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
