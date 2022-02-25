var avianshop = [
    {
      title: 'Avi-Cakes Bird Food',
      image: './images/bird-food.jpg',
      price: '25.00$',
      description: ''
    },
    
    {
      title: 'Oasis Parakeet Vitamins',
      image: './images/bird-vitamins.jpg',
      price: '25.00$',
      description: ''
    },
    {
      title: 'Large Bird House',
      image: './images/bird-cage.jpg',
      price: '400.00$',
      description: ''
    },
    {
      title: 'jw Bird Toy',
      image: './images/bird-toy.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Bird Dish',
      image: './images/bird-feeder.jpg',
      price: '7.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < avianshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + avianshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + avianshop[i].image + '"/'

        var price = '<p> ' + avianshop[i].price + '</p></span>'

        var description = '<div class="">'+ avianshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('avianmarket').innerHTML = postHTML