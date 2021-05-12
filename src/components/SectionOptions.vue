<template>
    <div class="sections">
        <router-link to="/man">
            <div class="sections__man">
                <p>Man</p>
            </div>
        </router-link>
        <router-link to="/woman">
            <div class="sections__woman">
                <p>Woman</p>
            </div>
        </router-link>
    </div>  
</template>

<script>
import { gsap } from 'gsap'
export default {
    mounted(){
        gsap.from('.sections__man', {duration:1.5, opacity: 0, x: '-200%'} )
        gsap.from('.sections__woman', {duration:1.5, opacity: 0, x: '+200%'} )
    }
}
</script>

<style lang="scss" scoped>
.sections{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('../assets/main-sections/background.png') center no-repeat;
    background-size: cover;
    overflow: hidden;

    a{
        width: 25%;

        p{
            font-size: 5rem;
            text-transform: uppercase;
            color: #fff;
            text-shadow: 0.2rem 0.4rem 0.4rem #000;
        }

        .sections__man{
            width: 100%;
            height: 50rem;
            background: url('../assets/main-sections/man-option.jpeg') center no-repeat;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 3rem;
            border: 0.5rem solid #fff;
        }

        
        .sections__woman{
            width: 100%;
            height: 50rem;
            background: url('../assets/main-sections/woman-option.jpeg') center no-repeat;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 3rem;
            border: 0.5rem solid #fff;
        }
    }
}
</style>