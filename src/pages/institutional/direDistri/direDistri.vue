<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Diretor Distrital
      h5.subtitle.is-5 Conheça o Diretor do Distrito Metropolitano de Minas Gerais
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
            //   figure.image.is-3by2
            //   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Ricardo Machado
              div.content 
              //  p Diretor Presidente
              //  p Email: #[a(href="mailto:andre.gomes@escoteirosmg.org.br") andre.gomes@escoteirosmg.org.br]
        
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Diretor Distrital'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Diretor do Distrito Metropolitano de Minas Gerais'
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
