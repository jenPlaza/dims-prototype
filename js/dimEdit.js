//NAVIGATION MENU
var navMenuArray = [
  {
    link_id: 'home',
    link_name: 'Home',
    link_href: './index.html#DIM',
  },
  {
    link_id: 'about',
    link_name: 'About Us',
    link_href: './about-us.html',
  },
  {
    link_id: 'service',
    link_name: 'Our Service',
    link_href: './our-services.html',
  },
  {
    link_id: 'team',
    link_name: 'Our Team',
    link_href: './our-team.html"',
  },
];

//TEAM
var teamArray = [
  {
    team_id: 'DIR',
    mem_image_src: './images/team/dr-phillip-bangura.png',
    mem_image_alt: 'Dr Phillip Bangura Headshot',
    mem_name: 'Dr Phillip Bangura',
    mem_DIM_role: 'DIMS Executive DIR',
    mem_country: ' Freetown, Sierra Leone Africa',
    mem_pro_title: 'Executive Director of Africa Youth for Peace & Development',
    mem_bio:
      'Executive Director for Africa Youth for Peace and Development(AYPAD).  Worked with the organization for 10+ years, and implemented several peace and sustainable development projects, with the ultimate aim of positively transforming the lives of young people in difficult circumstances.',
  },
  {
    team_id: 'SUPER02',
    mem_image_src: './images/team/ozioma-roseline-umera.jpg',
    mem_image_alt: 'Ozioma Roseline Umera Headshot',
    mem_name: 'Ozioma Roseline Umera',
    mem_DIM_role: 'DIMS Project SUPER',
    mem_country: 'Africa',
    mem_pro_title: 'Permanent Secretary AYPAD',
    mem_bio:
      'Ozioma Umera is a distinguished information science professional, renowned for her exceptional academic achievements, extensive experience, and commitment to excellence. Academically, Ozioma boasts an impressive portfolio. She holds a Bachelors Degree in Library and Information Science from Nnamdi Azikiwe University, Awka, Anambra State. Additionally, she obtained an Honours Degree in Information Science and a Masters in Information Technology from the University of Pretoria, South Africa. These qualifications have equipped her with the expertise to navigate the complexities of information management.Professionally, Ozioma has accumulated over a decade of experience in information management. Her career commenced in 2014 at the Academic Staff Union of Universities (ASUU) national secretariat, where she served for nine years in Research Services. In 2023, she transitioned to JAYEX Development and Training, Africas premier capacity building and training institute, as a Consultant in Research Development. Furthermore, she was appointed Assistant Lecturer by the Department of Information Science at the University of Pretoria in the same year. Oziomas affiliations with esteemed professional bodies underscore her commitment to excellence. She is a member of the Association for Information Science and Technologists (ASSIST), the Librarians Registration Council of Nigeria, and the Nigeria Library Association. As a respected expert in her field, Ozioma has shared her insights at conferences and forums. Notably, she addressed the African Centre of Excellence for Information Ethics conference, discussing "Bridging the Digital Divide" and highlighting the struggles and triumphs of the older generation in interacting with technology. Her participation in international conferences, including the UNESCO conference on Artificial Intelligence and the Mastercard Foundations leadership training, demonstrates her dedication to staying abreast of global trends. Currently, Ozioma serves as a member of the Board of Governors for Freya International Schools of Research and Implementation (FISORI).',
  },
  {
    team_id: 'SUPER01',
    mem_image_src: './images/team/dr-jim-tamuro.png',
    mem_image_alt: 'Dr Jim Tamuro Headshot',
    mem_name: 'Dr Jim Tamuro ',
    mem_DIM_role: 'DIMS Project SUPER',
    mem_country: 'Africa',
    mem_pro_title: 'Principal Coordinator AYPAD',
    mem_bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et velit justo. Nullam id enim maximus, elementum neque vitae, interdum odio. Fusce at magna id sem feugiat commodo. Vivamus eget turpis suscipit, rhoncus elit in, tempor massa. Cras placerat libero porta placerat mattis. Integer posuere in magna sit amet sodales. Nulla at nunc at neque placerat interdum. Cras eleifend iaculis turpis. Cras sit amet nibh a felis porta vulputate eget non justo. Donec eu sapien nisl. Donec bibendum iaculis nunc, ut luctus nibh molestie sed.',
  },
  {
    team_id: 'COORD01',
    mem_image_src: './images/team/diego-paniagua.png',
    mem_image_alt: 'Diego Paniagua Headshot',
    mem_name: 'Diego Paniagua',
    mem_DIM_role: 'DIMS Project COORD',
    mem_country: 'Africa',
    mem_pro_title: 'Lorem Ipsium',
    mem_bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et velit justo. Nullam id enim maximus, elementum neque vitae, interdum odio. Fusce at magna id sem feugiat commodo. Vivamus eget turpis suscipit, rhoncus elit in, tempor massa. Cras placerat libero porta placerat mattis. Integer posuere in magna sit amet sodales. Nulla at nunc at neque placerat interdum. Cras eleifend iaculis turpis. Cras sit amet nibh a felis porta vulputate eget non justo. Donec eu sapien nisl. Donec bibendum iaculis nunc, ut luctus nibh molestie sed.',
  },
  {
    team_id: 'COORD02',
    mem_image_src: './images/team/sandeep-morar.png',
    mem_image_alt: 'Sandeep Morar Headshot',
    mem_name: 'Sandeep Morar',
    mem_DIM_role: 'DIMS Project COORD',
    mem_country: 'Africa',
    mem_pro_title: 'Lorem Ipsium',
    mem_bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et velit justo. Nullam id enim maximus, elementum neque vitae, interdum odio. Fusce at magna id sem feugiat commodo. Vivamus eget turpis suscipit, rhoncus elit in, tempor massa. Cras placerat libero porta placerat mattis. Integer posuere in magna sit amet sodales. Nulla at nunc at neque placerat interdum. Cras eleifend iaculis turpis. Cras sit amet nibh a felis porta vulputate eget non justo. Donec eu sapien nisl. Donec bibendum iaculis nunc, ut luctus nibh molestie sed.',
  },
  {
    team_id: 'Mngr',
    mem_image_src: './images/team/magda-leena-chisulo.jpg',
    mem_image_alt: 'Magda Leena Chisulo Headshot',
    mem_name: 'Magda Leena Chisulo ',
    mem_DIM_role: 'DIMS Graphics Manager',
    mem_country: 'Africa',
    mem_pro_title: 'Business Risk and Compliance Clerk',
    mem_bio:
      'I am a Business Risk and Compliance Clerk at a bank, with a background in communication and a solid foundation in graphic design. I have hands-on experience creating visual content for various projects, including designing logos, marketing materials, and digital assets. In addition to my design skills, I hold an Honors Degree and a Bachelors Degree in Communication, as well as a Diploma in Public Relations. I am currently pursuing a Master’s in Management. ',
  },
  {
    team_id: 'web',
    mem_image_src: './images/team/jen-plaza.jpg',
    mem_image_alt: 'Jennifer Plaza Headshot',
    mem_name: 'Jennifer Plaza',
    mem_DIM_role: 'DIMS Frontend Developer  ',
    mem_country: 'Orlando, Florida USA',
    mem_pro_title: 'Web Design and Development',
    mem_bio:
      'I obtained my undergraduate degree in Web Design & Development from Full Sail University on November 24, 2020. I was born and raised in Miami, Florida; I moved to Orlando, Florida in 2006. I am the youngest sibling of two. I enjoy gardening, painting, and my new hobby growing my own organic food. Since 2006, I worked for the American Hotel and Lodging Educational Institute (AHLEI) until they merged with the National Restaurant Association (NRA). Withtin that period, I found my ninch for websites; I decided to go back to school. I graduated in 2020; since then I have been involved in various volunteer projects, aquired some work experience, and slowly been modeling my skills and structuring my habits into best practices. In June of 2024, I joined AYPAD as a volunteer and have had the blessing of being part of a few of their many projects. Its been a great opportunity and I am happy to conitnue particpating as they feel fit.',
  },
];

