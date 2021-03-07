let vm = new Vue({

    el: '#app',
    data: {
        message: 'Hello',
        fontSize: 12,
    },


    methods: {

        increaseFont() {

            this.fontSize++;

        },


        DecreaseFont() {

            this.fontSize--;

        }


    }

})