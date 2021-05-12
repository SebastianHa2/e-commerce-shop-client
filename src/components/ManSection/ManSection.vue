<template>
    <main-section-container>
        <template v-slot:header-img-1>
            <img src="../../assets/main-sections/header-man-1.jpeg">
        </template>
        <template v-slot:header-img-2>
            <img src="../../assets/main-sections/header-man-2.jpeg">
        </template>
    </main-section-container>
</template>

<script>
import MainSectionContainer from '../UI/MainSectionContainer.vue'
export default {
    components: {
        MainSectionContainer
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>