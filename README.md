# VueJs

Introdução

DOM[Template]

# DOM[Template]

## Ligações(v-bind:)

Inserir valores nos atributos

```jsx
<a v-bind:href="link">Google</a>
<a :href="link">Google</a>
```

A tag mustache vai ser trocada pelo valor da propriedade.

```jsx
<p>Mensagem: {{ titulo }}</p>
```

Produzir algo apenas uma vez(não atualizar caso exista mudança)

```jsx
<p v-once>{{ titulo }}</p>
```

inserir resultado das funções

```jsx
<p>{{ saudacao() }}</p>
<p>{{ 4 + 1 }}</p>
```

inserir como código HTML

```jsx
<p v-html="linkHtml"></p>
```

## Eventos(v-on)

### Eventos de Teclado

Quando soltar a tecla  

```jsx
<input type="text" v-on:keyup="alterarValor">
```

Quando digitar

```jsx
<input type="text" v-on:keydown="alterarValor">
```

com outras teclas(enter+alt)

```jsx
<input type="text" v-on:keydown.enter.alt="alterarValor">
```

### Métodos Computed e watch

Computed: Quando precisa estar sempre atualizado

```jsx
<p>{{ resultado }}</p>

    computed: {
        resultado() {
            return this.valor == 10 
							? 'Valor Igual a dez' 
							: 'Valor Diferente de dez'
        }
    },
```

Watch: Quando algum dado mudou

Ex: Campo do formulário  estado foi selecionado e informar as cidades

```jsx
<p>{{ resultado }}</p>

watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
```

### Estilos

```jsx
<div :class="[circulo,red]" :style="myStyle"></div>

computed: {
            myStyle() {
                return {
                    backgroundColor: this.cor,
                    width: this.largura + 'px',
                    height: this.altura + 'px'
                }
            }
        }
```

### Condicionais

V-show (Exibido ou não, sem remover o elemento..com menos processamento)

```jsx
<button @click="ligado = !ligado">
	{{ ligado ? 'Desligar' : 'Ligar' }}
</button>

<footer v-show="ligado">
   ....1
</footer>

<!--Negação alterna ou um ou outro-->
<footer v-show="!ligado">
   ....2
</footer>
```

V-else-if

```jsx
<h2 v-if="ligado"> Ligado</h2>
    <template v-else-if="travou">   
        <h2> Ligado</h2>
        <p>Travou, não pode ser desligado</p>
    </template>
<h2 v-else>Desligado</h2>
```

### Listas

For

```jsx
<div v-for="n in 10">{{ n }}</div>    
```

For com indice

```jsx
data: { cores: ['vermelho', 'verde', 'amarelo', 'azul']}

<ul>
     <li v-for="cor in cores"> {{ cor }}</li>
</ul>
```

For com template

```jsx
<template v-for="(cor, i) in cores">
	<h1>{{ cor }}</h1>
  <p>{{ i }}</p>
</template>
```

Chave Valor

```jsx
data: { 
	pessoas: [
		{ nome: 'Ana', idade: 26, peso: 59, notas: [7.67, 8.33, 6.98, 9.21] },
	]
}

<ul>
	<li v-for="pessoa in pessoas">
   <hr>
   {{pessoa.nome}}

   <!--for para atributos da pessoa-->
	   <div v-for="(valor, chave, index) in pessoa">
	                
				<!--Se não é lista só exibe-->
	      <template v-if="!Array.isArray(valor)">
	            {{ chave }} = {{ valor }} 
	       </template>
	
	       <!--Se é lista faz outro for para notas-->
	       <template v-else>
	       Notas:
		       <ul>
		          <li v-for="nota in valor">{{ nota }}</li>
	         </ul>  
	       </template>
	
			</div>
	</li>
</ul> 
```

For com key(como se fosse o ID do elemento)

```jsx
data: { 
	elementos: [1, 2, 3],
}
<ul>
	<!--Indice sempre é o segundo elemento-->
  <li v-for="(elemento, i) in elementos" :key="elemento">
		{{ i + 1 }}) {{ elemento }}
	</li>
</ul><button @click="elementos.push('NOVO')">Adicionar</button>
```

A instância VueJs

VueCLI

Projeto02

Componentes

Formulários

Directivas

Filtros

Mixins

Projeto03

Animações e Transições

Projeto04

HTTP

Roteamento

Estado

Deploying

Projeto05



Here you will find my collection of references about the language, content extracted from books and documentation, with a simple and direct approach with practical examples so that new to the language can increase your knowledge. This material is authorial, the result of many hours of study, free for your study and research. If you are interested in reusing, just tell me. Copyright © 2020 Felipe Campinho. All rights reserved.
