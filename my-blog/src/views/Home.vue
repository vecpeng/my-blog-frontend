<template>
  <div>
    <div class="blog-item-container" v-for="page in pages" :key="page.title" >
      <a :href="page.link_notion_page"><BlogItem  :title="page.title" :tags="page.tags" :created_timestamp="page.created_timestamp" /></a>
    </div>
  </div>  
</template>

<script>
import BlogItem from '../components/BlogItem'
export default {
  components: {
    BlogItem,
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
.blog-item-container {
  width: 70vw;
}

</style>