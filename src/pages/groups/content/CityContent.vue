<template lang="pug">
  div.groups-content
    div.groups-banner.hero(v-bind:style="backgroundBanner")
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-1.subtitle Grupos Escoteiros de {{city.name}}
      div.hero-foot
        breadcrumb
    div.groups-content
      p conteudo
      div.columns.is-multiline
        div.column.is-4(v-for="group in city.groups")
          div.card
            div.card-image
              figure.image.is-4by3
                img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 {{group.name}}
              div.content
                p {{group.meetings}}
                p {{group.address}}
                p {{group.phone}}
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
        return getSeoTitle(this.city.name)
      },
      meta () {
        return getSeoMeta({
          title: this.city.name,
          description: `Descubra os grupos escoteiros de ${this.city.name}`
          // image: `${process.env.IMG_URL}${this.city.banner}`
        })
      }
    },
    data () {
      return {
        city: {
          name: ''
        }
      }
    },
    created () {
      let ran = 0
      this.$on('okHead', () => {
        ran++
        if (ran >= 1 && !window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    },
    computed: {
      backgroundBanner () {
        const url = 'https://vuejs.org/images/logo.png'
        return {
          'color': 'red',
          'background-image': url
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.city = groupsService.cities.find((city) => {
          return city.name === to.params.city
        })
        vm.$emit('updateHead')
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  // GROUPS BANNER
  .groups-banner
    background-blend-mode: multiply
    background-color: rgba(0, 0, 0, 0.42)
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
  .groups-content
    .content-container
      > .title
        text-transform: uppercase
        color: $verde-limao
      padding-top: 2rem
      padding-bottom: 1rem
      .groups-content-container
        padding-top: 2rem
    .groups-image-container
      width: 100%
      display: flex
      justify-content: center
    .info-groups-container
      padding: 0 2rem
      .info-row
        margin-top: 2rem
        margin-bottom: 1rem
        border-bottom: 1px solid #8f8f8f
        display: flex
        justify-content: space-between
        flex-direction: row
        .title
          color: #8f8f8f
          font-weight: 400
        .description
          color: #8f8f8f
          display: flex
          justify-content: flex-end
          flex-direction: column
          text-transform: uppercase
          font-weight: 300
          font-size: 1.5rem

</style>
