# 一个galgame资源网页项目

## 项目简介
这是一个galgame资源分享网页项目，采用标准的Web技术实现，主要包含HTML、CSS和JavaScript等文件。项目旨在为游戏爱好者提供一个简洁、高效的游戏资源获取平台，支持用户投稿分享自己的游戏资源。<br />
本项目目前只有一个人维护，因此更新资源的速度会略慢

## 文件结构
项目文件结构主要文件包括：
- `index.html`：项目的主页文件，包含游戏资源的展示界面和搜索功能。
- `QA.html`：项目的解答页面，如果有什么疑问，问题或想投稿内容时可查看此页面
- `html.html`：包含一些同类型网页的链接，以及一些你可能用得上的工具
- `license.html`：包含本项目的开源协议页面
- `Magic-Number.html` : 这是一个可以探明一些被修改了扩展名文件的小工具。
- `version.html` ： 本页面包含了项目的所有过往更新内容
- CSS和JavaScript文件：负责页面样式和交互逻辑，确保用户体验流畅。

## 安装与使用
### 本地运行
1. 克隆或下载项目代码到本地目录。
2. 使用现代Web服务器（如Apache、Nginx）或直接通过浏览器打开`index.html`文件。
3. 注意：某些功能可能需要本地服务器环境以避免跨域问题。

### 在线部署
将项目文件上传至支持静态网页托管的服务器即可访问。对于Markdown文件的编辑，推荐使用专用编辑器（如Typora、Obsidian）或在线工具（如Dillinger），它们提供实时预览功能，便于编写和调试，你也可以直接通过GitHub pages功能访问本网页。<br />
本项目GitHub pages链接：https://thegalgame.github.io/galgame/

## 投稿指南
我们欢迎用户投稿游戏资源！投稿方式有两种框架可选，适合不同技术水平的用户。您也可以直接通过GitHub Issues投稿内容或反馈问题。我们接受任何形式的投稿，包括网盘链接等。您也可以通过`QA.html`来更直观的查看本部分内容

### 简单版投稿（零基础适用）
投稿时，请注意删除所有【】符号，这仅作为提示使用。<br />
只需修改3个地方即可完成投稿：<br />
&lt;div class=&quot;content-item&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href=&quot;<u>【**在此输入你的游戏资源链接**】</u>&quot; target=&quot;_blank&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;<u>【**在此输入你的游戏名字**】</u>&lt;/h3&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src=&quot;<u>【**在此放入你的游戏图片链接**】</u>&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br />
					&lt;/div&gt;

**投稿步骤：**
1. 复制上方代码块。
2. 替换以下三处内容：
   - 游戏下载链接（必须是`https://`开头）。
   - 游戏中文名称。
   - 游戏封面图链接。
3. 将修改后的代码发送给管理员。<br />
**注意事项：**
- 百度网盘链接请保留`?pwd=***`密码段。
- 可选添加投稿人信息：在`</a>`前添加`<h4>投稿人：你的名字/联系方式</h4>`。
- 确保引号完整，如：`href="https://xxxxx?pwd=wx33"`。

### 专业版投稿（支持搜索与别名）
一次性新建分区并投放多款游戏，完整流程如下：
#### Step-1 新建分区（HTML）
将以下代码添加到页面底部：<br />
&lt;section class=&quot;section&quot; id=&quot;<u>【**section-123**】</u>&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;container&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;content-section&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;<u>【**123 分区**】</u>&lt;/h2&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;content-container&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;content-item&quot; id=&quot;<u>【**g_456**】</u>&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href=&quot;<u>【**在此输入你的游戏资源链接**】</u>&quot; target=&quot;_blank&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;<u>【**在此输入你的游戏名字**】</u>&lt;/h3&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src=&quot;<u>【**在此放入你的游戏图片链接**】</u>&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;content-item&quot; id=&quot;<u>【**g_789**】</u>&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href=&quot;<u>【**在此输入你的游戏资源链接**】</u>&quot; target=&quot;_blank&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;<u>【**在此输入你的游戏名字**】</u>&lt;/h3&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src=&quot;<u>【**在此放入你的游戏图片链接**】</u>&quot;&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
					&lt;/section&gt;

#### Step-2 更新分区映射（manualMap）
找到在`dict.js`中`const manualMap = {`，添加以下内容（注意末尾逗号）：

'123分区': 'section-123',

#### Step-3 配置搜索数据（searchData）
找到`const searchData = [`，添加以下条目：

{ id: '【**c_section123**】', name: '【**123分区**】', type: 'category', target: '【**section-123**】' },<br />
{ id: '【**g_456**】', name: '【**456**】', type: 'game', target: '【**section-123**】' },<br />
{ id: '【**g_789**】', name: '【**789**】', type: 'game', target: '【**section-123**】' },

#### Step-4（可选）配置搜索别名
在`const aliasMap = {`中追加别名配置：

"456": ['四五六', '四五六游戏'],<br />
"789": ['七八九'],

**重要提醒：**
- 所有链接必须以`https://`开头。
- 每行末尾的英文逗号不能遗漏。
- ID不要包含空格，使用下划线或数字代替。
- 百度网盘务必保留`?pwd=***`密码段。

## 开源协议
本项目遵循MIT开源协议。您可以自由使用、修改和分发本项目，但需保留原协议声明。MIT许可证允许几乎任何使用和修改，只需在代码中保留原作者的版权声明。详情文件可见`license.html`。

## 问题反馈与投稿
如果您有任何问题、建议或想投稿游戏资源，请通过以下方式联系我们：
- GitHub Issues：提交问题反馈或投稿内容。
- 邮箱联系：通过邮件方式投稿资源。
我们接受任何形式的投稿，包括网盘链接、代码改进等。感谢您的支持！
