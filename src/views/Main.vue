<template>
  <div>
    <!-- 容器页面 -->
    <div class="backgroud" :style="{backgroundImage:'url('+data.avatar+')'}"></div>
    <div class="goodsimg" >
      <div class="headr" >
        <div class="left">
          <img :src="data.avatar" />
        </div>
        <div class="right">
          <h2>{{data.name}}</h2>
          <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
          <p>
            <img src="../assets/imgs/decrease_3@2x.png" />
            <span>在线支付满28减5，满50减10</span> 
          </p>
        </div>
      </div>
      <div class="bottom">
        <p>
          <img src="../assets/imgs/bulletin@2x.png"  />
          {{data.bulletin}}
        </p>
      </div>
    </div>

    <div class="router-link-div">
      <router-link to="/goods">商品</router-link>
      <router-link to="/evaluate">评价</router-link>
      <router-link to="/merchant">商家</router-link>
    </div>
    <!-- 二级路由出口 -->
    <router-view></router-view>

    <div class="shopcar-bar">
        <div class="left">
         <span class="big">¥0</span>  |  <span class="small">另需配送费4元</span> 
        </div>
        <div class="right">
            <h3>¥20起送</h3>
        </div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      data: {} //商家信息
    };
  },
  created() {
    //发送初始化请求
    //   var obj =  getSeller() // req.get('/api/seller')
    //     // obj === req.get('/api/seller')
    //     obj.then()

    getSeller().then(res => {
      // 怎么把商家数据渲染到屏幕上？？？
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.router-link-div {
  display: flex;
  justify-content: space-around;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  color: #4c545a;
  position: relative;
  z-index: 0;
  router-link:hover{
      color: red;
  }
}
.backgroud{
  width: 100%;
  height: 140px;
  position: relative;
  z-index: -2;
  
  filter: blur(4px);
  
}

.shopcar-bar {
  position: fixed; //脱离文档流-相对于浏览器绝对定位
  height: 80px;
  width: 100%;
  bottom: 0; //永远挨着浏览器底边
  background-color: #141c27;
  display: flex;
  .left{
      width: 70%;
      height: 80px;
      text-align: center;
      line-height: 50px;
      .big{
          font-size: 25px;
      }
      .small{
          font-size: 15px;
      }
  }
  .right{
      width: 30%;
      height: 80px;
      background: pink;
      text-align: center;
      line-height: 50px;

  }
}

.goodsimg {
  width: 100%;
  height: 140px;
  position: absolute;
  top: 0;
  z-index: -1;
  

  color: #fff;
  .headr {
    height: 75%;
    justify-content: space-between;
    padding: 15px 0;
    display: flex;
    .left {
      width: 30%;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 10%;
      }
    }
    .right {
      width: 70%;
    }
  }
  .bottom{
      height: 25%;
      background: rgba(255, 255, 255, 0.219);
      
      p{
          img{
              margin-top: 8px;
          }
        
          
      }
  }
}
</style>