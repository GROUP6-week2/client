Vue.component('mainpage', {
    data() {
        return {
            image: '',
            urlSource: '',
            mood: "",
            message: '',
            match: [],
            isMatch: false
        }
    },

    computed: {
        memeUrl() {
            return `https://memegen.link/custom/i_feel/${this.mood}.jpg?alt=${this.urlSource}`
        },

        fbLink() {
            return `https://www.facebook.com/plugins/share_button.php?href=${this.memeUrl}&layout=button&size=small&mobile_iframe=true&appId=1987450261290720&width=59&height=20`
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
                    this.findMatch()
                })
                .catch(err => {
                    console.log(err.message)
                })
        },

        findMatch() {
            axios({
                url: `https://emotionship-api.ranggakusuma.site/images/find`,
                method: 'GET',
                headers: {
                    auth: localStorage.token
                }
            })
            .then(result => {
                console.log(result.data)
                if (result.data.length == 0) {
                    this.isMatch = false
                    this.match = ['Not match with any people']
                }
                else {
                    this.isMatch = true
                    this.match = result.data
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    template: `<div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <imagememe :url="memeUrl" :mood="mood"></imagememe>
                            
                            <div class="card-body">
                                <h5 class="card-title">Share</h5>
                                <iframe :src="fbLink" width="59" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                                <a :href="memeUrl" class="btn btn-primary" download>Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h3>Your Match</h3>
                            </div>
                            <div v-if="!isMatch" class="card-body">
                                <h4 class="card-text">Not match with any people</h4>
                            </div>

                            <div v-if="isMatch" v-for="data in match" class="card-body">
                                <h4 class="card-text">{{ data.name }}</h4>
                                <p>{{ data.phone }}</p>
                                <img :src="data.currentImage.imageUrl" class="img-fluid mb-3">
                                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#callnowModal" >CALL NOW</a>
                                <callnow :phone="data.phone"></callnow>
                                <hr>
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