//feature Services
var servicesArray = [
  {
    id: 'intuitive',
    article_image_src: './images/icons/feature/brain_pink.png',
    article_image_alt: 'person brain icon pink color',
    article_header: 'Intuitive User Interface',
    article_feature:
      'Most mobile music software is designed with simplicity in mind. Users can easily navigate through different tools and effects, allowing them to focus on their creativity without overwhelming complexity',
  },
  {
    id: 'training',
    article_image_src: './images/icons/feature/literature_pink.png',
    article_image_alt: 'person brain icon pink color',
    article_header: 'Training Resources',
    article_feature:
      'Robust educational materials help users improve their skills, stay updated with new features, and make the most of the software, boosting their overall musical proficiency.',
  },
  {
    id: 'collaboration',
    article_image_src: './images/icons/feature/handshake_pink.png',
    article_image_alt: 'person brain icon pink color',
    article_header: 'Collaboration Tools',
    article_feature:
      'Sharing ideas with collaborators is made simple with mobile software. Users can send project files or snippets instantly, making collaboration seamless, regardless of geographic location.',
  },
  {
    id: 'portability',
    article_image_src: './images/icons/feature/mobile-marketing_pink.png',
    article_image_alt: 'person brain icon pink color',
    article_header: 'Portability',
    article_feature:
      'With mobile music software, your studio goes wherever you do. Whether you’re traveling, waiting for an appointment, or at a coffee shop, you can work on your music anytime inspiration strikes.',
  },
];

