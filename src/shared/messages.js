const MESSAGES = [
  {
    id: "1",
    persons: [
      {
        id: "1",
        name: "ABC",
        avatar: `profile/1.jpg`,
        link: "localhost:3000/profile/1.html",
      },
      {
        id: "2",
        name: "DEF",
        avatar: `profile/2.jpg`,
        link: "localhost:3000/profile/2.html",
      },
    ],
    chat: [
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "2",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
    ],
  },
  {
    id: "2",
    persons: [
      {
        id: "1",
        name: "ABC",
        avatar: `profile/1.jpg`,
        link: "localhost:3000/profile/1.html",
      },
      {
        id: "3",
        name: "EFG",
        avatar: `profile/3.jpg`,
        link: "localhost:3000/profile/2.html",
      },
    ],
    chat: [
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "3",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "3",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "3",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "3",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "3",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
    ],
  },
  {
    id: "3",
    persons: [
      {
        id: "5",
        name: "KLM",
        avatar: `profile/5.jpg`,
        link: "localhost:3000/profile/5.html",
      },
      {
        id: "6",
        name: "NOP",
        avatar: `profile/6.jpg`,
        link: "localhost:3000/profile/6.html",
      },
    ],
    chat: [
      {
        sender: "5",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "6",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "5",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "6",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "5",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "6",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "5",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "6",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "5",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "6",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
    ],
  },
  {
    id: "4",
    persons: [
      {
        id: "8",
        name: "NOP",
        avatar: `profile/8.jpg`,
        link: "localhost:3000/profile/8.html",
      },
      {
        id: "2",
        name: "DEF",
        avatar: `profile/2.jpg`,
        link: "localhost:3000/profile/2.html",
      },
    ],
  },
  {
    id: "5",
    persons: [
      {
        id: "1",
        name: "ABC",
        avatar: `profile/1.jpg`,
        link: "localhost:3000/profile/1.html",
      },
      {
        id: "8",
        name: "NOP",
        avatar: `profile/8.jpg`,
        link: "localhost:3000/profile/8.html",
      },
    ],
    chat: [
      {
        sender: "1",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
      {
        sender: "8",
        text:
          "Vestibulum metus diam, sollicitudin vitae erat vel, lacinia vehicula dui. Duis enim diam, faucibus id eros nec, rhoncus ultrices dolor. Proin in felis nunc. Cras ut eros nisi. Nulla eget egestas enim. Phasellus eget ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat ipsum id orci imperdiet gravida.",
      },
    ],
  },
];
export default MESSAGES;
