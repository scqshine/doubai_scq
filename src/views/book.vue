<template>
    <div class="book">

            <span class="shu" slot='left'>书影音</span>
            <div class="suo" slot='right'>
                <img src="../../public/images/ic_actionbar_search_icon.png" class="ying" alt="">
                <img src="../../public/images/ic_chat_green.png" class="yin" alt="">
            </div>

  <shuyingyin></shuyingyin>

    </div>
</template>

<script>
    import shuyingyin from "../components/shuyingyin";

    export default {
        name: "book",
        components: {
            shuyingyin
        }
    }
</script>

<style scoped>
.book{
    background-color: darkgray;
    height: 70px;
    position: relative;
}
.book .shu{
    font-size: 30px;
    position: absolute;
    left: 39%;
    top: 15px;
}
.book .suo .yin{
  width: 45px;
    position: absolute;
    right: 10%;
    top: 9px;
}
.book .suo .ying{
    width: 45px;
    position: absolute;
    right: 22%;
    top: 9px;
}
</style>