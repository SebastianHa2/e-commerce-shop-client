<template>
    <base-cover @click.self="hide">
        <template v-slot:default>
            <div class="log-in">
                <i class="fas fa-times" @click="hide"></i>
                <h2 class="log-in__header">Log In</h2>
                <!-- Error messages -->
                <h5 class="invalid" v-if="invalid === 'password'">Wrong Password</h5>
                <h5 class="invalid" v-if="invalid === 'email'">User with this email doesn't exist</h5>
                <h5 class="invalid" v-if="invalid === 'empty'">Please enter a valid email</h5>
                <div class="log-in__inputs">
                    <input type="email" placeholder="Email" v-model="enteredEmail" @focus="invalid = ''">
                    <input type="password" placeholder="Password" v-model="enteredPassword" @focus="invalid=''">
                </div>
                <button>Log in</button>
                <p>Don't have an account? <a href="/registration" @click="hide">Register</a></p>
                <p><a href="#">Forgot Password</a></p>
            </div>
        </template>
    </base-cover>
</template>

<script>
import BaseCover from './BaseCover.vue'
export default {
    components: { BaseCover },
    data() {
        return {
            enteredEmail: '',
            enteredPassword: '',
            invalid: ''
        }
    },
    inject: ['hide'],
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .log-in{
        height: 40rem;
        width: 30vw;
        background-color: #faebd7;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 0.2rem solid #000;
        border-radius: 0.5rem;

            .log-in__header{
            width: 100%;
            text-align: center;
            font-size: 3rem;
            margin: 3rem 0;
        }
    }

    h5{
        font-size: 1.5rem;
        text-align: center;
        color: red;
        margin-bottom: 1rem;
    }



    .log-in__inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        input{
            height: 3rem;
            width: 70%;
            margin: 1rem 0;

            &::placeholder{
                margin-left: 0.1rem;
            }

            &:focus{
                outline: none;

                &::placeholder{
                    color: transparent;
                }
            }
        }
    }

    p{
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
        margin: 3rem 0;

        a{
            color: #000;
            text-decoration: underline;
        }
    }

    button{
        width: 50%;
        margin: 1rem auto;
        text-transform: uppercase;
        padding: 0.5rem 2rem;
        background-color: #fff;
        transition: all 0.4s;

        &:hover{
            background-color: #000;
            color: #fff;
            border: 0.2rem solid #fff;
            cursor: pointer;
        }
    }

    i{
        position: absolute;
        top: 1.5rem; 
        right: 1.5rem;
        font-size: 2rem;

        &:hover{
            cursor: pointer;
        }
    }

    /* Media queries */

    @media(max-width: 1000px){
        .sign-in{
            height: 50rem;
            width: 40vw;
        }
    }

    @media(max-width: 700px){
        .sign-in{
            width: 50vw;
        }
    }

    @media(max-width: 550px){
        .sign-in{
            width: 60vw;
        }
    }

    @media(max-width: 450px){
        .sign-in{
            width: 70vw;
        }
    }

    @media(max-width: 350px){
        .sign-in{
            width: 90vw;
        }
    }
</style>
