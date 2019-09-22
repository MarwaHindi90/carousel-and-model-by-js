// ! How to make mouse of page img
// var img = document.getElementById('demo');
// document.addEventListener('mousemove', function(e) {
//     img.style.left = e.pageX;
//     img.style.top = e.pageY;
// })
//! or this
//var img = document.getElementById("demo");
//
//document.addEventListener("mousemove" , function(e) { // function(e) retrive all information of event
//    img.style.left = e.clientX+"px";
//    img.style.top = e.clientY+"px";
//    
//});
//


var imgs = document.querySelectorAll(".img-item");
var lightbContainer = document.querySelector("#lightbox-container");
var lightboxItem = document.querySelector("#lightbox-item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var imgArray = [];
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
    imgArray.push(imgs[i]);
    imgs[i].addEventListener('click', function(e) {
        lightbContainer.classList.add("show");
        var imgSrc = e.target.src;
        lightboxItem.style.backgroundImage = "url(" + imgSrc + ")";
        currentIndex = imgArray.indexOf(e.target);
    })
};

next.addEventListener('click', function() {
    nextMove();

});

function nextMove() {
    currentIndex++;
    if (currentIndex == imgArray.length) {
        currentIndex = 0;
    }
    lightboxItem.style.backgroundImage = "url(" + imgArray[currentIndex].src + ")";
}

prev.addEventListener('click', function() {
    prevMove();

});

function prevMove() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgArray.length - 1
    }
    lightboxItem.style.backgroundImage = "url(" + imgArray[currentIndex].src + ")";
}

close.addEventListener('click', function() {
    lightbContainer.classList.remove("show");
})

lightbContainer.addEventListener('click', function(e) {
    if (e.target == lightbContainer) {
        lightbContainer.classList.remove("show");
    }
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) // esc 
    {
        lightbContainer.classList.remove("show");

    } else if (e.keyCode == 39) // next
    {
        nextMove();

    } else if (e.keyCode == 37) {
        prevMove()
    }
})


// var imgs = document.querySelectorAll(".img-item");

// var lightbContainer = document.getElementById("lightbox-container");
// var lightboxItem = document.getElementById("lightbox-item");
// var next = document.getElementById("next");
// var prev = document.getElementById("prev");
// var currentIndex = 0;
// var imgsArray = [];

// for (var i = 0; i < imgs.length; i++) {
//     imgsArray.push(imgs[i]); //  عشان الصور مش arry عملنا السطر ده

//     imgs[i].addEventListener("click", function(e) {


//         currentIndex = imgsArray.indexOf(e.target); // لما اليوزر داس ع الصوره عايزه اعرف الاندكس بتاع الصوره واي واحده انداس عليها
//         //            console.log(currentIndex);

//         var imgSrc = e.target.src;
//         lightbContainer.classList.add("show");
//         lightboxItem.style.backgroundImage = "url(" + imgSrc + ")"
//     });
// }

// var close = document.querySelectorAll("#close");
// for (var i = 0; i < close.length; i++) {

//     close[i].addEventListener("click", function(e) {
//         var close = e.clientX;
//         lightbContainer.remove("close");
//     });

// }