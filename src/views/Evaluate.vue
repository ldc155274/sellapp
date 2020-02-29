<template>
    <div class="evaluate">
        <Row>
        <i-col span="10" class="left">
            <h1>3.9</h1>
            <h3>综合评分</h3>
            <p>高于周边商家69.2%</p>
        </i-col>
        <i-col span="14" class="right">
            <h3>服务态度 
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_off@3x.png">
                3.9</h3>
                <h3>服务态度 
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_on@3x.png">
                <img src="../assets/imgs/star24_off@3x.png">
                4.0</h3>
                <h3>送达时间 <span>44分钟</span></h3>
        </i-col>
    </Row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

.evaluate{
    height: 700px;
    background-color: rgba(128, 128, 128, 0.192);
    
    .ivu-row{
        height: 100px;
        background-color: #fff;
        border-top: 2px solid rgba(128, 128, 128, 0.192);
        .left{
            text-align: center;

        }
        .right{
            padding-top: 10px;
            h3{
                line-height: 25px;
            }
            img{
                width: 20px;
                margin: 0 1px;
            }
        }
    }
}
</style>