import Root from "./components"
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";

const theNestTheme = {
  name: "the-nest-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      processors: [image, iframe, link],
    }
  }
}

export default theNestTheme