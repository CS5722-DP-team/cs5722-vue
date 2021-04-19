<template>
  <div class="block">

    <el-timeline>
      <el-timeline-item timestamp="Now visitor can see all Burger parts"
                        placement="top">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              <h4>chicken</h4>
              <p>
                <el-radio-group v-model="radio1_1">
                  <el-radio v-for="item in size"
                            :label="item.id">{{item.size}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>vegetables</h4>
              <p>
                <el-radio-group v-model="radio1_2">
                  <el-radio v-for="item in vegetable"
                            :label="item.id">{{item.type}}</el-radio>

                </el-radio-group>
              </p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h4>Sop</h4>
              <p>
                <el-radio-group v-model="radio1_3">
                  <el-radio v-for="item in sop"
                            :label="item.id">{{item.soptype}}</el-radio>
                </el-radio-group>
              </p>
            </el-card>
          </el-col>

        </el-row>

        <el-button style="margin-top: 12px;"
                   @click="cancelMem">visit</el-button>

      </el-timeline-item>
    </el-timeline>
    <div v-for="(item,index) in list"
         :key="index"
         class="text item">
      {{'list content : ' + item.size }}+{{item.type}}+{{item.soptype}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: '',
      type: '',
      soptype: '',
    };
  },
  methods: {
    cancelMem() {
      const _this = this;
      axios
          .post("http://localhost:8181/burgervisitor/displayburger")
          .then(function (resp) {
            console.log(resp);
            _this.list = resp.data;
            if (resp.data != null) {
              _this.$alert("Complete the visit！", "message", {
                confirmButtonText: "confirm",
              });
            }
          });
    },
  },

  created() {
    const _this = this;
    axios
        .get("http://localhost:8181/burgervisitor/displayburger")
        .then(function (resp) {
          console.log(resp);
          _this.size = resp.data.size;
          _this.soptype = resp.data.soptype;
          _this.type = resp.data.type;
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

