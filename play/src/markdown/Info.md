### 为什么开发 tdesign-pro-component

原因很简单，起初我是在合肥一家房地产互联网公司做开发，开发使用的是 React + Umi + Typescript 开发。其中使用到了阿里团队开发的 ProComponents组件库，发现功能挺好用的。就想开发一套这样的组件库了。一开始只是在自己的项目中引入使用，后面发现独乐乐不如众乐乐就发布到 NPM 中去了。

### 为什么是 Vue 而不是 React?

因为作者个人是比较喜欢 Vue 框架的，当然 React 也会。所以出于个人喜好，想在 Vue 框架里面开发一套这样的组件库。

### 为什么是 TDesign 而不是 ElementUI?

为什么是 TDesign 而不是 ElementUI，这个问题我同事也和我说过。因为个人原因吧，以前做项目都是 ElementUI + Vue *3, 可能审美疲劳了，找了半天一开始想封装 AntD 组件库的，但是 React 已经有了，视觉效果也差不多，所以就再找找。于是我在字节的 Arco Design 和 腾讯的 TDesign 纠结了。试着做了两个简单的后台管理系统，最后发现可能腾讯的 TDesign 符合我的审美，于是就选择使用了 TDesign 。

有开发 ElementUI 高级组件的想法，请 ElementUI 的爱好者等待网站后续发布或先使用 AVUE 过渡

### TDesign 介绍
腾讯🐧旗下的一套前端 UI 组件库

TDesign 是具有包容性的设计体系，它强调为业务提供产品、服务等过程中，追求以人为本、人人受益的包容性，要求搭建过程中，了解业务底层，理解业务场景的多样性，并在繁杂的业务场景中寻找共性和特性，确保彼此能灵活地在同一个环境并存，既能满足当下需要，也能作用于更广泛的场景，为不同的产品保留定制空间，在保证不同产品能够体现自我特色的同时，TDesign 还可以为更广泛的产品提供适合的服务。

在一个专业环境里，我们希望 TDesign 可以保持多元。我们意识到在世界中不可能单一化，所以作为设计体系需要不断纳入新鲜血液，适应未来的技术和体验变革，不断地进行多元化生长。 TDesign 基于腾讯业务，同时也服务于业务，并伴随着业务的使用后获得业务的反哺，从而不断地得到多元内容补充。在保证价值观一致的基础上，洞察多个业务场景需求，赋能腾讯及生态中的不同业务类型 ，为 TDesign 探索更多的多元化机会点。

进化是迄今为止最为人类理解和遵从的造物者法则，TDesign 的设计体系同样遵循进化。在设计上保持敏锐感，与趋势产生共鸣，推动整体风格不断进化。对当前对用户和产品友好基础上，保持其内核的坚定，用发展的眼光完善 TDesign 产品矩阵。在设计过程中考虑更多的可能性，为技术发展、体验模式变化、设计趋势、企业与产品的升级留有空间，同时保证迭代优化系统的延续性和持久性。

“连接一切”深深印刻在腾讯的基因中，在这个过程中，TDesign 作为腾讯生态基础服务，需要起到连接和开放的作用，不仅支持内部海量业务的稳定运营，还能提供领先的各行业解决方案，满足全场景生态能力的建设。TDesign 将会持续地涵盖腾讯的前沿技术、策略经验和物料资产开放、共享，用最大努力去连接赋能，连接用户、连接企业、连接生态，更连接未来。

### TDesign-Pro-Component 的理念

TDesign 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范。主要还是为了让 Vue 开发者在使用 TDesign 的过程中将业务主要集中于 javascript 部分，对 template 部分, 可节省大部分时间。

在 ProComponent-TDesign-Vue 中我们内置了一系列的设计规范，预设了常用的逻辑。在这个基础上我们同样提供了灵活的支持，比如对于 ProTable 来说你也可以把它完全当做 TDesign 作为腾讯生态基础服务，需要起到连接和开放的作用，不仅支持内部海量业务的稳定运营，还能提供领先的各行业解决方案，满足全场景生态能力的建设。TDesign 的 Table 来用，对于 ProForm 来说你也可以直接使用 TDesign 作为腾讯生态基础服务，需要起到连接和开放的作用，不仅支持内部海量业务的稳定运营，还能提供领先的各行业解决方案，满足全场景生态能力的建设。TDesign 的基础组件或者你的自定义组件。我们希望通过 Pro 系列组件提供快速高效搭建高质量中后台应用的能力，进一步扩展 TDesign 的能力，欢迎使用并提出宝贵的意见。可在本站内进行投递。

### 设计思路

在现在开发的时代，都是通过调用 http 请求为主，所以这里的设计主要还是依靠 Promise 请求数据来渲染数据。比如 ProTable 表格，只需要传递一个请求函数，按照规定返回数据，那么 ProTable 表格会帮你把常用弄能得请求处理好，不需要开发者重新还重复地处理列表请求。通常我们需要分页组件，搜索表单，表格来组成页面，ProTable 直接帮您组织好了这些东西，并且您可以根据您的需要进行自定义开发。总而言之，设计思路起初就是因为写页面模板写的太多，再加上 javascript 部分还要重复操作，耽误开发进度，为此而开发。

PS: 如果公司用代码量挂钩绩效那么还请绕道啊😊。

### 一个组件 ≈ 一个页面
重型组件区别于传统组件有个很大的不同，重型组件在抽象时是将其当成一个页面来进行处理，所以 ProTable 会支持网络请求和自动生成查询表单，而 ProLayout 会支持自动生成菜单，两者都基于同样的思想也就是提供页面级别的抽象。

一个列表页应该可以用 ProTable 完成，一个编辑页应该使用 PageContainer + ProForm 完成。 一个页面在开发过程中只需要关注几个重型组件，降低心智负担，专注于更核心的业务逻辑。

### 注意事项👀

本组件库中，作者并未大量重新编写 CSS 样式，还是以 TDesign 原生样式为主。由于作者大部分组件使用 Vue Template 语法，所以在 JSX 语法上支持不是特别友好，所以开发者在使用组件是尽量使用插槽形式开发。

### 结束语
如果各位开发者在使用本组件的过程中遇到 Bug 那么请在站内提交，并描述复现过程，作者会尽快解决（因为作者也是个人开发者，平常也在工作还请谅解）。本文章内容大多借鉴 ProComponents 文本，有意者可以到该网站去看。

祝各位开发者，开发无BUG，生活开心如意。🎉🎉🎉