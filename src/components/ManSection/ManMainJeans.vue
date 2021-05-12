<!-- Jean's for men's main section display -->

<template>
    <div class="main-jeans center">
        <div class="main-jeans__text">Jeans Collection</div>
        <shop-now-button></shop-now-button> 
    </div>
</template>

<script>
import ShopNowButton from '../UI/Buttons/ShopNowButton.vue'
export default {
    components: {
        ShopNowButton
    }
}
</script>

<style lang="scss" scoped>
    .main-jeans{
        height: 70vh;
        width: 100%;
        background: url('../../assets/main-sections/jeans-man.jpeg') center no-repeat;
        background-size: cover;
        flex-direction: column;

        .main-jeans__text{
            font-size: 5rem;
            color: #faebd7;
            text-transform: uppercase;
            text-shadow: 0.2rem 0.3rem 0.4rem #000;
        }
    }
</style>