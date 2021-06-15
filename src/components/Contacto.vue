<template>
    <div class="contacto" id="contacto">
        <div class="contacto__container">
            <h1 class="contacto__title">Contáctanos</h1>
            <div class="contacto__content">
                <div class="contacto__simbolo">
                    <img src="@/assets/gmail.png" alt="Imagen de email" class="contacto__simbolo-img">
                </div>
                <hr class="contacto__divider">
                <div class="contacto__simbolo">
                    <img src="@/assets/instagram.png" alt="Imagen de email" class="contacto__simbolo-img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contacto"
}
</script>

<style scoped>
.contacto {
    background-image: url('../assets/fondo-curvas.png');
    background-color: var(--secondary-color);
}

.contacto__container {
    padding: 60px;
}

.contacto__title {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
}

.contacto__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}

.contacto__divider {
    border: 1px solid var(--primary-color);
    margin: 0px 40px;
    opacity: 0.4;
}
</style>