<template>
    <div class="estadisticas" id="estadisticas">
        <div class="estadisticas__container">
            <div class="estadisticas__title">
                <h2 class="estadisticas__title-text">Algunas de nuestras estadísticas</h2>
            </div>
            <div class="estadisticas__content">
                <div class="estadisticas__text">
                    <h2 class="estadisticas__numeros">3</h2>
                    <p class="estadisticas__subtitulo">Clientes</p>
                </div>
                <hr class="estadisticas__divider">
                <div class="estadisticas__text">
                    <h2 class="estadisticas__numeros">30</h2>
                    <p class="estadisticas__subtitulo">Diseños</p>
                </div>
                <hr class="estadisticas__divider">
                <div class="estadisticas__text">
                    <h2 class="estadisticas__numeros">5</h2>
                    <p class="estadisticas__subtitulo">Años de experiencia</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Estadisticas"
}
</script>

<style scoped>

.estadisticas {
    background-image: url('../assets/fondo-curvas.png');
}

.estadisticas__container {
    padding: 90px;
}

.estadisticas__title {
    margin-bottom: 40px;
}

.estadisticas__title-text {
    font-size: 2.5rem;
    text-align: center;
}


.estadisticas__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}

.estadisticas__text {
    width: 200px;
}

.estadisticas__numeros {
    font-size: 2.5rem;
}

.estadisticas__subtitulo {
    color: var(--primary-color);
}

.estadisticas__divider {
    border: 1px solid var(--primary-color);
    margin: 0px 40px;
    opacity: 0.4;
}
</style>