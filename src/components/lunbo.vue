<template>
    <div class="block">
        <el-carousel trigger="click" height="300px">
            <el-carousel-item v-for="item in arr" :key="item">
                <h3 class="small"><img :src="item" alt=""/></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>

    export default {
        name:'lunbo',
        data(){
            return{
                arr:["01.jpg","02.jpg","03.jpg"]
            }
        }
    }
</script>

<style scoped>
    .el-carousel-item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    /*.el-carousel__item:nth-child(2n) {*/
    /*    background-color: #99a9bf;*/
    /*}*/

    /*.el-carousel__item:nth-child(2n+1) {*/
    /*    background-color: #d3dce6;*/
    /*}*/
    img{
        height: 300px;
        width: 100%;
    }
 .block{
     padding-top: 66px;
 }
</style>