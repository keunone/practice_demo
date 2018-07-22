<template>
  <div class="swiper">
    <swiper
      :indicator-dots="true"
      indicator-color="#ea5a49"
      :autoplay="true"
      :interval="6000"
      :duration="1000"
      :circular="true"
    >
      <div :key="imgindex" v-for="(top, imgindex) in imgUrls">
        <swiper-item>
          <img
            @click="bookDetail(img)"
            class="slide-image"
            mode="aspectFit"
            :key="img.id"
            v-for="img in top"
            :src="img.image"
            alt=""
          >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['tops'],
  methods: {
    bookDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  },
  computed: {
    imgUrls () {
      // 如果通用 请用chunk函数 如lodash的chunk方法
      let res = this.tops
      console.log('mounted:', [res.slice(0, 3), res.slice(3, 6), res.slice(6)])
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
    }
  }
}
</script>
<style lang="scss">
.swiper {
  margin-top: 5px;
  .slide-image {
    width: 33%;
    height: 250rpx;
  }
}
</style>
