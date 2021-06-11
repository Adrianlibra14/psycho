<template>
  <Header />
  <Hero />
  <WhyUs />
  <Services />
  <Estadisticas />
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import WhyUs from './components/WhyUs.vue';
import Services from './components/Services.vue';
import Estadisticas from './components/Estadisticas.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    WhyUs,
    Services,
    Estadisticas
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

 :root {
  --primary-color: #360E98;
  --secondary-color: #01EFFB;
  --dark-color: #18191F;
  --light-color: #f4f4f4;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Inter', sans-serif;
  color: #333;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--primary-color);
}

p {
  color: var(--dark-color);
}
</style>
