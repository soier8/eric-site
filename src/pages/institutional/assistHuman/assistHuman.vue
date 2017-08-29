<template lang="pug">
  div.ombudsman
    div.container.container-responsive.main-container
      h2.title.is-2 Assistente de Mobilização Humanitária
      h3.title.is-5 Conheça o Assistente de Mobilização Humanitária do Distrito Metropolitano de Minas Gerais
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
                  h4.title.is-4 Gustavo Athayde (83º)
              div.content
              //  p Ouvidor Regional
              //  p Email: #[a(href="mailto:ouvidoria@escoteirosmg.org.br") ouvidoria@escoteirosmg.org.br]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Assistente de Mobilização Humanitária'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Assistente de Mobilização Humanitária do Distrito Metropolitano de Minas Gerais'
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
