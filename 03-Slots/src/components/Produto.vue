<template>
    <div class="container">
        <div class="autor"><slot name="produto"/>
        <slot name="preco"/>
        <slot/>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor {
        float: right;
    }
</style>
