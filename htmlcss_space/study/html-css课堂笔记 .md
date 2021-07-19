# html-css 课堂笔记

## html文档

### 一个html5文件它的结构是什么？

- 文档声明 `<!DOCTYPE html>`
- 根元素 `html`
- 根元素中包含 `head` 和 `body`
- `head` 中包含 `charset` 编码、标题等等。
- `body`中是写代码的。

### 可以使用emmet插件快写html5文档

输入一个英文状态的`!`，然后按`tab`，即可快速创建`html5`文档。

### gbk编码和utf-8编码的区别

`gbk` 国标码，仅包含汉字、符号、大小写英文字母、数字。
`utf-8` 万国码，包含`gbk`，还包含亚洲一些文字和特殊符号。

当前最流行用`utf-8`,设置是再`head`区域

```html
<head>
  <meta charset="utf-8" />
</head>
```

### html和xhtml的区别

1. `XHTML` 元素必须被正确地嵌套。
```html
<!-- 错误的嵌套 -->
<p>
  <div></div>
</p>

<!-- 正确的嵌套 -->
<div><p></p></div>
```
2. `XHTML` 元素必须被关闭。
```html
<!-- 错误的写法 -->
<br>
<!-- 正确的写法 -->
<br />
```
3. 标签名和属性必须用小写字母。
```html
<!-- 错误的写法 -->
<UL>
  <LI></LI>
</UL>

<!-- 正确的写法 -->
<ul>
  <li></li>
</ul>
```
4. `XHTML`文档必须拥有根元素。

### 浏览器内核

1. `Trident` 三叉戟：`IE`、`360`安全浏览器（兼容模式）
2. `Gecko` 壁虎：`Firefox` 火狐
3. `Webkit`：Chrome、safari、Opera、360、腾讯

### 浏览器兼容性要求

1. 最低兼容要求：`Chrome`
2. 最高兼容要求：`IE8+`
3. `IE8-`不考虑

### 浏览器市场占有率

1. `Chrome`
2. `Safari`
3. `IE`
4. `UC`
5. `Firefox`

### PC电脑分辨率市场占有率

1. `1920x1080`
2. `1366x768`
3. `1440x900`
4. `1600x900` 
5. `1280x720`

## html 标签

### h1-h6 标题

```html
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<h6>标题6</h6>
```

#### 属性

##### align 对齐

1. `left`：左对齐
2. `center`：居中对齐
3. `right`：右对齐
4. `justify`：两端对齐

##### 其他属性 id、name、class、style、title等

> 注意：
> 一个页面只允许一个`h1`
> 不能滥用`h2`
> 合理使用标题标签
> 标题它默认有上边距、下边距

### p 段落

`p` 段落标签

```html
<p>段落</p>
```

##### align 对齐

1. `left`：左对齐
3. `right`：右对齐
4. `justify`：两端对齐

> 注意：
> `p` 默认有上边距、下边距

##### 其他属性 id、name、class、style、title等

```html
<!-- 不允许这样包裹 -->
<p>段落
  <h1>标题1</h1>
</p>
```
不能用`p`标签去包裹1个标题标签，会被提取到外面。

```html
<!-- 允许这样包裹 -->
<h1>标题1
  <p>段落</p>
</h1>
```

### a 超级链接

超级链接默认颜色是蓝色、带下划线

```html
<a href="#">链接</a>
```
用于页面中跳转

> `#` 表示是一个空链接

注意当是外链接时，请记得要加上协议部分，不然无非访问


> 阻止超级链接跳转

```html
<!-- 方案一 -->
<a href="javascript:;">连接1</a>

<!-- 方案二 -->
<a href="javascript:void(0);">连接2</a>
```

```html
<!-- 错误的 -->
<a href="www.baidu.com">链接</a>

<!-- 正确的 -->
<a href="http://www.baidu.com">链接</a>
```

有时候也会使用超级链接作为一个按钮使用

```html
<a>提交</a>
<button>确认</button>
```

有时候为了使得单击区域扩展

```html
<a href="#">
  <h1>标题1</h1>
  <p>段落</p>
</a>
```

#### 属性

##### href 链接

```html
<a href="#">链接</a>
```

超级链接打开邮箱

```html
<a href="mailto:2874219090@qq.com">联系我</a>
```

超级链接拨打电话

```html
<a href="tel:18579105168">联系我</a>
```

##### target 目标

1. `_self`： 在当前页面打开
2. `_blank`：在新窗口打开
3. `_parent`：在父窗口打开
4. `_top`：在顶级父窗口打开
5. `framename`：自定义窗口打开

##### title 描述文字

```html
<a href="#" title="这是一个超级链接">我的主题</a>
```
划过的时候，会弹出一个小提示。

#### 单击超级链接显示在iframe中

1. 分别新建`home.html`、`about.html`两个页面，`body`中的内容随意。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <h1>首页页面</h1>

</body>
</html>
```

2. 新建`连接.html`页面，代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<a href="home.html" target="main">首页</a> |
<a href="about.html" target="main">关于我们</a> 
<hr>
<iframe name="main" src="home.html" width="500" height="300"></iframe>

</body>
</html>
```

3. 注意 需要给`iframe` 取一个名 (`name="main"`)，然后`target`等于`main`

#### 超级链接有四个状态

顺序按照 `L-V-H-A` 排序

1. `a:link` : 默认状态
2. `a:visited`: 单击过后的状态
3. `a:hover`：划过时的状态
4. `a:active`：单击一瞬间的状态

#### 外链和内链接区别

```html
<!-- 外连接 -->
<a href="http://www.baidu.com">百度</a>

<!-- 内连接 -->
<a href="home.html">首页</a>
```

#### 锚点链接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<a href="#home">首页</a> |
<a href="#course">课程</a> |
<a href="#teach">教学</a>

<hr>

<!-- <a name="home"></a> -->
<h2 id="home">首页</h2>
<div style="height: 2000px;"></div>

<h2 id="course">课程</h2>
<div style="height: 2000px;"></div>

<h2 id="teach">教学</h2>
<div style="height: 2000px;"></div>

</body>
</html>
```

锚点链接时超级链接`href`使用`#锚点名`进行跳转，

```html
<a href="#about">关于我们</a>

<div id="about">
  关于我们内容
</div>

<!-- 也看使用以下形式关联 -->

<a name="about">
  关于我们内容
</a>
```

#### 相对路径、绝对路径、本地路径、物理路径

##### 物理路径
 ```
 D:\scedu\uploads\f5c66cb6-348e-4fd4-a097-93ff4ab46901.jpg
 ```

##### 本地路径

```
file:///D:/scedu/uploads/68e5933a-7b21-4940-a87a-cdb66609bd6c.jpg
```

##### 绝对路径

以根目录为参考系的路径

```
<a href="/about/1.html">链接</a>
```

示例

```
cosy 根目录 /

cosy/src/pages/1.html

需要指向 cosy/public/index.html

//1.html

<a href="/public/index.html">链接</a>
```

##### 相对路径

表示以当前目录为参考系

```html
<a href="../../images/my.html">链接</a>
```

> `../` 表示往上一级目录（文件夹）
> `./` 表示当前目录（文件夹）
> 再`html`中`./`可以省略

### 图像

```html
<img src="路径">
```

#### 图像属性

##### src 路径

1. 本地路径，但是必须以本地方式访问页面，服务器方式访问不能显示。

```html
<!-- 必须以file:///本地的方式访问，不然图片将不显示 -->
<img src="file:///D:/Users/Desktop/abc.jpg" alt="">
```

2. 绝对路径

绝对路径是以根目录为参考的路径

```html
<!-- 必须以服务器方式访问，若以`file:///`本地访问则无非显示 -->
<img src="/3.jpg" alt="">
```

3. 相对路径

```html
<!-- 本地方式浏览和服务器方式浏览均支持，也推荐方案 -->
<img src="3.jpg" alt="">
```

##### jpg、png、gif、svg和webp图片格式区别

1. `jpg`：有损压缩格式图片，是位图，通常用于产品、风景、人物等色彩丰富的图片。
2. `png`：无损格式图片，图片画质清晰，通常支持`alpha`通道透明，通常用于小图标、或者产品图片。
3. `gif`：256色，显示的色域很窄，所以一般用于图标，或者颜色简单的图片，其次它可以做动图。
4. `svg`：svg是矢量图片，同事支持图片动画。
5. `webp`：这是谷歌发现的一款优于`jpg`的图片格式，`chrome`可以预览。



##### alt 图片描述

当图片不能显示的时候，会出现友好提示性的文字，其次它可以方便搜索引擎，识别图片的名称，方便收录。

```html
<img src="3.jpg" width="100" alt="背影">
```

经典面试题：

`title`和`alt`的区别是什么？

答： `title`是划过的时候弹出小提示，而`alt`是图片不能显示的时候给出的描述文字。

`href` 和 `src`的区别是什么？

答：

`href` 表示超文本引用（`hypertext reference`），在 `link`和`a` 等元素上使用
`src` 表示来源地址，在 `img`、`script`、`iframe` 等元素上

`src` 的内容，是页面必不可少的一部分，是引入。

`href` 的内容，是与该页面有关联，是引用。

区别就是，引入和引用。


##### align 对齐

1. `left` 水平左对齐
2. `right` 水平右对齐
3. `baseline` 垂直基线对齐
4. `bottom` 垂直底部对齐
5. `top` 垂直顶部对齐
6. `middle` 垂直居中
7. `absmiddle` 绝对垂直居中

查看浏览器兼容性网站

```
https://www.caniuse.com/
```

##### hspace 图片的横向距离

```html
<img src="images/1.png" hspace="20"> 
```
图片左右都会有间距

##### vspace 图片的纵向距离

```html
<img src="images/1.png" vspace="20"> 
```
图片上下都会有间距

##### object-fit 图像填充效果

1. `fill`：默认的，定义了宽高，图片可能会挤压变形
2. `contain`： 等比例缩放，会出现露底的情况。
3. `cover`：封面模式，保证完整填充，但是可能会图片四周会裁切
4. `none`：图片不会变形，但是会被裁剪
5. `scale-down`：最终呈现的是尺寸比较小的那个。

#### width宽度，height 高度

1. 只设置了`width`，`height`自适应
2. 只设置了`height`，`width`自适应

如果是像素，则直接填数字即可，还支持百分百（%）单位

```html
<img src="images/1.png" width="50%" height="100">
```

`auto`：可以设置宽和高为自动，如下

```html
<img src="images/1.png" width="50%" height="auto">
```

#### min-width, max-width，min-height，max-height

- `min-width` 最小宽度
- `max-width` 最大宽度
- `min-height` 最小高度
- `max-height` 最大高度

图片自适应写法，当图片能完全显示，则完全显示，不能完全显示，则缩小。

```html
<img 
src="video1.jpg"
style="max-width: 100%;height: auto;"
>
```

> 注意： `max-width`中的`100%`指的是图片的实际宽度

> 这里没有定义 `width`，没有定义宽度，就是图片的实际宽度

> `height: auto` 是指图片根据宽度自适应

##### border 图像边框

```html
<img 
src="FruitStore.jpg"
width="200"
height="200"
border="1"
>
```

> 注意：当你给图片加上超级链接时，再`IE11-`以下浏览器会出现蓝色的边框，解决方案就是给`img`边框设置为`0`即可

```html
 <a href="#">
  <img 
  src="3.jpg"
  width="50"
  border="0"
  >
 </a> 
 ```

#### 图像映射

## 空元素

### 空元素有那些？

`<br>`、`<hr>`

## html5书写规范

1. 一律使用小写字母

```html
<!-- 不推荐 -->
<P>段落</P>

<!-- 推荐 -->
<p>段落</p>
```

2. 属性使用双引号

```html
<!-- 不推荐 -->
<h1 align='center'>标题</h1>
<h1 align=center>标题</h1>

<!-- 推荐 -->
<h1 align="center">标题</h1>
```

3. 单标签不使用`/`

```html
<!-- 不推荐 -->
<br />

<!-- 推荐 -->
<br>
```

## 文本格式化

### 加粗 b strong

```html
<b>加粗</b>
<strong>加粗</strong>
```

`b` 加粗没有语义，只是加粗效果
`strong` 有语义，表示强调

### 斜体 i em

```html
<i>斜体</i>
<em>斜体</em>
```

`i` 斜体没有语义，只是斜体效果
`em` 有语义，表示强调

### 中划线 s del

```html
<s>无用的文本</s>
<del>被删除的文本</del>
```

### 下划线 u ins

```html
<u>下划线</u>
<ins>插入文本</ins>
```
### 上标 sup

```html
x<sup>2</sup>
```

### 下标 sub

```html
o<sub>2</sub>
```

### 高亮 mark

```html
这些<mark>HTML</mark>标签被称为格式化标签
```

### 代码 code

<code>var a = 10;</code>

### 小号文本 small 

```html
<h2>
大标题 <small>副标题</small>
</h2>
```

### 大号文本 big 

```html
<h2>
英文标题 <big>中文标题</big>
</h2>
```

### 引用文本 q

```html
<q>既然求了雨，就要承受泥泞！</q>
```

### 键盘输入 kbd

```html
<kbd>键盘输入</kbd>
```

#### 面试题：`b strong` 加粗 和 `i em` 斜体 它们之间的区别是?

`b` 无语义，仅表示加粗而已。
`strong` 有语义，仅表示强调。

`i` 无语义，仅表示斜体而已。
`em` 有语义，仅表示强调。


### pre 预格式文本 

`pre` 它可以保留 缩进、换行、空格、制表符等效果，通常用于显示**多行源代码**。

```html
<pre>
&lt;ul&gt;
  &lt;li&gt;导航&lt;/li&gt;
  &lt;li&gt;导航&lt;/li&gt;
