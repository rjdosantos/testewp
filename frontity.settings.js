const settings = {
  "name": "testewp",
  "state": {
    "frontity": {
      "title": "ocatarinense",
      "description": "Trilhas, Viagens e Turismo em Santa Catarina e Pelo Mundo."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Brasil", "/category/brasil/"],
            ["América do Sul", "/category/america-do-sul/"],
            ["Estados Unidos", "/category/eua/"],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wpteste.local"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;