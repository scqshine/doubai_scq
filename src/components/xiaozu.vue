<template>
    <div class="xiaozu">
<!--        <div v-for="value in arr">-->
<!--              <h2>{{value.title}}</h2>-->
<!--            <div class="bao" v-for="item in value.group_list">-->
<!--               <span><img :src="item.img_url" alt=""></span>-->
<!--                <span class="ming">{{item.group_name}}</span>-->
<!--                <span class="shu">{{item.group_member}}</span>-->
<!--                <p>{{item.topic_title}}</p>-->
<!--            </div>-->
<!--        </div>-->
        <div v-for="value in arr">
            <h2>{{value.title}}</h2>
            <div v-for="item in value.group_list">
                <span> <img :src="item.img_url" alt="">  </span>
                <span class="ming">{{item.group_name}}</span>
                <span class="shu">{{item.group_member}}</span>
                <p>{{item.topic_title}}</p>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr:[]
            };
        },
        name: "xiaozu",
        mounted:function() {
            this.axios.get("groupData.json").then(res=>{
                this.arr=res.data.group
            })
        }
    }
</script>

<style scoped>
    img{
        width: 60px;
        height: 60px;
    }
    img{
        vertical-align:middle;

    }
    .shu{
        float: right;
        margin-top: 15px;
    }
    p{
        overflow:hidden;
        white-space:nowrap;
        text-overflow: ellipsis;

    }
    .xiaozu{
        padding-top: 46px;
        text-align: left;
    }
/*   .xiaozu h2 {*/
/*     float: left;*/
/*     padding-top: 80px;*/
/*  }*/
/*   .bao{*/
/*       padding-top: 120px;*/
/*   }*/
/* .bao img{*/
/*     vertical-align:middle;*/
/*     float: left;*/
/* }*/
/* .bao .shu{*/
/*     float: right;*/
/* }*/
/* img{*/

/*      width: 60px;*/
/*      height: 60px;*/
/*      vertical-align:middle;*/
/*}*/
/* .bao p{*/
/*     overflow:hidden;*/
/*     white-space:nowrap;*/
/* }*/
</style>