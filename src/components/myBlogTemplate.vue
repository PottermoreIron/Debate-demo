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
    <img
      src="/static/images/MyBlog/delete.svg"
      alt="picture"
      class="dustbin"
      @tap.stop="dustbin"
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: {
    return: {
      detailObj: {},
    },
  },
  beforeMount() {},
  methods: {
    toDetail() {
      wx.navigateTo({ url: "/pages/myBlogDetail/main?index=" + this.index });
    },
    dustbin() {
      let detailObj = this.$store.state.myBlogTmp[this.index];
      console.log(detailObj);
      wx.request({
        url: "http://localhost:8080/InBlog/delete", //开发者服务器接口地址",
        data: {
          cid: this.item.blog.blog_authorId,
          bid: this.item.blog.blog_id,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {},
        fail: () => {},
        complete: () => {},
      });
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
.dustbin {
  width: 100rpx;
  height: 100rpx;
}
</style>