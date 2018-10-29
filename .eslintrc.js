/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  // extends: './node_modules/eslint-config-airbnb-standard/index.js'
  // extends: './node_modules/eslint-config-hackreactor/index.js'
  "extends": ["airbnb-standard"],
  "rules": {
  	"prefer-template": "off",
  	"no-plusplus": 0,
  	"no-console": 0
  }
  // "settings": {
  // 	"import/resolver": {
  // 		"node": {
  //       "extensions": [".js", ".jsx"]
  //     }
  // 	}
  // }
};