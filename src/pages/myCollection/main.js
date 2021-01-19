import Vue from 'vue'
import MyCollection from './myCollection.vue'


//生成应用实例
const myCollection = new Vue(MyCollection)

//挂载页面
myCollection.$mount()