&lt;/ul&gt;
</pre>
```

## 块级标签和行级标签

### block 什么是块级标签？

1. 独占一行
2. 可以设置宽高边框背景颜色等

具有代表性的标签有 `div`、`h1-h6`、`p`、`ul`、`li`、`headr` 等

### inline 什么是行级标签？

1. 可以并列显示在一起
2. 宽度和高度是根据内容决定的

具有代表性的标签有 `a`、`i`、`u`、`em`、`b`、`code`、`s`、`span`、`mark`等

### inline-block 什么是行块级标签？

1. 可以并列显示在一起
2. 也有具体的宽高边框等块级属性

具有代表性的标签有 `img`、`iframe`、`canvas`、`svg`、`video`、`textarea`、`input`等。

## 头部head

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>江西思诚科技有限公司</title>
  <meta name="keywords" content="网站关键，多个关键字用英文逗号分割">
  <meta name="description" content="网站描述一般50-60个字">
</head>
```

- `<meta charset="UTF-8">`：编码
- `<meta name="viewport"`：视口，控制缩放比例
- `<title>江西思诚科技有限公司</title>`：页面标题
- `<meta name="keywords"`：关键字
- `<meta name="description"`:：描述

什么是`SEO`中`TDK`是指什么？有什么意义？

1. `T`表示`title`标签中标题设置
2. `D`表示`<meta name="description"`设置
3. `K`表示`<meta name="keywords"`设置

### base 元素

`<base>` 标签描述了基本的链接地址/链接目标，该标签作为`HTML`文档中所有的链接标签的默认链接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <base href="http://www.baidu.com/" target="_blank">
</head>
<body>

<a href="about.html">关于我们</a>
<a href="home.html">首页</a>

</body>
</html>
```

### link 元素

语法
```html
<link rel="stylesheet" href="样式文件.css">
```

示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <base href="http://www.baidu.com/" target="_blank">
</head>
<body>
```

> 特别注意：`<base>`会影响`link`中`href`，所以一定把`base`放在`meta`最后面


### style 元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1{
      color: red;
    }
  </style>
</head>
<body>
  <h1>标题1</h1>
</body>
</html>
```

### refresh 页面刷新

页面根据给定的秒数定时刷新

```html
<meta http-equiv="refresh" content="5">
```
`content`：填入的是秒，5表示5秒。

示例

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <meta http-equiv="refresh" content="5">
  <meta name="author" content="龚贤">
</head>
<body>
<h1>提交成功！</h1>
</body>
```

### 地址栏显示小图标

```html
<link rel="shortcut icon" href="图标.ico">
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="shortcut icon" href="images/seecen.ico">
</head>
```

## 样式

### 超级链接4种状态样式美化

以下分别定义了默认、单击过后、划过、单击一瞬间的状态效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 默认 */
    a{
      color: blueviolet;
      text-decoration: none;
    }
    /* 单击过后 */
    a:visited{
      color: yellow;
    }
    /* 划过 */
    a:hover{
      color:brown;
    }
    /* 单击一瞬间 */
    a:active{
      color: white;
    }
  </style>
</head>
<body>

<a href="#">链接</a>

</body>
</html>
````

### 行内样式

```html
<span style="background-color: red;color: white;">文本</span>
```

### 两端对齐效果

> `IE`和`Firefox`浏览器不支持`text-align: justify;`

```html
<style>
  p{
    width: 400px;
  }
  .dq{
    text-align: justify;
  }
</style>

<p>创立于1992年的菲姿时尚集团是集研发、生产、品牌管理、服务于一体的大型现代化品牌企业。28年来集团始终坚持国际化的品牌经营理念，现已发展成为一家多品牌、集团化运作的知名时尚品牌企业。
</p>

<hr>

<p class="dq">创立于1992年的菲姿时尚集团是集研发、生产、品牌管理、服务于一体的大型现代化品牌企业。28年来集团始终坚持国际化的品牌经营理念，现已发展成为一家多品牌、集团化运作的知名时尚品牌企业。
</p>
```

## table 表格

`table` 是一套组合标签，表格有表格头部`thead`、表格身体`tbody`、表格脚部`tfoot`，而表格头部又表格表头`th`，表格身体tbody 又有表格单元格`td`，具体如下。

```html
 <table border="1">
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10001</td>
        <td>张三</td>
        <td>60</td>
      </tr>
      <tr>
        <td>10002</td>
        <td>李四</td>
        <td>70</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td>总分</td>
        <td>130</td>
      </tr>
    </tfoot>
  </table>
```

以上代码可以通过快写的方式实现

```html
table[border="1"]>(thead>tr>th*3{字段$})+(tbody>tr>td*3{数据$})+(tfoot>tr>td*3{数据$})
```

### 表格属性  2020-7-10

#### border 边框

```html
<table border="1">
```

#### bgcolor 背景颜色

```html
<table border="1" bgcolor="blue">
```

#### align 对齐

1. `left`：左对齐
2. `center`：居中对齐
3. `right`：右对齐

#### width 宽度

单位仅支持百分百%和像素(可以不写`px`)

```html
<table widt="100">
<table widt="100%">
```

#### height 高度

需要注意表格的高度是作用于 `tbody`上的

```html
<table height="200">
```

#### cellpadding 字段th 和 单元格td的内填充距离

```html
<table cellpadding="10">
```
`th`和`td`四周会填充`10px`

#### cellspacing 字段th 和 单元格td的外间离

```html
<table cellspacing="10">
```
`th`和`td`四周外部间距`10px`

### 表格标签

1. `table` 表格容器
2. `thead` 表格表头
3. `tr` 表格行
4. `th` 表格字段，主要表现为加粗、居中
5. `tbody` 表格主体
6. `td` 表格单元格
7. `tfoot` 表格脚部
8. `caption` 表格标题，主要表现为表格上方居中显示
9. `colgroup` 表格列组的定义
10. `col` 表格列的定义


表格表头固定实例

```html
 
  <table border="1" cellspacing="0" cellpadding="10" width="500">
      <colgroup>
        <col width="100">
        <col>
        <col width="100">
      </colgroup>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>分数</th>
      </tr>
  </table>

  <div style="display: inline-block;height: 100px; overflow: auto;">

    <table border="1" cellspacing="0" cellpadding="10" width="500">
        <colgroup>
          <col width="100">
          <col>
          <col width="100">
        </colgroup>
        <tr>
          <td>10001</td>
          <td>张三</td>
          <td>60</td>
        </tr>
        <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>
        <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>
    </table>

  </div>
```

### 表格th、td属性

### align 水平对齐

1. `left` : 左对齐
2. `center`: 居中对齐
3. `right`: 右对齐

```html
<tr>
  <td  align="center">10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```
我们也可以再tr上加上对齐，表示这一行都是应用此对齐

```html
<tr>
  <td>10001</td>
  <td align="center">张三</td>
  <td>60</td>
</tr>

<!-- 整行水平居中 -->

<tr align="center">
  <td>10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```

### valign 垂直对齐

1. `top` : 顶对齐
2. `middle`: 居中对齐
3. `bottom`: 底对齐

```html
<tr>
  <td>10001</td>
  <td valign="top">张三</td>
  <td>60</td>
</tr>

<!-- 整行顶对齐 -->

<tr valign="top">
  <td>10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```
### bgcolor 背景颜色

```html
<tr>
  <td align="center" bgcolor="#ff0000">10001</td>
  <td>张三</td>
  <td>60</td>
</tr>

<!-- 也可以写在tr，表示整行都是居中 着色 -->
<tr align="center" bgcolor="#ff0000">
  <td >10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```

### nowrap 强制不换行

```html
<tr>
  <td nowrap>张三张三张三张三张三张三张三</td>
  <td>张三</td>
  <td>60</td>
</tr>
```
### width 单元格宽度

```html
<tr>
  <td width="200">10001</td>
  <td >张三</td>
  <td>60</td>
</tr>
```

### height 单元格高度

```html
<tr>
  <td >10001</td>
  <td height="500">张三</td>
  <td>60</td>
</tr>
```

> 注意：当存在连续的字母或者数字，那么它是不会换行的，请看下面的代码。

```html
<tr>
  <td>1111111111aaaaaaaaaa11</td>
  <td>张三</td>
  <td>60</td>
</tr>
```

### colspan 合并列

```html
<tr>
  <td>10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
<tr>
  <td colspan="3">合并列</td>
</tr>
```

暂时无数据 示例 

```html
<table border="1" cellspacing="0" cellpadding="10" width="500">
    <tr>
      <th width="100">编号</th>
      <th>姓名</th>
      <th width="100">分数</th>
    </tr>
    <tr>
      <td colspan="3" align="center">暂无数据！</td>
    </tr>
</table>
```

### rowspan 合并行

```html
<tr>
  <td rowspan="2">10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
<tr>
  <td>李四</td>
  <td>70</td>
</tr>
```

同时应用合并列和合并行示例

```html
<table border="1" cellspacing="0" cellpadding="10" width="500">
    <tr>
      <th width="100">编号</th>
      <th>姓名</th>
      <th width="100">分数</th>
    </tr>
    <tr>
      <td rowspan="2">10001</td>
      <td colspan="2">张三</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>60</td>
    </tr>
</table>
```

## HTML 列表

列表分三种情况

1. 有序列表
2. 无序列表
3. 自定义列表

### 有序列表

有序列表默认是数字

```html
<ol>
  <li>本科</li>
  <li>大专</li>
  <li>中专</li>
</ol>
```

#### 有序列表 type 属性

1. `1`：表示数字
2. `A`：大写字母
3. `a`：小写字母
4. `I`: 大写罗马数字
5. `i`：小写罗马数字

```html
<ol type="a">
  <li>本科</li>
  <li>大专</li>
  <li>中专</li>
</ol>
```

#### start 起始位置

```html
<ol type="1" start="50">
  <li>本科</li>
  <li>大专</li>
  <li>中专</li>
</ol>
```
序号从50开始，依次是50,51,52

### HTML无序列表

有序列表默认是实心圆

```html
<ul>
  <li>文本1</li>
  <li>文本2</li>
  <li>文本3</li>
</ul>
```

#### 无序列表 type 属性

1. `disc`：默认值。实心圆。
2. `circle`：空心圆
3. `square`：实心方块
4. `none`：无

### 列表嵌套

多级树形菜单效果

```html
<ul type="none">
  <li>
    一级菜单1
    <ul type="none">
      <li>二级菜单1
        <ul type="none">
          <li>三级菜单1</li>
          <li>三级菜单2</li>
        </ul>
      </li>
      <li>二级菜单2</li>
      <li>二级菜单3</li>
    </ul>
  </li>
  <li>一级菜单2</li>
  <li>一级菜单3</li>
</ul>
```

### 自定义列表

```html
<dl>
  <dt>问题1</dt>
  <dd>答案1</dd>
  <dt>问题2</dt>
  <dd>答案2</dd>
</dl>
```

常用于`faq`类似于问与答。

## HTML 区块

### 区块元素

1. `div`：常用于排版，可以包含很多其他元素，块级元素。
2. `span`：常用于包裹文字，用于修饰文字，行级元素。
3. `h1-h6`：标题1~标题6
4. `p`：段落标签，它可以包裹行级或者行块级标签。
5. `ul ol dl`：列表标签
6. `table`：表格标签

表格布局版式示例

```html

<table border="0" width="800" height="500" cellspacing="0" cellpadding="10">
  <thead>
    <tr bgcolor="#FFA500">
      <th colspan="2">
        <h1>网页的主要标题</h1>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="150" bgcolor="#FFFDCF" valign="top">
        <ul type="none" style="padding-left: 10px;">
          <li>首页</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </td>
      <td bgcolor="#EEEEEE" valign="top">主体内容</td>
    </tr>
  </tbody>
  <tfoot>
    <tr bgcolor="#FFA500">
      <td colspan="2">
        <p align="center">&copy; 版权所有 侵权必究</p>
      </td>
    </tr>
  </tfoot>

</table>
```

## HTML 表单

### form 表单

用于包裹各种表单组件的容器，一个页面可以用多个`form`

```html
<form>
  <input type="text"> <br>
  <input type="password"> <br>
  <button>登录</button>
</form>
```

### form 属性

`form` 块级标签

1. `name` 表单名称，用于后期`js`查找

```html
<form name="myform">
  <input type="text">
</form>
```

2. `action` 表单提交的地址，这个地址通常是后端地址，用于处理收集表单信息。

```html
<form  action="login.php">
  <input type="text"> <br>
  <input type="password"> <br>
  <button>登录</button>
</form>
```

3. `method`：表单提交的方式，主要2种 `GET`和`POST`，默认不写是`GET`。

`GET`：通常用于小型数据收集，数据明文再地址栏上传输，大小不能超过`4kb`。

`POST`：通常用于大型且对安全性有要求的数据提交，理论不限制传输大小，会因为连接超时中断传输。

