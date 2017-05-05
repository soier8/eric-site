<template lang="pug">
  main
    transition(name="fade")
      router-view
</template>

<script>
  // import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'

  export default {
    // components: {
    //   'breadcrumb': Breadcrumb
    // },
    name: 'groups'
  }
</script>

<style scoped lang="sass">
</style>
