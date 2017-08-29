<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Assistente Financeiro
      h5.subtitle.is-5 Conheça o Assistente Financeiro do Distrito Metropolitano de Minas Gerais
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Luis Silva (83º)
              div.content
              //  p Gestão de Adultos
              //  p Email: #[a(href="mailto:gestao.adultos@escoteirosmg.org.br") gestao.adultos@escoteirosmg.org.br]
      
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Assistente Financeiro'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Assistente Financeiro do Distrito Metropolitano de Minas Gerais'
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
  .regional-board
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