```html

  <!-- method 主要2种 GET 和 POST -->
  <form method="GET">
    <input name="a" type="text"> <br>
    <input name="b" type="password"> <br>
    <button>登录</button>
  </form>
```

4. `enctype`: 表单传输类型，有`3`种 

`application/x-www-form-urlencoded` 默认的，以字符串的方式传

`multipart/form-data` 以二进制的方式传，一般用于上传大文件。

`text/plain` 纯文本的方式传，小型数据。


### HTML 表单控件（组件）

#### input text 单行文本框

```html
<input type="text" size="30" maxlength="5" autocomplete="off">
```
1. `type`: 类型，`text`表示文本框，显示明文
2. `size`: 字宽，通常决定文本框的宽度，但是它不太准确，我们经常用css来控制宽度
3. `maxlength`: 字符最大能输入的个数
4. `autocomplete`：自动完成，会显示用户输入过的内容，有`2`个值：`on`表示开启 `off`表示关闭
5. `autofocus`：自动获取的焦点，就是光标停留在文本框中
6. `disabled`: 禁用失效的文本框，表现为暗淡些
7. `readonly`：只读的文本框，外观没有什么变化，可以复制，但是不能输入。
8. `value`：是指文本框的默认值，用户输入的值，通常用于收集信息。
9. `placeholder`：输入框提示性文字，注意`IE10-`不支持。

```html
<!-- 当`autocomplete`写在`form`标签上，表示`form`内所有的控件都会关闭自动完成功能 -->
<form name="form" method="POST" autocomplete="off">
```

#### input password 单行密码框

```html
<input type="password" size="30" maxlength="5">
```
1. `type`: 类型，`password`表示文本框，显示密文
2. `size`: 字宽，通常决定文本框的宽度，但是它不太准确，我们经常用css来控制宽度
3. `maxlength`: 字符最大能输入的个数
4. `autofocus`：自动获取的焦点，就是光标停留在文本框中
5. `disabled`: 禁用失效的文本框，表现为暗淡些
6. `readonly`：只读的文本框，外观没有什么变化，可以复制，但是不能输入。
7. `value`：是指文本框的默认值，用户输入的值，通常用于收集信息。
8. `placeholder`：输入框提示性文字，注意`IE10-`不支持。
9. `required`：必填字段

## 2020-7-13

#### 单选框 radio

```html
<input type="radio" value="man"> 男
<input type="radio" value="women"> 女
```

如果需要呈现单选的效果，那么就给一组取相同的名称即可

```html
<input name="gender" type="radio" value="man"> 男
<input name="gender" type="radio" value="women"> 女
```

##### 属性

`type`：类型，为`radio` 单选框

`value`：单选框的值，值可以是任何字符串类型

`disabled`：失效的单选框 

```html
<input name="gender" type="radio" value="boy" disabled>
```

`checked`：默认选中属性

```html
<input name="gender" type="radio" value="boy" checked>
```

`autofocus`：自动获取焦点

#### 复选框 checkbox

```html
<input type="checkbox"> 打球 
<input type="checkbox"> 游泳
```
如果为了表示是复选框一组，那么请取相同的`name`名即可

```html
<input name="hobby" type="checkbox"> 打球 
<input name="hobby" type="checkbox"> 游泳
<input name="hobby" type="checkbox"> 看书
```

##### 属性

`type`：类型，为`checkbox` 复选框

`value`：复选框的值，值可以是任何字符串类型

`disabled`：失效的复选框 

```html
<input name="hobby" type="checkbox" value="boy" disabled>
```

`checked`：默认选中属性

```html
<input name="hobby" type="checkbox" value="看书" checked>
```

`autofocus`：自动获取焦点

##### 标签 label

`label` 是行级标签，要让行级标签换行，可以试用`<br>`强制换行，或者转成块`display:block`

`label`通常用于表单中，表示表单控件字段名，其次通过`label`的`for`属性使得单击标签文字与之相对应的控件自动获取焦点。

```html
<form name="form" method="POST">
  <p>
    <label for="username">用户账户：</label><br>
    <input id="username" type="text" size="10">
  </p>
  <p>
    <label for="password">登录密码：</label><br>
    <input id="password" type="password" size="10">
  </p>
  <button>登录</button>
</form>
```

或者不使用`for`，直接用`label`包裹控件，也可以达到扩大单击范围的效果，代码如下

```html
<label>
  <input name="gender" type="radio" value="boy"> 男
</label>

<label>
<input  name="gender"  type="radio" value="girl"> 女 
</label> 
```

特别注意 `for`不能为空，否则会导致以下代码不能扩大单击范围，所以当用label包裹控件，记得一定要移除`for`属性，否则影响效果。
```html
<label for="">
  <input name="hobby" type="checkbox" > 打球 
</label>
```

##### 按钮 button

按钮分别有`button`双标签按钮和`input`单标签按钮

### button 双标签按钮 （推荐）

```html
<button type="button">普通按钮</button>
<button type="submit">提交按钮</button>
<button type="reset">重置按钮</button>
<button type="image" src="images/btn.png">图像按钮</button>
```

### button 单标签按钮

```html
<input type="button" value="普通按钮">
<input type="submit" value="提交按钮">
<input type="reset" value="重置按钮">
<input type="image" src="images/btn.png" value="图像按钮">

```

> 注意：当不给`button`设置`type`的时候，那么默认它是提交按钮

```html
<form>
  <button>提交按钮</button>
  <button type="submit">提交按钮</button>
</form>
```

> 注意：`submit` 和 `reset` 按钮都是需要和`form`标签相关联的，一定要再`form`内部，不然无效


### 单行下拉列表框 select

单行下拉列表和单选框是两种不同风格的控件，功能是相同

```html
<select>
  <option value="">会员类型</option>
  <option value="1">普通会员</option>
  <option value="2">高级会员</option>
</select>
```

#### 单行下拉列表框 optgroup

```html
<select>
  <option value="">会员类型</option>
  <optgroup label="A组">
    <option value="1">普通会员</option>
    <option value="2">高级会员</option>
  </optgroup>
  <optgroup label="B组">
    <option value="3">钻石会员</option>
    <option value="4">贵宾会员</option>
  </optgroup>
</select>
```

#### 单行下拉列表框 select的属性

`size`：规定下拉列表中可见选项的数目（行数）。

`autofocus`：自动获取焦点

`disabled`：禁用下拉列表框

`multiple`：加上这个表示**多行**下拉列表框

`required`：必填字段

#### 单行下拉列表框 optgroup的属性

`label`：标签名

```html
<select>
  <option value="">会员类型</option>
  <optgroup label="A组">
    <option value="1">普通会员</option>
    <option value="2">高级会员</option>
  </optgroup>
</select>
```

#### 单行下拉列表框 option的属性

`selected`：表示默认选择的成员

`value`：下拉列表框成员的值

`disabled`：某个`option`成员禁用

#### 多行文本框 textarea

```html
<textarea></textarea>
```

#### textarea 的属性

`cols` 宽度（字段）

`rows` 行数

`disabled` 禁用的多行文本框

`readonly` 只读的多行文本框

`placeholder` 提示性文字

`maxlength` 最大输入字符数

> 注意 `textarea` 没有`value`属性，你若要设置默认值，可以直接再`<textarea>默认值</textarea>`内部写入，`textarea`默认值支持保留预处理文本，也就是说支持换行、空格、缩进等。

#### input[type="file"] 文件上传

```html
<input type="file">
```
#### input[type="file"] 的属性

`type`: `type="file"` 上传控件

`accept`：限制选择的类型

```html
<!-- 表示只允许png格式图片 -->
<input type="file" accept="image/png" />

<!-- 表示只允许gif和jpeg格式图片 -->
<input type="file" accept="image/gif, image/jpeg" />

<!-- 表示允许所有的图像文件 -->
<input type="file" accept="image/*" />
```

`multiple`：允许上传多个文件

```html
<input type="file" multiple />
```

`webkitdirectory`：允许上传文件夹

```html
<input type="file" webkitdirectory />
```

### html5 新增表单控件

#### input[type="email"] 邮箱

有语义，在必填的时候会验证邮箱格式

```html
<input type="email" size="10" placeholder="请输入邮箱" required>
```

#### input[type="tel"] 电话

```html
<input type="tel" size="10" placeholder="请输入电话" required>
```

#### input[type="search"] 搜索

```html
<input type="search" placeholder="请输入关键字">
```
它看起来和单行文本框一样，唯独不同是，再右侧有一个`x`，可以清空文本内容。


#### input[type="date"] 日期

```html
<input type="date" placeholder="请选择日期">
```

> 注意事项 日期 `value` 默认选中值 非常严格

> 1. 日期之间必须以英文中横杠分割 例如 `1997-10-07`

> 2. 日期必须双数，错误的`1997-10-7`中7 应该改为`07`

#### input[type="time"] 时间

```html
<input type="time" placeholder="请选择时间" value="09:00">
```

> 注意：时间日期用英文冒号分割，数字必须是双数`09`

#### input[type="color"] 颜色选择器

```html
<!-- color的值value只支持16进制颜色 -->
<input type="color" value="#ff0000">
```

#### input[type="range"] 滑块选择器

```html
<input type="range" min="0" max="1" id="range" step="0.05" value="0">
```

`type`： `type="range"`滑块

`min`: 最小值

`max`：最大值

`value`：默认值

`step`：步进 

`disabled`：失效的

划过调节透明度

```html
<input type="range" min="0" max="1" id="range" step="0.05" value="0">
<div id="box" style="width: 100px;height:100px;background-color:red;opacity:0;"></div>
<script>
  document.querySelector('#range').oninput = function(){
    console.log(this.value);
    document.querySelector('#box').style.opacity=this.value;
  }
</script>
```

#### input[type="number"] 数值输入框

只能输入数字

```html
<input type="number" value="10" min="5" max="100" placeholder="请输入数字">
```

`type`： `type="number"`数字输入框

`min`: 最小值

`max`：最大值

`value`：默认值

`step`：步进


#### datalist 数据列表

```html
<input type="text" placeholder="出发城市" list="citys">
<datalist id="citys">
  <option value="nanchang">南昌</option>
  <option value="guangzhou">广州</option>
  <option value="beijing">北京</option>
</datalist>
```

#### url 地址

```html
<input type="url" placeholder="请输入网址">
```


## iframe 框架 2020-7-14

```html
<iframe src="http://www.baidu.com" width="200" height="200"></iframe>
```

### iframe 的属性

`width`： 宽度（支持像素px和百分百%）

`height`： 高度（支持像素px和百分百%）

`frameborder`：边框（数字）0 表示 无边框

`name`： 命名，主要用于和 超级链接中`target`相关联

`scrolling`：`yes` 出现滚动条 `no` 不出现 `auto` 默认值 显示的下不出现滚动条，显示不下出现滚动条

示例

```html
<table width="100%" height="100%" border="0" cellspacing="0">
  <tr>
    <th width="200" bgcolor="#ccc" valign="top" align="left">
      <ul type="none" >
        <li><a href="home.html" target="main">主页</a></li>
        <li><a href="about.html" target="main">关于</a></li>
      </ul>
    </th>
    <td>
      <iframe name="main" src="home.html" width="100%" height="100%" frameborder="0"></iframe>
    </td>
  </tr>
</table>
```

#### `iframe`的优缺点有那些？

优点:
1. 程序调入静态页面比较方便
2. 页面和程序分离
3. 可实行局部刷新

缺点：

1. 样式/脚本需要额外链入，会增加请求
2. 框架结构有时会让人感到迷惑，滚动条除了会挤占有限的页面空间外会使iframe布局混乱，还会分散访问者的注意力，影响用户体验。
3. 影响搜索引擎优化
4. 移动设备无法完全显示框架，设备兼容性差
5. 阻塞页面加载，影响网页加载速度

### 颜色

#### 16进制颜色

```html
<h1 style="color:#000000">标题</h1>
```

##### 常见的颜色值：

1. 黑色：`#000000`
2. 灰色：`#666666`
3. 红色：`#ff0000`
4. 绿色：`#00ff00`
5. 蓝色：`#0000ff`
6. 橙色：`#ff6600`
7. 白色：`#ffffff`

##### 常见的情景颜色

1. 正文颜色：`#363636`
2. 辅助颜色：`#636363`
3. 标题颜色：`#101010`

##### `16`进制颜色缩写规则

`#ffffff` 可以缩写为`#fff`

`#ff6600` 可以缩写为`#f60`

> 注意：`16`进制颜色不支持透明度

#### rgb 颜色

`IE11` 以下不支持

语法

```
color:rgb(红色0~255,绿色0~255,蓝色0~255)
```

红色、绿色、蓝色它们的取值范围分别是0-255

示例

```html
<h1 style="color:rgb(255,255,255)">标题</h1>
```

##### 常见的rgb颜色

白色：`color:rgb(255,255,255)`

黑色：`color:rgb(0,0,0)`

红色：`color:rgb(255,0,0)`

绿色：`color:rgb(0,255,0)`

蓝色：`color:rgb(0,0,255)`

#### rgba 颜色

支持`alpha`通道透明的`rgb`颜色

语法

`opacity` 和 `rgba`区别？

`opacity` 完全透明，包含背景字体设置边框，`rgba`只是颜色透明

