<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>书名</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "teset",
        data(){
            return{
                books:[
                    {
                        id:1,
                        name:'零基础java实战',
                        author:'hello'
                    },
                    {
                        id:2,
                        name:'spring零基础实战',
                        author:'world'
                    },
                    {
                        id:3,
                        name:'vue零基础实战',
                        author:'this'
                    }
                ]
            }
        },
        created(){
            const _this = this
            axios.get('http://localhost:8181/test/findAll').then(function(resp){
                _this.books = resp.data
            })
        }
    }
</script>

<style scoped>

</style>



