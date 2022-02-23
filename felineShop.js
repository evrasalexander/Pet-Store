var felineshop = [
    {
      title: 'Blue Wilderness Cat Food',
      image: './images/cat-food.jpg',
      price: '6.00$',
      description: ''
    },
    
    {
      title: 'Treatibles Vitamins for Cats',
      image: './images/cat-vitamins.jpg',
      price: '30.00$',
      description: ''
    },
    {
      title: 'Cat Brush',
      image: './images/cat-brush.jpg',
      price: '5.00$',
      description: ''
    },
    {
      title: 'Cat Harness',
      image: './images/cat-harness.jpg',
      price: '25.00$',
      description: ''
    },
    {
      title: 'Cat Collar',
      image: './images/cat-collar.jpg',
      price: '4.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < felineshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + felineshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + felineshop[i].image + '"/'

        var price = '<p> ' + felineshop[i].price + '</p></span>'

        var description = '<div class="">'+ felineshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('felinemarket').innerHTML = postHTML