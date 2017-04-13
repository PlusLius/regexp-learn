## 正则表达式

### 1. 使用正则

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

`test`方法主要用于检测字符串中是否存在与模式匹配的字符串，常用语条件判断。匹配成功返回true，否则返回false。例如：
```javascript
var pattern = /\d{2}-\d{3}/,
    str = '29-234',
    str1 = '290-3345',
    str2 = '1-33245';
pattern.test(str);  // true
pattern.test(str1); // true
pattern.test(str2); // false
```

#### 1.3 RegExp 构造函数属性

构造函数静态属性，分别有一个长属性名和一个短属性名(Opera是例外，不支持短属性名)。

| 长属性名       | 短属性名        | 说明                              |
| ------------- |:-------------:| ----------------------------------:|
| input         | $_            | 最近一次要匹配的字符串                 |
| lastMatch     | $&            | 最近一次的匹配项                      |
| lastParen     | $+            | 最近一次匹配的捕获组                   |
| leftContext   | $`            | input字符串中lastMatch之前的文本       |
| multiline     | $*            | 布尔值，表示是否所有表达式都使用多行模式   |
| rightContext  | $'            | input字符串中lastMatch之后的文本       |

```javascript
var pattern = /(.)or/,
    str = 'this is a normal string or meaningful';

if (pattern.test(str)) {
    console.log(RegExp.input);          // this is a normal string or meaningful
    console.log(RegExp.lastMatch);      // nor
    console.log(RegExp.lastParen);      // n
    console.log(RegExp.leftContext);    // this is a
    console.log(RegExp.multiline);      // false
    console.log(RegExp.rightContext);   // mal string or meaningful

    console.log(RegExp['$_']);          // this is a normal string or meaningful
    console.log(RegExp['$&']);          // nor
    console.log(RegExp['$+']);          // n
    console.log(RegExp['$`']);          // this is a
    console.log(RegExp['$*']);          // false
    console.log(RegExp['$\'']);         // mal string or meaningful
}
```

#### 1.4 用于模式匹配的String方法

+ str.search(pattern)

它的参数是一个正则表达式，返回第一个与之匹配的子串的起始位置，如果找不到匹配的子串，它将返回-1。例如：

```javascript
var str = 'JavaScript is not java',
    pattern = /Java/i,
    pattern2 = /Java/ig;
console.log(str.search(pattern));   // 0
console.log(str.search(pattern2));  // 0
```

注：如果search()的参数不是正则表达式，则首先会通过RegExp构造方法将它转换成正则表达式，search()方法不支持全局检索，因为它忽略正则表达式参数中的修饰符g

+ str.replace(subStr | pattern, replaceStr | function)

第一个参数是正则表达式或者是字符串，第二个参数是要替换的字符串。如果第一个参数是正则表达式，直接进行模式匹配，若为字符串，则会检索整个字符串进行替换，而不会转化为正则表达式。例如：

```javascript
var str = 'JavaScript is not java',
    pattern = /Java/i;

console.log(str.replace(pattern, 'live'));     // liveScript is not java
console.log(str.replace('Java', 'live'));      // liveScript is not java

// function
var str2 = '123-456-789',
    pattern2 = /(\d+)/g;

str2.replace(pattern2, function(v) {
    // 会执行三次
    // 第一次打印123
    // 第二次打印456
    // 第三次打印789
    console.log(v);
});

/**
 * 第一个参数表示匹配的字符串
 * 第二个参数表示匹配的元组(如果没有元组,则实际上回调函数只有三个值,即此时的d值会为undefined)
 * 第三个参数表示字符串匹配的开始索引
 * 第四个参数表示匹配的字符串
 */
str2.replace(pattern2, function(a, b, c, d) {
    // 会执行三次
    // 第一次打印123, 123, 0, 123-456-789
    // 第二次打印456, 456, 4, 123-456-789
    // 第三次打印789, 789, 8, 123-456-789
    console.log(a, b, c, d);
});

// 此时没有进行元组匹配
str2.replace(/\d+/g, function(a, b, c, d) {
    // 会执行三次
    // 第一次打印123, 0, 123-456-789, undefined
    // 第二次打印456, 4, 123-456-789, undefined
    // 第三次打印789, 8, 123-456-789, undefined
    console.log(a, b, c, d);
});
```

+ str.match(pattern)

`match`方法接收一个正则表达式，如果是在全局模式匹配下，匹配失败返回null，匹配成功会返回一个数组，包含所有匹配的值；如果是非全局模式，则返回第一个匹配项数组信息，数组中第一个元素为匹配字符串，余下为匹配的捕获组，另外这个数组还有两个属性，index和input，index表示匹配字符串的开始索引，input表示匹配的字符串。例如：

```javascript
var str3 = 'yuzhongzi_91@sina.com',
    pattern3 = /^([a-zA-Z][\w\d]+)@([a-zA-Z0-9]+)(\.([a-zA-Z]+))+$/,
    matches;

matches = str3.match(pattern3);
console.log(matches[0]);        // yuzhongzi_91@sina.com
console.log(matches[1]);        // yuzhongzi_91
console.log(matches[2]);        // sina
console.log(matches[3]);        // .com
console.log(matches[4]);        // com
console.log(matches.index);     // 0
console.log(matches.input);     // yuzhongzi_91@sina.com
```

+ str.split(pattern | subStr, [ howmany ])

`split`可以接收两个参数，第二个参数可选，表示返回数组的最大长度。其中第一个参数是指定的分隔符，可以使正则表达式或者是字符串。例如：

```javascript
var str4 = 'Hope left life become a cat.',
    pat1 = /\s/,
    pat2 = ' ';

