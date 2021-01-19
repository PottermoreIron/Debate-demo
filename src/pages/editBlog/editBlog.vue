<template>
  <div class="editBlog">
    <form
      @submit="formSubmit"
      @reset="formReset"
    >
      <div class="title">

        <input
          type="text"
          placeholder="标题"
          class="title"
          name="title"
        >
      </div>
      <div class="content">
        <textarea
          type="text"
          placeholder="正文"
          class="content"
          name="content"
          maxlength="-1"
        >
        </textarea>
      </div>
      <button
        class="btn"
        form-type="submit"
      >发送</button>
      <button
        class="btn reset"
        form-type="reset"
      >重置</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  beforeMount() {
    console.log(this.$store.state.user.user_id);
  },
  methods: {
    formSubmit(e) {
      console.log(e);
      console.log(e.mp.detail.value.title);
      console.log(e.mp.detail.value.content);
      console.log(this.$store.state.user.user_id);
      wx.request({
        url: "http://localhost:8080/Blog/publish", //开发者服务器接口地址",
        data: {
          title: e.mp.detail.value.title,
          text: e.mp.detail.value.content,
          uid: this.$store.state.user.user_id,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          wx.showToast({
            title: "发表成功", //提示的内容,
            icon: "success", //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: (res) => {},
          });
          wx.navigateBack({
            delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
          });
        },
        fail: () => {},
        complete: () => {},
      });
    },
    formReset(e) {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
.editBlog {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  height: auto;
}
.title > input,
.content > textarea {
  border: solid;
  margin-top: 20rpx;
}
.title {
  display: block;
  margin: 0 auto;
  text-align: center;
}
.content {
  display: block;
}
.title > input {
  width: 500rpx;
}
.content > textarea {
  height: 1000rpx;
  width: 720rpx;
  text-indent: 100rpx;
  padding-left: 20epx;
}
.btn {
  width: 330rpx;
  height: 90rpx;
  line-height: 90rpx;
  margin-top: 60rpx;
  background: #3fb054;
  color: #fefefe;
  border-radius: 5%;
}
.reset {
  margin-bottom: 100rpx;
}
</style>