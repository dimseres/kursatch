<template>
  <div class="pos-relative"
  >
    <v-app-bar
        :color="mainCol"
        class="my_app_bar"
        light
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="bolder uppercase">EDUGREE</v-toolbar-title>
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

    <v-navigation-drawer
        v-model="drawer"
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    mainCol: '#fff',
    items: [{
      title: 'Успешно пройден тест'
    }]
  })
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