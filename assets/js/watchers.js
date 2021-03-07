let vm = new Vue({

    el: '#app',
    data: {

        isActive: 'not active'

    },


    watch: {
        isActive: function(newValue){
            console.log('Sending an email - ' + newValue)
        }

    }

})