var kanineshop = [
    {
      title: 'Instinct Original Dog Food',
      image: './images/dog-food.jpg',
      price: '50.00$',
      description: ''
    },
    
    {
      title: 'Dog Vitamins',
      image: './images/dog-vitamins.jpg',
      price: '50.00$',
      description: ''
    },
    {
      title: 'Dog Brush',
      image: './images/dog-brush.jpg',
      price: '11.00$',
      description: ''
    },
    {
      title: 'Dog Leash',
      image: './images/dog-leash.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Dog Collar',
      image: './images/dog-collar.jpg',
      price: '4.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < kanineshop.length; i++){
        var heading = ' <div class="product store-padding ' + '"> <span><h5>' + kanineshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + kanineshop[i].image + '"/'

        var price = '<p class=""> ' + kanineshop[i].price + '</p></span>'

        var description = '<div class="">'+ kanineshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('kaninemarket').innerHTML = postHTML