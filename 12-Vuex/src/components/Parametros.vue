<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
import carrinhoMixin from "../store/mixers/carrinhoMixin";
export default {
    mixins: [carrinhoMixin],
   
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
