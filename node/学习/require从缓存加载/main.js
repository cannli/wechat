require('./a')
var fn =require('./b')
fn()
/*
* 优先从缓存加载
* 由于a 已经加载过b,所以这里不会重新加载
* 可以拿到其中export的对象接口
* 这样做的目的提高效率，避免重复加载
* */
