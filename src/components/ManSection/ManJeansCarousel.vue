<template>
    <div class="carousel">
        <swiper :slides-per-view="4" :space-between="50" :scrollbar="{draggable: true}" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <div class="type superskinny">
                    <shop-now-button></shop-now-button>
                    <h4>superskinny</h4>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type skinnyfit">
                    <shop-now-button></shop-now-button>
                    <h4>skinnyfit</h4>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type carrot">
                    <shop-now-button></shop-now-button>
                    <h4>carrot cut</h4>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type slim">
                    <shop-now-button></shop-now-button>
                    <h4>slim</h4>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type regular">
                    <shop-now-button></shop-now-button>
                    <h4>regular</h4>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type relaxed">
                    <shop-now-button></shop-now-button>
                    <h4>relaxed</h4>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import SwiperCore, { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss';
import ShopNowButton from '../UI/Buttons/ShopNowButton.vue'

SwiperCore.use([Scrollbar])
export default {
    components: {
        Swiper, SwiperSlide, ShopNowButton
    },

    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
        }
    } 
}
</script>

<style lang="scss" scoped>
    .carousel{
        height: 45rem;
        width: 100%;
        background-color: transparent;
        padding-bottom: 10rem;
        position: absolute;
        top: -5rem;
    }

    .type{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 45rem;
        width: 30rem;
        border-radius: 0.5rem;

        &:hover{
            cursor: grab;
            cursor: -moz-grab;
        }

        &:active{
            cursor: grabbing;
            cursor: -moz-grabbing
        }

        h4{
            margin-top: 5rem;
            font-size: 3rem;
            color: #c0c2ce;
            text-shadow: 0.1rem 0.3rem 0.4rem #000;
        }
    }

    .superskinny{
        background: url('../../assets/main-sections/man-carousel-jeans/superskinny-man.jpg') center no-repeat;
        background-size: cover;
    }

    .skinnyfit{
        background: url('../../assets/main-sections/man-carousel-jeans/skinnyfit-man.jpg') center no-repeat;
        background-size: cover;
    }

    .carrot{
        background: url('../../assets/main-sections/man-carousel-jeans/carrot-man.jpg') center no-repeat;
        background-size: cover;
    }

    .slim{
        background: url('../../assets/main-sections/man-carousel-jeans/slim-man.jpg') center no-repeat;
        background-size: cover;
    }

    .regular{
        background: url('../../assets/main-sections/man-carousel-jeans/regular-man.jpg') center no-repeat;
        background-size: cover;
    }

    .relaxed{
        background: url('../../assets/main-sections/man-carousel-jeans/relaxed-man.jpg') center no-repeat;
        background-size: cover;
    }
</style>