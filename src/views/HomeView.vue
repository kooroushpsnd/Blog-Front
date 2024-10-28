<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="$route.params.message">
      {{ $route.params.message }}
    </v-alert>
    <v-row no-gutters v-if="posts.length > 0">
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post' ,params: {title: post.title} }">
          <v-img height="250" :src="`http://localhost:5000/uploads/${post.image}`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.content.substring(0 ,100) + "..." }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import { getAllBlogs } from '@/apiBlogs';

export default defineComponent({
  name: 'HomeView',
  components: {},
  data(){
    return {
      posts: []
    }
  },
  async created(){
    this.posts = await getAllBlogs()
  }
});
</script>
