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

openModel
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
            ID: Date.now,
            Roll_Num: updateId || roll,
            FUll_Name: name,
            Data_Base: course1,
            Pythone_: course2,
            Web_Develop: course3,
            Network_: course4,
            Statis_tics: course5,
        }




        console.log(registExam.Roll_Num);

        if (updateMode) {
            // update the exam
            updateExam(registExam);
        } else {
            // regist exam
            registNewExam(registExam, name, roll);
        }

        loadExamData();
        closePopUp();

    }



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
    tr.dataset = exam.ID;
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
            
             
                    <div id="popup"  class="popup-content">
                        <p>Are you sure you want to delete?</p>
                        <button id="yesBtn">Yes</button>
                        <button id="noBtn">No</button>
                    </div>
             


       
        </td>



`
    // varibales for storing delete & update elemants
    let deleteBtn = tr.querySelector('#deleteBtn');
    let updateBtn = tr.querySelector('#edit');
    let yesBtn = tr.querySelector('#yesBtn');
    let noBtn = tr.querySelector('#noBtn');
    let popUpBtn = tr.querySelector('#popup');

    deleteBtn.addEventListener('click', ()=>{
        popUpBtn.style.display="block";
    })

    noBtn.addEventListener('click', ()=>{
        popUpBtn.style.display="none";
    })

    yesBtn.addEventListener('click', ()=>{
        deleteExam(exam.ID);
        popUpBtn.style.display="none";

    })


    updateBtn.addEventListener('click', () => {
        handleUpdate(exam.Roll_Num);

    })

    return tr;

}

// handleUpdate
function handleUpdate(examId) {
    let studentExam = getStudentExam();
    fetchStudentData();
    let findExam = studentExam.find(exam => exam.Roll_Num === examId);

    selectFullName.value = findExam.FUll_Name;
    selectRollNum.value = findExam.Roll_Num;
    Database.value = findExam.Data_Base;
    Pythone.value = findExam.Pythone_;
    WebDevelopment.value = findExam.Web_Develop;
    Network.value = findExam.Network_;
    Statistics.value = findExam.Statis_tics;
    updateId = examId;
    updateMode = true;
    openPopUp();

}


// function updateExam(Exam){
//     let studentExam = getStudentExam();
//     fetchStudentData();
//     let examIndex = studentExam.findIndex((exam)=> exam.ID == Exam);

//     studentExam[examIndex] = Exam;

//     localStorage.setItem('studentExam', JSON.stringify(Exam));

//     loadExamData();


// }

// deletePopUp


// deleteExam 

function updateExam(Exam) {
    let studentExam = getStudentExam();

    let examIndex = studentExam.findIndex((exam) => exam.Roll_Num == Exam.Roll_Num);

    if (examIndex === -1) {
        console.error("❌ Error: Exam not found in studentExam array!");
        return;
    }

    // Si sax ah u update garee
    studentExam[examIndex] = { ...studentExam[examIndex], ...Exam };

    // Dib u kaydi array-ga
    localStorage.setItem('studentExam', JSON.stringify(studentExam));



    // Dib u cusbooneysii table-ka
    // console.log("📌 studentExam Data:", studentExam);
    loadExamData();
}

// console.log("📌 localStorage:", localStorage.getItem("studentExam"));


function deleteExam(examId) {
    let studentExam = getStudentExam();

    let filterExam = studentExam.filter(exams => exams.ID !== examId);

    localStorage.setItem('studentExam', JSON.stringify(filterExam));
    loadExamData();
}


// deletePopDown





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
    localStorage.setItem('studentExam', JSON.stringify(studentExam));
    console.log("✅ Exam registered successfully!");
}



// getStudentExam

function getStudentExam() {
    let studentExam = JSON.parse(localStorage.getItem('studentExam')) || [];
    console.log(studentExam.length);
    console.log(studentExam);
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

            // console.log(optionName);
            // console.log(optionRoll);
            // console.log(optionRoll);
            console.log(student.Name);

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

    let ExamStudents = getStudentExam();

    tbody.innerHTML = "";

    ExamStudents.map((student) => {
        return tbody.appendChild(registExamDom(student));

    })

    // fetchStudentData();

}