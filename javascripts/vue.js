const app = new Vue({
    el: '#app',
    data: {
        isLogin: false,
    },
    methods: {
        loginCheck() {
            if (localStorage.getItem('token')) {
                this.isLogin = true
            }
            else {
                this.isLogin = false
            }
        },
    },

    computed: {
        
    },
    
    created() {
        this.loginCheck()
    }

})