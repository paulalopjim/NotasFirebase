<template lang="html">

  <section class="login">
      <div class="form-group">  
      <input type="email" v-model="usuario.email" name="email" placeholder="Correo Electronico" required/>
      </div>
      <div class="form-group">      
      <input type="password" name="password" v-model="usuario.pass" placeholder="Contraseña" required/>
      </div>
      <div class="form-group">
      <button v-on:click="autentificar">Acceder</button>
      <button v-on:click="registrar">Registrarse</button>
      </div>
  </section>

</template>

<script lang="js">
// import {db} from '../db.js';
import firebase from 'firebase';
  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuario:{
        email:"",
        pass:""
        }
      }
    },
    methods: {
      registrar:function() {
        firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.pass).then(function () {
          alert('hecho')         
        }).catch(function() {
          alert('usuario registrado');
        });
      },
      autentificar:function(){
        firebase.auth().signInWithEmailAndPassword(this.usuario.email, this.usuario.pass).then(function () {
          alert('entraste');         
        }).catch(function() {
          alert('usuario no registrado');
        });
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .login {

  }
</style>
