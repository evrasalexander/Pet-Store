 //Shop2

 var equineshop = [
    {
      title: 'BuckEye Horse Feed',
      image: './images/horse-food.jpg',
      price: '65.00$',
      description: ''
    },
    
    {
      title: 'Farnam Horse Vitamins',
      image: './images/horse-vitamins.jpg',
      price: '80.00$',
      description: ''
    },
    {
      title: 'Horse Brush',
      image: './images/horse-Brush.jpg',
      price: '7.00$',
      description: ''
    },
    {
      title: 'Horse Bridal',
      image: './images/horse-bridal.jpg',
      price: '150.00$',
      description: ''
    },
    {
      title: 'English Horse Saddle',
      image: './images/horse-saddle.jpg',
      price: '400.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < equineshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + equineshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + equineshop[i].image + '"/'

        var price = '<p> $' + equineshop[i].price + '</p></span>'

        var description = '<div class="">'+ equineshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('horsemarket').innerHTML = postHTML