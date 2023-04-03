module.exports = {
  siteTitle: 'JROM CV', // <title>
  manifestName: 'jromcv',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby_jromcv/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Jerome Occiano',
  subHeading: 'Software/Blockchain Developer',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/SilverJRM',
    },
    {
      style: 'brands',
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/SilverJROM',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:jromoccianox@gmail.com',
    },
  ],
};
