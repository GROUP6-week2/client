Vue.component('registerform', {
    template: `<div class="modal fade" id="registerModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeSignUpForm">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form @submit.prevent="register" class="form-group" id="formSignup">
                                <div class="modal-body">
                                    <div id="signupNotif"></div>
                                    <input v-model="name" type="text" class="form-control mb-3" placeholder="Your name" required autofocus>
                                    <input v-model="email" type="text" class="form-control mb-3" placeholder="Email address" required>
                                    <input v-model="phone" type="text" class="form-control mb-3" placeholder="Phone Number" required>
                                    <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    <button type="submit" @click.prevent="register" class="btn btn-secondary" data-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>`,
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            password: ""
        }
    },
    methods: {
        register() {
            axios({
                url: `http://localhost:3000/register`,
                method: 'POST',
                data: {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    password: this.password
                }
            })
            .then(({ data, status }) => {
                console.log('you are successfully registered')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})