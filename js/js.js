
(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('YOUR_PUBLIC_KEY');
})();


window.onload = function () {
    document.getElementById('kontakt_form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}


// function aktuality_div_style() {

//     document.getElementById('aktuality_button').style.cssText = 'width:90%; height: 30%; margin-left:5%; font-size: 120%';
//     document.getElementById('aktuality_p').style.cssText = 'white-space: initial; text-align:justify;'
//     document.getElementById('close_button').style.cssText = 'width:5%; float: right; margin-left:10% font-size: 120%; visibility: visible;';

// }

// function aktuality_close() {
//     document.getElementById('aktuality_button').style.cssText = 'wtext-align: justify; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; display: block; margin-left: 5%;';
// }


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



// function show_galery(){
//     document.getElementById('image_from_galery').style.cssText = 'width:90%; height: 30%; margin-left:5%; font-size: 120%';
// }


// function setImageVisible(id, visible) {
//     var img = document.getElementById(id);
//     img.style.visibility = (visible ? 'visible' : 'hidden');
// }


function show_img(id_image1, id_image2){
    document.getElementById(id_image2).style.display = 'inline';
    document.getElementById('close_galery').style.display = 'inline';
    document.getElementById('close_galery').style.marginLeft = '70%';
    document.getElementById(id_image1).style.display = 'none';
  //  document.body.style.backgroundColor = "black";
    document.body.style.opacity = 1;
    document.body.style.backgroundColor ="transparent";

  //  document.getElementById('open_window').style.cssText = 'left:50%';
}

function hide_img(id_image1, id_image2){
    document.getElementById(id_image2).style.display = 'none';
    document.getElementById('close_galery').style.display = 'none';
    document.getElementById(id_image1).style.display = 'inline';
}