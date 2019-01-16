<template>
  <layout>
    <div slot="main" class="page-login">
      <div class="form-wrap">
        <el-form :model="ruleForm"
          status-icon :rules="rules2"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../../components/layout/index';

export default {
  name: 'login',
  components: {
    Layout
  },
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      if (/^[0-9]+$/.test(value)) {
        return callback(new Error('请输入中文或英文用户名'));
      }
      return callback();
    };
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      if (!Number.isInteger(value)) {
        return callback(new Error('请输入数字值'));
      } else if (value < 18) {
        return callback(new Error('必须年满18岁'));
      }
      return callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //  console.dir(this.ruleForm);
          // alert('submit!');
        } else {
          // console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
  .page-login {
    width: 100%;
  }
  .form-wrap {
    width: 60%;
  }
</style>
