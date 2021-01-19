<template>
  <div class="profile">
    <div class="information">

      <img
        class="avatar"
        :src="userInfo.avatarUrl"
        alt="no"
      >
      <p
        class="name"
        v-if="userName"
      >{{user.user_name}}</p>
      <p
        class="name"
        v-else
      >{{userInfo.nickName}}</p>

      <div class="teamDetail">
        <p
          class="teamMember"
          v-if="ifCaptain"
        >队长&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p
          class="teamMember"
          v-else
        >队员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p class="teamName">计算机学院辩论队</p>
      </div>
    </div>
    <div class="function">
      <div
        class="myBlog"
        @tap="toMyBlog"
      >
        我的博客
      </div>
      <div
        class="myCollection"
        @tap="toMyCollection"
      >
        我的收藏
      </div>
      <div
        class="authentication"
        @tap="toRegister"
      >
        注册
      </div>
      <div
        class="logOn"
        @tap="toLogOn"
      >登录</div>
      <div
        class="set"
        @tap="toSet"
      >
        设置
      </div>
      <div
        class="message"
        @tap="toMessage"
      >
        消息
      </div>

      <div class="wxLogOn">
        <button
          open-type="getUserInfo"
          @getUserInfo="getUserInfo"
        >微信登录</button>
      </div>

    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 微信用户信息
      userInfo: {},
      //   辩论队用户信息
      user: {},
      ifCaptain: false,
      userName: "",
    };
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
    this.user = this.$store.state.user;
    this.ifCaptain = this.user.if_captain;
    this.userName = this.user.user_name;
    console.log(this.userName);
  },
  beforeMount() {
    this.handleGetUserInfo();
    this.user = this.$store.state.user;
  },
  methods: {
    //   微信登录
    handleGetUserInfo() {
      wx.getUserInfo({
        withCredentials: false,
        success: (data) => {
          console.log(data);
          //更新数据
          this.userInfo = data.userInfo;
        },
        fail: () => {
          console.log("获取失败！");
        },
        complete: () => {},
      });
    },
    getUserInfo(data) {
      //判断用户是否授权
      if (data.mp.detail.rawData) {
        //用户授权
        this.handleGetUserInfo();
      }
    },
    toMyBlog() {
      if (Object.keys(this.user).length === 0) {
        wx.showModal({
          title: "未登录", //提示的标题,
          content: "请先登录", //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: "#000000", //取消按钮的文字颜色,
          confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: "#3CC51F", //确定按钮的文字颜色,
          success: (res) => {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else {
        wx.navigateTo({ url: "/pages/myBlog/main" });
      }
    },
    toMyCollection() {
      if (Object.keys(this.user).length === 0) {
        wx.showModal({
          title: "未登录", //提示的标题,
          content: "请先登录", //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: "#000000", //取消按钮的文字颜色,
          confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: "#3CC51F", //确定按钮的文字颜色,
          success: (res) => {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else {
        wx.navigateTo({ url: "/pages/myCollection/main" });
      }
    },
    toRegister() {
      wx.navigateTo({ url: "/pages/register/main" });
    },
    toSet() {
      if (Object.keys(this.user).length === 0) {
        wx.showModal({
          title: "未登录", //提示的标题,
          content: "请先登录", //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: "#000000", //取消按钮的文字颜色,
          confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: "#3CC51F", //确定按钮的文字颜色,
          success: (res) => {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else {
        wx.navigateTo({ url: "/pages/set/main" });
      }
    },
    toLogOn() {
      wx.navigateTo({ url: "/pages/logOn/main" });
    },
    toMessage() {
      if (Object.keys(this.user).length === 0) {
        wx.showModal({
          title: "未登录", //提示的标题,
          content: "请先登录", //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: "#000000", //取消按钮的文字颜色,
          confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: "#3CC51F", //确定按钮的文字颜色,
          success: (res) => {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else if (this.ifCaptain == false) {
        wx.showModal({
          title: "权限不够", //提示的标题,
          content: "您不是队长", //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: "#000000", //取消按钮的文字颜色,
          confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: "#3CC51F", //确定按钮的文字颜色,
          success: (res) => {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      } else {
        wx.navigateTo({ url: "/pages/captainMessage/main" });
      }
    },
  },
};
</script>

<style>
.profile {
  width: 100%;
  /* height: 1700rpx; */
  height: 1800rpx;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
}
.information {
  width: 550rpx;
  height: 400rpx;
  position: absolute;
  margin-top: 50rpx;
  border-radius: 30rpx;
  box-shadow: 0 19rpx 38rpx rgba(0, 0, 0, 0.3),
    0 15rpx 12rpx rgba(0, 0, 0, 0.22);
  background-color: rgb(70, 70, 70);
}
.name {
  color: #fff;
}
.avatar {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  margin-top: 50rpx;
}
.teamDetail {
  display: flex;
  align-items: center;
  justify-content: center;
}
.teamName,
.teamMember,
.Uid {
  font-size: 20rpx;
  font-style: italic;
  color: darkgray;
}
.function {
  width: 700rpx;
  /* height: 1070rpx; */
  height: 1170rpx;
  position: absolute;
  padding-top: 250rpx;
  margin-top: 200rpx;
  text-align: center;
  vertical-align: middle;
  border-radius: 80rpx;
  box-shadow: 0 19rpx 38rpx rgba(0, 0, 0, 0.3),
    0 15rpx 12rpx rgba(0, 0, 0, 0.22);
}
.myBlog,
.myCollection,
.authentication,
.logOn,
.wxLogOn,
.message,
.set {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60rpx;
  margin-left: 200rpx;
  width: 300rpx;
  height: 100rpx;
  border-radius: 100rpx;
  box-shadow: 0 19rpx 38rpx rgba(0, 0, 0, 0.3),
    0 15rpx 12rpx rgba(0, 0, 0, 0.22);
}
.wxLogOn {
  background: #3fb054;
}
.wxLogOn > button {
  background: none;
  color: #fefefe;
  font-size: 38rpx;
}
.wxLogOn > button:after {
  border: none;
}
</style>