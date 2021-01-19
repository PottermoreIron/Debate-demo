<template>
  <div class="random">
    <div class="pic">
      <img
        src="/static/images/toolPage/light.svg"
        alt="none"
      >
    </div>
    <div class="show">
      {{result}}

    </div>
    <div>
      <checkbox-group @change="checkboxChange">
        <div class="choice">
          <label
            v-for="(item,index) in choices"
            :key="index"
            :item="item"
            :index="index"
          >
            <div>
              <checkbox
                :value="item.value"
                :checked="item.checked"
              />
            </div>
            <div>
              {{item.name}}
            </div>
          </label>
        </div>
      </checkbox-group>
    </div>
    <button
      @tap="randomTitle"
      class="btn"
    >随机</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: [
        { value: "Policy", name: "政策辩", checked: false },
        { value: "Worth", name: "价值辩", checked: false },
      ],
      policyData: [
        "贸易保护主义可以/不能抑制",
        "发展旅游业利大于弊/弊大于利",
        "温饱是/不是谈道德的必要条件",
        "安乐死应该/不应该合法化",
        "艾滋病是医学问题/社会问题",
        "人性本善/恶",
        "女性比男性更需要关怀/男性比女性更需要关怀",
        "愚公应该移山/搬家",
        "信息高速公路对发展中国家有利/不利",
        "各国政府应该/不应该全面禁烟",
        "国际网络应该/不应该受管制",
        "真理会/不会越辩越明",
        "网络使人更亲近/疏远",
        "足球比赛引进电脑裁判利大于弊/弊大于利",
        "都市化有利于/不利于人类发展",
        "发展知识经济自然科学比社会科学更重要",
        "夜晚对人类利大于弊/弊大于利",
        "人类将/不会毁于科技",
        "经济发展和环境保护可以/不可以并行",
        "全球化有利于/不利于发展中国家",
        "信息传播发展会/不会打击本土文化",
        "流动人口的增加有利于/不利于人类的发展",
        "生态危机可能/不可能毁灭人类",
        "离婚率上升是/不是社会文明的表现",
        "经济发展应该以教育发展为前提/教育发展应该以经济发展为前提",
        "医学发展应该/不应该有伦理界限",
        "外来文化对民族文化的发展利大于弊/弊大于利",
        "学生就业压力大有利于/不利于成才",
        "中国足球走向世界关键在于/不在于商业化",
        "跳槽有利于/不利于人才发挥作用",
        "打假主要靠消费者/执法者",
        "现在社会男女竞争是/不是平等的",
        "克隆技术的应用必将/不会造福人类",
        "汽车的发展取决于道路的发展/道路发展取决于汽车的发展",
        "人口问题是/不是未来社会发展的成败关键",
      ],
      WorthData: [
        "儒家思想可以/不可以抵御西方歪风",
        "金钱追求与道德追求能/不能统一",
        "社会秩序的维系主要靠法律/道德",
        "知难行易/知易行难",
        "美是客观存在/主观感受",
        "青春期偶像崇拜利大于弊/弊大于利",
        "先成家后立业/先立业后成家",
        "爱情是自私/无私的",
        "以成败论英雄是可取/不可取的",
        "个人利益和群众利益可以/不可以两全",
        "安乐死符合/不符合人道主义精神",
        "思想道德应该/不应适应市场经济",
        "情比金坚/金比情坚",
        "对于个人幸福而言宗教/科学更重要",
        "好为人师是/不是美德",
        "知道的越多越像是世界的宠儿/弃儿",
        "人懂得坚持/退让更伟大",
        "人类越来越脆弱/越来越坚强",
        "辩论娱乐化是辩论之福/或",
        "执念使人更清醒/更迷茫",
        "富有比贫穷/贫穷比富有更能暴露人性之恶",
        "人生之美在于瞬间/永恒",
        "伦理是/不是市场的禁区",
        "人生贵在有成/适意",
        "门当户对是/不是过时的婚姻价值观",
        "成年人更应该看重利弊/对错",
        "心灵鸡汤有/没有营养",
        "科学是/不是世界的最优解",
        "大学生成为精致的利己主义者有利于/不利于个人发展",
        "奇葩说有助于/无助于推动辩论的发展",
        "高学历女性做全职太太合理/不合理",
      ],
      allData: [
        "贸易保护主义可以/不能抑制",
        "儒家思想可以/不可以抵御西方歪风",
        "金钱追求与道德追求能/不能统一",
        "社会秩序的维系主要靠法律/道德",
        "知难行易/知易行难",
        "发展旅游业利大于弊/弊大于利",
        "美是客观存在/主观感受",
        "青春期偶像崇拜利大于弊/弊大于利",
        "先成家后立业/先立业后成家",
        "爱情是自私/无私的",
        "以成败论英雄是可取/不可取的",
        "温饱是/不是谈道德的必要条件",
        "安乐死应该/不应该合法化",
        "艾滋病是医学问题/社会问题",
        "人性本善/恶",
        "女性比男性更需要关怀/男性比女性更需要关怀",
        "愚公应该移山/搬家",
        "人生贵在有成/适意",
        "门当户对是/不是过时的婚姻价值观",
        "成年人更应该看重利弊/对错",
        "心灵鸡汤有/没有营养",
        "信息高速公路对发展中国家有利/不利",
        "各国政府应该/不应该全面禁烟",
        "国际网络应该/不应该受管制",
        "真理会/不会越辩越明",
        "网络使人更亲近/疏远",
        "足球比赛引进电脑裁判利大于弊/弊大于利",
        "都市化有利于/不利于人类发展",
        "发展知识经济自然科学比社会科学更重要",
        "夜晚对人类利大于弊/弊大于利",
        "人类将/不会毁于科技",
        "经济发展和环境保护可以/不可以并行",
        "全球化有利于/不利于发展中国家",
        "对于个人幸福而言宗教/科学更重要",
        "好为人师是/不是美德",
        "知道的越多越像是世界的宠儿/弃儿",
        "人懂得坚持/退让更伟大",
        "人类越来越脆弱/越来越坚强",
        "信息传播发展会/不会打击本土文化",
        "流动人口的增加有利于/不利于人类的发展",
        "生态危机可能/不可能毁灭人类",
        "离婚率上升是/不是社会文明的表现",
        "经济发展应该以教育发展为前提/教育发展应该以经济发展为前提",
        "医学发展应该/不应该有伦理界限",
        "个人利益和群众利益可以/不可以两全",
        "安乐死符合/不符合人道主义精神",
        "思想道德应该/不应适应市场经济",
        "情比金坚/金比情坚",
        "外来文化对民族文化的发展利大于弊/弊大于利",
        "学生就业压力大有利于/不利于成才",
        "中国足球走向世界关键在于/不在于商业化",
        "跳槽有利于/不利于人才发挥作用",
        "辩论娱乐化是辩论之福/或",
        "执念使人更清醒/更迷茫",
        "富有比贫穷/贫穷比富有更能暴露人性之恶",
        "人生之美在于瞬间/永恒",
        "伦理是/不是市场的禁区",
        "打假主要靠消费者/执法者",
        "现在社会男女竞争是/不是平等的",
        "克隆技术的应用必将/不会造福人类",
        "科学是/不是世界的最优解",
        "大学生成为精致的利己主义者有利于/不利于个人发展",
        "奇葩说有助于/无助于推动辩论的发展",
        "高学历女性做全职太太合理/不合理",
        "汽车的发展取决于道路的发展/道路发展取决于汽车的发展",
        "人口问题是/不是未来社会发展的成败关键",
      ],
      result: "",
    };
  },
  beforeMount() {
    this.result = "";
    this.choices = [
      { value: "Policy", name: "政策辩", checked: false },
      { value: "Worth", name: "价值辩", checked: false },
    ];
  },
  methods: {
    checkboxChange(e) {
      console.log("checkbox发生change事件，携带value值为：", e.mp.detail.value);

      const items = this.choices;
      const values = e.mp.detail.value;
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;

        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value === values[j]) {
            items[i].checked = true;
            break;
          }
        }
      }

      this.choices = items;
      console.log(this.choices);
    },
    randomTitle() {
      if (this.choices[0].checked == true && this.choices[1].checked == false) {
        let index = Math.floor(Math.random() * this.policyData.length + 1) - 1;
        this.result = this.policyData[index];
      } else if (
        this.choices[0].checked == false &&
        this.choices[1].checked == true
      ) {
        let index = Math.floor(Math.random() * this.WorthData.length + 1) - 1;
        this.result = this.WorthData[index];
      } else if (
        this.choices[0].checked == true &&
        this.choices[1].checked == true
      ) {
        let index = Math.floor(Math.random() * this.allData.length + 1) - 1;
        this.result = this.allData[index];
      } else {
        wx.showModal({
          title: "提示", //提示的标题,
          content: "请先选择辩题类型", //提示的内容,
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
      }
    },
  },
};
</script>

<style>
.random {
  position: absolute;
  width: 600rpx;
  height: 600rpx;
  left: 50%;
  top: 50%;
  margin-left: -300rpx;
  margin-top: -300rpx;
  text-align: center;
}
.pic > img {
  width: 200rpx;
  height: 200rpx;
}
.show {
  height: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1rpx solid;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
}
.choice {
  display: flex;
  margin-left: 140rpx;
}
.choice > label {
  padding-right: 100rpx;
}
.btn {
  line-height: 70rpx;
  width: 200rpx;
  height: 70rpx;
  margin-top: 60rpx;
  background: #3fb054;
  color: #fefefe;
  font-size: 33rpx;
}
</style>