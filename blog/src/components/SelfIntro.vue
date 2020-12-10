<template>
  <div class="self-intro-container">
    <div class="self-container">
      <div class="self-flex">
        <img class="self-avatar" src="../assets/avatar.jpg" alt="" />
      <div class="my-container">
        <div class="name">vecpeng</div>
        <div class="desc">一个喜欢瞎折腾的前端工程师</div>
      </div>
      </div>
    </div>
     <div class="self-contact-link">
      <Link :href="'https://github.com/vecpeng'" :src="srcList[0]" />
      <Link :href="'vecpeng.com'" :src="srcList[1]" />
      <Contact :contactSrc="srcList[2]" :contactStr="'841298391cp@gmail.com'"/>
      <Contact :contactSrc="srcList[3]" :contactStr="'841298391'"/>        
      <Contact :contactSrc="srcList[4]" :contactStr="'cp841298391cp'"/>
    </div>
    <Border />
    
  </div>
</template>

<script>
import Contact from "../components/Contact";
import Link from "../components/Link";
import Border from "../components/Border";
export default {
  components: {
    Contact,
    Link,
    Border,
  },
  setup() {
    const src = '../assets/avatar.jpg'
    const srcList = [
      require('../assets/github.svg'),
      require('../assets/blog.svg'),
      require('../assets/gmail.svg'),
      require('../assets/qq.svg'),
      require('../assets/wechat.svg'),
      ];
    return {
      src,
      srcList,
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 720px) {
  
}
.self-intro-container {
}

.self-container {
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  overflow: hidden;
  height: 100px
}

.self-flex {
  text-align: center;
}

.self-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.name {
  font-size: 12px;
  font-weight: 700;
}

.desc {
  font-size: 12px;
  color: #999999;
}

.self-contact-link {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  height: 40px;
}
</style>