<template>
  <div class="page-wrap">
    <Sidebar></Sidebar>
    <section id="main">
      <slot></slot>
      <!-- Footer -->
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "AppLayout",
  components: {
    Sidebar,
    Footer
  },
  props: {}
};
</script>