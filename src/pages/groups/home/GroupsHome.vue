<template lang="pug">
  div.groups-home
    div.groups-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-1.subtitle Grupos Escoteiros
      div.hero-foot
        breadcrumb
    div.groups-content
      p Conteudo...
      div.columns.is-multiline
        div.column.is-4(v-for="city in cities")
          div.card
            div.card-image
              router-link(:to="{ name: 'groupsCity', params: { city: city.name }}")
                figure.image.is-4by3
                  img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{ name: 'groupsCity', params: { city: city.name }}") {{city.name}}
              div.content
                | A Diretoria Regional é o órgão executivo da Região, com mandato de três anos. É composta por cinco membros, eleitos pela Assembléia Regional, sendo um deles o Diretor Presidente, que coordena, dirige e representa a Região.
    br
</template>

<script>
  import groupsService from '../../../services/groups'
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import Breadcrumb from '../../../components/breadcrumb/Breadcrumb.vue'

  export default {
    components: {
      Breadcrumb
    },
    head: {
      title () {
        return getSeoTitle('Grupos Escoteiros')
      },
      meta () {
        return getSeoMeta({
          title: 'Grupos Escoteiros - Escoteiros de Minas',
          description: 'Confira os grupos escoteiros da Região Escoteira de Minas Gerais.'
        })
      }
    },
    data () {
      return {
        cities: groupsService.cities
      }
    },
    created () {
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .groups-home
    font-weight: bold
    // GROUPS BANNER
    .groups-banner
      background-blend-mode: multiply
      background-color: rgba(0, 0, 0, 0.42)
      background-image: url('~assets/images/news-banner.jpg')
      background-size: cover
      background-repeat: no-repeat
      background-position: 0 100%
      .hero-body
        padding-top: 12rem
        min-height: 25rem
        section.container
          text-align: left
        .subtitle
          margin-bottom: 0px
          color: white
          text-transform: uppercase
          font-family: 'Roboto'
          font-weight: 300
</style>
