var {OrderedMap, Map} = require('immutable')
var map = OrderedMap({})
var map2 = map.set('z', 1)
var map3 = map2.set('x', -2)
map3.forEach((key, value) => {
	console.log(key, value)
})

var mp = Map({})
var mp2 = mp.set('z', 1)
var mp3 = mp2.set('x', 2)
mp3.forEach((k, v) => {
	console.log(k, v)
})