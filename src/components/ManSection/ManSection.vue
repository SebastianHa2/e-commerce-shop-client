<template>
    <main-section-container>
        <template v-slot:header-img-1>
            <img src="../../assets/main-sections/header-man-1.jpeg">
        </template>
        <template v-slot:header-img-2>
            <img src="../../assets/main-sections/header-man-2.jpeg">
        </template>
        <template v-slot:man-jeans>
            <man-main-jeans></man-main-jeans>
        </template>
        <template v-slot:man-jeans-carousel>
            <man-jeans-carousel></man-jeans-carousel>
        </template>
        <template v-slot:man-sweatshirts>
            <man-main-sweatshirts></man-main-sweatshirts>
        </template>
    </main-section-container>
</template>

<script>
import MainSectionContainer from '../UI/MainSectionContainer.vue'
import ManMainJeans from '../ManSection/ManMainJeans.vue'
import ManJeansCarousel from '../ManSection/ManJeansCarousel.vue'
import ManMainSweatshirts from '../ManSection/ManMainSweatshirts.vue'
export default {
    components: {
        MainSectionContainer, ManMainJeans, ManJeansCarousel, ManMainSweatshirts
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>