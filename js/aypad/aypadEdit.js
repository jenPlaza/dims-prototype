//NAVIGATION MENU
var navigationArray = [
  {
    link_id: 'home',
    link_name: 'Home',
    link_href: '/index.html',
  },
  {
    link_id: 'about',
    link_name: 'About',
    link_href: 'https://aypad.org/donate#about.html',
  },
  {
    link_id: 'story',
    link_name: 'Story',
    link_href: 'https://aypad.org/story.html',
  },
  {
    link_id: 'news',
    link_name: 'News',
    link_href: 'https://aypad.org/news.html',
  },
  {
    link_id: 'partners',
    link_name: 'Partners',
    link_href: './partners.html',
  },
  {
    link_id: 'contact',
    link_name: 'Contact',
    link_href: 'https://aypad.org/index#contact.html',
  },
  {
    link_id: 'donate',
    link_name: 'Donate',
    link_href: 'https://aypad.org/donate.html',
  },
];

var logoArray = [
  {
    link_href: 'https://www.facebook.com/CommunityYouthNetworkProgramcynpInc/',
    img_src: './images/partners/communityYouthNetworkProgram.png',
    img_alt: 'Community Youth Network Program logo',
    img_caption: 'Community Youth Network Program',
  },
  {
    link_href: 'https://gyan.tigweb.org/',
    img_src: './images/partners/gyan.png',
    img_alt: 'Global Youth Action Network logo',
    img_caption: 'Global Youth Action Network Program',
  },
  {
    link_href: 'https://bitcoin.org/en/',
    img_src: './images/partners/bitcoin.png',
    img_alt: 'Bitcoin logo',
    img_caption: 'Bitcoin',
  },
  {
    link_href: 'https://tools4change.org/',
    img_src: './images/partners/tools4Change-Logo.png',
    img_alt: 'Tools 4 Change logo',
    img_caption: 'Tools 4 Change',
  },
  {
    link_href: 'https://www.warchild.net/',
    img_src: './images/partners/war-child-ic.png',
    img_alt: 'War Child logo',
    img_caption: 'War Child',
  },
  {
    link_href: 'http://yppdatwork.org/',
    img_src:
      './images/partners/youthPartnershipForPeaceAndDevelopment_logo.png',
    img_alt: 'Youth Partnership for Peace and Development logo',
    img_caption: 'Youth Partnership for Peace and Development',
  },
  {
    link_href: 'https://www.un.org/en/',
    img_src: './images/partners/uniteNations_logo.png',
    img_alt: 'United Nations logo',
    img_caption: 'United Nations',
  },
  {
    link_href: 'https://www.unv.org/',
    img_src: './images/partners/UNV.jpeg',
    img_alt: 'United Nations Volunteers logo',
    img_caption: 'United Nations Volunteers',
  },
  {
    link_href: 'https://www.lapo-nigeria.org/',
    img_src: './images/partners/LAPO_Logo_2022.png',
    img_alt: 'Lapo Nigeria logo',
    img_caption: 'Lapo Nigeria',
  },
  {
    link_href: 'https://www.ecobank.com/personal-banking',
    img_src: './images/partners/ecobank.png',
    img_alt: 'Eco Bank logo',
    img_caption: 'Eco Bank ',
  },
  {
    link_href: 'https://www.betatmercury.com/',
    img_src: './images/partners/logo_main.png',
    img_alt: 'Mercury International  logo',
    img_caption: 'Mercury International ',
  },
  {
    link_href: 'https://www.rokelbank.sl/',
    img_src: './images/partners/Rokel Bank SL.png',
    img_alt: 'Rokel Bank logo',
    img_caption: 'Rokel Bank',
  },
];

