<template>
  <div class="main">
    <h1>文章管理</h1>
    <data-table
      ref="artTable"
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
          serverurl: that.Constants().ART_LIST,
          title: "文章管理",
          key: "id",
          pagenation: {
            page: 1,
            rows: 10,
            num: 0,
          },
          columns: [

            {
              sortable: false,
              prop: "title",
              name: "标题",
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
              sort: "asc",
              prop: "dateline",
              name: "创建时间",
              render: function (data) {
                if (data)
                  return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
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
                  return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
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
