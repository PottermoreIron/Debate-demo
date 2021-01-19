<template>
  <div class="detail">
    <div class="headArea">
      <img
        src="/static/images/test/avatar.svg"
        alt="no"
      ><span>{{detailObj.author_name}}</span>
      <button
        type="default"
        form-type="submit"
      >+关注</button>
    </div>
    <div class="textArea">
      <h1>{{detailObj.blog.blog_title}}</h1>
      <p>{{detailObj.blog.blog_content}}</p>
      <p>{{detailObj.blog_time}}</p>
      <p>{{detailObj.blog_authorId}}</p>
    </div>
    <div class="bottomArea">
      <div class="up">
        <img
          :src="!isLiked?'/static/images/BlogDetail/Sthumb.svg':'/static/images/BlogDetail/Nthumb.svg'"
          alt="no"
          @tap="handleLike"
        >
        <p @tap="handleLike">赞同</p>
        <p class="count">{{likedData}}</p>
      </div>
      <div class="collection">
        <img
          :src="!isCollected?'/static/images/BlogDetail/Scollection.svg':'/static/images/BlogDetail/Ncollection.svg'"
          alt="no"
          @tap="handleCollection"
        >
        <p @tap="handleCollection">收藏</p>
        <p class="count">{{collectedData}}</p>
      </div>

    </div>
    <div class="myCollectionComment">
      <commentTmp
        v-for="(item,index) in commentTmp"
        :key="index"
        :item="item"
        :index="index"
      />
      <div class="comment">
        <div class="commentIcon">
          <img
            src="/static/images/BlogDetail/comment.svg"
            alt="no"
          >
        </div>
        <div class="commentInput">
          <form
            @submit="formSubmit"
            class="commentForm"
          >
            <div class="commentForm">
              <input
                type="text"
                placeholder="评论内容"
                class="cInput"
                name="comment"
              ><button
                class="btn"
                form-type="submit"
              >发送</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commentTmp from "../../components/commentTemplate.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      detailObj: {},
      isCollected: false,
      isLiked: false,
      collectedData: 0,
      likedData: 0,
    };
  },
  components: {
    commentTmp,
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
    // 刷新查看收藏数
    wx.request({
      url: "http://localhost:8080/InBlog/star", //开发者服务器接口地址",
      data: {
        blog_id: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        this.collectedData = res.data;
      },
      fail: () => {},
      complete: () => {},
    });
    // 刷新查看点赞数
    wx.request({
      url: "http://localhost:8080/InBlog/up", //开发者服务器接口地址",
      data: {
        blog_id: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        this.likedData = res.data;
      },
      fail: () => {},
      complete: () => {},
    });
  },
  beforeMount() {
    this.index = this.$mp.query.index;
    this.detailObj = this.myCollectionTmp[this.$mp.query.index];
    // 看收藏状态
    wx.request({
      url: "http://localhost:8080/InBlog/if_star", //开发者服务器接口地址",
      data: {
        uid: this.$store.state.user.user_id,
        bid: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        this.isCollected = res.data;
        console.log("之前的收藏，true代表可以收藏，false代表取消收藏");
        console.log(this.isCollected);
      },
      fail: () => {},
      complete: () => {},
    });
    // 看收藏数
    wx.request({
      url: "http://localhost:8080/InBlog/star", //开发者服务器接口地址",
      data: {
        blog_id: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        this.collectedData = res.data;
      },
      fail: () => {},
      complete: () => {},
    });
    // 看点赞状态
    wx.request({
      url: "http://localhost:8080/InBlog/if_up", //开发者服务器接口地址",
      data: {
        uid: this.$store.state.user.user_id,
        bid: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        console.log("之前的点赞，true代表可以收藏，false代表取消收藏");
        this.isLiked = res.data;
        console.log(this.isLiked);
      },
      fail: () => {},
      complete: () => {},
    });
    // 看点赞数
    wx.request({
      url: "http://localhost:8080/InBlog/up", //开发者服务器接口地址",
      data: {
        blog_id: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        this.likedData = res.data;
      },
      fail: () => {},
      complete: () => {},
    });
    // 评论
    wx.request({
      url: "http://localhost:8080/Comment", //开发者服务器接口地址",
      data: {
        bid: this.detailObj.blog.blog_id,
      }, //请求的参数",
      method: "GET",
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        console.log(res);
        let receiveComment = res.data;
        console.log(receiveComment);
        this.$store.dispatch("getComment", receiveComment);
      },
      fail: () => {},
      complete: () => {},
    });
  },

  mounted() {},
  computed: {
    ...mapState(["myCollectionTmp"]),
    ...mapState(["user"]),
    ...mapState(["commentTmp"]),
  },
  methods: {
    handleLike() {
      wx.request({
        url: "http://localhost:8080/InBlog/set_up", //开发者服务器接口地址",
        data: {
          uid: this.$store.state.user.user_id,
          bid: this.detailObj.blog.blog_id,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          this.isLiked = !this.isLiked;
          console.log("点赞过后发生的事");
          console.log(this.isLiked);
        },
        fail: () => {},
        complete: () => {},
      });
    },
    handleCollection() {
      wx.request({
        url: "http://localhost:8080/InBlog/set_star", //开发者服务器接口地址",
        data: {
          uid: this.$store.state.user.user_id,
          bid: this.detailObj.blog.blog_id,
        }, //请求的参数",
        method: "GET",
        dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: (res) => {
          this.isCollected = !this.isCollected;
          console.log("收藏之后发生的事");
          console.log(this.isCollected);
        },
        fail: () => {},
        complete: () => {},
      });
    },
    formSubmit(e) {
      console.log(e);
      console.log(e.mp.detail.value.comment);
    },
  },
};
</script>

