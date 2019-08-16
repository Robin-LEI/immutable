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