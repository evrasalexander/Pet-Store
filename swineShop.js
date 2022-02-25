var swineshop = [
    {
      title: 'Foder',
      image: './images/swine-feed.jpg',
      price: '50.00$',
      description: ''
    },
    
    {
      title: 'Vitamins',
      image: './images/swine-vitamins.jpg',
      price: '120.00$',
      description: ''
    },
    {
      title: 'Brush',
      image: './images/swine-toy.jpg',
      price: '7.00$',
      description: ''
    },
    {
      title: 'Show Pig Brush',
      image: './images/swine-brush.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Pig Harness',
      image: './images/pig-harness.jpg',
      price: '40.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < swineshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + swineshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + swineshop[i].image + '"/'

        var price = '<p> $' + swineshop[i].price + '</p></span>'

        var description = '<div class="">'+ swineshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('swinemarket').innerHTML = postHTML