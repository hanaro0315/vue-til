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
        <button type="submit">회원 가입</button>
    </form>
</template>

<script>
    import {registerUser} from '@/api/index'

    export default {
        data(){
            return {
                //form values
                username : '',
                password : '',
                nickname : '',

                //log
                logMessage :''
            }
        },
        methods : {
            async submitForm() {
                const userData = {
                    username : this.username,
                    password : this.password,
                    nickname : this.nickname
                }

                console.log('form 제출')
                registerUser(userData);
                this.logMessage = '${data.username} 님이 가입되셨습니다' ; 
                this.initForm();
            },

            initForm() {
                this.username = '';
                this.password = '';
                this.nickname = '';
            }
        }
    }
</script>

<style>
</style>
