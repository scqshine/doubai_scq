<template>
    <div class="newspaper">
   <div id="tops">
       <img src="../../public/images/ic_avatar_default.png" alt="">
       <span id="deng">登录发广告</span>
   </div>
        <div id="dou">
            <img src="../../public/images/ic_douban_pay.png" alt="">
            <span class="ban">豆瓣 <span class="xie">写了日记</span></span>
            <span class="shi">2018-05-23 10:39:42</span>
        </div>
        <div class="wen">
            <p>5月24日凌晨3:00-6:00 豆瓣停机维护</p>
            <p>因业务发展需要,豆瓣计划于5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆揭相天..
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newspaper"
    }
</script>

<style scoped>
    .newspaper{
        vertical-align: auto;
    }
#tops{
   padding-top: 80px;
    margin: auto;
}
    #tops img{
      float: left;
    }
#tops #deng{
    font-size: 35px;
    font-weight: lighter;
    float: left;
    margin-top: 10px
}
#dou{
    margin-top: 80px;
    margin-left: -220px;
    float: left;
    position: relative;
}
#dou img{
    width: 60px;
    border-radius: 2rem;
}
#dou .ban{
     position: absolute;
    top:9px;

}
#dou .xie {
    color: darkgray;
}
    #dou .shi{
        color: darkgray;
    }
    .wen{
        position: absolute;
        top: 230px;
        left: 9%;
        width: 90%;
        text-overflow: clip;
        text-align: left;
        background-color: whitesmoke;

    }
</style>