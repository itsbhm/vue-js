Vue.component('posts', {

    template: `<h1>Post Component</h1>`


});


let vm = new Vue({

   el: '#app',
   data: {

       message: 'Hello'

   }

})