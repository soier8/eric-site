<template lang="pug">
  footer.footer
    div.columns.container.container-responsive
      div.column.is-narrow.logo-column
        a.nav-item.logo-item
          img(src="~assets/images/logo.png" alt="Logo")
      div.column.adress.justify-content-center.common-content.is-narrow
        p Avenida dos Andradas, 910. Centro
        p Belo Horizonte - Minas Gerais
        p Cep: 30.120-010
        p Reuniões às quartas-feiras, às 19:30 - Mediante convocação
      div.column.email.justify-content-center.email-content
        p distritometropolitano@escotismo.org
        p
          small Melhor visualizado no Google Chrome
      div.column.social.justify-content-center.common-content
        p
          a.icon.social(@click="trackClick('Facebook Link')" href="https://www.facebook.com/EscoteirosDistritoMetropolitanoMG" target="BLANK")
            i.fa.fa-facebook
      div.map-footer
        br
        iframe(width="200" height="200" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6308.485435511285!2d-43.93573577801777!3d-19.922386965196353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f0193c4b35%3A0x2c36f2de6826e002!2sAv.+dos+Andradas%2C+910+-+Centro%2C+Belo+Horizonte+-+MG!5e0!3m2!1spt-BR!2sbr!4v1495489097013" allowfullscreen)        

    div.columns.footer-foot
      div.content.has-text-centered.container.column
        p.
          Copyright 2017 © ESCOTEIROS DE MINAS - Todos os direitos reservados #[br]
          #[small Desenvolvido por #[a(@click="trackClick('Developer Link')" href="http://gfviegas.com" target="BLANK") Gustavo Viegas]]
</template>

<script>
export default {
  name: 'header',
  data: () => {
    return {
      menuShown: false
    }
  },
  methods: {
    trackClick (name) {
      this.$ga.trackEvent(name, 'Click')
    },
    toggleMenuVisibility () {
      this.menuShown = !this.menuShown
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  footer
    padding: 0!important
    background: #c7010e !important

    *
      +mobile
        text-align: center

    +desktop
      .columns
        margin-bottom: 0 !important
        .column
          padding-bottom: 0

    &::before
      position: relative
      top: -1rem
      display: block
      height: 2rem
      width: 100%
      content: ''
      background: url(~assets/images/footer-border.png)
      background-repeat: repeat-x
      background-size: cover
      background-position: 30% 0
    .logo-column
      +desktop
        width: 25%
      .logo-item
        display: flex
        background: white
        border-radius: 1rem 1rem 0 0
        padding: 1rem
        +desktop
          height: 10rem
          justify-content: center
        img
          max-height: 8rem
    .common-content
      text-transform: uppercase
      padding-top: 2rem
      align-self: flex-start
    .email-content
      padding: 2rem
      align-self: flex-start
    .adress
      color: #fff
    .email, .social
      color: white
    .social
      display: inline-block
      .icon.padded-left
        // padding-left: 1.3rem
    .footer-foot
      background: #a20000
      +desktop
        margin-top: 0
      p
        color: rgb(255, 172, 135)
        padding: 0.5rem

 
</style>
