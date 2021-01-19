<template>
  <div class="set">
    <div
      class="choice changeUserName"
      @tap="toChangeUserName"
    >修改用户名</div>
    <div
      class="choice changePassword"
      @tap="toChangePassword"
    >修改密码</div>
  </div>
</template>

<script>
export default {
  methods: {
    toChangeUserName() {
      wx.navigateTo({ url: "/pages/setChoice/changeUserName/main" });
    },
    toChangePassword() {
      wx.navigateTo({ url: "/pages/setChoice/changePassword/main" });
    },
  },
};
</script>

<style>
.set {
  position: absolute;
  width: 400rpx;
  height: 400rpx;
  left: 50%;
  top: 50%;
  margin-left: -200rpx;
  margin-top: -200rpx;
}
.choice {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400rpx;
  height: 100rpx;
  text-align: center;
  margin-top: 100rpx;
  border-radius: 100rpx;
  box-shadow: 0 19rpx 38rpx rgba(0, 0, 0, 0.3),
    0 15rpx 12rpx rgba(0, 0, 0, 0.22);
}
</style>