<template>
  <div class="pos-relative"
  >
    <v-app-bar
        :color="mainCol"
        class="my_app_bar"
        light
    >
      <v-app-bar-nav-icon @click.prevent="toggleMenu"></v-app-bar-nav-icon>

      <v-toolbar-title class="bolder uppercase">EDUGREE {{  drawer }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="notify"
              icon
              v-bind="attrs"
              v-on="on"
          ><v-icon>mdi-bell</v-icon><sup>1</sup></v-btn>
        </template>
      </v-menu>
    </v-app-bar>
    <SubMenu :toggle="drawer" @update:toggle="val => drawer = val"></SubMenu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";

export default {
  name: "Navbar",
  components: {
    SubMenu
  },
  data: () => ({
    drawer: false,
    mainCol: '#fff',
    items: [{
      title: 'Успешно пройден тест'
    }]
  }),
  computed: {
    menu() {
      return this.drawer
    }
  },
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped lang="scss">
.my_app_bar {
  box-shadow: 0 0 30px rgba(#000, .1) !important;
}
.bolder {
  font-weight: 900;
}
.uppercase {
  text-transform: uppercase;
}
.h-20 {
  min-height: 20px;
}
.notify {
  position: relative;
  sup {
    position: absolute;
    right: 10px;
    top: 0px;
    background: #4B53F2;
    border-radius: 50%;
  }
}
</style>