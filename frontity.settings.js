const settings = {
  "name": "the-nest",
  "state": {
    "frontity": {
      "url": "https://walter-clayton.000webhostapp.com/",
      "title": "The Nest",
      "description": "Your Bramley family friendly coffee shop"
    }
  },
  "packages": [
    {
      "name": "the-nest-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Menu",
              "/menu/"
            ],
            [
              "Contact",
              "/contact/"
            ],
            [
              "Gallery",
              "/gallery/"
            ],
            [
              "Reviews",
              "/reviews/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://walter-clayton.000webhostapp.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