<style>
.detail {
  height: auto;
}
.headArea {
  display: flex;
  align-items: center;
  width: 660rpx;
  margin-top: 50rpx;
  margin-left: 50rpx;
  box-shadow: 2rpx 1rpx 20rpx rgba(0, 0, 0, 0.3),
    0 20rpx 30rpx rgba(0, 0, 0, 0.22);
}
.headArea > img {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  margin-left: 15rpx;
}
.headArea > button {
  width: 250rpx;
  height: 80rpx;
  line-height: 80rpx;
  color: darkgray;
  background: none;
  border-radius: 50rpx;
  border: 3rpx solid #70bcf6;
  left: 130rpx;
}
.textArea {
  display: block;
  width: 680rpx;
  min-height: 500px;
  height: auto;
  margin-top: 100rpx;
  margin-left: 12rpx;
  box-shadow: 0 10rpx 57rpx rgba(0, 0, 0, 0.3), 0 1rpx 26rpx rgba(0, 0, 0, 0.22);
  padding-left: 25rpx;
  padding-right: 25rpx;
}
.textArea > h1 {
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 50rpx;
  padding-bottom: 100rpx;
}
.textArea > p {
  text-indent: 100rpx;
}
.bottomArea {
  display: flex;
  width: 660rpx;
  height: 140rpx;
  align-items: center;
  border-radius: 50rpx;
  box-shadow: 0 19rpx 38rpx rgba(0, 0, 0, 0.3),
    0 15rpx 12rpx rgba(0, 0, 0, 0.22);
  margin-top: 100rpx;
  margin-left: 50rpx;
  margin-bottom: 100rpx;
}
.collection,
.comment,
.up {
  text-align: center;
}
.collection > img,
.up > img,
.commentIcon > img {
  width: 50rpx;
  height: 50rpx;
}
.commentIcon > img {
  margin-right: -43rpx;
  padding-top: 17rpx;
}
.up {
  padding-left: 68rpx;
}
.collection {
  padding-left: 383rpx;
}
.count {
  font-size: 35rpx;
  color: darkgray;
}
.comment {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cInput {
  border: solid;
  border-radius: 30rpx;
  margin-left: 45rpx;
}
.commentForm {
  display: flex;
}
.btn {
  width: 170rpx;
  height: 60rpx;
  line-height: 60rpx;
  background: #3fb054;
  color: #fefefe;
  font-size: 35rpx;
  margin-left: 23rpx;
}
</style>