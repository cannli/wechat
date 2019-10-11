import Vue from 'vue'
import Router from 'vue-router'
import {data} from './breadcrumb.js'
// import store from '../store/index.js'

Vue.use(Router)
const home = resolve => require(['../components/container/home.vue'], resolve)
// 项目概况
// const dataEvaluate = resolve => require(['../components/pages/overview/data_evaluate.vue'], resolve)
// const dataImportHistoryDataImport = resolve => require(['../components/pages/overview/data_import.vue'], resolve)
// const dataImportHistory = resolve => require(['../components/pages/overview/data_import_history.vue'], resolve)
// // 资产包管理
//
// const packageBuild = resolve => require(['../components/pages/assertPackage/package_build.vue'], resolve)
// const packageEdit = resolve => require(['../components/pages/assertPackage/package_edit.vue'], resolve)
// const packageListPackageDetails = resolve => require(['../components/pages/assertPackage/package_details.vue'], resolve)
// const packageList = resolve => require(['../components/pages/assertPackage/package_list.vue'], resolve)
// const packageListPackPropertyDetail = resolve => require(['../components/pages/assertPackage/details/package_property_detail.vue'], resolve)
//
// // 资产池管理
// const assertImport = resolve => require(['../components/pages/assertPool/assert_import.vue'], resolve)
// const baseAnalysis = resolve => require(['../components/pages/assertPool/base_analysis.vue'], resolve)
// const browsingMaintenance = resolve => require(['../components/pages/assertPool/browsing_maintenance .vue'], resolve)
// const browsingMaintenanceAssertConfig = resolve => require(['../components/pages/assertPool/assert_cofig.vue'], resolve)
// const assertImportAssertImportConfig = resolve => require(['../components/pages/assertPool/assert_import_config.vue'], resolve)
// const repaymentPlanImport = resolve => require(['../components/pages/assertPool/repayment_plan_import.vue'], resolve)
// const repaymentPlanConfig = resolve => require(['../components/pages/assertPool/repayment_plan_config.vue'], resolve)
// const imageData = resolve => require(['../components/pages/assertPool/imageData/index.vue'], resolve)
//
// // 资产回购列表
// const buyBackList = resolve => require(['../components/pages/assertPool/buyBackList.vue'], resolve)
// // 添加回购列表
// const addBuyBack = resolve => require(['../components/pages/assertPool/buyBack/addBuyBack.vue'], resolve)
//
// const cashList = resolve => require(['../components/pages/durationManage/cash_list.vue'], resolve)  // 旧版
// const newCashList = resolve => require(['../components/pages/durationManage/cashList/index.vue'], resolve) // 新版
// const copyCashList = resolve => require(['../components/pages/durationManage/cashList/copyProductPlan/index.vue'], resolve) // 复制产品方案
//
// const cashCreate = resolve => require(['../components/pages/durationManage/cash_create.vue'], resolve) // 旧版
// const newCashCreate = resolve => require(['../components/pages/durationManage/cashCreate/index.vue'], resolve) // 新版
// // 产品存续期
// const durationList = resolve => require(['../components/pages/durationManagement/durationList.vue'], resolve)
// const durationListCashConfig = resolve => require(['../components/pages/durationManage/cash_config.vue'], resolve)
// const durationListCashList = resolve => require(['../components/pages/durationManage/cash_import_list.vue'], resolve)
// const durationListCashConfigCx = resolve => require(['../components/pages/durationManage/cash_import_config.vue'], resolve)
//
// // 新的存续期
// const recoverManagement = resolve => require(['../components/pages/newDuration/recoverManagement.vue'], resolve)
// const AbnormaAsset = resolve => require(['../components/pages/newDuration/AbnormaAsset.vue'], resolve)
// const recoveryPayment = resolve => require(['../components/pages/newDuration/recoveryPayment.vue'], resolve)
// // 资产回收转付详情
// const recyclingDetails = resolve => require(['../components/pages/newDuration/recyclingDetails/recyclingDetails.vue'], resolve)
// const emptyHtml = resolve => require(['../components/pages/newDuration/emptyHtml/emptyHtml.vue'], resolve)
// const emptyPage = resolve => require(['../components/pages/newDuration/emptyHtml/emptyPage.vue'], resolve)
// // 分配核算详情
// const incomeDistriDetails = resolve => require(['../components/pages/newDuration/incomeDistribution/incomeDistriDetails.vue'], resolve)
// const sendMail = resolve => require(['../components/pages/newDuration/incomeDistribution/sendMail/sendMail.vue'], resolve)
// const previewMail = resolve => require(['../components/pages/newDuration/incomeDistribution/sendMail/previewMail.vue'], resolve)
// // 风控规则管理
// const riskRuleManagement = resolve => require(['../components/pages/newDuration/riskRuleManagement/index.vue'], resolve)
// // 风控指标监控
// const riskDataMonitoring = resolve => require(['../components/pages/newDuration/riskDataMonitoring/index.vue'], resolve)
// // 收益分配管理
// const incomeDistributionNew = resolve => require(['../components/pages/newDuration/incomeDistribution/index.vue'], resolve)
// // 收益分配管理的报告
// const distributionReport = resolve => require(['../components/pages/newDuration/incomeDistribution/report/distributionAccountingReport.vue'], resolve)
// // 收益分配管理模板预览
// const distributionReportPreview = resolve => require(['../components/pages/newDuration/incomeDistribution/report/preview/distributionPreview.vue'], resolve)
// // 产品信息管理
// const accountBalanceAdjustment = resolve => require(['../components/pages/newDuration/accountBalanceAdjustment/index.vue'], resolve)
//
// // 资产服务报告
// const report = resolve => require(['../components/pages/report/index.vue'], resolve)
// const newReport = resolve => require(['../components/pages/report/new-servie-report.vue'], resolve)
// const plan = resolve => require(['../components/pages/report/plan/index.vue'], resolve)
// // 固定包管理
// const fixedPackageManage = resolve => require(['../components/pages/assertPackage/fixed_package_manage.vue'], resolve)
// // 分配核算报告设置
// const planAllotSet = resolve => require(['../components/pages/report/allot/set.vue'], resolve)
// // 分配核算报告预览
// const planAllotView = resolve => require(['../components/pages/report/allot/preview.vue'], resolve)
// /* 资产服务报告 */
// const productImportParticulars = resolve => require(['../components/pages/durationManagement/propertyReport/productImportParticulars.vue'], resolve)
// const productPropertyManage = resolve => require(['../components/pages/durationManagement/propertyReport/productPropertyManage.vue'], resolve)
// // 服务报告管理
// const serviceReportList = resolve => require(['../components/pages/report/service-report-list.vue'], resolve)
// // 存续期增量模块
// const productImportParticularsAdd = resolve => require(['../components/pages/durationManagement/incrementModule/productImportParticularsAdd.vue'], resolve)
// // 存续期里面的产品详情里面的服务报告
// const productPropertyManageAdd = resolve => require(['../components/pages/durationManagement/incrementModule/bash/productPropertyManage.vue'], resolve)
// // 回款数据导入
// const productImportData = resolve => require(['../components/pages/durationManagement/propertyReport/productImportData.vue'], resolve)
// const porductImportWizard = resolve => require(['../components/pages/durationManagement/propertyReport/porductImportWizard.vue'], resolve)
//
// // 分润
// const shareProfitManage = resolve => require(['../components/pages/financialManagement/shareProfitManage.vue'], resolve)
// const incomeDistribution = resolve => require(['../components/pages/financialManagement/incomeDistribution.vue'], resolve)
// const benefitDetails = resolve => require(['../components/pages/financialManagement/benefitDetails.vue'], resolve)
// const profitManagement = resolve => require(['../components/pages/financialManagement/profitManagement.vue'], resolve)
//
// // 新财务管理
// const incomePage = resolve => require(['../components/pages/newFinancial/income/index.vue'], resolve)
// const incomeDetails = resolve => require(['../components/pages/newFinancial/income/details/iStatement.vue'], resolve)
//
// const sharePage = resolve => require(['../components/pages/newFinancial/shareProfit/index.vue'], resolve)
// const shareDetails = resolve => require(['../components/pages/newFinancial/shareProfit/details/shareSet.vue'], resolve)
//
// // 404page
// const errorInfo = resolve => require(['../components/pages/errorinfo/error404.vue'], resolve)
//
// const login = resolve => require(['../components/pages/register/login/home.vue'], resolve)
// const newRegister = resolve => require(['../components/pages/register/login/newRegister.vue'], resolve)
// const waitReview = resolve => require(['../components/pages/register/login/waitReview.vue'], resolve)
// const invitation = resolve => require(['../components/pages/register/login/invitation.vue'], resolve)
// const noInvitation = resolve => require(['../components/pages/register/login/noInvitation.vue'], resolve)
//
// // 我的项目
const myProject = resolve => require(['@/components/pages/index/index.vue'], resolve)
// // 项目设置
// const setProject = resolve => require(['@/components/pages/index/setProject/index.vue'], resolve)
// // 项目基本信息
// const newBaseInfo = resolve => require(['@/components/pages/overview/baseInfo/index.vue'], resolve)
// // 个人中心
// const personalCenter = resolve => require(['@/components/pages/index/personalCenter/index.vue'], resolve)
//
// // 公司权限管理
// // 公司信息
// const information = resolve => require(['@/components/pages/accessControl/companyManagement/information/index.vue'], resolve)
// // 公司权限管理
// const jurisdictionManagement = resolve => require(['@/components/pages/accessControl/companyManagement/jurisdictionManagement/index.vue'], resolve)
// // 公司成员管理
// const memberManagement = resolve => require(['../components/pages/accessControl/companyManagement/memberManagement/index.vue'], resolve)
// // 公司成员管理详情 系统管理-用户管理-详情 公用 @
// const userDetails = resolve => require(['@/components/pages/accessControl/companyManagement/memberManagement/subpage/userDetails.vue'], resolve)
//
// /*
//     系统管理
// */
// // 系统管理-公司管理
// const sysProjectManagement = resolve => require(['@/components/pages/accessControl/systemManagement/organizationManagement/index.vue'], resolve)
// // 系统管理-公司管理-机构详情
// const organizationDetails = resolve => require(['@/components/pages/accessControl/systemManagement/organizationManagement/organizationDetails/index.vue'], resolve)
// // 系统管理-用户管理
// const sysUserM = resolve => require(['@/components/pages/accessControl/systemManagement/userManagement/index.vue'], resolve)
// // 权限功能点
//
// const functionList = resolve => require(['@/components/pages/accessControl/privilegeControll/functionList/index.vue'], resolve)
// // 权限功能点加资源
// const addResource = resolve => require(['@/components/pages/accessControl/privilegeControll/addResource/index.vue'], resolve)
//
// /*
// *  情景分析
// * */
// const scenario = resolve => require(['@/components/pages/scenarioAnalysis/scenario/index.vue'])

