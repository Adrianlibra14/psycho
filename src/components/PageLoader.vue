<template>
  <transition name="fade">
    <div class="page-loader" v-if="!isloaded">
      <div class="page-loader__container">
        <img
          src="@/assets/logo-psycho.png"
          alt="Logo de psycho"
          class="page-loader__logo"
        />
        <div class="page-loader__circles-container">
          <span class="page-loader__circles page-loader__circles-1"></span
          ><span class="page-loader__circles page-loader__circles-2"></span
          ><span class="page-loader__circles page-loader__circles-3"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PageLoader",
  data() {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = setTimeout(() => {
      if (document.readyState == "complete") {
        this.isloaded = true;
        document.body.style.overflow = "auto";
      }
    }, 3500);
  },
};
</script>

<style scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-color);
}

.page-loader__container {
  display: flex;
  flex-direction: column;
}

.page-loader__logo {
  width: 110px;
  margin-bottom: 34px;
  animation: bounce 0.8s infinite alternate;
}

.page-loader__circles {
  display: inline-block;
  background-color: var(--primary-color);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 8px;
  transform: translate3d(0);
  animation: bounce 0.6s infinite alternate;
}

.page-loader__circles-1 {
  animation-delay: 0.2s;
}

.page-loader__circles-2 {
  background-color: var(--secondary-color);
  animation-delay: 0.4s;
}

.page-loader__circles-3 {
  animation-delay: 0.6s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounce {
  to {
    transform: translate3d(0, -16px, 0);
  }
}
</style>