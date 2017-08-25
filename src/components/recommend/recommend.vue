<template>
    <div class="recommend">
        我是推荐页
    </div>
</template>

<script>
import {getRecommend} from '@/api/recommend';
import {ERR_OK} from '@/api/config';

export default {
    created(){
        getRecommend().then((res) => {
            if (res.code === ERR_OK) {
                this.recommends = res.data.slider;
            }
        })
    },
    data(){
        return{
            recommends:[]
        }
    },
    methods:{

    }
}
</script>

<style scoped lang="less">

</style>
