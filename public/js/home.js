var actives;
$(document).ready(function () {
    
    $('#sidebar ul li a').on("click", function(dom){
        var path = $(dom).attr('value');
        var hostname = window.location.hostname;
        windows.location = hostname + "/" + path;
    });

    fetchJSON('http://localhost:3000/public/json/countryActives.json');
    console.log(actives)
    
});

function fetchJSON(url){
    let sample = {};
    $.getJSON(url, function(data) {
        changeActiveDisplay(data);
    });

}
function changeActiveDisplay(datas){
    console.log(datas)
    $.each(datas, function (key, value) { 
        console.log(value);
        for (let index = 0; index < value; index++) {
            let value_fin = numberWithCommas(index)
            setTimeout(() => {
                $('#'+key).text(value_fin);
            }, 100);
            
        }
         
    });
}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}