<template>
  <div class="block">

    <el-timeline>
      <el-timeline-item timestamp="Member 1"
        placement="top">
        <el-row :gutter="12">
          <el-col :span="24">
            <el-card shadow="always">
              <h4>Room</h4>
              <p>
                <el-radio-group v-model="radio1_1">
                  <el-radio v-for="item in room"
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
    <div v-for="(item,index) in changelist"
      :key="index"
      class="text item">
      {{'list content : ' + item.description }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      room: [],
      changelist: [],
      radio1_1: 1,
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
        room: this.room[this.radio1_1 - 1].name,
      };
      axios
        .post("http://localhost:8181/changeRoomToKitchen/changeRoom", data)
        .then(function (resp) {
          console.log(resp);
          _this.changelist = resp.data;
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
      .get("http://localhost:8181/changeRoomToKitchen/findAllParts")
      .then(function (resp) {
        console.log(resp);
        _this.room = resp.data.room;
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

