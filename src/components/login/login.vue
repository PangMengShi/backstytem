<template>
  <!-- label-width 标签宽度
  -如果设置一个具体的值:在文本框的左边
  -如果不设置值,默认占一行-->
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="startLogin">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        // 校验用户名
        // required 必填的意思 里面写布尔值
        // message  提示信息
        // trigger: 'blur'  失去焦点的时候触发
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },
    startLogin () {
      console.log(11)

      // valid 是布尔值(true/false)
      this.$refs.loginForm.validate(valid => {
        // console.log(valid)
        // 异常节流 校验失败直接return
        if (!valid) {
          return false
        }
        // axios .post(url,data,config)
        axios
          .post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            console.log(res)
            if (res.data.meta.status === 200) {
              // console.log('登录成功')
              this.$message({
                message: '登录成功',
                type: 'success',
                // duration 持续时间
                duration: 800
              })
              this.$router.push('/home')
            } else {
              // console.log('登录失败')
              // this.$message.error('登录失败')
              //  this.$message.error('错了哦，这是一条错误消息')
              this.$message({
                message: '登录失败',
                type: 'error',
                // duration 持续时间
                duration: 800
              })
            }
          })
      })
    },
    resetForm () {
      console.log(22)
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
}

.el-row {
  height: 100%;
  background-color: #2d434c;
}
.el-form {
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 25px;
}
</style>
