<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <VListItem>
        <VListItemContent>
          <VListItemTitle>
            Kooroush Pasandideh
          </VListItemTitle>
          <VListItemSubtitle>
            Blog Website
          </VListItemSubtitle>
        </VListItemContent>
      </VListItem>
      <v-divider></v-divider>
      <VList density="compact">
      <VListItem
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :to="item.link"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <VListItemTitle v-text="item.title"></VListItemTitle>
      </VListItem>
    </VList>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import { VList, VListItem, VListItemTitle, VListItemSubtitle } from 'vuetify/components';
  export default {
    components: {
      VList,
      VListItem,
      VListItemTitle,
      VListItemSubtitle,
    },
    data: () => ({
      drawer: null,
      items: [
        { title: 'Home' ,icon: 'mdi-home' ,link: "/" },
        { title: 'Add Blog' ,icon: 'mdi-note-plus' ,link: "/add-post"},
        { title: 'About', icon: 'mdi-help-box' ,link: "/about"},
      ]
    }),
  }
</script>