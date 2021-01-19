import {RECEIVE_BLOG, RECEIVE_COMMENT} from './mutation-type'
import {RECEIVE_USER} from './mutation-type'
import {RECEIVE_MYBLOG} from './mutation-type'
import {RECEIVE_MYCOLLECTION} from './mutation-type'
export default{
    getBlog({commit},data){
        // 触发对应的mutations
        commit(RECEIVE_BLOG,data)
    },
    getUserInfo({commit},data){
        commit(RECEIVE_USER,data)
    },
    getMyBlog({commit},data){
        commit(RECEIVE_MYBLOG,data)
    },
    getMyCollection({commit},data){
        commit(RECEIVE_MYCOLLECTION,data)
    },
    getComment({commit},data){
        commit(RECEIVE_COMMENT,data)
    }
}