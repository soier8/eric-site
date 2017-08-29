<template lang="pug">
  div.ombudsman
    div.container.container-responsive.main-container
      h2.title.is-2 Assistentes de Comunicação
      h5.subtitle.is-5 Conheça os Assistentes de Comunicação do Distrito Metropolitano de Minas Gerais
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Alexandre Gonçalves (38º) 
              div.content
              //  p Email: #[a(href="mailto:belinha.andrade@gmail.com") belinha.andrade@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Antônio Cosso (23º) 
              div.content
              //  p Email: #[a(href="mailto:catrumano@yahoo.com.br") catrumano@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4  Breno Figueiredo (98º)
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4  Brunny Augusto (83º)
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Fernanda De Battisti (52°)
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Frederico Martins ()
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Isaque Lins (98º)
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Letícia Rosa (21º)
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Layslla Zinnato (83°)
              div.content
              //  p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]                                                        



</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Assistentes de Comunicação'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça os Assistentes de Comunicação do Distrito Metropolitano de Minas Gerais'
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
  .ombudsman
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
