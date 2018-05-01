<template>
  <div class="main">
    <h1>用户管理</h1>
    <data-table
      ref="userTable"
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
          serverurl: that.Constants().USER_LIST,
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
              prop: "wxHead",
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
              prop: "brithday",
              name: "地址",
              width: "160px",
              render: function (data) {
                if (data)
                  return  data ;
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

      },
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
