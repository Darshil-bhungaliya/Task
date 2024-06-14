
let div1 = document.getElementById('buttoncontainer');
let btn = div1.querySelector('.btn');
let b = +btn.innerText;

btn.addEventListener("click", createButtons);

// function createButtons() {
//     let a = +div1.lastElementChild.innerText
//     for (let i = 1; i <= b; i++) {
//         let newbtn = document.createElement('button');
//         newbtn.className = "btn btn-primary btn-lg m-1"
//         newbtn.innerText = a + i;
//         newbtn.addEventListener("click", addButtons);
//         div1.appendChild(newbtn);
//     }
// }

// function addButtons() {
//     let c = +div1.lastElementChild.innerText
//     let d = +this.innerText;
//     for (let i = 1; i <= d; i++) {
//         let newbtn = document.createElement('button');
//         newbtn.className = "btn btn-primary btn-lg m-1"
//         newbtn.innerText = c + i;
//         newbtn.addEventListener("click", addButtons);
//         div1.appendChild(newbtn)
//     }
// }


function createButtons(e) {
    console.log(e.target)
    let a = +div1.lastElementChild.innerText;
    let d = +e.target.innerText;

    for (let i = 1; i <= d; i++) {
        let newbtn = document.createElement('button');
        newbtn.className = "btn btn-primary btn-lg"
        newbtn.innerText = a + i;
        newbtn.addEventListener("click", createButtons);
        div1.appendChild(newbtn);
    }
}