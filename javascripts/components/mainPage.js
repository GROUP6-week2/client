Vue.component('mainpage', {
    data() {
        return {
            image: '',
            urlSource: '',
            mood: ""
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
                url: `https://emotionship-api.ranggakusuma.site/images`,
                method: 'POST',
                data: formData,
                headers: {
                    auth: localStorage.token
                }

            })
                .then(result => {
                    this.urlSource = result.data.currentImage.imageUrl
                    this.mood = result.data.currentMood
                })
                .catch(err => {
                    console.log(err.message)
                })
        },

        findMatch() {
            axios({
                url: `http://localhost:3000/images/find`,
                method: 'GET',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    template: `<div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <imagememe :url="urlSource" :mood="mood"></imagememe>
                            
                            <div class="card-body">
                                <h5 class="card-title">Share</h5>
                                <p class="card-text"></p>
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
                                <h5>Know Your Mood</h5>
                            </div>
                            <div class="card-body">
                                
                                <p class="card-text">Upload your picture to know your mood for today</p>
                                
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