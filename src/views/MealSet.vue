<template>
    <div>
        <table>
            <tr>
                <td><el-button @click="getMealSet1" >MealSet1</el-button></td>
                <td><el-button @click="getMealSet2">MealSet2</el-button></td>
                <td><el-button @click="getMealSet3">MealSet3</el-button></td>
            </tr>
        </table>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Staple</span>
            </div>
            <div  class="text item">
                {{mealset.staple.name}}
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Drink</span>
            </div>
            <div class="text item">
                {{mealset.drink.name}}
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Price</span>
            </div>
            <div class="text item">
                €{{mealset.price}}
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "teset",
        data(){
            return{
                mealset:
                    {
                        staple:'',
                        drink:'',
                        price:0
                    }

            }
        },
        /*created(){
            const _this = this
            axios.get('http://localhost:8181/mealset/getmealset').then(function(resp){
                _this.mealset = resp.data
                console.log(resp.data)
            })
        },*/
        methods:{
            getMealSet1(){
                const _this = this
                axios.get('http://localhost:8181/mealset/getmealset/1').then(function(resp){
                    _this.mealset = resp.data
                })
            },
            getMealSet2(){
                const _this = this
                axios.get('http://localhost:8181/mealset/getmealset/2').then(function(resp){
                    _this.mealset = resp.data
                })
            },
            getMealSet3(){
                const _this = this
                axios.get('http://localhost:8181/mealset/getmealset/3').then(function(resp){
                    _this.mealset = resp.data
                })
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>



