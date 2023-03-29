const { createApp } = Vue;

createApp({
    data() {
        return{
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Veduta del lago 1'
                },
                {
                    image: 'img/02.webp',
                    title: 'Veduta del lago 2'
                },
                {
                    image: 'img/03.webp',
                    title: 'Veduta del lago 3'
                },{
                    image: 'img/04.webp',
                    title: 'Veduta del lago 4'
                },
                {
                    image: 'img/05.webp',
                    title: 'Veduta del lago 5'
                }
            ],
            activeIndex: 0
        }
        
    },
    methods: {
        nextSlide(){
            this.activeIndex++;
        },
        prevSlide(){
            this.
            activeIndex--;
        }
    }
}).mount('#app');