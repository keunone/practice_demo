<template>
  <layout>
    <div slot="main">
      <h3>companies Page</h3>
      <el-button type="primary" size="small" @click="addCompany">添加</el-button>
    </div>
  </layout>
</template>

<script>
import Layout from '../../components/layout/index';

export default {
  name: 'companies',
  components: {
    Layout
  },
  data() {
    return {
      data: {}
    };
  },
  props: {},
  created() {
    this.getData();
  },
  watch: {},
  computed: {},
  methods: {
    getData() {
      this.$http.get('/api/company').then(response => {
        this.response = response;
      }).catch(err => {
        throw (err);
      });
    },
    addCompany() {
      this.$http.post('/api/company', {
        title: 'bye, Wizinno',
        introduction: '假的公司',
        created_at: new Date()
      })
        .then(res => {
          this.data = res;
          // console.log('resData成功数据：', res.data);
        })
        .catch(e => {
          throw (e);
          // console.log('保存失败!', e);
        });
    }
  }
};
</script>

<style scoped>
</style>
