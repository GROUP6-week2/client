Vue.component('loginform', {
    data:
        function () {
            return {
                login: {
                    email: '',
                    password: ''
                }
            }
        },
    methods: {
        loginPost() {
            axios({
                url: `http://35.247.172.222:3000/login`,
                method: 'POST',
                data: {
                    email: this.login.email,
                    password: this.login.password
                }
            })
            .then(result => {
                localStorage.setItem('token', result.data.token)
                this.$emit('logged-in')
            })
            .catch(err => {
                console.log(err)
            })
        }
    },

    template: `<div>
                    <form @submit.prevent="loginPost" class="form-signin">
                        <img class="mb-4" src="assets/logo_emotionship.png">
                        <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input v-model="login.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input v-model="login.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p class="text-center my-2">or</p>
                        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#registerModal">Register</button>
                        <p class="mt-5 text-muted text-center">Copyright &copy; 2018 Emotionship</p>
                        <p class="mb-3 text-muted text-center">All Rights Reserved.</p>
                    </form>
                    <registerform></registerform>
                </div>`
})