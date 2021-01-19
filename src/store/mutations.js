import {RECEIVE_BLOG} from './mutation-type'
import {RECEIVE_USER} from './mutation-type'
import {RECEIVE_MYBLOG} from './mutation-type'
import {RECEIVE_MYCOLLECTION} from './mutation-type'
import {RECEIVE_COMMENT} from './mutation-type'
export default{
    [RECEIVE_BLOG](state,data){
        state.blogTmp=data
        console.log(state)
    },
    [RECEIVE_USER](state,data){
        state.user=data
        console.log(state.user)
    },
    [RECEIVE_MYBLOG](state,data){
        state.myBlogTmp=data
        console.log("拿到myblog")
        console.log(state.myBlogTmp)
    },
    [RECEIVE_MYCOLLECTION](state,data){
        state.myCollectionTmp=data
        console.log("拿到myCollection")
        console.log(state.myCollectionTmp)
    },
    [RECEIVE_COMMENT](state,data){
        state.commentTmp=data
        console.log("拿到评论")
        console.log(state.commentTmp)
    }
}