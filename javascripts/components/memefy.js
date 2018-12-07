Vue.component('image-meme', {
    props: ['url', 'meme'],
    template: `<img class="card-img-top" :src="url" alt="Your Mood">`
})