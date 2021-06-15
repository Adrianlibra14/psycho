<template>
    <div class="footer">
        <div class="footer__container">
            <p class="footer__text">© 2021 Psycho. All rights reserved | Powered by Digital Newton Networks</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    background-color: var(--dark-color);
}

.footer__container {
    padding: 40px;
    display: flex;
    justify-content: center;
}

.footer__text {
    color: var(--light-color);
}
</style>