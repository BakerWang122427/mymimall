<template>
  <div class="header">
    <div class="container clearfix">
      <div class="nav-topbar-left">
        <a href>小米商城</a>
        <a href>MIUI</a>
        <a href>云服务</a>
        <a href>协议规则</a>
      </div>
      <div class="nav-topbar-right">
        <a href>UserName</a>
        <a href>我的订单</a>
        <a href class="my-cart">
          <i class="icon-cart"></i>购物车(88)
        </a>
      </div>
    </div>
    <div class="nav-header">
      <div class="container clearfix">
        <div class="header-logo">
          <div class="logo-wrapper">
            <a href>
              <img src="https://i01.appmifile.com/webfile/globalimg/pandora/mihome.png" />
            </a>
          </div>
        </div>
        <div class="header-menu">
          <ul class="clearfix">
            <li class="first">小米手机</li>
            <li>Redmi红米</li>
            <li>电视</li>
            <li>笔记本</li>
            <li>家电</li>
            <li>路由器</li>
            <li>智能硬件</li>
            <li>服务</li>
            <li>社区</li>
          </ul>
        </div>
        <div class="header-search">
          <form action class="search-form">
            <input type="search" class="search-text" />
            <input type="submit" class="search-btn" value="搜索" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navheader"
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.header {
  height: 40px;
  line-height: 40px;
  background-color: #212121;
  z-index: 200;
  position: relative;
  min-width: 1226px;
  .nav-topbar-left {
    float: left;
    a {
      margin-right: 15px;
    }
  }
  .nav-topbar-right {
    float: right;
    a {
      margin-left: 15px;
      &.my-cart {
        display: inline-block;
        background: #ff670a;
        padding: 0 5px;
        color: #fff;
      }
    }
  }
  a {
    color: #b0b0b0;
    &:hover {
      color: #fff;
    }
  }
  .nav-header {
    position: relative;
    height: 88px;
    z-index: 100;
    background-color: transparent;
    .header-logo {
      position: relative;
      float: left;
      height: 100%;
      .logo-wrapper {
        line-height: 88px;
        width: 56px;
        overflow: hidden;
        a {
          img {
            vertical-align: middle;
            margin-left: -56px;
            transition: all 0.2s;
          }
          &:hover img {
            margin-left: 0;
          }
        }
      }
    }
    .header-menu {
      float: left;
      width: 850px;
      ul {
        position: relative;
        z-index: 10;
        float: left;
        width: 100%;
        height: 88px;
        margin: 0;
        padding: 12px 0 0 30px;
        list-style-type: none;
        font-size: 16px;
        li {
          float: left;
          padding: 0 10px;
          color: #000;
          height: 76px;
          line-height: 76px;
          &.first {
            margin-left: 166px;
          }
          &:hover {
            color: #ff670a;
          }
        }
      }
    }
    .header-search {
      float: right;
      width: 296px;
      margin-top: 25px;
      .search-form {
        position: relative;
        width: 296px;
        height: 50px;
        z-index: 20;
        .search-text {
          position: absolute;
          top: 0;
          border: 1px solid #e0e0e0;
          outline: 0;
          -webkit-transition: all 0.2s;
          transition: all 0.2s;
          right: 51px;
          z-index: 1;
          width: 223px;
          height: 48px;
          padding: 0 10px;
          font-size: 14px;
          line-height: 48px;
        }
        .search-btn {
          position: absolute;
          top: 0;
          border: 1px solid #e0e0e0;
          outline: 0;
          -webkit-transition: all 0.2s;
          transition: all 0.2s;
          right: 0;
          z-index: 2;
          width: 52px;
          height: 48px;
          font-size: 18px;
          line-height: 24px;
          background: #fff;
          color: #616161;
          cursor: pointer;
        }
      }
    }
  }
}
</style>