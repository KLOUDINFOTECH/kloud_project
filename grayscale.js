/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

 function checkForm(form)
  {

if(form.email.value=="")
    { 
    alert("Error:email cannot be blank");
    form.email.focus();
    return false;
}

 re = /^ramesh@kloudinfotech.com$/;
 re1 = /^rama@kloudinfotech.com$/;
 re2 = /^jeevitha@kloudinfotech.com$/;
 re3 = /^suguna@kloudinfotech.com$/;
 re4 = /^anusha@kloudinfotech.com$/;
 re5 = /^ramana@kloudinfotech.com$/;
 pw = /^ramesh@123$/;
 pw1 = /^rama@123$/;
 pw2 = /^jeevitha@123$/;
 pw3 = /^suguna@123$/;
 pw4 = /^anusha@123$/;
 pw5 = /^ramana@123$/;
             
        if(!re.test(form.email.value) && !re1.test(form.email.value) && !re2.test(form.email.value) && !re3.test(form.email.value) && !re4.test(form.email.value) && !re5.test(form.email.value) )
         { 
            alert("Error: INVALID email!");
             form.email.focus();

             return false;
          }
         if(!pw.test(form.pwd1.value) && !pw1.test(form.pwd1.value)  && !pw2.test(form.pwd1.value)  && !pw3.test(form.pwd1.value)  && !pw4.test(form.pwd1.value)  && !pw5.test(form.pwd1.value))
         { 
            alert("Error: INVALID password!");
             form.pwd1.focus();

             return false;
              }
              if (pw.test(form.pwd1.value))
              {
                window.open("pages/index.html");                
             } 
             if (pw1.test(form.pwd1.value))
              {
                window.open("pages/index.html");                
             } 
             if (pw2.test(form.pwd1.value))
              {
                window.open("pages/index.html");                
             } 
             if (pw3.test(form.pwd1.value))
              {
                window.open("pages/index.html");                
             }
             if (pw4.test(form.pwd1.value))
              {
                window.open("pages/index.html");                
             }
             if (pw5.test(form.pwd1.value))
              {
                window.open("pages/index.html");                
             }
}




            
