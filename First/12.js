// constructor function

function get(name, website){
    this.name= name,
    this.website = website
}

const obj = new get('js', 'startup.com')

console.log(obj.name)       // js
console.log(obj.website)    // startup.com

