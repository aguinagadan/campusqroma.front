var app = new Vue({
    el: '#app',
    data(){
      return{
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
          {
            title: 'TESTIMONIO 03',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore officiis minus magnam amet. Cum minima nostrum beatae doloribus veniam corrupti unde. Pariatur placeat totam tenetur, cum facere iusto deserunt!',
            url: './img/profile01.jpg',
            type: 'info'
          },
          {
            title: 'TESTIMONIO 04',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore officiis minus magnam amet. Cum minima nostrum beatae doloribus veniam corrupti unde. Pariatur placeat totam tenetur, cum facere iusto deserunt!',
            url: './img/profile01.jpg',
            type: 'success'
          },
          {
            title: 'TESTIMONIO 05',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore officiis minus magnam amet. Cum minima nostrum beatae doloribus veniam corrupti unde. Pariatur placeat totam tenetur, cum facere iusto deserunt!',
            url: './img/profile01.jpg',
            type: 'info'
          },
          {
            title: 'TESTIMONIO 06',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore officiis minus magnam amet. Cum minima nostrum beatae doloribus veniam corrupti unde. Pariatur placeat totam tenetur, cum facere iusto deserunt!',
            url: './img/profile01.jpg',
            type: 'success'
          },
        ],
        cardPonit: 1,
        marginLeftCard: 0,
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
      this.testimonialMov();
      setTimeout(() => {
        var x = window.matchMedia("(max-width: 720px)")
        this.myFunction(x) // Call listener function at run time
        x.addListener(this.myFunction)
        // this.marcasMov();
      }, 300);
    },
    methods: {
      myFunction: function (x) {
        if (x.matches) { // If media query matches
          this.marcasMov();
        }
      },
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

        let cardNum    = this.card.length;
        let cardWidth  = $(".testimonials").width()/2;
        let newWidthCard    = cardWidth*cardNum;
        
        $(".card01").width(`${newWidthCard}px`);
        $(".card01").height(`100%`);
        $(".card01").css({"display":"flex","position":"relative"});
        this.cardWidth = cardWidth;
      },
      banerMov: function(orint) {
        // $('#baner .item:nth-child(1)').fadeIn();
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
      prevBaner: function(){
        let marginLeft = (100 * this.baner.length - 100)*-1;
        this.marginLeftBaner -= 100;
        if(marginLeft > this.marginLeftBaner){
          this.marginLeftBaner = 0;
        }
        if(this.banerPoint < 1){
          this.banerPoint = this.baner.length;
        } else{
          this.banerPoint -= 1;
        }
        $('#baner').animate({'margin-left': this.marginLeftBaner+"%"}, 500);
      },
      nextBaner: function(){
        let marginLeft = (100 * this.baner.length - 100)*-1;
        this.marginLeftBaner -= 100;
        if(marginLeft > this.marginLeftBaner){
          this.marginLeftBaner = 0;
        }
        if(this.banerPoint <= this.baner.length){
          this.banerPoint = 1;
        } else{
          this.banerPoint += 1;
        }
        $('#baner').animate({'margin-left': this.marginLeftBaner+"%"}, 500);
      },
      testimonialMov:function(){
        setInterval(() => {
          console.log("asd");
          $('.card01').animate({'margin-left': this.marginLeftCard+"%"}, 500);
          let marginLeft = (100 * this.baner.length - 100)*-1;
          this.marginLeftCard -= 100;
          if(marginLeft > this.marginLeftCard){
            this.marginLeftCard = 0;
          }
          this.cardPonit = this.cardPonit + 1;
          if(this.cardPoint > this.card.length){
            this.cardPoint = 1;
          }
        }, 5000);
      },
      prevTestimonial: function(){

      },
      nextTestimonial: function(){

      },
      marcasMov: function(){
        let time = this.marcas.length*0.5 *1000;
        let marcaWidth = $('#marcas').width();
        console.log(marcaWidth);
        $('#marcas').animate({'margin-left': "-"+(marcaWidth - (marcaWidth/this.marcas.length*2))+"px"}, this.marcas.length*1000);
        setInterval(() => {
          $('#marcas').animate({'margin-left': "-0px"}, this.marcas.length*1000);
          $('#marcas').animate({'margin-left': "-"+(marcaWidth - (marcaWidth/this.marcas.length*2))+"px"}, this.marcas.length*1000);
        }, time);
      }
    }
});