<template>
  <div class="changeUserName">
    <form @submit="formSubmit">
      <input
        type="text"
        placeholder="User Id"
        class="UserId"
        name="userId"
      >
      <input
        type="text"
        placeholder="新用户名"
        class="newName"
        name="newName"
      >

      <button
        class="btn"
        form-type="submit"
      >更改</button>
    </form>

  </div>
</template>

<script>
export default {
  methods: {
    formSubmit: function (e) {
      console.log(e);
      console.log(e.mp.detail.value.newName);
      console.log(e.mp.detail.value.userId);
      wx.request({
        url: "http://localhost:8080/User/changeName", //开发者服务器接口地址",
        data: {
          new_name: e.mp.detail.value.newName,
          uid: e.mp.detail.value.userId,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          console.log(res);
          wx.showToast({
            title: "修改成功", //提示的内容,
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
  },
};
</script>

<style>
.changeUserName {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 450rpx;
}
.UserId,
.newName,
.btn {
  width: 400rpx;
  height: 60rpx;
  margin-bottom: 50rpx;
}
.UserId,
.newName {
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