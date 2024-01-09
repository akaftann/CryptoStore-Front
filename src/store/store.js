import {makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthService.js'
import axios from 'axios'
import { BASE_URL } from '../http/index.js'
import { redirect } from 'react-router-dom'

export default class Store{
    user = {}
    isAuth = false
    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }

    setUser(user){
        this.user = user
    }

    async signIn(email, pass){
        try{
            console.log('start sign in...')
            const response = await AuthService.signIn(email, pass)
            console.log(response)
            if (response.status === 200) {
                console.log('Successful login!');
                localStorage.setItem('token', response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.user);
                console.log('before redirect')
                return redirect('/home')
                console.log('after redirect')
              } else {
                console.log('Unsuccessful login. Status:', response.status);
              }
        }catch(e){
            console.log('error...', e.response?.data?.message)
        }
    }

    async signUp(email, pass){
        try{
            const response = await AuthService.signUp(email, pass)
            console.log(response)
            localStorage.setItem('USDTtoken', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async signOut(){
        try{
            const response = await AuthService.signOut()
            localStorage.removeItem('USDTtoken')
            this.setAuth(false)
            this.setUser({})
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(){
        try{
            const response = await axios.get(`${BASE_URL}/refresh`, {withCredentials:true})
            localStorage.setItem('USDTtoken', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e.response?.data?.message)
        }
        
    }
}

