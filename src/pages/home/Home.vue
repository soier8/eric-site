<template lang="pug">
  main
    article.home-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h3.is-3.subtitle O melhor meio para alcançar a felicidade
          h3.is-3.subtitle é contribuir para a felicidade dos outros.
          h3.is-3.subtitle Baden Powell
      div.hero-foot
        breadcrumb
    article.news(v-if="news && news.length")
      div.columns.container.container-responsive
        div.column.is-7.columns
          div.column
            h1.title.is-2 Notícias
            div.columns.align-items-center
              div.column.is-4.has-text-centered
                figure.image.is-square
                  img(:src="news[0].image | imgSrc")
              div.column.new-content
                h5.subtitle.is-5 {{ news[0].title }}
                p.content {{ news[0].content | stripped }}
                router-link(:to="{ name: 'newsContent', params: { slug: news[0].slug }}")
                  more-button(c-class="is-primary") Saiba +

        div.column.is-5.columns.right-column
          div.column.news-highlight
            search-field
            div(v-for="i in (news.length - 1)")
              new-highlight(:data="news[i]")
            router-link(:to="{ name: 'newsList' }")
              more-button(c-class="is-primary") Saiba +
    article.parallax.hero
      article.hero-body
        div.container.has-text-centered
          h1.subtitle.is-3 Melhor Possível! Sempre Alerta! Servir!
    article.about
      div.columns.container.container-responsive
        div.column.is-7.columns
          div.column
            h2.title.is-2 Um minuto sobre...
            p.content ...  o Curso Avançado Escotista em Ribeirão das Neves/MG, Região Metropolitana de Belo Horizonte. Confira!
        div.column.is-6.right-column
          iframe( width="100%" height="300" src="https://www.youtube.com/embed/3UNjdDuvK20" frameborder="0" allowfullscreen)
    article.fixed-post(v-if="fixedNews && fixedNews.title")
      div.columns.container.container-responsive
        div.column.is-3.right-column
          figure.image.is-square
            img(:src="fixedNews.image | imgSrc")
        div.column.is-9.columns
          div.column
            h2.title.is-2 {{fixedNews.title}}
            p.content(v-html="fixedNews.content")
    //- div.events
    //-   div.columns.container.container-responsive
    //-     div.column.columns
    //-       div.column
    //-         h1.title.is-2 Cursos e Eventos de Formação
    //-         div.column.columns.justify-center
    //-           div.column.is-narrow.hero
    //-             div.hero-head
    //-               p Curso Preliminar
    //-             div.hero-foot
    //-               p teófilo otoni
    //-               p vale do aço
    //-               p 21 a 22 fevereiro 2017
    //-               span.more-icon: | +
    //-           div.column.is-narrow.hero
    //-             div.hero-head
    //-               p Módulo Interpretação Livro Jungle
    //-             div.hero-foot
    //-               p Itajubá
    //-               p Sul de Minas
    //-               p 21 a 22 fevereiro 2017
    //-               span.more-icon: | +
    //-           div.column.is-narrow.hero
    //-             div.hero-head
    //-               p Módulo Aperfeiçoamento em Didática
    //-             div.hero-foot
    //-               p Belo Horizonte
    //-               p Metropolitano
    //-               p 21 a 22 fevereiro 2017
    //-               span.more-icon: | +
    //- shortcuts
</template>

<script>
  import MoreButton from '../../components/buttons/MoreButton.vue'
  import SearchField from '../../components/input/SearchField.vue'
  import NewHighlight from '../../components/news/NewHighlight.vue'
  import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'
  import newsService from '../../services/news'
  import { getSeoTitle, getSeoMeta } from '../../services/seo'
  import OneSignal from '../../services/onesignal'

  const FIXED_NEWS = '5967d62eef45a52975017fda'

  export default {
    components: {
      'more-button': MoreButton,
      'search-field': SearchField,
      'new-highlight': NewHighlight,
      'breadcrumb': Breadcrumb
    },
    head: {
      title: getSeoTitle('Home'),
      meta: () => {
        return getSeoMeta({
          title: 'Home - Distrito Metropolitano de Minas Gerais'
        })
      }
    },
    data () {
      return {
        fixedNews: {},
        news: [],
        msg: 'Stuff'
      }
    },
    created () {
      const vm = this
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })

      OneSignal.prompt()

      newsService.get({page: 1, limit: 4}).then((response) => {
        vm.news = response.body.news
      })

      newsService.find(FIXED_NEWS).then((response) => {
        vm.fixedNews = response.body
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'

  // HOME BANNER
  .home-banner
    background-blend-mode: multiply
    background-color: rgba(42, 42, 67, 0.75)
    background-image: url('~assets/images/home-banner.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: 0 100%
    .hero-body
      padding-top: 18rem
      min-height: 25rem
      section.container
        text-align: left
      .subtitle
        margin-bottom: 0px
        color: white
        text-transform: uppercase
        font-family: 'Roboto'
        font-weight: 300
  // NEWS SECTION
  .news
    padding-bottom: 5rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 1rem
    padding-top: 1rem
    background: lighten($primary, 47%)
    .new-content
      .content
        overflow: hidden
        text-overflow: ellipsis
        line-height: 1.5rem
        height: 6rem
    .title
      color: $primary
    .subtitle
      text-transform: uppercase
      font-weight: bold
      margin-bottom: 10px
    .right-column
      +desktop
        padding-left: 2rem
  // PARALLAX SECTION
  .parallax
    background-blend-mode: multiply
    background-color: rgba(0, 106, 80, 0.8)
    background-image: url('~assets/images/home-parallax.jpg')
    background-attachment: fixed
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    .hero-body
      .subtitle
        padding: 4rem 0
        color: white
        font-family: 'Roboto'
        text-transform: uppercase
  // ABOUT SECTION
  .about
    padding-bottom: 7rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    padding-top: 2rem
    background: $warning
    .title, .content
      color: darken($warning, 25%)
    .right-column
      +desktop
        padding-left: 2rem
      button
        margin-top: 2rem
        margin-bottom: 1rem
  // FIXED POST SECTION
  .fixed-post
    border-top: 3px solid lighten($darken-blue, 20%)
    padding-bottom: 7rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    padding-top: 2rem
    background: darken($darken-blue, 10%)
    .title, .content
      color: lighten($darken-blue, 55%)
    .right-column
      +desktop
        padding-left: 2rem
      button
        margin-top: 2rem
        margin-bottom: 1rem
  // EVENTS SECTION
  .events
    background: white
    padding-top: 2rem
    padding-bottom: 5rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    .justify-center
      justify-content: space-between
    .hero
      background-blend-mode: multiply
      background-color: rgba(0, 0, 0, 0.6)
      background-image: url('~assets/images/event-bg.jpg')
      background-position: center
      background-size: cover
      text-transform: uppercase
      padding: 0
      min-height: 12rem
      +mobile
        width: auto
        margin-bottom: 2rem
      +desktop
        width: 22rem
        margin-bottom: 0
      .hero-head
        text-align: left
        height: 50%
        padding: 1rem
        color: white
        font-weight: bold
      .hero-foot
        display: flex
        flex-direction: column
        justify-content: center
        height: 50%
        padding: 1rem
        background-blend-mode: multiply
        background-color: rgba(27, 143, 150, 0.7)
        color: white
        line-height: 1.25rem
        .more-icon
          position: relative
          bottom: 1rem
          left: 90%
          color: $verde-limao
          font-size: 3rem
</style>
