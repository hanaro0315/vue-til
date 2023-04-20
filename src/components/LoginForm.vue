<template>
    <form @submit.prevent='loginForm'>        
        <div>
            <label for="username">ID : </label>
            <input id="username" type="text" v-model="username">
        </div>
        <div>
            <label for="password">PW : </label>
            <input id="password" type="text" v-model = "password">
        </div>
        <button v-bind:disabled="!isUserNameValid" type="submit">로그인</button>
    </form>
</template>

<script>
    import {loginUser} from '@/api/index'

    export default {
        data(){
            return {
                //form values
                username : '',
                password : '',

                //log
                logMessage :''
            }
        },
        methods : {
            async loginForm() {
                try {
                    const userData = {
                        username : this.username,
                        password : this.password
                    }
                    console.log('form 제출')
                    loginUser(userData);
                    this.logMessage = '${data.username} 님이 로그인 되셨습니다' ; 
                    this.initForm();   
                } catch (error) {
                    console.log(error.response.data);
                    this.logMessage = error.response.data;
                    this.initForm();
                } finally{
                    this.initForm();
                }
            },

            initForm() {
                this.username = '';
                this.password = '';
            },

            isUserNameValid(){
                return true;
            }
        }
    }
</script>

<style>
</style>
