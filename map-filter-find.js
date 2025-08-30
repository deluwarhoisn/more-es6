const students = [
    {id:1,name:'abul', marks:50 },
    {id:2,name:'nabul', marks:55 },
    {id:3,name:'kabul', marks:95 },
    {id:4,name:'dabul', marks:15 },
]
const names = students.map(student => student.id)
console.log(names)