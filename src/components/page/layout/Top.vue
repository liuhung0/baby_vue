<template>
  <div class="flex_box">
    <div class="flex_item flex_item_4" >
     <img src="@/assets/image/logo.png" style="width:32px;Height:32px">
    </div>
    <div class="flex_item flex_item_20" >
      <router-link to="/main/" class="packing">龚家湾邻家儿女婴童水疗养生馆</router-link>
    </div>
    <div class="flex_item flex_item_10">
      <router-link id="index" @click.native="logout" to=""><img src="../../../assets/image/zhuxiao.png" class="zhuxiao"/></router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    var selected;
    export default {
      components: {},
      props: [],
      data(){
        return {
        }
      },
      watch:{
      },
      mounted(){
      },
      methods:{
        logout(){
          let that = this;
          this.$router.push('/login');
        }
      }
    }
</script>
<style  scoped="scoped">
  .flex_box {
    flex: 1 0 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    background: #181D24;
  }
  .flex_item {
    flex:0;
    display: flex;
  }
  .flex_item_20{
    flex:0 0 20%;
    text-align: left;
    padding-top:16px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .flex_item_20  .packing{
    font-size:20px;
    display: inline-block;
    line-height: 42px;
    color: #fff;
  }
  .packingCar{
    width: 350px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .flex_item_10{
    flex:0 0 60%;
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 75px;
  }

  .flex_item_10 > span{
    font-size: 16px;
    color: #FFFFFF;;
    display: inline-block;
    line-height: 72px;
    padding-right:40px;
  }
  .flex_item_10> .router-link-active{
    font-size: 16px;
    color: #FFFFFF;;
    display: inline-block;
    margin-right: 5px;
  }
  .flex_item_4{
    flex:0 0 4%;
    text-align:center;
    padding-top:16px;
  }
  .flex_item_4 img{
    text-align:center;
    margin:4px auto;
    width:32px;
    height:32px;
  }
  .flex_item_100_w{
    flex:1 1 100%;
    height:2px;
    background:#faffb3;
  }
  .flex_item_100_w2{
    flex:1 1 100%;
    height:2px;
    background: #fff;
  }
  .zhuxiao{
    line-height: 10px;
  }
  .packing{
    color: #fff;
    font-size: 20px;
  }

</style>
<style>
  .el-scrollbar{
    width: 100% !important;
  }
  .packingCar.el-select{
    background: #1D242E !important;
  }
  .flex_item_40 .el-select .el-input__inner{
    background: transparent !important;
    color: #fff !important;
  }
</style>
