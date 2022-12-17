const hour = document.getElementsByClassName("hour");
const minute = document.getElementsByClassName("minutes");
const second = document.getElementsByClassName("seconds");
const background = document.querySelector(".containe");
const hr = document.querySelectorAll(".hr");
const ampm = document.getElementsByClassName("ampm");
function updateTime() {
    // DATE object creation
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    // Ternary Operator
    (h < 10) ? hour[0].innerHTML = "0" + h : hour[0].innerHTML = h;
    (m < 10) ? minute[0].innerHTML = "0" + m : minute[0].innerHTML = m;
    (s < 10) ? second[0].innerHTML = "0" + s : second[0].innerHTML = s;
    if (h>=0 && h<=11) {
        ampm[0].innerHTML = "AM";
        if (0 <= h && h < 5) {
            // setting background of image using javascript
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
            ampm.style.backgroundColor = "#bfbde3";
            for(let element of hr){
                element.style.backgroundColor = "#bfbde3";
            }
          
        }
        else if (5 <= h && h <= 8) {
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
            ampm[0].style.backgroundColor = "rgb(193 209 100 / 50%)";
            for(let element of hr){
                element.style.backgroundColor = "rgb(193 209 100 / 50%)";
            }

        }
        else {
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1595439291859-89777a22e3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
            ampm[0].style.backgroundColor = "rgb(171 227 230 / 100%)";
            for(let element of hr){
                element.style.backgroundColor = "rgb(171 227 230 / 100%)";
            }
        }
        
    }
    else {
        ampm[0].innerHTML = "PM";
        if (12 <= h && h < 17) {
            background.style.backgroundImage = "url('https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
            ampm[0].style.backgroundColor = "rgb(193 209 100 / 50%)";
            for(let element of hr){
                element.style.backgroundColor = "rgb(193 209 100 / 50%)";
            }
        }
        else if (17 <= h && h <= 18) {
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1551266060-386f4f92866f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1463&q=80')";
            ampm[0].style.backgroundColor = "rgb(236 188 209 / 100%)";
            for(let element of hr){
                element.style.backgroundColor = "rgb(236 188 209 / 100%)";
            }
        }
        else {
            console.log("hello world");
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
            ampm[0].style.backgroundColor = "#bfbde3";
            for(let element of hr){
                element.style.backgroundColor = "#bfbde3";
            }
        }
    }
}
setInterval(updateTime, 1000);