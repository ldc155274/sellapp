<template>
  <div class="goods-div">
    <div class="left-div">
      <ul class="content">
        <div @click="clickLeftTitle(index)" :class="{leftGoods:true,selected:index == curSelected}"  v-for="(item,index) in data" :key="item.name">
          <img v-show="item.type == 1" src="../assets/imgs/invoice_1@2x.png" />
          {{ item.name }}
        </div>
      </ul>
    </div>

    <div class="right-div">
      <ul class="content">
        <div :id="index" v-for="(item,index) in data" :key="item.id">
        <!-- 标题 -->
        <h5>{{ item.name }}</h5>
        <!-- 标题下方的儿子 -->
        <div v-for="child in item.foods" :key="child.id" class="foods-child-div">
          <!-- child .ci ===  {name: "皮蛋瘦肉粥", price: 10, oldPrice: ??-->

          <div class="left">
            <img :src="child.icon" />
          </div>
          <div class="right">
            <h2>{{ child.name }}</h2>
            <p>{{child.description}}</p>
            <p>月售{{child.sellCount}}份 好评率{{child.rating}}</p>
            <label class="red">{{child.price}}</label>
            <label class="old">{{child.oldPrice}}</label>
          </div>
        </div>
      </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import BScroll from "better-scroll"; //引入BetterScroll滚动插件
export default {
  data() {
    return {
      data: [],
      curSelected:0 //食品
    };
  },
  created() {
    //发送初始化请求
    //   var obj =  getSeller() // req.get('/api/seller')
    //     // obj === req.get('/api/seller')
    //     obj.then()

    getGoods().then(res => {
      // 怎么把商家数据渲染到屏幕上？？？
      console.log(res.data.data[0]);
      this.data = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"),{
      click:true
    });
     this.rightDiv = new BScroll(document.querySelector(".right-div"))
  },
  methods:{
    clickLeftTitle(index){
      this.curSelected = index
      this.rightDiv.scrollToElement(document.getElementById(index),600)
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.selected {
  background-color: #fff;
}
.goods-div {
  display: flex;
  height: 500px;

  .left-div {
    width: 80px;
    background: #d9dde1;
    height: 100%;
    overflow: scroll;
    .leftGoods {
      height: 60px;
      margin: 0 8px;
      display: flex;
      align-items: center; //侧轴居中
      border-bottom: 1px solid #ccc;
      img {
        width: 12px;
      }
    }
  }

  .right-div {
    background-color: rgba(255, 255, 255, 0.144);
    flex: 1;
    overflow: scroll;
    h5 {
      height: 20px;
      background-color: rgba(124, 112, 112, 0.295);
    }
    .foods-child-div {
      height: 140px;
      background-color: #fff;
      padding: 20px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #000;
      margin: 0 10px;
      .left {
        width: 30%;
        text-align: center;

        img {
          width: 80px;
          height: 80px;
        }
      }
      .right {
        width: 70%;
        h2 {
          color: #000;
        }
        .red {
          font-size: 20px;
          color: red;
          margin-right: 10px;
        }
        .old {
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>