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
          id: 'crate-training-page',
          title: 'Crate Training',
        },
        {
          href: '#',
          id: 'toilet-training-page',
          title: 'Toilet Training',
        },
        {
          href: '#',
          id: 'feeding-page',
          title: 'Feeding Guidelines',
        },
      ],
      id: 'puppy-care-menu',
      title: 'Puppy Care',
    },
    {
      href: '#',
      id: 'dog-showing-page',
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
  ];
}

export {
  getMenuBarData,
};
