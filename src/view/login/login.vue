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
          <!-- 表单 -->
          <el-form ref="form" :model="loginForm" label-width="43px">
              <!-- 手机号 -->
            <el-form-item>
                <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="loginForm.phone"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item>
                <el-row>
                    <el-col :span="17">
                        <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="loginForm.password"></el-input>
                    </el-col>
                    <el-col :span="7">
                        <img class="login-code" src="../../assets/login_captcha.png" alt="">
                    </el-col>
                </el-row>
                
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item>
                <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="loginForm.loginCode"></el-input>
            </el-form-item>
            <!-- 用户协议 -->
            <el-form-item>
                <el-checkbox v-model="loginForm.isChecked">
                我已阅读并同意
                <el-link type="primary">用户协议</el-link>
                和
                <el-link type="primary">登录</el-link>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button class="my-btn" type="primary" >注册</el-button>
                <el-button class="my-btn" type="primary">取消</el-button>
            </el-form-item>
        </el-form>
      </div>
      <!-- 右侧的图片 -->
      <img src="../../assets/login_banner_ele.png" alt="">
  </div>
</template>

<script>
export default {
   //组件名
   name:'login',
   data() {
       return {
           loginForm:{
            // 手机号
            phone:"",
            // 密码 
            password:"",
            // 验证码
            loginCode:"",
            // 是否勾选 
            isChecked:""
           }
       }
   },
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
    // 左侧盒子
    .left-box {
    width: 478px;
    background-color: #F5F5F5;
    height: 550px;
     // 设置样式 把 表单间隙空出来
    padding-right: 41px;
    block-size: border-box;
    .title-box {
        align-items: center;
        display: flex;
        margin-top: 44px;
        margin-left: 48px;
        margin-bottom: 27px;
        .logo{
        }
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
    //登录验证码
    .login-code{
        width: 100%;
        height:40.8px;
    }
     .my-btn {
        width: 100%;
        margin-top: 26px;
        margin-left: 0;
    }
 }
 //协议区域的布局
 .el-checkbox {
    display: flex;
    // 上下居中
    align-items: center;
    .el-checkbox__label {
        display: flex;
        }
    }
   
}
// .login-container 
</style>