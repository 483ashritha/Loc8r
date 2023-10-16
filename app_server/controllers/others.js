/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
    content: 'Welcome to publicschemes—your trusted source for public scheme information. Founded in 1960, our mission is to promote transparency and empower individuals to access government programs. Our team of experts is committed to providing accurate, unbiased information to help you navigate these initiatives. Join us in our quest for transparency and informed decision-making.'
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'publicschemes is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'public schemes is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  