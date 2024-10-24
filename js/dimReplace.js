//HEADER
const navbar = document.querySelector('.in-place');
//console.log(window.scrollY);
(window.onscroll = function () {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolling');
  } else {
    navbar.classList.remove('scrolling');
  }
})();

var aypadHeader = '<div>';
aypadHeader += '<a href="https://aypad.org/index" id="logo">';
aypadHeader +=
  '<figure><img src="./images/logos/wordLogo_bk.png" alt="AYPAD parent company logo"width="100%"height="100%"/></figure></a>';
aypadHeader +=
  '<figure id="menu" onclick="appear();"><img src="./images/icons/menu.png" alt="hamburger icon" /></figure>';
aypadHeader += '<nav id="nav" style="display: none"><ul>';
aypadHeader +=
  '<li class="dropdown"><h5 class="brandbtn" onclick="displayBrandList();">Brands</h5></li>';
for (var i = 1; i < navigationArray.length; i++) {
  aypadHeader += '<li>';
  aypadHeader += '<a href="' + navigationArray[i].link_href + '">';
  aypadHeader += '<h5>' + navigationArray[i].link_name + '</h5></a></li>';
}
aypadHeader += '</ul>';
aypadHeader += '<section class="logo_container" style="display: none">';
aypadHeader += '<header><div id="close" onclick="closeBranList()">Close</div>';
aypadHeader += '<h3>Lorem Ipsium</h3>';
aypadHeader +=
  '<h5>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and  visual mockups.</h5></header>';
aypadHeader += '<ul id="brands"></ul>';
aypadHeader += '</section></nav></div>';
document.getElementById('AYPAD').innerHTML = aypadHeader;

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
//Brand list
function displayBrandList() {
  var brandList = document.querySelector('.logo_container');
  if (brandList.style.display == 'none') {
    brandList.style.display = 'flex';
  } else if (brandList.style.display == 'flex') {
    brandList.style.display = 'none';
  }
}

//close Brandlist
function closeBranList() {
  var brandList = document.querySelector('.logo_container');
  if (brandList.style.display == 'flex') {
    brandList.style.display = 'none';
  }
}

//TEAM
function displayTeam() {
  var teamMembers = '<ul>';
  for (var t = 1; t < teamArray.length; t++) {
    teamMembers += '<li><article><figure>';
    teamMembers +=
      '<img src="' +
      teamArray[t].mem_image_src +
      '" alt="' +
      teamArray[t].mem_image_alt +
      '" width="100%" height="100%" />';
    teamMembers +=
      '<figcaption><h5>' +
      teamArray[t].mem_name +
      '</h5></figcaption></figure>';
    teamMembers +=
      '<section><div><h6><b>' +
      teamArray[t].mem_DIM_role +
      '</b><br />' +
      teamArray[t].mem_country +
      '</h6></div>';
    teamMembers += '<div>' + teamArray[t].mem_pro_title + '</div>';
    teamMembers += '<div><p>' + teamArray[t].mem_bio + '</p></div>';
    teamMembers += '</section></article></li>';
  }
  teamMembers += '</ul>';
  document.getElementById('team').innerHTML = teamMembers;
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
//Partner & Brands
function displayPartners() {
  var newLogo = '';
  for (var t = 0; t < logoArray.length; t++) {
    newLogo += '<li><article><a href="' + logoArray[t].link_href + '"><figure>';
    newLogo +=
      '<img src="' +
      logoArray[t].img_src +
      '" alt="' +
      logoArray[t].img_alt +
      '" />';
    newLogo +=
      '<figcaption><h5>' + logoArray[t].img_caption + '</h5></figcaption>';
    newLogo += '</figure></a></article></li>';
  }
  document.getElementById('logos').innerHTML = newLogo;
}
function displayBrands() {
  var newBrand = '';
  for (var t = 0; t < brandArray.length; t++) {
    newBrand +=
      '<li><article><a href="' + brandArray[t].link_href + '"><figure>';
    newBrand +=
      '<img src="' +
      brandArray[t].img_src +
      '" alt="' +
      brandArray[t].img_alt +
      '" />';
    newBrand +=
      '<figcaption><h5>' + brandArray[t].img_caption + '</h5></figcaption>';
    newBrand += '</figure></a></article></li>';
  }
  document.getElementById('brands').innerHTML = newBrand;
}

//FOOTER
var mapper = '<ul>';
for (var k = 1; k < navigationArray.length; k++) {
  mapper += '<li>';
  mapper +=
    '<a href="' +
    navigationArray[k].link_href +
    '"><h6><em>' +
    navigationArray[k].link_name +
    '</em></h6></a>';
  mapper += ' </li>';
}
mapper += '</ul>';
document.getElementById('map').innerHTML = mapper;

var media = '<ul>';
for (var k = 0; k < socialArray.length - 1; k++) {
  media += '<li>';
  media +=
    '<a href="' + socialArray[k].media_link[0] + '" target="_blank"><figure>';
  media +=
    '<img src="' +
    socialArray[k].media_src +
    '" alt="' +
    socialArray[k].media_alt +
    '" /></figure></a>';
  media += '</li>';
}
media += '</ul>';
document.getElementById('socialM_DIMS').innerHTML = media;

var aypad = '<ul>';
for (var k = 0; k < socialArray.length - 2; k++) {
  aypad += '<li>';
  aypad +=
    '<a href="' + socialArray[k].media_link[1] + '" target="_blank"><figure>';
  aypad +=
    '<img src="' +
    socialArray[k].media_src +
    '" alt="' +
    socialArray[k].media_alt +
    '" /></figure></a>';
  aypad += '</li>';
}
aypad += '<li>';
aypad += '<a href="' + socialArray[7].media_link + '" target="_blank"><figure>';
aypad +=
  '<img src="' +
  socialArray[7].media_src +
  '" alt="' +
  socialArray[7].media_alt +
  '" /></figure></a>';
aypad += '</li>';
aypad += '</ul>';
document.getElementById('socialM').innerHTML = aypad;
