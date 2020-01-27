<template>
  <div id="app">
    <AppLayout>
      <Header></Header>

      <section id="galleries">
        <!-- Photo Galleries -->
        <div class="gallery">
          <!-- Filters -->
          <header>
            <h1>Gallery</h1>
            <ul class="tabs">
              <li>
                <a href="javascript:;" data-tag="all" class="button active">All</a>
              </li>
              <li>
                <a href="javascript:;" data-tag="people" class="button">People</a>
              </li>
              <li>
                <a href="javascript:;" data-tag="place" class="button">Places</a>
              </li>
              <li>
                <a href="javascript:;" data-tag="thing" class="button">Things</a>
              </li>
            </ul>
          </header>

          <div class="content">
            <div class="media all people">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/01.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all place">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/05.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all thing">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/09.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all people">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/02.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all place">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/06.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all thing">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/10.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all people">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/03.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all place">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/07.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all thing">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/11.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all people">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/04.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all place">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/08.jpg" alt title="This right here is a caption." />
              </a>
            </div>
            <div class="media all thing">
              <a href="javascript:;">
                <img src="@/assets/theme/images/thumbs/12.jpg" alt title="This right here is a caption." />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <Contact></Contact>
    </AppLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import AppLayout from "@/components/Layout/AppLayout.vue";
import Header from "@/components/Layout/Header.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Gallery",
  components: {
    AppLayout,
    Header,
    Contact
  }
};
</script>