<template>
  <Header />
  <Hero />
  <WhyUs />
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import WhyUs from './components/WhyUs.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    WhyUs
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

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
  font-family: 'Montserrat', sans-serif;
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