//testimonials
var testimonialArray = [
  {
    id: 'CLawan_01',
    article_style:
      'background-image: linear-gradient(var(--glaucous),var(--rhino));',
    article_name: 'Christian Lawan',
    article_testimonial:
      'I have been using Dim Studio for my music production needs and I am beyond impressed with its capabilities. Not only does it provide a platform for collaboration with other musicians and lead trainers, but it is also incredibly affordable. Thank you for creating such an amazing product!',
  },
  {
    id: 'MSibanda_02',
    article_style:
      'background-image: linear-gradient(var(--chetwode-blue),var(--mulled-wine));',
    article_name: 'Martha Sibanda',
    article_testimonial:
      'I am so happy with Dim Studios. This program has allowed me to work with a diverse group of collaborators, fostering a sense of inclusivity and creativity in my music. I 100% recommend it!',
  },
  {
    id: 'DMiguel_03',
    article_style:
      'background-image: linear-gradient(var(--bright-ube),var(--dirty-purple));',
    article_name: 'David Miguel',
    article_testimonial:
      'I have been using Dim Studio and I must say, it has completely transformed my music listening experience. What sets Dim Studio apart from other music apps is their trainers. These trainers have helped me discover my music intuition through valuable insights and tips on how to improve my music listening skills. I highly recommend it to all music lovers out there. Trust me, you won’t be disappointed!',
  },
  {
    id: 'JOkon_04',
    article_style:
      'background-image: linear-gradient(var(--turkish-rose),var(--old-mauve));',
    article_name: 'Joyce Okon',
    article_testimonial:
      'Dim Studio is so easy to use and the trainers are amazing. I have always dreamed of being a singer and with Dim Studio my dreams have been put into motion. I highly recommend Dim Studio to anybody looking for a reliable and versatile music software. Thank you for creating such an amazing product!',
  },
];

//FOOTER Social Media
var socialArray = [
  {
    media_id: 'email',
    media_link: 'mailto:aypadorg@gmail.com',
    media_src: './images/icons/socialMedia/message_white.png',
    media_alt: 'email icon',
  },
  {
    media_id: 'phone',
    media_link: 'tel:1-232-75-769929',
    media_src: './images/icons/socialMedia/phone_white.png',
    media_alt: 'phone icon',
  },
  {
    media_id: 'linkedIn',
    media_link:
      'https://www.linkedin.com/company/africa-youth-for-peace-and-development/',
    media_src: './images/icons/socialMedia/linkedin_white.png',
    media_alt: 'linkedIn icon',
  },
  {
    media_id: 'facebook',
    media_link:
      'https://www.facebook.com/people/Africa-Youth-for-Peace-and-DevelopmentAYPAD/100065081730525/',
    media_src: './images/icons/socialMedia/facebook_white.png',
    media_alt: 'facebook icon',
  },
  {
    media_id: 'twitter',
    media_link: 'https://x.com/aypadorg1',
    media_src: './images/icons/socialMedia/twitter_white.png',
    media_alt: 'twitter icon',
  },
  {
    media_id: 'instgram',
    media_link: 'https://www.instagram.com/aypadorganization/',
    media_src: './images/icons/socialMedia/instagram_white.png',
    media_alt: 'instgram icon',
  },
  {
    media_id: 'youtube',
    media_link: 'https://www.youtube.com/@aypadorganization877',
    media_src: './images/icons/socialMedia/youtube_white.png',
    media_alt: 'youtube icon',
  },
];
