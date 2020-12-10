<template>
   <div class="link">
      <a :href="href"><img class="link-img" :src="src" alt="" /></a>
    </div>
</template>

<script>
export default {
 props: {
   href: String,
   src: String,
 }
}
</script>

<style>
.link {
  display: inline-block;
}
img {
  width: 20px;
  height: 20px;
}
</style>