<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col class="pa-3" cols="4">
          <v-card
              elevation="2">
            <v-card-title>Философия тест 1</v-card-title>
            <v-card-subtitle>Назначено</v-card-subtitle>
            <v-card-text>
              <v-row
                  no-gutters
                  align="center"
                  class="mx-0"
              >
                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="pa-3" cols="4">
          <v-card
              elevation="2">
            <v-card-title>Марковские процессы</v-card-title>
            <v-card-subtitle>Пройдено</v-card-subtitle>
            <v-card-text>
              <v-row
                  no-gutters
                  align="center"
                  class="mx-0"
              >
                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="pa-3" cols="4">
          <v-card>
            <v-card-title>Культура речи</v-card-title>
            <v-img
                class="w-100"
                height="120"
                src="../assets/img.png"
            >
            </v-img>
            <v-card-subtitle>
              Назначено
            </v-card-subtitle>

            <v-card-text>
              <v-row
                  no-gutters
                  align="center"
                  class="mx-0"
              >
                <div class="grey--text">
                  <v-icon>mdi-sigma</v-icon>
                  0 / 10
                </div>
              </v-row>

            </v-card-text>
            <v-card-actions>
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="reserve"
                  :to="{ name: 'PoolView', params: { uuid: 123 }}"
              >
                пройти
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Navbar from "../components/Navbar";

export default {
  name: 'Index',

  components: {
    // Navbar,
  },
}
</script>
<style lang="scss" scoped>
</style>