var cat = {
    breed: 'Abyssinian',
    name: 'Mikey',
    weightInPounds: 10,
    weightInKg: function() {
        kg = this.weightInPounds * 0.454;
        return kg;
    },
    sayMeow: function() {
        return 'meow!';
    }

};

function getAllPropertiesAndTypes(cat) {
    let res = '';
    for (let prop in cat) {
        res += prop + " - " + typeof cat[prop] + '; ';
    }
    return res;
}

console.log(getAllPropertiesAndTypes(cat));
console.log(cat.weightInKg())
console.log(cat.sayMeow())