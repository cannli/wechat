<template>
  <div class="sidebar"><!--:defaultOpeneds="defaultOpeneds"  unique-opened   :default-active="$route.path" router-->
    <!-- <div>
       <h3>evtest0925</h3>
     </div>-->
    <el-menu class="sidebar-el-menu menu-box"
             collapse-transition
             unique-opened
             :collapse="collapse"
             background-color="#202938"
             :default-active="$route.path"
             text-color="#C8CFE0"
             :router="false"
             :active-text-color="activeTextColor"
             style="padding-top: 20px;">
      <template>
        <div class="sid-title ellipsis" v-show="!this.$route.meta.nameHide">
          <div class="project-icon">
            <svg class="icon" aria-hidden="true">
              <use :href="sidebarIcoTitle[projectIconStr]"></use>
            </svg>
          </div>
          <div class="text ellipsis a-mar-bot10" :title="projectName">{{projectName}}</div>
          <a @click="projectSetFn"
             v-if="projectSetShow"
             class="projectSet ellipsis"
             :class="[activeSet?'active-set':null, collapse?'collapse-set':null]">项目设置</a>
        </div>
        <template v-for="(item, x) in pathObj[this.$route.meta.systemName]" v-if="item.details">
          <el-submenu :index="item.names" :key="item.names" :class="{'submenu_active set-sub' : num1==x}">
            <template slot="title">
              <img src="../../../assets/img/global/icon/gongsi2.png" class="icon ico" v-if="item.pageMenu === 5"/>
              <svg class="icon ico" aria-hidden="true" v-else>
                <use :href="sidebarIco[item.routeKey]"></use>
              </svg>
              <span>{{ item.names }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.details"
                          :key="subItem.link"
                          :index="subItem.link"
                          @click.native="onRoutes($event,subItem.link,x,i)"
                          v-show="subItem.active!=false" class="menu-list"
                          :class="{'is-active set-item' : num1==x&&num2==i}">
              {{ subItem.names }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.x" :key="item.x">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>

    </el-menu>
  </div>
</template>

<script>
  import bus from '../../../assets/js/bus'
  import {mapState} from 'vuex'

  export default {
    components: {},
    props: {
      routeData: Array,
      projectSetShow: false
    },
    data() {
      return {
        activeSet: false,
        activeTextColor: '#00a2ff',
        defaultOpeneds: [
          '项目概况',
          '资产池管理',
          '资产包管理',
          '产品设计',
          '系统配置',
          '存续期管理',
          '财务管理'
        ],
        collapse: false,
        projectIconStr: '',
        sidebarIco: {
          overview: '#icon-xiangmugaikuo',
          assertPool: '#icon-zichanchi',
          assertPackage: '#icon-zichanbao',
          durationManage: '#icon-chanpinsheji',
          projectSystemIcon: 'el-icon-document',
          setupAllSet: 'el-icon-setting',
          durationManagement: '#icon-shezhi'
        },
        sidebarIcoTitle: {
          shopping: '#icon-gerendai',
          auto: '#icon-chedai',
          house: '#icon-fangdai'
        },
        // 如果数据来源是接口传输 ，type = 2的就不显示
        menus: [],
        systemMenus: [],
        financialManagement: [],
        // 公司管理
        organizationalObj: [],
        //
        num1: '',
        num2: '',
        pathObj: {},
        flagArr: []
      }
    },
    watch: {
      projectSetShow(newV) {
        this.projectSetShow = newV
      },
      $route: {
        handler(val) {
          if (val.path === '/project/set' || val.path === '/overview/setProject/userDetails') {
            this.num1 = null
            this.num2 = null
            localStorage.setItem('menuIndex', null)
            localStorage.setItem('submenuIndex', null)
            $('.set-sub').removeClass('submenu_active')
            $('.el-menu').children('set-item').removeClass('is-active')
            this.activeTextColor = 'rgb(200, 207, 224)'
            this.activeSet = true
            return
          }
          if (this.flagArr && this.flagArr.length > 0) {
            for (let x in this.flagArr) {
              if (this.flagArr[x].name === val.path) {
                this.num1 = this.flagArr[x].val[0]
                this.num2 = this.flagArr[x].val[1]
                this.activeTextColor = '#00a2ff'
                break
              }
            }
            this.activeSet = false
          }
        },
        deep: true,
        immediate: true
      },
      routeData(obj) {
        let self = this
        let result = obj
        self.pathObj = {}
        self.systemMenus = []
        self.menus = []
        self.financialManagement = []
        self.organizationalObj = []
        self.flagArr = []
        let systemDev = []
        if (result.length > 0) {
          for (let x in result) {
            if (parseInt(result[x].pageMenu) === 2) {
              self.systemMenus.push(result[x])
            } else if (parseInt(result[x].pageMenu) === 1) {
              self.menus.push(result[x])
            } else if (parseInt(result[x].pageMenu) === 3) { // systemDev
              self.financialManagement.push(result[x])
            } else if (parseInt(result[x].pageMenu) === 5) {
              self.organizationalObj.push(result[x])
            } else if (parseInt(result[x].pageMenu) === 8) {
              systemDev.push(result[x])
            }
          }
        }
        if (self.menus.length > 0) {
          for (let i in self.menus) {
            for (let y in self.menus[i].details) {
              if (self.dataInterType === 'INTERFACE') { // 接口传输
                if (self.menus[i].details[y].link === '/assertPool/assertImport' ||
                  self.menus[i].details[y].link === '/assertPool/repaymentPlanImport' ||
                  self.menus[i].details[y].link === '/overview/dataAddProject') {
                  self.menus[i].details[y].active = false
                }
                if (self.menus[i].details[y].link === '/assertPool/buyBackList') {
                  self.menus[i].details[y].active = true
                }
              } else {
                self.menus[i].details[y].active = true
                if (self.menus[i].details[y].link === '/overview/dataAddProject') {
                  self.menus[i].details[y].active = false
                }
                if (self.menus[i].details[y].link === '/assertPool/buyBackList') {
                  self.menus[i].details[y].active = false
                }
              }
//              if (self.menus[i].details[y].link === '/durationManage/cashCreate') {
//                self.menus[i].details[y].active = false
//              }
            }
          }
        }
        self.pathObj = {
          project: self.menus,
          system: self.systemMenus,
          financialManagement: self.financialManagement,
          organizational: self.organizationalObj,
          systemDev
        }
        let pathObj = self.pathObj
        for (let x in pathObj) {
          let pro = pathObj[x]
          for (let y in pro) {
            for (let z in pro[y].details) {
              self.flagArr.push({name: pro[y].details[z].link, val: [y, z]}) // 把所有link都放到数组
            }
          }
        }
        if (window.localStorage.getItem('submenuIndex')) {
          self.num1 = window.localStorage.getItem('menuIndex')
          self.num2 = window.localStorage.getItem('submenuIndex')
          return
        }
        self.num1 = ''
        self.num2 = ''
        if (self.flagArr && self.flagArr.length > 0) {
          for (let x in self.flagArr) {
            if (self.flagArr[x].name == self.$route.path) {
              self.num1 = self.flagArr[x].val[0]
              self.num2 = self.flagArr[x].val[1]
              break
            }
          }
        }
      },
      projectIcon() {
        if (this.projectIcon === 'PERSONAL_CONSUME') {
          this.projectIconStr = 'shopping'
        } else if (this.projectIcon === 'CAR_MORTGAGE') {
          this.projectIconStr = 'auto'
        } else {
          this.projectIconStr = 'house'
        }
      }
    },
    computed: {
      ...mapState({
        projectName: state => state.projectName,
        projectIcon: state => state.projectType, // !== 'PERSONAL_CONSUME' ? 'auto' : 'shopping',////产品说改成统一一样的
        dataInterType: state => state.dataInterType // INTERFACE
      })
    },
    created() {
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg
      })
    },
    methods: {
      projectSetFn() {
        this.$router.push({path: '/project/set'})
      },
      onRoutes(event, path, index, i) {
        $('.el-submenu__title').removeClass('submenu_active')
        $(event.target).parent().prev().addClass('submenu_active')
        this.num1 = index
        this.num2 = i
        window.localStorage.setItem('menuIndex', index)
        window.localStorage.setItem('submenuIndex', i)
        this.$router.push({path: path})
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .sidebar {
    display: block;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    z-index: 1000;
    max-height: 150%;
    overflow-y: auto;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 240px;
  }

  .sidebar > ul {
    height: 100%;
    box-sizing: border-box;
  }

  .el-submenu {
    background-color: rgb(32, 41, 56);
  }

  .menu-box {
    /* margin-top: -30px;*/
    background-color: rgba(245, 247, 250, 1);
    .sid-title {
      padding-bottom: 20px;
      text-align: center;
      border-bottom: solid 1px #666666;
      margin-bottom: 20px;
      .text {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        margin-top: 15px;
      }
      .project-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #4D5460;
        box-sizing: border-box;
        text-align: center;
        display: inline-block;
        .icon {
          width: 40px;
          height: 40px;
          margin-top: 10px;
        }
      }
    }
    .menu-list {
      //  &.is-active,
      &:hover {
        color: #58C1FE !important;
        background-color: #202938 !important;
      }
      /*&.is-active {*/
      /*color: #00a2ff !important;*/
      /*}*/
    }
    .el-submenu__title_set {
      background: #ff6633 !important;
      color: #ff6633 !important;
    }
    .el-submenu__title {
      padding-left: 50px !important;
      margin-top: 2px;
      margin-bottom: 2px;
      height: 50px;
      line-height: 50px;
      color: #363636;
      background-color: #fff;
      .text {
        margin-left: 10px;
      }
    }
    .el-menu-item {
      padding-left: 50px !important;
    }
  }

  .ico {
    width: 18px;
    height: 18px;
    font-size: 18px;
    opacity: 0.7;
    margin-right: 10px;
  }

  #scrollbarbox {
    width: 100%;
    height: calc(100% - 225px + 100px + 50px + 50px);
  }

  .projectSet {
    display: inline-block;
    margin-top: 5px;
    border: 1px solid #ffffff;
    border-radius: 2px;
    padding: 5px 10px;
    font-size: 12px;
    color: #fff;
  }

  .projectSet:hover {
    color: #00a2ff;
    border: 1px solid rgba(0, 162, 255, 1);
  }

  .active-set {
    color: #00a2ff;
    border: 1px solid rgba(0, 162, 255, 1);
  }
  .collapse-set{
    padding: 5px 4px;
  }
</style>
