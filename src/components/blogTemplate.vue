<template>
  <div
    class="card"
    @tap="toDetail"
  >
    <h1>&nbsp;&nbsp;{{item.blog.blog_title}}</h1>
    <div class="article">
      <div class="textArea">
        <p>{{item.blog.blog_content}}
        </p>
      </div>
      <div class="imageArea">
        <img
          src="/static/images/test/avatar.svg"
          alt="picture"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail() {
      console.log(this.index);
      wx.navigateTo({ url: "/pages/blogDetail/main?index=" + this.index });
    },
  },
  props: ["item", "index"],
};
</script>

<style>
h1 {
  font-size: 50rpx;
  font-weight: bold;
  font-style: italic;
}
.card {
  width: 700rpx;
  margin-top: 50rpx;
  margin-left: 30rpx;
  border-radius: 30rpx;
  box-shadow: 0 10rpx 50rpx rgba(0, 0, 0, 0.3),
    0 10rpx 20rpx rgba(0, 0, 0, 0.22);
}
.article {
  display: flex;
  flex-direction: row;
  padding-left: 10rpx;
}
.textArea {
  height: 250rpx;
  width: 500rpx;
  display: -webkit-box;
  /*隐藏溢出的文本*/
  overflow: hidden;
  text-overflow: ellipsis;
  /*自动换行 但英文文章会被切割单词 所以不用*/
  /*word-break: break-all;*/
  /*从上到下自动排列子元素*/
  -webkit-box-orient: vertical;
  /*显示的行数*/
  -webkit-line-clamp: 6;
}
.imageArea {
  padding-right: 30rpx;
}
.imageArea > image {
  width: 150rpx;
  height: 150rpx;
  border-radius: 30rpx;
}
</style>