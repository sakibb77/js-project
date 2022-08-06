"use strict"


 function cal(){
    let dataval = document.getElementById('dataval').value;
    let namtaVal = document.getElementById('namtaVal');
    let i;
    
    for(i = 1; i <= 10; i++){
        let element = document.createElement('li');
        namtaVal.append(element);
        element.append((dataval + '*' + i +  ' = ' + dataval*i));
    }
   
};

function reset() {
    let namtaVal = document.getElementById('namtaVal');
    namtaVal.innerText = '';
}
