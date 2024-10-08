//HEADER
const navbar = document.querySelector('.in-place');
(window.onscroll = function () {
  if (window.scrollY > 125) {
    navbar.classList.add('scrolling');
  } else {
    navbar.classList.remove('scrolling');
  }
})();

//NAVIGATION MENU
//Navigation Menu onclick functionality for mobile sizes
function appear() {
  var navigationList = document.getElementById('nav');
  if (navigationList.style.display == 'none') {
    navigationList.style.display = 'block';
  } else if (navigationList.style.display == 'block') {
    navigationList.style.display = 'none';
  }
}

//FEATURE SERVICES
function displayServices() {
  var newService = '<ul>';
  for (var s = 0; s < servicesArray.length; s++) {
    newService += '<li><article><figure>';
    newService +=
      '<img src="' +
      servicesArray[s].article_image_src +
      '" alt="' +
      servicesArray[s].article_image_alt +
      '" width="100%" height="100%" />';
    newService += '</figure>';
    newService +=
      '<section><h5><em>' + servicesArray[s].article_header + '</em></h5>';
    newService += '<h6>' + servicesArray[s].article_feature + '</h6>';
    newService += '</section></article></li>';
  }
  newService += '</ul>';
  document.getElementById('feature_service').innerHTML = newService;
}

//TESTIMONIALS
function displayTestimonials() {
  var newEntry = '<ul>';
  for (var t = 0; t < testimonialArray.length; t++) {
    newEntry +=
      '<li><article style="' + testimonialArray[t].article_style + '">';
    newEntry += '<p><b>' + testimonialArray[t].article_name + '</b></p>';
    newEntry += '<p>' + testimonialArray[t].article_testimonial + '</p>';
    newEntry += '</article></li>';
  }
  newEntry += '</ul>';
  document.getElementById('testimonials').innerHTML = newEntry;
}
//FOOTER
var mapper = '<ul>';
for (var k = 1; k < navMenuArray.length; k++) {
  mapper += '<li>';
  mapper +=
    '<a href="' +
    navMenuArray[k].link_href +
    '"><h6><em>' +
    navMenuArray[k].link_name +
    '</em></h6></a>';
  mapper += ' </li>';
}
mapper += '</ul>';
document.getElementById('map').innerHTML = mapper;

var media = '<ul>';
for (var k = 0; k < socialArray.length; k++) {
  media += '<li>';
  media +=
    '<a href="' + socialArray[k].media_link + '" target="_blank"><figure>';
  media +=
    '<img src="' +
    socialArray[k].media_src +
    '" alt="' +
    socialArray[k].media_alt +
    '" /></figure></a>';
  media += '</li>';
}
media += '</ul>';
document.getElementById('socialM').innerHTML = media;
