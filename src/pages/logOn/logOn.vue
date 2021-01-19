<template>
  <div class="logOn">
    <form
      @submit="formSubmit"
      @reset="formReset"
    >
      <input
        type="text"
        placeholder="您的User ID"
        class="userId"
        name="userId"
      >
      <input
        type="text"
        placeholder="密码"
        class="password"
        name="password"
      >
      <button
        class="btn"
        form-type="submit"
      >登录</button>
      <button
        class="btn"
        form-type="reset"
      >重置</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    formSubmit(e) {
      console.log(e);
      console.log(e.mp.detail.value.userId);
      console.log(e.mp.detail.value.password);
      wx.request({
        url: "http://localhost:8080/Login/Log", //开发者服务器接口地址",
        data: {
          uid: e.mp.detail.value.userId,
          password: e.mp.detail.value.password,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          console.log(res.data);
          this.$store.dispatch("getUserInfo", res.data);
          console.log(this.$store.state.user);
          if (res.data) {
            wx.showToast({
              title: "登陆成功", //提示的内容,
              icon: "success", //图标,
              duration: 300, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: (res) => {},
            });
            wx.showModal({
              title: "注意", //提示的标题,
              content: "登陆后回到个人页记得刷新", //提示的内容,
              showCancel: true, //是否显示取消按钮,
              cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
              cancelColor: "#000000", //取消按钮的文字颜色,
              confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
              confirmColor: "#3CC51F", //确定按钮的文字颜色,
              success: (res) => {
                if (res.confirm) {
                  wx.navigateBack({
                    delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                  });
                } else if (res.cancel) {
                  console.log("用户点击取消");
                }
              },
            });
          } else if (!res.data) {
            wx.showToast({
              title: "登录失败", //提示的内容,
              icon: "none", //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: (res) => {},
            });
          }
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
.logOn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 450rpx;
}
.userId,
.password,
.btn {
  width: 400rpx;
  height: 60rpx;
  margin-bottom: 50rpx;
}
.userId,
.password {
  border-radius: 30rpx;
  box-shadow: 0 7rpx 23rpx rgba(0, 0, 0, 0.3), 0 10rpx 19rpx rgba(0, 0, 0, 0.22);
}
.btn {
  line-height: 70rpx;
  width: 200rpx;
  height: 70rpx;
  margin-top: 60rpx;
  background: #3fb054;
  color: #fefefe;
  font-size: 33rpx;
}
input {
  border: solid;
}
</style>