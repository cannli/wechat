<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      //    try {
      //      window.addEventListener("storage",function(e){
      //        console.log(e);
      //      },false);
      //    }catch (e){
      //      console.log('localStorage is error')
      //    }
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "assets/css/global.css";
  @import "assets/css/header/header.css";
  @import "assets/css/elementCss/elementSty.css";
  @import "assets/css/main.scss";

  [v-cloak] {
    display: none !important;
  }

  #app {
    height: 100%;
    background: #f0f2f5;
  }

  .z-index-9 {
    z-index: 9;
  }

  .btn-unable-click {
    cursor: not-allowed;
  }

  /*不允许点击*/
  .required:after {
    /*必选项*/
    content: "*";
    color: #ff0000;
    font-size: 100%;
  }

  .mod-title .title-box {
    margin-top: 0;
    font-size: 16px;
  }

  .pd_bottom_0 {
    padding-bottom: 0 !important;
  }

  .icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }

  .stair_title .title {
    font-size: 18px;
    padding-left: 5px;
  }

  /*.mod-title .link{*/
  /*position: absolute;*/
  /*right: 0;*/
  /*top: -14px;*/
  /*bottom: 16px;*/
  /*font-size: 14px;*/
  /*}*/
  .el-breadcrumb {
    font-size: 12px;
  }

  /* 覆盖element样式 */
  .el-menu-item,
  .el-submenu__title {
    height: 50px;
    line-height: 50px;
    margin: 0 10px;
  }

  .el-menu--collapse .el-submenu__title {
    padding: 0 12px !important;
  }

  .el-submenu__icon-arrow {
    font-weight: bold;
  }

  .el-table::before {
    background: none;
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: none;
  }

  .el-table--striped .el-table__body tr:not(.el-table__row--striped) td {
    background: #f8fafc;
  }

  .el-table th > .cell {
    color: #80848f;
  }

  .el-table .cell {
    color: #3e4047;
  }

  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    border-radius: 50%;
  }

  .el-pagination button:hover {
    color: #409EFF !important;
  }

  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    font-weight: 400;
    color: #80848F;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    font-weight: 700;
    color: #3E4047;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #3E4047;
    font-weight: bold;
  }

  .g-content {
    background: #f0f2f5;
  }

  .table_layout {
    padding: 20px 20px 0 20px;
    background: #fff;
  }

  .ext-poptip-btn:before {
    content: "?";
    position: absolute;
    top: 7px;
    right: -20px;
    font-weight: bold;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    color: #fff;
    background-color: #00a2ff;
    text-align: center;
    font-size: 10px;
  }

  .form-text-my:focus {
    border-color: #409EFF;
    outline: 0;
  }
</style>
