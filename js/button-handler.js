/**
 * Created by suuti on 9/12/17.
 */


function change_to_2d() {
    $("#border-container").css("transform", "rotateX(0deg)");
    $("#border-container").css("transition-duration","3s");
}
/*setTimeout(my_function,5000);*/

function change_to_3d() {
    $("#border-container").css("transform", "rotateX(45deg)");
    $("#border-container").css("transition-duration","3s");

}

function rotate_to_black() {
    $("#border-container").css("transform", "rotate(180deg)");
    $(".col-md-1 cell").css("transform", "rotate(180deg)");
    $(".col-md-1 cell").css("transform", "rotate(180deg)");
    $("#border-container").css("transition-duration","3s");
}

function rotate_to_white() {
    $("#border-container").css("transform", "rotate(0deg)");
    $(".col-md-1 cell").css("transform", "rotate(0deg)");
    $(".col-md-1 cell").css("transform", "rotate(0deg)");
    $("#border-container").css("transition-duration","3s");
}


