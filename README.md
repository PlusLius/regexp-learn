## 正则表达式

### 1 使用正则

创建正则表达式有两种方式，一种是以字面量方式创建，另一种是使用`RegExp`构造函数来创建。

```javascript
var expression = / pattern / flags;
var expression = new RegExp( pattern / flags );
var expression = new RegExp( patternStr, flags );

// example
var regexp = /regexp/g;
var regexp = new RegExp('regexp', 'g');
var regexp = new RegExp(/regexp/g);
```

> 其中模式(pattern)部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用。
> 每个正则表达式都可带有以或多个标志(flags)，用以表明正则表达式的行为。

注：`flag`为可选项，表示匹配模式，主要有一下3种标志。

+ g : 表示全局(global)模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
+ i : 表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写;
+ m : 表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。

```javascript
// global
var str = 'hello world, hello life',
    reg1 = /hello/,
    reg2 = /hello/g;

// 非全局模式下，返回一个数组
// 第一个参数表示匹配的字符串
// index表示的是匹配字符串在文本中的起始位置
// input表示引用的文本
str.match(reg1); // [ 'hello', index: 0, input: 'hello world, hello life' ]

// 全局模式下的匹配返回所有匹配的值
str.match(reg2); // [ 'hello', 'hello' ]

// case-insensitive
var cStr = 'Hello world',
    cReg1 = /hello/,
    cReg2 = /hello/i;

cReg1.exec(cStr);   // null
cReg2.exec(cStr);   // [ 'Hello', index: 0, input: 'Hello world' ]

// multiline
var mStr = 'hello world\n hello life',
    mReg1 = /world$/,
    mReg2 = /world$/m;

// 结果为null，因为没有启用多行，world并不算mStr的结尾
mStr.match(mReg1);  // null
// 匹配成功，启用多行之后，world变成第一行的结尾
mStr.match(mReg2);  // [ 'world', index: 6, input: 'hello world\n hello life' ]
```

#### 1.1 RegExp 实例属性

每个RegExp实例对象都会存在下列属性：

- global : 布尔值，表示是否设置了g标志
- ignoreCase : 布尔值，表示是否设置了i标志
- multiline : 布尔值，表示是否设置了m标志
- lastIndex : 整数，表示开始搜索下一个匹配项的字符位置，从0算起
- source : 正则表达式字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回

```javascript
var reg = /\[hello\] regexp/i;

reg.global;         // false
reg.ignoreCase;     // true
reg.multiline;      // false
reg.lastIndex;      // 0
reg.source;         // \[hello\] regexp

var reg2 = new RegExp('\\[hello\\] regexp', 'ig');

reg2.global;        // true
reg2.ignoreCase;    // true
reg2.multiline;     // false
reg2.lastIndex;     // 0
reg2.source;        // \[hello\] regexp 字面量形式返回
```

#### 1.2 RegExp 实例方法

+ pattern.exec(str)

`exec`方法是RegExp的主要方法，主要用于提取捕获组(这个后面后讲到)，它接收一个匹配字符串作为参数，如果匹配成功，返回一个包含匹配项信息的数组；在没有匹配到的时候返回null。

返回的数组包含匹配的字符串，同时另外包含两个属性：index 和 input。index表示的是匹配字符串在文本中的起始位置，input表示匹配的字符串。

在**非全局模式**匹配下，如果字符串中含有与模式匹配的多个子字符串，那么只会返回第一个匹配项的结果。返回的数组中下标为0的位置表示匹配到的字符串，其余位置表示匹配到的捕获组信息；而在**全局模式**下(g)，如果依次执行`exec`方法，依次返回的是每一个匹配项信息的数组。例如：

```javascript
// 在非全局模式下，始终返回第一个匹配项的信息
var reg = /<(\/?)(\w+)([^>]*?)>/,
    str = "<div class='hello'><b>hello</b><i>regexp</i></div>";
var matches = reg.exec(str);
matches[0];         // <div class='hello'>
matches[1];         // ""
matches[2];         // div
matches[3];         //  class='hello'
matches.index;      // 0
reg.lastIndex;      // 0

var matches = reg.exec(str);
matches[0];         // <div class='hello'>
matches[1];         // ""
matches[2];         // div
matches[3];         //  class='hello'
matches.index;      // 0
reg.lastIndex;      // 0

// 在全局模式匹配下，找到第一个匹配项信息之后，如果继续执行，会在字符串中继续查找下一个匹配项
var reg1 = /<(\/?)(\w+)([^>]*?)>/g,
    str1 = "<div class='hello'><b>hello</b><i>regexp</i></div>";
var matches = reg1.exec(str1);
matches[0];         // <div class='hello'>
matches[1];         // ""
matches[2];         // div
matches[3];         //  class='hello'
matches.index;      // 0
reg1.lastIndex;     // 19

var matches = reg1.exec(str1);
matches[0];         // <b>
matches[1];         // ""
matches[2];         // b
matches[3];         // ""
matches.index;      // 19
reg1.lastIndex;     // 22
```

+ pattern.test(str)

`test`方法主要用于检测字符串中是否与模式匹配，常用语条件判断。匹配成功返回true，否则返回false