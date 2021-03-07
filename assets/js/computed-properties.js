let vm = new Vue({
         
    el: '#app',
    data: {
        message: 'Hello'
    },
    computed: {
        reverseMessage(){
            return this.message.split('').reverse('').join('');
        }
    }
})