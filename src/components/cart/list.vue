<template>
  <div v-if="cartgoods">
    <div
      v-for="(item, index) in cartgoods"
      id="list"
      :key="index"
    >
      <v-sheet class="listitem">
        <v-row>
          <v-col cols="4">
            <v-img
              width="27vw"
              height="27vw"
              :src="item.img"
            />
          </v-col>
          <v-col>
            <v-row>
              <v-col class="col1">
                <span
                  class="title titlearea"
                >{{ item.title }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col1">
                <span class="titlearea">{{ item.type }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <v-col class="col1">
                    <span>CN￥{{ item.onsale }} × </span>
                  </v-col>
                  <v-col class="col1">
                    <!-- 正常来说子组件是无法改变从父组件传来的值的，但这里传来的是对象
                    现在改变的不是对象的地址，而是对象中的属性的值，因此可以直接改变 -->
                    <v-select
                      v-model="cartgoods[index].mount"
                      :items="items"
                      label="1"
                      solo
                    />个
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-checkbox
              v-model="selected"
              :value="item.id"
            />
          </v-col>
          <v-col>
            <v-btn @click="calldialog(index)">
              移除
            </v-btn>
          </v-col>
          <v-col>{{ selected }}</v-col>
        </v-row>
      </v-sheet>
    </div>
    <v-dialog
      v-if="cartgoods[flag]"
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          移除商品？
        </v-card-title>
        <v-card-text style="padding-bottom:0;padding-top:12px">
          商品名称：{{ cartgoods[flag].title }}<br>
          类型：{{ cartgoods[flag].type }}<br>
          单价：CN￥{{ cartgoods[flag].onsale }}
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            color="grey"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>

          <v-btn
            color="red"
            text
            @click="remove"
          >
            从购物车移除商品
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  props: {
    cartgoods: {
      type: Array,
      default: function () {
        return null
      }
    }
  },
  data: () => ({
    flag: 0,
    dialog: false,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }),
  computed: {
    selected: {
      get: function () {
        return this.$store.state.cart.selectedgoods
      },
      set: function (newValue) {
        this.$store.commit('SET_SELECTEDGOODS', newValue)
      }
    }
  },
  created: function () {
    if (this.$store.state.cart.selectedgoods) {

    } else if (this.cartgoods) {
      let ids = []
      for (var i = 0; i < this.cartgoods.length; i++) {
        ids[i] = this.cartgoods[i].id
      }
      this.$store.commit('SET_SELECTEDGOODS', ids)
    }
  },
  methods: {
    remove: function () {
      this.dialog = false
      this.$store.state.loading = true
      setTimeout(() => {
        this.$store.state.loading = false
        this.$store.commit('REMOVE_CARTGOODS', this.flag)
        this.$store.commit('RESET_SELECTEDGOODS')
      }, 1500)
    },
    calldialog: function (index) {
      this.dialog = true
      this.flag = index
    }
  }
}
</script>

<style lang="sass" scoped>
#list
  margin-top: 16px
  padding: 14px
  background: #fff
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#list .titlearea
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 1
  overflow: hidden

#list .col1
  display: flex
  padding-top: 0
  padding-bottom: 0
  align-items: center

</style>
