new Vue({
    el:'#desafio',
    data: {
        nome:'Felipe',
        idade:28,
        image:'https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png'
    },
    methods:{
        idadeVezes3(){
           return this.idade*3 
        },
        random(){
            return Math.random()
         }
    }
})