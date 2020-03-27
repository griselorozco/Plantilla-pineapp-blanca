<template>
  <v-content id="view-app">
    <v-img
      id="imgBgApp"
      src="../../../../assets/backgroundPanel.jpg"
    >
      <router-view />
    </v-img>
  </v-content>
</template>

<script>
  import appBg from '../../../../assets/backgroundPanel.jpg'
  export default {
    name: 'DashboardCoreView',

    components: {

    },
    data () {
      return {
        path: Object.assign(appBg),
      }
    },
    mounted () {
    } }
</script>
