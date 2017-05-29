<template lang="pug">
  div.groups-home
    div.groups-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-1.subtitle Grupos Escoteiros
      div.hero-foot
        breadcrumb
    div.groups-content
      div.columns.is-multiline
        div.column.is-4.teste(v-for="city in cities")
          div.card
            div.card-image
              router-link(:to="{ name: 'groupsCity', params: { city: city.slug }}")
                figure.image.is-2by1
                  img(v-bind:src="getCityBanner(city)")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{ name: 'groupsCity', params: { city: city.slug }}") {{city.name}}
              div.content
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
          title: 'Grupos Escoteiros - Distrito Metropolitano',
          description: 'Confira os grupos escoteiros do Distrito Metropolitano.'
        })
      }
    },
    methods: {
      getCityBanner (city) {
        return require(`../../../assets/images/cidades/min/${city.min_banner}`)
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
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.city = groupsService.cities.find((city) => {
          return city.slug === to.params.city
        })
        vm.$emit('updateHead')
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
      background-image: url('~assets/images/cidades/cid.jpeg')
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
