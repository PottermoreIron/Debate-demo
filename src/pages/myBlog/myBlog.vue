<template>
  <div>
    <myBlogTmp
      v-for="(item,index) in myBlogTmp"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import myBlogTmp from "../../components/myBlogTemplate";
import { mapState } from "vuex";
export default {
  components: {
    myBlogTmp,
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
    this.$fly
      .get("http://localhost:8080/User/blog", {
        uid: this.$store.state.user.user_id,
      })
      .then((response) => {
        console.log(response);
        let receiveBlog = response.data;
        this.$store.dispatch("getMyBlog", receiveBlog);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  beforeMount() {
    //   fly

    this.$fly
      .get("http://localhost:8080/User/blog", {
        uid: this.$store.state.user.user_id,
      })
      .then((response) => {
        let receiveBlog = response.data;
        this.$store.dispatch("getMyBlog", receiveBlog);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.$store.dispatch("getBlog");
  },
  computed: {
    // 映射状态到本组件
    ...mapState(["myBlogTmp"]),
  },
};
</script>

<style>
</style>