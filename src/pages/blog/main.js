import Vue from 'vue'
import Blog from './blog.vue'


//生成应用实例
const blog = new Vue(Blog)

//挂载页面
blog.$mount()