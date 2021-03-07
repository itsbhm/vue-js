Vue.component('posts', {

    props: ['data'],

    template: `

    <h1 @click="display">{{data}}</h1>

    `,

    data() {

        return {
            message: 'Hello Mini'
        }


    },

    methods: {
        display() {
            console.log('hello');

        }

    }

});


let vm = new Vue({

    el: '#app',

})