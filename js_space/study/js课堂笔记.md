#  js课堂笔记

## 语法基础

### js代码如何导入?

1. 外部导入的形式

```html
<!-- 头部方案 -->
<head>
  <link rel="stylesheet" />
  <script src="js/main.js"></script>
</head>

<!-- 脚部方案（推荐方案，性能最优） -->
<body>
  <script src="js/main.js"></script>
</body>
```

2. 内部导入的形式

```html
<body>

<script>
  //内部导入的方式，注意放置到</body>上
  var a = 1+3;
</script>

</body>
```

3. 行内引入js

```html
<button onclick="alert('111')">按钮</button>
```

### 语句和表达式的区别

语句主要为了进行某种操作，一般情况下不需要返回值。

表达式则是为了得到返回值，一定会返回一个值。

### 变量

`JavaScript` 的变量名区分大小写，`A`和`a`是两个不同的变量。

```js
//这里一共执行了2个操作，1.声明变量，2. 赋值
var a=1;

var a;
a = 1;
```

如果只是声明变量而没有赋值，则该变量的值是`undefined`。

```js
var a;
console.log(a); //undefined
```

`undefined`是一个 `JavaScript` 关键字，表示“无定义”。

### = 、 == 和 === 的区别？

=是赋值，==是相等，会隐形转换等号两边的数据类
===是严格等于，不会转换等号两边的类型。


### 多条件语句

```html
  
<button id="btn">输入分值</button>

<script>
document.getElementById('btn').onclick= function () {
  var score = window.prompt('请输入分值');
  if(score<60){
    console.log('不及格！');
  }else if(score >= 60 && score<70){
    console.log('及格！');
  }else if( score >= 70 && score < 80 ){
    console.log('良好！');
  }else if(score >= 80 && score<90){
    console.log('优秀！');
  }else{
    console.log('完美！');
  }
}
</script>
```

`switch` 支持表达式

```js
var x = 2;
switch (x+1){
  case 1:
    console.log('x=1');
    break;
  case 1+2:
    console.log('x=3');
    break;
}
//x=3
```

```js
var day = new Date().getDay();
switch (day){
  case 1:
    console.log('星期一');
    break;
  case 2:
    console.log('星期二');
    break;
  case 3:
    console.log('星期三');
    break;
  case 4:
    console.log('星期四');
    break;
  case 5:
    console.log('星期五');
    break;
  case 6:
    console.log('星期六');
    break;
  case 0:
    console.log('星期日');
    break;
  default:
    console.log('请输入有效值');
}


var arr = ['日','一','二','三','四','五','六'];
console.log('星期', arr[day] );
```

三元条件语句

```js

var gender = '女';
if(gender==='男'){
  console.log('先生，您好');
}else{
  console.log('女士，您好');
}

var gender = '男';
var result = (gender==='男'? '先生' : '女士');
console.log( result , '您好' );
```

## break 和 continue 语句的区别

1. **break：** `while`循环`break`是用于永久终止`bai`循环。即`du`不执行本次循环中`break`后面的语句，`zhi`直接跳出循环。

2. **continue：** `while`循环`continue`是用于终止本次循环。即本次循环中`continue`后面的代码不执行，进行下一次循环的入口判断。

```js
//跳出本次循环

//方案1
for(var i=0;i<=10;i++){
  if(i<=5) console.log(i);
  console.log(i);
}

//方案2 break
for(var i=0;i<=10;i++){
  console.log(i);
  if(i==5) break;
  console.log('i=',i);
}

// 跳过本次循环

//方案1 
for(var i=0;i<=10;i++){
  if(i !==5 ) console.log(i);
}

//方案2 continue方案
for(var i=0;i<=10;i++){
  if(i ===5 ) continue;
  console.log(i);
}
```

### typeof能检测那些数据类型？

1. `number`：数值

2. `string`: 字符串

3. `boolean`：布尔类型

4. `undefined`：未定义

5. `function`: 函数

6. `object`：对象

7. `symbol`：符号

```js
console.log(typeof 123); //number
console.log(typeof 'abc');//string
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof NaN);//number
console.log(typeof null);//object
console.log(typeof function(){});//function
console.log(typeof {});//object
console.log(typeof []);//object
console.log(typeof Symbol());//symbol
```

检测一个没有声明的变量，不会报错，它会输出`undefined`

```js
console.log(typeof a);//undefined
```

## 有那些方法可以检测数组

