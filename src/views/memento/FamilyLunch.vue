<template>
  <div class="block">

    <el-timeline>
      <el-timeline-item timestamp="Member 1"
        placement="top">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Staple</h4>
              <p>
                <el-radio-group v-model="radio1_1">
                  <el-radio v-for="item in staples"
                    :label="item.id">{{item.name}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Sauce</h4>
              <p>
                <el-radio-group v-model="radio1_2">
                  <el-radio v-for="item in sauces"
                    :label="item.id">{{item.name}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Vegetable</h4>
              <p>
                <el-radio-group v-model="radio1_3">
                  <el-radio v-for="item in vegetables"
                    :label="item.id">{{item.name}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>

        </el-row>

        <el-button style="margin-top: 12px;"
          @click="cancelMem">prev</el-button>
        <el-button style="margin-top: 12px;"
          @click="confirmMem">next</el-button>
      </el-timeline-item>
    </el-timeline>
    <div v-for="(item,index) in lunchlist"
      :key="index"
      class="text item">
      {{'list content : ' + item.staple }}+{{item.sauce}}+{{item.vegetable}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      staples: [],
      sauces: [],
      vegetables: [],
      lunchlist: [],
      radio1_1: 1,
      radio1_2: 1,
      radio1_3: 1,
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
        staple: this.staples[this.radio1_1 - 1].name,
        sauce: this.sauces[this.radio1_2 - 1].name,
        vegetable: this.vegetables[this.radio1_3 - 1].name,
      };
      axios
        .post("http://localhost:8181/familylunch/addPart", data)
        .then(function (resp) {
          console.log(resp);
          _this.lunchlist = resp.data;
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
      .get("http://localhost:8181/familylunch/findAllParts")
      .then(function (resp) {
        console.log(resp);
        _this.staples = resp.data.staple;
        _this.sauces = resp.data.sauce;
        _this.vegetables = resp.data.vegetable;
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