var socialArray = [
  {
    media_id: 'email',
    media_link: [
      'mailto:publicity.dimstudio@gmail.com',
      'mailto:aypadorg@gmail.com',
    ],
    media_src: './images/icons/socialMedia/message_white.png',
    media_alt: 'email icon',
  },
  {
    media_id: 'phone',
    media_link: ['tel:1-232-75-769929', 'tel:1-232-75-769929'],
    media_src: './images/icons/socialMedia/phone_white.png',
    media_alt: 'phone icon',
  },
  {
    media_id: 'linkedIn',
    media_link: [
      'https://www.linkedin.com/in/dim-studio-ba3531332/',
      'https://www.linkedin.com/company/africa-youth-for-peace-and-development/',
    ],
    media_src: './images/icons/socialMedia/linkedin_white.png',
    media_alt: 'linkedIn icon',
  },
  {
    media_id: 'facebook',
    media_link: [
      'https://web.facebook.com/profile.php?id=61566708072048',
      'https://www.facebook.com/people/Africa-Youth-for-Peace-and-DevelopmentAYPAD/100065081730525/',
    ],
    media_src: './images/icons/socialMedia/facebook_white.png',
    media_alt: 'facebook icon',
  },
  {
    media_id: 'twitter',
    media_link: [
      'https://x.com/DimStudio47673?t=4lHHrWqU_8LLuUgI3olhTQ&s=09',
      'https://x.com/aypadorg1',
    ],
    media_src: './images/icons/socialMedia/twitter_white.png',
    media_alt: 'twitter icon',
  },
  {
    media_id: 'instgram',
    media_link: [
      'https://www.instagram.com/dims_tudio/',
      'https://www.instagram.com/aypadorganization/',
    ],
    media_src: './images/icons/socialMedia/instagram_white.png',
    media_alt: 'instgram icon',
  },
  {
    media_id: 'tiktok',
    media_link: 'https://www.tiktok.com/@dimstudio0',
    media_src: './images/icons/socialMedia/tiktok_white.png',
    media_alt: 'tiktok icon',
  },
  {
    media_id: 'youtube',
    media_link: 'https://www.youtube.com/@aypadorganization877',
    media_src: './images/icons/socialMedia/youtube_white.png',
    media_alt: 'youtube icon',
  },
];

//brand Information
var brandArray = [
  {
    company_name: 'Africa Youth for Peace and Development',
    company_add:
      'Shelter for Africa<br />House National stadium Syke St. <br />Freetown - Sierra Leone</address>',
    company_phone: '1-232-75-769929',
    logo_info: [
      {
        link_href: 'https://aypad.org',
        img_src: [
          './images/logos/logo_aypad-min.png',
          './images/logos/wordLogo_bk.png',
          './images/logos/wordLogo.png',
        ],
        img_alt: 'AYPAD logo',
        img_caption: 'Africa Youth for Peace and Development',
      },
    ],
  },
  {
    company_name: 'Freya International Schools of Research and Implementation',
    company_add: [
      'Sierra Leone Office<br />P.O Box 123 FreeTown Sierra-Leone(SLE) <br />Freetown - Sierra Leone</address>',
      'Uganda Office<br />P.O Box 159288 Kampala, <br />GPO Uganda(UGA)</address>',
    ],
    company_phone: '',
    logo_info: [
      {
        link_href: 'https://www.fisori.org/',
        img_src: './images/partners/freya_logo-min.png',
        img_alt: 'Freya logo',
        img_caption: 'Freya',
      },
    ],
  },
  {
    company_name: 'True Talk News',
    company_add: '',
    company_phone: '',
    logo_info: [
      {
        link_href: 'https://www.truetalknews.org/',
        img_src: './images/partners/trueTalk_logo-min.png',
        img_alt: 'True talk logo',
        img_caption: 'True Talk',
      },
    ],
  },
  {
    company_name: 'DIM Studio',
    company_add:
      'Shelter for Africa<br />House National stadium Syke St. <br />Freetown - Sierra Leone</address>',
    company_phone: '1-232-75-769929',
    logo_info: [
      {
        link_href: 'https://dimstudio.neocities.org',
        img_src: './images/logos/logo_DIMS_purple-min.png',
        img_alt: 'DIM Studio logo',
        img_caption: 'DIM Studio',
      },
    ],
  },
];
