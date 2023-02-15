
var images = [
    "clanky/11_10_2021_1.jpg",
    "clanky/11_10_2021_2.jpg",
    "clanky/11_10_2021_3.jpg",
    "clanky/11_10_2021_4.jpg",
    "clanky/11_10_2021_5.jpg",
    "clanky/11_10_2021_6.jpg",
    "clanky/11_10_2021_7.jpg",
    "clanky/11_10_2021_8.jpg"];

var num = 0;//num is a variable to hold the current image


function next() {
    var slider = document.getElementById('slider');
    num++;
    //checking whether the new position of image is greater or equal to the no. of images we use
    if (num >= images.length)//images is the defined arary
    {
        num = 0;
        //if the condition is true num is defined to hold to first image of the slider
    }
    slider.src = images[num];
    document.getElementById("image").innerHTML = num+1 +"/8";
}

function previous() {
    var slider = document.getElementById('slider');
    num--;
    //checking whether the new position of image is bfore or after the first image 
    if (num < 0)//images is the defined arary
    {
        num = images.length - 1;
        //if the condition is true num is defined to hold to last image of the slider
    }
    slider.src = images[num];
    document.getElementById("image").innerHTML = num+1 +"/8";
}













/* 

var images = [
    "clanky/11_10_2021_1.jpg",
    "clanky/11_10_2021_2.jpg",
    "clanky/11_10_2021_3.jpg",
    "clanky/11_10_2021_4.jpg",
    "clanky/11_10_2021_5.jpg",
    "clanky/11_10_2021_6.jpg",
    "clanky/11_10_2021_7.jpg",
    "clanky/11_10_2021_8.jpg"];

var num = 0;//num is a variable to hold the current image


function next(id, arr) {

    var slider = document.getElementById(id);
    num++;
   // alert(num);
    //checking whether the new position of image is greater or equal to the no. of images we use
    if (num >= arr.length)//images is the defined arary
    {
        num = 0;
        //if the condition is true num is defined to hold to first image of the slider
    }
    slider.src = arr[num];
    alert(slider.src);
    document.getElementById("image").innerHTML = num+1 +"/8";
}

function previous(id, arr) {
    var slider = document.getElementById(id);
    num--;
    //checking whether the new position of image is bfore or after the first image 
    if (num < 0)//images is the defined arary
    {
        num = arr.length - 1;
        //if the condition is true num is defined to hold to last image of the slider
    }
    slider.src = arr[num];
    document.getElementById("image").innerHTML = num+1 +"/8";
}
 */