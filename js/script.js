const { createApp } = Vue;

createApp({
    data() {
        return{
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Veduta del lago 1'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Veduta del lago 2'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Veduta del lago 3'
                },{
                    image: 'img/04.jpg',
                    title: 'Veduta del lago 4'
                },
                {
                    image: 'img/05.jpg',
                    title: 'Veduta del lago 5'
                }
            ],
        }
        
    },
    methods: {

    }
}).mount('app');