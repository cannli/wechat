var a = {
    value: 0,
    valueOf: function () {
        this.value++;
        return this.value
    }

};

console.log(a == 1 && a == 2);
//true


function f1 () {
    var a = 2
    function f2(){
        console.log(a)
    }
    return f2
}

var x = f1()
x()
