<template>
  <div class="why-us">
    <div class="why-us__container">
      <div class="why-us__title">
        <h2 class="why-us__title-text">Beneficios de trabajar con nosotros</h2>
      </div>
      <div class="why-us__content">
        <div class="why-us__block">
          <div class="why-us__img-container">
            <img src="@/assets/husos-horarios.png" alt="Logo izquierdo" class="why-us__img" />
          </div>
          <div class="why-us__block-content">
            <h2 class="why-us__block-title">Husos horarios acordes</h2>
            <p class="why-us__block-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et
              sed nam sem tellus erat.
            </p>
          </div>
        </div>
        <div class="why-us__block">
          <div class="why-us__img-container">
            <img src="@/assets/versatilidad.png" alt="Logo izquierdo" class="why-us__img" />
          </div>
          <div class="why-us__block-content">
            <h2 class="why-us__block-title">Trabajamos pensando en la versatilidad</h2>
            <p class="why-us__block-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et
              sed nam sem tellus erat.
            </p>
          </div>
        </div>
        <div class="why-us__block-middle">
          <div class="why-us__img-container">
            <img src="@/assets/reto.png" alt="Logo izquierdo" class="why-us__img" />
          </div>
          <div class="why-us__block-content">
            <h2 class="why-us__block-title">Imposible? Solo un reto más a alcanzar</h2>
            <p class="why-us__block-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et
              sed nam sem tellus erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUs",
};
</script>

<style scoped>
.why-us {
    margin-top: 70px;
}

.why-us__container {
    margin: 90px;
}

.why-us__title {
    width: 500px;
}

.why-us__title-text {
    font-size: 2.5rem;
}

.why-us__content {
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 37px;
}

.why-us__block {
    display: flex;
}

.why-us__block-middle {
    display: flex;
    grid-column: 1/3;
    justify-self: center;
    width: 500px;
}

.why-us__img-container {
    align-self: center;
    margin-right: 42px;
}
</style>