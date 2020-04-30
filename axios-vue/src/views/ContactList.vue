<template>
    <div class="home"> 
        <!-- 联系人列表 -->
        <van-contact-list
            :list="list"
            @add="onAdd"
            @edit="onEdit"
        />
        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" position="bottom">
            <van-contact-edit
                :contact-info="editingContact"
                :is-edit="isEdit"
                @save="onSave"
                @delete="onDelete"
            />
        </van-popup>
    </div>
</template>

<script>
import {ContactList,Toast,ContactEdit,Popup} from 'vant'
// import axios from 'axios'
    export default {
        name: 'contactList',
        components: {
            // 组件注册
            [ContactList.name]:ContactList,
            [ContactEdit.name]:ContactEdit,
            [Popup.name]:Popup    
        },
        data() {
            return {
                list: [
                    // {
                    //     id: 1,
                    //     name: '',
                    //     tel:''
                    // }
                ],
                instance:null,    //axios实例
                showEdit: false,   //编辑弹窗的显隐
                editingContact:{},   //正在编辑的联系人数据
                isEdit:false,   //控制编辑，false是新建，true是编辑
            }
        },
        created(){
            // 创建实例
            // this.instance = axios.create({
            //     baseURL: 'http://localhost:9000/api',
            //     timeout: 1000
            // })
            this.getList()
        },
        methods: {
            // 获取联系人列表
            async getList(){
                let res = await this.$Http.getContactList()
                console.log(res);
                
                // this.list = res.data
                // this.instance.get('/contactList').then(res=> {
                //     // console.log(res);
                //     this.list = res.data.data
                // }).catch(err => {
                //     // 后台报错的情况
                //     Toast('请求失败，请稍后重试！',err)
                // })
            },
            // 添加联系人
            onAdd(){
                this.showEdit = true
                this.isEdit = false   //新建的isEdit为false
            },
            // 编辑联系人
            onEdit(info){
                this.showEdit = true
                this.isEdit = true
                this.editingContact = info
            },
            // 保存联系人
            async onSave(info){
                if(this.isEdit){
                    let res = await this.$Http.editContact(info)
                    if(res.code === 200){
                        Toast('编辑成功')
                        this.showEdit = false
                        this.getList()
                    }
                    // 编辑
                    // this.instance.put('/contact/edit',info)
                    // .then(res => {
                    //         if(res.data.data === 200){
                    //             Toast('编辑成功')
                    //             this.showEdit = false
                    //             this.getList()
                    //         }
                    //     }
                    // ).catch(() => {
                    //     Toast("请求失败，请稍后重试！")
                    // })
                }else{
                    // 新建保存
                    let res = await this.$Http.newContactForm(info,true)
                    if(res.code === 200){
                        Toast('新建成功')
                        this.showEdit = false
                        this.getList()
                    }
                    
                    // 新建
                    // this.instance.post('/contact/new/json',info)
                    // .then(res => {
                    //     if(res.data.code === 200){
                    //         Toast('新建成功')
                    //         this.showEdit = false
                    //         this.getList()
                    //     }
                    // }).catch(() => {
                    //     Toast("请求失败，请稍后重试！")
                    // })
                }
            },
            // 删除联系人
            async onDelete(info){
                let res = await this.$Http.delContact(
                    {
                        id: info.id
                    }
                )
                if(res.code === 200){
                    Toast('删除成功')
                    this.ShowEdit = false
                    this.getList()
                }


                // delect将参数拼接到url上
                // this.instance.delete('/contact',{
                //     params:{
                //         id:info.id
                //     }
                // }).then(res => {
                //     if(res.data.code === 200){
                //         Toast('删除成功')
                //         this.showEdit = false
                //         this.getList()
                //     }
                // }).catch(() => {
                //     Toast("请求失败，请稍后重试！")
                // })
            }
        },
    }
</script>

<style>
.van-popup{
    width: 100%;
}
.van-contact-list__add{
    z-index: 0;
}
</style>