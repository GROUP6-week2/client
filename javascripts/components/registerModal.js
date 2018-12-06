Vue.component('registerform', {
    template: `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeSignUpForm">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="form-group" id="formSignup">
                                <div class="modal-body">
                                    <div id="signupNotif">

                                    </div>
                                
                                    <input type="text" id="inputName" class="form-control" placeholder="Your name" required autofocus>
                                
                                    <input type="text" id="inputSignupEmail" class="form-control" placeholder="Email address" required autofocus>
                                    
                                    <input type="password" id="inputSignupPassword" class="form-control" placeholder="Password" required autofocus>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-secondary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>`
})