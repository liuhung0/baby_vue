<template>
  <div class="flex_box_login">
    <div class="flex_item_title">
      <h1>龚家湾邻家儿女婴童水疗养生馆</h1>
    </div>
    <div class="flex_item_center packing">
      <el-form :model="boss" status-icon :rules="bossRole" ref="bossForm" label-width="70px">
        <el-form-item label="用户名" prop="username" class="demo-ruleForm">
          <el-input type="text" v-model="boss.username" auto-complete="off" placeholder="邮箱或用户名"/>
        </el-form-item>
        <el-form-item label="密  码" prop="password" class="demo-ruleForm">
          <el-input type="password" v-model="boss.password" auto-complete="off" placeholder="请输入密码"/>
        </el-form-item>

      </el-form>
      <el-button @click="submitForm('bossForm')">登录</el-button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    components: {},
    data() {
      let validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        boss: {
          username: '',
          password: '',
        },
        bossRole: {
          username: [
            {validator: validateName, trigger: 'blur'},
            {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'},
            {min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'}
          ],
        }
      };
    },
    mounted() {
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let that = this;
            if (that.boss.username === "admin" && that.boss.password === "admin") {
              that.$router.replace("/main");
              that.$message.success('登录成功');
            }
            else {
              that.$message.error("账户或者密码错误");
            }
          }
        })
      }
    }
  }
</script>
<style>
  html, body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  .flex_box_login {
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    flex-wrap: wrap;
    background: url("../../assets/image/background.jpg") no-repeat;
    background-size: cover;
    min-height: 101vh;
    overflow: hidden;
    flex-flow: column;
    position: relative;
  }

  .demo-ruleForm .el-input__inner {
    background-color: transparent !important;
    border: none !important;
    font-size: 14px;
    color: #fff;
  }

  .flex_item_title {
    flex: 0 0 100%;
    margin-top: 12%;
  }

  .flex_item_title h1 {
    font-size: 1.8rem !important;
    color: #EFEFEF;
  }

  .flex_item_center {
    width: 492px;
    align-self: center;
    padding: 50px 40px 20px 20px;
    background: rgba(231, 236, 255, 0.20);
    box-shadow: 0 0 6px 0 rgba(109, 114, 146, 0.60);
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .flex_item_title h1 {
    font-size: 4.2rem;
  }

  .packing .el-form {
    width: 100%;
    height: 100%;
    margin-left: 15%;
  }

  .packing .el-form-item {
    background-color: transparent !important;
    border: 1px solid #fff;
    color: #fff;
  }

  .packing .el-form-item * {
    background-color: transparent !important;
  }

  .packing .el-input {
    width: 80%;
    display: flex;
    margin-top: 3px;
    color: #fff;
    background-color: transparent !important;
  }

  .packing .el-form-item__content {
    width: 100%;
    margin-left: 0 !important;
  }

  .packing .yzm {
    width: 50%;
    height: 35px;
    background: none;
    color: #CFCFCF;
    border: 1px solid #FFFFFF;
    margin-right: 6%;
    padding-left: 8px;
  }

  .packing .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #fff !important;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .packing .hq {
    width: 40%;
    background: #aaaaaa;
    border-radius: 2px;
    font-size: 1rem;
    color: #FFFFFF;
    border: none !important;
    padding: 10px 20px;
  }

  .packing .el-button {
    width: 360px;
    margin-left: 14px;
    border: none !important;
    background: #1B94FF;
    border-radius: 2px;
    font-size: 1rem;
    color: #FFFFFF;
    word-spacing: 4px;
    letter-spacing: 1px;
    margin-bottom: 5%;
  }

  .packing .el-form-item {
    width: 360px;
  }

  .packing .el-input__inner:-webkit-autofill {
    background-color: transparent !important;
  }

  .packing .el-col {
    border: none;
  }

  .packing .yanzhengma_input {
    width: 240px;
  }

  .packing .verification1 {
    vertical-align: middle;
    transform: translate(0px, 0);
    width: 102px;
  }

  #code {
    font-size: 18px;
    letter-spacing: 3px;
    /*color: #053d84;*/
    background: #f2f2f5 !important;
    height: 42px;
    border-radius: 0px;
    font-family: Arial;
    font-style: italic;
    font-weight: bold;
    border: 0;
    color: #1B94FF;
  }

  .disappear {
    visibility: hidden;
  }

  .packing .el-form-item__label:before {
    content: "";
    color: #ff4949;
    margin-right: 4px;
  }

  .packing .el-button:focus, .el-button:hover {
    color: #fff !important;
    border-color: #2179de !important;
    background-color: #2179de !important;
  }
</style>
