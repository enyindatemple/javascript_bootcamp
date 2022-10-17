//OBJECT IN JAVASCRIPT
const temple = {
    firstName: 'ENYINDA',
    lastName: 'Hanachor',
    age: 24,
    gender: 'Male',
    complexion: 'Fair',
    height: '7.6',
    weight: '80'
};

//Accesing using Dot notation
const myHeight = temple.height;
console.log(myHeight)

//Accessing using array
const myWeight = temple['weight']
console.log(myWeight)

temple['weight'] = '95'
console.log(temple)

temple['lastName'] = 'Trump'
temple.middleName = 'Hanachor'
console.log(temple)

//Practice exercise 4
//No.1
const myCar = {
    make: 'Lamborgini',
    model: 'Spider',
    color: 'red',
    speed: '35km/hr',
    hasTracker: true,
}

//No.2
let carColor = 'color'
myCar['color'] = 'black'
console.log(myCar)

//No.3
carColor = 'For Sale'
myCar['forSale'] = true
console.log(myCar)

//No.4
const make = myCar.make;
const model = myCar.model;
console.log(`make: ${make}`)
console.log(`model: ${model}`)

//No.5
const forSale = myCar['For Sale']
console.log(`Is car for sale?: ${myCar.forSale}`)

//WORKING WITH OBJECTS AND ARRAYS
//Objects In Objects
const student ={
    fullName: 'Peter Obi',
    jambReg: '40263264HB',
    matNum: 'DE:2019/4516',
    bio: {
        age: 24,
        DOB: 5/5/1998,
        stateOfOrigin: 'Rivers',
        LGA: 'Ikwerre',
        healthStatus: {
            bloodGroup: '0+',
            genotype: 'AA',
            mantus: false,
        }
    },
    levels: ['LV100', 'LV200', 'LV300', 'LV400'],
    currentLevel: 'LV300',
    courses: [
        {
            YR1: {
                sem1: ['Mth110', 'Gst100', 'PHY 101'],
                sem2: ['MTH114', 'GST104', 'PHY104']
            },
            YR2: {
                sem1: [],
                sem2: []
            }
        }
    ]
}

const myGenotype = student.bio.healthStatus.genotype
console.log(myGenotype)

const gst104 = student.courses[0].YR1.sem2[1];
console.log(gst104)

const phy101 = student.courses[0].YR1.sem1[2];
console.log(phy101)

//Practice exercise5
//No.1
const people = {
    friends: []
}

//No.2
const friend1 = {
    firstName: 'Progress',
    lastName: 'Ugorji',
    id: '001'
}
const friend2 = {
    firstName: 'Elem',
    lastName: 'Blessing',
    id: '002'
}
const friend3 = {
    firstName: 'Obinna',
    lastName: 'Gift',
    id: '003'
}

//No.3
people.friends.push(friend1, friend2, friend3)

//No.4
console.log(people)