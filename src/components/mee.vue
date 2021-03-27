<template>
    <div class="mee">
        <ul>
            <li><img src="" alt="">  </li><div class="di"></div>
            <li class="e"><img src="" alt="">风险承受能力评估</li><li class="di"></li>
            <li class="e">安全保障</li><li class="di"></li>
            <li class="e">我的关注</li><li class="di"></li>
            <li class="e">帮助中心</li><li class="di"></li>
            <li class="e">关于我们</li><li class="di"></li>
            <li class="e">检查中心</li><li class="di"></li>
            <li class="e">联系客服</li><li class="di"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mee"
    }
</script>

<style scoped>
*{
    list-style: none;
}

    .mee ul{
        width: 100%;
    }
    .mee .e{
        height: 50px;
        text-align: left;
        line-height:50px ;
    }
    .di{
        width: 100%;
        border: 1px solid  darkgray;
        padding-left: -100px;

    }
</style>