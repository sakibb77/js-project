"use strict"

const data = async () => {
    let actualData;
    try {
        const res = await fetch('https://data.covid19india.org/data.json');
        let data = await res.json();
        actualData = data.statewise;
        console.log(actualData)
    } catch (err) {
        console.log(err)
    }
    return actualData;
}

data()


const dataShow = async () => {
    const tbody = document.getElementById('tbody');
    let actualData = await data();
    let count = 1;


    tbody.innerHTML = `${actualData.map((data) => {
        return `
        <tr>
           <td>${count++ +'.  ' + data.state}</td>
           <td>${data.active}</td>
           <td>${data.deaths}</td>
           <td>${data.recovered}</td>
        </tr>
        `
    }).join('')}`

}

dataShow()