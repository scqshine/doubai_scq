<template>
    <div class="itemFooter">
        <items txt='首页'  mark='home' :active='selected' @change="getVal">
            <img :src='homeAct' slot='activeImg'  />
            <img :src='homeNor' slot='normalImg' />
            <img src="" alt="">
        </items>
        <items txt='书影音'  mark='book' :active='selected' @change="getVal">
            <img :src='three' slot='activeImg'  />
            <img :src='four' slot='normalImg' />
        </items>
        <items txt='广播' mark='guangbo' :active='selected' @change="getVal">
            <img :src='five' slot='activeImg'  />
            <img :src='six' slot='normalImg' />
        </items>
        <items txt='小组'  mark='group' :active='selected' @change="getVal">
            <img :src='seven' slot='activeImg'  :active='selected' />
            <img :src='eight' slot='normalImg' />
        </items>
        <items txt='我的' mark='mine' :active='selected' @change="getVal">
            <img :src='nine' slot='activeImg'  />
            <img :src='ten' slot='normalImg' />
        </items>
    </div>
</template>

<script>
import items from "./items.vue";
import img1 from "../../public/images/ic_tab_home_normal.png"
import img2 from "../../public/images/ic_tab_home_active.png"
import img3 from "../../public/images/ic_tab_subject_active.png"
import img4 from "../../public/images/ic_tab_subject_normal.png"
import img5 from "../../public/images/ic_tab_status_active.png"
import img6 from "../../public/images/ic_tab_status_normal.png"
import img7 from "../../public/images/ic_tab_group_active.png"
import img8 from "../../public/images/ic_tab_group_normal.png"
import img9 from "../../public/images/ic_tab_profile_active.png"
import img10 from "../../public/images/ic_tab_profile_normal.png"
    export default {
    data(){
        return{
            selected: 'home',
            homeNor:img1,
            homeAct:img2,
            three:img3,
            four:img4,
            five:img5,
            six:img6,
            seven:img7,
            eight:img8,
            nine:img9,
            ten:img10
        }
    },
       components:{
           items
       },
        methods:{
            getVal(val){
                this.selected=val;
            }
        }
    }
</script>

<style scoped>
    .itemFooter{

        width: 100%;
        height: 35px;
        position: fixed;
        left: 0;
        bottom: 60px;
    }
 img{
    width: 40px;
}
</style>