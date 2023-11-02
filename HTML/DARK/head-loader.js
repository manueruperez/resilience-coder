$(function () {
  var head = $("head");

  // Main stylesheets
  var stylesheets = [
    "css/bootstrap.css",
    "css/main.css",
    "css/venobox.css",
    "css/animate.css",
    "css/fonts.css",
    "css/owl-carousel/owl.carousel.css",
    "css/owl-carousel/owl.theme.css",
    "css/owl-carousel/owl.transitions.css",
    "css/switcher.css",
  ];

  // Append the main stylesheets
  stylesheets.forEach(function (href) {
    head.append(
      '<link href="' +
        href +
        '" rel="stylesheet" type="text/css" media="all" />'
    );
  });

  // Append Google Font link
  head.append(
    '<link href="//fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />'
  );

  // Append alternate stylesheets
  for (var i = 1; i <= 33; i++) {
    head.append(
      '<link href="css/styles/clr-' +
        i +
        '.css" rel="alternate stylesheet" type="text/css" title="clr-' +
        i +
        '" media="all" />'
    );
  }
});
