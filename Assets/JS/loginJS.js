var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
}

// CheckBox Function
function goFurther(){
    if (document.getElementById("chkAgree").checked == true) {
        document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
    }
    else{
        document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
}

// user
// class Account {
//     constructor(username, password, email) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }
// }
// var list_users = new Array();

// var user1 = new Account('admin','123','ad@edu');
// var user2 = new Account('dtn','1811','datlcpro@gmail.com');
// var user3 = new Account('bda','2201','bachducanh.jr@gmail.com');


// list_users.push(user1);
// list_users.push(user2);
// list_users.push(user3);

// var btn_submit = document.getElementById('submit-btn');
// var username = document.querySelector('input[placeholder="Username or Email"]');
// var password = document.querySelector('input[placeholder="Password"]');





// var isTrueAccount = () => {
//     if (username.value != '' && password.value != '') {
//         for (let i = 0; i < list_users.length; i++) {
//             if (list_users[i].username == username.value && list_users[i].password == password.value) {
//                 window.localStorage.setItem('flag', i);   
//                 return i;
//             }
//         }
//     }
// }
// var isLogin = () => {
//     var x = isTrueAccount();
//     if (x != undefined) {
//         if (window.localStorage.getItem('remote') == 'khoahoc') {
//             btn_submit.attributes[0].value = 'Khoahoc.html';
//         } else {
//             btn_submit.attributes[0].value = 'training.html';
//         }
//         alert('Đăng nhập thành công');
//     } else if (username.value != '' && password.value != '') {
//         error1.innerText = '';
//         error2.innerText = '*Tên tài khoản hoặc mật khẩu chưa chính xác.';
//     }
// }

// btn_submit.addEventListener('click', isLogin);





