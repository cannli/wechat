<template>
  <header class="g-header" :class="{'g-header-size': collapse,'marginLeft':collapse}" id="g-header"
          style="box-shadow: 0 5px 10px #f1f1f1;">
    <div class="header-logo" :style=" collapse ? 'visibility:hidden' : 'visibility: visible'">
      <div class="header-logo-a" :class="{'header-logo-a-size': collapse}">
        <img :src="logoX" style=" height: auto; width: 181px; vertical-align: middle; margin-top: -1.5px;"/>
      </div>
    </div>
    <div v-show="isSidebar" class="collapse-btn"
         :class="{'collapse-min': collapse}" @click="collapseChage">
      <svg class="icon" aria-hidden="true" style="width: 18px;height: 18px;">
        <use xlink:href="#icon-sanheng"></use>
      </svg>
    </div>
    <div class="header-tab">
      <div class="tab-item tab_pro" :class="{ 'on' : 'project' == headerSelectName}"
           @click.stop="changeheaderName('project')" v-if="menuObjShow.myProject">
        <router-link :to="{'path':'/'}" @mouseover.native="proArrUpdate()">我的项目</router-link>
        <div class="header-projects">
          <ul class="clearfix">
            <li :class="{'on': projectId ===  item.projectId && proButton }" v-for="(item, index) in projectArr"
                @click.stop="selectProject(item)"
                :title="item.projectName">
              <div class="project-icon">
                <svg class="icon" aria-hidden="true" :class="item.icon">
                  <use :href="sidebarIco[item.icon]"></use>
                </svg>
              </div>
              <div class="project-font" v-text="item.projectName" :title="item.projectName"></div>
            </li>
            <li @click="viewAllProject" :class="{'on': allButton}">
              <div class="project-icon">
                <svg class="icon auto" aria-hidden="true">
                  <use xlink:href="#icon-suoyouxiangmu"></use>
                </svg>
              </div>
              <div class="project-font">查看所有项目</div>
            </li>
            <li @click="buildProject" :class="{'on': showDialog}" v-show="menuIsBool(menuButtonArr, '新建项目')">
              <div class="project-icon">
                <svg class="icon auto" aria-hidden="true">
                  <use xlink:href="#icon-zengjia"></use>
                </svg>
              </div>
              <div class="project-font">新建项目</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-item" :class="{ 'on' : 'financialManagementNew' == headerSelectName}"
           @click.stop="changeheaderName('financialManagementNew')"
           v-if="menuObjShow.newFinancial && menuObjShow.url.length>0">
        <el-popover
          placement="bottom"
          width="100"
          v-model="financialPopover"
          trigger="hover">
          <ul class="ul-box">
            <!--<li class="list">
              <router-link :to="{path:item.link}" :class="[financialStyFn]">{{item.names}}
              </router-link>
            </li>-->
            <li class="list" v-if="financialAShow('/financialM/incomePage')" @click="financialPopover=false">
              <router-link :to="{path:'/financialM/incomePage'}" :class="[financialStyFn == 'A'?'link-a':'']">收入分配列表
              </router-link>
            </li>
            <li class="list" v-if="financialAShow('/financialM/sharePage')" @click="financialPopover=false">
              <router-link :to="{path:'/financialM/sharePage'}" :class="[financialStyFn == 'B'?'link-a':'']">分配规则管理
              </router-link>
            </li>
          </ul>
          <a slot="reference">财务管理(新)</a>
        </el-popover>
        <div class="header-projects" style="width:400px;">
        </div>
      </div>


      <div class="tab-item"
           :class="{ 'on' : 'financialManagement' == headerSelectName}"
           @click.stop="changeheaderName('financialManagement'),activePage(3)"
           v-if="menuObjShow.oldFinancial">
        <a>财务管理</a>
        <!-- <div class="header-projects" style="width:400px;"></div>-->
      </div>

      <div class="tab-item"
           :class="{ 'on' : 'organizational' == headerSelectName}"
           @click.stop="changeheaderName('organizational'),activePage(5)"
           v-if="menuObjShow.company"><!--:to="{path: activePage('5')}"-->
        <a>公司管理</a>
        <!--<div class="header-projects" style="width:400px;">-->
      </div>

      <div class="tab-item" :class="{ 'on' : 'system' == headerSelectName}"
           @click.stop="changeheaderName('system')"
           v-if="menuObjShow.system">
        <router-link :to="{path:'/system'}">系统管理</router-link>
        <!--<div class="header-projects" style="width:400px;">-->
      </div>
    </div>


    <div class="header-right">
      <div class="user-avator">
        <img :src="userImg || fimgImg">
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click">
          <span class="el-dropdown-link">
           <span class="ellipsis name-text" :title="userName">{{userName}}</span>  <i class="ionfont icon-xiala" style="position: relative;top: 2px;font-size:18px;"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a @click="logOut" style="text-align: left;">
              <el-dropdown-item>注销</el-dropdown-item>
            </a>
            <a @click="backRegister">
              <el-dropdown-item>切换</el-dropdown-item>
            </a>
            <a @click="personalCenter">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </a>
            <router-link :to="{path:'/function/functionList'}" v-if="menuObjShow.systemDev">
              <el-dropdown-item>后台资源管理</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- </div>-->
    </div>



  </header>
