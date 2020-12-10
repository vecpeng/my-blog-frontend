<template>
  <div class="container">
    <Side class="side" />
    <div class="blog-item-container" v-for="page in pages" :key="page.title" >
      <a :href="page.link_notion_page"><BlogItem  :title="page.title" :tags="page.tags" :created_timestamp="page.created_timestamp" /></a>
    </div>
  </div>
</template>

<script>
import BlogItem from './components/BlogItem'
import Side from './components/Side'
export default {
  name: 'App',
  components: {
    BlogItem,
    Side,
  },
  setup() {
    const pages = [{
      title: "promise详解",
      tags: [
        "javaScript",
        "ES6",
      ],
      created_timestamp: "2020-10-13 10:20",
      link_notion_page: "https://www.notion.so/promise-37688dd79bf94b1b9424524e2c9a7efb"
    }]
    return {pages}
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between;
}

.side {
  height: 100vh;
  width: 20%;
  background: #f2f3f2;
  border-right: 2px solid #ffffff;
}

a {
  text-decoration: none;
}

.blog-item-container {
  width: 70%;
  margin-top: 30px;
}
</style>
