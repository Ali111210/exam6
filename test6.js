// 1
const school = {
    name: "№133 School",
    phoneNumber: +7777777777,
    students: [
        { studentName: 'Ali', top: 'A', progress: 100, lessons: 5 },
        { studentName: 'Adil', top: 'B', progress: 90, lessons: 6 },
        { studentName: 'Abzal', top: 'A', progress: 78, lessons: 4 },
        { studentName: 'Roma', top: 'C', progress: 88, lessons: 7 },
        { studentName: 'Era', top: 'B', progress: 95, lessons: 6 }
    ]
};

// 2
function changeSchoolName(school) {
    const zhanaMektep = prompt('Жаңа оқу орталығынын атауын енгізіңіз:');
   if (zhanaMektep) {
    school.name = zhanaMektep;
    console.log(`Оқу орталығының жаңа атауы: ${N133}`);
}else{
    alert("Атау өзгертілмеді")
   }
}

// 3
function changePhoneNumber(school) {
    const newPhoneNumber = prompt('Жаңа телефон нөмірін енгізіңіз:');
    if (newPhoneNumber.trim() !== '') {
        school.phoneNumber = newPhoneNumber;
    }
    console.log(`Oqu ortalygyn telefon nomeri: ${7777777777}`);
}

// 4
function listStudentNames(school) {
    const studentNames = school.students.map(student => student.studentName).join('\n');
    alert(`Студенттер тізімі:\n${studentNames}`);
}

// 5



addStudent(school);
console.log(school);


// 1
console.log(school);
// 2
changeSchoolName(school);
// 3
changePhoneNumber(school);
// 4
listStudentNames(school);





