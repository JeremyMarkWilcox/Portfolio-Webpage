$(document).ready(function(initMap){
	$(window).on("load ", function ()
   {
        var cur_location = { lat:51.2538, lng:85.3232};
		var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 16,
		scrollwheel:false,
		center: cur_location,
		styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "29"
            },
            {
                "invert_lightness": true
            },
            {
                "hue": "#008fff"
            },
            {
                "saturation": "-73"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-72"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "32"
            },
            {
                "weight": "0.42"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "-53"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-86"
            },
            {
                "gamma": "1.13"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#006dff"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "1.44"
            },
            {
                "saturation": "-67"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "0.84"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "0.79"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-78"
            },
            {
                "saturation": "-91"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "-69"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-35"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-97"
            },
            {
                "lightness": "-14"
            }
        ]
    }
]

    });
	var marker = new google.maps.Marker({
	position: cur_location,
	map: map
	
	});
});
});
