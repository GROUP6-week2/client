Vue.component('loginform', {
    data: 
    function() {
        return {
            url: 'http://localhost:3000',
            login: {
                email: '',
                password: ''
            }
        }   
    },
    methods: {
        loginPost() {
            console.log('masuk function loginPost')
            // axios({
            //     url: `${this.url}/users`,
            //     method: 'POST',
            //     data: {
            //         email: this.user.email,
            //         password: this.user.password
            //     }
            // })
            // .then(result => {
            //     console.log(result)
            //     this.loginCheck()
            //     localStorage.setItem('token', result.data)
            // })
            // .catch(err => {
            //     console.log(err)
            // })
        }
    },
    
    template: ``
})