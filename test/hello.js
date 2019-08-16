const { Map } = require('immutable')
let a = Map({
	name: 'zhang san',
	car: Map({
		price: 100
	})
})
let b = a.set('name', 'li si')

console.log('a=', a)
console.log('b=', b)
// a.get('car') === b.get('car') 没有改变的数据，共享一片内存区域
// 不会把原来整个内存拷贝一份
console.log('a===b', a === b, a.get('car') === b.get('car'))