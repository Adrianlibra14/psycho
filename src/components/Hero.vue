<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div data-aos="fade-down" data-aos-easing="ease-in" data-aos-delay="500" class="hero__animation">
          <h1 class="hero__title">Tu expectativa es el límite</h1>
          <p class="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
        </div>
      </div>

      <div class="main__logo">
        <div data-aos="fade-up" data-aos-easing="ease-in" data-aos-delay="500" class="hero__animation">
          <img
            src="@/assets/logo-psycho.png"
            alt="Logo de psycho"
            class="hero__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {
  height: 540px;
  background-image: linear-gradient(#b0fbff, #fff);
}

.hero__container {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.hero__img {
  width: 520px;
}

.hero__content {
  width: 460px;
  justify-self: center;
}

.hero__title {
  font-size: 3.5rem;
}

.hero__text {
  margin-top: 18px;
  font-size: 1.3rem;
}
</style>