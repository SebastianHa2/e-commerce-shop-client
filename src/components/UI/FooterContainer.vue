<template>
    <div class="footer">
        <footer>
            <div class="footer__column">
                <ul>
                    <li class="title">Shopping Guide</li>
                    <li>FAQ's</li>
                    <li>Payment</li>
                    <li>Shipment</li>
                    <li>Return</li>
                </ul>
            </div>
            <div class="footer__column">
                <ul>
                    <li class="title">Services</li>
                    <li>Gift Card</li>
                    <li>Clothing Care</li>
                    <li>Shoe Care</li>
                    <li>Discover our App</li>
                </ul>
            </div>
            <div class="footer__column">
                <ul>
                    <li class="title">Company</li>
                    <li>About Us</li>
                    <li>Our Stores</li>
                    <li>Offices</li>
                    <li>Store Locator</li>
                    <li>Privacy Policy</li>
                    <li>Purchase Conditions</li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>

    .footer{
        margin-top: 5rem;
        width: 100%;
        height: 30vh;

        .footer__column{
            width: 20%;

            ul{
                display: flex;
                flex-direction: column;
                align-items: center;

                .title{
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 1rem 0;
                }

                li{
                    margin: 0.5rem;
                    font-size: 1.2rem;

                    &:hover{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    footer{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }


    @media(max-width: 650px){
        .column{
            width: 33%;
        }
    }

    @media(max-width: 380px){
        footer{
            flex-direction: column;
            align-items: center;
        }

        .column{
            width: 100%;
            margin-bottom: 2rem;
        }
    }
</style>