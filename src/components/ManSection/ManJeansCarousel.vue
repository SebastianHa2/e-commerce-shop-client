<template>
    <div class="carousel">
        <swiper :slides-per-view="4" :space-between="50" :scrollbar="{draggable: true}" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <div class="type superskinny">

                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type skinnyfit">

                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type carrot">

                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type slim">

                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type regular">

                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="type relaxed">

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

SwiperCore.use([Scrollbar])
export default {
    components: {
        Swiper, SwiperSlide
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
        height: 40rem;
        width: 100%;
    }

    .type{
        height: 40rem;
        width: 25rem;
        background-color: red;
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