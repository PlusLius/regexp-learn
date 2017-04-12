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