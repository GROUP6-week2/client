Vue.component('loginform', {
    data:
        function () {
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

    template: `<div>
                    <form class="form-signin" method="POST">
                        <img class="mb-4" src="assets/logo_emotionship.png">
                        <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input v-model="login.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input v-model="login.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        <button @click.prevent="loginPost" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p class="mt-5 text-muted text-center">Copyright &copy; 2018 Emotionship</p>
                        <p class="mb-3 text-muted text-center">All Rights Reserved.</p>
                    </form>
                </div>`
})