var app = new Vue({
    el: '#app',
    data(){
      return{
        menu: false,
        cursos: [
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
          {
            img: './img/cursos.jpg',
            title: 'Titulo del Primer curso',
            pais: 'PERÚ',
            flat: './img/pais/peru.jpg',
            porcent: '0'
          },
        ],
        subcategory:[
            {
                name: 'TODAS LAS SUBCATEGORIAS',
                status: true,  
            },
            {
                name: 'SUB CATEGORÍA 01',
                status: false,  
            },
            {
                name: 'SUB CATEGORÍA 02',
                status: false,  
            },
            {
                name: 'SUB CATEGORÍA 03',
                status: false,  
            },
        ],
        desarrollo:[
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
            {
                title: "lorem ipsum dolor sit amet.",
                valoration: '145',
                img: './img/desarrollo_personal.jpg'
            },
        ]
      }         
    },
    created(){
      this.sizeWeb();
      window.onresize = this.sizeWeb;
    },
    mounted(){
      
    },
    methods: {
      menuBtn: function(){
        console.log("menu");
        if(this.menu == false){
          this.menu = true;
        } else{
          this.menu = false;
        }
      },
      sizeWeb: function(){
        
      },
      
    }
});