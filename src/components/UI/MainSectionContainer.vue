<template>
    <!-- Main Section Header -->
    <header>
        <div class="header__logo">
            <h3 class="logo">Mechanical</h3>
        </div>
        <div class="navigation">
            <navigation-container></navigation-container>
        </div>
        <div class="header__icons" :class="{colorChange: colorChange}">
            <div class="icon icons__search">
                <i class="fas fa-search"></i>
                <p>SEARCH</p>
            </div>
            <div class="icon icons__user">
                <i class="fas fa-user"></i>
            </div>
            <div class="icon icons__shopping-cart">
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
        <div class="header__img">
            <slot name="header-img-1"></slot>
        </div>
        <div class="header__img">
            <slot name="header-img-2"></slot>
        </div>
        <h3 class="header__new-arrivals">
            New Arrivals
        </h3>
    </header>
    <!-- Promotions -->
    <section class="promotions">
        <div class="promotions__text center">
            <p><span>get</span> 20% off for students</p>
        </div>
        <div class="promotions__spring-sale center">
            <h2>Spring Sale</h2>
        </div>
    </section>
    <!-- Men's jeans section -->
    <section class="man-jeans">
        <slot name="man-jeans"></slot>
    </section>
    <!-- Men's jeans carousel -->
    <section class="man-jeans-carousel">
        <slot name="man-jeans-carousel"></slot>
    </section>
    <!-- Man's sweatshirts section -->
    <section class="man-sweatshirts">
        <slot name="man-sweatshirts"></slot>
    </section>
    
    <!-- Community section -->
    <section class="community">
        <community-section></community-section>
    </section>

    <!-- Newsletter section -->
    <section class="newsletter">
        <newsletter-section></newsletter-section>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <footer-container></footer-container>
    </footer>
    
</template>

<script>
import CommunitySection from '../UI/CommunitySection.vue'
import NewsletterSection from '../UI/NewsletterSection.vue'
import FooterContainer from '../UI/FooterContainer.vue'
import NavigationContainer from '../UI/Navigation/NavigationContainer.vue'
export default {
    data() {
        return {
            colorChange: false
        }
    },
    components: {
        CommunitySection, NewsletterSection, FooterContainer, NavigationContainer
    },
    methods: {
        // Change icons colour when scrolled past header
        onScroll() {
            const scrollPosition = window.pageYOffset
            if(scrollPosition > document.querySelector('.promotions').getBoundingClientRect().bottom){
                this.colorChange = true
            }else{
                this.colorChange = false;
            }
        },
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

    header{
        height: 100vh;
        width: 100%;
        display: flex;
        position: relative;

        /* Navigation container */

        /* Logo and images */

        .header__logo{
            position: absolute;
            top: 10rem;
            left: 50%;
            transform: translate(-50%, -0%);

            .logo{
                font-family: 'Russo One', sans-serif;
                color: #faebd7;
                font-size: 5rem;
                text-transform: uppercase;
            }
        }

        .header__img{
            width: 50%;
            height: 100%;
        }

        /* New arrivals heading */

        .header__new-arrivals{
            position: absolute;
            bottom: 10rem;
            left: 50%;
            transform: translate(-50%, -0%);
            font-size: 3rem;
            color: #000;
            text-transform: uppercase;
            font-weight: 300;
            padding: 2rem 4rem;
            background: linear-gradient(#eee, #faebd7);
            border-radius: 3rem;

            &:hover{
                cursor: pointer;
            }
        }

        /* Icons */

        .header__icons{
            position: fixed;
            top: 3rem;
            right: 1rem;
            width: 40rem;
            display: flex;
            justify-content: space-around;
            font-size: 2rem;
            color: #faebd7;
            z-index: 100;

            .icon{
                transition: all 0.4s;
                &:hover{
                    cursor: pointer;
                    color: #000;
                }
            }

            .icons__search{
                display: flex;
                padding-right: 8rem;
                border-bottom: 0.2rem solid #faebd7;

                &:hover{
                    border-color: #000;
                }

                p{
                    margin-left: 1rem;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0.2rem;
                }
            }

        }

        .colorChange{
            .icon{
                color: #000;
            }

            .icons__search{
                border-bottom: 0.2rem solid #000;
            }
        }
    }

    /* PROMOTIONS */

    .promotions{
        width: 100%;
        height: 15rem;
        display: flex;
        padding: 1rem;
        background-color:   #faebd7 ;

        .promotions__text{
            width: 40%;
            height: 100%;
            font-size: 3rem;
            text-transform: uppercase;
            letter-spacing: 0.2rem;

            &:hover{
                cursor: pointer;
            }

            span{
                font-size: 5rem;
            }
        }

        .promotions__spring-sale{
            width: 60%;
            background: url('../../assets/main-sections/flowers.jpeg') center no-repeat;
            background-size: cover;
            font-size: 3rem;
            text-transform: uppercase;
            color: #faebd7;
            text-shadow: 0.2rem 0.2rem 0.4rem #000;

            &:hover{
                cursor: pointer;
            }
        }
    }

    .man-jeans-carousel{
        padding-bottom: 5rem;
        background-color: #faebd7;
        position: relative;
        height: 45rem;
    }

    .man-sweatshirts{
        background-color: #faebd7;
        padding-bottom: 5rem;
    }

    .community{
        padding-bottom: 5rem;
        background-color: #faebd7;
    }
</style>