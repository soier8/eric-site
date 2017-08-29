<template lang="pug">
  div.emeritus-trainers
    div.container.container-responsive.main-container
      h2.title.is-2 Assistentes de Formação de Adultos
      h5.subtitle.is-5 Conheça os Assistentes de Formação de Adultos do Distrito Metropolitano de Minas Gerais
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Fernando Camargo (7º) 
              div.content
              //  p #[strong Nomeação DCB:]
              //  p #[strong Nomeação DCIM:]
              //  p #[strong Título Formador Emérito:] Junho de 2015
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Fabrício Reis (83º)
              div.content
              //  p #[strong Nomeação DCB:] Setembro de 1975
              //  p #[strong Nomeação DCIM:] Maio de 1978
              //  p #[strong Título Formador Emérito:] Maio de 2007
        
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Assistentes de Formação de Adultos'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça os Assistentes de Formação de Adultos do Distrito Metropolitano de Minas Gerais'
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
  .emeritus-trainers
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
