<template>
    <div>

    </div>
</template>

<script>
// 取消正在运行的http请求
import axios from 'axios'
    export default {
        name: 'axios3-5',
        created(){
            let source = axios.CancelToken.source()    //创建了一个token
            axios.get('/data.json',{
                cancalToken: source.token
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })

            // 取消请求(message可选)
            source.cancal('cancel http')
            
            // 什么情况下可能用到取消请求
            // 商城3-5s 用户取消请求

        }
    }
</script>

<style lang="scss" scoped>

</style>