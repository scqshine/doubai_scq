<template>

    <div class="itemTab" @click="fn">
        <span  v-show='bol'>
         <slot name='activeImg'></slot>
        </span>
        <span  v-show='!bol'>
         <slot name='normalImg'></slot>
        </span>
        <p>{{txt}}</p>
    </div>
</template>

<script>
    export default {
        props:['txt','mark','active'],
        data(){
            return{

            }
        },
        computed:{
            bol:function () {
                if (this.mark==this.active){
                    return true;
                }
                return false;
            }
        },
        methods:{
            fn:function () {
                 this.$emit('change',this.mark);
                 this.$router.push('/'+this.mark)
            }
        }
    }
</script>

<style scoped>

    .itemTab{
        background-color: gainsboro;
        width: 20%;
        float: left;
        text-align: center;
    }
    /*.itemsTab img{*/

    /*}*/
</style>