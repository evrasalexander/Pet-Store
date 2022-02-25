
var bovinaeshop = [
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
  
  
    for (var i=0; i < bovinaeshop.length; i++){
        var heading = ' <div class="product store-padding' + '"> <span><h5>' + bovinaeshop[i].title + '</h5>'

        var image = '<img class="img-fluid store-image" src="' + bovinaeshop[i].image + '"/'

        var price = '<p> $' + bovinaeshop[i].price + '</p></span>'

        var description = '<div class="">'+ bovinaeshop[i].description + '</p><button type="button" class="btn button-style text-white"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('cowmarket').innerHTML = postHTML

   