```js
var a = {};
var b = [];

//方法1
console.log(a instanceof Array);//false
console.log(b instanceof Array);//true

//方法2
console.log( Array.isArray(a) );//false
console.log( Array.isArray(b) );//true

//方法3
console.log( Object.prototype.toString.call(a)=='[object Object]' );//true
console.log( Object.prototype.toString.call(b)=='[object Array]' );//true
```

## 6个自动隐性转换false

1. false

2. 0

3. ''

4. NaN

5. undefined

6. null

以下情况也为真

```js
if('0'){
  console.log('true');
}else{
  console.log('false')
}

if(' '){
  console.log('true');
}else{
  console.log('false')
}

if('false'){
  console.log('true');
}else{
  console.log('false')
}

if([]){
  console.log('true');
}else{
  console.log('false')
}

if({}){
  console.log('true');
}else{
  console.log('false')
}
```

### parseInt 特点

1. `parseInt`转换空字符串时为`NaN`

2. `parseInt`不支持四舍五入

3. `parseInt`从左向右判断每一个字符，如果发现不是数字，就截断到这里，舍去小数部位。

4. `parseInt`总是返回整形和`NaN`

### parseFloat 特点

1. `parseFloat`转换空字符串时为`NaN`

2. `parseFloat`不支持四舍五入

3. `parseFloat`从左向右判断每一个字符，如果发现不是数字，就截断到这里。

4. `parseFloat`总是返回浮点和`NaN`

### Number 特点

1. `Number`转换空字符串或者`null`时都为`0`

2. `Number`转换的字符串中只要包含非数字，都是返回`NaN`。

3. `Number`总是返回`0`、整形、浮点、`NaN`

## 对象的引用

对象的引用是传址传递，原始数据拷贝它是传值传递。

```js
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
```

面试题

```js
var a = {
  name:'zhangsan',
  age: 24
}
var b = a;
a = {};
console.log(b.age);
```

## 语句还是表达式

```js
console.log('{foo: 123}');//字符串
console.log(eval('2*2'));//eval解析字符串，执行了数学运算
console.log(eval('{foo: 123}'));//解析为语句
console.log(eval('({foo: 123})'));//解析为对象
```


面试题

```js
var person = {
  name: 'zhangsan',
  age: 20,
  undefined: 'abc',
}
console.log(person[age]);//abc
var age = 30;
```


### Object.keys

### 排序规则

`Object.keys`，先按照数字从小到大排列，然后除数字以外的属性保存自定义的顺序排列。

`Object.keys` 不能返回继承过来的属性，比如`toString`,`valueOf`。

## in 关键字

运算符用于检查对象是否包含某个属性

用js来判断是移动端还是PC端？

```js
'ontouchend' in document//true 表示移动端 false表示pc端
```

## 对象的浅拷贝

```js
var person = {
  name: 'zhangsan',
  age: 30,
}

//对象的浅拷贝
var _person={};
for(var key in person){
  _person[key] = person[key];
}

delete _person.age;

console.log(person, _person);
```

对象中定义一个不可枚举的属性，`for in`无法循环出来。

```js
Object.defineProperty(Object.prototype, 'free', {
  value: '免费',
  //可枚举（可循环）
  enumerable: false
})

var obj  = {
  name:'zhangsan',
  age: 20,
};

for(var key in obj){
  console.log(key);
}
```

### 字符串多行写法

1. 使用es6 模板字符串方案

```js
var trs = `<tr algin="center">
  <th>编号</th>
  <th>姓名</th>
  <th>年龄</th>
  <th>分数</th>
</tr>`;
console.log(trs);
```

2. 使用es5 转义符方案
```js
var trs = '<tr algin="center">\
  <th>编号</th>\
  <th>姓名</th>\
  <th>年龄</th>\
  <th>分数</th>\
</tr>';
console.log(trs);
```

3. 使用 `+`字符串并置 方案


```js
var trs = '<tr algin="center">' + 
  '<th>编号</th>' +
  '<th>姓名</th>' +
  '<th>年龄</th>' +
  '<th>分数</th>' +
'</tr>';

console.log(trs);
```

### 常用的转义符号意义

1. `\n`：换行

2. `\r`：回车

3. `\t`：制表符

4. `\f`：换页


字符串循环输出

```js
var str = 'hello';
for(var i=0;i<str.length;i++){
  console.log(str[i]);
}

//反转输出
var newStr = '';
for(var i=str.length-1;i>=0;i--){
  newStr = newStr + str[i];
}
console.log(newStr);
```

