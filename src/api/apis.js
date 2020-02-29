
import axios from 'axios'
// var axios = require('axios')



//创建一个请求对象
let req = axios.create({
    baseURL: 'http://localhost:3000', // 基本路径
    timeout:  10000  //ms  请求10秒，如果10秒还没有请求到，则提示超时！！（8-12秒） 超时限制！
})

//这个就是axios的封装
//请求商家信息 
export function getSeller(){
    return req.get('/api/seller')
}


//请求评论信息
export function getRating(){
    return req.get('/api/ratings')
}
//请求商品列表
export function getGoods(){
    return req.get('/api/goods')
}