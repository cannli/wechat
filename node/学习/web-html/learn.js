// var a = 2

// function lican() {
//     a = 1
//     console.log(a)  // 1
// }

function lican() {
    var a = 1
    console.log(a)    // 2
    a = 2
}

lican()


var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };
    }
};

console.log(object.getNameFunc()()); // My Object
