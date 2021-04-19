<template>
  <div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="name" v-model="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="password" v-model="password">
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">login</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login"></span><span style="float: right;color: #A9A9AB">forget password?</span>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  data() {
    return {
      userName: '',
      password: '',
      isBtnLoading: false
    }
  },
  created () {
    if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
      this.userName = JSON.parse( localStorage.getItem('user')).userName;
      this.password = JSON.parse( localStorage.getItem('user')).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return 'login...';
      return 'login';
    }
  },
  methods: {
    login(loginname) {
      const _this = this;

          axios.post('http://localhost:8181/login/loginsubmit',this.login_form).then(function(resp){
            if(resp.data == 'success'){
              if (!this.userName) {
                this.$message.error('plz enter name');
                return;
              }
              if (!this.password) {
                this.$message.error('plz enter pwd');
                return;
              }
                }

         else {
          return false;
        }
      });

        if (!this.userName) {
          this.$message.error('plz enter name');
          return;
        }
        if (!this.password) {
          this.$message.error('plz enter pwd');
          return;
        }
      }

    }

}
</script>
<style>
.login_form {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}
/*
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #000099, #2154FA); !* Safari 5.1 - 6.0 *!
  background: -o-linear-gradient(right, #000099, #2154FA); !* Opera 11.1 - 12.0 *!
  background: -moz-linear-gradient(right, #000099, #2154FA); !* Firefox 3.6 - 15 *!
  background: linear-gradient(to right, #000099 , #2154FA); !* 标准的语法 *!
  filter: brightness(1.4);
}*/
</style>