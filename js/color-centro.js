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
            // {
            //   name: 'SUB CATEGORÍA 02',
            //   status: false,  
            // },
            // {
            //     name: 'SUB CATEGORÍA 03',
            //     status: false,  
            // },
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
        ],
        btnBefore: false,
        btnAfter: false,
      }         
    },
    created(){
      this.sizeWeb();
      window.onresize = this.sizeWeb;
      
    },
    mounted(){
      this.subCategoryFormat();
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
      subCategoryFormat: function(){
        let listView = $("#list-tabs").width();
        let items    = $("#list-tabs .list .item");
        let widthAll = 0;
        for (let i = 0; i < items.length; i++) {
          // const element = items[i];
          // console.log(element);
          widthAll += items[i].offsetWidth+20;
          // console.log(widthAll);
        }
        
        let listCont = widthAll-20;
        // $("#list-tabs .list").width();
        // console.log(listView);
        // console.log(listCont);
        if(listView > listCont){
          $("#list-tabs .list").css({"justify-content":"center"});
        } else{
          $("#list-tabs .list").css({"justify-content":"flex-start"});
          $("#list-tabs .list").width(`${widthAll-20}px`);
          this.btnAfter = true;
        }
      },
      sizeWeb: function(){
        this.subCategoryFormat();
        if (window.innerWidth < 768)
          this.menu = false;
        else
          this.menu = true;
      },
      changeTabs: function(obj){
        console.log(obj);
        console.log($('#tabs-header .item'));
        $('#tabs-header .item').removeClass('active');
        $('#tabs-header .item:nth-child('+obj+')').addClass('active');
      }
    }
});