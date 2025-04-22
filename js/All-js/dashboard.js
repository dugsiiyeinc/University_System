let students = document.querySelector('#students');
let exams = document.querySelector('#exams');
let users = document.querySelector('#users');


function getLocalStorageData(){
    // students 
    let students_ = JSON.parse(localStorage.getItem('students'));
    console.log(students.length);

    // exams
    let exams_ = JSON.parse(localStorage.getItem('studentExam'));
    console.log(exams.length);

    // users
    let users_ = JSON.parse(localStorage.getItem('users'));
    console.log(users.length);
    
    return {
        students_ , users_ , exams_ 
    };
}


// getLocalStorageData()


// Count Student

function countStudent(){
    let {students_ , exams_ , users_} = getLocalStorageData();

    students.textContent = `${students_.length}`
    exams.textContent = `${exams_.length}`
    users.textContent = `${users_.length}`
}



countStudent()