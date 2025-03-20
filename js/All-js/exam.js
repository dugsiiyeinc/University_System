// handle all tags 
let examForm = document.querySelector('#form');
let selectRollNum = document.querySelector('#RollNum');
let selectFullName = document.querySelector('#fullName');
let Database = document.querySelector('#Database');
let Pythone = document.querySelector('#Pythone');
let WebDevelopment = document.querySelector('#WebDevelopment');
let Network = document.querySelector('#Network');
let Statistics = document.querySelector('#Statistics');
let tr = document.createElement('tr');
let tbody = document.querySelector('#tbody');


let updateMode = false;
let updateId = null;


// loadData
document.addEventListener('DOMContentLoaded', loadExamData);
examForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = selectFullName.value.trim();
    let roll = selectRollNum.value.trim();
    let course1 = Database.value.trim();
    let course2 = Pythone.value.trim();
    let course3 = WebDevelopment.value.trim();
    let course4 = Network.value.trim();
    let course5 = Statistics.value.trim();

    // let studentExamData = getStudentExam();

    // let existingRollNum = studentExamData.find(roll => roll.Roll_Num === roll);

    // if(existingRollNum){
    //     alert("roll number is already exist");
    //     return existingRollNum;
    // }

    if (name !== '' & roll !== '' & course1 !== '' & course2 !== '' & course3 !== '' & course4 !== '' & course5 !== '') {

        let registExam = {
            ID: updateId || Date.now,
            Roll_Num: roll,
            FUll_Name: name,
            Data_Base: course1,
            Pythone_: course2,
            Web_Develop: course3,
            Network_: course4,
            Statis_tics: course5,
        }

        registNewExam(registExam, name, roll);
        loadExamData();

        console.log(registExam.Roll_Num);

    }

    if (updateMode) {
        // update the exam
    } else {
        // regist exam
    }

    closePopUp();
    examForm.reset();

})



openModel.addEventListener('click', (e) => {
    e.preventDefault();
    openPopUp();
    fetchStudentData()
    // console.log("click");

})

// registExamDom
function registExamDom(exam) {

    // fetchStudentData();

    // displayDomAsTable

    // console.log(exam);

    let tr = document.createElement('tr');

     tr.innerHTML = `
  
        <td>${exam.Roll_Num}</td>
        <td>${exam.FUll_Name}</td>
        <td>${exam.Data_Base}</td>
        <td>${exam.Pythone_}</td>
        <td>${exam.Web_Develop}</td>
        <td>${exam.Network_}</td>
        <td>${exam.Statis_tics}School</td>
        </td>
        <td><i class="fa-solid fa-pen-to-square" id="edit"></i>
            <i class="fa-solid fa-trash" id="deleteBtn"></i>
             <div id="popup" class="popup">
    <div class="popup-content">
      <p>Are you sure you want to delete?</p>
      <button id="yesBtn">Yes</button>
      <button id="noBtn">No</button>
    </div>
  </div>
        </td>



`
   

    let deleteBtn = tr.querySelector('#deleteBtn');
    if(deleteBtn){
        deleteBtn.addEventListener('click', () => {
            console.log("click");
            
            deletePopUp();
        })
    
    }else{
        console.log("delete btn not found");
        
    }
   
 
    return tr;

}

   // deletePopUp
   function deletePopUp() {
    let popUpDelete = document.querySelector('.popup-content');
    popUpDelete.classList.add('active');

}



// get student data like rollNum & FullName from local storage
function getStudentData() {
    let studentData = JSON.parse(localStorage.getItem('students')) || [];
    return studentData;
}


// registNewExam

function registNewExam(exam, fullName, rollNum) {

    let studentExam = getStudentExam();
    let existingExam = studentExam.find(exam => exam.FUll_Name === fullName && exam.Roll_Num === rollNum);
    if (existingExam) {
        alert("❌ Error: This user has already taken the exam!");
        return existingExam;
    }
    studentExam.push(exam);
    localStorage.setItem('exams', JSON.stringify(studentExam));
    console.log("✅ Exam registered successfully!");
}



// getStudentExam

function getStudentExam() {
    let studentExam = JSON.parse(localStorage.getItem('exams')) || [];
    return studentExam;
}



function fetchStudentData() {
    let student_data = getStudentData();
    // looping studentID and StudentName
    if (student_data.length === 0) {
        console.log("no students found in localStorage");
    } else {
        student_data.map(student => {
            let optionName = document.createElement('option');
            let optionRoll = document.createElement('option');

            optionName.value = student.Name;
            optionName.textContent = student.Name;
            optionRoll.value = student.ID;
            optionRoll.textContent = student.ID;

            console.log(optionName);
            console.log(optionRoll);
            console.log(optionRoll);

            selectFullName.appendChild(optionName)
            selectRollNum.appendChild(optionRoll)
        });



    };
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


// loadExamData

function loadExamData() {

    let studentExam = getStudentExam();
    tbody.innerHTML = "";

    studentExam.map((student) => {
        return tbody.appendChild(registExamDom(student));

    })

    // fetchStudentData();

}