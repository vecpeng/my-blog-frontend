<template>
<div>
  <div class="bar-container">
    <router-link to="/home">
      <img src="../assets/image/index.svg" alt="" />
      <span>主页</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link to="/tag">
      <img src="../assets/image/tag.svg" alt="" />
      <span>标签</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link to="/friend-link">
      <img src="../assets/image/friend_link.svg" alt="" />
      <span>友链</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link to="/good">
      <img src="../assets/image/good.svg" alt="" />
      <span>精选</span>
    </router-link>
  </div>
  <div class="bar-container">
    <router-link to="/about">
      <img src="../assets/image/about.svg" alt="" />
      <span>关于</span>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.bar-container {
  margin: 12px 0;
  height: 48px;
  background-color:e9ecef;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  width: 100%;
  color: #333333;
  cursor: pointer;

  span {
    color: #999999;
  }

  img {
    position: relative;
    top: 2px;
    left: -4px;
  }
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