<template>
  <div class="indexContainer">
    <div
      @tap="toClock"
      class="clock"
    >
      <img
        class="clockImage"
        src="/static/images/index/Alarm.svg"
        alt="error"
      >
      <img
        class="bubbleImage"
        src="/static/images/index/Chat_Bubble.svg"
        alt="error"
      >
      <p class="iText">计时器</p>
    </div>
    <div
      @tap="toClassroom"
      class="classroom"
    >
      <img
        class="classroomImage"
        src="/static/images/index/People_Run.svg"
        alt="error"
      >
      <img
        class="bubbleImage"
        src="/static/images/index/Chat_Bubble.svg"
        alt="error"
      >
      <p class="iText">查教室</p>
    </div>
    <div
      @tap="toCompetition"
      class="competition"
    >
      <img
        class="competitionImage"
        src="/static/images/index/Voice.svg"
        alt="error"
      >
      <img
        class="bubbleImage"
        src="/static/images/index/Chat_Bubble.svg"
        alt="error"
      >
      <p class="iText">约比赛</p>
    </div>
    <div
      @tap="toRandom"
      class="random"
    >
      <img
        class="randomImage"
        src="/static/images/index/Random.svg"
        alt="error"
      >
      <img
        class="bubbleImage"
        src="/static/images/index/Chat_Bubble.svg"
        alt="error"
      >
      <p class="iText">随机辩</p>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    toClock(){
      wx.navigateTo({ url: '/pages/toolPage/clock/main' });
    },
    toClassroom(){
      wx.navigateTo({ url: '/pages/toolPage/classroom/main' });
    },
    toCompetition(){
      wx.navigateTo({ url: '/pages/toolPage/competition/main' });
    },
    toRandom(){
      wx.navigateTo({ url: '/pages/toolPage/random/main' });
    }

  }

}
</script>

<style>
  .indexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 240rpx 0rpx 0rpx 0rpx;
  }
  .clock,
  .competition,
  .classroom,
  .random {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 70rpx;
    box-shadow: 0 1rpx 4rpx rgba(0, 0, 0, 0.27),
      0 0 40rpx rgba(0, 0, 0, 0.06) inset;
    margin: 12rpx;
    width: 350rpx;
    height: 350rpx;
  }
  .bubbleImage {
    width: 200rpx;
    height: 200rpx;
  }
  .clockImage,
  .competitionImage,
  .classroomImage,
  .randomImage {
    width: 80rpx;
    height: 80rpx;
  }
  .iText {
    position: relative;
    bottom: 140rpx;
  }
</style>