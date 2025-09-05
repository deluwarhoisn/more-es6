const student ={
    name:`rafid`,
    1:50,
    marks:99

}
// dot notation

const studentName = student.name;

const studentOne = student['name']
console.log(studentOne)

for(const key in student){
    const value = student[key]
}

const propName = 'marks'
console.log(student[propName])


const arr =[10,]