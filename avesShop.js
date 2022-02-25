var avesshop = [
    {
      title: 'HenHouse Reserve Chicken Feed',
      image: './images/chicken-feed.jpg',
      price: '50.00$',
      description: ''
    },
    
    {
      title: 'Chicken Vitamins',
      image: './images/chicken-vitamins2.jpg',
      price: '40.00$',
      description: ''
    },
    {
      title: 'Chicken Coop',
      image: './images/chicken-coop.jpg',
      price: '950.00$',
      description: ''
    },
    {
      title: 'Chicken Feeder',
      image: './images/chicken-feeder.jpg',
      price: '25.00$',
      description: ''
    },
    {
      title: 'Chicken Swing',
      image: './images/chicken-swing.jpg',
      price: '50.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < avesshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + avesshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + avesshop[i].image + '"/'

        var price = '<p> $' + avesshop[i].price + '</p></span>'

        var description = '<div class="">'+ avesshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('avesmarket').innerHTML = postHTML