function soma() {
    var n1;
    var n2
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);

    if (document.getElementById("n1").value == 0 && document.getElementById("n2").value == 0) {
        document.getElementById("n1").value = null;
        document.getElementById("n2").value = null;
    }
    else if (document.getElementById("n1").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n2;
    }
    else if (document.getElementById("n2").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n1;

    }
    else {
        document.getElementById("n1").value = n1 + n2;
        document.getElementById("n2").value = null;

    }

}

function sub() {
    var n1;
    var n2
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);
    if (document.getElementById("n1").value == 0 && document.getElementById("n2").value == 0) {
        document.getElementById("n1").value = null;
        document.getElementById("n2").value = null;
    }
    else if (document.getElementById("n1").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n2;
    }

    else if (document.getElementById("n2").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n1;

    } else {
        document.getElementById("n1").value = n1 - n2;
        document.getElementById("n2").value = null;
    }

}

function mult() {
    var n1;
    var n2
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);

    if (document.getElementById("n1").value == 0 && document.getElementById("n2").value == 0) {
        document.getElementById("n1").value = null;
        document.getElementById("n2").value = null;
    }
    else if (document.getElementById("n1").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n2;
    }
    else if (document.getElementById("n2").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n1;

    } else {
        document.getElementById("n1").value = n1 * n2;
        document.getElementById("n2").value = null;
    }
}

function div() {
    var n1;
    var n2
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);
    if (document.getElementById("n1").value == 0 && document.getElementById("n2").value == 0) {
        document.getElementById("n1").value = null;
        document.getElementById("n2").value = null;
    }
    else if (document.getElementById("n1").value == 0) {
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n2;
    }

    else if (document.getElementById("n2").value == 0 || (n2 == 0)) {
        console.log("executou aqui");
        alert("Cannot divide by zero");
        document.getElementById("n2").value = null;
        document.getElementById("n1").value = n1;
    }
    else if (n2 != 0) {
        document.getElementById("n1").value = n1 / n2;
        document.getElementById("n2").value = null;
    }

}

function C() {
    document.getElementById("n1").value = null;
    document.getElementById("n2").value = null;
}


function marcarcheckbox1() {
    const checkbox = document.getElementById("cb1")
    checkbox.checked = true;
    document.getElementById("cb2").checked = false;
}

function marcarcheckbox2() {
    const checkbox = document.getElementById("cb2")
    checkbox.checked = true;
    document.getElementById("cb1").checked = false;
}

function capturaButton(valor) {
    const checkbox1 = document.getElementById("cb1");
    const checkbox2 = document.getElementById("cb2");

    if (checkbox1.checked == true) {
        document.getElementById("n1").value += valor;
    } else if (checkbox2.checked == true) {
        document.getElementById("n2").value += valor;
    }
}

