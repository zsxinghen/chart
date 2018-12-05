/**
* 表格组件
*/
<template>
  <div>
    <h1 v-show="config.title.isShow" :style='{"text-align":"center","color": config.title.color,"font-size": config.title.fontSize + "px",
      "font-family":config.title.fontFamliy}'>{{config.title.text}}</h1>
    <!-- <el-table v-if="config.data" :data="config.data.rowValue" :border="config.isBorder" :stripe="true" max-height="100%"
      style="overflow-y:auto" :span-method="objectSpanMethod">
      <el-table-column show-overflow-tooltip :prop="config.data.rowName[index].value" :label="config.data.rowName[index].label"
        :min-width="60" v-for="(val,index) in config.data.rowName" :key="index" header-align="center" align="center"
        :resizable='true'></el-table-column>
    </el-table> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      rowIndex: "-1",
      OrderIndexArr: [],
      hoverOrderArr: []
    };
  },
  props: {
    id: {
      type: String,
      default() {
        return {};
      }
    },
    config: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    mounted() {
      this.getOrderNumber();
    },
    methods: {
      // 获取相同编号的数组
      getOrderNumber() {
        let OrderObj = {};
         console.log(0)
        this.config.data.forEach((element, index) => {
          element.rowIndex = index;
          if (OrderObj[element.operate_number]) {
            OrderObj[element.operate_number].push(index);
          } else {
            OrderObj[element.operate_number] = [];
            OrderObj[element.operate_number].push(index);
          }
        });
       console.log(111,this.config.data,OrderObj)
        // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
        // for (let k in OrderObj) {
        //   if (OrderObj[k].length > 1) {
        //     this.OrderIndexArr.push(OrderObj[k]);
        //   }
        // }
      },

      // 合并单元格
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0 || columnIndex === 3 || columnIndex === 4) {
          for (let i = 0; i < this.OrderIndexArr.length; i++) {
            let element = this.OrderIndexArr[i];
            for (let j = 0; j < element.length; j++) {
              let item = element[j];
              if (rowIndex == item) {
                if (j == 0) {
                  return {
                    rowspan: element.length,
                    colspan: 1
                  };
                } else if (j != 0) {
                  return {
                    rowspan: 0,
                    colspan: 0
                  };
                }
              }
            }
          }
        }
      },

      tableRowClassName({ row, rowIndex }) {
        let arr = this.hoverOrderArr;
        for (let i = 0; i < arr.length; i++) {
          if (rowIndex == arr[i]) {
            return "hovered-row";
          }
        }
      },

      cellMouseEnter(row, column, cell, event) {
        this.rowIndex = row.rowIndex;
        this.hoverOrderArr = [];
        this.OrderIndexArr.forEach(element => {
          if (element.indexOf(this.rowIndex) >= 0) {
            this.hoverOrderArr = element;
          }
        });
      },

      cellMouseLeave(row, column, cell, event) {
        this.rowIndex = "-1";
        this.hoverOrderArr = [];
      }
    }
  }
};
</script>
