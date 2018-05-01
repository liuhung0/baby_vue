<template>
  <el-row>
    <el-col :span="24">
      <el-menu default-active="2" class="menu-demo">
        <el-submenu class="menu-oicn" v-for="(MENU,index) in menuList" :index="index+''" :key="index+''">
          <template slot="title">
            <router-link :to="MENU.path">
              <img :src="MENU.icon" style="width:32px;"/>
              <span class="title">{{MENU.name}}</span>
            </router-link>
          </template>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  import  UserImg  from "../../../assets/image/renyuanguanli@2x.png"
  import  OrderImg  from "../../../assets/image/baobiao@2x.png"
  import  SettingsImg from "../../../assets/image/sheszhi@2x.png"
  import  GoodsImg from "../../../assets/image/zuhuguanli@2x.png"
  import  ArtImg from "../../../assets/image/kaoqinglan@2x.png"

  export default {
    data() {
      return {
        menuList: [
          {
            name:"订单管理",
            path:"/main/order",
            icon:OrderImg,
          },
          {
            name:"商品管理",
            path:"/main/goods",
            icon:GoodsImg,
          },
          {
            name:"用户管理",
            path:"/main/users",
            icon:UserImg,
          },
          {
            name:"文章管理",
            path:"/main/art",
            icon:ArtImg,
          },
          {
            name:"基础设置",
            path:"/main/settings",
            icon:SettingsImg,
          },
        ],
      }
    },
    mounted() {
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
    }
  }
</script>
<style scoped>
  .menu-demo {
    background-color: #181D24;
    text-color: #fff;
    active-text-color: #ffd04b;
  }

  .menu-demo b {
    color: #278bff !important;
  }

  .menu-demo .el-col {
    width: 100%;
  }

  .menu-demo .el-menu-item {
    background: #1D242E;
    margin-bottom: 2px;
    padding: none !important;
  }

  .menuStyle {
    color: #A5A5A5;
  }

  .menuStyle:hover {
    color: #FFFFFF
  }

  .menu-demo .router-link-active {
    color: #FFFFFF;
  }

  .menu-demo.el-menu {
    border-right: none;
  }

  .menu-demo .el-menu-item-group__title {
    padding: 0;
  }

  .menu-demo .title {
    font-size: 16px;
    color: #fff;
  }

</style>
<style>
  .menu-demo .menu-oicn i {
    display: none !important;
  }

  .menu-demo .el-menu-item {
    background: #1D242E;

  }

  .menu-demo .el-menu-item-group__title {
    padding: 0 !important;
  }

  .menu-demo .el-menu-item:hover {
    background: #203A59 !important;
    box-shadow: 0 0 6px 0 #588FFF !important;
    border-radius: 2px;
  }

  .menu-demo .el-menu-item:focus {
    background: #203A59 !important;
    box-shadow: 0 0 6px 0 #588FFF !important;
  }

  .menu-demo .el-menu {
    background-color: #181D24 !important;
  }

  .menu-demo .el-submenu__title:hover {
    background: #203A59;
    box-shadow: 0 0 2px 0 rgba(113, 160, 255, 0.50);
    border-radius: 2px;
    color: #fff;
    border-right: 4px solid #49a9ff;
    margin-bottom: 2px;
  }

  .el-col-24 {
    text-align: left !important;
  }
</style>
