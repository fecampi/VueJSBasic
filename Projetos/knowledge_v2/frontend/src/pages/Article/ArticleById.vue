<template>
    <div class="article-by-id">
        <PageTitle icon="fa fa-file-o" :main="article.name" :sub="article.description" />
        <!-- v-html renderiza o conteudo do artigo na div -->
        <div class="article-content" v-html="article.content"></div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import 'highlightjs/styles/dracula.css'
import hljs from 'highlightjs/highlight.pack.js'
import PageTitle from '../../components/template/PageTitle'

export default {
    name: 'ArticleById',
    components: { PageTitle },
    data: function() {
        return {
            article: {}
        }
    },
    mounted() {
   const url = `${baseApiUrl}/articles/${this.$route.params.id}`
        axios.get(url).then(res => this.article = res.data)
    },
    updated() {
        document.querySelectorAll('.article-content pre.ql-syntax').forEach(e => {
            hljs.highlightBlock(e)
        })
    }
}
</script>

<style>
    .article-content {
        background-color: #FFF;
        border-radius: 8px;
        padding: 25px;
    }

    .article-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #FFF;
    }

    .article-content img {
        max-width: 100%;
    }
    /* ultimo elemento do artigo não possui margem em baixo */
    .article-content :last-child {
        margin-bottom: 0px;
    }
</style>
