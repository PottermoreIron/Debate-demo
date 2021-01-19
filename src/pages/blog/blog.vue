<template>
  <div>
    <div class="top">
      <form @submit="formSubmit">
        <input
          class="searchbox"
          type="text"
          placeholder="查找博客"
          confirm-type="search"
          name="test"
        />
        <button
          class="btn"
          form-type="submit"
        >搜索</button>
      </form>
      <img
        class="addBlog"
        src="/static/images/addBlog/addBlog.svg"
        alt="新建博客"
        @tap="toEditBlog"
      >
    </div>
    <blogTmp
      v-for="(item,index) in blogTmp"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import blogTmp from "../../components/blogTemplate.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    blogTmp,
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
    this.$fly
      .get("http://localhost:8080/Blog")
      .then((response) => {
        console.log(response);
        let receiveBlog = response.data;
        this.$store.dispatch("getBlog", receiveBlog);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // 分发action修改状态
  beforeMount() {
    //   fly

    this.$fly
      .get("http://localhost:8080/Blog")
      .then((response) => {
        console.log(response);
        let receiveBlog = response.data;
        this.$store.dispatch("getBlog", receiveBlog);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.$store.dispatch("getBlog");
  },
  computed: {
    // 映射状态到本组件
    ...mapState(["blogTmp"]),
  },
  methods: {
    toEditBlog() {
      wx.navigateTo({ url: "/pages/editBlog/main" });
    },
    formSubmit: function (e) {
      console.log(e.mp.detail.value.test);
      this.$fly
        .get("http://localhost:8080/Blog/select", {
          select: e.mp.detail.value.test,
        })
        .then((response) => {
          console.log(response);
          let receiveBlog = response.data;
          this.$store.dispatch("getBlog", receiveBlog);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.top {
  display: flex;
  margin-top: 100rpx;
}
.searchbox {
  width: 600rpx;
  height: 50rpx;
  border: solid;
  margin-left: 55rpx;
  vertical-align: middle;
}
.addBlog {
  width: 70rpx;
  height: 70rpx;
  vertical-align: middle;
}
.btn {
  width: 300rpx;
  height: 60rpx;
  margin-left: 210rpx;
  margin-bottom: 50rpx;
  margin-top: 55rpx;
  line-height: 60rpx;
  border: none;
  border-radius: 30rpx;
  box-shadow: 0 7rpx 23rpx rgba(0, 0, 0, 0.3), 0 10rpx 19rpx rgba(0, 0, 0, 0.22);
}
</style>