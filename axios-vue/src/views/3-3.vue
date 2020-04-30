<template>
    <div>

    </div>
</template>

<script>
// 拦截器: 在请求或响应被处理前拦截。
// 请求拦截器，响应拦截器
import axios from 'axios'
    export default {
        name: 'axios3-3',
        created() {
            // 请求拦截器
            axios.interceptors.request.use(
                confog => {
                    // 在发送请求前做些什么
                    return config
                },err => {
                    // 在请求错误的时候做些什么
                    return Promise.reject(err)
                }
            )
            // 响应拦截器
            axios.interceptors.response.use(
                res => {
                    // 请求成功是对响应数据的处理
                    return res
                },err => {
                    // 响应错误做些什么
                    return Promise.reject(err)
                }
            )

            // 取消拦截器（了解）
            let instance = axios.interceptors.request.use
            (config => {
                config.headers ={
                    auth: true
                }
                return config
            })
            // 当不需要使用的时候取消拦截器
            axios.interceptors.request.eject(interceptors)


            // 例子  登录状态（token:''）  这个用于访问登录的接口
            let instance = axios.create({})
            instance.interceptors.request.use
            (
                config => {
                    config.headers.token = ''
                    return config
                }
            )
            // 不需要登录的接口
            let newInstance = axios.create({})


            // 移动端开发
            // 下面这两个是请求前展示一个弹窗，请求后关闭这个弹窗
            let instance_phone = axios.create({})
            instance_phone.interceptors.request.use(
                config => {
                    $('#modal').show()
                    return config
                }
            )
            instance_phone.interceptors.response.use(
                res => {
                    $('#modal').hide()
                    return res
                }
            )







            // axios.get().then().catch(err => {
            //     // 这个是请求失败的
            // })
        },
    }
</script>

<style lang="scss" scoped>

</style>