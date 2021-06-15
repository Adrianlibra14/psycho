<template>
  <div class="opiniones" id="opiniones">
    <div class="opiniones__container">
      <div data-aos="fade-right" class="opiniones__animation">
        <div class="opiniones__title">
          <h1 class="opiniones__title-text">Opinión de nuestros clientes</h1>
          <p class="opiniones__paragraph-text">
            Feedback from these happy customers helps us in reaching the heights
          </p>
        </div>
      </div>
      <div class="opiniones__clientes">
        <div class="opiniones__comillas">
          <img
            src="@/assets/comillas-opinion.png"
            alt="Imagen de comillas"
            class="opiniones__comillas-img"
          />
        </div>
        <div data-aos="fade-up" class="opiniones__animation">
          <div class="opiniones__avatar">
            <img
              src="@/assets/avatar-opinion.png"
              alt="Imagen del avatar"
              class="opiniones__avatar-img"
            />
            <div class="opiniones__name-container">
              <h3 class="opiniones__avatar-name">Jenny Wilson</h3>
              <h4 class="opiniones__avatar-name-subtitle">Vice Presdiente</h4>
            </div>
          </div>
          <div class="opiniones__clientes-text">
            <p class="opiniones__clientes-paragraph">
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              It acted as a catalyst to take our design to the next level and
              get more eyes on our product.
            </p>
            <div class="opiniones__clientes-brand">
              <img
                src="@/assets/marca-opinion.png"
                alt=""
                class="opiniones__clientes-brand-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opiniones",
};
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  color: var(--secondary-color);
}

p {
  color: var(--light-color);
}

.opiniones {
  background-color: var(--primary-color);
}

.opiniones__container {
  display: grid;
  padding: 90px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
}

.opiniones__title {
  width: 400px;
}

.opiniones__comillas {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 24px;
}

.opiniones__avatar {
  display: flex;
  flex-direction: row;
  margin-bottom: 34px;
}

.opiniones__avatar-img {
  width: 60px;
  object-fit: contain;
  margin-right: 16px;
}

.opiniones__clientes-paragraph {
  margin-bottom: 52px;
}

.opiniones__clientes-brand-img {
  width: 182px;
}
</style>