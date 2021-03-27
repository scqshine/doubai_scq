<template>
    <div class="el">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="电影" name="first">
            <div class="zhong">
            <h3 class="zhengzai">正在上映的电影</h3>
            <div class="video">
            <ul>
                <li>
                    <img src="../../public/img1.png" height="155" width="112"/>
                    <p>超时空同居</p>
                    <span>评分:7.2</span>
                </li>
                <li>
                    <img src="../../public/img2.png" height="155" width="112"/>
                    <p>蓝色金鱼</p>
                    <span>评分:0</span>
                </li>
                <li>
                    <img src="../../public/img3.png" height="155" width="112"/>
                    <p>哆啦A梦</p>
                    <span>评分:8.2</span>
                </li>
                <li>
                    <img src="../../public/img4.png" height="155" width="112"/>
                    <p>暗夜吸人</p>
                    <span>评分:7.2</span>
                </li>
                <li>
                    <img src="../../public/img5.png" height="155" width="112"/>
                    <p>厕所英雄</p>
                    <span>评分:0</span>
                </li>
                <li>
                    <img src="../../public/img6.png" height="155" width="112"/>
                    <p>深海逃狱</p>
                    <span>评分:8.2</span>
                </li>
            </ul>
            </div>
            <h3 class="jijiang"> 即将上映的电影</h3>
                <div class="video">
                    <ul>
                        <li>
                            <img src="../../public/img4.png" height="155" width="112"/>
                            <p>暗夜吸人</p>
                            <span>评分:7.2</span>
                        </li>
                        <li>
                            <img src="../../public/img5.png" height="155" width="112"/>
                            <p>厕所英雄</p>
                            <span>评分:0</span>
                        </li>
                        <li>
                            <img src="../../public/img6.png" height="155" width="112"/>
                            <p>深海逃狱</p>
                            <span>评分:8.2</span>
                        </li>
                        <li>
                            <img src="../../public/img1.png" height="155" width="112"/>
                            <p>超时空同居</p>
                            <span>评分:7.2</span>
                        </li>
                        <li>
                            <img src="../../public/img2.png" height="155" width="112"/>
                            <p>蓝色金鱼</p>
                            <span>评分:0</span>
                        </li>
                        <li>
                            <img src="../../public/img3.png" height="155" width="112"/>
                            <p>哆啦A梦</p>
                            <span>评分:8.2</span>
                        </li>
                    </ul>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="读书" name="second">读书</el-tab-pane>
        <el-tab-pane label="电视" name="third">电视</el-tab-pane>
        <el-tab-pane label="同城" name="fourth">同城</el-tab-pane>
    </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    *{
        list-style: none;
    }
 .el{
     width: 100%;
     height: 40px;
     padding-top: 80px;
 }
    .el .zhong{
        height: 1300px;
    }

    .el .zhengzai{
       text-align: left;
    }
    .el .jijiang{
        text-align: left;

    }
    .el ul li{
        display: inline-block;
        margin-left: 25px;
    }
    .el ul li p{
        height: 5px;
        margin-top: -2px;
    }
    .el ul li p span{
        font-weight: lighter;
        color: darkgray;
    }
    .video{
        margin-left: -90px;
    }
</style>