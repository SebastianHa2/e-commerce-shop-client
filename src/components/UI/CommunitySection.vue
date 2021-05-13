<template>
    <div class="community">
        <div class="community__pictures">
            <h2>we stay together</h2>
            <p>share pictures with #mechanical to win prizes</p>
            <div class="pictures">
                <div class="picture">
                    <img src="../../assets/main-sections/community/community-img.jpeg" alt="community-img-1">
                </div>
                <div class="picture">
                    <img src="../../assets/main-sections/community/community-img-2.jpeg" alt="community-img-2">
                </div>
                <div class="picture">
                    <img src="../../assets/main-sections/community/community-img-3.jpeg" alt="community-img-3">
                </div>
                <div class="picture">
                    <img src="../../assets/main-sections/community/community-img-4.jpeg" alt="community-img-4">
                </div>
                <div class="picture">
                    <img src="../../assets/main-sections/community/community-img-5.jpeg" alt="community-img-5">
                </div>
                <div class="picture">
                    <img src="../../assets/main-sections/community/community-img-6.jpeg" alt="community-img-6">
                </div>
            </div>
        </div>
        <div class="community__social-media">
            <div class="social-media__icons">
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                </div>
                <div class="icon">
                    <i class="fab fa-instagram"></i>
                </div>
                <div class="icon">
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .community{
        height: 100vh;
        width: 100%;
        display: flex;
        background-color: #faebd7;
        justify-content: center;

        .community__pictures{
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            padding: 0 2rem;

            h2{
                font-size: 4rem;
            }

            p{
                font-size: 2rem;
            }

            .pictures{
                height: 80%;
                width: 100%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;

                .picture{
                    padding: 1rem;
                }

                img{
                    height: 25rem;
                    width: 18rem;
                }
            }
        }

        .community__social-media{
            width: 20%;
            height: 100%;

            .social-media__icons{
                width: 50%;
                height: 100%;
                margin: auto;
                border-left: 0.2rem solid #000;
                border-right: 0.2rem solid #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                font-size: 4rem;
               

                .icon{
                    position: relative;
                    
                    i{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        transition: all 0.4s;
                    }

                    &:hover{
                        cursor: pointer;

                        i{
                            font-size: 5rem;
                        }
                    }
                }
            }
        }
    }
</style>

