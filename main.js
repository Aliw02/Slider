// Slider Project


let imges = document.querySelector(".images");
let img = document.querySelectorAll(".img");
let count = 1;
let count2 = 5;
let increase = count + 1;


function imgRepeat () {
    if (count < img.length + 2) {
        if (count === 5) {
            count = 0;
        }
        if (count >= 0 ){
            img.item(count).style.zIndex = count2 + 2;
            count += 1;
        }
        if (count >= img.length) {
            count = 0;
            img.forEach((element)=> {
                element.style.zIndex = "0";
            });
        };
    };
};

function prevImg () {
    if (count < img.length + 2) {
        count2 += 1; 
        if (count === 0 ) {
            count = 5;
        }
        if (count === 1 ) {
            count -= 1;
            img.item(count).style.zIndex = count2;
            count = 6;
        }
        if (count > 1 ) {
            count -= 1;
            img.item(count - 1).style.zIndex = count2 + 2;
        }
        if (count >= img.length) {
            img.forEach((element)=> {
                element.style.zIndex = "0";
            });
            count2 = 5 ;
        };
    };
};





document.addEventListener("click", (e) => {
    if (e.target.className === "next-btn") {
        imgRepeat();
    }
    if (e.target.className === "prev-btn") {
        prevImg();
    }
});
