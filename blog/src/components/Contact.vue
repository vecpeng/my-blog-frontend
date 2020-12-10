<template>
  <div class="contact">
    <img :src="contactSrc" @click="copy(contactStr)" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    contactSrc: String,
    contactStr: String,
  },
  setup() {
    const copy = (contactStr) => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', contactStr);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        alert('复制成功');
        document.s
      }
    }
    return {
      copy,
    }
  }
}
</script>

<style>
  .contact {
    display: inline-block;
    cursor: pointer;
  }
</style>
