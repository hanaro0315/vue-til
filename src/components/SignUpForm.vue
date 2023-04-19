<template>
    <form @submit.prevent='submitForm'>        
        <div>
            <label for="username">ID : </label>
            <input id="username" type="text" v-model="username">
        </div>
        <div>
            <label for="password">PW : </label>
            <input id="password" type="text" v-model = "password">
        </div>
        <div>
            <label for="nickname">Name : </label>
            <input id="nickname" type="text" v-model = "nickname">
        </div>
        <button type="submit">Login</button>
    </form>
</template>

<script>
    import {registerUser} from '@/api/index'

    export default {
        data(){
            return {
                username : '',
                password : '',
                nickname : ''
            }
        },
        methods : {
            submitForm() {
                const userData = {
                    username : this.username,
                    password : this.password,
                    nickname : this.nickname
                }

                console.log('form 제출')
                registerUser(userData);
            }
        }
    }
</script>

<style>
</style>
