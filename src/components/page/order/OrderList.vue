<template>
  <div class="main">
    <h1>订单管理</h1>
    <data-table
      ref="goodsTable"
      :confignation="tableConfig"
      @addObjHandler="addObjHandler"
      @delObjHandler="delObjHandler"
    />
  </div>
</template>

<script>

  import DataTable from "../../ui/cub/DataTable";

  export default {
    components: {DataTable},
    name: "order-list",
    data() {
      let that = this;
      return {
        tableConfig: {
          draw: 1,
          showAdd: 0,
          showDel: 0,
          showCheckBack: 0,
          serverurl: that.Constants().ORDER_LIST,
          title: "订单管理",
          key: "id",
          pagenation: {
            page: 1,
            rows: 10,
            num: 0,
          },
          columns: [
            {
              sortable: false,
              prop: "用户头像",
              name: "",
              width: "160px",
              render: function (data) {
                if (data)
                  return "<img src='" + data.wxHead + "'>  " + data.name + "";
                else
                  return " - ";
              },
              filter: {
                type: "input",
              },
              filterData: ""
            },
            {
              sortable: true,
              prop: "price",
              name: "金额",
              width: "160px",
              render: function (data) {
                if (data)
                  return "<span style='color:#ff4f00;'> &yen;" + data + "</span>";
                else
                  return " - ";
              },
              filter: {
                type: "none",
              },
              filterData: ""
            },
            {
              sortable: true,
              prop: "payprice",
              name: "支付金额",
              width: "160px",
              render: function (data) {
                if (data)
                  return "<span style='color:#ff4f00;'> &yen;" + data + "</span>";
                else
                  return " - ";
              },
              filter: {
                type: "none",
              },
              filterData: ""
            },
            {
              sortable: true,
              sort: "asc",
              prop: "dateline",
              name: "创建时间",
              render: function (data) {
                if (data)
                  return new Date(data).Format();
                else
                  return " -- ";
              },
              filter: {
                type: "none",
              },
            },
            {
              sortable: true,
              sort: "asc",
              prop: "payline",
              name: "支付时间",
              render: function (data) {
                if (data)
                  return new Date(data).Format();
                else
                  return " -- ";
              },
              filter: {
                type: "none",
              },
            },

            {
              sortable: false,
              sort: "asc",
              prop: "status",
              name: "状态",
              width: '100px',
              render: function (data) {
                if (data == 1) {
                  return "<label style='color: #c48d37;padding:2px 6px;display: inline-block;'>未支付</label>"
                }
                if (data == 2) {
                  return "<label style='color: #07d352;padding:2px 6px;display: inline-block;'>已支付</label>"
                }
                if (data == 3) {
                  return "<label style='color: #00cbff;padding:2px 6px;display: inline-block;'>配送中</label>"
                }
                if (data == 4) {
                  return "<label style='color: #056eff;padding:2px 6px;display: inline-block;'>已收货</label>"
                }
                if (data == 9) {
                  return "<label style='color: #0d0432;padding:2px 6px;display: inline-block;'>已完成</label>"
                }
                if (data == -1) {
                  return "<label style='color: #ff516a;padding:2px 6px;display: inline-block;'>已取消</label>"
                }
                return " -- "
              },
              filter: {
                type: "select",
                data: [
                  {
                    value: 1,
                    text: "未支付"
                  },
                  {
                    value: 2,
                    text: "已支付"
                  },
                  {
                    value: 3,
                    text: "已配送"
                  },
                  {
                    value: 4,
                    text: "已确认"
                  },
                  {
                    value: 9,
                    text: "已完成"
                  },
                  {
                    value: -1,
                    text: "已取消"
                  },
                ]
              },
            },
          ],
          actions: [
            {
              name: "详情",
              show() {
                return true;
              },
              btnClass: "btn-main",
              handler: function (id) {
                that.infoObjHandler(id);
              }
            },
          ],
          dataset: [],
        }
      }
    },
    methods: {
      infoObjHandler(id) {
        var that = this;
        alert("点击了详情");
      },
      addObjHandler() {

      },
      delObjHandler(ids) {

      }
    }
  }
</script>

<style scoped>
 .main{
   padding:30px;
 }
  .main h1{
    padding-bottom: 40px;
    color: #fffdd9;
    text-align: left;
    font-weight: 300;
  }
</style>
