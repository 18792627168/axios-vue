<template>
    <div>

    </div>
</template>

<script>
// 错误处理：请求错误时进行的处理
import axios from 'axios'
    export default {
        name: 'axios3-4',
        created(){
            axios.interceptors.request.use
            (config => {
                return config
            },err => {
                // 请求错误
                return Promise.reject(err)
            })
            axios.interceptors.response.use
            (res => {
                return res
            },err => {
                return  Promise.reject(err)
            })


            axios.get('/data.json').then((res) => {
                console.log(res);
            }).catch(err => {
                // 拦截时，请求后和响应后都会进入catch
                console.log(err);
            })

            // 例子：实际开发中都需要一个统一的处理
            let instance = axios.create({})
            instancce.interceptors.request.use
            (config => {
                return config
            },err => {
                // 请求错误 一般http状态码以4开头，常见401超时，404 not found
                $("#modal").show()
                setTimeout(() => {
                    $("#modal").hide()
                },2000)
                return Promise.reject(err)
            })
            instance.interceptors.response.use
            (res => {
                console.log(res);
            },err => {
                // 响应错误处理，一般http状态码以5开头，500系统错误，502系统重启
                $("#modal").show()
                setTimeout(() => {
                    $("#modal").hide()
                },3000)
                return Promise.reject(err)
            })
            instance.get('/data.json').then(
                res => {
                    console.log(res);
                }
            ).catch(err => {    //错误处理
                console.log(err);
            }) 
        }
    }
</script>

<style lang="scss" scoped>

</style>