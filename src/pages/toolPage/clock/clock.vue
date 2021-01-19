<template>
  <div>
    <div class="top">
      <div
        class="top_conter"
        @tap="subtract"
      >
        <image src="/static/images/toolPage/left.svg"></image>
      </div>
      <div class="top_conters">{{item[index]}}</div>
      <div
        class="top_conter"
        @tap="add"
      >
        <image src="/static/images/toolPage/right.svg"></image>
      </div>
    </div>
    <div class="center">
      <image
        src="/static/images/toolPage/clock.svg"
        alt=""
      ></image>
    </div>
    <div class="fooder">
      <div @tap="number">开始/暂停</div>
      <div @tap="stop">重置</div>
    </div>

    <div class="nuber">
      <span>{{minute}}</span>
      <span class="nuber_main">:</span>
      <span>{{second}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        "正方立论",
        "反四质询",
        "反方立论",
        "正四质询",
        "正二申论",
        "反三质询",
        "反二申论",
        "正三质询",
        "反三小结",
        "正三小结",
        "自由辩",
        "反四结辩",
        "正四结辩",
      ],
      index: 0,
      time: 180,
      test: 0,
      ID: "",
      second: "00",
      minute: "03",
    };
  },
  beforeMount() {
    this.index = 0;
    this.time = 180;
    this.test = 0;
    this.ID = "";
    this.second = "00";
    this.minute = "03";
  },
  methods: {
    subtract() {
      console.log("---");
      clearInterval(this.ID);
      if (this.index <= 0) {
        this.time = 180;
        this.second = "00";
        this.minute = "03";
        this.test = 0;
        this.index = this.item.length - 1;
      } else {
        var indexs = this.index - 1;
        console.log(indexs);
        //
        this.time = 180;
        this.second = "00";
        this.minute = "03";
        this.test = 0;
        this.index = indexs;
      }
    },
    add() {
      console.log("++++");
      clearInterval(this.ID);
      if (this.index > this.item.length - 2) {
        console.log("进判断");
        this.time = 180;
        this.second = "00";
        this.minute = "03";
        this.test = 0;
        this.index = 0;
      } else {
        var indexs = this.index + 1;
        console.log(indexs);
        this.time = 180;
        this.second = "00";
        this.minute = "03";
        this.test = 0;
        this.index = indexs;
      }
    },
    showNum(num) {
      if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    },
    number() {
      console.log(this.ID);
      clearInterval(this.ID);
      if (this.test === 0) {
        console.log("开始记时");
        // clearInterval(this.data.ID)
        var that = this;
        that.ID = setInterval(function () {
          if (that.time <= 0) {
            clearInterval(this.ID);
            that.test = 0;
          }
          that.time = that.time - 1;
          that.test = 1;
          that.second = that.showNum(that.time % 60);
          that.minute = that.showNum(parseInt(that.time / 60) % 60);
          //   that.data.time
          console.log(that.time);
        }, 1000);
      } else {
        console.log("停止记时");
        console.log(this.ID);
        clearInterval(this.ID);
        var that = this;
        that.test = 0;
      }
    },
    stop() {
      clearInterval(this.ID);
      this.time = 180;
      this.second = "00";
      this.minute = "03";
      this.test = 0;
    },
  },
};
</script>

<style>
.top {
  margin-top: 150rpx;
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: center;
}
.top_conter {
  width: 100rpx;
  height: 100%;
  line-height: 100rpx;
  /* background-color: red; */
  text-align: center;
}
.top_conter image {
  width: 100%;
  height: 100%;
}
.top_conters {
  width: 300rpx;
  height: 100%;
  line-height: 100rpx;
  text-align: center;
  /* background-color: red; */
  margin: 0 50rpx;
}
.center {
  width: 100%;
  height: 200rpx;
  margin-top: 100rpx;
  display: flex;
  justify-content: center;
}
.center image {
  width: 200rpx;
  height: 100%;
}
.fooder {
  width: 100%;
  height: 100rpx;
  margin-top: 100rpx;
  display: flex;
  justify-content: space-around;
}
.fooder view {
  line-height: 100rpx;
  background-color: #282b2a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40rpx;
  width: 200rpx;
}
.nuber {
  margin-top: 100rpx;
  width: 100%;

  text-align: center;
  font-size: 120rpx;
  background-color: #282b2a;
  color: white;
  height: 200rpx;
  width: 400rpx;
  line-height: 75rpx;
  position: absolute;
  left: 190rpx;
  top: 800rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nuber_main {
  margin: 0 5rpx;
}
</style>