</template>

<style scoped>
  .marginLeft {
    padding-left: 6px;
  }

  .el-dropdown-menu__item {
    text-align: left !;
  }

  .collapse-min {
    transform: translate(-224px, 0);
  }
</style>
<script>
  import bus from '../../../assets/js/bus'

  export default {
    components: {},
    props: {
      isSidebar: Boolean,
      menuObjShow: Object,
      userName: String,
      userImg: String,
      treeArr: Array
    },
    data() {
      return {
        financialPopover: false,
        sidebarIco: {
          shopping: '#icon-gerendai',
          auto: '#icon-chedai',
          house: '#icon-fangdai'
        },
        logoX: require('../../../assets/img/global/logo2.png'),
        collapse: false,
        fullscreen: false,
        message: 0,

        isLogOutShow: false,
        projectArr: [],
        test: '',

        // 点击财政管理的状态
        financialClassI: false,
        financialClassS: false,
        fimgImg: require('assets/img/global/u21526.png'),
        // 新建项目
        showDialog: false,
        financialClass: '',
      }
    },
    watch: {
      menuObjShow(newV) {
        this.menuObjShow = newV
      }
    },
    computed: {
      // 我的项目下的项目on样式
      proButton() {
        let systemName = this.$route.meta.systemName === 'project' ? true : false
        let path = this.$route.path === '/projectIndex' ? false : true
        if (systemName && path) {
          return true
        } else {
          return false
        }
      },
      projectId() {
        return this.$store.state.projectId
      },
      // tabs，活动是的标识
      headerSelectName() {
        return this.$route.meta.systemName
      },
      // 新建项目的显示跟隐藏
      getProjectMenuShow() {
        return this.$store.state.projectMenuShow
      },
      financialStyFn() {
        // 收入分配列表
        let incomePage = '/financialM/incomePage'
        let incomeDetails = '/financialM/incomePage/incomeDetails'
        //  分配规则管理
        let sharePage = '/financialM/sharePage'
        let shareDetails = '/financialM/sharePage/shareDetails'
        let path = this.$route.path
        if (path === incomePage || path === incomeDetails) {

          return 'A'
        } else if (path === sharePage || path === shareDetails) {
          return 'B'
        } else {
          return false
        }
      },
      // 查看所有按钮的 on
      allButton() {
        if (this.$route.path === '/projectIndex') {
          return true
        } else {
          return false
        }
      },
      // 新增按钮 on
      addButton() {
        if (this.$route.path === '/projectIndex') {
          return true
        } else {
          return false
        }
      },
      menuButtonArr() {
        return this.$store.state.menuButtonArr
      }
    },
    mounted() {
      let self = this
      self.getDate()
    },
    methods: {
      activePage(flag) {
        let treeArr = this.treeArr
        let pageDetails = []
        for (let x in treeArr) {
          if (treeArr[x].pageMenu === flag) {
            pageDetails = treeArr[x].details
            break
          }
        }
        if (pageDetails && pageDetails.length > 0) {
          for (let x in pageDetails) {
            if (pageDetails[x].link) {
              this.$router.push({path: pageDetails[x].link})
              break
            }
          }
        }
      },
      financialAShow(url) {
        let list = this.menuObjShow.url
        if (!list || list.length === 0) return false
        for (let item in list) {
          if (url === list[item].link) {
            return true
          }
        }
      },
      // 侧边栏折叠 collapse侧边栏的展开跟缩小  collapse=true为展开 this.isSidebar === true 表示有左边测'
      collapseChage() {
        if (this.isSidebar === true) {
          this.collapse = !this.collapse
          bus.$emit('collapse', this.collapse)
        }
      },
      selectProject(arr) {  // 选择项目
        let self = this
        localStorage.setItem('poolToStr', arr.poolTo)
        localStorage.setItem('projectId', arr.projectId)
        localStorage.setItem('projectName', arr.projectName)
        localStorage.setItem('projectType', arr.projectType)
        localStorage.setItem('dataInterType', arr.dataInterType)       // 入池数据来源

        self.$store.commit('projectId_change', arr.projectId)
        self.$store.commit('projectName_change', arr.projectName)
        self.$store.commit('projectType_change', arr.projectType)
        self.$store.commit('dataInterType_change', arr.dataInterType)  // 入池数据来源,用于隐藏资产合同，初始还款计划
        self.$store.commit('poolToStr_change', arr.poolTo)

        localStorage.setItem('menuIndex', '')
        localStorage.setItem('submenuIndex', '')
        self.$router.push({path: '/overview/baseInfo?projectId=' + arr.projectId})
        self.$store.commit('menuFlag_change', true)
      //  self.$emit('getLeftTree', arr.projectId)
       // self.$parent.getLeftTree()
      },

      changeheaderName(str) { // 点击头部改变 点击ABS项目的时候’project‘，都是true
        this.collapse = false
        bus.$emit('collapse', this.collapse)
      },

      viewAllProject() { // 查看所有
        this.changeheaderName('project')
        this.$router.push({path: '/projectIndex'})
        if (this.$route.path === '/projectIndex') {
          location.reload()
        }
      },
      buildProject() {  // 新建
        this.showDialog = true
      },
      getDate() {
        let self = this
        let params = {
          pageNum: 1,
          pageSize: 10
        }
        let url = '/project/getProjectList.do'
        self.ajaxDate('POST', absContext + url, params, function (result) {
          let data = result.page.list
          for (let n in data) {
            if (data[n].projectType === 'PERSONAL_CONSUME') {
              data[n].icon = 'shopping'
            } else if (data[n].projectType === 'CAR_MORTGAGE') {
              data[n].icon = 'auto'
            } else {
              data[n].icon = 'house'
            }
          }
          self.projectArr = data
        })
      },
      logOut() {  // 登出
        $.ajax({
          url: absContext + '/loginout.do',
          success: function (result) {
            location.href = result.loginoutUrl
          }
        })
      },
      // 切换
      backRegister() {
        this.backLogin('/abs/app/index.html')
      },
      proArrUpdate() {
        if (this.$store.state.projectUpdate) {
          this.getDate()
          this.$store.commit('projectUpdate_change', false)
        }
      },
      // 取消新建项目
      closeDialogFn() {
        this.showDialog = false
      },
      // 个人中心
      personalCenter() {
        this.$router.push({path: '/overview/personalCenter'})
      }
    }
  }
</script>

