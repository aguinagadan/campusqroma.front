var app = new Vue({
    el: '#app',
    data: (){return{
      title: 'Hello Vue!',
      menu: false,
    }                 
    },
    methods: {
      menu: function(obj){
        if(this.menu == false){
          this.menu = true;
        } else{
          this.menu = false;
        }
      }
    }
});