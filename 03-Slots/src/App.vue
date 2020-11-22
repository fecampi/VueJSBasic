<template>
    <div class="container">
        <span>
            <button @click="numero++">Troca</button>
        </span>
        <Produto>
            <!--Slots nomeado-->
            <h1 slot="produto">{{ produto[indice].produto }}</h1>
            <h1 slot="produto">-||--|--||-</h1>
             <!--Slots Padrão-->
            <p>{{ produto[indice].texto }}</p>
              <!--Slots nomeado-->
            <h6 slot="preco">R$: {{ produto[indice].preco }}</h6>
        </Produto>
    </div>
</template>

<script>
import Produto from './components/Produto'

export default {
    components: { Produto },
    data() {
        return {
            numero: 0,
            produto: [{
                preco: '5,00',
                texto: 'O Pão de Forma Integral Visconti é saboroso, macio e saudável. Fonte de fibras e 0% gordura trans, é produzido com ingredientes selecionados e qualidade Visconti. Perfeito no café da manhã, no lanche da tarde, ou ainda nos mais variados e criativos lanches saudáveis.',
                produto: 'Pão de Forma'
            }, { 
                preco: '2,00',
                texto: 'Todo mundo acha que açúcar só adoça receitas. A gente acredita que também adoça seus dias. União transforma o pavê, que faz o domingo virar uma festa. União transforma os biscoitos, que alegram qualquer segunda-feira. Tá vendo? Nossa especialidade vai além de adoçar: é transformar. Bolo em memórias. Suspiro em abraços. Biscoito em sorrisos. União. Há 110 anos transformando os seus dias.',
                produto: 'Açucar União'
            }, {
                preco: '3,00',
                texto: 'Conseguir sua Coca-Cola em dobro é fácil: apresente o código deste cupom em um Posto de Troca participante da sua região e, na compra de uma Coca-Cola, leve outra Sem Açúcar grátis! Mas são só 3 trocas por CPF por dia, beleza? Para saber quais são os postos de troca mais próximos de você, é só conferir a seção "Onde Trocar Seus Cupons" acima. ;)',
                produto: 'Coca-Cola'
            }]
        }
    },
    computed: {
        indice() {
            //Retornando valor absoluto(sem negativo)
            return Math.abs(this.numero % 3)
        }
    }
  
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