console.log(str4.split(pat1));      // [ 'Hope', 'left', 'life', 'become', 'a', 'cat.' ]
console.log(str4.split(pat2, 2));   // [ 'Hope', 'left' ]
```

### 2. 相关术语与操作符

#### 2.1 精准匹配

> 如果一个字符不是特殊字符或操作符，则表示该字符必须在表达式中出现。例如，在`/test/`正则中，有4个术语，它们表示这些字符必须在一个字符串中出现，才能匹配该模式。

简单的理解：精准匹配可以理解为一对一匹配，即正则表达式中中的术语与字符串中的字符对应。

#### 2.2 匹配一类字符

表示匹配的一类代表一组特定含义的字符。例如：`[abc]`就代表匹配"a","b","c"字符中的一个，而不是代表匹配一个特定的字符。具体有如下几种：

|字符        | 匹配内容                                           |
|:-----------:|:------------------------------------------------|
|[...]      |方括号内的任意字符                                    |
|[^...]     |不在方括号内的任意字符                                 |
|·          |除换行符和其他Unicode行终止符之外的任意字符              |
|\w         |任意ASCII字符组成的单词，等价于[a-zA-Z0-9_]            |
|\W         |任意不是ASCII字符组成的单词，等价于[^a-zA-Z0-9_]        |
|\s         |任何Unicode空白符                                    |
|\S         |任何非Unicode空白符的字符，注意w和S不同                 |
|\d         |任何ASCII数字，等价于[0-9]                            |
|\D         |除了ASCII数字之外的任何字符，等价于[^0-9]               |
|\b         |单词边界                                            |
|\B         |非单词边界                                           |
|\t         |水平制表符                                           |
|\v         |垂直制表符                                           |
|\f         |换页符                                              |
|\r         |回车                                                |
|\n         |换行符                                              |
|\cA:\cZ    |控制符，例如：\cM匹配一个Control-M                     |
|\u0000:\uFFFF |十六进制Unicode码                                 |
|\x00:\xFF  |十六进制ASCII码                                      |

```javascript
// [abc] 表示匹配abc其中的一个
var str = 'abc',
    pattern = /[abc]/;

console.log(str.match(pattern));    // [ 'a', index: 0, input: 'abc' ]

// [^abc] 表示不匹配abc字符中的任何一个
var str = 'abcd',
    pattern = /[^abc]/;

console.log(str.match(pattern));    // [ 'd', index: 3, input: 'abcd' ]

// · 匹配除换行以外的字符
var str = '<p>I am a cat.</p>\n<b>what about you?</b>',
    pattern = /.*/;

console.log(str.match(pattern));    // [ '<p>I am a cat.</p>', index: 0, input: '<p>I am a cat.</p>\n<b>what about you?</b>' ]

// \w 匹配包括下划线的任意单词字符
var str = 'Your are _ so cute #*& so | beatiful ',
    pattern = /\w+/g;

console.log(str.match(pattern));   // [ 'Your', 'are', '_', 'so', 'cute', 'so', 'beatiful' ]

// \W 匹配任意非单词字符
var str = 'Your are _ so cute #*& so | beatiful ',
    pattern = /\W+/g;

console.log(str.match(pattern));    // [ ' ', ' ', ' ', ' ', ' #*& ', ' | ', ' ' ]

// \s 匹配空白字符
var str = 'Your \r\n\f ful',
    pattern = /\s/g;

console.log(str.match(pattern));    // [ ' ', '\r', '\n', '\f', ' ' ]

// \S 匹配任意非空白字符
var str = 'Your \r\n\f ful',
    pattern = /\S/g;

console.log(str.match(pattern));    // [ 'Y', 'o', 'u', 'r', 'f', 'u', 'l' ]

// \d 匹配任意数字
var str = '123helloworld34javascript',
    pattern = /\d+/g;

console.log(str.match(pattern));    // [ '123', '34' ]

// \D 匹配任意非数字
var str = '123helloworld34javascript',
    pattern = /\D+/g;

console.log(str.match(pattern));    // [ 'helloworld', 'javascript' ]

// \b 匹配单词边界
var str = 'I never come back',
    pattern = /e\b/g;

if (pattern.test(str)) {
    console.log(RegExp['$&']);  // e
    console.log(RegExp['$`']);  // I never com
}

// \B 匹配非单词边界
var str = 'I never come back',
    pattern = /e\B/g;

if (pattern.test(str)) {
    console.log(RegExp['$&']);  // e
    console.log(RegExp['$`']);  // I n
}

// \n 匹配换行符
var str = 'hello \n world',
    pattern = /\n/;

console.log(str.match(pattern));  // [ '\n', index: 6, input: 'hello \n world' ]

// \u0000:\uFFFF 匹配十六进制Unicode字符
var str = 'Visit W3School. Hello World!',
    pattern = /\u0057/g;

console.log(str.match(pattern));    // [ 'W', 'W' ]

// \x00:\xFF 匹配十六进制ASCII字符
var str = 'Visit W3School. Hello World!',
    pattern = /\x57/g;

console.log(str.match(pattern));    // [ 'W', 'W' ]
```