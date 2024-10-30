var dimsHeader = '<figure><a href="' + navArray[0].link_href + '" id="logo">';
dimsHeader +=
  '<img src="' +
  brandArray[3].logo_info[0].img_src +
  '" alt="' +
  brandArray[3].logo_info[0].img_alt +
  '" width="100%" height="100%" >';
dimsHeader += '<h4>' + brandArray[3].company_name + '</h4></a></figure>';
dimsHeader += '<header class="in-place"><nav><ul>';
for (var d = 0; d < navArray.length; d++) {
  dimsHeader +=
    '<li><a href="' +
    navArray[d].link_href +
    '"><h5>' +
    navArray[d].link_name +
    '</h5></a></li>';
}
dimsHeader += '</ul></nav></header>';
document.querySelector('.DIMS').innerHTML = dimsHeader;

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
      '</h6><div><a href="' +
      teamArray[t].mem_portfolio +
      '" style="display: none"><img src="./images/icons/web.png" alt="website icon" width="25px" height="25px" /></a><a href="' +
      teamArray[t].mem_linkedIn +
      '" ><img src="./images/icons/linkedin_pink.png" alt="linkedIn icon" width="25px" height="25px" /></a></div></div>';
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

//Follow DIMS
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
