

function Cons(name,age) {
    this.name = name
    this.age = age
}

function _new(cons,params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments)
    // 取出构造函数
    var conS = args.shift()
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = conS.apply(context,args)
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Cons,'lican', 24)
console.log(actor.name)
