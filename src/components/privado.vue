<template lang="html">
<div>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <a href="/" class=navbar-brand>Ejemplo</a>
    </nav>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-4">
          <div class="card">            
                  <div class="card-header">            
                          Agregar tarea
                  </div>
                  <div class="card-body"> 
                    <div>         
                    <div class="form-group">
                      <label for=""></label>
                      <input type="text" class="form-control" v-model="nuevaNota.Texto" name="" aria-describedby="helpId" placeholder="">
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input type="text" class="form-control" v-model="nuevaNota.Autor" name="" aria-describedby="helpId" placeholder="">
                    </div>
                      <div class="form-group">
                      <label for=""></label>
                      <input type="file" class="form-control" @change="previewImage" name="" aria-describedby="helpId" placeholder="">
                       <button v-on:click="addNota">Agregar</button>
                    </div>
                    </div>
                  </div>
          </div>
        
      </div>
      <div class="col-sm-8 text-center">
          <div class="card">            
              <div class="card-header">            
                      Lista Tareas
              </div>
              <div class="card-body">            
                <table class="table">
                  <thead>
                    <tr>
                      <th>Texto</th>
                      <th>Autor</th>
                    </tr>
                  </thead>
                  <tbody v-for='nuevaNota in ListaNotas' :key='nuevaNota.texto'>
                    <tr>
                      <td>{{nuevaNota.Texto}}</td>
                      <td>{{nuevaNota.Autor}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
  </div>
  </div>
</div>
</template>

<script lang="js">
import {db} from '../db.js';
import firebase from 'firebase';
  export default  {
    name: 'privado',
    props: [],
    mounted () {

    },
    data () {
      return {
        ListaNotas:[],
        nuevaNota:{
          Texto:"",
          Autor:"",
          archivoSubir:{name:"",url:""}
        },
        
      }
    },
    methods: {
      addNota:function() {
        firebase.storage().ref(`${this.nuevaNota.archivoSubir.name}`).put(this.nuevaNota.archivoSubir);
        firebase.storage().ref().child(this.nuevaNota.archivoSubir.name).getDownloadURL().then(
          url =>{
            this.nuevaNota.archivoSubir.url=url
        db.collection('listaNotas').add(
          {Texto:this.nuevaNota.Texto,
          Autor:this.nuevaNota.Autor,
          archivoSubir:{
            name:this.nuevaNota.archivoSubir.name,
            url:this.nuevaNota.archivoSubir.url,
          }
          });
          this.nuevaNota.Texto='';
          this.nuevaNota.Autor='';
          });
      },
      borrarNota:function(nota) {
        db.collection('listaNotas').doc(nota.id).delete();
      },
      previewImage:function (event) {
        this.nuevaNota.archivoSubir=event.target.files[0];}
    },
    computed: {

    },    
  firestore: {
    ListaNotas: db.collection('listaNotas'),
  }
}
// db.collection('').doc(nota.id).delete()

</script>

<style scoped lang="css">
  .privado {

  }
</style>
