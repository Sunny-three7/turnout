<template>
<div class="form-group">
    <h4>Signin</h4>
    <div class="form-group">
        <input type="text" placeholder="Email" v-model="email" class="form-control"/>
    </div>
    <div class="form-group">
        <input type="password" placeholder="Password" v-model="password" class="form-control">
    </div>
    <button type="button" @click="signIn" class="btn btn-block btn-success">Sign In</button>
    <p>{{error.message}}</p>
    <br>
    <router-link to="/signUp">Not a user? Sign Up</router-link>
</div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'
export default {
    data(){
        return {
            email: '',
            password: '',
            error:{
                message: ''
            }
        }
    },
    methods: {
        signIn(){
            firebaseApp.sign_in(firebaseApp.auth, this.email, this.password)
            .catch((error) => {
                this.error.message = error.code;
            })
        }
    }
}
</script>