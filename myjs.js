function clickme() {
    alert("Hallo nama saya Selfi")
}

function clickme2() {
    document.write("Hallo nama saya Selfi")
}

function clickme3() {
    document.getElementById("innerhtml_id").innerHTML="Haiii ketemu aku lagi nih"

}
function clickme4() {
    console.log("Hallo nama saya Selfi")
}
function clickme5() {
    var text ="";
    for(var i = 0; i < 10; i++) {
        text += "perulangan angka dari"+i + "<br>"
    }
    document.getElementById("loop_id").innerHTML = text 
}
function clickme6() {
    var arr =["Hai","Saya","Selfi"]
    document.getElementById("array_id").innerHTML = arr[0]
}
function clickme7() {
    var a= 10;
    var b= 2;
    var c= a+ 10;
    document.getElementById("aritmatika_id").innerHTML = c
}
function clickme8() {
    var obj = {
        nama_depan: "Trafel"
        
        

    }
    document.getElementById("object_id").innerHTML = obj.nama_depan
}