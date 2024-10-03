const user = {
    name : 'Raju',
    email : 'raju123@gmail.com',
    password : '12345678'
}

console.log(user);

console.log(user.name);
console.log(user.email);
console.log(user.password);

console.log(user['email']);//Second method to fetch data from object

user.password = 'abc123';
console.log(user);

user.address = 'Lucknow'
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartPhone = {
    brand : 'Samsung',
    model : 'Galaxy M31',
    price : '14999',
    color : ['black', 'blue', 'red']
}

//change the model of phone to Galaxy S24
//access  the second color
//replace the first color with 'white'
//add a new color 'green'

smartPhone.model = 'Galaxy S24'

const newSmartPhone = smartPhone.color.filter((p)=>{
    return p === 'blue'
})
const kyu =  smartPhone.color[1]
console.log(kyu);

smartPhone.color.splice(0,1,'white')

smartPhone.color.push('green')

console.log(smartPhone);
