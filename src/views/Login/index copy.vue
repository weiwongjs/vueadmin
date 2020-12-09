<template>
  <div id="login" class="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          @click="toggleMenu(item)"
          :class="{ current: item.current }"
          v-for="(item, index) of menuTab"
          :key="index"
        >
          {{ item.title }}
        </li>
      </ul>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form demo-ruleForm"
      >
        <el-form-item prop="username" class="item-form">
          <label for="">邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-form">
          <label for="">密码</label>
          <el-input
            type="text"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item-form">
          <label for="">验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code"></el-input
            ></el-col>
            <el-col :span="9">
              <el-button
                class="block"
                type="success"
                >获取验证码</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn block" type="danger" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form> 

      
    </div>
  </div>
</template>

<script>
import {stripscript} from '@/utils/validate.js'

export default {
  name: "login",
  data() {

    // 验证用户名
    var validateUsername = (rule, value, callback) => {
      let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if(!reg.test(value)){
        callback(new Error("用户名格式错误"));
      } else {
        if (this.ruleForm.username !== "") {
          this.$refs.ruleForm.validateField("username");
        }
        callback();
      }
    };
    // 验证密码
    var validatePassword = (rule, value, callback) => {
      console.log(1)
      stripscript(value);
      let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码格式错误"));
      } else {
        callback();
      }
    }
    // 验证验证码
    var checkAge = (rule, value, callback) => {
      let reg = /^[a-z0-9]{6}$/;
      if (value === '') {
        return callback(new Error("验证码不能为空"));
      } else if(!reg.test(value)){
        return callback(new Error("验证码格式错误"));
      }else{
        callback();
      }
    };
    return {
      menuTab: [
        { title: "登陆", current: true },
        { title: "注册", current: false },
      ],
      isActive: true,
      ruleForm: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        code: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    toggleMenu(data) {
      for (let item of this.menuTab) {
        item.current = false;
      }
      data.current = true;
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
};
</script>

<style lang="scss">
body {
  margin: -15px 0 0;
}

#login {
  height: 100vh;
  background-color: #344a5f;
}

.login-wrap {
  width: 330px;
  margin: auto;
}

.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}

.login-form {
  margin-top: 29px;

  label {
    display: block;
    font-size: 14px;
    color: #ffffff;
  }
  .item-form {
    margin-bottom: 13px;
  }
  .block {
    display: block;
    width: 100%;
  }
  .login-btn{
    margin-top: 19px;
  }
}
</style>
