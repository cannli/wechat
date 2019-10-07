import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    disabled: true,
    productId: '',          // 产品id
    projectId: '',          // 项目Id
    projectName: '',        // 项目名称
    projectType: '',        // 记录项目类型个人消费贷不显示抵押物分布
    typeObject: {},         // 各种类型
    typeObjectAll: {},      // 各种类型+全部选项
    userInfo: '',           //  用户信息
    userName: '',
    // li
    getTypeObject: {},        // 产品设计新增的枚举值
    getTypeObjectAll: {},
    // cannli
    projectUpdate: false,   // 在ABS下拉更新标识 self.$store.commit('projectName_change'
    confingMenu: '',
    authorityPageMenu: 0,   // 系统设置显示隐藏
    isSidebar: undefined,   // 菜单是否显示**
    //  headerSelectName: 'project',       // 头部，项目选择标识
    isSuperRole: Boolean,              // 是否是超管
    treeIsShow: Boolean,               // 左边菜单是否显示
    projectMenuShow: false,            // 新建项目按钮是否显示
    // 获取hash值做面包屑

    cashConfigObj: {},                 // 产品详情
    browsingMaintenanceObj: {},        // 资产列表

    // 获取费用设置的ID
    expenseSetID: '',
    // 费用类型
    taxType: '',
    assertData: '',                     // 基础资产导入-资产池导入数据
    // 获取 存续期 页面标识
    poolToStr: '',

    hisAgencyType: '',  // 机构分类

    // 入池数据来源
    dataInterType: '',
    rowStatus: '',
    rowId: '',
    serialNumber: '',

    // 收取面包屑数据
    breadcrumb: [],

    // 产品发行 0 未发行 1已发行
    publishStatus: '',

    // 记录侧边栏的缩放  true为展开状态
    collapse: true,
    // 风控监控页面是否有产品数据
    riskDataMonitoringNoData: false,
    // 指导页的显示跟隐藏
    guideShow: true,
    // 控制按钮 的 arr
    menuButtonArr: [],
    menuFlag: false
  },
  getters: {
    // doneTodos: state => {
    //     return state.todos.filter(todo => todo.done)
    // },
    // doneTodosCount: (state, getters) => {
    //     return getters.doneTodos.length
    // }
    getAssertData(state) {
      return state.assertData
    }
  },
  mutations: {
    menuFlag_change(state, val) {
      state.menuFlag = val
    },
    menuButtonArr_change(state, val) {
      state.menuButtonArr = val
    },
    guideShow_change(state, val) {
      state.guideShow = val
    },
    collapse_change(state, val) {
      state.collapse = val
    },
    productId_change(state, val) {
      state.productId = val
    },
    breadcrumb_change(state, val) {
      state.breadcrumb = val
    },
    saveAssertData(state, val) {
      state.assertData = val
    },
    projectId_change(state, val) {
      state.projectId = val
    },
    projectName_change(state, val) {
      state.projectName = val
    },
    projectType_change(state, val) {
      state.projectType = val
    },
    typeObject_put(state, val) {
      state.typeObject = val
    },
    typeObjectAll_put(state, val) {
      state.typeObjectAll = val
    },
    // 产品设计新增的枚举值
    getTypeObject_put(state, val) {
      state.getTypeObject = val
    },
    getTypeObjectAll_put(state, val) {
      state.getTypeObjectAll = val
    },
    getUserInfo_put(state, val) {
      state.userInfo = val
    },
    getUserName_put(state, val) {
      state.userName = val
    },
    // cannli
    projectUpdate_change(state, val) {
      state.projectUpdate = val
    },
    confingMenu_change(state, val) {
      state.confingMenu = val
    },
    authorityPageMenu_change(state, val) {
      state.authorityPageMenu = val
    },
    isSidebar_change(state, val) {
      state.isSidebar = val
    },
    treeIsShow_change(state, val) {
      state.treeIsShow = val
    },
    isSuperRole_change(state, val) {
      state.isSuperRole = val
    },
    projectMenuShow_change(state, val) {
      state.projectMenuShow = val
    },
    /* 获取hash值做面包屑 */
    cashConfigObj_change(state, val) {
      state.cashConfigObj = val
    },
    browsingMaintenanceObj_change(state, val) {
      state.browsingMaintenanceObj = val
    },
    expenseSetID_change(state, val) {
      state.expenseSetID = val
    },
    taxType_change(state, val) {
      state.taxType = val
    },
    poolToStr_change(state, val) {
      state.poolToStr = val
    },
    // 机构分类
    hisAgencyType_change(state, val) {
      state.hisAgencyType = val
    },
    dataInterType_change(state, val) {
      state.dataInterType = val
    },
    rowStatus_change(state, val) {
      state.rowStatus = val
    },
    rowId_change(state, val) {
      state.rowId = val
    },
    serialNumber_change(state, val) {
      state.serialNumber = val
    },
    publishStatus_change(state, val) {
      state.publishStatus = val
    },
    riskDataMonitoringNoData_change(state, val) {
      state.riskDataMonitoringNoData = val
    }
  }
})

export default store
