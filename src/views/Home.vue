<template>
  <div class="home">

      <img src="../../public/images/ic_chat_white.png" class='rightImg' slot='right' />
      <div slot='search' class='search'>
        <input type='text' placeholder='影视 图书 唱片 小组等' class="sou" />
        <img src="../../public/images/ic_search.png" class='searchImg' />
        <img src="../../public/images/ic_scan_gray.png" class='scanImg' />
      </div>

      <lunbo></lunbo>
      <hometxt></hometxt>
  </div>

</template>

<script>

    import lunbo from "../components/lunbo";
    import hometxt from "../components/hometxt";

export default {
  name: 'Home',
  data(){
    return{

    }
  },

  components: {
      lunbo,
      hometxt
  }
}
</script>
<style scoped>
  .home{
    height: 70px;
    background-color:seagreen;
    position: relative;
  }
  .home .rightImg{
    background-color: seagreen;
    height: 50px;
    position: absolute;
    right: 8%;
    top: 10px;
  }
  .home .search{
    border-radius:5px ;
    width:70%;
    height: 50px;
    background-color: white;
    position: absolute;
    left: 8%;
    top:9px ;
  }
  .home .search .sou{
    font-size: 1rem;
    position: absolute;
    width: 40%;
    height:48px ;
    left: 15%;
    border: none;
  }
  .home .search .searchImg{
    position: absolute;
    left: 2%;
    top: 10px;
  }
  .home .search .scanImg{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10%;
    top:8px
  }
</style>
