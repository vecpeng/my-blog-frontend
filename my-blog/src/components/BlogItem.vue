<template>
  <div class="blog-item">
    <span class="page-title">{{title}}</span>
    <div class="page-tags">
      <span  v-for="(tag, index) in tags" :key="index" class="page-tag-item">{{tag}}</span>
    </div>
    <span class="page-created-timestamp">{{created_timestamp}}</span>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: String,
    tags: Array,
    created_timestamp: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 定义变量 */
   html{
      --bgColor: #ffffff;
    background: #f3f3f3;
    --whiteShadow: -20px -20px 60px #ffffff;
    --blackShadow: 15px 25px 40px #d9d9d9;
    }
   
  .blog-item {
    width: 70%;
    height: 160px;
    background-color: transparent;
     box-shadow: 5px 5px 10px #aaa, -5px -5px 10px #fff;
    position: relative;
    cursor: pointer;
    border-radius: 20px;
    padding-left:  20px;
  }

  .blog-item:hover {
    box-shadow: none;
    transition: all 0.25s ease;
    box-shadow: 3px 3px 6px #aaa inset, -5px -5px 10px #fff inset;
    opacity: 0.8;
    transform: scale(0.98);
    height: 160px;
  }
  .page-title {
    margin: 20px 0 0 20px;
    font-size: 28px;
    text-align: left;
    color: #393146;
    font-weight: bold;
    display: inline-block;
  }
  .page-tags {
    margin: 20px 0;
    font-size: 16px;
    font-weight: 400;
  }
  .page-tag-item {
    width: 60px;
    height: 40px;
    padding: 4px 16px;
    margin: 0 20px;
    border-radius: 20px;
    color:#fdc27a;
background: rgb(255, 228, 192);
background: rgb(219, 219, 219, 0.25);
box-shadow:  4px 4px 10px rgb(224, 219, 219), 
             -4px -4px 10px rgb(253, 253, 253);
            
  }
  .page-created-timestamp {
    color: #999999;
    position: absolute;
    right: 20px;
  }
</style>