```js
var string = 'Hello World!';
//任意字符转换为base64编码
console.log( btoa(string) );

var base64 = 'SGVsbG8gV29ybGQh';
//base64编码转换为任意字符
console.log( atob(base64) );
```

### 中文转base64编码步骤

1. 先将中文使用encodeURIComponent进行编码
2. 将编码过后的字符再进行btoa编码
3. 得到转换过后的base64

### base64编码转中文步骤

1. 先将base64编码使用atob转码得到uri编码
2. 然后将uri编码使用decodeURIComponent进行解码
3. 得到中文字符


## 数组

## 数组长度

```js
var arr = ['a','b'];
arr.length;//2
```

## return 关键字它的作用是什么？

`return`是函数内部的关键字，表示输出并返回，`return`之后的代码不会执行，会退出函数。注意`return`是输出到内存中，需要用其他方式输出(`console.log`、`document.write`、`innerText`、`innerHTML`等)；


## 函数作用域

```js
var a = 2;
function fn(a){
  a=5;
  console.log(a);
}
fn();//5

console.log(a);//2
```

```js
var a = 2;
function fn(){
  a=5;
  console.log(a);
}
fn();//5

console.log(a);//5
```

```js
var a = 2;
function fn(){
  var a=5;
  console.log(a);
}
fn();//5

console.log(a);//2
```

```js
function fn(){
  a=5;
}
fn();

console.log(a);//5
```

```js
function fn(a){
  a=5;
}
fn();

console.log(a);// 报未定义错误
```

```js
console.log(a);
var a = 'a';

function foo(){
  console.log(a);
  var a='a1';
}

foo();
```

```js
var a = 1;
function foo(){
  a = 10;
  console.log(a);
  return;
  function a(){};//会提升到函数顶部，类似于在函数顶部var a = function(){}，那么这样就把a变成了局部变量
}
foo();// 10
console.log(a);// 1
```

函数的作用域和定义时的作用域有关，和调用（运行时）的作用域无关。

```js
// 注意区别

var a = 1;
function x() {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f();//1

var a = 1;

/////////////

function f() {
  var a = 2;
  function x() {
    console.log(a);
  }
  x();
}

f(); // 2
```


### 复制数组

```js
var arr = ['苹果','香蕉'];

function copy( arr ){
  var arr2=[];
  for(var i=0;i<arr.length;i++){
    arr2[i] = arr[i];
  }
  return arr2;
}

function f(arr) {
  var newArr = copy( arr );
  newArr[0] = '芒果';
  console.log(newArr);
}

f(arr);

console.log(arr);
```


```js
  function max(){
    var args = arguments;
    if(args[0] instanceof Array){
      args = args[0];
    }else if(typeof args[0] === 'string'){
      args = args[0].split(',');//[1,2,3,4,6]
    }

    var val = args[0];
    for(var i=0;i<args.length;i++){
      if(val<args[i+1]){
        val = args[i+1];
      }
    }
    return Number(val);
  }

  console.log(  max(1,2,3,4,6)  );
  console.log(  max([1,2,3,4,6])  );
  console.log(  max('1,2,3,4,6')  );
  ```

### 类数组对象转真正的数组

1. 使用Array的slice

```js
Array.prototype.slice.call(类数组对象)
```
示例

```js
function foo(){
  console.log(arguments);
  var args = Array.prototype.slice.call();
  console.log(args);
}
foo()
  ```

2. 使用es6种扩展运算符

```js
[...类数组对象];
```

示例

```js
function foo(){
  console.log(arguments);
  var args = [...arguments];
  console.log(args);
}
foo()
```

3.  Array.from

```js
Array.from(类数组对象)
```

示例

```js
function foo(){
  console.log(arguments);
  var args = Array.from(arguments);
  console.log(args);
}
foo()
```

### 什么是IIFE？有什么作用？

`function`函数出现行首一律解析为语句，也就是函数声明式，函数声明式要求必须要函数名，所以匿名函数会报错。我们可以根据这一特性，只要函数不要出现再行首，那么就会被引擎理解为表达式。这样我们可以通过给函数套一对括号，使得成为表达式，然后再加上括号立即执行，这样便形参`IIFE`，函数立即执行表达。式。

它的主要用途有：

1. 不必为函数命名

2. 避免全局污染

3. 因为避免全局污染，常用它来封装插件


```js
  var person = {
    name: '张三',
    age: 20,
  };

  function foo(info){
    info.name= '李四';
    console.log(person);
  }

  foo(person);

  console.log(person);
```