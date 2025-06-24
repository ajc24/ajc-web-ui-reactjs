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
      href: '#',
      id: 'our-dogs-page',
      title: 'Our Dogs',
    },
    {
      href: '#',
      id: 'puppies-page',
      title: 'Puppies',
    },
    {
      dropdownMenuBarItemsList: [
        {
          href: '#',
          id: 'item-1-page',
          title: 'Mock Item 1...',
        },
        {
          href: '#',
          id: 'item-2-page',
          title: 'Mock Item 2...',
        },
      ],
      id: 'dog-showing-menu',
      title: 'Dog Showing',
    },
    {
      href: '#',
      id: 'about-us-page',
      title: 'About Us',
    },
    {
      href: '#',
      id: 'contact-us-page',
      title: 'Contact Us',
    },
    {
      href: '#',
      id: 'login-page',
      title: 'Login',
    },
  ];
}

export {
  getMenuBarData,
};
