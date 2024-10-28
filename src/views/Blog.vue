<template>
  <v-container>
    <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
            <v-card class="pa-2">
                <v-img :src="`http://localhost:5000/uploads/${post.image}`"></v-img>
                <v-card-actions class="pb-0">
                    <v-row class="mt-1 mx-1">
                        <v-col sm="2">
                            <VBtn small outlined color="primary">{{ post.category }}</VBtn>
                        </v-col>
                        <v-col sm="10" class="d-flex justify-end">
                            <VBtn color="success" text :to="{ name:'edit-post' ,params: {title:post.title}}">Edit</VBtn>
                            <VBtn color="red" text @click="removeBlog(post.title)">Delete</VBtn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-subtitle class="headline">
                    <h3>{{ post.title }}</h3>
                </v-card-subtitle>
                <v-card-text class="text-grey">
                    <p>{{ post.content }}</p>
                    <p>{{ post.created }}</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { deleteBlog, getBlog } from '@/apiBlogs';
import { VBtn } from 'vuetify/components';

export default {
    data(){
        return{
            post: {}
        }
    },
    components:{VBtn},
    async created(){
        const res = await getBlog(this.$route.params.title)
        this.post = res
    },
    methods: {
        async removeBlog(title){
            await deleteBlog(title)
            this.$router.push({ name: 'HomeView' ,params: {message : `${title} got deleted successfully`}})
        }
    }
}
</script>