<template>
  <div>
    消息
  </div>
</template>

<script>
export default {
  beforeMount() {
    wx.showModal({
      title: "有来自计算机学院辩论队的比赛邀请", //提示的标题,
      content: "辩题：外来文化对民族发展利大于弊还是弊大于利", //提示的内容,
      showCancel: true, //是否显示取消按钮,
      cancelText: "拒绝", //取消按钮的文字，默认为取消，最多 4 个字符,
      cancelColor: "#000000", //取消按钮的文字颜色,
      confirmText: "接受", //确定按钮的文字，默认为取消，最多 4 个字符,
      confirmColor: "#3CC51F", //确定按钮的文字颜色,
      success: (res) => {
        if (res.confirm) {
          console.log("用户点击确定");
        } else if (res.cancel) {
          console.log("用户点击取消");
        }
      },
    });
  },
};
</script>

<style>
</style>