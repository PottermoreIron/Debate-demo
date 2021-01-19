<template>
  <div>
    <myCollectionTmp
      v-for="(item,index) in myCollectionTmp"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import myCollectionTmp from "../../components/myCollectionTemplate";
import { mapState } from "vuex";
export default {
  components: {
    myCollectionTmp,
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
    this.$fly
      .get("http://localhost:8080/User/collect", {
        uid: this.$store.state.user.user_id,
      })
      .then((response) => {
        console.log(response);
        let receiveBlog = response.data;
        this.$store.dispatch("getMyCollection", receiveBlog);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  beforeMount() {
    //   fly

    this.$fly
      .get("http://localhost:8080/User/collect", {
        uid: this.$store.state.user.user_id,
      })
      .then((response) => {
        let receiveCollection = response.data;
        this.$store.dispatch("getMyCollection", receiveCollection);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.$store.dispatch("getBlog");
  },
  computed: {
    // 映射状态到本组件
    ...mapState(["myCollectionTmp"]),
  },
};
</script>

<style>
</style>