<template>
  <div class="container">
    <Side class="side" />
    <router-view></router-view>
  </div>
</template>

<script>
import Side from './components/Side'
export default {
  name: 'App',
  components: {
    Side,
  },
  setup() {
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
  background: #eeeeee;
}

.side {
  height: 100vh;
  width: 20%;
  max-width: 220px;
  background: #f8f9fa;
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
