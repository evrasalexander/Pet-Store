var bovinaeshop = [
    {
      title: 'Foder',
      image: './images/fodder.jpg',
      price: '$7,500-15,000',
      description: 'item'
    },
    
    {
      title: 'Vitamines',
      image: 'https://images.unsplash.com/photo-1644843521798-13d5c423fa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '7,500-15,000',
      description: 'item'
    },
    {
      title: 'Brush',
      image: 'https://images.unsplash.com/photo-1644843521798-13d5c423fa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '7,500-15,000',
      description: 'item'
    },
    {
      title: 'Bridal',
      image: 'https://images.unsplash.com/photo-1644843521798-13d5c423fa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '7,500-15,000',
      description: 'item'
    },
    {
      title: 'Bell',
      image: 'https://images.unsplash.com/photo-1644843521798-13d5c423fa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '7,500-15,000',
      description: 'item'
    },
  
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < bovinaeshop.length; i++){
        var heading = ' <div class="product ' + '"> <span><h5>' + bovinaeshop[i].title + '</h5>'

        var image = '<img src="' + bovinaeshop[i].image + '"/'

        var price = '<p> $' + bovinaeshop[i].price + '</p></span>'

        var description = '<div class="">'+ bovinaeshop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'

        var concatThis = heading + image + price + description;
        
        postHTML = postHTML + concatThis
    }
    document.getElementById('farmersmarket').innerHTML = postHTML


 