let choice = "X";
let won = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let o = document.querySelector(".o");
let x = document.querySelector(".x");
let box = document.querySelectorAll(".container .box");
let statustext = document.querySelector(".status");
let start = false;
let co = 0;
let cx = 0;

// o user .................
let of = () => {
    choice = "O";
    o.classList.add("active");
    x.classList.remove("active");
    Swal.fire(`You select ${choice}`);
}
o.addEventListener("click", of);

// x user .................
let xf = () => {
    choice = "X";
    x.classList.add("active");
    o.classList.remove("active");
    Swal.fire(`You select ${choice}`);
}
x.addEventListener("click", xf);

// statustext..................
statustext.addEventListener("click", () => {
    o.removeEventListener("click", of);
    x.removeEventListener("click", xf);

    if (statustext.innerHTML == "Start") {
        statustext.innerHTML = "Play";
        start = true;

        // addtext.............................
        if (start) {
            box.forEach(element => {
                element.addEventListener("click", () => {
                    if (element.innerHTML == "") {
                        element.innerHTML = choice;
                        if (choice == "X") {
                            choice = "O";
                            o.classList.add("active");
                            x.classList.remove("active");
                            statustext.innerHTML = `${choice} turn`;
                            cx++;
                            isWon();
                        }
                        else {
                            choice = "X";
                            x.classList.add("active");
                            o.classList.remove("active");
                            statustext.innerHTML = `${choice} turn`;
                            co++;
                            isWon();
                        }

                    }
                });
            });
        }
    }
});

// iswon function .........................
function isWon() {
    for (let row = 0; row < won.length; row++) {
        let p1 = won[row][0];
        let p2 = won[row][1];
        let p3 = won[row][2];
        let box1 = box[p1].innerHTML;
        let box2 = box[p2].innerHTML;
        let box3 = box[p3].innerHTML;
        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 == box2 && box2 == box3) {
                // sweetalert.........won..............
                Swal.fire({
                    title: `${box1} Won`,
                    showCancelButton: true,
                    confirmButtonText: 'Try Again',
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                })
                break;
            }
            else if (co == 5 && cx == 4) {
                // sweetalert.......draw................
                Swal.fire({
                    title: `Draw`,
                    showCancelButton: true,
                    confirmButtonText: 'Try Again',
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                })
            }
            else if (co == 4 && cx == 5) {
                // sweetalert.......draw................
                Swal.fire({
                    title: `Draw`,
                    showCancelButton: true,
                    confirmButtonText: 'Try Again',
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                })
            }
        }
    }
}

