<template>
  <Header />
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
 :root {
  --primary-color: #047aed;
  --secondary-color: #1c3fa8;
  --dark-color: #002240;
  --light-color: #f4f4f4;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Lato', sans-serif;
  color: #333;
  line-height: 1.6;
}
</style>
