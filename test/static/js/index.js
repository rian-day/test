/**
 * Created by Yxm on 2017/4/16.
 */
function heightListener() {
    var $height = $(window).height();
    if($height>$(document.body).height()){
        $(".footer").css("position","fixed");
        $(".footer").css("top", $height-53.2);
    }
    else{
        $(".footer").css("position","static");
        $(".footer").css("top", $(document.body).height()-53.2);

    }
}
$(function () {
    $(document).ready(heightListener());
    $(window).resize(heightListener());
});