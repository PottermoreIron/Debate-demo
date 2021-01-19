<template>
  <div class="search">
    <form @submit="formSubmit">
      <input
        type="text"
        placeholder="What do you want?"
        name="keyWord"
      >
      <button form-type="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    formSubmit: function (e) {
      //   console.log(e.mp.detail.value.keyWord);
      wx.request({
        url: "http://cir.scu.edu.cn/cir/index.html", //开发者服务器接口地址",
        data: "data", //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          console.log(res);
        },
        fail: () => {},
        complete: () => {},
      });
    },
  },
};
</script>

<style>
page {
  background: #7ba7ab;
}
form {
  position: relative;
  width: 700rpx;
  height: 150rpx;
}
.search {
  text-align: center;
  padding: 400rpx 0 0 0;
  height: 255rpx;
  width: 320rpx;
}
input {
  width: 250px;
  height: 60rpx;
  float: left;
  border-radius: 100rpx;
  border: 6rpx solid #324b4e;
  margin-left: 100rpx;
  background: #f9f0da;
  padding-left: 13rpx;
}
button {
  display: inline;
  background: none;
  cursor: pointer;
  position: absolute;
  margin-top: -8rpx;
}
button:before {
  content: "\f002";
  font-family: FontAwesome;
  color: #324b4e;
  border: none;
}
button:after {
  border: none;
}
</style>