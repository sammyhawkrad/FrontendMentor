$( document ).ready(function() {
    $('#share-button').click(function () { 
        $('.share').css("display", "flex");
        $('.profile').css("display", "none");
        $('.message').css("margin-bottom", "0px");  
    });

    $('.sm-icon').click(function () {
        $('.message').css("margin-bottom", "2rem");
        $('.profile').css("display", "flex");
        $('.share').css("display", "none"); 

    })
});