var r;
while (true) {
    r = Math.floor(Math.random() * 3) + 1

    var a = prompt("가위, 바위, 보");
    if (a == "끝") {
        break;
    }

    if (r == 1 && a == "가위") {
        alert("컴퓨터 : 가위")
        alert("draw")
    }

    else if (r == 2 && a == "가위") {
        alert("컴퓨터 : 바위");
        alert("lose");
    }

    else if (r == 3 && a == "가위") {
        alert("컴퓨터 : 보");
        alert("win");
    }

    else if (r == 1 && a == "바위") {
        alert("컴퓨터 : 가위")
        alert("win");
    }

    else if (r == 2 && a == "바위") {
        alert("컴퓨터 : 바위")
        alert("draw");
    }

    else if (r == 3 && a == "바위") {
        alert("컴퓨터 : 보")
        alert("lose");
    }

    else if (r == 1 && a == "보") {
        alert("컴퓨터 : 가위")
        alert("lose");
    }
    else if (r == 2 && a == "보") {
        alert("컴퓨터 : 바위")
        alert("win");
    }
    else if (r == 3 && a == "보") {
        alert("컴퓨터 : 보")
        alert("draw");
    }
}