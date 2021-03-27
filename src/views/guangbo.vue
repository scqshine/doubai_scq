<template>
    <div class="guangbo">
        <span class="shu" slot='left'>广播</span>
        <div  slot='right'>
            <img src="../../public/images/ic_status_search_user.png" class="guang" alt="">
            <img src="../../public/images/ic_chat_green.png" class="bo" alt="">
        </div>
        <newspaper></newspaper>
    </div>
</template>

<script>
    import newspaper from "../components/newspaper";
    export default {
        name: "guangbuo",
        components:{
            newspaper
        }

    }
</script>

<style scoped>
    .guangbo{
        background-color: darkgray;
        height: 70px;
        position: relative;
    }
    .guangbo .shu{
        font-size: 30px;
        position: absolute;
        left: 39%;
        top: 15px;
    }
    .guangbo .guang{
        width: 45px;
        position: absolute;
        right: 22%;
        top: 9px;
    }
    .guangbo .bo{
        width: 45px;
        position: absolute;
        right: 10%;
        top: 9px;
    }
</style>