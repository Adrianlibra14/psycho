<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img
          src="@/assets/logo-psycho.png"
          alt="Logo de psycho"
          class="header__img"
        />
      </div>
      <div class="header__elements">
        <nav class="header__item">
          <a href="#why-us" class="header__item-link"
            ><h4 class="header__item-text">Beneficios</h4></a
          >
        </nav>
        <nav class="header__item">
          <a href="#services" class="header__item-link"
            ><h4 class="header__item-text">Servicios</h4></a
          >
        </nav>
        <nav class="header__item">
          <a href="#estadisticas" class="header__item-link"
            ><h4 class="header__item-text">Estadísticas</h4></a
          >
        </nav>
        <nav class="header__item">
          <a href="#opiniones" class="header__item-link"
            ><h4 class="header__item-text">Opiniones</h4></a
          >
        </nav>
        <nav class="header__item">
          <a href="#contacto" class="header__item-link"
            ><h4 class="header__item-text">Contacto</h4></a
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    this.$nextTick(function () {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        });
      });
    });
  },
};
</script>

<style scoped>
.header {
  background-color: #b0fbff;
}

.header__container {
  margin: 0 60px;
  padding: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__img {
  width: 40px;
}

.header__elements {
  display: flex;
  flex-direction: row;
}

.header__item {
  margin: 0 16px;
}

.header__item-link {
  text-decoration: none;
}

.header__item-text {
  color: var(--dark-color);
}
</style>
