<template>
  <div class="register">
    <form
      @submit="formSubmit"
      @reset="formReset"
    >
      <input
        type="text"
        placeholder="用户名"
        class="username"
        name="username"
      >
      <input
        type="text"
        placeholder="密码"
        class="password"
        name="password"
      >
      <input
        type="number"
        placeholder="年级 类似‘2018’"
        class="grade"
        name="grade"
      >
      <input
        type="number"
        placeholder="team"
        class="team"
        name="team"
      >
      <div class="captain">
        <span>队长：</span>
        <switch
          class="checkCaptain"
          name="captain"
        />
      </div>
      <button
        class="btn"
        form-type="submit"
      >注册</button>
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
      user_id: "",
      password: "",
      url: "http://localhost:8080/Login/Reg",
    };
  },
  methods: {
    formSubmit: function (e) {
      wx.request({
        url: "http://localhost:8080/Login/Reg", //开发者服务器接口地址",
        data: {
          name: e.mp.detail.value.username,
          password: e.mp.detail.value.password,
          team: e.mp.detail.value.team,
          grade: e.mp.detail.value.grade,
          captain: e.mp.detail.value.captain,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          let receiveUser = res.data;
          this.$store.dispatch("getUserInfo", receiveUser);
          console.log(this.$store.state.user);
          wx.showModal({
            title: "注册成功", //提示的标题,
            content: "您的user id是" + receiveUser.user_id, //提示的内容,
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
                console.log("用户点击确定");
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            },
          });
        },
        fail: () => {},
        complete: () => {},
      });
    },
    formReset(e) {
      this.username = "";
      this.password = "";
      console.log(username);
      console.log(password);
    },
  },
};
</script>

<style>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 450rpx;
}
input {
  border: solid;
}
.username {
  margin-top: 100rpx;
}
.username,
.password,
.grade,
.captain,
.team,
.btn {
  width: 400rpx;
  height: 60rpx;
  margin-bottom: 50rpx;
}
.username,
.password,
.grade,
.captain,
.team {
  border-radius: 30rpx;
  box-shadow: 0 7rpx 23rpx rgba(0, 0, 0, 0.3), 0 10rpx 19rpx rgba(0, 0, 0, 0.22);
}
switch {
  zoom: 0.8;
}
.btn {
  line-height: 70rpx;
  width: 200rpx;
  height: 70rpx;
  margin-top: 60rpx;
  background: #3fb054;
  color: #fefefe;
  border-radius: 5%;
  font-size: 33rpx;
}
.captain {
  border: solid #3e3e3e;
  color: #969696;
}
.checkCaptain {
  padding-left: 223rpx;
}
</style>