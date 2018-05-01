<template>
  <div class="main">
    <h1>商品管理</h1>
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
          showAdd: 1,
          showDel: 1,
          showCheckBack: 1,
          serverurl: that.Constants().GOODS_LIST,
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
              prop: "alias",
              name: "图片",
              width: "160px",
              render: function (data) {
                if (data)
                  return "<img src='" + data + "' style='width:100px;'>  ";
                else
                  return " - ";
              },
              filter: {
                type: "none",
              },
              filterData: ""
            },
            {
              sortable: false,
              prop: "name",
              name: "名称",
              width: "160px",
              render: function (data) {
                if (data)
                  return data;
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
              prop: "minprice",
              name: "最小金额",
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
              prop: "updateline",
              name: "更新时间",
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
                  return "<label style='color: #c48d37;padding:2px 6px;display: inline-block;'>正常</label>"
                }
                if (data == 2) {
                  return "<label style='color: #07d352;padding:2px 6px;display: inline-block;'>下架</label>"
                }

                return " -- "
              },
              filter: {
                type: "select",
                data: [
                  {
                    value: 1,
                    text: "正常"
                  },
                  {
                    value: 2,
                    text: "下架"
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
            {
              name: "上架",
              show(data) {
                return data.status = 2;
              },
              btnClass: "btn-main",
              handler: function (id) {
                that.up(id);
              }
            },
            {
              name: "下架",
              show(data) {
                return data.status = 1;
              },
              btnClass: "btn-main",
              handler: function (id) {
                that.down(id);
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

      },
      up(id) {

      },
      down(id) {

      }
    }
  }
</script>

<style scoped>
  .main {
    padding: 30px;
  }

  .main h1 {
    padding-bottom: 40px;
    color: #fffdd9;
    text-align: left;
    font-weight: 300;
  }
</style>
