import Vue from 'vue'
import MyBlog from './myBlog.vue'


//生成应用实例
const myBlog = new Vue(MyBlog)

//挂载页面
myBlog.$mount()