"use strict"

let rid = 'no'


// form validation


// ===================================================
//         is valid roll
// ===================================================

function isValidRoll() {
    let roll = document.querySelector('#roll');
    let getData = JSON.parse(localStorage.getItem('studentData'));
    let getRoll = [];
    for (let x in getData) {
        getRoll.push(getData[x].roll);
    }
    if (getRoll.indexOf(roll.value) === -1) {
        return true;
    } else {
        return false;
    }
}

// ===================================================
//             function call
// ===================================================

document.querySelector('#add_btn').addEventListener('click', () => {
    isValidRoll();
    dataPush();
});



// open Form

// localStorage.clear()
function openForm() {
    const overlay = document.getElementById('overlay');
    const formBox = document.querySelector('.form-box');

    overlay.style.visibility = 'visible';
    formBox.style.top = '50%';
    formBox.style.opacity = '1';
}

function closeForm() {
    const overlay = document.getElementById('overlay');
    const formBox = document.querySelector('.form-box');

    overlay.style.visibility = 'hidden';
    formBox.style.top = '-50%';
    formBox.style.opacity = '0';

}

// ====================================
//         all input select
// =====================================

function allInput() {
    let fname = document.querySelector('#fname');
    let lname = document.querySelector('#lname');
    let email = document.querySelector('#email');
    let age = document.querySelector('#age');
    let roll = document.querySelector('#roll');
}

// =======================================
//      push black value in input
// =======================================

function pushBlankValue() {
    allInput();
    fname.value = '';
    lname.value = '';
    age.value = '';
    email.value = '';
    roll.value = '';
}


//====================================================
//               all data push
//=====================================================

function dataPush() {
    allInput()
    let stdObj = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        age: age.value,
        roll: roll.value,
    }

    allInput();
    if (fname.value == '' && lname.value == '' && email.value == '' && age.value == '' || null && roll.value == '' || null) {
        document.querySelector('#alert').innerHTML = 'please enter your all details';
    }
    else {
        if (rid == 'no') {
            let getData = JSON.parse(localStorage.getItem('studentData'));
            if (getData == null) {
                let data = [stdObj];
                localStorage.setItem('studentData', JSON.stringify(data));
                closeForm()
            } else {
                // ============duplicate roll number validation=================
                if (isValidRoll()) {
                    getData.push(stdObj);
                    localStorage.setItem('studentData', JSON.stringify(getData));
                    pushBlankValue();
                    closeForm()
                } else {
                    document.querySelector('#alert').innerHTML = 'duplicate roll';
                }
            }
        } else {
            let getData = JSON.parse(localStorage.getItem('studentData'));
            // ============duplicate roll number validation=================
            //================= edite data===================
            getData[rid] = stdObj;
            pushBlankValue();
            closeForm()
            localStorage.setItem('studentData', JSON.stringify(getData));
            rid = 'no';
            showData()
        }
    }

    showData()
}

//====================================================
//               all data push
//=====================================================

// show data function

function showData() {
    let getData = JSON.parse(localStorage.getItem('studentData'));
    let cardBody = document.querySelector('.card-container');

    cardBody.innerHTML = `${getData.map(function (card, index) {
        return `<div class="card">
        <div class="fname item">
            <p>${card.fname + ' ' + card.lname}</p>
        </div>
        
        <div class="email item">
            <p>${card.email}</p>
        </div>
        <div class="age item">
            <p>${card.age}</p>
        </div>
        <div class="roll item">
            <p>${card.roll}</p>
        </div>
        <div class="action item">
            <i class="fa-solid fa-pen-to-square edit"  onclick="editItem(${index})"></i>
            <i class="fa-solid fa-trash delete"  onclick="deleteItem(${index})"></i>
        </div>
    </div>`
    }).join('')}`
}

showData()


// edit item

function editItem(id) {
    rid = id;
    let getData = JSON.parse(localStorage.getItem('studentData'));
    allInput();
    openForm()
    fname.value = getData[id].fname;
    lname.value = getData[id].lname;
    email.value = getData[id].email;
    age.value = getData[id].age;
    roll.value = getData[id].roll;


    // let getId = edit.parentElement.parentElement.id;

}

function deleteItem(id) {
    let getData = JSON.parse(localStorage.getItem('studentData'));
    getData.splice(id, 1)
    localStorage.setItem('studentData', JSON.stringify(getData));
    showData()
}



// ============================================
//         sort student 
// ============================================

function sortStudentDetails() {
    let getData = JSON.parse(localStorage.getItem('studentData'));
    let getRoll = [];
    for (let x in getData) {
        getRoll.push(getData[x].roll);
    }

    let newRoll = getRoll.sort(function (a, b) { return a - b });

}

sortStudentDetails()


// =====================================
//     search box
// =====================================

function search() {
    const input = document.getElementById('input').value.toUpperCase();

    let myCard = document.querySelector('.card-container');
    let card = myCard.getElementsByClassName('card')

    for (let i = 0; i < card.length; i++) {
        let item = card[i].getElementsByClassName('item')[0];
        let p = item.getElementsByTagName('p');
        console.log(p)

        if (item) {
            let textValue = item.textContent || item.innerHTML;
            if (textValue.toUpperCase().indexOf(input) > -1) {
                card[i].style.display = '';
            } else {
                card[i].style.display = 'none'
            }
        }
    }
}
