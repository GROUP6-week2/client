const app = new Vue({
    el: '#app',
    isLogin: false,
    methods: {
        loginCheck() {
            if (localStorage.getItem('token')) {
                this.isLogin = true
                console.log('logged in')
            }
            else {
                this.isLogin = false
                console.log('not logged in')
            }
        },
    },
    
    created() {
        this.loginCheck()
    }
})