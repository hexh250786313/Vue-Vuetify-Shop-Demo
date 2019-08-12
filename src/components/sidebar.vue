<template>
  <v-navigation-drawer
    id="side-bar"
    v-model="drawer"
    class="nav"
    temporary
    width="290"
    app
  >
    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar>
          <img
            src="https://raw.githubusercontent.com/hexh250786313/amai_mayoi.github.io/master/img/tama.ico"
            alt="Vue"
          >
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Vue Shopping</v-list-item-title>
          <v-list-item-subtitle>Materail Design</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-btn
        outlined
        color="indigo"
        width="270"
        height="60"
      >
        Logout
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { icon: 'mdi-home', title: '首页' },
      { icon: 'mdi-widgets', title: '专区' },
      { icon: 'mdi-cart', title: '购物车' },
      { icon: 'mdi-settings', title: '设置' }
    ]
  })
}
</script>

<style lang="sass" scoped>
.nav .v-toolbar__title
  margin-left: 20px

.nav  .v-list-item__icon
  margin-right: 32px

.nav  .v-list-item__avatar
  margin-right: 32px

.nav  .v-divider
  margin-bottom: 10px

.nav .v-btn
  margin-bottom: 10px
  margin-left: 10px
</style>
