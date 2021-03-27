<template>
    <div class="group">

        <span class="gr" slot='left'>小组</span>
        <div class="grou" slot='right'>
            <img src="../../public/images/ic_actionbar_search_icon.png" class="xiao" alt="">
            <img src="../../public/images/ic_chat_green.png" class="zu" alt="">
        </div>
        <xiaozu></xiaozu>
    </div>
</template>

<script>
    import xiaozu from "../components/xiaozu";
    export default {
        name: "group",
        components:{
            xiaozu
        }
    }
</script>

<style scoped>
    .group{
        background-color: darkgray;
        height: 70px;
        position: relative;
    }
    .group .gr{
        font-size: 30px;
        position: absolute;
        left: 39%;
        top: 15px;
    }
    .group .grou .xiao{
        width: 45px;
        position: absolute;
        right: 22%;
        top: 9px;
    }
    .group .grou .zu{
        width: 45px;
        position: absolute;
        right: 10%;
        top: 9px;
    }
</style>