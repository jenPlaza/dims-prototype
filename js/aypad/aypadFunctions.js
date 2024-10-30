//NAV MENU
var aypadHeader = '<div>';
aypadHeader += '<a href="https://aypad.org/index" id="logo">';
aypadHeader +=
  '<figure><img src="' +
  brandArray[0].logo_info[0].img_src[1] +
  '" alt="' +
  brandArray[0].logo_info[0].img_alt +
  '"width="100%"height="100%"/></figure></a>';
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
aypadHeader += '<h3>Building an amazing tool box!</h3>';
aypadHeader +=
  '<h5>Dr. Philip S. Bangura is the founder of Africa Youth for Peace and Development(AYPAD), an organization that empowers youth through transparency. Having decades of experience and a passion for social work, Dr Philip has put his vision into action through the implementation of Africa Youth for Peace and Development, Freya, True Talk, and DIM Studio Audio Beats.</h5></header>';
aypadHeader += '<ul id="brands"></ul>';
aypadHeader += '</section></nav></div>';
document.getElementById('AYPAD').innerHTML = aypadHeader;

function appear() {
  var navigationList = document.getElementById('nav');
  var whiteHeader = document.getElementById('AYPAD');
  if (navigationList.style.display == 'none') {
    navigationList.style.display = 'block';
    whiteHeader.style.background = 'var(--white)';
  } else if (navigationList.style.display == 'block') {
    navigationList.style.display = 'none';
    whiteHeader.style.background = 'revert-layer';
  }
}
//Brand list
function displayBrandList() {
  var brandList = document.querySelector('.logo_container');
  var whiteHeader = document.getElementById('AYPAD');
  if (brandList.style.display == 'none') {
    brandList.style.display = 'flex';
    whiteHeader.style.background = 'var(--white)';
  } else if (brandList.style.display == 'flex') {
    brandList.style.display = 'none';
    whiteHeader.style.background = 'revert-layer';
  }
}

//close Brandlist
function closeBranList() {
  var brandList = document.querySelector('.logo_container');
  var whiteHeader = document.getElementById('AYPAD');
  if (brandList.style.display == 'flex') {
    brandList.style.display = 'none';
    whiteHeader.style.background = 'revert-layer';
  }
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
  newBrand +=
    '<li><article><a href="' +
    brandArray[0].logo_info[0].link_href +
    '"><figure>';
  newBrand +=
    '<img src="' +
    brandArray[0].logo_info[0].img_src[0] +
    '" alt="' +
    brandArray[0].logo_info[0].img_alt +
    '" />';
  newBrand +=
    '<figcaption><h5>' +
    brandArray[0].logo_info[0].img_caption +
    '</h5></figcaption>';
  newBrand += '</figure></a></article></li>';
  for (var t = 1; t < brandArray.length; t++) {
    newBrand +=
      '<li><article><a href="' +
      brandArray[t].logo_info[0].link_href +
      '"><figure>';
    newBrand +=
      '<img src="' +
      brandArray[t].logo_info[0].img_src +
      '" alt="' +
      brandArray[t].logo_info[0].img_alt +
      '" />';
    newBrand +=
      '<figcaption><h5>' +
      brandArray[t].logo_info[0].img_caption +
      '</h5></figcaption>';
    newBrand += '</figure></a></article></li>';
  }
  document.getElementById('brands').innerHTML = newBrand;
}

//FOOTER LOCATION
var locate = '<div id="logo">';
locate +=
  '<img src="' +
  brandArray[0].logo_info[0].img_src[0] +
  '" alt="logo" width="50px" height="50px" /></div>';
locate += '<div><p><b>' + brandArray[0].company_name + '</b></p>';
locate += '<address>' + brandArray[0].company_add + '</address>';
locate += '<div><b>' + brandArray[0].company_phone + '</b></div></div>';

document.getElementById('location').innerHTML = locate;

//FOOTER MAP
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

//FOOTER SOCIAL
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
