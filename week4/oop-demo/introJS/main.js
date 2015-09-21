// specifically, thieving burglars
// var Burglar = function(name, dexterity, ninja){
//     this.name      = name
//     this.dexterity = dexterity
//     this.ninja     = ninja
//     this.stuff     = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball']
// }



var Burglar = function(name, which){
    this.name      = name + which
    this.which     = which
    this.dead      = false
    this.dexterity = Math.ceil(Math.random() * 10)
    this.ninja     = this.dexterity > 7
    this.stuff     = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball']
}





// var steve = new Burglar('Steve', 4, false)

// console.log(steve)

// var otherDanielle = new Burglar('Danielle', 10, true)

Burglar.prototype.burgle = function(victim){
    if ( victim.stuff.length !== 0 ) {
        this.stuff.push(victim.stuff.pop())
        console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else if ( victim.dead === false ) {
        victim.dead = true
        console.log("hasta la vista, " + victim.name)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else { victim.dead = true }
}

// steve.burgle(otherDanielle)
// steve.burgle(otherDanielle)
// steve.burgle(otherDanielle)
// steve.burgle(otherDanielle)

// otherDanielle.burgle(steve)

var cityOfThieves = []

for ( var i = 0; i < 10; i++ ) {
    cityOfThieves.push(new Burglar('steve', i))
}


var randomBurgle = function(){
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if ( !burglar.dead && !victim.dead ) {
        burglar.burgle(victim)
    }

}

var burgleInterval = setInterval(function(){
    randomBurgle()
    
}, 10)