```
color:rgba(红色0~255,绿色0~255,蓝色0~255,透明度0~1)
```

示例

```
<h1 style="color:rgba(255,255,255,0.5)">标题</h1>
```

#### 英文颜色

1. 黑色： `black`
2. 白色：`white`
3. 红色： `red`
4. 绿色：`green`
5. 蓝色： `blue`
6. 橙色： `orange`
7. 黄色： `yellow`
8. 粉色： `pink`
9. 紫色：`purple`
10. 棕色： `brown`
11. 灰色: `gray`


## 字符实体

|  实体名  |  符号   |
| -       |    -    |
| 空格    |   `&nbsp;` |
| `<`    |   `&lt;` |
| `>`    |   `&gt;` |
| `&`    |   `&amp;` |
| `"`    |   `&quot;` |
| `'`    |   `&apos;` |
| 版权    |   `&copy;` |
| 注册    |   `&reg;` |
| `x`    |   `&times;` |


## URL 地址

语法

```html
scheme://host.domain:port/path/filename
```

示例

```html
http://www.baidu.com/company/about.html
```

`scheme`： 协议部分，比如`http://`

`host`：主机部分，通常是`www`

`domain`：域名部分，通常是`baidu.com`

`port`：端口部分，通常是`80`

`path`：路径部分，通常是`/company`

`filename`：文件名部分，通常是`about.html`

## css 基础 

### css语法

```css
选择器 {
  属性名1: 属性值1;
  属性名2: 属性值2;
}
```

例如

```css
p {
  color: red;
  font-size: 18px;
}
```

容易出错点：

- `{` 写成中文的`｛`
- `:` 写成 `=`
- `;` 写成 `,` 或者不写

> 注意：`css`书写都是小写的

### 风格

展开的风格

```css
p {
  color: red;
  font-size: 18px;
}
```

紧凑的风格

```css
p {color: red;font-size: 18px;}
```

### 注释

CSS注释以 "/" 开始, 以 "/" 结束, 实例如下

```css
p {
   /*文字居中*/
  text-align:center;
}
```

### 选择器

#### id选择器

`id`选择器定义的时候前面加一个`#`，后面接上`id`名

`id`命名在同一个页面中，不能重复出现，否则会导致`js`查找元素出问题

```html
<style>
#box{
  color: red;
}
</style>

<div id="box">
  文本
</div>
```
#### class 类选择器

`class`选择器定义的时候前面加一个`.`，后面接上`class`名

`class`选择器在页面中可以复用，也是常用的选择器。

```html
<style>
.box{
  color: red;
}
</style>

<div class="box">
  文本1
</div>

<div class="box">
  文本2
</div>
```
#### tag 标签选择器

直接使用元素标签名作为选择器，注意此操作稍有不慎就会导致污染其他模块

```html
<style>
div{
  color: red;
}
</style>

<div class="box">
  文本1
</div>

<div class="box">
  文本2
</div>
```

#### attr 属性选择器

```html
<style>
[name="username"]{
  color: red;
}
</style>

<input name="username">
```

#### 伪类选择器

```html
<style>
a{
  color:red;
}
a:visited{
  color: blue;
}
a:hover{
  color: orange;
}
a:active{
  color: white;
}
</style>

<a href="#">链接</a>
```

#### 通配符选择器

`*` 表示所有的元素

```css
*{
  margin: 0;
}
/* 所有的元素外边距都设置为0 */

div * {
  color: red;
}
/* div内部所有子元素外边距都设置为0 */

div > * {
  color: red;
}
/* div下所有的直接子元素外边距都设置为0 */
```

### css样式优先级

`!important` > 行内样式 > `id` > (类 = 属性) > 标签 > 默认样式 

```html
<style>
div{
  color: red !important;
}

[name="box"]{
  color: blue;
}

.box{
  color: green;
}

#box{
  color: yellow;
}
</style>

<div id="box" name="box" class="box" style="color: blueviolet;">
  文本
</div>
```

### css层级关系

#### `父 后代` 选择器：

```html
<style>
div p{
  color: red;
}
</style>

<div>
  <address>
    <p>地址：</p>
  </address>
  <p>文本</p>
</div>
```

> `div`内部所有的`p`标签都会被应用红色

#### `父 > 直接子元素` 选择器：

```html
<style>
div > p{
  color: red;
}
</style>
  
<div>
  <address>
    <p>地址：</p>
  </address>
  <p>文本</p>
</div>
```
> `div`内部直接子元素`p`被应用红色

#### `目标元素 + 紧相邻**下一个**同辈元素` 选择器：

```css
<style>
  div+p {
    color: red;
  }
</style>

<div>
  <p>文本1</p>
</div>
<p>文本2</p>
```

#### `目标元素 ~ 紧相邻的下一个**所有的**同辈元素` 选择器：

```html
<style>
  div ~ p {
    color: red;
  }
</style>

<div>
  <p>文本1</p>
</div>
<p>文本2</p>
<p>文本3</p>
<p>文本4</p>
<p>文本5</p>
```

示例

```html
<style>
.star > span{
  color: red;
}
.star > .cur ~ span{
  color: black;
}
</style>

<p class="star">
  <span>★</span>
  <span class="cur">★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
</p>
```

#### `元素.元素` 选择器 、 `元素#元素` 选择器、`元素:元素` 选择器

注意下面代码之间的区别

```css
div.cur{
  color: red;
}
/* <div class="cur"></div> */


div .cur{
  color: red;
}
/* 
<div>
  <span class="cur"></span>
</div>
*/
```

#### `元素1,元素2,元素3`选择器：多个元素公用属性可以抽取出来

```css
h1,p,a{
  color: red;
  font-size: 12px;
}
```


### css选择器的权重值

| 选择器  |  权重值 |
|   -    |    -     |
| 内联样式         |  1000 |
| id               |  100   |
| 类，伪类、属性选择器 |  10 |
| 标签选择器、伪元素选择器 |  1 |
| 配符、子选择器、相邻选择器 |  0 |
| 浏览器默认 |  没有权限 |


### css 引入方式

1. `link`外链`head`引入

```html
<head>
  <link rel="stylesheet" href="路径.css">
</head>
```

2. `style`内部`head`导入

```html
<head>
  <style>
    .box{
      color: red;
    }
  </style>
</head>
```

3. `style`元素行内导入

```html
<div style="color:red;">文本</div>
```

### css文本格式化

1. `color`：文本颜色

```css
span{
  color:red;
}
```
2. `font-size`: 字体大小，浏览器默认大小为`16px`

```css
span{
  /*px % em rem pt*/
  font-size: 80px;
}
```

3. `font-family`：定义字体名，字体的选择是要考虑客户电脑是否存在相关字体

```css
font-family: "宋体"
```
字体支持后备机制

```css
font-family: "宋体","微软雅黑","sans-serif"
```

> 字体若有空格分割，一定要用双引号包裹

`elementUI`团队字体定义方案

```css
 font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```

`antd`团队字体定义方案

```css
font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
```

4. `line-height`：行高，支持像素`px`，还支持倍数（推荐）

```css
p{
  font-size: 20px;
  line-height: 30px;
  line-height: 1.5; /* 1.5倍 和字体大小有关系 */
}

```

5. `font-weight`: `bold`（或者`600`） 加粗，`normal`表示正常，取消加粗。

6. `font-style`: `italic` 倾斜，`normal`表示正常，取消倾斜。

7. `text-decoration`：修饰线，上划线`overline`，中划线`line-through`，下划线`underline`，没有线`none`


8. `text-align`： 左对齐`left` 居中对齐`center` 右对齐`right`  两端对齐`justify` 2020-7-15

9. `text-indent`：文本缩进，通常使用em左单位，也支持像素

10. `text-transform`：文本转换，`capitalize` 首字母大小，`lowercase`全部小写 `uppercase`全部大写，`none`取消转换

11. `white-space`：换行选项 `nowrap`强制不换行，`normal`正常

```html
<!-- 单行溢出省略效果 -->
<style>
  div p{
  background-color: bisque;

  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
</style>

<div>
  <p>涉嫌参与香港理大非法集结 南区区议会主席罗健熙被捕</p>
  <p>美发布新疆供应链商业咨询公告 商务部驳斥</p>
</div>

<!-- 多行溢出省略效果 -->
<style>
div p {
  background-color: bisque;
  width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<p>涉嫌参与香港理大非法集结 南区区议会主席罗健熙被捕美发布新疆供应链商业咨询公告 商务部驳斥</p>
```

12. ` text-shadow`：文字阴影，兼容性：`IE10+` 语法：`text-shadow`: `x`偏移 `y`偏移 阴影模糊度 阴影颜色

```html
<style>
  p{
    text-shadow: 5px 5px 2px rgba(0, 0, 0, .5);
  }
</style>
<p>文本</p>
```

13. `word-break`：`break-all`表示所有单词截断，也就是强制换行

```html
<style>
  p{
    width: 100px;
    background-color: antiquewhite;
    word-break:break-all;
  }
</style>
<p>111aaa1111111111111111111111111111</p>
```

14. `writing-mode`：文本书写顺序，`vertical-rl` 垂直方向自右而左的书写方式。

```html
<style>
  p{
    width: 100px;
  writing-mode:vertical-rl;
  }
</style>

<p>
  好雨知时节<br>
  当春乃发生<br>
</p>
```

15. `letter-spacing`：字符间距，支持是px和em

```html
<style>
  p{
    letter-spacing: 10px;
  }
</style>

<p>好雨知时节</p>
```

16. `vertical-align`：垂直对齐，`top`顶对齐, `middle`居中对齐， `bottom`低对齐

```html
<style>
  p img{
    vertical-align: middle;
  }
</style>

<p>
  <img src="3.jpg" width="100" height="100" alt="">
  <img src="3.jpg" width="100" height="200" alt="">
  <img src="3.jpg" width="100" height="160" alt="">
</p>
```

```html
<!-- 单行水平垂直居中 行高方案 -->
<style>
  p{
    background-color: aquamarine;
    width: 200px;
    height: 200px;
    /* 关键代码 */
    line-height: 200px;
    text-align: center;
  }
</style>

<p>好雨知时节</p>

<!-- 单行或者多行水平垂直居中 table-cell方案 -->
<style>
  p{
    display: table-cell;
    background-color: aquamarine;
    width: 200px;
    height: 200px;
    /* 关键代码 */
    vertical-align: middle;
    text-align: center;
  }
</style>

<p>好雨知时节<br>好雨知时节</p>

```

行块标签之间会有`4px`间隙， 是什么造成的？解决方案是什么？

答：是由元素之间的空格造成的，解决方案有`2`种，第1种：元素之间首尾相连，第`2`种：行块标签父元素设置`font-size:0`

16. `font-variant` 字母大小写 `small-caps` 显示小型大写字母的字体， `normal`正常

17. `font`缩写规则 `font-style` | `font-variant` | `font-weight` | `font-size` | `line-height` | `font-family`

翻译： 斜体|大写字母|加粗|字号/行高|字体名

```html
<style>
p{
  font: italic small-caps bold 20px/1.8 华文行楷;
}
</style>

<p>abcdefg</p>
```

18. `px`、`em`、`rem` 单位之间的区别

`px` 相对长度单位，像素px是相对于显示器屏幕分辨率而言的。
`em`的值并不是固定的,`em`会继承父级元素的字体大小。
`rem` 是相对于根元素`html`字体大小的单位。

19. 超级链接按钮效果

```html
<style>
p{color: red;}
a{
  display: inline-block;
  line-height: 40px;
  background-color:#98bf21;
  text-align: center;
  text-decoration: none;
  color: inherit;/*继承父元素颜色*/
}
a:hover{
  background-color: #7A991A;
}
a:active{
  background-color: #52690b;
}
</style>
<p>
  <a href="#">&nbsp;&nbsp;按钮1&nbsp;&nbsp;</a>
  <a href="#">&nbsp;&nbsp;按钮2&nbsp;&nbsp;</a>
</p>
```

### css 背景

1. `background-color`：背景颜色（16进制、rgb、rgba、英文颜色名）

```html
<style>
.box{
  width: 200px;
  height: 200px;
  /* background-color: red; */
  /* background-color: #ff0000; */
  /* background-color: rgb(255, 0, 0); */
  background-color: rgb(255, 0, 0, .5);
}
</style>
<div class="box"></div>
```

2. `background-image`：定义图像背景，默认是平铺模式

```html
<style>
.box{
  width: 300px;
  height: 300px;
  background-image: url(images/huanguan1.png);
}
</style>
<div class="box"></div>
```

3. `background-repeat`：定义图像如何重复 `repeat` 平铺（默认），`repeat-x`水平填充，`repeat-y`垂直填充， `no-repeat` 不重复

```html
<style>
.box{
  width: 300px;
  height: 300px;
  background-image: url(images/huanguan1.png);
  /* background-repeat: repeat;
  background-repeat: repeat-x;
  background-repeat: repeat-y; */
  background-repeat: no-repeat;
}
</style>
<div class="box"></div>
```

4.`background-position` 图像定位，可以设置图像各个方位的定位 水平方向 `left` 0%，`center` 50%，`right` 100%，垂直方向 `top` 0%，`center` 50%，`bottom` 100%。

