Vue.component('imagememe', {
    props: ['url', 'mood'],
    
    template: `<img class="card-img-top" :src="url" alt="Your Mood">`
})