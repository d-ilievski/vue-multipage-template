
<template>
  <nav id="nav">
    <ul>
      <li>
        <a href="/home" :class="{'active':this.$route.name == 'home'}">
          <span class="icon fa-home"></span>
        </a>
      </li>
      <li>
        <a href="gallery" :class="{'active':this.$route.name == 'gallery'}">
          <span class="icon fa-camera-retro"></span>
        </a>
      </li>
      <li>
        <a href="/about" :class="{'active':this.$route.name == 'about'}">
          <span class="icon fa-file-text-o"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
</style>