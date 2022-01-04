const input = document.getElementById("bambooTop");

function imageChange(){
        if (input.src.match("images/bamboo.JPG")) {
            bambooTop.src = "images/como.jpg";
        }
        else {
            bambooTop.src = "images/bamboo.JPG";
        }
}

input.addEventListener('click', imageChange);
