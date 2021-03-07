Vue.component('posts', {

    data() {

        return {
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