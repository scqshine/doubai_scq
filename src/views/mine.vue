<template>
    <div class="mine">

        <span class="wo" slot='left'>我的</span>
        <div  slot='right'>
            <img src="../../public/images/ic_settings.png" class="wode" alt="">
        </div>
<!--        <mee></mee>-->
        <div class="left">
            <img src="icon10.png" alt="">
            <br>
            <span>密码管理</span>
        </div>
        <div class="right">
            <img src="icon11.png" alt="">
            <br>

            <span>银行卡管理</span>

        </div>
        <hr>
        <ul>
            <li  @click='goTo()' v-for="value in arr">
                <img :src="value.img" alt=""> <span class="zhuo">{{value.txt}}</span> <span class="you">></span><br><hr></li>

        </ul>
    </div>
</template>

<script>
    // import mee from "../components/mee";
    export default {
        name: "mine",
        data(){
            return{
                arr:[{
                    img:"icon12.png",
                    txt:"风险承受能力评估"
                },
                    {
                        img:"icon4.png",
                        txt:"安全保障"
                    },
                    {
                        img:"icon5.png",
                        txt:"我的关注"
                    },
                    {
                        img:"icon6.png",
                        txt:"帮助中心"
                    },
                    {
                        img:"icon4.png",
                        txt:"关于我们"
                    },
                    {
                        img:"icon13.png",
                        txt:"检查更新"
                    },
                    {
                        img:"icon8.png",
                        txt:"联系我们"
                    }]
            }
        },
        components:{
            // mee
        },
        methods:{
            goTo(){
                //直接跳转
                this.$router.push('/book');
                //带参数跳转
                // this.$router.push({path:'/testDemo',query:{setid:123456}});
                // this.$router.push({name:'testDemo',params:{setid:111222}});
            }

    }
    }


</script>

<style scoped>
    .mine{
        background-color: darkgray;
        height: 60px;
        border-bottom: 1px solid grey;
    }
     .wo{
        font-size: 30px;
     }
    .mine  .wode{
        width: 45px;
        float: right;
        margin-top: -32px;
        margin-right: 10%;
    }


    .left{
        height: 90px;
        position: relative;
        top: 24px;
        left: -40px;
        display: inline-block;
    }
    .right{
        height: 90px;
        position: relative;
        top: 24px;
        right: -50px;
        display: inline-block;
    }
    .right img{
        margin-bottom: 5px;
    }
    ul{
        margin-left: -40px;
    }
    ul li{
        list-style-type: none;
        line-height: 30px;

    }
    ul li img{
        vertical-align:middle;
        float: left;
        margin-left: 10px;
    }
    .zhuo{
        float: left;
        margin-left: 10px;
    }
    .you{
        float: right;
        color: #8AD697;
    }

</style>