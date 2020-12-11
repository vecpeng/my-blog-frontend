<template>
  <div>
    <div class="self-intro-container">
      <div class="self-container">
        <div class="self-flex">
          <img class="self-avatar" src="../assets/image/avatar.jpg" alt="" />
          <div class="my-container">
            <div class="name">vecpeng</div>
            <div class="desc">一个喜欢瞎折腾的前端工程师</div>
          </div>
        </div>
      </div>
      <div class="self-contact-link">
        <Link :href="'https://github.com/vecpeng'" :src="srcList[0]" />
        <Link :href="'vecpeng.com'" :src="srcList[1]" />
        <Contact
          :contactSrc="srcList[2]"
          :contactStr="'841298391cp@gmail.com'"
        />
        <!-- <Contact :contactSrc="srcList[3]" :contactStr="'841298391'"/>        
      <Contact :contactSrc="srcList[4]" :contactStr="'cp841298391cp'"/> -->
      </div>
      <Border />
    </div>
    <div>
      <router-link to="/home">
        <div class="bar-container">
          <img src="../assets/image/index.svg" alt="" />
          <span>主页</span>
        </div>
      </router-link>
      <router-link to="/tag">
        <div class="bar-container">
          <img src="../assets/image/tag.svg" alt="" />
          <span>标签</span>
        </div>
      </router-link>
      <router-link to="/friend-link">
        <div class="bar-container">
          <img src="../assets/image/friend_link.svg" alt="" />
          <span>友链</span>
        </div>
        </router-link>
      <router-link to="/good">
        <div class="bar-container">
          <img src="../assets/image/good.svg" alt="" />
          <span>精选</span>
        </div></router-link
      >
      <router-link to="/about">
        <div class="bar-container">
          <img src="../assets/image/about.svg" alt="" />
          <span>关于</span>
        </div>
      </router-link>
    </div>
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
    const src = "../assets/image/avatar.jpg";
    const srcList = [
      require("../assets/image/github.svg"),
      require("../assets/image/blog.svg"),
      require("../assets/image/gmail.svg"),
      require("../assets/image/qq.svg"),
      require("../assets/image/wechat.svg"),
    ];
    return {
      src,
      srcList,
    };
  },
};
</script>

<style lang="scss" scoped>
.bar-container {
  margin: 12px 0;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  color: #333333;
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
  }

  span {
    color: #999999;
  }

  img {
    position: relative;
    top: -2px;
    left: -8px;
  }
}

.bar-container:hover {
  width: 111%;
  padding-left: 1%;
  background: #eeeeee;
  color: #111111;
}

.bar-container:active {
  transform: scale(0.9);;
}

img {
  width: 16px;
  height: 16px;
}

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
  height: 100px;
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
  color: #fff;
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