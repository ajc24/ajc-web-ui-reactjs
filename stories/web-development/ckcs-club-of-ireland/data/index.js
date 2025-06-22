/**
 * Developed by Anthony Cox in 2025
 */
const getMenuBarData = () => {
  return [
    {
      href: '#',
      id: 'home-page',
      title: 'Home',
    },
    {
      dropdownMenuBarItemsList: [
        {
          href: '#',
          id: 'officers-and-committee-page',
          title: 'Officers and Committee',
        },
        {
          href: '#',
          id: 'code-of-ethics-page',
          title: 'Code of Ethics',
        },
        {
          href: '#',
          id: 'history-page',
          title: 'History',
        },
      ],
      id: 'about-the-club-menu',
      title: 'About The Club',
    },
    {
      href: '#',
      id: 'about-the-breed-page',
      title: 'About The Breed',
    },
    {
      dropdownMenuBarItemsList: [
        {
          href: '#',
          id: 'show-info-page',
          title: 'Show Info',
        },
        {
          href: '#',
          id: 'show-results-page',
          title: 'Show Results',
        },
        {
          href: '#',
          id: 'show-dates-page',
          title: 'Show Dates',
        },
      ],
      id: 'shows-menu',
      title: 'Shows',
    },
    {
      href: '#',
      id: 'champions-page',
      title: 'Champions',
    },
    {
      href: '#',
      id: 'links-page',
      title: 'Links',
    },
    {
      href: '#',
      id: 'contact-us-page',
      title: 'Contact Us',
    },
  ];
}

export {
  getMenuBarData,
};
