<template>
  <div class="commentBox">
    <div class="pic">
      <img
        src="/static/images/test/avatar.svg"
        alt="picture"
      >
    </div>
    <div class="commentArea">
      <div class="name">{{item.sender_name}}</div>
      <div class="content">{{item.comment.comment_content}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  beforeMount() {},
  props: ["item", "index"],
};
</script>

<style>
page {
  background-color: rgb(255, 255, 255);
}
.commentBox {
  display: flex;
  margin-top: 70rpx;
  margin-bottom: 70rpx;
}
.commentArea {
  /* background-color: #fcfcfc; */
  background-color: #ffffff;
  border-radius: 21rpx;
  box-shadow: 0 6rpx 22rpx rgba(0, 0, 0, 0.35);
  margin-left: 3rpx;
  min-height: 111rpx;
  width: 600rpx;
  position: relative;
  padding: 15rpx;
}
.commentArea::before {
  border-color: transparent rgba(0, 0, 0, 0.05);
  top: 22rpx;
}
.content {
  color: #555f77;
  font-size: 30rpx;
}
.commentArea::after {
  border-width: 10rpx 10rpx 10rpx 0;
  border-style: solid;
  border-color: transparent #fcfcfc;
  content: "";
  left: -10rpx;
  position: absolute;
  top: 20rpx;
}
.pic > img {
  width: 100rpx;
  height: 100rpx;
}
</style>