```html
<style>
.box{
  width: 300px;
  height: 300px;
  background-color: #ccc;
  background-image: url(images/huanguan1.png);
  background-repeat: no-repeat;

  /* 左上 */
  background-position: left  top; 
  /* 左中 */
  background-position: left center; 
  /* 左下 */
  background-position: left bottom; 

  /* 右上 */
  background-position: right  top; 
  /* 右中 */
  background-position: right center; 
  /* 右下 */
  background-position: right bottom; 

  /* 水平垂直居中 */
  background-position: center  center; 

  /* 根据像素具体值定义 */
  background-position: 20px  30px; 

  /* 根据百分百具体值定义 */
  background-position: 10%  25%; 
}
</style>
<div class="box"></div>
```

5. `background-attachment`：图片固定，`scroll`滚动的（默认），`fixed`固定的。`fixed`定位position宽度是以`body`宽度为参考基准的。

```html
<style>
.banner{
  height: 300px;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-attachment: fixed;
  background-image: url(images/banner.jpg);
}
</style>
<div class="banner"></div>
```

6. `background` 缩写，规则 background: color|image|repeat|fixed|position，翻译是background: 颜色|图像|重复|固定|定位

```html
<style>
.box{
  width: 200px;
  height: 200px;
  /* background-color: aquamarine;
  background-image: url(images/huanguan1.png);
  background-repeat: no-repeat;
  background-position: 50% 50%; */
  background: aquamarine url(images/huanguan1.png) no-repeat fixed 50% 50%;
}
</style>

<div class="box"></div>
```
### CSS 列表

> `ul`默认有左填充`padding-left:40px`，上边距`margin-top:16px`，下边距`margin-bottom:16px`。

`list-style-type`：设置无序列表图标、实心圆`disc`、空心圆`circle`、实心方块`square`，无`none`

```html
<style>
ul{
  list-style-type: circle;
}
</style>

<ul>
  <li>首页</li>
  <li>关于</li>
  <li>联系</li>
</ul>
```

`list-style-image`：定义项目列表的图片

```html
<style>
ul{
  list-style-type: none;
  list-style-image: url(images/arrow1.png);
}
</style>

<ul>
  <li>首页</li>
  <li>关于</li>
  <li>联系</li>
</ul>
```
`list-style-position`：`outside` 默认，`inside`内部的，主要是在`padding-left`里面或者外面。


使用背景图像定义项目列表前的图标示例代码

```html
<style>
  ul{
    list-style-type: none;
    padding-left: 0;
    background-color: #ccc;
  }
  ul li{
    background: url(images/arrow1.png) no-repeat 10px 50%;
    padding-left: 40px;
    line-height: 3;
  }
  </style>
  
  <ul>
    <li>首页</li>
    <li>关于</li>
    <li>联系</li>
  </ul>
</style>
```

### css表格 2020-7-16

#### 用css实现边框1px的表格

`border-collapse:collapse`：表格单元格有双线（明边，暗边），设置`collapse`就是让表格双线合一。

```html
<style>
  table{
    border-collapse: collapse;
  }
  th,td{
    border-bottom: 1px solid red;
  }
</style>
<table>
  <thead>
    <tr>
      <th>编号</th>
      <th>姓名</th>
      <th>学历</th>
      <th>分数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10001</td>
      <td>张三</td>
      <td>本科</td>
      <td>76</td>
    </tr>
    <tr>
      <td>10002</td>
      <td>李四</td>
      <td>本科</td>
      <td>92</td>
    </tr>
    <tr>
      <td>10003</td>
      <td>王二</td>
      <td>大专</td>
      <td>80</td>
    </tr>
  </tbody>
</table>
```

#### css基础表格

```html
<style>
.panel{
  border: 1px solid #ccc;
  /* 四周填充25px */
  padding: 25px;
  /* 圆角效果 */
  border-radius: 4px;
}
table{
  width: 100%;
  /* 收缩表格 */
  border-collapse: collapse;
}
caption{
  font-weight: bold;
}
th,td{
  padding: 15px;
  /* 下边框效果 */
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
</style>
<div class="panel">

  <table>
    <caption>学生成绩表</caption>
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>学历</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10001</td>
        <td>张三</td>
        <td>本科</td>
        <td>76</td>
      </tr>
      <tr>
        <td>10002</td>
        <td>李四</td>
        <td>本科</td>
        <td>92</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>

</div>
```

#### 表格划过效果

```css
tbody tr:hover{
  background-color: #eee;
}
```

```html
<style>
  .panel{
    border: 1px solid #ccc;
    padding: 25px;
    border-radius: 4px;
  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
  caption{
    font-weight: bold;
  }
  th,td{
    padding: 15px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    color: #363636;
    text-align: left;
  }
  tbody tr:hover{
    background-color: #eee;
  }
  </style>

  <div class="panel">
  
    <table>
      <caption>学生成绩表</caption>
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>学历</th>
          <th>分数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10001</td>
          <td>张三</td>
          <td>本科</td>
          <td>76</td>
        </tr>
        <tr>
          <td>10002</td>
          <td>李四</td>
          <td>本科</td>
          <td>92</td>
        </tr>
        <tr>
          <td>10003</td>
          <td>王二</td>
          <td>大专</td>
          <td>80</td>
        </tr>
        <tr>
          <td>10003</td>
          <td>王二</td>
          <td>大专</td>
          <td>80</td>
        </tr>
        <tr>
          <td>10003</td>
          <td>王二</td>
          <td>大专</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>

</div>
```

#### 表格情景颜色

- `active`：当前的
- `danger`：错误的
- `success`：正确的
- `warning`：警告
- `info`：提示

```css
tr.active, td.active{
  background-color: blue;
}
tr.danger, td.danger{
  background-color: red;
}
tr.success, td.success{
  background-color: green;
}
tr.warning, td.warning{
  background-color: orange;
}
tr.info, td.info{
  background-color: gray;
}
```

```html
<style>
.panel{
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 4px;
}
table{
  width: 100%;
  border-collapse: collapse;
}
caption{
  font-weight: bold;
}
th,td{
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
tr.active, td.active{
  background-color: blue;
}
tr.danger, td.danger{
  background-color: red;
}
tr.success, td.success{
  background-color: green;
}
tr.warning, td.warning{
  background-color: orange;
}
tr.info, td.info{
  background-color: gray;
}
</style>
<div class="panel">

  <table>
    <caption>学生成绩表</caption>
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>学历</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr class="active">
        <td>10001</td>
        <td>张三</td>
        <td>本科</td>
        <td>76</td>
      </tr>
      <tr>
        <td class="danger">10002</td>
        <td>李四</td>
        <td>本科</td>
        <td>92</td>
      </tr>
      <tr>
        <td>10003</td>
        <td class="warning">王二</td>
        <td>大专</td>
        <td class="info">80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr class="success">
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>

</div>
```

#### 带条纹的表格效果

`even`偶数的，`odd`奇数

```css
tbody tr:nth-child(even){
  background-color: #eee;
}
```

```html
<style>
.panel{
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 4px;
}
table{
  width: 100%;
  border-collapse: collapse;
}
caption{
  font-weight: bold;
}
th,td{
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
tbody tr:nth-child(even){
  background-color: #eee;
}
</style>
<div class="panel">

  <table>
    <caption>学生成绩表</caption>
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>学历</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10001</td>
        <td>张三</td>
        <td>本科</td>
        <td>76</td>
      </tr>
      <tr>
        <td>10002</td>
        <td>李四</td>
        <td>本科</td>
        <td>92</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>

</div>
```

#### 带边框的表格效果

```css
.border th, .border td{
  border: 1px solid #ccc;
}
```

```html
<style>
.panel{
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 4px;
}
table{
  width: 100%;
  border-collapse: collapse;
}
caption{
  font-weight: bold;
}
th,td{
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
.border th, .border td{
  border: 1px solid #ccc;
}
</style>
<div class="panel">

  <table class="border">
    <caption>学生成绩表</caption>
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>学历</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10001</td>
        <td>张三</td>
        <td>本科</td>
        <td>76</td>
      </tr>
      <tr>
        <td>10002</td>
        <td>李四</td>
        <td>本科</td>
        <td>92</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>

</div>
```

#### 紧缩性表格效果

```css
.condensed th, .condensed td{
  padding: 5px;
}
```

```html
<style>
.panel{
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 4px;
}
table{
  width: 100%;
  border-collapse: collapse;
}
caption{
  font-weight: bold;
}
th,td{
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
.condensed th, .condensed td{
  padding: 5px;
}
</style>
<div class="panel">

  <table class="condensed">
    <caption>学生成绩表</caption>
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>学历</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10001</td>
        <td>张三</td>
        <td>本科</td>
        <td>76</td>
      </tr>
      <tr>
        <td>10002</td>
        <td>李四</td>
        <td>本科</td>
        <td>92</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>王二</td>
        <td>大专</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>

</div>
```

#### 固定表头表格效果

```html
<style>
  .panel{
    border: 1px solid #ccc;
    padding: 25px;
    border-radius: 4px;
  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
  th,td{
    padding: 15px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    color: #363636;
    text-align: left;
  }
  tr.active, td.active{
    background-color: blue;
  }
  tr.danger, td.danger{
    background-color: red;
  }
  tr.success, td.success{
    background-color: green;
  }
  tr.warning, td.warning{
    background-color: orange;
  }
  tr.info, td.info{
    background-color: gray;
  }

  tbody tr:hover{
    background-color: #eee;
  }

  .stripe tbody tr:nth-child(even){
    background-color: antiquewhite;
  }

  .border th, .border td{
    border: 1px solid #ccc;
  }

  .condensed th, .condensed td{
    padding: 5px;
  }

  .thead{
    overflow-y: scroll;
  }
  .thead::-webkit-scrollbar{
    opacity: 0;
  }
  .tbody{
    overflow: auto;
    height: 200px;
  }
</style>

<div class="panel">

  <div class="table">

    <div class="thead">
      <table class="stripe border">
        <colgroup>
          <col width="15%">
          <col>
          <col width="25%">
          <col width="25%">
        </colgroup>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>学历</th>
          <th>分数</th>
        </tr>
      </table>
    </div>

    <div class="tbody">
      <table class="stripe border">
        <colgroup>
          <col width="15%">
          <col>
          <col width="25%">
          <col width="25%">
        </colgroup>
        <tr>
          <td>10001</td>
          <td>张三</td>
          <td>本科</td>
          <td>76</td>
        </tr>
        <tr>
          <td>10002</td>
          <td>李四</td>
          <td>本科</td>
          <td>92</td>
        </tr>
        <tr>
          <td>10003</td>
          <td>王二</td>
          <td>大专</td>
          <td>80</td>
        </tr>
        <tr>
          <td>10003</td>
          <td>王二</td>
          <td>大专</td>
          <td>80</td>
        </tr>
        <tr>
          <td>10003</td>
          <td>王二</td>
          <td>大专</td>
          <td>80</td>
        </tr>
      </table>
    </div>

  </div>

</div>
```

### CSS 盒子模型

#### 盒子模型包含那些css属性？

1. `width`: 宽度

2. `height`： 高度

3. `padding`： 内填充

4. `border`: 边框

5. `margin`：外边距

```html
<style>
.parent{
  background-color: green;
  overflow: hidden;
}

.box{
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 5px solid red;
  margin: 20px;
  background-color: white;
}

</style>

<div class="parent">

  <div class="box">
  文本
  </div>

</div>
```

#### 盒型定义

```css
box-sizing: content-box;
```
有两种盒型：

1. `content-box`：内容盒子，又称标准盒子模型（默认）

2. `border-box`： 边框盒子，又称`IE`盒子模型

#### 标准盒子模型和`IE`盒子模型有什么区别?

盒模型： 内容(`content`)、填充(`padding`)、边界(`margin`)、 边框(`border`)
有两种， `IE` 盒子模型、标准 `W3C` 盒子模型,`IE`的`content`部分包含了 `border` 和 `padding`，盒子模型宽度计算如下：

标准盒子宽度：`width` + `padding` + `border`

`IE`盒子宽度：`width`

```html
<style>

.box1{
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  background-color: red;
}

.box2{
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  background-color: blue;
}
</style>

<div class="box1">标准盒子content-box</div>
<br>
<br>
<div class="box2">IE盒子border-box</div>
```

`border-box` 盒型应用示例：

```html
<style>
.bottom-nav{
  border: 1px solid #ccc;
}
.bottom-nav a{
  box-sizing: border-box;
  display: inline-block;
  width: 25%;
  text-align: center;
  border-right: 1px solid red;
  text-decoration: none;
  color: inherit;
}
.bottom-nav a.active{
  color: red;
}
.bottom-nav a.last{
  border-right: none;
}
.bottom-nav a i{
  font-style: normal;
}
.bottom-nav a p{
  margin: 0;
}
</style>

<div class="bottom-nav">
  <a href="#" class="active">
    <i>☁</i>
    <p>首页</p>
  </a><a href="#">
    <i>☂</i>
    <p>关于</p>
  </a><a href="#">
    <i>❖</i>
    <p>产品</p>
  </a><a href="#" class="last">
    <i>♞</i>
    <p>我的</p>
  </a>
</div>
```

### CSS 边框

1. `border-width`：边框粗细

```css
border-width: 2px;
```

2. `border-style`：边框的风格 `dashed`虚线，`solid`实线,`dotted`点划线，`double`双实线，`groove`凸凹线

