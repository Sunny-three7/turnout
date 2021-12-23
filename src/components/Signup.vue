<template>
<div class="form-group">
    <h4>Sign Up</h4>
    <div class="form-group">
        <input type="text" placeholder="Email" v-model="email" class="form-control"/>
    </div>
    <div class="form-group">
        <input type="password" placeholder="Password" v-model="password" class="form-control">
    </div>
    <button type="button" @click="signUp" class="btn btn-block btn-success">Sign Up</button>
    <p>{{error.message}}</p>
    <br>
    <router-link to="/signIn">Already a user? Sign In</router-link>
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
        signUp(){
            firebaseApp.sign_up(firebaseApp.auth, this.email, this.password)
            .catch((error) => {
                this.error.message = error.code;
            })
        }
    }
}
</script>