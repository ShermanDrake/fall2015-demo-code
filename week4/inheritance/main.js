var Monkey = function(name, color){
    this.name  = name || 'nameless monkey'
    this.color = color || 'colorless monkey'
}
Monkey.prototype.climb = function(tree){
    console.log(this.name + ' climbs the ' + tree + ' tree.')
}

var george = new Monkey('George', 'navajo white')
// george.climb('palm')



// var FlyingMonkey = function(name, color, wingspan){
//     this.name     = name
//     this.color    = color
//     // international monkey wing units
//     this.wingspan = wingspan
// }
// FlyingMonkey.prototype.climb = function(tree){
//     console.log(this.name + ' climbs the ' + tree + ' tree.')
// }
// FlyingMonkey.prototype.fly = function(){
//     console.log(this.name + ' flew ' + this.wingspan*10 + ' feet.')
// }




var FlyingMonkey = function(name, color, wingspan){
    // this = {}
    // We only pass in name and color, because the base class only cares about name and color. regular monkeys don't have wingspan.
    Monkey.call(this, name, color)
    this.wingspan = wingspan
}

// set up the base class first, then set 
FlyingMonkey.prototype = new Monkey()
FlyingMonkey.prototype.constructor = FlyingMonkey
FlyingMonkey.prototype.fly = function(){
    console.log(this.name + ' flew ' + this.wingspan*10 + ' feet.')
}


var evilGeorge = new FlyingMonkey('EvilGeorge', 'dodger blue', 9)

// evilGeorge.climb('oak')
evilGeorge.fly()
