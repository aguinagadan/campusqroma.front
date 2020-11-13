var app = new Vue({
    el: '#app',
    data(){
      return{
        title: 'Hello Vue!',
        menu: false,
        baner: [
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            btn: "Acceder",
            btnStyle: "success",
            background: "./img/baner/background01.jpg",
            url: "",
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            btn: "Acceder",
            btnStyle: "info",
            background: "./img/baner/background01.jpg",
            url: "",
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            btn: "Acceder",
            btnStyle: "danger",
            background: "./img/baner/background01.jpg",
            url: "",
          },
        ],
        banerPoint: 0,
        marginLeftBaner: 0,

        card: [
          {
            title: 'TESTIMONIO 01',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore officiis minus magnam amet. Cum minima nostrum beatae doloribus veniam corrupti unde. Pariatur placeat totam tenetur, cum facere iusto deserunt!',
            url: './img/profile01.jpg',
            type: 'info'
          },
          {
            title: 'TESTIMONIO 02',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore officiis minus magnam amet. Cum minima nostrum beatae doloribus veniam corrupti unde. Pariatur placeat totam tenetur, cum facere iusto deserunt!',
            url: './img/profile01.jpg',
            type: 'success'
          },
        ],
        marcas: [
          {url: './img/logos/american-colors.png'},
          {url: './img/logos/cpp.png'},
          {url: './img/logos/jet.png'},
          {url: './img/logos/tekno.png'},
          {url: './img/logos/vencedor.png'},
          {url: './img/logos/fast.png'}
        ]
      }         
    },
    created(){
      this.sizeWeb();
      window.onresize = this.sizeWeb;
    },
    mounted(){
      this.banerFormat();
      this.banerMov();
    },
    methods: {
      menuBtn: function(){
        if(this.menu == false){
          this.menu = true;
        } else{
          this.menu = false;
        }
      },
      sizeWeb: function(){
        if (window.innerWidth < 768)
          this.menu = false;
        else
          this.menu = true;
        this.banerFormat();
      },
      banerFormat: function(){
        let banerNum    = this.baner.length;
        let banerWidth  = $(".baner").width();
        let newWidth    = banerWidth*banerNum;
        
        $("#baner").width(`${newWidth}px`);
        $("#baner").height(`100%`);
        $("#baner").css({"display":"flex","position":"relative"});
        this.banerWidth = banerWidth;
      },
      banerMov: function(orint) {
        $('#baner .item:nth-child(1)').fadeIn();
        setInterval(() => {
          this.banerPoint = this.banerPoint + 1;
          $('#baner').animate({'margin-left': this.marginLeftBaner+"%"}, 500);
          let marginLeft = (100 * this.baner.length - 100)*-1;
          this.marginLeftBaner -= 100;
          if(marginLeft > this.marginLeftBaner){
            this.marginLeftBaner = 0;
          }
          if(this.banerPoint > this.baner.length){
            this.banerPoint = 1;
          }
        }, 5000);
      },
    }
});