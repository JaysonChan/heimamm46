<template>
<!-- 整体容器 -->
  <div class="login-container">
      <!-- 左侧盒子 -->
      <div class="left-box">
          <!-- 顶部标题 -->
          <div class="title-box">
              <img src="../../assets/login_logo.png" alt="" class="logo">
              <span class="title">黑马面面</span>
              <span class="line"></span>
              <span class="sub-title">用户登录</span>
          </div>
      </div>
      <!-- 右侧的图片 -->
      <img src="../../assets/login_banner_ele.png" alt="">
  </div>
</template>

<script>
export default {
   //组件名
   name:'login'
}
</script>

<style lang="less" >
.login-container {
    height: 100%;
    background:linear-gradient(225deg,rgba(20,147,250,1),rgba(1,198,250,1));
    /* 开启弹性布局 */
    display: flex;
    /* 上下居中 */
    align-items: center;
    /* 左右均分 */
    justify-content: space-around;
    .left-box {
    width: 478px;
    background-color: #F5F5F5;
    height: 550px;
    .title-box {
        align-items: center;
        display: flex;
        margin-top: 44px;
        margin-left: 48px;
        .logo{}
        .title{
            font-size: 24px;
            margin-left: 16px;
            margin-right: 14px;
        }
        .line{
            width: 1px;
            height: 28px;
            background-color: #C7C7C7;
        }
        .sub-title{
            font-size: 21px;
            margin-left: 12px;
        }
    }
}
}
// .login-container 
</style>