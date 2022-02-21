var avianshop = [
    {
      title: 'Foder',
      image: './images/seed-grain.jpg',
      price: '50.00$',
      description: ''
    },
    
    {
      title: 'Vitamins',
      image: './images/Cow-vitamins.jpg',
      price: '120.00$',
      description: ''
    },
    {
      title: 'Brush',
      image: './images/Cow-Brush.jpg',
      price: '750.00$',
      description: ''
    },
    {
      title: 'Halter',
      image: './images/cow-halter.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Cattle Bells',
      image: './images/cattle-bell.jpg',
      price: '4.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < avianshop.length; i++){
        var heading = ' <div class="product ' + '"> <span><h5>' + avianshop[i].title + '</h5>'

        var image = '<img class="img-fluid" src="' + avianshop[i].image + '"/'

        var price = '<p> $' + avianshop[i].price + '</p></span>'

        var description = '<div class="">'+ avianshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('avianmarket').innerHTML = postHTML