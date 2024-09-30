console.log('replace');

//NAVIGATION MENU
function navMenu() {
  var header =
    '<a href="' +
    navMenuArray[0].link_href +
    '"><figure class="logo"><img src="./images/logos/logo_purple-min.png" alt="snowcone colored logo" width="100%" height="100%"/>';
  header += '<h4>DIM Studio</h4></figure></a>';
  header += '<nav><ul>';
  for (var k = 0; k < navMenuArray.length; k++) {
    header += '<li>';
    header +=
      '<a href="' +
      navMenuArray[k].link_href +
      '"><h5>' +
      navMenuArray[k].link_name +
      '</h5></a>';
    header += ' </li>';
  }
  header += '</ul></nav>';
  document.getElementById('navigation_menu').innerHTML = header;
}

document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
//feature Services
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

//testimonials
var newEntry = '<ul>';
for (var t = 0; t < testimonialArray.length; t++) {
  newEntry += '<li><article style="' + testimonialArray[t].article_style + '">';
  newEntry += '<p><b>' + testimonialArray[t].article_name + '</b></p>';
  newEntry += '<p>' + testimonialArray[t].article_testimonial + '</p>';
  newEntry += '</article></li>';
}
newEntry += '</ul>';
document.getElementById('testimonials').innerHTML = newEntry;

function footerMedia() {
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
}
