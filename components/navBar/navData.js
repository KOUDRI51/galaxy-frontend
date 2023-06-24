export const navData = [
  {
    id: "m@01",
    itm: "Home",
    url: "/",
    dropdown: false,
    
  },
  {
    id: "m@02",
    itm: "Properties",
    url: "/#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "dp@21",
        dp_itm: "Properties",
        url: "/property",
      },
      {
        id: "dp@22",
        dp_itm: "Property Details",
        url: "/property/{id}",
      },
      {
        id: "dp@23",
        dp_itm: "Property Alert",
        url: "/property/alert",
      },
    ],
  },

  {
    id: "m@03",
    itm: "About Us",
    url: "/about",
    dropdown: false,
  },
  {
    id: "m@04",
    itm: "How It Works",
    url: "/how-it-works",
    dropdown: false,
  },
  {
    id: "m@05",
    itm: "Pages",
    url: "/#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "dp@51",
        dp_itm: "Dashboard",
        url: "/dashboard",
      },
      {
        id: "dp@5008",
        dp_itm: "How It Works",
        url: "/how-it-works",
      },
      {
        id: "dp@59",
        dp_itm: "Key Risks",
        url: "/key-risks",
      },
      {
        id: "dp@591",
        dp_itm: "Loyality Program",
        url: "/loyality-program",
      },
      {
        id: "dp@592",
        dp_itm: "Terms Conditions",
        url: "/terms-conditions",
      },
      // {
      //   id: "dp@583",
      //   dp_itm: "Privacy Policy",
      //   url: "/privacy-policy",
      // },
      // {
      //   id: "dp@584",
      //   dp_itm: "Cookie Policy",
      //   url: "/cookie-policy",
      // },
      // {
      //   id: "dp@588",
      //   dp_itm: "Support",
      //   url: "/support",
      // },
      // {
      //   id: "dp@5888",
      //   dp_itm: "Error",
      //   url: "/404",
      // },
    ],
  },
  {
    id: "m@06",
    itm: "Contact",
    url: "/contact-us",
    dropdown: false,
  },
];
