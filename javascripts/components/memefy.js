Vue.component('image-meme', {
    props: ['url', 'meme'],
    template: `
    <div class="row">
        <div class="col-md-6">
            <img :src="url" alt="Your Mood">
        </div>
        <div class="col-md-6">
            
        </div>
    </div> 
    `
})