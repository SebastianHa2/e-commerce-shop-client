<template>
    <div class="sweatshirts center">
        <div class="button">
            <shop-now-button></shop-now-button>
        </div>
        <div class="sweatshirts__text">
            <p>our newest sweatshirts</p>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import ShopNowButton from '../UI/Buttons/ShopNowButton.vue'
export default {
    components: {
        ShopNowButton
    },
    mounted(){
        gsap.from('.sweatshirts__text', {duration: 1, left:'-200rem'})
    }
}
</script>

<style lang="scss" scoped>
    .sweatshirts{
        height: 100vh;
        margin: auto;
        width: 90%;
        background: url('../../assets/main-sections/man-sweatshirts/sweatshirts-bg.png') center no-repeat;
        background-size: cover;
        position: relative;
        overflow: hidden;
        flex-direction: column-reverse;

        .sweatshirts__text{
            font-size: 5rem;
            color: #faebd7;
            text-transform: uppercase;
            text-shadow: 0.2rem 0.3rem 0.4rem #000;
        }

        button{
            margin-top: 5rem;
        }
    }
</style>