(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["riskControl"],{"0198":function(n,t,s){},"04ca":function(n,t,s){n.exports=s.p+"img/img2.02cd4e3e.png"},3756:function(n,t,s){n.exports=s.p+"img/links.1c693f2d.png"},"48dd":function(n,t,s){n.exports=s.p+"img/icon3.79e445a8.png"},"58ff":function(n,t,s){n.exports=s.p+"img/img8.ed67a205.png"},"5e0c":function(n,t,s){n.exports=s.p+"img/img4.f64e1c56.png"},"64bc":function(n,t,s){"use strict";var a=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"link-box"},[s("div",{staticClass:"cont"},n._l(n.linkList,(function(t,a){return s("div",{key:a,staticClass:"item",class:{showHover:!n.showDecs},style:{width:n.cloumnWidth+"px",height:n.cloumnHight+"px"},on:{click:function(t){return n.openPage(a)}}},[s("img",{attrs:{src:t,alt:"案例介绍"}})])})),0),s("p",{staticClass:"desc",class:{active:n.showDecs}},[n._v("部分客户，排名不分先后")])])},o=[],i={name:"LinkByColumn",props:{cloumnWidth:{type:String,default:"294"},cloumnHight:{type:String,default:"108"},linkList:{type:Array,default:function(){return[]}},showDecs:{type:Boolean,default:!1}},data:function(){return{}},methods:{openPage:function(n){this.showDecs||this.$router.push({path:"/riskControl",query:{caseId:n}})}}},e=i,c=(s("6d0e"),s("2877")),p=Object(c["a"])(e,a,o,!1,null,"4252233a",null);t["a"]=p.exports},6635:function(n,t,s){"use strict";var a=s("0198"),o=s.n(a);o.a},"6d0e":function(n,t,s){"use strict";var a=s("82e6"),o=s.n(a);o.a},7128:function(n,t,s){n.exports=s.p+"img/img3.93892646.png"},"78d5":function(n,t,s){n.exports=s.p+"img/icon8.ecb82240.png"},"82e6":function(n,t,s){},8486:function(n,t,s){n.exports=s.p+"img/img1.becbaf31.png"},"8ca6":function(n,t,s){n.exports=s.p+"img/banner.fb23d47c.jpg"},9021:function(n,t,s){"use strict";s.r(t);var a=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("Banner",{attrs:{enName:"Rish control cases",cnName:"风控案例",introduction:"200+客户，覆盖央企、地方国企、上市公司等众多领域\\n涉及能源、交通、金融、建筑、钢铁、石油石化、电信等多个行业",bg:n.bannerBg}}),n._l(n.caseList,(function(n,t){return[s("CaseItem",{key:t,class:"bg-"+t%2,attrs:{id:"case"+t,postion:n.postion,icon:n.icon,name:n.name,companyIntro:n.companyIntro,projectIntro:n.projectIntro,imgUrl:n.imgUrl,imgWidth:n.style[0],imgHeight:n.style[1]}})]})),s("div",{staticClass:"parallel bg-2"},[s("div",{staticClass:"dividing-line2"}),s("h2",{staticClass:"title title-1"},[n._v("他们的共同选择")]),s("LinkByColumn",{attrs:{cloumnWidth:"1094",cloumnHight:"422",showDecs:!0,linkList:n.linkList}})],1)],2)},o=[],i=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("div",{class:"case-box "+n.postion},[s("div",{staticClass:"text"},[s("div",{staticClass:"company"},[s("p",{staticClass:"company-show"},[s("img",{staticClass:"icon",attrs:{src:n.icon,alt:""}}),s("span",{staticClass:"name"},[n._v(n._s(n.name))])]),s("p",{staticClass:"company-intro"},[n._v(n._s(n.companyIntro))])]),s("div",{staticClass:"project"},[s("p",{staticClass:"title"},[n._v("项目亮点")]),s("p",{staticClass:"project-intro",domProps:{innerHTML:n._s(n.Wrap(n.projectIntro))}})])]),s("div",{staticClass:"img"},[s("img",{style:{width:n.imgWidth+"px",height:n.imgHeight+"px"},attrs:{src:n.imgUrl}})])])])},e=[],c=(s("ac1f"),s("5319"),{name:"CaseItem",props:{postion:{type:String,default:""},icon:{type:String,default:""},name:{type:String,default:""},companyIntro:{type:String,default:""},projectIntro:{type:String,default:""},imgUrl:{type:String,default:""},imgWidth:{type:String,default:""},imgHeight:{type:String,default:""}},data:function(){return{}},methods:{Wrap:function(n){var t=n.replace(/\\n/gm,"<br>");return t}}}),p=c,r=(s("6635"),s("2877")),l=Object(r["a"])(p,i,e,!1,null,"1236a7da",null),u=l.exports,m=s("64bc"),d=s("88c3"),g={components:{CaseItem:u,LinkByColumn:m["a"],Banner:d["a"]},data:function(){return{bannerBg:s("8ca6"),caseList:[{postion:"top",icon:s("e2f4"),imgUrl:s("8486"),style:["962","291"],name:"中国中车集团有限公司",companyIntro:"中国中车股份有限公司由中国北车股份有限公司、中国南车股份有限公司按照对等原则合并组建的A+H股上市公司。经中国证监会核准，2015年6月8日，中国中车在上海证券交易所和香港联交所成功上市。现有46（52）家全资及控股子公司，员工17万余人。",projectIntro:'<span class="key-point">平台一体化：</span> 实现“一个平台、一套程序、一个数据库”，有效实现集团对于各级子公司风险管控的需求，提高协同效率和效果。\\n\\n<span class="point">业务一体化：</span> 实现风险、内控、审计业务一体化管理，数据互联互通，提升业务协作。\\n\\n<span class="point">知识一体化：</span> 实现风险库、内控矩阵、审计指引的统一管理和维护，实现风控审计报表的整合分析。\\n\\n'},{icon:s("c21b"),imgUrl:s("04ca"),style:["595","656"],name:"中国诚通控股集团有限公司",companyIntro:"中国诚通控股集团有限公司由国务院国资委代表国务院履行出资人职责的中央企业。2016年2月，中国诚通被确定为中央企业国有资本运营公司试点，搭建国有资产重组和资本运作的平台。中国诚通主营业务为股权运作、金融服务、资产管理，以及综合物流服务、生产资料贸易、林浆纸生产开发及利用等。",projectIntro:"实现风险、合规、内控、法务“四位一体”信息化落地，统一工作入口、统一工作界面、统一工作流程、统一分析维度，打通业务壁垒，形成监督合力。\\n\\n针对不同的二级公司的经营业态，设计差异化的业务风险预警指标，提升集团风险监控能力。\\n\\n建立以风险为导向的合同管理全生命周期系统，合规审查、内控检查、风险预警与合同管理过程无缝对接。\\n\\n实现风控合规法务知识的统一维护及全文检索，通过多样化的管理看板及时分析查询各单位或各业务线的风险防控情况，提高风险分析能力。"},{postion:"top",icon:s("48dd"),imgUrl:s("7128"),style:["1055","426"],name:"北京市轨道交通运营管理有限公司",companyIntro:"北京市轨道交通运营管理有限公司，是北京市轨道交通建设管理有限公司设立的全资子公司，是市政府批准的北京第三家轨道交通运营商。公司主营业务涵盖轨道交通客运服务、车辆及设备设施维修服务、技术研发、咨询培训、广告、民用通信等版块。目前，负责运营北京市轨道交通燕房线、北京大兴国际机场线。",projectIntro:'<span class="key-point">文件管理：</span> 实现对各类规章制度的数据格式化管理，对制度分章节、分段落结构化拆解，建立规章制度和风险事件，控制点的关联。\\n\\n<span class="point">风险管理：</span> 按照流程、风险分类等不同维度对风险事件进行识别；支持风险事件、内控措施、规章制度的关联展现。\\n\\n<span class="point">内控管理：</span> 固化控制识别、内控评价及缺陷整改的工作流程，提升工作效率。\\n\\n<span class="point">审计管理：</span> 提供风险评估、审计计划制定、审计项目实施、审计整改跟踪的全过程规范化管理。\\n\\n'},{postion:"top",icon:s("e41c"),imgUrl:s("5e0c"),style:["1058","457"],name:"中国长江三峡集团有限公司",companyIntro:'中国长江三峡集团有限公司于1993年9月27日经国务院批准成立，为建设三峡、开发长江，2009年9月27日更名为中国长江三峡集团公司。集团公司的战略定位是以大型水电开发与运营为主的清洁能源集团，主营业务是水电工程建设与管理、电力生产、相关专业技术服务。中国长江三峡集团公司全面负责三峡工程的建设与运营。2016年8月，中国长江三峡集团公司在"2016中国企业500强"中排名第216位。',projectIntro:'<span class="key-point">有效规范风险管理体系：</span> 通过信息系统对集团风险管理制度、流程、管控体系进行统一和固化，形成集团统一管理下的差异化风险管控体系，风险管理的规范性得到大幅度提高。\\n\\n<span class="point">有效提升风险管理能力：</span> 提高风险的规范化程度和透明度，快速、及时、准确地为有关决策者提供各种基础信息和分析数据，全程监督重大风险处理流程，跟踪违规追责管理流程，有效提升效率。\\n\\n<span class="point">有效改进风险分析能力：</span> 集团风险管理信息化项目实施将大幅提高集团和出资企业风险管理效率和预判准确性，集团和出资企业风险分析能力将得到有效改进，对科学决策支持效果将日益体现。'},{icon:s("e528"),imgUrl:s("c62f"),style:["654","436"],name:"上海机场集团有限公司",companyIntro:"1998年5月28日，经上海市人民政府批准，组建上海机场（集团）有限公司，统一经营管理上海浦东和虹桥两大国际机场。公司经营范围包括机场建设、运营管理，与国内外航空运输有关的地面服务，国际国内贸易（除专项规定），对外技术合作等。2019年9月1日，2019中国服务业企业500强榜单在济南发布，上海机场（集团）有限公司排名第269位。",projectIntro:"结合信息化手段，落实集团关于实施法定自查工作的“一个办法、三个规则”总体要求，以实践来检验制度制定的合理性与实用性。\\n\\n通过建设“清单管理”、“检查实施计划”、“危险源管理”等系统功能，固化法定自查工作开展流程、明确管理职责，做到自查工作有法可依有据可循、自查工作闭环管理，风险提前预警。"},{icon:s("92a3"),imgUrl:s("c2b4"),style:["667","287"],name:"美的集团股份有限公司",companyIntro:"美的于1968年成立于中国广东，如今是一家覆盖消费电器、暖通空调、机器人与自动化系统、创新业务四大板块业务的全球科技集团，在全球拥有约200家子公司、约150,000名员工，业务涉及200多个国家和地区。美的连续四年上榜《财富》世界500强，2019年排名第312位。",projectIntro:'<span class="key-point">业务基础建设：</span> 通过风险管理信息平台，建立制度设计和风险管理的相互关联，推动循环改善。\\n\\n<span class="point">风险管理效率提升：</span> 优化风险管理工作的工作流程和操作方法，提高工作效率与部门协作。\\n\\n<span class="point">数据自动汇总统计：</span> 通过信息平台提升对数据的处理分析功能，实时出具各种管理报表，便于信息获取、传递和汇总，为集团战略目标实现提供支撑。'},{icon:s("e6e5"),imgUrl:s("9a9d"),style:["667","379"],name:"上海电气集团",companyIntro:"上海电气是一家大型综合性高端装备制造企业，主导产业聚焦能源装备、工业装备、集成服务三大领域，致力于为全球客户提供绿色、环保、智能、互联于一体的技术集成和系统解决方案。产品包括火力发电机组（煤电、气电）、核电机组、风力发电设备、输配电设备、环保设备、自动化设备、电梯、轨道交通、医疗设备、油气海工和工业互联网等。改革开放以来，集团诞生了一大批世界领先的创新产品，如全球首台百万千瓦超超临界二次再热发电机组、三代四代核电核岛和常规岛主设备、大型海上风电设备、西气东输的高频电动机等。",projectIntro:"通过信息系统的建立，对风险管理与合规管理的工作流程和操作方法进行“固化”，“自动化”，“标准化”，提升工作效率；满足多层级，多岗位，多用户的需求；通过信息平台对数据的处理分析功能出具管理报表，便于信息获取，传递和汇总。\\n\\n有利支撑集团风险管理的理论体系的实施，实现统一语言，统一标准的协同应用。"},{icon:s("78d5"),imgUrl:s("58ff"),style:["680","456"],name:"中原环保股份有限公司",companyIntro:"中原环保股份有限公司是国有控股上市公司，全国国企改革“双百企业”。公司深化改革、创新发展，稳步实施“立足中原、走向世界”的市场战略，围绕“大公用、大环保、大生态”业务领域，科学布局全产业链，创新驱动高质量发展，全面打造行业典范，新动能加速成长，新业态蓬勃涌现，发展成为生态环境综合服务商。",projectIntro:'<span class="key-point">风控审计监察一体化监督平台：</span> 建立公司总部、各级分子公司风险、内控、审计及纪检监察“四位一体”的大监督平台。\\n\\n<span class="point">业务共享：</span> 系统产生的风险、内控、审计、纪检数据可以为总分公司共享和分析，且能够系统间数据互相流转，共享监督成果，形成监督合力。\\n\\n<span class="point">数据预警：</span> 系统与公司包含但不限于现有信息系统（如ERP、OA、合同管理、智慧水务、供热收费与客服等）实现数据交换和融合，通过风险指标和模型实时监控业务系统。'}],linkList:[s("3756")]}},methods:{scrollHack:function(n){document.getElementById(n).scrollIntoView()}},mounted:function(){var n=this.$route.query.caseId;void 0!=n&&(this.$router.push({query:{}}),this.scrollHack("case"+n))}},f=g,A=(s("9127"),Object(r["a"])(f,a,o,!1,null,"346fd644",null));t["default"]=A.exports},9127:function(n,t,s){"use strict";var a=s("fb3a"),o=s.n(a);o.a},"92a3":function(n,t,s){n.exports=s.p+"img/icon6.dadf879b.png"},"9a9d":function(n,t,s){n.exports=s.p+"img/img7.9a2f0842.png"},c21b:function(n,t,s){n.exports=s.p+"img/icon2.24dc8f52.png"},c2b4:function(n,t,s){n.exports=s.p+"img/img6.04be912d.png"},c62f:function(n,t,s){n.exports=s.p+"img/img5.a05a74ad.png"},e2f4:function(n,t,s){n.exports=s.p+"img/icon1.e0243576.png"},e41c:function(n,t,s){n.exports=s.p+"img/icon4.8aa635c4.png"},e528:function(n,t,s){n.exports=s.p+"img/icon5.61ab41ef.png"},e6e5:function(n,t){n.exports="data:image/png;base64,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"},fb3a:function(n,t,s){}}]);
//# sourceMappingURL=riskControl.c549b808.js.map