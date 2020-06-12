const text = document.getElementsByClassName(".textview");
const body = document.getElementById("body");
const container = document.getElementById("firstcontainer");
const view = document.getElementById("textview");

/* Operator functions */
function insert(num){
 document.form.textview.value = document.form.textview.value + num;
};

function clean(){
    document.form.textview.value = "";
};

function equal(){

    const expr = document.form.textview.value;
     document.form.textview.value = eval (expr)

};

function del(){
    const expr = document.form.textview.value;
    document.form.textview.value = expr.substring(0,expr.length-1);
};


/* Button option fumctions */
function firstbtn(){
    container.setAttribute("id", "firstcontainer")
    view.setAttribute("id", "textview")
    body.setAttribute("id", "body")
};

function secondbtn(){
    container.setAttribute("id", "secondcontainer")
    view.setAttribute("id", "secondtextview")
    body.setAttribute("id", "secondbody")
};

function thirdbtn(){
    container.setAttribute("id", "thirdcontainer")
    view.setAttribute("id", "thirdtextview")
    body.setAttribute("id", "thirdbody")
};

function fourthbtn(){
    container.setAttribute("id", "fourthcontainer")
    view.setAttribute("id", "fourthtextview")
    body.setAttribute("id", "fourthbody")
};