```css
border-style: solid;
```

3. `border-color`: 线框的颜色

```css
border-color: red;/*16进制、英文颜色名、rgb、rgba*/
```

4. `border-left`: 左边框线定义

```css
border-left-width: 1px;
border-left-style: solid;
border-left-color: red;

/* 缩写方案 */
border-left: 1px solid #ff0000;
```

5. `border-right`: 右边框线定义

```css
border-right-width: 1px;
border-right-style: solid;
border-right-color: red;

/* 缩写方案 */
border-right: 1px solid #ff0000;
```

6. `border-bottom`: 下边框线定义

```css
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: red;

/* 缩写方案 */
border-bottom: 1px solid #ff0000;
```

7. `border-top`: 上边框线定义

```css
border-top-width: 1px;
border-top-style: solid;
border-top-color: red;

/* 缩写方案 */
border-top: 1px solid #ff0000;
```

8. `border` 四边边框定义

```css
border-top-width: 1px;
border-top-style: solid;
border-top-color: red;

border-right-width: 1px;
border-right-style: solid;
border-right-color: red;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: red;

border-left-width: 1px;
border-left-style: solid;
border-left-color: red;

/* 上面四根线可以缩写为 */
border: 1px solid red;
```

### CSS 轮廓 2020-7-17

轮廓线不占位置，它是边框外面的线，主要用于消除蓝色的外边框线。

```css
.btn{
  outline: none
}
```

```html
<style>

.input{
  outline: none;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 4px;
}
.input:focus{
  border-color: red;
}
</style>

<input type="text" class="input">
```

### margin 外边距


```css
.box{
  margin-right: 20px;
}
```

```html
<style>
  .box{
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: red;
    margin-right: 20px;
  }

</style>

<div class="box"></div>
<div class="box"></div>
```
####  margin定义规则

```css
marign-top: 20px;
marign-right: 20px;
marign-bottom: 20px;
marign-left: 20px;

/* 以上代码可以缩写为 
四周20
*/
margin: 20px;

marign-top: 20px;
marign-right: 10px;
marign-bottom: 20px;
marign-left: 10px;

/* 以上代码可以缩写为 
上下20，左右10
*/
margin: 20px 10px;

marign-top: 17px;
marign-right: 12px;
marign-bottom: 19px;
marign-left: 5px;

/* 以上代码可以缩写为 
margin: 上 右 下 左
*/
margin: 17px 12px 19px 5px;

marign-top: 20px;
marign-right: 10px;
marign-bottom: 19px;
marign-left: 10px;

/* 以上代码可以缩写为 
margin: 上 右 下 */
marign: 20px 10px 19px;
```

> 特别注意：能不用`marin-top`就不用，如果用了解决办法就用`overflow:hidden`

```html
<style>
.parent{
  background-color: green;
  /* 不加这一行，下面的margin-top无效，具体见bfc原理 */
  overflow: hidden;
}
.box{
  width: 100px;
  height: 100px;
  background-color: red;
  margin-top: 30px;
}

</style>

<div class="parent">

<div class="box"></div>

</div>
```

#### auto 自动

`margin: auto` 属性通常用于居的中块

```html
<style>
.box{
  width: 50px;
  height: 50px;
  background-color: red;
  margin-left: auto;
  margin-right: auto;
}
</style>
<div class="box"></div>
```

> 如果子元素是行块元素`inline-block`，那么用`margin:auto`，无法居中，可以在父元素上使用`text-align:center`

```html
<style>
.parent{
  width: 500px;
  height: 200px;
  background-color: grey;
  text-align: center;
}
.box{
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: red;
}

</style>

<div class="parent">
  <div class="box"></div>
</div>
```

### padding 内填充

```css
.box{
  padding-right: 20px;
}
```

```html
<style>
  .box{
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: red;
    padding-right: 20px;
  }

</style>

<div class="box"></div>
<div class="box"></div>
```
####  padding定义规则

```css
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;

/* 以上代码可以缩写为 
四周20
*/
padding: 20px;

padding-top: 20px;
padding-right: 10px;
padding-bottom: 20px;
padding-left: 10px;

/* 以上代码可以缩写为 
上下20，左右10
*/
padding: 20px 10px;

padding-top: 17px;
padding-right: 12px;
padding-bottom: 19px;
padding-left: 5px;

/* 以上代码可以缩写为 
padding: 上 右 下 左
*/
padding: 17px 12px 19px 5px;

padding-top: 20px;
padding-right: 10px;
padding-bottom: 19px;
padding-left: 10px;

/* 以上代码可以缩写为 
padding: 上 右 下 */
padding: 20px 10px 19px;
```

> 注意：因为浏览器默认盒型是`content-box`，原本所有的元素可以并列，但是因为你加了`padding`，导致宽度整体增加，所以换行，解决方法将盒型改为`border-box`（`IE8+`）。

## CSS 尺寸

```css
.box{
  width: 100px;
  height: 200px;
}
.box{
  width: 100%;
  height: 200px;
}
```

如果要得到可视页面高度，我们需要从`html`根元素一直往下继承

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>铺满整个屏幕</title> 
<style>
html {height:100%;}
body {height:100%;margin: 0;}
.box{
  height: 100%;
  background-color: red;
}
</style>
</head>

<body>

<div class="box">
  铺满整个屏幕
</div>

</body>
</html>
```

注意高度需要一级一级往下传递

```html
<style>
.box1{
  width: 500px;
  height: 500px;
  background-color: aqua;
}
.box2{
 width: 100%;
 height: 100%; 
}
.box3{
  width: 50%;
  height: 100%;
  background-color: blueviolet;
}

</style>
<div class="box1">

  <div class="box2">
    <div class="box3"></div>
  </div>
  
</div>
```

可继承的属性有`color`、`font-family`、`font-size`、`text-decoration`、`text-align`、`font-weight`、`line-height`、`font-style`等

不可继承的属性有`padding`、`margin`、`border`、`outline`、`width`、`height`、`position`、`float`

`min-width`：最小宽度

`min-height`：最小高度

`max-width`：最大宽度

`max-height`：最大高度

```html
<style>
.box{
  min-width: 100px;
  min-height: 100px;
  background-color: red;
}
</style>

<div class="box"></div>
```

> 注意： `margin`若设置百分比，那么它是相对于父元素的宽度而言进行换算的。

```html
<style>
.box{
  width: 800px;
  height: 600px;
  background-color: red;
  overflow: hidden;
}
.box div{
  width: 300px;
  height: 200px;
  background-color: green;
  margin-bottom: 50%;
}
</style>

<div class="box">
  <div></div>
  <div></div>
</div>
```

### CSS Display(显示)

####  `display` 有那些值？

1. `none`：隐藏元素

2. `block`：显示为块级

3. `inline-block`: 显示为行块

4. `inline`：显示为行级

5. `table`: 显示为表格

6. `table-row`：显示为表格行

7. `table-cell`：显示表格单元格

8. `list-item`: 显示为项目列表

> 特别要注意表格`tr`是`display: table-row`，很容易使用`display:block`导致布局变化。

```html
<style>
  table{
    border-collapse: collapse;
  }
  th,td{
    border: 1px solid #ccc;
    padding: 10px;
  }

  tbody tr{
    display: none;
  }
  tbody tr.show{
    display: table-row;
  }

</style>

<table>
  <thead>
  <tr>
    <th>编号</th>
    <th>姓名</th>
  </tr>
</thead>
  <tbody>
    <tr class="show">
      <td>10001</td>
      <td>张三</td>
    </tr>
    <tr class="show">
      <td>10002</td>
      <td>李四</td>
    </tr>
  </tbody>
</table>
```

#### `display:none`和`visibility:hidden`和`opacity:0` 的区别？

`display: none`会使元素脱离文档流,不占据原来的空间,会引起页面的重排。

`visibility: hidden`和`opacity: 0` 虽然会使元素不可见,但是元素仍然占据原来的位置,不会脱离文档流

`display: none` 和 `opacity: 0` 都不能触发事件

`opacity: 0` 可以触发事件

### 有那些办法可以隐藏元素

1. `display:none`

2. 元素上加`hidden`
```html
<div class="box" hidden>文本</div>
```

3. 不透明度设置0

```html
<style>
.box{
  opacity: 0;
}
</style>
<div class="box">文本</div>
```

4. `visibility`设置`hidden`

```html
<style>
.box{
  visibility: hidden;
}
</style>
<div class="box">文本</div>
```

5. `font-size:0`

6. `overflow:hidden`

```html
<style>
.box{
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
<div class="box">文本</div>
```

7. `text-indent: -9999em`通过缩进让它跑出界面之外

8. `transform: scale(0)`缩小比例

9. `position:absolute` 设置`left`跑出界面

```html
<style>
.box{
  position: absolute;
  left: -9999em;
}
</style>
<div class="box">文本</div>
```

10. `clip: rect(0,0,0,0)`裁切为看不见

```html
<style>
.box{
  position: absolute;
  clip: rect(0,0,0,0);
}
</style>
<div class="box">文本</div>
```

### Position(定位)

`position` 属性的五个值

1. `static`：静态定位（默认）

通常用于清除或者覆盖掉其他的定位，类似于`normal`功能

2. `relative`：相对定位

相对定位再文档流中，占位置，会跟随页面滚动，有top、right、bottom、left控制定位, z-index控制层级，越大越越靠上面

相对定位的坐标参考点，始终是相对于父辈元素最近的定位，如果父辈元素一直没有定位，那么默认就是相对于body

3. `fixed`：固定定位

固定于页面中，不会跟随页面滚动

固定定位始终是相对于页面左上角的定位，也就是相对于`body`的定位

脱离文档流，不占位置

4. `absolute`：绝对定位

会跟随页面滚动

脱离文档流

绝对定位坐标参考点是相对于父元素最近的定位，如果父元素没有任何定位，那么以`body`为参考点

5. `sticky`: 粘性定位 2020-7-20

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>粘性布局</title>
</head>
<body>
<style>
body{
  margin: 0;
}
.banner{
  height: 150px;
  background-color: #6e6e6e;
}
.nav{
  position: sticky;
  background-color: orange;
  padding: 15px 20px;
  top: 0;
  left: 0;
}
.nav a{
  text-decoration: none;
  color: inherit;
}
</style>
<div class="banner">

</div>

<div class="nav">
  <a>首页</a> | <a >关于我们</a>
</div>

<div style="height: 3000px;"></div>

</body>
</html>
```

`sticky` 特性（坑）：

1.sticky不会触发`BFC`，
2.`z-index`无效，
3.当父元素的`height：100%`时，页面滑动到一定高度之后sticky属性会失效。
4.父元素不能有`overflow:hidden`或者`overflow:auto`属性。
5.父元素高度不能低于`sticky`高度，必须指定`top`、`bottom`、`left`、`right`4个值之一。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      margin: 0;
    }
    .banner{
      height: 300px;
      background-color: #5E4485;
    }
    .main{
      width: 1170px;
      height: 3000px;
      padding-top: 60px;
      margin-left: auto;
      margin-right: auto;
      background-color: #ccc;
    }
    .main .content{
      float: left;
      width: 850px;
      min-height: 2000px;
      background-color: bisque;
    }
    .main .raside{
      position: sticky;
      top: 0;
      float: right;
      width: 220px;
      min-height: 400px;
      background-color: blueviolet;
 
    }
  </style>
</head>
<body>
  
  <div class="banner">
    横幅
  </div>

  <div class="main">

    <div class="content">主题</div>

    <div class="raside">右侧边栏</div>

  </div>

