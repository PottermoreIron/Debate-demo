<template>
  <div class="card">
    <h1>标题</h1>
    <div class="article">
      <div class="textArea">
        <p>text啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊阿</p>
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

}
</script>

<style>
  h1 {
    font-weight: bold;
  }
  .article {
    display: flex;
    flex-direction: row;
  }
  .textArea {
    width: 480rpx;
    height: 250rpx;
    overflow: hidden;
    line-clamp: 2;
    text-overflow: ellipsis;
  }

  .imageArea > image {
    width: 250rpx;
    height: 250rpx;
  }
</style>