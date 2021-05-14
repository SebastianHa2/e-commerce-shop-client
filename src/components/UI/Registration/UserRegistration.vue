<template>
    <div class="registration">
        <div class="logo">
            <h1>Mechanical</h1>
        </div>
        <form class="registration__form" @submit="registerUser($event)">
            <h2>Personal and Contact Information</h2>
            <div class="form__input-group">
                <div class="input">
                    <label for="first-name"><span class="required-field">*</span>First Name:</label>
                    <input type="text" id="first-name" v-model="firstName" required>
                </div>
                <div class="input">
                    <label for="second-name"><span class="required-field">*</span>Second Name:</label>
                    <input type="text" id="second-name" v-model="secondName" required>
                </div>
            </div>
            <div class="form__input-group">
                <div class="input">
                    <label for="email"><span class="required-field">*</span>Email:</label>
                    <input type="email" id="email" v-model="userEmail"  required >
                </div>
                <div class="input">
                    <label for="username"><span class="required-field">*</span>Username:</label>
                    <input type="text" id="username" v-model="userName" required>
                </div>
            </div>
            <div class="form__input-group">
                <div class="input">
                    <label for="mobile"><span class="required-field">*</span>Mobile Number:</label>
                    <input type="text" placeholder="+country-code telephone number" v-model="userMobile" required>
                </div>
                <div class="input">
                    <label for="phone">Phone Number:</label>
                    <input type="text" placeholder="+country-code telephone number" v-model="userPhone">
                </div>
            </div>
            <h2>Address</h2>
            <div class="form__input-group">
                <div class="input">
                    <label for="address1">Address Line 1:</label>
                    <input type="text" v-model="addressLine1">
                </div>
                <div class="input">
                    <label for="address2">Address Line 2</label>
                    <input type="text" v-model="addressLine2">
                </div>
            </div>
            <div class="form__input-group">
                <div class="input">
                    <label for="city">City:</label>
                    <input type="text" v-model="userCity">
                </div>
                <div class="input">
                    <label for="state">State / County:</label>
                    <input type="text" v-model="userState">
                </div>
            </div>
            <div class="form__input-group">
                <div class="input">
                    <label for="country">Country:</label>
                    <select name="country" id="country" v-model="userCountry">
                        <option value="none"></option>
                        <option v-for="country in countriesList" :key="country.code" :value="country.name">{{country.name}}</option>
                    </select>
                </div>
                <div class="input">
                    <label for="zip">Post Code:</label>
                    <input type="text" v-model="postCode">
                </div>
            </div>

            <h2>Password Creation</h2>
            <div class="form__input-group">
                <div class="input">
                    <label for="password"><span class="required-field">*</span>Password:</label>
                    <input type="password" required v-model="password1">
                </div>
                <div class="input">
                    <label for="password2"><span class="required-field">*</span>Repeat Password:</label>
                    <input type="password" required v-model="password2">
                </div>
            </div>
            <p>**Password must contain at least 8 characters, a number, lower and uppercase characters and a special character**</p>

            <h2>Submit</h2>

            <div class="form__input-group" id="checkboxes">
                <div class="input" id="newsletter">
                    <label for="newsletter">Sign Up to Our Newsletter?</label>
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkboxID">
                        <div class="custom-checkbox">
                            <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                </div>
                <div class="input">
                    <label for="terms">Accept <a href="#">Terms and Conditions</a></label>
                    <div class="checkbox-container">
                        <input type="checkbox" required v-model="terms"> 
                        <div class="custom-checkbox">
                            <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit">Register</button>
            <div class="required-field required">* Required Fields</div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            secondName: '',
            userEmail: '', 
            userName: '',
            userMobile: '',
            password1: '',
            password2: '',

            userPhone: '',
            addressLine1: '',
            addressLine2: '',
            userCity: '',
            userState: '',
            userCountry: null,
            postCode: '',
            terms: false,
            newsletter: false,
            countriesList: []
        }
    },
    methods: {
        registerUser(event) {
            event.preventDefault()

            const userData = {
                username: this.userName,
                first_name: this.firstName,
                last_name: this.secondName,
                email: this.userEmail,
                password: this.password1,
                phone_number: this.userMobile
            }

            fetch(`http://localhost:3000/user/get/${this.userName}`).then(res => {
                return res.json()
            }).then(response => {
                console.log(response)
                if(response.length === 0){
                    fetch('http://localhost:3000/user/create-new', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        }).then(res => {
                            return res.json()
                        }).then(response => {
                            console.log(response)
                        }).catch(err => {
                            console.log(err)
                    })
                }else{
                    console.log('Username is taken...')
                }
            }).catch(err => {
                console.log(err)
            })

            
        }
    },
    async mounted() {
        // Fetching list of countries for drop down select
        const response = await fetch("https://restcountries.eu/rest/v2/all")
        const data = await response.json()
        this.countriesList = data;
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .registration{
        padding: 3rem;
        width: 100%;
        background: url('../../../assets/registration/bg.jpeg');

        .registration__form{
            width: 70%;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            background-color: rgba(255, 255, 255, 0.7);
            color: #000;

            .invalidPassword{
                color: red;
            }

            .form__input-group{
                display: flex;
                justify-content: center;
                margin-bottom: 2rem;

                .input{
                    width: 50%;
                    display: flex;
                    justify-content: left;
                    position: relative;

                    .taken{
                        position: absolute;
                        top: -1.5rem;
                        left: 50%;
                        transform: translateX(-50%);
                        color: red;
                    }

                    .invalid{
                        color: red;
                        border: 0.1rem solid red;
                    }

                    input, select{
                        width: 60%;
                        border: none;
                        border-bottom: 0.1rem solid #000;
                        background-color: transparent;
                        padding: 0.3rem;
                        &:focus{
                            outline: none;
                        }
                    }

                    input[type="checkbox"]{
                        width: 2rem;
                        height:2rem;

                        &:hover{
                            cursor: pointer;
                        }

                    }

                    
                    label{
                        width: 30%;
                        font-size: 1.5rem;
                    }
                }
            }
        }

        h2{
            width: 100%;
            text-align: center;
            margin: 3rem 0;
            border-bottom: 0.1rem solid #000;
            text-transform: uppercase;
        }
    }

    #checkboxes{
        label{
            width: 60%;

            a{
                color: #000;
                text-decoration: underline;
            }
        }

        .checkbox-container{
            position: relative;

            .invalid{
                color: red;
            }

            input{
                position: relative;
                opacity: 0;
                z-index: 200;

                &:hover ~ .custom-checkbox{
                    background-color: #000;
                    i{
                        color: #fff;
                    }
                }

                &:checked ~ .custom-checkbox{
                    background-color: #000;
                    i{
                        color: #fff;
                    }
                }
            }    
        }

        .custom-checkbox{
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            position: absolute;
            width: 2.5rem;
            height: 2.5rem;
            background-color: #aaa;
            transition: all 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;

            i{
                color: transparent;
                font-size: 1.5rem;
            }
        }
    }

    .logo{
        text-align: center;
        text-transform: uppercase;
        font-size: 3rem;
        color: #fff;
        text-shadow: 0.2rem 0.3rem 0.2rem #000;
        margin: 5rem 0;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.2rem;
    }

    button{
        width: 50%;
        margin: 3rem auto;
        padding: 0.5rem 0;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        transition: all 0.3s;

        &:hover{
            cursor:pointer;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
        }
    }

    .required-field{
        color: red;
        font-size: 2rem;
    }

    .required{
        font-size: 1.5rem;
    }

    /* Media queries */

    @media(max-width: 1200px){
       .registration{
           .registration__form{
               width: 100%;
           }
       }
    }

    @media(max-width: 950px){
        .registration{
            .registration__form{
                .form__input-group{
                    .input{
                        input, select{
                            width: 60%;
                        }

                        label{
                            width: 40%;
                            margin-left: 2rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 850px){
        .registration{
            .registration__form{
                .form__input-group{
                    flex-direction: column;
                    align-items: center;
                    .input{
                        margin-top: 2rem;
                        width: 80%;
                        input, select{
                            width: 100%;
                        }

                        label{
                            width: 40%;
                            margin-left: 2rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 750px){
        .registration{
            .registration__form{
                .form__input-group{
                    .input{
                        label{
                            width: 60%;
                        }
                    }
                }
            }
        }
    }

    @media( max-width: 600px){
        .registration{
            .registration__form{
                .form__input-group{
                    .input{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media(max-width: 500px){
        .registration{
            .registration__form{
                .form__input-group{
                    .input{
                        label{
                            width: 70%;
                            font-size: 1.2rem;
                        }
                    }
                }
            }
        }

        #checkboxes{
            .input{
                label{
                    width: 100%;
                }
            }
        }
    }

</style>