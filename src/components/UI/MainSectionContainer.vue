<template>
    <!-- Main Section Header -->
    <header>
        <div class="header__logo">
            <h3 class="logo">Mechanical</h3>
        </div>
        <div class="header__icons">
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

    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

    header{
        height: 100vh;
        width: 100%;
        display: flex;
        position: relative;

        /* Logo and images */

        .header__logo{
            position: absolute;
            top: 10rem;
            left: 50%;
            transform: translate(-50%, -0%);

            .logo{
                font-family: 'Russo One', sans-serif;
                color: #fff;
                font-size: 4rem;
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
            background: linear-gradient(#eee, #aaa);
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
            color: #fff;

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
                border-bottom: 0.2rem solid #fff;

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
    }
</style>