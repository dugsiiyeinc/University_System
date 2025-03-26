let table = document.querySelector('#table');
let tbody = document.querySelector('#tbody');
let form = document.querySelector('#form')
let fullName = document.querySelector('#fullName')
let StudentId = document.querySelector('#StudentId')
let dateBirth = document.querySelector('#dateBirth')
let gender = document.querySelector('#gender')
let nationality = document.querySelector('#nationality')
let phone = document.querySelector('#phone')
let PreviousSchool = document.querySelector('#PreviousSchool')
let faculty = document.querySelector('#faculty')
let Id = 0;
let updateMode = false;
let updateStudentId = null;
let titleForm = document.querySelector('#titleForm');
let submitBtn = document.querySelector('#submit');
submitBtn.textContent = 'Register Student';
titleForm.textContent = 'Register Form';


// loadStudentData

document.addEventListener('DOMContentLoaded', loadStudents);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let full_name = fullName.value.trim();
    let date_birth = dateBirth.value.trim();
    let Gender = gender.value.trim();
    let national = nationality.value.trim();
    let mobile = phone.value.trim();
    let oldSchool = PreviousSchool.value.trim();
    let course = faculty.value.trim();
    let StudenId = StudentId.value.trim();





    if (StudenId !== '' & full_name !== '' & date_birth !== '' & Gender !== '' & national !== '' & mobile !== '' & oldSchool !== '' & course !== '') {

        let registerStudent = {
            id: updateStudentId || Date.now(),
            ID: StudenId,
            Name: full_name,
            Date: date_birth,
            Gender: Gender,
            National: national,
            Phone: mobile,
            PrevSchool: oldSchool,
            desiredCourse: course

        }

        if (updateMode) {
            // update
            editStudent(registerStudent);
            location.reload();

        } else {
            // getDataLocalStorage 
            let students = getDataLocalStorage();
            // unique id 
            let existingId = students.find(student => student.ID === StudenId);
            // console.log(existingId);
            if (existingId) {
                alert("this id is existing already");
                return existingId;
            }

            createNewStudent(registerStudent);
        }
        loadStudents(registerStudent);
        // Id++;
        closePopUp()
    }



    form.reset();

})



function registerStudentDom(student) {
    let trow = document.createElement('tr');
    trow.dataset = student.ID;



    trow.innerHTML = `          <td>${student.ID}</td>
                                <td>${student.Name}</td>
                                <td>${student.Date}</td>
                                <td>${student.Gender}</td>
                                <td>${student.National}</td>
                                <td>${student.Phone}</td>
                                <td>${student.PrevSchool}School</td>
                                <td>${student.desiredCourse}</td>
                                <td><i class="fa-solid fa-pen-to-square" id="edit"></i>
                                    <i class="fa-solid fa-trash" id="delete"></i>

                                      <div id="popup"  class="popup-content">
                                        <p>Are you sure you want to delete?</p>
                                        <button id="yesBtn">Yes</button>
                                        <button id="noBtn">No</button>
                                     </div>
                                </td>
                         
    `;
    
    // popDelete varibales 
    let popUpDelete = trow.querySelector('#popup');
    let yesBtn = trow.querySelector('#yesBtn');
    let noBtn = trow.querySelector('#noBtn');



    let deleteBtn = trow.querySelector('#delete');

    deleteBtn.addEventListener('click', () => {
        popUpDelete.style.display="block";
    });

    yesBtn.addEventListener('click', ()=>{
        deleteStudent(student.id);        
        popUpDelete.style.display="none";

    });

    noBtn.addEventListener('click', ()=>{
        popUpDelete.style.display="none";

    })

    // updateStudent
    let editBtn = trow.querySelector('#edit');
    editBtn.addEventListener('click', () => {
        handleUpdate(student.id);
    })
    Id++;
    return trow;




}


function handleUpdate(studentId) {
    let students = getDataLocalStorage();
    let studentFind = students.find((student) => student.id == studentId);


    fullName.value = studentFind.Name;
    dateBirth.value = studentFind.Date;
    gender.value = studentFind.Gender;
    nationality.value = studentFind.National;
    phone.value = studentFind.Phone;
    PreviousSchool.value = studentFind.PrevSchool;
    faculty.value = studentFind.desiredCourse;
    StudentId.value = studentFind.ID;
    updateMode = true;
    updateStudentId = studentId;

    submitBtn.textContent = 'Update Student';
    titleForm.textContent = 'Update Form';
    openPopUp();

}


function editStudent(student) {
    let students = getDataLocalStorage();

    let studentIndex = students.findIndex((stu) => stu.id == student.id);
    students[studentIndex] = student;

    localStorage.setItem('students', JSON.stringify(students));

}



// deleteStudent

function deleteStudent(studentId) {
    let students = getDataLocalStorage();

    let filterStudents = students.filter(stude => stude.id !== studentId);


    localStorage.setItem('students', JSON.stringify(filterStudents));

    loadStudents()
}





// setLocalStorage

function createNewStudent(student) {
    let RegisteredStudent = getDataLocalStorage();
    RegisteredStudent.push(student);

    localStorage.setItem('students', JSON.stringify(RegisteredStudent));
}



function getDataLocalStorage() {

    let students = JSON.parse(localStorage.getItem('students')) || [];

    return students;
}



// loadStudentData

function loadStudents() {
    let students = getDataLocalStorage();
    console.log(students.length);
    console.log(students);
    tbody.innerHTML = "";
    students.map((student) => {
        return tbody.appendChild(registerStudentDom(student));

    })

}




// closingPopUp when registerNewStudent
function closePopUp() {
    let registerForm = document.querySelector('#register');
    registerForm.style.display = "none"

}


// openingPopUp when updateExistingStudent
function openPopUp() {
    let registerForm = document.querySelector('#register');
    registerForm.style.display = "flex"

}
