<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  }
};
</script>
