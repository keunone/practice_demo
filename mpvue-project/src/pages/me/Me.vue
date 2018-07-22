<template>
  <div class="container">
    <div class="userInfo" @click="login">
      <img :src="userInfo.avatarUrl" alt="" class="img">
      <p>{{userInfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>

    <button v-if="userInfo.openId" @click="scanBook" class="btn">添加图书</button>
  </div>
</template>
<script>
import YearProgress from '@/components/YearProgress'
import { showSuccess, post, showModal } from '@/util'
import qcloud from 'wafer2-client-sdk'
import config from '@/config'

export default {
  components: {
    YearProgress
  },
  created () {
    if (qcloud.Session.get() && qcloud.Session.get().userinfo) {
      this.userInfo = qcloud.Session.get().userinfo
    }
  },
  data () {
    return {
      userInfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    async addBook (isbn) {
      console.log('isbn:', isbn)
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userInfo.openId
      })
      showModal('添加成功', `${res.title}添加成功`)
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          this.addBook(res.result)
        }
      })
    },
    login () {
      const session = qcloud.Session.get()
      const self = this
      if (session) {
        // 第二次登录
        // 或者本地已经有登录态
        // 可使用本函数更新登录态
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.loginWithCode({
          success: res => {
            console.log('第n次登录成功', res)
            showSuccess('登录成功')
            self.userInfo = res
            // qcloud.request({
            //   url: config.userUrl,
            //   login: true,
            //   success (userRes) {
            //     console.log(userRes, 'userRes')
            //   }
            // })
          },
          fail: err => {
            console.log('登录失败', err)
          }
        })
      } else {
        // 首次登录
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userInfo) {
            console.log('登录成功', userInfo)
            showSuccess('登录成功')
            // wx.setStorageSync('userInfo', userInfo)
            self.userInfo = userInfo
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
      // let user = wx.getStorageSync('userInfo')
      // const self = this
      // if (!user) {
      //   qcloud.setLoginUrl(config.loginUrl)
      //   qcloud.login({
      //     success: function (userInfo) {
      //       console.log('登录成功', userInfo)
      //       showSuccess('登录成功')
      //       wx.setStorageSync('userInfo', userInfo)
      //       self.userInfo = userInfo
      //     },
      //     fail: function (err) {
      //       console.log('登录失败', err)
      //     }
      //   })
      // }
    },
    onShow () {
      let userInfo = qcloud.Session.get().userinfo
      if (userInfo) {
        this.userInfo = userInfo
      }
    }
  }
}
</script>
<style lang="scss">
.container {
  padding: 0 30rpx;
  .userInfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150px;
      height: 150px;
      margin: 20px;
      border-radius: 50%;
    }
  }
}
</style>
