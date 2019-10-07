<template>
  <div class="full-height project-info" style="min-width: 1280px;"><!-- style="min-width: 1366px;"-->
    <div class="g-wrapper">
      <!-- @getLeftTree="getLeftTree"-->
      <v-head
        :treeArr="treeArr"
        :isSidebar="isSidebar"
        :menuObjShow="menuObjShow"
        :userName="userName"
        :userImg="userImg">
      </v-head>
      <div class="g-container">
        <v-sidebar v-show="isSidebar" :routeData="treeArr" :projectSetShow="projectSetShow"></v-sidebar>
        <div class="g-content" :class="{'full-content':!isSidebar,'g-content-size' :collapse}"
             style="padding-top: 60px;">
          <el-row>
            <div class="breadcrumb-inner" v-show="!this.$route.meta.breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in this.$route.meta.breadcrumbArr" :key="item.path"
                                    :to="{ path: item.path }">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>

            <div class="breadcrumb-inner" v-show="this.$route.meta.breadcrumbSpecial">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in breadcrumb" :to="{ path: item.path }" :key="item.path">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-row>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  // import vTags from './Tags.vue';
  import bus from '../../../assets/js/bus'
  import vHead from './header.vue'
  import vSidebar from './sidebar.vue'
  import vFooter from './footer.vue'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        shownProjectName: '',
        collapse: false,
        treeArr: [],
        isSidebar: false,
        // 控制sidebar中项目设置的显示跟隐藏
        projectSetShow: false,
        // header menu 的显示控制
        menuObjShow: {
          myProject: false,
          newFinancial: false,
          oldFinancial: false,
          company: false,
          system: false,
          systemDev: false
        },
        userName: '',
        userImg: '',
        menus: []
      }
    },
    components: {
      vHead, vSidebar, vFooter
    },
    computed: {
      ...mapState({
        poolToStr: state => state.poolToStr,
        breadcrumb: state => state.breadcrumb,
        projectId: state => state.projectId
      }),
      PoolToArr() {  // 还款
        return this.$store.state.typeObject['PoolTo']
      }
    },
    created() {
      bus.$on('collapse', msg => {
        this.$store.commit('collapse_change', msg)
        this.collapse = msg
      })
      this.logIn()
    },
    methods: {
      logIn() {
        // 获取链接上的信息
        let self = this
        let url = '/login/getUserInfo.do'
        self.ajaxDate('POST', absContext + url, '', function (result) {
          self.userName = result.userName
          self.userImg = result.imgUrl
          self.$store.commit('getUserInfo_put', result.agencyId)
          self.$store.commit('getUserName_put', result.userName)
          if (result.superRole) {// 是否超级管理员
            self.$store.commit('isSuperRole_change', true)
          } else {
            self.$store.commit('isSuperRole_change', false)
          }
        })
      },
      // 获取左侧菜单
      getLeftTree(projectId = '') {
        let self = this
        let params = {projectId}
        let url = absContextPrivilege + '/menu/getMenuList.do'
        self.menuObjShow = {
          myProject: false,
          newFinancial: false,
          oldFinancial: false,
          company: false,
          system: false,
          systemDev: false
        }
        let buttons = []
        //   self.menus = []
        self.ajaxDate('POST', url, params, function (result) {
          if (result.menus.length > 0) {
            self.treeArr = result.menus
            let resultArr = result.menus
            for (let x in resultArr) {
              if (resultArr[x].pageMenu === 6) { // 项目设置
                self.projectSetShow = true
                //  self.menus.push('/project/set')
                if (resultArr[x].details && resultArr[x].details.length > 0) {
                  buttons = resultArr[x].details.map(item => {
                    return {buttonName: item.names}
                  })
                }
              } else if (resultArr[x].pageMenu === 7) { // 我的项目
                self.menuObjShow.myProject = true
                //  self.menus.push('/projectIndex')
              } else if (resultArr[x].pageMenu === 4) { // 新财务
                self.menuObjShow.newFinancial = true
                self.menuObjShow.url = resultArr[x].details
              } else if (resultArr[x].pageMenu === 3) { // 旧财务
                self.menuObjShow.oldFinancial = true
              } else if (resultArr[x].pageMenu === 5) { // 公司
                self.menuObjShow.company = true
              } else if (resultArr[x].pageMenu === 2) { // 权限
                self.menuObjShow.system = true
              } else if (resultArr[x].pageMenu === 8) { // 白名单
                self.menuObjShow.systemDev = true
              }
            }
          } else {
            self.isSidebar = false
            self.projectSetShow = false
            self.$router.push({path: '/errorinfo'})
          }
          if (result.buttons.length > 0) {
            buttons.push(...result.buttons)
            self.$store.commit('menuButtonArr_change', buttons)
          }
        })
      },
      // 获取所有的链接
      allLink(arr) {
        if (arr && arr.length > 0) {
          for (let x in arr) {
            if (arr[x].link) {
              this.menus.push(arr[x].link)
            }
          }
        }
      },
      postEnumConfig () {  // 'HisAgencyType'
        var self = this
        var url = '/config/getEnumConfig.do'
        var params = {
          enumClass: 'AssetPoolType,BorrowerIndustry,ConsumeUseType,DocumentType,EducationLevel,GuaranteeType,InterestRateType,' +
          'ProjectType,RepaymentType,CreditScore,AgencyType,DataInterType,AssetStatus,SubFile,CreditGrade,PayType,RepaymentFrequency,' +
          'PayCostsType,CostType,CalBaseType,IncreatType,SettlementFrequency,CalBaseType,CalTaxBase,CalTaxType,AssetPoolSortRule,PoolTo,PoolFrom,' +
          'CreditStatus,AssetBagStartType,AccountStatus,AssetRepoStatus,AssetRepoReason,ServiceReportType,BusinessModel,CreditFrom,RemindEvent,' +
          'TriggerEvent,AssetBagType,DurationAssetStatus,DurationAdjustItem,FinanceItemAddType,FinanceItemType,VideoType,DocFileType'
        }
        self.ajaxDate('POST', absContext + url, params, function (result) {
          var data = {}
          var windata = {}
          for (var x in result) {
            var arr = []
            var winarr = []
            arr.push({name: '全部', val: ''})
            for (var y in result[x]) {
              arr.push({name: result[x][y].value, val: result[x][y].key})
              winarr.push({name: result[x][y].value, val: result[x][y].key, checked: true})
            }
            windata[x] = winarr
            data[x] = arr
          }
          window.winEnumConfigStorage = windata
          self.storageEnumConfig(data)
          self.$store.commit('typeObject_put', windata)// 这个没有全部
          self.$store.commit('typeObjectAll_put', data)
        })
      },
      // 产品设计新增的枚举值
      getEnumConfig() {
        var self = this
        var url = '/config/getEnumConfig.do'
        var params = {
          enumClass: 'BillingBase,BillingWay,CashFlowType,CashRuleScope,CollectionRuleOne,DateCalculateMethod,' +
          'InterestCarryMode,InterestRule,PacketDayInterestRule,ParPrice,PayPartition,SubHierarchy,TaxFeeType,' +
          'ProductBusinessDayRule,ProductPeriodType,AccountExtractRule,AccountManageType,AccountName,AccountType,' +
          'AllInTriggerOrStop,LabelOne,LabelTwo,StatementActionType,StatementType,SceneTriggerCondition,TriggerConditionType,PeriodTrigger,' +
          'ReturnType,ReturnCalculateType,RiskType,ExpireEventType,PrincipleRoundType,AvgMaturityCalRule'
        }
        self.ajaxDate('POST', absContextPro + url, params, function (result) {
          var data = {}
          var windata = {}
          for (var x in result) {
            var arr = []
            var winarr = []
            arr.push({name: '全部', val: ''})
            for (var y in result[x]) {
              arr.push({name: result[x][y].value, val: result[x][y].key})
              winarr.push({name: result[x][y].value, val: result[x][y].key, checked: true})
            }
            windata[x] = winarr
            data[x] = arr
          }
          //  window.winEnumConfigStorage = windata
          self.getStorageEnumConfig(data)
          self.$store.commit('getTypeObject_put', windata)// 这个没有全部
          self.$store.commit('getTypeObjectAll_put', data)
        })
      }
    },
    watch: {
      $route: {
        handler(val) {
          val.meta.showSidebar ? (this.isSidebar = false) : (this.isSidebar = true)
        },
        deep: true,
        immediate: true
      },
      projectId: {
        handler(val) {
          let mate = this.$route.meta.systemName
          let path = this.$route.path
          this.$nextTick(()=>{
            if (val) {
              if (mate === 'project') {
                this.getLeftTree(val)
              } else {
                this.getLeftTree()
              }
            }
          })
        },
        deep: true,
        immediate: true
      },
      /* menus: {
         handler(val) {
           if (val && val.length > 0) {
             let path = this.$route.path
             let flag = false
             for (let x of val) {
               if (x === path) {
                 flag = true
                 break
               }
             }
             if (!flag) {
               this.$router.push({path: '/errorinfo'})
             }
           }
         },
         deep: true,
         immediate: true
       } */
    },
    mounted() {
      let self = this
      if (localStorage.getItem('projectId') != null && !self.$route.meta.showSidebar) {
        self.isSidebar = true
      } else {
        self.isSidebar = false
      }
      self.postEnumConfig()
      self.getEnumConfig()  // 产品设计新增的枚举
      let projectId = window.localStorage.getItem('projectId'),
        projectType = window.localStorage.getItem('PoolFromStr'),
        projectName = window.localStorage.getItem('projectName'),
        poolToStr = window.localStorage.getItem('poolToStr'),
        dataInterType = window.localStorage.getItem('dataInterType')

      self.$store.commit('dataInterType_change', dataInterType)
      self.$store.commit('poolToStr_change', poolToStr)
      self.$store.commit('projectId_change', projectId)
      self.$store.commit('projectType_change', projectType)
      self.$store.commit('projectName_change', projectName)

      if (!projectId || !projectType || !projectName || !poolToStr || !dataInterType) {
        self.getLeftTree()
        self.$router.push({path: '/'})
      }
    }
  }
