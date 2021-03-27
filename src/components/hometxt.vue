<template>
    <div class="hometxt">
        <ul>
            <li v-for="value in arr">
                <h4>{{value.target.desc}}</h4>
                <h5 class="xi">{{value.title}}</h5>
                <h5>作者:{{value.target.author.name}}</h5>
                <img :src="value.target.author.avatar" alt="">
            </li>
        </ul>
    </div >
</template>

<script>
    export default {
        data(){
            return{
                arr:[]
            }
        },
        mounted:function() {
          this.axios.get("homeData.json").then(res=>{
              this.arr=res.data.recommend_feeds
          })

        },
        methods:{

        }
    }
</script>

<style scoped>
*{
   list-style: none;
    text-align: left;
}
.hometxt ul li{
    float: left;
}
    .hometxt ul li h4 {
        float: left;
        width: 70%;
        margin-left: -30px;
    }
.hometxt ul li h5{
    float: left;
    width: 70%;
    font-weight: lighter;
    margin-left: -30px;
    margin-top:-20px;
}
   ul li img{
        float: right;
       margin-top: -80px;
       width: 120px;
       height: 120px;
    }
</style>