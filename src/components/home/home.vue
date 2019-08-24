<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <img src="../../assets/logo.png" alt>
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8" class="cl3">
          <a @click.prevent="logout" href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // console.log('退出')
      this.$confirm('此操作将退出账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!',
            duration: 800
          })
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出',
            duration: 800
          })
        })
    }
  }
}
</script>

<style  scoped lang='less'>
.el-container {
  height: 100%;
}
.el-header {
  background: #b3c1cd;
  padding: 0;
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 26px;
  }
}

.cl3 {
  text-align: right;
  line-height: 60px;
  padding-right: 30px;
  a {
    color: #daa520;
  }
}

.el-aside {
  background: #545c64;
}
.el-main {
  background: #eaeef1;
}
</style>
