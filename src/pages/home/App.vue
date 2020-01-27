<template>
  <div id="app">
    <AppLayout>
      <!-- Banner -->
      <section id="banner">
        <div class="inner">
          <h1>Hey, I'm Snapshot</h1>
          <p>
            A fully responsive gallery template by
            <a href="https://templated.co">TEMPLATED</a>
          </p>
          <ul class="actions">
            <li>
              <a href="#galleries" class="button alt scrolly big">Continue</a>
            </li>
          </ul>
        </div>
      </section>

      <!-- Gallery -->
      <section id="galleries">
        <!-- Photo Galleries -->
        <div class="gallery">
          <header class="special">
            <h2>What's New</h2>
          </header>
          <div class="content">
            <div class="media">
              <a href="@/assets/theme/images/fulls/01.jpg">
                <img
                  src="@/assets/theme/images/thumbs/01.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/05.jpg">
                <img
                  src="@/assets/theme/images/thumbs/05.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/09.jpg">
                <img
                  src="@/assets/theme/images/thumbs/09.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/02.jpg">
                <img
                  src="@/assets/theme/images/thumbs/02.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/06.jpg">
                <img
                  src="@/assets/theme/images/thumbs/06.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/10.jpg">
                <img
                  src="@/assets/theme/images/thumbs/10.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/03.jpg">
                <img
                  src="@/assets/theme/images/thumbs/03.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div class="media">
              <a href="@/assets/theme/images/fulls/07.jpg">
                <img
                  src="@/assets/theme/images/thumbs/07.jpg"
                  alt
                  title="This right here is a caption."
                />
              </a>
            </div>
          </div>
          <footer>
            <a href="gallery.html" class="button big">Full Gallery</a>
          </footer>
        </div>
      </section>

      <!-- Contact -->
      <Contact></Contact>

      <!-- <Select2>
        <option>A</option>
        <option>B</option>
      </Select2> -->
    </AppLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import AppLayout from "@/components/Layout/AppLayout.vue";
import Contact from "@/components/Contact.vue";
// import Select2 from "@/components/Select2.vue";

export default {
  name: "Home",
  components: {
    AppLayout,
    Contact,
    // Select2
  },
  created() {
    // console.log(this.$_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
  }
};
</script>