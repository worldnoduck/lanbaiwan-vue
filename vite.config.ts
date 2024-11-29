import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  resolve: {
    alias: {
      '@':path.resolve(__dirname, 'src'),
          },
  },
  build: {
    outDir: './dist', // 定义输出目录
    // sourcemap: true, // 是否生成 sourcemap 文件
    // 其他构建选项
  },
 
  server: {
    port: 3000, // 更改开发服务器的端口
    open: true, // 启动时自动打开浏览器
    
  },

})
