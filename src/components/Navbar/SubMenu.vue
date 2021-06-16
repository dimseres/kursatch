<template>
    <v-navigation-drawer
        v-model="toggle"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-title class="text-h6">
          EDUGREE
        </v-list-item-title>
        <v-list-item-subtitle>
          тесты
        </v-list-item-subtitle>
        <v-divider></v-divider>
        <v-list-item-group
            active-class="text--accent-4"
            color="#7278F2"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Профиль</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: "SubMenu",
  props: ['toggle'],
  computed: {
    draw() {
      return this.drawer
    }
  },
  watch: {
    toggle: function (val){
      this.$emit('update:toggle', val)
    }
  }
}
</script>

<style scoped>

</style>