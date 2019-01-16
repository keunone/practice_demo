<template>
  <div class="page-header">
    <el-header>
      <div class="header-container">
        <div class="header-left">
          <img class="img-logo" src="../../assets/logo.png" alt="">
          <span>Vue Demo</span>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">项目管理</el-menu-item>
          <el-menu-item index="2">所有公司</el-menu-item>
          <el-menu-item index="3">个人简历</el-menu-item>
          <el-menu-item index="4">登录</el-menu-item>
        </el-menu>
      </div>
    </el-header>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'layoutheader',
  components: {},
  data() {
    return {
      activeIndex: '1'
    };
  },
  props: {},
  computed: {
    // ...mapGetters(["avatar", "name", "introduction", "isLogin"])
  },
  methods: {
    routerCommand(command) {
      switch (command) {
        case '1':
          this.$router.push({ name: 'projects' });
          break;
        case '2':
          this.$router.push({ name: 'companies' });
          break;
        case '3':
          this.$router.push({ name: 'resumes' });
          break;
        case '4':
          this.$router.push({ name: 'login' });
          break;
        default:
      }
    },
    handleSelect(key) {
      this.routerCommand(key);
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
}
.header-left {
  display: flex;
  align-items: center;
  width: 200px;
  line-height: 60px;
}
.img-logo {
    width: 50px;
    height: 50px;
  }
.el-header {
  color: #333;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
</style>