/*
* breadcrumbSpecial: 同一个页面有多种情况，为了使breadcrumb动态显示,做的蠢事, 后面要舍弃
* breadcrumb：为true时不显示面包屑
* nameHide：控制sidebar头部的名字跟图片的显示情况，为true时不显示
* systemName : 显示哪个大菜单，project：我的项目，system：系统管理，financialManagement：财务管理，financialManagementNew：(新)财务管理,organizational:公司管理 noMenu: 没有菜单
* showSidebar: 为true时表示不显示侧边栏
* */
const routes = [

  // {
  //   path: '/login',
  //   component: login,
  //   name: 'new注册',
  //   children: [
  //     {path: '', redirect: 'newRegister'},
  //     {path: 'newRegister', component: newRegister, name: 'new注册'},
  //     {path: 'waitReview', component: waitReview, name: '等待邀请'},
  //     {path: 'invitation', component: invitation, name: '邀请'},
  //     {path: 'noInvitation', component: noInvitation, name: 'no邀请'}
  //   ]
  // },
  {
    path: '/',
    component: home,
    name: '首页',
    children: [
      {
        path: '',
        redirect: 'projectIndex'
      },
      {
        path: 'projectIndex',
        component: myProject,
        meta: {
          nameHide: true,
          breadcrumb: true,
          systemName: 'project',
          showSidebar: true
        }
      }
    ]
  },
  // {
  //   path: 'personalCenter',
  //   component: personalCenter,
  //   name: '个人中心',
  //   meta: {
  //     nameHide: true,
  //     //  breadcrumb: true,
  //     breadcrumbArr: data.personalCenter,
  //     systemName: 'project',
  //     showSidebar: true
  //   }
  // },
  // {
  //   path: '/scenario/',
  //   component: home,
  //   name: '情景分析',
  //   children: [
  //     {path: '', redirect: 'analysis'},
  //     {
  //       path: 'analysis',
  //       component: scenario,
  //       name: '情景分析',
  //       meta: {
  //         breadcrumbArr: data.baseInfo,
  //         systemName: 'project'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/project/',   // 项目概况
  //   component: home,
  //   name: '项目设置',
  //   children: [
  //     {path: '', redirect: 'baseInfo'},
  //     {
  //       path: 'set',
  //       component: setProject,
  //       name: '项目设置',
  //       meta: {
  //         hidden: true,
  //         breadcrumbArr: data.setProject,
  //         systemName: 'project'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/overview/',   // 项目概况
  //   component: home,
  //   name: '项目概况',
  //   children: [
  //     {path: '', redirect: 'baseInfo'},
  //     {
  //       path: 'baseInfo',
  //       component: newBaseInfo,
  //       name: '项目基本信息',
  //       meta: {
  //         breadcrumbArr: data.baseInfo,
  //         systemName: 'project',
  //       }
  //     },                                       // 项目基本信息
  //     {
  //       path: 'dataEvaluate',
  //       component: dataEvaluate,
  //       name: '历史数据评估',
  //       meta: {
  //         breadcrumbArr: data.dataEvaluate,
  //         systemName: 'project'
  //       }
  //     },                               // 历史数据评估
  //     {
  //       path: 'dataImportHistory/dataImport',
  //       component: dataImportHistoryDataImport,
  //       name: '历史数据概况',
  //       meta: {
  //         breadcrumbArr: data.dataImportHistoryDataImport,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'dataImportHistory',
  //       component: dataImportHistory,
  //       name: '历史数据上传',
  //       meta: {
  //         breadcrumbArr: data.dataImportHistory,
  //         systemName: 'project'
  //       }
  //       /*  beforeEnter: (to, from, next) => {
  //           if (from.path == '/overview/dataImportHistory/dataImport') {
  //
  //             alert(333333)
  //             next();
  //           } else {
  //             alert(from.path)
  //             next();
  //           }
  //         } */
  //     },
  //     {
  //       path: 'setProject/userDetails',
  //       component: userDetails,
  //       name: '用户详情',
  //       meta: {
  //         hidden: true,
  //         breadcrumbArr: data.setProjectUserDetails,
  //         systemName: 'project'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/assertPackage/',
  //   component: home,
  //   name: '资产包管理',
  //   children: [
  //     {
  //       path: 'packageBuild',
  //       component: packageBuild,
  //       name: '资产包创建',
  //       meta: {
  //         breadcrumbArr: data.packageBuild,
  //         systemName: 'project'
  //       }
  //     },                               // 资产包创建
  //     {
  //       path: 'packageList/packageDetails',
  //       component: packageListPackageDetails,
  //       name: '资产包概况',
  //       meta: {
  //         breadcrumbArr: data.packageListPackageDetails,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'packageList',
  //       component: packageList,
  //       name: '资产包列表',
  //       meta: {
  //         breadcrumbArr: data.packageList,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'packageList/packageDetails/packagePropertyDetail',
  //       component: packageListPackPropertyDetail,
  //       name: '资产详情',
  //       meta: {
  //         breadcrumbArr: data.packagePropertyDetail,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'packageList/packageDetails/packageEdit',
  //       component: packageEdit,
  //       name: '资产包编辑',
  //       meta: {
  //         breadcrumb: true,
  //         systemName: 'project'
  //       }
  //       // meta: {breadcrumbArr: data.packageEdit}
  //     }
  //
  //   ]
  // },
  // {
  //   path: '/assertPool/',
  //   component: home,
  //   name: '资产池管理',
  //   children: [
  //     // {path: '', redirect: 'assertImport'},
  //     {
  //       path: 'assertImport',
  //       component: assertImport,
  //       name: '资产合同信息导入',
  //       meta: {
  //         breadcrumbArr: data.assertImport,
  //         systemName: 'project'
  //       }
  //     },                                        // 基本资产导入
  //     {
  //       path: 'baseAnalysis',
  //       component: baseAnalysis,
  //       name: '资产池概况',
  //       meta: {
  //         breadcrumbArr: data.baseAnalysis,
  //         systemName: 'project'
  //       }
  //     },                                        // 资产池概况
  //     {
  //       path: 'browsingMaintenance',
  //       component: browsingMaintenance,
  //       name: '基本资产列表',
  //       meta: {
  //         breadcrumbArr: data.browsingMaintenance,
  //         systemName: 'project'
  //       }
  //     },                          // 基本资产列表
  //     // {path: 'classifyStatistics', component: classifyStatistics},
  //     {
  //       path: 'browsingMaintenance/assertConfig',
  //       component: browsingMaintenanceAssertConfig,
  //       name: '资产详情',
  //       meta: {
  //         breadcrumbArr: data.browsingMaintenanceAssertConfig,
  //         systemName: 'project'
  //       }
  //     }, // 基本资产列表 => 资产详情
  //     {
  //       path: 'assertImport/assertImportConfig',
  //       component: assertImportAssertImportConfig,
  //       name: '资产合同导入数据概况',
  //       meta: {
  //         breadcrumbArr: data.assertImportAssertImportConfig,
  //         systemName: 'project'
  //       }
  //     },   // 基本资产导入 =》 数据概况
  //     {
  //       path: 'repaymentPlanImport',
  //       component: repaymentPlanImport,
  //       name: '初始还款计划导入',
  //       meta: {
  //         breadcrumbArr: data.repaymentPlanImport,
  //         systemName: 'project'
  //       }
  //     },                          // 还款计划导入
  //     {
  //       path: 'repaymentPlanImport/repaymentPlanConfig',
  //       component: repaymentPlanConfig,
  //       name: '数据导入概况',
  //       meta: {
  //         breadcrumbArr: data.repaymentPlanImportRepaymentPlanConfig,
  //         systemName: 'project'
  //       }
  //     },       // 还款计划导入的详情
  //     {
  //       path: 'buyBackList',
  //       component: buyBackList,
  //       name: '资产回购列表',
  //       meta: {
  //         breadcrumbArr: data.buyBackList,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'buyBackList/addBuyBack',
  //       component: addBuyBack,
  //       name: '添加资产回购列表',
  //       meta: {
  //         breadcrumbArr: data.buyBackListAdd,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'imageData',
  //       component: imageData,
  //       name: '影像材料信息',
  //       meta: {
  //         breadcrumbArr: data.imageData,
  //         systemName: 'project'
  //       }
  //     },
  //   ]
  // },
  // {
  //   path: '/durationManage/',
  //   component: home,
  //   name: '产品设计',
  //   children: [
  //     {
  //       path: 'cashList',
  //       component: cashList,
  //       name: '产品方案列表',
  //       meta: {
  //         breadcrumbArr: data.cashList,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'cashCreate',
  //       component: cashCreate,
  //       name: '创建产品方案',
  //       meta: {
  //         breadcrumbArr: data.cashCreate,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'newCashList',
  //       component: newCashList,
  //       name: '产品方案列表',
  //       meta: {
  //         breadcrumbArr: data.cashList,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'copyCashList',
  //       component: copyCashList,
  //       name: '产品方案列表',
  //       meta: {
  //         breadcrumbArr: data.copyCashList,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'newCashCreate',
  //       component: newCashCreate,
  //       name: '新创建产品方案',
  //       meta: {
  //         breadcrumbArr: data.cashCreate,
  //         systemName: 'project'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/durationManagement/',
  //   component: home,
  //   name: '存续期管理',
  //   children: [
  //     // {path: '', redirect: 'durationList'},
  //     {
  //       path: 'durationList',
  //       component: durationList,
  //       name: '存续期产品列表',
  //       meta: {
  //         breadcrumbArr: data.durationList,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'durationList/cashConfig',
  //       component: durationListCashConfig,
  //       meta: {
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'durationList/cashConfig/cashImportList',
  //       component: durationListCashList,
  //       meta: {
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'durationList/cashConfig/cashImportList/cashImportConfig',
  //       component: durationListCashConfigCx,
  //       meta: {
  //         systemName: 'project'
  //       }
  //     },
  //     /* 资产服务报告 */
  //     {
  //       path: 'durationList/productImportParticulars',
  //       component: productImportParticulars,
  //       name: '产品详情',
  //       meta: {
  //         breadcrumb: true,
  //         breadcrumbSpecial: true,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'durationList/productImportParticulars/productPropertyManage',
  //       component: productPropertyManage,
  //       name: '回收分配管理',
  //       meta: {
  //         breadcrumb: true,
  //         breadcrumbSpecial: true,
  //         systemName: 'project'
  //       }
  //     },
  //     // 存续期增量模块
  //     {
  //       path: 'durationList/productImportParticularsAdd',
  //       component: productImportParticularsAdd,
  //       name: '增量产品详情',
  //       meta: {
  //         breadcrumb: true,
  //         breadcrumbSpecial: true,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'durationList/productImportParticularsAdd/productPropertyManageAdd',
  //       component: productPropertyManageAdd,
  //       name: '增量分配情况',
  //       meta: {
  //         breadcrumb: true,
  //         breadcrumbSpecial: true,
  //         systemName: 'project'
  //       }
  //     },
  //     /* 回款数据导入 */
  //     {
  //       path: 'durationList/productImportData',
  //       component: productImportData,
  //       name: '回款数据上传记录',
  //       meta: {
  //         breadcrumb: true,
  //         breadcrumbSpecial: true,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'durationList/porductImportWizard',
  //       component: porductImportWizard,
  //       name: '回收分配管理向导',
  //       meta: {
  //         breadcrumb: true,
  //         breadcrumbSpecial: true,
  //         systemName: 'project'
  //       }
  //     },
  //
  //     // report服务报告管理
  //     {
  //       path: 'report',
  //       component: report,
  //       name: '服务报告管理',
  //       meta: {
  //         breadcrumbArr: data.report,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'newReport',
  //       component: newReport,
  //       name: '新服务报告管理',
  //       meta: {
  //         breadcrumbArr: data.newReport,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'report/plan',
  //       component: plan,
  //       name: '新增报告',
  //       meta: {
  //         breadcrumbArr: data.plan,
  //         systemName: 'project'
  //       }
  //     },
  //     // 进度 plan planAllotSet
  //     {
  //       path: 'report/allotSet',
  //       component: planAllotSet,
  //       name: '设置',
  //       meta: {
  //         breadcrumbArr: data.allotSet,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'report/allotView',
  //       component: planAllotView,
  //       name: '预览',
  //       meta: {
  //         breadcrumbArr: data.allotView,
  //         systemName: 'project'
  //       }
  //     },
  //     // 固定板
  //     {
  //       path: 'fixedBag',
  //       component: fixedPackageManage,
  //       name: '固定包管理',
  //       meta: {
  //         breadcrumbArr: data.fixedBag,
  //         systemName: 'project'
  //       }
  //     },
  //     // 服务报告管理列表
  //     {
  //       path: 'service-report-list',
  //       component: serviceReportList,
  //       name: '报告列表管理',
  //       meta: {
  //         breadcrumbArr: data.report,
  //         systemName: 'project'
  //       }
  //     },
  //     // 新的存续期
  //     {
  //       path: 'recoverManagement',
  //       component: recoverManagement,
  //       name: '资产回收管理',
  //       meta: {
  //         breadcrumbArr: data.recoverManagement,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'AbnormaAsset',
  //       component: AbnormaAsset,
  //       name: '异常资产管理',
  //       meta: {
  //         breadcrumbArr: data.AbnormaAsset,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'recoveryPayment',
  //       component: recoveryPayment,
  //       name: '资产回收转付',
  //       meta: {
  //         breadcrumbArr: data.recoveryPayment,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'recyclingDetails',
  //       component: recyclingDetails,
  //       name: '资产回收转付详情',
  //       meta: {
  //         breadcrumbArr: data.recyclingDetails,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'emptyHtml',
  //       component: emptyHtml,
  //       meta: {
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'emptyPage',
  //       component: emptyPage,
  //       meta: {
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'incomeDistriDetails',
  //       component: incomeDistriDetails,
  //       name: '分配核算详情',
  //       meta: {
  //         breadcrumbArr: data.incomeDistriDetails,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'sendMail',
  //       component: sendMail,
  //       name: '邮件详情',
  //       meta: {
  //         breadcrumbArr: data.sendMail,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'previewMail',
  //       component: previewMail,
  //       name: '邮件详情',
  //       meta: {
  //         breadcrumbArr: data.previewMail,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'riskRuleManagement',
  //       component: riskRuleManagement,
  //       name: '风控规则管理',
  //       meta: {
  //         breadcrumbArr: data.riskRuleManagement,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'riskDataMonitoring',
  //       component: riskDataMonitoring,
  //       name: '资产回收转付',
  //       meta: {
  //         breadcrumbArr: data.riskDataMonitoring,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'incomeDistribution',
  //       component: incomeDistributionNew,
  //       name: '收益分配管理',
  //       meta: {
  //         breadcrumbArr: data.incomeDistributionNew,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'incomeDistribution/distributionReport',
  //       component: distributionReport,
  //       name: '设置报告模板',
  //       meta: {
  //         breadcrumbArr: data.distributionReport,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'incomeDistribution/distributionReportPreview',
  //       component: distributionReportPreview,
  //       name: '报告模板预览',
  //       meta: {
  //         breadcrumbArr:
  //         data.distributionReportPreview,
  //         systemName: 'project'
  //       }
  //     },
  //     {
  //       path: 'accountBalanceAdjustment',
  //       component: accountBalanceAdjustment,
  //       name: '风控规则管理',
  //       meta: {
  //         breadcrumbArr: data.accountBalanceAdjustment,
  //         systemName: 'project'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/function/',
  //   component: home,
  //   name: '后台资源管理',
  //   children: [
  //     {path: '', redirect: 'functionList'},
  //     {
  //       path: 'functionList',
  //       component: functionList,
  //       name: '功能列表',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.functionList,
  //         systemName: 'systemDev'
  //       }
  //     },
  //     {
  //       path: 'addResource',
  //       component: addResource,
  //       name: '添加资源',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.functionAddResource,
  //         systemName: 'systemDev'
  //       }
  //     }]
  // },
  // {
  //   path: '/system/',
  //   component: home,
  //   name: '系统配置',
  //   children: [
  //     {path: '', redirect: 'management'},
  //     {
  //       path: 'management',
  //       component: sysProjectManagement,
  //       name: '公司管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.management,
  //         systemName: 'system'
  //       }
  //     },
  //     {
  //       path: 'mechanismList/details/:id',
  //       component: organizationDetails,
  //       name: '公司详情',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.managementDetails,
  //         systemName: 'system'
  //       }
  //     },
  //
  //     {
  //       path: 'user',
  //       component: sysUserM,
  //       name: '用户管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.user,
  //         systemName: 'system'
  //       }
  //     },
  //     // 机构详情
  //     {
  //       path: 'user/details',
  //       component: userDetails,
  //       name: '用户详情',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.userDetails,
  //         systemName: 'system'
  //       }
  //     }
  //   ]
  // },
  // // 公司管理
  // {
  //   path: '/organizational/',
  //   component: home,
  //   name: '公司管理',
  //   children: [
  //     {path: '', redirect: 'information'},
  //     {
  //       path: 'information',
  //       component: information,
  //       name: '公司信息',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.information,
  //         systemName: 'organizational'
  //       }
  //     },
  //     {
  //       path: 'member',
  //       component: memberManagement,
  //       name: '成员管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.member,
  //         systemName: 'organizational'
  //       }
  //     },
  //     {
  //       path: 'jurisdiction',
  //       component: jurisdictionManagement,
  //       name: '权限管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.jurisdiction,
  //         systemName: 'organizational'
  //       }
  //     },
  //     {
  //       path: 'member/userDetails',
  //       component: userDetails,
  //       name: '用户详情',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.memberUserDetails,
  //         systemName: 'organizational'
  //       }
  //     }
  //   ]
  // },
  // /* 分润 */
  // {
  //   path: '/financialManagement/',
  //   component: home,
  //   name: '财务管理',
  //   children: [
  //     {path: '', redirect: 'incomeDistribution'},
  //     {
  //       path: 'shareProfitManage',
  //       component: shareProfitManage,
  //       name: '分润项目管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.shareProfitManage,
  //         systemName: 'financialManagement'
  //       }
  //     },
  //     {
  //       path: 'incomeDistribution',
  //       component: incomeDistribution,
  //       name: '收入分配管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.incomeDistribution,
  //         systemName: 'financialManagement'
  //       }
  //     },
  //     {
  //       path: 'incomeDistribution/benefitDetails',
  //       name: '收入分配详情',
  //       component: benefitDetails,
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.benefitDetails,
  //         systemName: 'financialManagement'
  //       }
  //     },
  //     {
  //       path: 'shareProfitManage/profitManagement',
  //       name: '分润查看',
  //       component: profitManagement,
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.profitManagement,
  //         systemName: 'financialManagement'
  //       }
  //     }
  //   ]
  // },
  // /* 新财务分润 */
  // {
  //   path: '/financialM/',
  //   component: home,
  //   name: '财务管理',
  //   children: [
  //     {path: '', redirect: 'incomePage'},
  //     {
  //       path: 'sharePage',
  //       component: sharePage,
  //       name: '分配规则管理',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.sharePage,
  //         systemName: 'financialManagementNew',
  //         showSidebar: true
  //       }
  //     },
  //     {
  //       path: 'sharePage/shareDetails',
  //       component: shareDetails,
  //       name: '分配规则详情',
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.shareDetails,
  //         systemName: 'financialManagementNew',
  //         showSidebar: true
  //       }
  //     },
  //     {
  //       path: 'incomePage',
  //       name: '收入分配列表',
  //       component: incomePage,
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.incomePage,
  //         systemName: 'financialManagementNew',
  //         showSidebar: true
  //       }
  //     },
  //     {
  //       path: 'incomePage/incomeDetails',
  //       name: '收入分配详情',
  //       component: incomeDetails,
  //       meta: {
  //         nameHide: true,
  //         breadcrumb: false,
  //         breadcrumbArr: data.incomeDetails,
  //         systemName: 'financialManagementNew',
  //         showSidebar: true
  //       }
  //     }
  //   ]
  // },
  // // 404page
  // {path: '/errorinfo', name: 'error404', component: errorInfo},

]
// export default new Router({
const router = new Router({
  // mode: 'history',
  // hashbang: false,
  // history: true,
  // base: __dirname,
  // transitionOnLoad: true,
  routes,
  scrollBehavior: () => ({y: 0})
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    console.log(from.name, 999)
    from.name ? next({
      name: from.name
    }) : next('/errorinfo')
  } else {
    next() // 如果匹配到正确跳转
  }
})

router.onError((err) => {
  // const pattern = /Loading chunk (\d)+ failed/g
  // const isChunkLoadFailed = error.message.match(pattern)
  // const targetPath = router.history.pending.fullPath
  // if (isChunkLoadFailed) {
  //   router.replace(targetPath)
  // }

  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = err.message.match(pattern)
  if (isChunkLoadFailed) {
    let chunkBool = sessionStorage.getItem('chunkError')
    let nowTimes = Date.now()
    if (chunkBool === null || chunkBool && nowTimes - parseInt(chunkBool) > 20000) { // 路由跳转报错,href手动跳转
      sessionStorage.setItem('chunkError', 'reload')
      const targetPath = router.history.pending.fullPath
      window.location.href = window.location.origin + targetPath
    } else if (chunkBool === 'reload') { // 手动跳转后依然报错,强制刷新
      sessionStorage.setItem('chunkError', Date.now())
      window.location.reload(true)
    }
  }
})
export default router
