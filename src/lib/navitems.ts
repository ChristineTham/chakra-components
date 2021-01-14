export type NavItem = {
  name: string
  description?: string
  href?: string
  submenu?: NavItem[]
}

export function getMenu(name: string): NavItem[] | undefined {
  const menuItem = navItems.filter((item) => item.name === name)
  return menuItem && menuItem[0].submenu
}

export function getDescription(name: string, menu?: string): string | undefined {
  const list = menu ? getMenu(menu) : navItems
  const menuItem = list && list.filter((item) => item.name === name)
  return menuItem && menuItem[0].description
}

export const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    description: 'About this website.',
    href: '/about',
  },
  {
    name: 'Static',
    description:
      'Static components have a fixed design. Change the component by editing it directly.',
    submenu: [
      {
        name: 'Headers',
        description: 'Headers are prominent sections at the beginning of the web page.',
        href: '/headers',
      },
      {
        name: 'Sections',
        description: 'Sections are parts of the web page with a specific purpose and design.',
        href: '/sections',
      },
      {
        name: 'Cards',
        description:
          'Card components are typically used to display blog articles, products, or any information that is repeated across the page.',
        href: '/cards',
      },
      {
        name: 'Forms',
        description: 'Forms allow user input via controls.',
        href: '/forms',
      },
      {
        name: 'Footers',
        description: 'Footers are displayed at the bottom of every page.',
        href: '/footers',
      },
    ],
  },
  {
    name: 'Flexible',
    description:
      'Flexible components change their design based on props supplied with the component.',
    submenu: [
      {
        name: 'FlexHeader',
        description:
          'The FlexHeader component has different customisable looks based on optional props.',
        href: '/flexheader',
      },
      {
        name: 'FlexNavbar',
        description:
          'FlexNavbar allows a customised navbar to be displayed with title, menu, optional logo and optional children in various positions, and can be fixed to the top of the screen.',
        href: '/flexnavbar',
      },
    ],
  },
]
