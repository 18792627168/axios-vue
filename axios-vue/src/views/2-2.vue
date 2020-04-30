<template>
    <div>

    </div>
</template>

<script>
/* 
    axios请求方法:get,post,put,patch,delete

    get：获取数据
    post：提交数据（表单提交+文件上传）
    put：更新数据（所有数据推送到后端）
    patch：更新数据（只将修改的数据推送到后端）
    delete：删除数据
*/
import axios from 'axios'
    export default {
        name: 'axios2-2',
        components:{

        },
        created () {
            // 这个是get方式的两种不同写法
            // http://localjost:8080/data.json?id=12
            axios.get('/data.json',{
                params:{
                    id:12
                }
            }).then((res) => {
                console.log(res);
            });
            axios({
                method: 'get',
                url: '/data.json',   //相对路径，相对于localhost 8080端口
                params:{
                    id:12
                }
            }).then(res => {
                console.log(res);
            })

            // post
            // post的别名方法：
            // 常用的data形式：form-data表单提交：图片文件上传
            // application/json
            let data  = {
                id:12
            }
            //这个是post的application的提交
            axios.post('/post',data).then(res => {
                console.log(res);
                
            })
            axios({
                method:'post',
                url: '/post',
                data:data
            }).then(res => {
                console.log(res);
            })
            // form-data的请求
            let formData  = new FormData()
            for(let key in data){
                formData.append(key,data[key])
            }
            axios.post('/post',formData).then(
                res => {
                    console.log(res);
                }
            )

            // put请求
            axios.put('/put',data).then(res => {
                console.log(res);
            })
            // patch请求
            axios.patch('/patch',data).then(res => {
                console.log(res);
            })
            
            // delete请求 分情况，可使用get或post均可
            // 将参数放在url内
            axios.delete('/delete',{
                params:{
                    id:12
                }
            }).then(res => {
                console.log(res);
            })
            // 将参数通过post传递
            axios.delete('/delete',{
                data:{
                    id:12
                }
            }).then(res => {
                console.log(res);
            })

            // 不使用别名方法
            axios({
                method: 'delete',
                url: '/delete',
                params: {},    //参数在url内
                data:{}        //参数在请求体内
            }).then(res => {
                console.log(res);
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>