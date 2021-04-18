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
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Order</span>
            </div>
            <div class="text item" >
                <el-row type="flex" justify="start">
                    {{orders[0].setorder}}
                </el-row>
                <el-row type="flex" justify="end" >

                    <el-button @click="addOrder(0)" type="primary" size="mini">+</el-button>
                    <p>{{orders[0].num}}</p>
                    <el-button @click="reduceOrder(0)" type="primary" size="mini" >-</el-button>
                </el-row>
                <el-row type="flex" justify="start">
                    {{orders[1].setorder}}
                </el-row>
                <el-row type="flex" justify="end" >

                    <el-button @click="addOrder(1)" type="primary" size="mini">+</el-button>
                    <p>{{orders[1].num}}</p>
                    <el-button @click="reduceOrder(1)" type="primary" size="mini" >-</el-button>
                </el-row>
                <el-row type="flex" justify="start">
                    {{orders[2].setorder}}
                </el-row>
                <el-row type="flex" justify="end" >

                    <el-button @click="addOrder(2)" type="primary" size="mini">+</el-button>
                    &emsp;
                    <p>{{orders[2].num}}</p>
                    &emsp;
                    <el-button @click="reduceOrder(2)" type="primary" size="mini" >-</el-button>
                </el-row>
            </div>
            <el-button @click="submitOrder">Confirm</el-button>
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
                    },
                orders:[{setorder:'MealSetOne',type:1,num:0},
                    {setorder:'MealSetTwo',type:2,num:0},
                    {setorder:'MealSetThree',type:3,num:0}]

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
            },
            addOrder(i){
                this.orders[i].num += 1
            },
            reduceOrder(i){
                if(this.orders[i].num-1<0){
                    this.orders[i].num=0
                }else {
                    this.orders[i].num -= 1
                }
            },
            submitOrder(){
                const _this = this
                if(_this.orders[0].num+_this.orders[1].num+_this.orders[2].num>0) {
                    axios.get('http://localhost:8181/mealset/handlemealset/'+_this.orders[0].type+'/'+_this.orders[0].num+'/'+_this.orders[1].type+'/'+_this.orders[1].num+'/'+_this.orders[2].type+'/'+_this.orders[2].num).then(function(resp){
                        if(resp.data=='success'){
                            _this.$alert('Order success！', 'message', {
                                    confirmButtonText: 'OK',
                                    callback: action => {
                                        window.location.reload()
                                    }
                                })
                        }
                    })
                }else{
                    alert('orders can not be 0!')
                }
                console.log(this.orders)
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



