<template>
  <div class="services">
    <div class="services__container">
      <div class="services__title">
        <h2 class="services__title-text">Nuestros servicios</h2>
      </div>
      <div class="services__content">
        <div class="services__card">
          <div class="services__img-container">
            <img
              src="@/assets/mobile-application.png"
              alt=""
              class="services__card-img"
            />
          </div>
          <div class="services__card-content">
            <h2 class="services__card-title">Diseño gráfico</h2>
            <p class="services__card-text">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
        </div>
        <div class="services__card">
          <div class="services__img-container">
            <img
              src="@/assets/web-application.png"
              alt=""
              class="services__card-img"
            />
          </div>
          <div class="services__card-content">
            <h2 class="services__card-title">Copywriter</h2>
            <p class="services__card-text">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
        </div>
        <div class="services__card">
          <div class="services__img-container">
            <img
              src="@/assets/user-interface.png"
              alt=""
              class="services__card-img"
            />
          </div>
          <div class="services__card-content">
            <h2 class="services__card-title">Comunity manager</h2>
            <p class="services__card-text">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.services {
  background-color: var(--primary-color);
}

.services__container {
  padding: 60px 90px;
}

.services__title {
  margin-bottom: 40px;
}

.services__title-text {
  color: var(--light-color);
  font-size: 2.5rem;
  text-align: center;
}

.services__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 31px;
}

.services__card {
  background-color: var(--light-color);
  padding: 52px 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
}

.services__img-container {
    margin-bottom: 40px;
}

.services__card-title {
    margin-bottom: 20px;
}
</style>