Vue.component('mainpage', {
    data() {
        return {
            image: '',
            urlSource: `https://memegen.link/custom/lalala/yuhuu.jpg?alt=http://www.gstatic.com/webp/gallery/1.jpg`,
            meme: {
                textAbove: '',
                textBelow: ''

            }
        }
    },
    methods: {
        addImage(event) {
            this.image = event.target.files[0]
        },

        uploadImage() {
            let formData = new FormData()
            formData.append('image', this.image)
            axios({
                url: `http://localhost:3000/images`,
                method: 'POST',
                data: formData,
                headers: {
                    auth: localStorage.token
                }

            })
                .then(result => {
                    console.log(result.data)
                })
                .catch(err => {

                })
        }
    },
    template: `<div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <image-meme :url="urlSource" :meme="meme"></image-meme>
                            
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h3>People like you</h3>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h5>Upload your image</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                
                                <div class="custom-file">
                                    <form @submit.prevent="uploadImage">
                                        <input @change="addImage" type="file" class="custom-file-input" id="customFile">
                                        <label class="custom-file-label" for="customFile">{{ image ? image.name : "Choose File"}}</label>
                                        <button v-if="image" type="submit" class="btn btn-primary mt-3 mb-4">Upload</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>`
})