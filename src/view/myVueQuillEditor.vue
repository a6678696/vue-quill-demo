<template>
  <QuillEditor
    v-model:content="content"
    placeholder="这里输入商品详情..."
    theme="snow"
    ref="editor"
    toolbar="full"
    contentType="html"
    :modules="modules"
    style="height: 300px"
  />
  双向绑定: <input type="text" v-model="content" style="width: 666px" /><br />
  设置值:
  <input
    type="text"
    v-model="setContentInputValue"
    style="width: 666px"
  />&nbsp;<button @click="setContent">设置</button><br />
  获取值:
  <input
    type="text"
    v-model="getContentInputValue"
    style="width: 666px"
  />&nbsp;<button @click="getContent">获取</button>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import ImageUploader from "quill-image-uploader";
import BlotFormatter from "quill-blot-formatter";

const content = ref("");
const editor = ref(null);
const setContentInputValue = ref("");
const getContentInputValue = ref("");
const modules = [
  {
    name: "imageUploader",
    module: ImageUploader,
    options: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);
          let url = "http://localhost:8080/goods/vueQuillUploadImage";
          axios
            .post(url, formData)
            .then((res) => {
              console.log(res);
              resolve(res.data.url);
            })
            .catch((err) => {
              reject("Upload failed");
              console.error("Error:", err);
            });
        });
      },
    },
  },
  {
    name: "BlotFormatter",
    module: BlotFormatter,
    options: {
      overlay: {
        style: {
          border: "2px solid red",
        },
      },
    },
  }
];

const setContent = () => {
  editor.value.setHTML(setContentInputValue.value);
};
const getContent = () => {
  getContentInputValue.value = editor.value.getHTML();
};
</script>
<style scoped>
</style>
