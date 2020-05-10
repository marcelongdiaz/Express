$(document).ready(function () {
    $(".slide-controller").click(function (e) { 
        e.preventDefault();
        // $('#sidebar ul li a span').toggle('slow');
        $('#sidebar ul li a span').toggleClass('disappear');
        $('#sidebar .slide-controller i').toggleClass('rotate');
        // setTimeout(() => {
        //     $('#sidebar ul li a span').toggle();
        // }, 400);
    });

    
});
function changeView(dom){
    // e.preventDefault();
    var path = $(dom).attr('value');
    var hostname = window.location.hostname;
    let linkName = $(dom).find("span").text();
    window.location.pathname = '/' + path;
}