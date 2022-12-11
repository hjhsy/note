(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{334:function(t,v,_){"use strict";_.r(v);var s=_(0),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"😸人工智能开发框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#😸人工智能开发框架"}},[t._v("#")]),t._v(" 😸人工智能开发框架")]),t._v(" "),v("h2",{attrs:{id:"🌟http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟http协议"}},[t._v("#")]),t._v(" 🌟http协议")]),t._v(" "),v("ol",[v("li",[t._v("HTTP协议的特点：\n"),v("ul",[v("li",[t._v("无状态：服务器端无法保存客户端状态，所以需要通过"),v("strong",[t._v("Session")]),t._v("和"),v("strong",[t._v("Cookie")]),t._v("来解决。")]),t._v(" "),v("li",[t._v("单通道：只有客户端"),v("strong",[t._v("主动")]),t._v("向服务器发起请求时，服务器端才会被动响应，反过来则不行，服务器不能主动与客户端联系，所以通过"),v("strong",[t._v("WebSocket")]),t._v("来解决双向长连接的问题。")]),t._v(" "),v("li",[t._v("非加密：整个HTTP协议的传输过程完全明文传输，所以通过HTTPS协议来解决。")])])]),t._v(" "),v("li",[t._v("请求和响应（http协议的请求类型主流有4种）\n"),v("ul",[v("li",[t._v("GET请求：通常用于访问一个服务器资料，如一张图片或一个页面，也可以通过URL地址的查询字符串来向服务器提交参数。")]),t._v(" "),v("li",[t._v("POST请求：通常用于向服务器端提交一段数据")]),t._v(" "),v("li",[t._v("PUT请求：满足RESTful风格的服务器端接口而使用，用于更新服务器端某个资源。")]),t._v(" "),v("li",[t._v("DELETE请求：也是为了满足RESTful风格而使用，用于删除服务器端某个资源。")])])]),t._v(" "),v("li",[t._v("标头和正文（HTTP的请求和响应均分为两个部分，一是HTTP请求和响应的标头，二是HTTP请求和响应的正文）\n"),v("ul",[v("li",[t._v("标头：标头是HTTP协议最为核心的一部分，必须满足协议规范，用于浏览器与服务器之间的通信，不可随意更改。请求端的标头主要用于描述往哪个服务器地址发送数据，以及告知服务器当前浏览器的一些基本信息，如操作系统版本、浏览器版本、是否缓存等信息。")]),t._v(" "),v("li",[t._v("正文：请求端的正文主要是要发送给服务器端的数据，通常只有POST请求有正文，其他类型的请求不需要正文。")])])])]),t._v(" "),v("h2",{attrs:{id:"🌟session和cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟session和cookie"}},[t._v("#")]),t._v(" 🌟Session和Cookie")]),t._v(" "),v("p",[t._v("作用范围不同，"),v("strong",[t._v("Cookie")]),t._v(" 保存在客户端（浏览器），"),v("strong",[t._v("Session")]),t._v(" 保存在服务器端。. 存取方式的不同，"),v("strong",[t._v("Cookie")]),t._v(" 只能保存 ASCII，"),v("strong",[t._v("Session")]),t._v(" 可以存任意数据类型，一般情况下我们可以在 "),v("strong",[t._v("Session")]),t._v(" 中保持一些常用变量信息，比如说 UserId 等。. 有效期不同，"),v("strong",[t._v("Cookie")]),t._v(" 可设置为长时间保持，比如我们经常使用的默认登录功能，"),v("strong",[t._v("Session")]),t._v(" 一般失效时间较短，客户端关闭或者 "),v("strong",[t._v("Session")]),t._v(" 超时都会失效。\n由于HTTP协议属于无状态协议，也就意味着服务器无法记住客户端的各种状态。使用"),v("strong",[t._v("Session")]),t._v("和"),v("strong",[t._v("Cookie")]),t._v("可以联系服务端和客户端\n"),v("img",{attrs:{decoding:"async",src:"/images/img_2.png"}})]),t._v(" "),v("h2",{attrs:{id:"🌟响应式布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟响应式布局"}},[t._v("#")]),t._v(" 🌟响应式布局")]),t._v(" "),v("p",[t._v("通过手机和计算机访问蜗牛笔记或蜗牛学院的官网，都可以看到不一样的布局格式，这就是响应式布局：同一个网页，在不同的设备上，实现了不同的效果。\n响应式可以响应的前提有两点")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("页面布局具有"),v("strong",[t._v("规律性")])]),t._v(" "),v("li",[t._v("元素宽高可用"),v("strong",[t._v("百分比")]),t._v("代替固定数值")])])]),t._v(" "),v("p",[t._v("而这两点正是"),v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/366407733",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("栅格系统")]),v("OutboundLink")],1),t._v("本身就具有的典型特点，所以利用栅格系统进行响应式的设计是顺理成章的，也比较高效快捷，所以响应式与栅格化天生一对好搭档。")]),t._v(" "),v("h2",{attrs:{id:"🌟bootstrap栅格系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟bootstrap栅格系统"}},[t._v("#")]),t._v(" 🌟BOOTSTRAP"),v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/366407733",target:"_blank",rel:"noopener noreferrer"}},[t._v("栅格系统"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("Bootstrap内置了一套响应式、移动设备优先的"),v("strong",[t._v("流式栅格系统")]),t._v("，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。\n要进行栅格系统操作，首先就要创建栅格系统的容器。“container”和“row”共同组成栅格容器，“row”代表的就是一行。")]),t._v(" "),v("h2",{attrs:{id:"🌟postman用法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟postman用法"}},[t._v("#")]),t._v(" 🌟postman用法")]),t._v(" "),v("img",{attrs:{decoding:"async",src:"/images/图片1.png"}}),t._v(" "),v("img",{attrs:{decoding:"async",src:"/images/图片2.png"}}),t._v(" "),v("h2",{attrs:{id:"🌟模板引擎、语法规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟模板引擎、语法规则"}},[t._v("#")]),t._v(" 🌟模板引擎、语法规则")]),t._v(" "),v("h3",{attrs:{id:"模板引擎的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模板引擎的原理"}},[t._v("#")]),t._v(" 模板引擎的原理：")]),t._v(" "),v("p",[t._v("模板引擎的引入，主要解决以下三个问题。")]),t._v(" "),v("ol",[v("li",[t._v("把Python代码和前端HTML代码分离，不再采用混编的方式来编写代码。提高代码的可维护性，同时提升代码的开发效率。")]),t._v(" "),v("li",[t._v("在渲染模板页面的同时，可以往模板页面传递变量和值，这些变量和值将会在模板页面中被引用，从而直接在HTML页面中填充动态内容。")]),t._v(" "),v("li",[t._v("通过模板引擎特定的语法规则，可以在HTML中非常清楚地标识模板变量，同时服务器在渲染模板页面时，也能够更加高效地处理，提升服务器响应性能。")])]),t._v(" "),v("p",[t._v("事实上，模板引擎的运行原理相对是比较简单的，在进行渲染的过程，通常完成以下三步便可实现页面渲染。")]),t._v(" "),v("ol",[v("li",[t._v("正常打开HTML文件，把HTML文件当成普通文本文件进行处理。")]),t._v(" "),v("li",[t._v("找到HTML文件中的模板引擎的标识，用预先定义好的规则进行替换和数据填充。")]),t._v(" "),v("li",[t._v("填充完成后，把这个文本文件的内容作为一个长字符串返回给前端作为响应正文。")])]),t._v(" "),v("h3",{attrs:{id:"语法原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#语法原则"}},[t._v("#")]),t._v(" 语法原则")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1. {% ... %} 用于循环或判断语句。\n2. {{ ... }} 用于表达式的值的引用。\n3. {# ... #} 用于模板引擎的注释，如果注释中存在模板引擎的语法，那么使用将不被模板引擎认为是注释，注释中的语法将被执行。此时请使用{# #}进行注释。\n")])])]),v("h2",{attrs:{id:"🌟flask路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟flask路由"}},[t._v("#")]),t._v(" 🌟Flask路由")]),t._v(" "),v("p",[t._v("Flask的路由器主要解决URL地址定义的问题，每一个从前端发过来的请求，都需要有一个唯一的URL地址作为请求的接收端。Flask的路由器主要解决以下4个问题。")]),t._v(" "),v("ol",[v("li",[t._v("定义服务器接口的URL地址，从 / 根目录开始。")]),t._v(" "),v("li",[t._v("定义接收前端数据的请求类型，如GET、POST、PUT或DELETE等。")]),t._v(" "),v("li",[t._v("获取请求地址中的查询参数或请求正文数据。\n通过@app.route装饰器与被装饰的函数绑定，用于对请求进行后台处理，这部分代码也被称之为Controller。")])]),t._v(" "),v("h2",{attrs:{id:"🌟flask主要功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟flask主要功能"}},[t._v("#")]),t._v(" 🌟Flask主要功能")]),t._v(" "),v("ol",[v("li",[t._v("路由规则：用于在开发过程中定义后台接口的地址标准，以便于前端页面的请求能够发送给正确的服务器地址。")]),t._v(" "),v("li",[t._v("参数传递：也是属于后台接口的标准，用于接收前端页面发过来的数据，无论是GET还是POST请求或者其他类型的请求。")]),t._v(" "),v("li",[t._v("URL重定向：当后台服务器处理完后需要重定向到一个新的页面时，通过URL重定向功能来实现。")]),t._v(" "),v("li",[t._v("Session和Cookie：支持通过使用Session和Cookie来维持客户端与服务器端的状态。")]),t._v(" "),v("li",[t._v("模块化：服务器端的功能通常比较复杂，通常会将不同的功能划分到后台不同的模块中以便于管理和维护代码。Flask通过Blueprint模块实现了网站后台的模块化开发。")]),t._v(" "),v("li",[t._v("拦截器：后台服务器通过对前端发过来的每一个请求进行拦截和检查，满足条件的请求进行处理，不满足条件的请求则可以直接响应给前端一个错误信息。例如，对于用户必须要登录成功后才能访问的接口，就可以使用拦截器对用户是否登录进行判断，如果没有登录，则直接被拦截，不允许访问对应的接口。")]),t._v(" "),v("li",[t._v("模板引擎：为了更加便捷地往前面HTML页面中填充数据，Flask引入了Jinja2模板引擎，通过在HTML页面中嵌入一段满足Jinja2语法规则的代码，可以快速将数据填充到HTML页面中供浏览器渲染。")]),t._v(" "),v("li",[t._v("数据库操作：几乎所有的服务器环境必须支持数据库的各类操作，Flask则通过引入SQLAlchemy框架来操作MySQL数据库，其底层基于PyMySQL库实现，定义了一套相对标准的ORM操作接口可以方便地操作数据库的增删改查。")])]),t._v(" "),v("h2",{attrs:{id:"🌟flask项目目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟flask项目目录结构"}},[t._v("#")]),t._v(" 🌟Flask项目目录结构")]),t._v(" "),v("ul",[v("li",[t._v("项目根目录")]),t._v(" "),v("li",[t._v("static目录：用于保存静态资源，包括缩略图和文章中上传的图片，以及头像等。")]),t._v(" "),v("li",[t._v("templates目录：用于保存模板页面，供Flask渲染。")]),t._v(" "),v("li",[t._v("controller包：用于管理控制层的所有源代码。")]),t._v(" "),v("li",[t._v("model包：用于管理模型层的所有源代码，主要封装数据库操作。")]),t._v(" "),v("li",[t._v("common包：用于管理一些公共组件，如验证码生成功能、邮件短信发送或数据库连接等网站需要用到的通用功能。无法归为controller和model的代码，均可在common包中进行管理。")]),t._v(" "),v("li",[t._v("main.py：Flask入口程序，用于定义蜗牛笔记的程序入口及拦截器等。")])]),t._v(" "),v("h2",{attrs:{id:"🌟模型过拟合-欠拟合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟模型过拟合-欠拟合"}},[t._v("#")]),t._v(" 🌟模型过拟合,欠拟合")]),t._v(" "),v("img",{attrs:{decoding:"async",src:"/images/图片3.png"}}),t._v(" "),v("h2",{attrs:{id:"🌟mvc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟mvc"}},[t._v("#")]),t._v(" 🌟MVC")]),t._v(" "),v("p",[t._v("MVC全名是Model View Controller，是模型(Model)－视图(View)－控制器(Controller)的缩写。它一种软件设计模式，通过代码组织和分层，将业务逻辑、数据处理、界面显示进行分离，以实现更高的重用性，更明确的代码功能，并能提高代码的维护性。MVC通过将业务逻辑封装到一个部件里面，在改进和个性化定制前端界面及用户交互的同时，不需要重新编写业务逻辑层代码。MVC三个部分的主要功能如下。")]),t._v(" "),v("ol",[v("li",[t._v("Model层：模型层主要负责处理应用程序中数据逻辑的部分，如数据库操作。")]),t._v(" "),v("li",[t._v("Controller层：控制层负责从视图读取数据，控制用户输入，并向模型发送数据，也同时对应着有一个服务器端的接口暴露给前端。")]),t._v(" "),v("li",[t._v("View层：视图层主要用于程序中处理数据显示的部分，简单来说就是前端界面。\nMVC分层处理的工作流程如下图。"),v("br"),t._v(" "),v("img",{attrs:{decoding:"async",src:"/images/图片4.png"}})])]),t._v(" "),v("h2",{attrs:{id:"🌟orm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟orm"}},[t._v("#")]),t._v(" 🌟ORM")]),t._v(" "),v("p",[t._v("ORM即Object-Relationl Mapping，译为“对象关系映射”。它的作用是在关系型数据库和对象之间作一个映射，这样，在具体的操作数据库的时候，就不需要直接编写SQL语句，而是像平时操作Python的类和对象一样操作数据库就可以了。")]),t._v(" "),v("p",[t._v("PyMySQL返回的数据是以行为单位的结果集，使用字典或者列表进行读取，显然不是一个有效的Python类，无法通过操作某个类实例和方法的方式来完成读写。所以需要将数据库中的表进行转换，通常的转换规则有以下5个方面。")]),t._v(" "),v("ol",[v("li",[t._v("数据库中的表对应Python中的一个类。")]),t._v(" "),v("li",[t._v("表里面的列，对应Python中类的属性。")]),t._v(" "),v("li",[t._v("表里面每一行的数据，对应着Python中的一个字典对象。")]),t._v(" "),v("li",[t._v("每一个字典对象的Key对应列名，Value对象每一列的数据。")]),t._v(" "),v("li",[t._v("对增删改查分别封装到类中不同的方法中进行操作，最终拼接成一个SQL语句。")])]),t._v(" "),v("h2",{attrs:{id:"🌟机器学习的基本步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🌟机器学习的基本步骤"}},[t._v("#")]),t._v(" 🌟机器学习的基本步骤")]),t._v(" "),v("p",[t._v("数据采集、数据预处理、特征提取、训练模型、数据评估")])])}),[],!1,null,null,null);v.default=a.exports}}]);