let form = document.querySelector('.exam-form');
let tableExam = document.querySelector('.table');
let close = document.querySelector('.close');
let tbody = document.querySelector('tbody');
let rollInput = document.querySelector('#roll-num');

form.addEventListener('click', (e)=>{
    e.preventDefault();
    let RollNum = rollInput.value.trim();
    // if(RollNum == ""){
    //     alert ("insert your roll-num");
    //     return RollNum;
    // }
    let examData = getExamDataLocalStorage();

    let student = examData.find(roll => roll.Roll_Num === RollNum );

    if(student){
        
      
            let tr = document.createElement('tr');

             // totalExam
    let totalExam = 
    Number(student.Data_Base) +
    Number(student.Pythone_) +
    Number(student.Web_Develop) +
    Number(student.Network_) +
    Number(student.Statis_tics);

    //  grade 
    let grade = totalExam < 350 ? 'Failed' : 'Passed';

            
    

        tr.innerHTML = `
        
                    <td>${student.FUll_Name}</td>
                    <td>${student.Data_Base}</td>
                    <td>${student.Pythone_}</td>
                    <td>${student.Web_Develop}</td>
                    <td>${student.Network_}</td>
                    <td>${student.Statis_tics}</td>
                    <td>${totalExam}</td>
                    <td><strong style='color: ${grade === 'passed' ? 'green' : 'red'}'>${grade}</strong></td>
                    

        `

        tbody.appendChild(tr);
        


        // let tr = document.createElement('tr');

        popUp();
    }else{
        // alert('roll-num is not exist')
        return student;
    }


  
})


// OpenPopUp
function popUp(){
    tableExam.classList.add('active');
}

// clsoePopUp
close.addEventListener('click', ()=>{
    tableExam.style.display="none";
    location.reload();
})


function getExamDataLocalStorage (){
    let examData = JSON.parse(localStorage.getItem('studentExam')) || [];

    return examData;
}