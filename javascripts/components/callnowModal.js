Vue.component('callnow', {
    template: `<div class="modal fade" id="callnowModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeSignUpForm">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <img src="https://pbs.twimg.com/media/DWu8PALUMAAa9hd.jpg" class="img-fluid">
                        </div>
                    </div>
                </div>`,
    props: ['phone']
})