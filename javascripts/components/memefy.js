Vue.component('imagememe', {
    props: ['url', 'mood'],
    computed: {
        memeUrl() {
            return `https://memegen.link/custom/i_feel/${this.mood}.jpg?alt=${this.url}`
        }
    },
    template: `<img class="card-img-top" :src="memeUrl" alt="Your Mood">`
})