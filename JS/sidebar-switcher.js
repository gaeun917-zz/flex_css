( function( $ ) {
    // sidebar position is defined with flex order
    $('a.sidebar-left-toggle').click(function () {
       if(!$('.sidebar').hasClass('sidebar-left')){
           $('.sidebar').addClass('sidebar-left');
            console.log('sidebar-left added');
       }
    });
    //right is default, no need to addClass that defines the order
    $('a.sidebar-right-toggle').click(function () {
        if($('.sidebar').hasClass('sidebar-left')){
            $('.sidebar').removeClass('sidebar-left');
            console.log('sidebar-left removed');
        }
    });
    // flext direction to column, on start, content does not have a class no sidebar
    $('a.no-sidebar-toggle').click(function () {
        if(!$('.content').hasClass('no-sidebar')){
            $('.content').addClass('no-sidebar');
            console.log('no sidebar added');
        }else {
            $('.content').removeClass('no-sidebar');
        }
    });


    $('a.hide-sidebar-toggle').click(function () {
        if(!$('.sidebar').hasClass('hide')){
            $('.sidebar').addClass('hide');
            console.log('no sidebar added');
        }else {
            $('.sidebar').removeClass('hide');
        }
    });
})( jQuery );