</body>
</html>
```

###  CSS Float(浮动)

浮动会导致高度塌陷，要想找回高度，需要清除浮动

#### float属性

1. `float:left`：浮左
2. `float:right`：浮右
3. `float:none`：不要浮动

#### 清除浮动有几种方式？

1. 在浮动元素的父元素上加`overflow:hidden`（推荐），优点：简单直接，缺点：会溢出隐藏，如果出现下拉或弹层的情况会出现问题。

2. 在父元素下加子元素，这个子元素必须是块级，然后设置它的样式`clear: both`，可清除浮动。优点：不会裁切，缺点：要多加一个空元素。

3. `after`伪元素清除浮动（万能清除浮动），优点：兼容性好，不会溢出隐藏，不用额外加元素，缺点：代码稍微多些。

```html
<style>
/* 万能清除浮动 */
.box::after{
  display: block;
  content: " ";
  clear: both;
  font-size: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
.box p{
  margin: 0;
  float: left;
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>

<div class="box">
  <p>一</p>
  <p>二</p>
</div>
```

4. 使用`before`和`after`双伪元素清除浮动

```html
<style>
.box{
  background-color: red;
  width: 500px;
}

/* 伪元素 */
.box::before,
.box::after{
  display: table;
  content: " ";
}
.box::after{
  clear: both;
}

.box p{
  margin: 0;
  float: left;
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}

</style>

<div class="box">
  <p>一</p>
  <p>二</p>
</div>
```

> `input` `button` `select` `textarea` 等表单控件不会继承字体、字体的颜色、字体的大小

## html5 教程

### html5新增了那些特性？

1. 新元素

2. 新属性

3. 完全支持 `CSS3`

4. `Video` 和 `Audio`

5. `2D`/`3D` 制图

6. 本地存储

7. 本地 `SQL` 数据

8. `Web` 应用


### html5新增了那些标签？

1. `header` 头部

```html
<header></header>
```

2. `footer` 脚部
```html
<footer></footer>
```
3. `nav` 导航
```html
<nav></nav>
```
4. `aside` 侧边栏

```html
<aside></aside>
```

5. `summary` 摘要

```html
<summary></summary>
```

6. `section` 部分区块

```html
<section></section>
```

7. `figure` 图片框

```html
<figure></figure>
```

8. `article` 文章

```html
<article></article>
```

9. `canvas 和 svg` 画板

```html
<canvas></canvas>
<svg></svg>
```

10. `video和audio` 视频

```html
<video></video>
<audio></audio>
```

11. `details` 细节详情

```html
<details></details>
```

### HTML5 浏览器支持

> `IE6`、`IE7`、`IE8`不支持新标签`header`、`footer`

> `IE6`、`IE7`、`IE8`不支持`box-shadow` 阴影

`IE9` 支持部分`html5`特性，`IE9`不支持那些`html5`特性：

1. 不支持`text-shadow` 文字阴影

### canvas 绘图

`canvas` 只是一个画板，需要你用`js`代码在上面绘图，它的应用是比如做图表（折线图、饼图、柱形图）、电子黑板等

`canvas`可以做压缩图片功能


```html
<style>
#mywork{
  width: 500px;
  height: 300px;
  background-color: black;
}

</style>

<canvas id="mywork" ></canvas>

<script>
var mywork = document.getElementById('mywork');
var ctx = mywork.getContext('2d');
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
</script>
```

### SVG 绘图

位图和矢量图区别，位图越放大越模糊，矢量图越放大越清晰。

#### svg特点

1. `svg`是矢量图

2. `svg`可以绘制矢量图形，比如做小图标，还支持多色

3. 使用 `XML` 格式定义图形

4. `SVG` 是万维网联盟的标准

#### SVG优势

与其他图像格式相比（比如 `JPEG` 和 `GIF`），使用 `SVG` 的优势在于：

1. `SVG` 图像可通过文本编辑器来创建和修改

2. `SVG` 图像可被搜索、索引、脚本化或压缩

3. `SVG` 图像可在任何的分辨率下被高质量地打印

#### 浏览器支持

`Internet Explorer 9+`, `Firefox`, `Opera`, `Chrome`, 和 Safari` 支持内联`SVG`。


`html`中使用`svg`绘制矩形

```html
<body>
<svg 
xmlns="http://www.w3.org/2000/svg" 
version="1.1" 
width="500" 
height="300" 
style="background-color: aquamarine;"
>
  <rect 
  x="20"
  y="30"
  width="300"
  height="100"
  fill="red"
  stroke-width="10"
  stroke-dasharray="5"
  stroke="black"
   />
</svg>
</body>
```

1. `xmlns` 文档声明

2. `<rect />` 绘制一个矩形

3. `x`矩形的`x`坐标

4. `y`矩形的`y`坐标

5. `width` 矩形宽度

6. `height` 矩形高度

7. `fill` 填充颜色

8. `stroke` 边框颜色

9. `stroke-width` 边框粗细

10. `stroke-dasharray` 边线间距


`html`中使用`svg`绘制圆形

```html
<svg 
xmlns="http://www.w3.org/2000/svg" 
version="1.1" 
width="500" 
height="300" 
style="background-color: aquamarine;"
>
  <circle cx="100" cy="100" r="60" fill="none" stroke="orange" stroke-width="3" />
  <circle cx="170" cy="100" r="60" fill="none" stroke="orange" stroke-width="3" />

</svg>
```

1. `cx` 圆心`x`坐标

2. `cy` 圆心`y`坐标

3. `r` 圆半径

4. `fill` 填充，`none`表示去掉背景色


`html`中使用`svg`绘制直线

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="0" y1="0" x2="200" y2="200" stroke="red" stroke-width="2" />
</svg>
```

1. `x1` 起始点`x`坐标

2. `y1` 结束点`y`坐标

3. `x2` 起始点`x`坐标 

4. `y2` 结束点`y`坐标


### 使用ai软件制作图标并上传到iconfont步骤

1. 打开ai软件，新建画布，画布尺寸`16px` * `16px`，分辨率`72px`，颜色模式`rgb`

2. 然后在画布中央绘制一个图形，比如绘制一个五角星，拖放到合适大小，水平垂直居中。

3. 确认图形合适后，选择对象 》路径 》 轮廓化描边

4. 单击 文件 》 存储为 》 保存类型为`svg`格式存储

5. 打开`iconfont.cn`网站，在资源管理 》 我的项目中 》 新建项目

6. 在项目中，选择上传图标至项目，然后你可以将图标拖拽上传到项目中。

### 使用iconfont字体图标步骤

1. 我们可以自己上传图标（自己的绘制的）或者使用第三方图标

2. 图标选好后，加入到你的项目中

3. 然后选择 我的项目 中 有一个 查看在线链接 按钮

4. 选择`font class` 单击生成链接

5. 拷贝字体图标链接

6. 回到自己的项目中，将图标地址样式链接到项目中

```html
<head>
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_1971438_za53kb0dyj.css">
</head>
```

7. iconfont 图标使用

```html
<button>
  <i class="iconfont iconadd-circle"></i> 添加
</button>
<i class="iconfont iconashbin"></i>
<i class="iconfont iconcamera"></i>
```

#### SVG 与 Canvas两者间的区别

1. `SVG` 是一种使用 `XML` 描述 `2D` 图形的语言。
2. `Canvas` 通过 `JavaScript` 来绘制 `2D` 图形。
3. `SVG` 基于 `XML`，支持`js`事件处理器
4. 在 `SVG` 中，如果 `SVG` 对象的属性发生变化，那么浏览器能够自动重现图形
5. `Canvas` 是逐像素进行渲染的，一旦图形被绘制完成，它就不会继续得到浏览器的关注。


### video 标签

`Internet Explorer 9+`

`Internet Explorer 8` 或者更早的`IE`版本不支持 `<video>` 元素

#### HTML5 (视频)

```html
<video width="320" height="240" src="videos/1.mp4" controls autoplay muted></video>
```

1. `src`视频播放地址

2. `controls`播放控件

3. `autoplay` 自动播放

4. `muted` 静音

> 注意：谷歌浏览器为了用户体验，只有禁音的情况下才允许自动播放视频


#### html5 语义化标签

无语义

```html
<div class="container">

  <div class="header">
    <div class="banner">横幅</div>
    <div class="nav">主导航</div>
  </div>

  <div class="main">
    <div class="section">功能块</div>
    <div class="article">文章块</div>
    <div class="aside">侧边栏</div>
  </div>

  <div class="footer">
    <p class="copyright">版本</p>
  </div>

</div>
```

有语义

```html
<div class="container">

  <header>
    <div class="banner">横幅</div>
    <nav>主导航</nav>
  </header>

  <main>
    <section>功能块</section>
    <article>文章块</article>
    <aside>侧边栏</aside>
  </main>

  <footer>
    <p class="copyright">版本</p>
  </footer>

</div>
```

### css3 样式

#### border-radius 圆角

```css
.box{
  border-radius: 5px;/*四周 都是 5px*/
  border-radius: 20px 15px 8px 12px; /*上右下左*/
  border-radius: 30px 20px; /* 上 30px 右20px 下30px 左20px */
  border-top-left-radius: 30px; /*上左*/
  border-top-right-radius: 30; /*上右*/
  border-bottom-left-radius: 30; /*下左*/
  border-bottom-right-radius: 30; /*下右*/
}
```
> 圆角最大设置值不超过高度的一半

如何利用圆角绘制一个圆？

```html
<style>
 .box{
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
  /* border-radius: 50px; */
 } 
</style>

<div class="box"></div>
```

#### box-shadow 阴影

语法

```css
.box{
  box-shadow: [inset内阴影]  x偏移 y偏移 模糊度 [阴影尺寸] 阴影颜色
}
```

> 注意：默认阴影是往外的，你也可以加上inset 实现内阴影

实例

```html
<style>
  html,body{
    background-color: #eee;
  }
 .box{
   position: fixed;
   left: 50%;
   top: 50%;
   width: 340px;
   height: 400px;
   transform: translate(-50%,-50%);
   background-color: white;
   border-radius: 4px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
 } 
</style>

<div class="box">

</div>
```

模仿`bootstrap4`文本框效果

```html
<style>
*,
*::before,
*::after{
  box-sizing: border-box;
}

.form-control{
  padding: 0 12px;
  min-width: 300px;
  height: 38px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: inherit;
  outline: none;
  font-size: 16px;
  color: #495057;
  transition: all .3s ease;
}
.form-control:focus{
  border-color: #80bdff;
  box-shadow: 0 0 0 3px rgba(0,123,255,.25);
}
</style>

<input type="text" class="form-control">
```

#### css3 背景

##### background-image 多图背景

`CSS3`中可以通过`background-image`属性添加背景图片。
不同的背景图像和图像用逗号隔开，所有的图片中显示在**最顶端的为第一张**。

```html
  <style>
    .box{
      width: 189px;
      height: 59px;

      background-color: #fafafa;
      background-image: url(images/189_nav_1.png),url(images/189_nav_2.png);
      background-position: 10px 50%,170px 50%;
      background-repeat: no-repeat, no-repeat;
      
      /* background: url(images/189_nav_1.png) no-repeat 10px 50%,
      #fafafa url(images/189_nav_2.png) no-repeat 170px 50%; */

      border-bottom: 1px solid #e8e8e8;
    }

    .box:hover{
      background-image: url(images/189_nav_1.png), none;
      background-color: #fff;
    }
  </style>


  <div class="box">

  </div>
```

#### background-size 背景图像尺寸

语法
```css
background-size: 宽 高;
background-size: cover;
background-size: contain;
```

1. 设置宽和高

```css
.box{
    background: url(images/leaf.png) no-repeat 50% 50%;
    background-size: 100px 200px;
    /* background-size: 100% auto;
    background-size: auto 100%; */
}
```

2. 设置封面模式，铺满整个容器，背景图可能会被裁切

```css
.box{
    background: url(images/leaf.png) no-repeat 50% 50%;
    background-size: cover;
}
```

3. 设置包含模式，可以看到图片全貌，不会被裁切

```css
.box{
    background: url(images/leaf.png) no-repeat 50% 50%;
    background-size: contain;
}
```

#### background-origin 背景填充对齐

1. `border-box`：从边框处开始填充

2. `padding-box`：从填充位置开始填充背景，默认

3. `content-box`：从内容位置开始填充背景

```html
<style>
.box{
  border: 20px solid transparent;
  padding: 20px;
  width: 300px;
  height: 300px;
  background: url(images/189_nav_1.png) no-repeat;
  background-origin: border-box;
}
</style>

<div class="box">
  内容
</div>
```

#### background-clip 背景图像裁切位置

1. `padding-box` 从填充位置开始背景开始裁切，默认

2. `content-box` 从内容区域开始背景开始裁切

```html
  <style>
  .box{
    border: 20px solid blue;
    padding: 20px;
    width: 300px;
    height: 300px;
    background: red url(images/banner2.jpg) no-repeat;
    background-origin: padding-box;
    color: white;
    font-size: 24px;
    background-clip: border-box;
  }
  </style>

  <div class="box">
    内容
  </div>
```

##### 背景图像填充方式

1. 填充图片 

```css
 background-image: url(1.jpg);
```

2. 填充渐变


```css
 background-image: linear-gradient(red,green);
```

3. 填充base64编码图片

```css
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAGX...);
```

#### css渐变


语法

```css
background-image: linear-gradient( 颜色值1 位置1, 颜色值2 位置2, ... );
```

```html
<style>
.box{
  width: 500px;
  height: 200px;
  background-image: linear-gradient(transparent 99px, red, transparent 100px);
  background-color: #ffcece;
}
</style>
<div class="box"></div>
```

###### 渐变对齐

1. `to bottom` 默认
2. `to right`
3. `to left`
4. `to top`

5. `to bottom left`
6. `to bottom right`
7. `to top left`
8. `to top right`

绘制一个 X 图标

```html
<style>
.box{
  width: 200px;
  height: 200px;
  background-image: linear-gradient( to bottom right,transparent 49.6%, red, transparent 50%),
  linear-gradient( to top right,transparent 49.6%, red, transparent 50%);
  background-color: #ffcece;
}
</style>
<div class="box"></div>
```

##### repeating-linear-gradient 重复渐变

```html
<style>
.grad1 {
    height: 200px;
    background: repeating-linear-gradient(to right,red, yellow 10%, green 20%);
}
</style>
<div class="grad1"></div>
```

#### CSS3 径向渐变

语法

```css
background: radial-gradient(圆或者椭圆, 图形尺寸, 颜色值1, 颜色值2, ...);
```

```html
<style>
.box{
  width: 200px;
  height: 200px;
  /*circle 圆形 默认 ellipse椭圆*/
  background-image: radial-gradient(white,black 40%, transparent 40%);
}

</style>

<div class="box">

</div>
```

#### 如何下载第三方网站上的iconfont图标

1. 先通过检查元素功能定位到所需要的图标，根据图标`font-family`，定位字体路径，选择svg格式的路径。

2. 下载svg字体文件，可以用迅雷下载，svg也可以直接在浏览地址栏打开，打开后复制源代码，然后在桌面新建记事本，将源代码粘贴至此，最后修改文件扩展名为.svg

3. `svg`字体文件下载后，然后打开`https://icomoon.io/app/#/select`，然后选择左上角`imports icon`导入图标

