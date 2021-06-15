<template>
  <PageLoader @loaded="loaded"/>
  <div class="container" v-if="isloaded">
    <Header />
    <Hero />
    <WhyUs />
    <Services />
    <Estadisticas />
    <Opiniones />
    <Contacto />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import WhyUs from "./components/WhyUs.vue";
import Services from "./components/Services.vue";
import Estadisticas from "./components/Estadisticas.vue";
import Opiniones from "./components/Opiniones.vue";
import Contacto from "./components/Contacto.vue";
import Footer from "./components/Footer.vue";
import PageLoader from "./components/PageLoader.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    WhyUs,
    Services,
    Estadisticas,
    Opiniones,
    Contacto,
    Footer,
    PageLoader,
  },
  data() {
    return {
      isloaded: false
    };
  },
  methods: {
    loaded(isloaded) {
      this.isloaded = isloaded;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');

:root {
  --primary-color: #360e98;
  --secondary-color: #01effb;
  --dark-color: #18191f;
  --light-color: #f4f4f4;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #333;
  line-height: 1.6;
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: var(--primary-color);
}

p {
  color: var(--dark-color);
}

.display-none {
  display: none;
}
</style>