</script>
<style scoped>
  .g-content-size {
    margin: 3px 15px 0 84px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .full-content {
    margin: 0 20px;
  }

  .full-height {
    height: 100%;
  }

  .current-project {
    position: relative;
  }

  .current-project .project-icon {
    position: relative;
    display: inline-block;
    vertical-align: top;
  }

  .current-project .project-icon .icon {
    width: 40px;
    height: 40px;
  }

  .current-project .project-text {
    display: inline-block;
    font-size: 16px;
    color: #3E4047;
    height: 36px;
    text-align: left;
    line-height: 36px;
  }

  .project-text-p1 {
    font-size: 20px;
    font-weight: 600;
  }

  .project-text-p2 {
    font-size: 12px;
    color: #80848F;
  }
</style>
<style>
  .rightFont {
    text-align: right !important;
  }

  .project-info .mod-form .form-label {
    width: 160px;
  }

  /*透明背景*/
  .transparentBack {
    background-color: transparent;
  }

  /*表格不换行 横向表格*/
  .uncol-table {
    overflow-x: hidden;
  }

  .uncol-table td {
    white-space: nowrap;
  }

  .uncol-table th {
    width: 100px;
    display: inline-block;
  }

  /*表格不换行 垂直表格*/
  .uncol-tableV2 {
    overflow-x: visible;
    overflow-y: visible;
  }

  .uncol-tableV2 td, .uncol-tableV2 th {
    white-space: nowrap;
  }

  /* 选择按钮 */
  .labelBox {
    cursor: pointer;
    margin: 0 15px 10px 0;
    display: inline-block;
  }

  .labelBox input {
    display: none;
  }

  .labelBox input:checked + span {
    background-color: #fff;
    color: #11adfe;
  }

  /* 上传文件名称 */
  .fileNamebox {
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* margin: 0 auto; */
  }

  /* 项目名称 */
  .project-font {
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 18px;
    font-size: 12px;
  }

  .mod-table .project-font {
    margin: 0 auto;
  }

  /* input后面加% */
  .inputBoxRata {
    padding-right: 14px;
  }

  .inputBoxRata input {
    min-width: auto !important;
  }

  .inputBoxRata:before {
    content: '%';
    position: absolute;
    top: 2px;
    right: -2px;
  }

  /* 时间不可选 */
  .unSelectTime {
    background-color: rgb(235, 235, 228);
  }

  .icon-date {
    right: 0;
    z-index: -1;
  }

  /* 去除重构的css,title手指标志 */
  .title-box .title {
    cursor: default;
  }

</style>
