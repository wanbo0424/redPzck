<template>
    <section id="content">
        <!-- 领取 -->
       <receive v-if="isShow == 0"></receive>
       <!-- 领取成功 -->
       <success v-if="isShow == 2"></success>
       <!-- 领取失败 -->
       <fail v-if="isShow == 1" :red-packinfo = data></fail>

       <tips></tips>
    </section>
</template>
<script>
import receive from './receive'
import fail from './fail'
import {getRedpackinfo} from '../api/api'

import tips from './common/tips'
export default {
    data(){
        return {
            isShow:'0',
            data:{}
        }
    },
    created(){
        // const ID = this.$route.params.id;
        
        
        this.$nextTick( () =>{
            getRedpackinfo({}).then(res => {
                
                console.log(res)
                this.data = res.data;
                // res.data.result == 0 ? this.isShow = 0 : this.isShow = 1
            });
        })
        
    },
    components:{
        receive,
        fail,
        tips
    }
}
</script>
<style>
    #content {
        width: 100%;;
        margin: 0 auto;
    }
</style>
