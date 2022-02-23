var reptileshop = [
    {
      title: 'Reptile Food',
      image: './images/reptile-food.jpg',
      price: '35.00$',
      description: ''
    },
    
    {
      title: 'Reptile Vitamins',
      image: './images/reptile-vitamins.jpg',
      price: '60.00$',
      description: ''
    },
    {
      title: 'Hot Lamps',
      image: './images/hot-lamps.jpg',
      price: '30.00$',
      description: ''
    },
    {
      title: 'Reptile Hut',
      image: './images/reptile-hut.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Reptile Water Dish',
      image: './images/reptile-water.jpg',
      price: '10.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < reptileshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + reptileshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + reptileshop[i].image + '"/'

        var price = '<p> ' + reptileshop[i].price + '</p></span>'

        var description = '<div class="">'+ reptileshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('reptilemarket').innerHTML = postHTML