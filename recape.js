// var let const
const tax = 5000;
let eat = 5;
eat = 2

const student = { name: `name`, mark: 50 }

const friend = [`abul`, `babul`, `kabul`]

//  default parameter

function add(num1, num2 = 0) {

}

// template string
const dynamicText = `my tax: ${tax} and marks ${student.mark * 1.2} has friend: ${friend[1]}

}`

const innerHTML = `
<div>
    <h1> hello: ${friend.length}</h1>
</div>`


//  arrow function
const add2 = (num1,num2 =0 ) => num1+ num2;
const tenTimes = x => x * 10;

//  spread 
const newFriends = [...friends, `dabul`,`ebul`]


// destructuring

const {marks: totalMarks, age = 0 } = student 
// console.log(totalMarks,age)
const [firstFriend]= friends;
