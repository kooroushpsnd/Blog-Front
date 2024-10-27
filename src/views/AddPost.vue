<template>
    <v-container>
        <VRow no-gutters>
            <VCol sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Blog</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <VTextarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></VTextarea>
                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Select Image"></v-file-input>
                        <VBtn type="submit" class="mt-3" color="primary">Add Post</VBtn>
                    </v-form>
                </v-card>
            </VCol>
        </VRow>
    </v-container>
</template>

<script>
import { createBlog } from '@/apiBlogs';
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
        rules: [(value) => !!value || "This field is required"],
        post: {
            title: "",
            category: '',
            content: '',
            image: ''
        },
        image: ""
    }
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
    async submitForm(){
        const formData = new FormData()
        formData.append('image' ,this.image)
        formData.append('title' ,this.post.title)
        formData.append('category' ,this.post.category)
        formData.append('content' ,this.post.content)
        if(this.$refs.form.validate()){
            const response = await createBlog(formData)
            this.$router.push({ name: "HomeView" ,params: {message: response.message}})
        }
    }
  }
}
</script>
