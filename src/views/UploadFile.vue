<template>
  <v-container>
    <v-card>
      <v-row align="center">
        <v-col cols="12" sm="6" md="12">
          <h3>Upload an image to Firebase</h3>
        </v-col>
        
        <v-col cols="12" sm="6" md="2">
          <h4>file-name :</h4>
        </v-col>

        <v-col cols="12" sm="6" md="8">
          <v-text-field label="insert" v-model="file_name"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <v-btn @click="openFile" color="success">Open File</v-btn>
        </v-col>

        <v-col cols="12" sm="6" md="12">
          <!-- <input type="file" @change="previewImage" /> -->
          <v-file-input label="File input" @change="previewImage"></v-file-input>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" sm="6" md="12">
          Progress: {{uploadValue.toFixed()+"%"}}
          <v-progress-linear id="progress" :value="uploadValue" max="100"></v-progress-linear>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" sm="6" md="12">
          <div v-if="imageData!=null" align="center">
            <iframe class="preview" :src="picture" />
            <br>
            <v-btn @click="onUpload" color="primary">Upload</v-btn>
          </div>
        </v-col>  
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase"

export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      file_name: "",

      link: null
    }
  },
  methods: {
    previewImage() {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
      this.link = null
    },

    onUpload() {
      this.picture = null
      this.link = null
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData)
      storageRef.on(
        `state_changed`,
        snapshot => {
          // % Upload
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        error => {
          console.log(error.message)
        },
        () => {
          this.uploadValue = 100
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url
            this.link = url
            window.open(this.link)

            console.log(this.picture)
          })
        }
      )
    },
    openFile () {
      var storage = firebase.storage().ref(this.file_name)  

      storage.getDownloadURL().then(url => {
        this.link = url
        window.open(this.link)
        console.log(this.link)
      })
    }
  }
}
</script>
