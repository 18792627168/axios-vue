<template>
    <div>

    </div>
</template>

<script>
// axios的配置参数
import axios from 'axios'
    export default {
        name: 'axios3-2',
        created() {
            axios.created({
                baseURL: 'http://localhost:8080/', //请求的域名，基本地址
                timeout: 1000, //请求的超时时长(ms)
                url:'/data.json',   //请求路径
                method: 'get,post,put,patch,delete',   //请求方法
                headers: {
                    token: ''
                },   // 请求头
                params:{},  //请求参数拼接在url上
                data: {},    //请求参数放在请求体里
            })

            // 1.axios全局配置 
            axios.defaults.timeout = 1000  // defaults默认的全局配置
            axios.defaults.baseURL = 'http://localhost:8080/'
            // 2.axios实例配置     
            //在自己不进行重新配置时，使用的是全局默认配置
            let instance = axios.create()
            instance.defaults.timeout = 3000
            // 3.axios请求配置
            instance.get('/data.json',{
                timeout: 5000
            })


            // 实际开发
            // 有两种请求接口：http://localhost:9090
            // http://loaclhost:9091   对应两个后端服务
            let instance = axios.create({
                baseURL: 'http://localhost:9090',
                timeout: 1000
            })
            let instance1 = axios.create({
                baseURL:'http://localhost:9091',
                timeout: 3000
            })
            
            
            // 请求 baseURL,timeout,url,method,params
            instance.get('/contactList',{
                params:{}
            }).then((res) => {
                console.log(res);
            })
            // baseURL,timeout(5000),url,method
            instance1.get('/orderList',{
                timeout: 5000
            }).then((res) => {
                console.log(res);
            })


            // 例子
            // axios.get('/data.json',{
            //     params:{
                    
            //     }
            // })
        },
    }
</script>

<style lang="scss" scoped>

</style>