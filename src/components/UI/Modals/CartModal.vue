<template>
    <base-cover @click.self="hide">
        <template v-slot:default>
            <div class="cart">
                <div class="cart__icons">
                    <i class="fas fa-times" @click="hide"></i>
                    <i class="fas fa-user" @click="show('login')"></i>
                </div>
                <h2 class="cart__header">Cart</h2>
                <div class="cart__items">
                    <!-- Displaying items in cart from the global storage-->

                </div>
                <!-- Displaying total price of items in cart -->
                <div class="cart__total-price">
                    <!-- Error and its animation -->
                    <transition name="error" @enter="shake">
                        <div v-if="error" class="error">You need to have at least 1 item in the basket</div>
                    </transition>
                    <transition name="error" @enter="shake"> 
                        <div v-if="mustLogIn" class="error log-in-error">You must be signed in to make purchases <a href="#" @click="show('sign-in')">Sign In</a></div>
                    </transition>
                    {{`Total: £ ${totalPrice}`}}
                    <button class="checkout__button" @click="checkout">Check Out</button>
                </div>
            </div>
        </template>
    </base-cover>
</template>

<script>
import BaseCover from './BaseCover.vue'
import {TweenMax} from 'gsap'

export default {
    components: { BaseCover },
    inject: ['hide', 'show'],
    data() {
        return {
            error: false,
            mustLogIn: false
        }
    },
    computed: {

    },
    methods: {
        checkout() {
            // Checkout validation

            // Checking if there is items in the cart
            if(this.$store.state.cart.length === 0){
                // If not check if error message has already been shown
                // Prevents error message duplication upon rapid clicking
                if(this.error === true){
                    // if so return
                    return null
                }else{
                    // Show error message and hide it after 3 seconds
                    this.error = true
                    setTimeout(() => {
                        this.error = false
                    }, 3000)
                }
            }else{
                if(!this.$store.state.signedIn){
                    if(this.mustLogIn === true){
                        return null
                    }else{
                        this.mustLogIn = true
                    }
                }else{
                    this.$router.push('/')
                }
            }
        },

        // Shake animation upon showing error
        shake() {
            TweenMax.to('.error', 0.1, {y:"+=20", yoyo:true, repeat:5});
            TweenMax.to('.error', 0.1, {y:"-=20", yoyo:true, repeat:5});
        }
    }
}
</script>

<style lang="scss" scoped>

    /* Main cart styling */
    .cart{
        width: 30vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #faebd7;
        overflow: auto;
        padding-bottom: 14rem;

        /* Icons styling */

        .cart__icons{
            position: absolute;
            top: 3rem;
            right: 3rem;
            font-size: 2rem;

            i{
                margin: 0 1rem;

                &:hover{
                    cursor: pointer; 
                }
            }
        }

        .cart__header{
            width: 80%;
            text-align: center;
            margin: 5rem auto;
            border-bottom: 0.1rem solid #000;
            padding-bottom: 2rem;
            font-size: 3rem;
        }

        .cart__items{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }
    

    .delete-item{
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        font-size: 1.2rem;

        &:hover{
            cursor: pointer;
        }
    }

    /* Items styling */

    .item{
        position: relative;
        margin: 1.5rem 0;
        border: 0.1rem solid #000;

        img{
            width: 13rem;
        }
    }



    .name, .price{
        text-align: center;
        font-size: 1.2rem;
    }


    .quantity-edit{
        width: 100%;
        display: flex;
        font-size: 2rem;
        justify-content: space-around;
    }

    .quantity-edit i:hover{
        cursor: pointer;
        font-size: 2.1rem;
    }

    /* Total price checkout button styling */

    .cart__total-price{
        width: 30vw;
        position: fixed;
        right: 0;
        bottom: 2rem;
        font-size: 3rem;
        display: flex;
        justify-content: center;
        padding: 2rem 0;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    .checkout__button{
        margin-left: 3rem;
        padding: 1rem 3rem;
        background: transparent;
        border: 0.2rem solid #fff;
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #fff;
        transition: all 0.4s;

        &:hover{
            background-color: #fff;
            color: rgb(105,105,105);
            cursor: pointer;
        }
    }

    /* Error message styling */

    .error{
        position: absolute;
        left: 50%; 
        transform: translateX(-50%);
        top: -5rem;
        width: 100%;
        font-size: 1.4rem;
        color: red;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    .log-in-error{
        color: #000;
        font-size: 1.2rem;

        a{
            color: #000;
            text-decoration: underline;
        }
    }

    /* Media queries */

    @media(max-width: 1100px){
        .cart{
            width: 40vw;
        }

        .total-price{
            width: 40vw;
        }
    }

    @media(max-width: 900px){
        .cart{
            width: 55vw;
        }

        .total-price{
            width: 55vw;
        }
    }

    @media(max-width: 600px){
        .cart{
            width: 70vw;
        }

        .total-price{
            width: 70vw;
        }
    }

    @media(max-width: 500px){
        .cart{
            width: 100vw;
        }

        .total-price{
            width: 100vw;
        }
    }
</style>