<template lang="pug">
  div.institutional-home
    div.container.container-responsive.main-container
      h2.title.is-2 Institucional
      h4.subtitle.is-4 Conheça a instituição e seus orgãos
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'direDistri'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'direDistri'}") Diretor Distrital
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'financCoord'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'financCoord'}") Assistente Financeiro Distrital
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistAdmn'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistAdmn'}") Assistentes Administrativos
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'eticAssit'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'eticAssit'}") Assistente de Ética e Disciplina
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'gestAdult'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'gestAdult'}") Assistente de Gestão de Adultos Distrital
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assitForma'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assitForma'}") Assistentes de Formaçao de Adultos
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'humaniAssist'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'humaniAssist'}") Assistente de Mobilização Humanitária
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistComunic'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistComunic'}") Assistentes de Comunicação e Imagem
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistRad'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistRad'}") Assistente de Radio-escotismo
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistPlan'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistPlan'}") Assistente de Planejamento e Programa
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistLob'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistLob'}") Assistente do Ramo Lobinho
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistEsc'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistEsc'}") Assistente do Ramo Escoteiro
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistSen'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistSen'}") Assistente do Ramo Sênior
              div.content
                | 
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'assistPio'}")
                //- figure.image.is-4by3
                //-   img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'assistPio'}") Assistente do Ramo Pioneiro
              div.content
                |                                 


    //- #[router-link(exact v-bind:to="{name: 'regionalBoard'}")  Diretoria Regional]
    br
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Institucional'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça a instituição Escoteira - Distrito Metropolitano de Minas Gerais'
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
  .institutional-home
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
        text-transform: lowercase
      padding-top: 2rem
      padding-bottom: 1rem
      .columns
        justify-content: center
      .card-content
        a
          color: rgb(0, 35, 112)
          font-weight: bold
</style>
