canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
 
car1_width = 120;
car1_height = 90;
car1_img = "icons8-car-100 (1).png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 90;
car2_img = "icons8-car-100.png";
car2_x = 10;
car2_y = 90;

background_image = "racing stadium.jpg";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = upload_background;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = upload_car1;
    car1_imageTag.src = car1_img;

    car2_imageTag = new Image();
    car2_imageTag.onload = upload_car2;
    car2_imageTag.src = car2_img;
}

function upload_background(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_imageTag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imageTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed = e.KeyCode;
    console.log(keyPressed);
    if(keyPressed == 38){
        car1_up();
        console.log("up arrow key")  
    }

    if(keyPressed == 40){
        car1_down();
        console.log("down arrow key")  
    }

    if(keyPressed == 37){
        car1_left();
        console.log("left arrow key")  
    }

    if(keyPressed == 39){
        car1_right();
        console.log("right arrow key")  
    }

    if(keyPressed == 87){
        car2_up();
        console.log("up2 arrow key")  
    }

    if(keyPressed == 83){
        car2_down();
        console.log("down2 arrow key")  
    }

    if(keyPressed == 65){
        car2_left();
        console.log("left2 arrow key")  
    }

    if(keyPressed == 68){
        car2_right();
        console.log("right2 arrow key")  
    }
}