4. 然后选择需要打包的图标，单击右侧Generate Font按钮

5. 直接选择`download`，下载字体图标。

6. 下载后得到一个压缩包，然后解压，发现有fonts文件，拷贝里面的字体文件

7. 回到自己的项目中，新建fonts文件夹，将刚才的字体文件粘贴到这里。

8. 在自己的项目样式文件中，定义图标字体，定义方式如下：

```css
@font-face {
  font-family: 'gongxian';
  src:
    url('fonts/gongxian.ttf?31sa4s') format('truetype'),
    url('fonts/gongxian.woff?31sa4s') format('woff'),
    url('fonts/gongxian.svg?31sa4s#gongxian') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

9. 以上是定义好图标字体 ，需要使用，我们还要引用字体`font-family:'gongxian'`

10. 图标引用有两种分别是`unicode`和`Font class`方式


```html
<style>
@font-face {
  font-family: 'gongxian';
  src:
    url('fonts/gongxian.ttf?31sa4s') format('truetype'),
    url('fonts/gongxian.woff?31sa4s') format('woff'),
    url('fonts/gongxian.svg?31sa4s#gongxian') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.icon{
  font-family: 'gongxian';
  font-size: 18px;
  font-style: normal;
}

.gxicon::before{
  font-family: 'gongxian';
  font-size: 18px;
  content: "\e60e";
  font-style: normal;
}
</style>


<i class="icon">&#xe60e;</i>


<i class="gxicon"></i>
```

#### 自定义webfont字体步骤

1. 打开ai，新建画布 16px * 16px，分辨率72px 颜色rgb

2. 在画布中央输入 单个文字，输入后选中文字，右击创建轮廓

3. 选择路径修改工具（白箭头），根据自己的想法跳转文字

4. 调整完毕，文件 》 另存为svg文件

5. 打开https://icomoon.io/app/#/select网站，导入刚才制作的svg字体文件

6. 可以icomoon中微调图标的大小或者位置

7. 调整完毕，选择需要打包的图标，然后单击generate font按钮

8. 在图标下方 对应的unicode编码（9f9a）右侧，输入与图标对应的字符

9. 单击download下载图标字体

10. 在项目中使用，具体代码参考如下

```html
 <style>
  @font-face {
    font-family: 'gongxian';
    src:
      url('fonts/gongxian.ttf?kqn3ge') format('truetype'),
      url('fonts/gongxian.woff?kqn3ge') format('woff'),
      url('fonts/gongxian.svg?kqn3ge#gongxian') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  h2{
    font-family: "gongxian";
    font-size: 80px;
    color: brown;
  }
  </style>
  <h2>龚弦</h2>
```

### CSS3 2D 转换

#### translate() 方法

语法

```css
.box{
  transform: translateX(100px);
  transform: translateY(100px);
  transform: translateZ(100px);
  transform: translate(100px,100px);/*第1个x，第2个y */
}
```

示例

```html
<style>
    .box{
      position: absolute;
      width: 300px;
      height: 200px;
      left: 50%;
      top: 50%;
      background-color: red;
      transform: translate(-50%,-50%);
    }
  </style>

  <div class="box">

  </div>
```

示例

```html
  <style>
  .box{
    position: relative;
    width: 224px;
    height: 207px;
    background-color: #2c3e50;
  }
  .box ul{
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .box ul li{
    height: 5px;
    background-color: white;
    transition: all .3s ease;
  }
  .box ul li.one{
    margin-bottom: 8px;
  }
  .box ul li.two{
    margin-bottom: 8px;
  }
  .box ul.animate li.one{
    transform: translateY(13px);
  }
  .box ul.animate li.three{
    transform: translateY(-13px);
  }
  </style>

  <div class="box">

    <ul id="menu">
      <li class="one"></li>
      <li class="two"></li>
      <li class="three"></li>
    </ul>

  </div>

  <script>
  document.getElementById('menu').onclick=function(){
    this.classList.toggle('animate');
  }
  </script>
```

#### rotate() 方法

语法

```css
.box{
  transform: rotate(30deg);
}
```

1. `rotate`：旋转

2. 正数顺时针旋转，复数逆时针旋转

3. `deg`表示角度

##### transform-origin 旋转注册点

```css
.box{
  transform-origin: 0 0;/*上左*/
  transform-origin: 50% 0;/*上中*/
  transform-origin: 100% 0;/*上右*/

  transform-origin: 0 50%;/*中左*/
  transform-origin: 50% 50%;/*正中*/
  transform-origin: 100% 50%;/*中右*/

  transform-origin: 0 100%;/*下左*/
  transform-origin: 50% 100%;/*下中*/
  transform-origin: 100% 100%;/*下右*/
}
```

```html
  <style>
  .box1{
    position: absolute;
    width: 150px;
    height: 20px;
    background-color: red;
    left: 100px;
    top: 50px;
    transform-origin: 0 0;
    transform: rotate(30deg);
  }
  .box2{
    position: absolute;
    width: 150px;
    height: 20px;
    background-color: red;
    left: 100px;
    top: 50px;
    transform-origin: 0 100%;
    transform: rotate(-30deg);
  }
  </style>

  <div class="box1"></div>

  <div class="box2"></div>
```

#### scale() 缩放方法

```html
  <style>
    body{
      padding: 100px;
    }
    .box{
      width: 100px;
      height: 100px;
      background-color: red;
      transition: all .3s ease;
    }

    .box:hover{
      transform: scaleX(3);
      transform: scaleY(3);
      transform: scale(3);
    }
  </style>

  <div class="box"></div>

```

#### skew() 倾斜方法

```html
<style>
  body{
    padding: 100px;
  }
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
    transition: all .3s ease;
    /* 
    transform: skewX(30deg); 
    transform: skewY(30deg); 
    transform: skew(30deg,30deg); 
    */
  }
  .box:hover{
    transform: skewX(-30deg);
  }
</style>

<div class="box"></div>
```

### matrix() 矩阵 方法

语法
```css
.box{
  transform: matrix(a,b,c,d,e,f);
  transform: matrix(水平缩放,水平倾斜,垂直倾斜,垂直缩放,水平移动,垂直移动);
}
```

1. `a`：水平缩放
2. `b`：水平倾斜
3. `c`：垂直倾斜
4. `d`：垂直缩放
5. `e`：水平移动
6. `f`：垂直移动

```html
<style>
  body{
    padding: 100px;
  }
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
    transform: matrix(2,0,0,1,300,0);
  }
</style>

<div class="box"></div>
```


开启硬件加速

```html
<style>
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
    /* transform: translateX(100px); */
    transform: translate3d(100px,0,0);/*开启硬件加速*/
  }
</style>
  
<div class="box"></div>
```

### CSS3 transition 过渡

语法

```css
.box{
  transition: 属性名1 运动时长1 延迟时长1 动画曲线1, 属性名2 运动时长2 延迟时长2 动画曲线2;
  transition: all 运动时长 延迟时长 动画曲线;
}
```

> 注意：在做`transition`动画时，不要使用`display:none` 来隐藏元素。

> `transition`不能做永动动画。


### CSS3 animation 动画

语法

```css
.box{
  animation: 动画名称 动画持续时间 动画延迟时间 动画函数 动画播放次数（默认1次，infinite 无限） 动画方向（正向和逆向） 动画状态
}
```
##### 动画持续时间

单位可用`s`（秒）、`ms`（毫秒）

```css
.box{
  animation: donghua 1s
}
```

##### 动画延迟时间

```css
.box{
  animation: donghua 1s 2s
}
```

##### 动画函数

1. `linear`：匀速
2. `ease`： 规定慢速开始，然后变快，然后慢速结束的过渡效果
3. `ease-in`：规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）（相对于匀速，开始的时候慢，之后快）。
4. `ease-out`：规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）（相对于匀速，开始时快，结束时候间慢，）。
5. `ease-in-out`：规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）（相对于匀速，（开始和结束都慢）两头慢）。
6. `cubic-bezier(n,n,n,n)`：在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

##### 动画播放次数

可以设置具体值，比如1,表示1次，infinite 无限播放

```css
.box{
  animation: donghua 1s 2s 1
}
```

##### 动画方向

`reverse`：逆向播放，`alternate-reverse` 先正向播放，然后逆向，然后正向..

```css
.box{
  animation: donghua 1s 2s 1 reverse
}
```

##### 动画状态

`running` 正在播放，`paused` 暂停

```css
.box{
  animation: donghua 1s 2s 1 reverse paused
}
```

唱片效果

```html
<style>
  .box{
    position: absolute;
    left: 200px;
    top: 150px;
    width: 300px;
    height: 300px;
    background-color: black;
    font-size: 56px;
    color: white;
    line-height: 300px;
    text-align: center;
    border-radius: 50%;
  }
  .box.play{
    /* reverse 反转 */
    animation: xuanzhuan 1s linear infinite alternate-reverse;
  }

  .box.pause{
    animation-play-state: paused;
  }

  @keyframes xuanzhuan {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>

<audio id="audio" src="videos/caravan.mp3"></audio>

<div class="box" id="box">
  唱片
</div>

<button id="playBtn">播放</button>
<button id="pauseBtn">暂停</button>

<script>
document.getElementById('playBtn').onclick=function(){
  document.getElementById('audio').play();
  document.getElementById('box').classList.remove('pause');
  document.getElementById('box').classList.add('play');
  
}

document.getElementById('pauseBtn').onclick=function(){
  document.getElementById('audio').pause();
  document.getElementById('box').classList.add('pause');
}
</script>
```

##### `animation` 和 `transtion`的区别：

1. `transition` 需要触发事件，比如点击事件、鼠标移入事件；而 `animation`可以配合 `@keyframe` 可以不触发事件就触发这个动画

2. `transition` 触发一次播放一次；而 `animation` 则是可以设置很多的属性，比如循环次数，动画结束的状态等等；

3. `transition`关注的是样式属性的变化，而`animation`作用于元素本身使用关键帧的概念，实现更自由的动画效果；

4. `transition`动画比`animation`性能开销要低，不会引起页面重排。

#### css3选择器

##### `first-child` 和 `last-child`

```html
<style>
ul li:first-child{
  background-color: red;
}
ul li:last-child{
  background-color: green;
}
</style>

<ul>
  <li>aaaa</li>
  <li>bbbb</li>
  <li>cccc</li>
  <li>dddd</li>
</ul>
```
##### `nth-child`

语法

```css
ul li:nth-chid(1){}  /*直接使用索引值*/
ul li:nth-chid(even){}  /*偶数行*/
ul li:nth-chid(odd){} /*奇数行*/
ul li:nth-chid(3n){} /*倍数行*/
ul li:nth-chid(3n+1){} /*倍数和计算*/
```

直接使用索引值示例

```html
<style>
ul li:nth-child(1){
  background-color: red;
}
ul li:nth-child(4){
  background-color: green;
}
</style>

<ul>
  <li>aaaa</li>
  <li>bbbb</li>
  <li>cccc</li>
  <li>dddd</li>
</ul>
```

偶数和奇数示例

```html
<style>
ul li:nth-child(even){
  background-color: red;
}
ul li:nth-child(odd){
  background-color: green;
}
</style>

<ul>
  <li>aaaa</li>
  <li>bbbb</li>
  <li>cccc</li>
  <li>dddd</li>
</ul>
```
倍数行示例

```html
<style>
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 320px;
}
ul li{
  float: left;
  width: 100px;
  height: 100px;
  background-color: red;
  margin-right: 10px;
  margin-bottom: 10px;
}
ul li:nth-child(3n){
 margin-right: 0;
}

</style>

<ul>
  <li>aaaa</li>
  <li>bbbb</li>
  <li>cccc</li>
  <li>dddd</li>
  <li>eeeee</li>
  <li>fffff</li>
  <li>iiii</li>
</ul>
```

##### `not`

```html
  <style>
    ul li:not(.two){
      background-color: red;
    }
    ul li:not(:first-child){
      background-color: green;
    }
  </style>

  <ul>
    <li>aaaa</li>
    <li class="two">bbbb</li>
    <li>cccc</li>
    <li>dddd</li>
    <li>eeeee</li>
    <li>fffff</li>
    <li>iiii</li>
  </ul>
```

##### `::selection`

改变文本选中的属性

```css
::selection{
  background-color: orange;
  color: white;
}
```

##### `::placeholder`

```html
<style>
::placeholder{
  color: red;
}
</style>
<input type="text" placeholder="请输入">
```

##### `::-webkit-scrollbar` 滚动条样式

```html
<style>
/*全局设置*/

/* 滚动条宽度 */
::-webkit-scrollbar{
  width: 6px;
  height: 6px;
}

/* 滚动条拖拽块 */
::-webkit-scrollbar-thumb{
  background-color: rgba(255, 0, 0, .7);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover{
  background-color: rgba(255, 0, 0, 1);
}

.scrollbar{
  width: 100px;
  height: 100px;
  overflow: auto;
  background-color: #f0f0f0;
}
</style>

<div class="scrollbar">
  <div style="width:500px;height:1000px">11</div>
</div>
```



