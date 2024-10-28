<template>
    <v-container>
        <VRow no-gutters>
            <VCol sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Edit Blog</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list"></v-text-field>
                        <VTextarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus"></VTextarea>
                        <v-file-input @change="selectFile" show-size counter multiple label="Select Image"></v-file-input>
                        <v-img :src="`http://localhost:5000/uploads/${post.image}`" width="120px"></v-img>
                        
                        <VBtn type="submit" class="mt-3" color="success">Update Post</VBtn>
                    </v-form>
                </v-card>
            </VCol>
        </VRow>
    </v-container>
</template>

<script>
import { getBlog, updateBlog } from '@/apiBlogs';
import { VTextarea, VBtn, VCol, VRow, VCardActions } from 'vuetify/components'

export default {
  components: {
    VTextarea,
    VBtn,
    VCol,
    VRow,
    VCardActions,
  },
  data(){
    return{
        post: {
            title: "",
            category: '',
            content: '',
            image: ''
        },
        image: ""
    }
  },
  async created(){
    const res = await getBlog(this.$route.params.title)
    this.post = res
  },
  methods: {
    selectFile(files){
        const file = event.target.files;
        if (file.length > 0) {
            this.image = file[0];
        } else {
            this.image = null;
        }
    },
    async updateForm(){
        const formData = new FormData()
        formData.append('image' ,this.image)
        formData.append('title' ,this.post.title)
        formData.append('category' ,this.post.category)
        formData.append('content' ,this.post.content)
        if(this.$refs.form.validate()){
            const response = await updateBlog(this.$route.params.title ,formData)
            this.$router.push({ name: "HomeView" ,params: {message: "Blog got updated"}})
        }
    }
  }
}
</script>
