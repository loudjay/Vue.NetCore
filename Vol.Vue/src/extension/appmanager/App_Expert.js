
import gridHeader from './App_Expert/App_ExpertGridHeader'
//声明vue对象
let $this;
let extension = {
  components: {
    gridHeader: gridHeader,
    gridBody: '',
    gridFooter: '',
    modelHeader: '',
    modelBody: '',
    modelFooter: ''
  }, //动态扩充组件或组件路径
  buttons: {
    view: [{
      name: "弹出框1",
      icon: 'md-add',
      index: 1,//添加到第一个按钮后面
      type: 'error',
      onClick: function () {
        this.$refs.gridHeader.open1()
      }
    }]
  },
  methods: { //事件扩展
    onInit () {
      //设置界面上最多可显示的按钮数量 
      this.maxBtnLength = 6;
      // 第2个弹出框操作
      this.buttons.splice(2, 0, ...[{
        name: "弹出框2",
        icon: 'md-add',
        type: 'info',
        onClick: function () {
          this.$refs.gridHeader.open2()
        }
      },
      {
        name: "获取子组件对象",
        icon: 'md-add',
        type: 'info',
        onClick: function () {
          this.$Message.info(this.$refs.gridHeader.getTestData())
        }
      }])


      // 第3个弹出框操作
      this.columns.forEach(x => {
        if (x.field == "Resume") {
          x.formatter = (row, column, event) => {
            return '<a>(弹出框3)' + row.Resume + '</a>'
          };
          //绑定点击事件
          x.click = (row, column, event) => {
            this.$refs.gridHeader.open3(row)
          };
        }
      })
    },
  }
};
export default extension;