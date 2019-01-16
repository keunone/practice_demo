<template>
  <div class="page-index">
    <layout-header></layout-header>
    <div class="index-content">
      <layout-content>
        <side-nav slot="left"></side-nav>
      </layout-content>
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
import layoutHeader from '../layout/header';
import SideNav from '../layout/side-nav';
import LayoutContent from '../layout/content';

export default {
  name: 'layout',
  components: {
    layoutHeader,
    SideNav,
    LayoutContent
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
  .el-main {
    color: #333;
    text-align: center;
  }
  .index-content {
    display: flex;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    height: 100%;
  }

  .el-container:nth-child(7) .el-aside {
    height: 100%;
  }
</style>
