<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar(quantidade,preco)">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import parametrosMixin from '../store/mixers1/parametrosMixin'
import carrinhoMixin from '../store/mixers1/carrinhoMixin'

export default {
    mixins: [parametrosMixin,carrinhoMixin],


}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
