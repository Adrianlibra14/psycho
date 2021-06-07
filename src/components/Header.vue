<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/logo-psycho.png" alt="Logo de psycho" class="header__img" />
      </div>
      <div class="header__elements">
        <nav class="header__item">
          <h4 class="header__item-text">Beneficios</h4>
        </nav>
        <nav class="header__item">
          <h4 class="header__item-text">Servicios</h4>
        </nav>
        <nav class="header__item">
          <h4 class="header__item-text">Estadísticas</h4>
        </nav>
        <nav class="header__item">
          <h4 class="header__item-text">Opiniones</h4>
        </nav>
        <nav class="header__item">
          <h4 class="header__item-text">Contacto</h4>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

.header{
  margin: 0 60px;
}

.header__container {
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
</style>
