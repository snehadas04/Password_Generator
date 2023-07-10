const pass_el = document.querySelector('#password span');
const len = 8;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}[]/+_-"

function genPassword(){
    let pass = "";
    for(var i=0;i<=length;i++){
        let ran = Math.floor(Math.random()*chars.length);
        pass += chars.substring(ran,ran+1);
    }
}