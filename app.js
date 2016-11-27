var vm = new Vue({
    el: 'image-slider',
    data () {
        return {
            images: ['assets/images/androidPhone.png','http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
            currentNumber: 0,
            timer: null,
            pos: "default",
        }
    },

    created: function () {
//        this.startRotation();
        this.getLocation();
		this.initMap();

    },

    methods: {
//        startRotation: function() {
//            this.timer = setInterval(this.next, 3000);
//        },

//        stopRotation: function() {
//            clearTimeout(this.timer);
//            this.timer = null;
//        },

        next: function() {
            this.currentNumber += 1
        this.getLocation();
        },
        prev: function() {
            this.currentNumber -= 1
        },
        getLocation: function() {
          if (navigator.geolocation){
              console.log("geo is available");
            // geolocation is available
              navigator.geolocation.getCurrentPosition(function(position) {
                  pos = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                  };
                  vm.pos = "you're at lat: " + pos.lat + " and lng: " + pos.lng
              });
          }else {
            // geolocation is not supported
            console.log('geolocation is not supported!')
          }
        },
        initMap: function() {return null}
//        //var uluru = {lat: -25.363, lng: 131.044};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 4,
//          center: vm.pos
//        });
//        var marker = new google.maps.Marker({
//          position: vm.pos,
//          map: map
//        });
		}
    }
});
