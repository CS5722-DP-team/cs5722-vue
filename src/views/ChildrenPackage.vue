  
<template>
  <div class="block">

    <el-timeline>
      <el-timeline-item timestamp="Member 1"
        placement="top">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Toy</h4>
              <p>
                <el-radio-group v-model="radio1_1">
                  <el-radio v-for="item in toy"
                    :label="item.id">{{item.name}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Food</h4>
              <p>
                <el-radio-group v-model="radio1_2">
                  <el-radio v-for="item in food"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="always">
              <h4>Drink</h4>
              <p>
                <el-radio-group v-model="radio1_3">
                  <el-radio v-for="item in drink"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="always">
              <h4>Vegetable</h4>
              <p>
                <el-radio-group v-model="radio1_4">
                  <el-radio v-for="item in vegetable"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

        </el-row>

        <el-button style="margin-top: 12px;"
          @click="confirmMem">confirm</el-button>
      </el-timeline-item>
    </el-timeline>
    <div v-for="(item,index) in meallist"
      :key="index"
      class="text item">
      {{'list content : ' + item.toy }}+{{item.food }}+{{item.drink }}+{{item.vegetable}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toy: [],
      food: [],
      drink: [],
      vegetable: [],
      meallist: [],
      radio1_1: 1,
      radio1_2: 1,
      radio1_3: 1,
      radio1_4: 1,
      radio1_5: 1,
        
<template>
  <div class="block">

    <el-timeline>
      <el-timeline-item timestamp="Member 1"
        placement="top">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Toy</h4>
              <p>
                <el-radio-group v-model="radio1_1">
                  <el-radio v-for="item in toy"
                    :label="item.id">{{item.name}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Food</h4>
              <p>
                <el-radio-group v-model="radio1_2">
                  <el-radio v-for="item in food"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="always">
              <h4>Drink</h4>
              <p>
                <el-radio-group v-model="radio1_3">
                  <el-radio v-for="item in drink"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="always">
              <h4>Vegetable</h4>
              <p>
                <el-radio-group v-model="radio1_4">
                  <el-radio v-for="item in vegetable"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

        </el-row>

        <el-button style="margin-top: 12px;"
          @click="confirmMem">confirm</el-button>
      </el-timeline-item>
    </el-timeline>
    <div v-for="(item,index) in meallist"
      :key="index"
      class="text item">
      {{'list content : ' + item.toy }}+{{item.food }}+{{item.drink }}+{{item.vegetable}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toy: [],
      food: [],
      drink: [],
      vegetable: [],
      meallist: [],
      radio1_1: 1,
      radio1_2: 1,
      radio1_3: 1,
      radio1_4: 1,
      radio1_5: 1,
        
<template>
  <div class="block">

    <el-timeline>
      <el-timeline-item timestamp="Member 1"
        placement="top">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Toy</h4>
              <p>
                <el-radio-group v-model="radio1_1">
                  <el-radio v-for="item in toy"
                    :label="item.id">{{item.name}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Food</h4>
              <p>
                <el-radio-group v-model="radio1_2">
                  <el-radio v-for="item in food"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="always">
              <h4>Drink</h4>
              <p>
                <el-radio-group v-model="radio1_3">
                  <el-radio v-for="item in drink"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="always">
              <h4>Vegetable</h4>
              <p>
                <el-radio-group v-model="radio1_4">
                  <el-radio v-for="item in vegetable"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>

        </el-row>

        <el-button style="margin-top: 12px;"
          @click="confirmMem">confirm</el-button>
      </el-timeline-item>
    </el-timeline>
    <div v-for="(item,index) in meallist"
      :key="index"
      class="text item">
      {{'list content : ' + item.toy }}+{{item.food }}+{{item.drink }}+{{item.vegetable}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toy: [],
      food: [],
      drink: [],
      vegetable: [],
      meallist: [],
      radio1_1: 1,
      radio1_2: 1,
      radio1_3: 1,
      radio1_4: 1,
      radio1_5: 1,
    };
  },
  methods: {
    cancelMem() {
      const _this = this;
      axios
        .post("http://localhost:8181/familylunch/cancelPart")
        .then(function (resp) {
          console.log(resp);
          _this.lunchlist = resp.data;
          if (resp.data != null) {
            _this.$alert("cancel success！", "message", {
              confirmButtonText: "confirm",
            });
          }
        });
    },
    confirmMem() {
      const _this = this;
      let data = {
        toy: this.toy[this.radio1_1 - 1].name,
        food: this.food[this.radio1_2 - 1].name,
        drink: this.drink[this.radio1_3 - 1].name,
        vegetable: this.vegetable[this.radio1_4 - 1].name,
      };
      axios
        .post("http://localhost:8181/childrenMeal/addChildrenMeal", data)
        .then(function (resp) {
          console.log(resp);
          _this.meallist = resp.data;
          if (resp.data != null) {
            _this.$alert("add success！", "message", {
              confirmButtonText: "confirm",
            });
          }
        });
    },
  },
  created() {
    const _this = this;
    axios
      .get("http://localhost:8181/childrenMeal/findAllParts")
      .then(function (resp) {
        console.log(resp);
        _this.toy = resp.data.toy;
        _this.food = resp.data.food;
        _this.drink = resp.data.drink;
        _this.vegetable = resp.data.vegetable;
      });
  },
};
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
  clear: both;
}
.box-card {
  width: 480px;
}
</style>
    };
  },
  methods: {
    cancelMem() {
      const _this = this;
      axios
        .post("http://localhost:8181/familylunch/cancelPart")
        .then(function (resp) {
          console.log(resp);
          _this.lunchlist = resp.data;
          if (resp.data != null) {
            _this.$alert("cancel success！", "message", {
              confirmButtonText: "confirm",
            });
          }
        });
    },
    confirmMem() {
      const _this = this;
      let data = {
        toy: this.toy[this.radio1_1 - 1].name,
        food: this.food[this.radio1_2 - 1].name,
        drink: this.drink[this.radio1_3 - 1].name,
        vegetable: this.vegetable[this.radio1_4 - 1].name,
      };
      axios
        .post("http://localhost:8181/childrenMeal/addChildrenMeal", data)
        .then(function (resp) {
          console.log(resp);
          _this.meallist = resp.data;
          if (resp.data != null) {
            _this.$alert("add success！", "message", {
              confirmButtonText: "confirm",
            });
          }
        });
    },
  },
  created() {
    const _this = this;
    axios
      .get("http://localhost:8181/childrenMeal/findAllParts")
      .then(function (resp) {
        console.log(resp);
        _this.toy = resp.data.toy;
        _this.food = resp.data.food;
        _this.drink = resp.data.drink;
        _this.vegetable = resp.data.vegetable;
      });
  },
};
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
  clear: both;
}
.box-card {
  width: 480px;
}
</style>
    };
  },
  methods: {
    cancelMem() {
      const _this = this;
      axios
        .post("http://localhost:8181/ChildrenMeal/cancelPart")
        .then(function (resp) {
          console.log(resp);
          _this.lunchlist = resp.data;
          if (resp.data != null) {
            _this.$alert("cancel success！", "message", {
              confirmButtonText: "confirm",
            });
          }
        });
    },
    confirmMem() {
      const _this = this;
      let data = {
        toy: this.toy[this.radio1_1 - 1].name,
        food: this.food[this.radio1_2 - 1].name,
        drink: this.drink[this.radio1_3 - 1].name,
        vegetable: this.vegetable[this.radio1_4 - 1].name,
      };
      axios
        .post("http://localhost:8181/childrenMeal/addChildrenMeal", data)
        .then(function (resp) {
          console.log(resp);
          _this.meallist = resp.data;
          if (resp.data != null) {
            _this.$alert("add success！", "message", {
              confirmButtonText: "confirm",
            });
          }
        });
    },
  },
  created() {
    const _this = this;
    axios
      .get("http://localhost:8181/childrenMeal/findAllParts")
      .then(function (resp) {
        console.log(resp);
        _this.toy = resp.data.toy;
        _this.food = resp.data.food;
        _this.drink = resp.data.drink;
        _this.vegetable = resp.data.vegetable;
      });
  },
};
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
  clear: both;
}
.box-card {
  width: 480px;
}
</style>
