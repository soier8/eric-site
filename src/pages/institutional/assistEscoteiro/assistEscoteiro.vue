<template lang="pug">
  div.young-leaders
    div.container.container-responsive.main-container
      h2.title.is-2 Assistente do Ramo Escoteiro
      h5.subtitle.is-5 Conheça o Assistente Ramo Escoteiro do Distrito Metropolitano de Minas Gerais
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Paulo Felipe (106º) 
              div.content
              //  p Coordenadora 2015-2017
              //  p Email: #[a(href="mailto:b.runadeandrade@hotmail.com") b.runadeandrade@hotmail.com]

</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Assistente Ramo Escoteiro'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Assistente Ramo Escoteiro do Distrito Metropolitano de Minas Gerais'
        })
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
  .young-leaders
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
      padding-top: 2rem
      padding-bottom: 2rem
      .columns
        justify-content: center
      .card-content
        a
          color: rgb(0, 35, 112)
          font-weight: bold
</style>
