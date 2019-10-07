const overview = '/overview'                   // 项目概况
const assertPackage = '/assertPackage'         // 资产包管理
const assertPool = '/assertPool'               // 资产池管理
const durationManage = '/durationManage'
const financialM = '/financialM'
const organizational = '/organizational'
const system = '/system'
// 新财务管理
const financialManagement = '/financialManagement'
const durationManagement = '/durationManagement'
//后台资源管理
const functionManagement = '/function'
export const data = {
  // 项目概况
  baseInfo: [{name: '项目基本信息', path: overview + '/baseInfo'}],
  setProject: [{name: '项目设置', path: '/project/set'}],
  dataImportHistory: [{name: '历史数据上传', path: overview + '/dataImportHistory'}],
  dataImportHistoryDataImport: [
    {name: '历史数据上传', path: overview + '/dataImportHistory'},
    {name: '历史数据概况', path: overview + '/dataImportHistory/dataImport'}
  ],
  dataEvaluate: [{name: '历史数据评估', path: overview + '/dataEvaluate'}],
  personalCenter: [{name: '个人中心', path: overview + '/personalCenter'}],
  setProjectUserDetails: [
    {name: '项目设置', path: '/project/set'},
    {name: '项目成员信息', path: overview + '/setProject/userDetails'}
  ],

  // 资产包管理
  packageList: [
    {name: '资产包列表', path: assertPackage + '/packageList'}
  ],
  packageListPackageDetails: [
    {name: '资产包列表', path: assertPackage + '/packageList'},
    {name: '资产包概况', path: assertPackage + '/packageList/packageDetails' + localStorage.getItem('details')}
  ],
  packagePropertyDetail: [
    {name: '资产包列表', path: assertPackage + '/packageList'},
    {name: '资产包概况', path: assertPackage + '/packageList/packageDetails' + localStorage.getItem('details')},
    {
      name: '资产详情',
      path: assertPackage + '/packageList/packageDetails/packagePropertyDetail' + localStorage.getItem('cofig')
    }
  ],
  packageBuild: [
    {name: '资产包创建', path: assertPackage + '/packageBuild'}
  ],

  // 资产池管理
  assertImport: [
    {name: '资产合同信息导入', path: assertPool + '/assertImport'}
  ],
  assertImportAssertImportConfig: [
    {name: '资产合同信息导入', path: assertPool + '/assertImport'},
    {name: '资产合同导入数据概况', path: assertPool + '/assertImport/assertImportConfig'}
  ],
  browsingMaintenance: [
    {name: '基本资产列表', path: assertPool + '/browsingMaintenance'}
  ],
  imageData: [
    {name: '影像材料信息', path: assertPool + '/imageData'}
  ],
  browsingMaintenanceAssertConfig: [
    {name: '基本资产列表', path: assertPool + '/browsingMaintenance'},
    {name: '资产详情', path: assertPool + '/browsingMaintenance/assertConfig'}
  ],
  baseAnalysis: [
    {name: '资产池概况', path: assertPool + '/baseAnalysis'}
  ],
  repaymentPlanImport: [
    {name: '初始还款计划导入', path: assertPool + '/repaymentPlanImport'}
  ],
  repaymentPlanImportRepaymentPlanConfig: [
    {name: '初始还款计划导入', path: assertPool + '/repaymentPlanImport'},
    {name: '数据导入概况', path: assertPool + '/repaymentPlanImport/repaymentPlanConfig'}
  ],
  buyBackList: [
    {name: '资产回购列表', path: assertPool + '/buyBackList'}
  ],
  buyBackListAdd: [
    {name: '资产回购列表', path: assertPool + '/buyBackList'},
    {name: '添加资产回购列表', path: assertPool + '/buyBackList/addBuyBack'}
  ],

  // 产品设计
  cashList: [
    {name: '产品方案列表', path: durationManage + '/newCashList'}
  ],
  cashCreate: [
    {name: '产品方案列表', path: durationManage + '/newCashList'},
    {name: '产品设计步骤', path: durationManage + '/newCashCreate'}
  ],
  copyCashList: [
    {name: '产品方案列表', path: durationManage + '/newCashList'},
    {name: '复制产品方案', path: durationManage + '/copyCashList'}
  ],
  // 系统配置
  user: [
    {name: '用户管理', path: system + '/user'}
  ],
  userDetails: [
    {name: '用户管理', path: system + '/user'},
    {name: '用户详情', path: system + '/user/details'}
  ],
  management: [
    {name: '公司管理', path: system + '/management'}
  ],
  managementDetails: [
    {name: '公司管理', path: system + '/management'},
    {name: '公司详情', path: system + '/management/details'}
  ],
  functionList: [
    {name: '功能列表', path: functionManagement + '/functionList'}
  ],
  functionAddResource: [
    {name: '添加资源', path: functionManagement + '/addResource'}
  ],
  // 财务管理
  incomeDistribution: [
    {name: '收入分配管理', path: financialManagement + '/incomeDistribution'}
  ],
  benefitDetails: [
    {name: '收入分配管理', path: financialManagement + '/incomeDistribution'},
    {name: '收入分配详情', path: financialManagement + '/incomeDistribution/benefitDetails'}
  ],
  shareProfitManage: [
    {name: '分润项目管理', path: financialManagement + '/shareProfitManage'}
  ],
  profitManagement: [
    {name: '分润项目管理', path: financialManagement + '/shareProfitManage'},
    {name: '分润查看', path: financialManagement + '/shareProfitManage/profitManagement'}
  ],

  // 新财务管理
  incomePage: [
    {name: '收入分配列表', path: financialM + '/incomePage'}
  ],
  incomeDetails: [
    {name: '收入分配列表', path: financialM + '/incomePage'},
    {name: '收入分配详情', path: financialM + '/incomePage/incomeDetails'}
  ],
  sharePage: [
    {name: '分配规则管理', path: financialM + '/sharePage'}
  ],
  shareDetails: [
    {name: '分配规则管理', path: financialM + '/sharePage'},
    {name: '分配规则详情', path: financialM + '/sharePage/shareDetails'}
  ],
  // 存续期管理
  durationList: [
    {name: '存续期产品列表', path: durationManagement + '/durationList'}
  ],
  // 风控规则管理
  riskRuleManagement: [
    {name: '风控规则管理', path: durationManagement + '/riskRuleManagement'}
  ],
  // 新的资产回收管理
  recoverManagement: [
    {name: '资产回收管理', path: durationManagement + '/recoverManagement'}
  ],
  // 新的异常资产管理
  AbnormaAsset: [
    {name: '异常资产管理', path: durationManagement + '/AbnormaAsset'}
  ],
  // 新的资产回收转付
  recoveryPayment: [
    {name: '资产回收转付', path: durationManagement + '/recoveryPayment'}
  ],
  // 新的资产回收转付详情
  recyclingDetails: [
    {name: '资产回收转付', path: durationManagement + '/recoveryPayment'},
    {name: '资产回收转付详情', path: durationManagement + '/recyclingDetails'}
  ],

  // 风控指标监控
  riskDataMonitoring: [
    {name: '存续期监控台', path: durationManagement + '/riskDataMonitoring'}
  ],
  // 收益分配管理
  incomeDistributionNew: [
    {name: '收益分配管理', path: durationManagement + '/incomeDistribution'}
  ],
  // 收益分配管理模板
  distributionReport: [
    {name: '收益分配管理', path: durationManagement + '/incomeDistribution'},
    {name: '设置报告模板', path: durationManagement + '/incomeDistribution/distributionReport'}
  ],
  // 收益分配管理详情
  incomeDistriDetails: [
    {name: '收益分配管理', path: durationManagement + '/incomeDistribution'},
    {name: '分配核算详情', path: durationManagement + 'distributionReportPreview/incomeDistriDetails'}
  ],
  // 收益分配管理报告预览
  distributionReportPreview: [
    {name: '收益分配管理', path: durationManagement + '/incomeDistribution'},
    {name: '设置报告模板', path: durationManagement + '/incomeDistribution/distributionReport'},
    {name: '报告模板预览', path: durationManagement + '/incomeDistribution/distributionReportPreview'}
  ],
  // 发送邮件
  sendMail: [
    {name: '收益分配管理', path: durationManagement + '/incomeDistribution'},
    {name: '邮件详情', path: durationManagement + '/sendMail'}
  ],
  // 预览邮件
  previewMail: [
    {name: '收益分配管理', path: durationManagement + '/incomeDistribution'},
    {name: '邮件详情', path: durationManagement + '/previewMail'}
  ],
  // 产品信息管理
  accountBalanceAdjustment: [
    {name: '产品信息管理', path: durationManagement + '/accountBalanceAdjustment'}
  ],

  report: [
    {name: '服务报告管理', path: durationManagement + '/report'}
  ],
  newReport: [
    {name: '新服务报告管理', path: durationManagement + '/newReport'}
  ],
  plan: [
    {name: '服务报告管理', path: durationManagement + '/report'},
    {name: '新增报告', path: durationManagement + '/report/plan'}
  ],
  allotSet: [
    {name: '服务报告管理', path: durationManagement + '/report'},
    {name: '报告设置', path: durationManagement + '/report/allotSet'}
  ],
  allotView: [
    {name: '服务报告管理', path: durationManagement + '/report'},
    {name: '报告预览', path: durationManagement + '/report/allotView'}
  ],
  fixedBag: [
    {name: '固定包管理', path: durationManagement + '/fixedBag'}
  ],
  serviceReport: [
    {name: '报告列表管理', path: durationManagement + '/service-report-list'}
  ],
  // 公司管理
  information: [
    {name: '公司信息', path: organizational + '/information'}
  ],
  member: [
    {name: '成员管理', path: organizational + '/member'}
  ],
  memberUserDetails: [
    {name: '成员管理', path: organizational + '/member'},
    {name: '成员详情', path: organizational + '/member/userDetails'}
  ],
  jurisdiction: [
    {name: '权限管理', path: organizational + '/jurisdiction'}
  ],

}
