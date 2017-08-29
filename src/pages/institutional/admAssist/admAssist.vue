<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Assistentes Administrativos
      h5.title.is-5 Conheça os Assistentes Administrativos do Distrito Metropolitano de Minas Gerais
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Roberto Mauro (83º)
              div.content
              //  p Sul de Minas
              //  p Email: #[a(href="mailto:manoelpedro.148@hotmail.com") manoelpedro.148@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Juliana Souza (98º)
              div.content
              //  p Alto Paranaíba e Noroeste de Minas
              //  p Email: #[a(href="mailto:carlos_coelho2005@hotmail.com") carlos_coelho2005@hotmail.com]
     
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Assistentes Administrativos'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça os Assistentes Administrativos do Distrito Metropolitano de Minas Gerais'
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
