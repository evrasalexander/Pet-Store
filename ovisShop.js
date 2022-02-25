var ovisshop = [
    {
      title: 'Sheep Feed',
      image: './images/sheep-feed.jpg',
      price: '80.00$',
      description: ''
    },
    
    {
      title: 'Sheep Vitamins',
      image: './images/sheep-vitamins.jpg',
      price: '60.00$',
      description: ''
    },
    {
      title: 'Brush',
      image: './images/sheep-shears.jpg',
      price: '25.00$',
      description: ''
    },
    {
      title: 'Sheep Halter',
      image: './images/sheep-halter.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Sheep Bells',
      image: './images/cattle-bell.jpg',
      price: '4.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < ovisshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + ovisshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + ovisshop[i].image + '"/'

        var price = '<p> ' + ovisshop[i].price + '</p></span>'

        var description = '<div class="">'+ ovisshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('ovismarket').innerHTML = postHTML