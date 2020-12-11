<template>
  <div class="tags-container">
    <div class="tags-item" v-for="tag in tags" :key="tag.name">
      <div class="name">
        {{tag.name}}
      </div>
      <div class="num">{{tag.num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const tags = [
      {
        name: "javaScript",
        num: 0,
      },
      {
        name: "CSS",
        num: 0,
      },
      {
        name: "ES6",
        num: 0,
      },
    ];

    return { tags };
  },
};
</script>

<style lang="scss" scoped>

.tags-container {
  width: 80vw;
}
.tags-item {
  display: inline-block;
  border-radius: 16px;
  font-size: 12px;
  padding: 4px 25px;
  background: transparent;
  color: #fdc27a;
  box-shadow: 5px 5px 10px #aaa, -5px -5px 10px #fff;

  .name, .num {
    display: inline-block;
  }

  .num {
    color: #FDC27A;
    margin-left: 6px;
  }
}
</style>