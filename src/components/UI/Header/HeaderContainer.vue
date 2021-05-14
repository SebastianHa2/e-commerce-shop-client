<template>
    <div class="items">
        <div class="header__logo">
            <h3 class="logo">Mechanical</h3>
            <p class="location">
                <slot name="location"></slot>
            </p>
        </div>
        <div class="header__icons" :class="{colorChange: colorChange}">
            <div @click="show('search')" class="icon icons__search">
                <i class="fas fa-search"></i>
                <p>SEARCH</p>
            </div>
            <div @click="show('login')" class="icon icons__user">
                <i class="fas fa-user"></i>
            </div>
            <div @click="show('cart')" class="icon icons__shopping-cart">
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>

            <!-- Search modal -->
        <transition name="show-element">
            <search-modal v-if="showElement === 'search'"></search-modal>
        </transition>
        <!-- Log in modal -->
        <transition name="show-element">
            <log-in v-if="showElement === 'login'"></log-in>
        </transition>
        <!-- Cart modal -->
        <transition name="show-element">
            <cart-modal v-if="showElement === 'cart'"></cart-modal>
        </transition>

        <navigation-container></navigation-container>
    </div>
</template>

<script>
import NavigationContainer from '../Navigation/NavigationContainer.vue'
import SearchModal from '../Modals/SearchModal'
import LogIn from '../Modals/LogIn.vue'
import CartModal from '../Modals/CartModal.vue'
export default {
    components: { NavigationContainer, SearchModal, LogIn, CartModal},
    data() {
        return{
            showElement: '',
            colorChange: false
        }
    },
    methods: {
        show(element) {
            this.showElement = element
            document.body.style.overflow = "hidden"
        },
        hide() {
            this.showElement = ''
            document.body.style.overflow = "visible"
        }
    },
    provide() {
        return {
            show: this.show,
            hide: this.hide
        }
    }
}
</script>

<style lang="scss" scoped>

    .items{
        height: 30rem;
        width: 100%;
        background-color: #c0c2ce;
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

        .header__logo{
            position: absolute;
            top: 10rem;
            left: 50%;
            transform: translate(-50%, -0%);

            .logo{
                font-family: 'Russo One', sans-serif;
                color: #000;
                font-size: 5rem;
                text-transform: uppercase;
            }

            .location{
                text-align: center;
                text-transform: uppercase;
                font-size: 1.5rem;
            }
        }
    }

    /* Animations for showing modals */

    .show-element-enter-from, .show-element-leave-to{
        opacity: 0;
    }

    .show-element-enter-active, .show-element-leave-active{
        transition: all 0.4s;
    }

    .show-element-enter-to, .show-element-leave-from{
        opacity: 1;
    }
</style>