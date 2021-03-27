 <template>
  <div id="app">
    <router-view/>
    <footers></footers>
  </div>
</template>
<script>
  import footers from "./components/footers";
  export default {
    components:{
   footers
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
