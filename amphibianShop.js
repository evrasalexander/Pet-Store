var amphibianshop = [
    {
      title: 'Amphibian Food',
      image: './images/amphibian-food.jpg',
      price: '25.00$',
      description: ''
    },
    
    {
      title: 'Amphibian Vitamins',
      image: './images/amphibian-vitamins.jpg',
      price: '60.00$',
      description: ''
    },
    {
      title: 'Aquarium',
      image: './images/amphibian-aquarium.jpg',
      price: '190.00$',
      description: ''
    },
    {
      title: 'Amphibian Hut',
      image: './images/frog-house.jpg',
      price: '10.00$',
      description: ''
    },
    {
      title: 'Tetra: Whisper EX30 Water Filter',
      image: './images/water-filter.jpg',
      price: '30.00$',
      description: ''
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < amphibianshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + amphibianshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + amphibianshop[i].image + '"/'

        var price = '<p> ' + amphibianshop[i].price + '</p></span>'

        var description = '<div class="">'+ amphibianshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('amphibianmarket').innerHTML = postHTML