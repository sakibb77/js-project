
let alldata = JSON.parse(data);
// alldata.map((a) => {
//     console.log(a)
// })

window.onload = () => {
    studentName();
}


function studentName() {
    let studentArea = document.querySelector('#student');
    console.dir(studentArea)
    studentArea.innerHTML = `${alldata.map(function (student) {
        return `
        <li onclick="showDetails(${student._id})">${student._id + 1 + '.  ' + student.name}</li>`
    }).join('')}`
}

function showDetails(id) {
    
    let tbody = document.getElementById('tbody');



    tbody.innerHTML = `
        <td>${alldata[id].scores[0].score}</td>
        <td>${alldata[id].scores[1].score}</td>
        <td>${alldata[id].scores[2].score}</td>`
}

// console.dir(document.querySelector('#student'))