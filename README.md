### 介绍

本项目是使用VueQuill富文本编辑器的例子

实现了VueQuill的引入包括将HTML内容设置给VueQuill（VueQuill在当前版本无法进行数据的双向绑定）、实现图片上传到后端服务器、实现图片的缩放

后端上传图片代码使用Java实现，具体代码看下面贴出的博客

### 使用的技术

```json
{
  "name": "vue-quill-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vueup/vue-quill": "^1.0.0",
    "axios": "^1.2.1",
    "quill-blot-formatter": "^1.0.5",
    "quill-image-uploader": "^1.2.3",
    "vue": "^3.2.45",
    "vue-router": "^4.1.6"
  },
  "devDependencies": {
    "@types/node": "^18.11.16",
    "@vitejs/plugin-vue": "^4.0.0",
    "vite": "^4.0.0"
  }
}
```

### 博客教程

[Vue.js3.2 引入 VueQuill 富文本编辑器 | LeDao's Blog (zoutl.cn)](https://blog.zoutl.cn/545.html)

[Spring Boot 实现 VueQuill 富文本编辑器上传图片到服务器 | LeDao's Blog (zoutl.cn)](https://blog.zoutl.cn/546.html)

[VueQuill 富文本编辑器实现图片的缩放 | LeDao's Blog (zoutl.cn)](https://blog.zoutl.cn/547.html)

### 效果GIF图

![1](https://user-images.githubusercontent.com/45851356/208294462-b311a62c-2f82-4f0e-9ce9-699bdd8ab4ad.gif)
