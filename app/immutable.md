### 背景知识
- 数据一旦创建就不能更改
- Facebook开发
- 只能用，不能改，数据只读
- immutable.js持久化数据结构
- 用的是什么拷贝？

### List
- List对应原生数组结构
- List([1,2,3,4])
- 不能这么做：new List([1,2,3,4])
- List.isList() // 判断是否是List类型
- List.of() // 创建一个新的List
- List.of(1,2,3,4)
- size 取得List的长度
- set(下标, 值) // -1,时表示从右到左，也就是取到最后一个
- const x = List([1,2,3])
- x.delete(0) // 根据下标删除，支持-1，即负数
- x.insert(2, 666)
- x.update(下标, callback)
- x.update(2, x => x + 100)
- clear 清空并返回一个长度为0的新数组，调用者并不改变
- push、pop、unshift、shift和原生普通数组一样
- setSize 重新设定数组长度，小于原来长度的会进行截断，大于的会用undefined进行填充
- setIn() 设定嵌套层数组结构
- const arr1 = List(List([1]), List([2,2,1]))
- arr1.setIn([1, 2], 22)
- concat 连接n个数组
- concat(List1, List2, ..., Listn)
- merge是concat的别名
- map同原生的map，循环遍历返回新的List
- fliter 循环过滤
- flatten(true | false) // 扁平化list
- find(v, k, list) 查找，返回第一个查找到的结果,一般只需要前两个参数就够了
- findLast, 查找，找到最后一个满足条件的结果
- keys，返回所有的下标，使用for...of遍历
- values，返回所有的值
- entries // 获取所有的(key, value)

### groupBy分组
```
const { List } = require('immutable')
var group = List([
	{sex: 'male', age: 10},
	{sex: 'female', age: 11},
	{sex: 'male', age: 10},
	{sex: 'female', age: 12},
	{sex: 'male', age: 9},
])

var gr = group.groupBy(x => x.age)

console.log(gr)
```

### Map
- key、value键值对
- key可以是任意类型
	* set(key, value)
- get(key)
- delete(key)
- deleteAll([key]) // 批量删除
- Map是无序的
- clear() 清除，返回新的空Map
- update(key, callback),返回新的修改后的Map
- merge(map1, map2)，concat是merge的别名
- setIn([层次1key，层次2key], value)
- toJS 把map转换成原生object，深转换
- toJSON， 同上，浅转换
- toArray，转成数组，浅转换
- toObject，转成object，浅转换
- equals 判断两个map值是否相等
- find(value, key)
- flatten(true | false) // 拉平
- has 判断是否有指定的key
- includes 判断是否有指定的value

### OrderedMap
- 有序的map
- 迭代输出的顺序是调用set的顺序
- 需要更高的开销

### Set
- 可以理解为value唯一的数组，不允许出现重复的值
- 工厂方法，不允许new，可以去重
- add，添加值
- delete
- clear，清空返回新的set
- union，N个set合并成一个set
- intersect，取多个set的交集
- subtract[1, 3]，从set除去一些值
- 无序
- has(key)
- includes(value)
- get(key)
- rest() 除了第一个之外的剩余元素
- butLast() 获取除了最后一个元素
- skip(number) 跳过指定number个数
- take(number) 取得前number个元素

### OrderedSet
- 有序
- Set的超集
- sort((valueA:T, valueB:T) => number)

### Seq
- 不到用的时候不运算
- 提升性能
- 可以通过Seq把任意collection转成Seq
- Keyed
- Indexed
- Set

### immutable对象与原生对象的相互转换
- fromJS() 原生 ---> immutable
	* 数组 -> List
	* 对象 -> Map
- toJS() immutable ---> 原生
	* List -> 数组
	* Set -> 数组
	* Map -> 对象

### Range
- 快速生成一个数组
- Range(start?:number, end?:number, step?:number)

### Repeat
- Repeat(value, number) // 重复生成number个value

### 在redux中使用immutable
1. 安装引入 redux-immutable
```import {combineReducers} from 'redux-immutable'```
2. 初始化reducer
```
const reducer = combineReducers({

})
state 必须是immutable类型的
```

### 小结
- is(a, b) // 判断a对象与b对象是否相等