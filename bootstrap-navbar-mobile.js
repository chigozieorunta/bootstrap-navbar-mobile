(function($) {	
    $(document).ready(function() { 
        var navbarMobileBtn = document.getElementById("navbar-mobile-btn");
        navbarMobileBtn.onclick = function() {
            if($(".navbar-mobile").css("left") == '-480px') {
                $(".navbar-mobile").css("left", "0px");
            } else {
                $(".navbar-mobile").css("left", "-480px");
            }
        }
    });
})( jQuery );