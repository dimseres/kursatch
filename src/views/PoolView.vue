<template>
  <div>
    <v-container>
      <v-row justify="center" class="mt-5 text-center">
        <v-col cols="8">
          <v-card elevation="12">
            <v-img
                height="150px"
                src="https://images.unsplash.com/photo-1468971050039-be99497410af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
            >
              <div class="pool_name_wrapper text-left">
                <v-card-title class="pb-0"><h2>Тест по биологии</h2></v-card-title>
                <v-card-text class="pb-0">Время на выполнение 20 минут.</v-card-text>
                <v-card-text class="pt-0">Автор: Попов А.А</v-card-text>
              </div>
            </v-img>
          </v-card>
          <v-btn class="mt-5" color="#4B53F2" dark>приступить</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-card class="mt-2">
            <v-card-title>
              Как называется этот тип данных?
            </v-card-title>
            <v-card-text>
              <v-row
                  no-gutters
                  align="center"
                  class="mx-0"
              >
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet commodi dolore eaque eveniet facere fuga nam nostrum odio,
                  odit perferendis perspiciatis possimus, quis voluptate?
                  Atque explicabo fugiat natus obcaecati quod!
                </div>
              </v-row>
              <v-row
                  no-gutters
                  class="mx-0"
              >
                <div>
                  <v-radio-group v-model="answers.quest3">
                    <v-radio label="lorem"></v-radio>
                    <v-radio label="ipsum natus quod!"></v-radio>
                    <v-radio label="dolor sit"></v-radio>
                  </v-radio-group>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-card class="mt-2">
            <v-card-title>
              Как называется этот тип данных?
            </v-card-title>
            <v-card-text>
              <v-row
                  no-gutters
                  align="center"
                  class="mx-0"
              >
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet commodi dolore eaque eveniet facere fuga nam nostrum odio,
                  odit perferendis perspiciatis possimus, quis voluptate?
                  Atque explicabo fugiat natus obcaecati quod!
                </div>
              </v-row>
              <v-row
                  no-gutters
                  class="mx-0"
              >
                <div>
                  <v-radio-group v-model="answers.quest1">
                    <v-radio label="lorem"></v-radio>
                    <v-radio label="ipsum natus quod!"></v-radio>
                    <v-radio label="dolor sit"></v-radio>
                  </v-radio-group>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-card class="mt-2">
            <v-card-title>
              Как называется этот тип данных?
            </v-card-title>
            <v-card-text>
              <v-row
                  no-gutters
                  align="center"
                  class="mx-0"
              >
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet commodi dolore eaque eveniet facere fuga nam nostrum odio,
                  odit perferendis perspiciatis possimus, quis voluptate?
                  Atque explicabo fugiat natus obcaecati quod!
                </div>
              </v-row>
              <v-row
                  no-gutters
                  class="mx-0"
              >
                <div>
                  <v-radio-group v-model="answers.quest2">
                    <v-radio label="lorem"></v-radio>
                    <v-radio label="ipsum natus quod!"></v-radio>
                    <v-radio label="dolor sit"></v-radio>
                  </v-radio-group>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      {{ result }}
      <v-row justify="center">
        <v-col cols="2">
          <v-btn color="#4B53F2" dark>Отправить</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PoolView",
  data() {
    return {
      answers: {
        quest1: null,
        quest2: null,
        quest3: null,
      },
      res: [],
    }
  },
  watch: {
    answers: {
      handler: function (val, oldVal) {
        console.log("val", val, 'old', oldVal)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pool_name_wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}
</style>