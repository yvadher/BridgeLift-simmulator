import $ from 'jquery';
console.log("Imported");

function boatStop() {
    window.emergency = true;
    console.log("Came");
};


window['boatStop'] = new Function("window.emergency = true;");