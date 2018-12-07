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
    },
    data:{
        urlSource : `https://memegen.link/custom/lalala/yuhuu.jpg?alt=http://www.gstatic.com/webp/gallery/1.jpg`,
        meme: {
            textAbove: '',
            textBelow: ''
        },
        
    }

})