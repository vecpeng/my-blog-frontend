<template>
  <div class="bar-container">
    <router-link to="/foo">
      <img src="../assets/index.svg" alt="" />
      <span>主页</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link to="tag">
      <img src="../assets/tag.svg" alt="" />
      <span>标签</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link>
      <img src="../assets/friend_link.svg" alt="" />
      <span>友链</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link>
      <img src="../assets/good.svg" alt="" />
      <span>精选</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link>
      <img src="../assets/about.svg" alt="" />
      <span>关于</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bar-container {
  margin: 12px 0;
  height: 24px;
  background-color: rgb(244, 244, 244, 0.25);
  box-shadow: -20px -20px 60px #ffffff, 15px 25px 40px #d9d9d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  width: 100%;
  color: #333333;
  cursor: pointer;
}

.bar-container:hover {
  width: 111%;
  background: rgb(244, 244, 244);
  transform: scale(0.9);
  color: #111111;
}
img {
  width: 16px;
  height: 16px;
}
</style>