/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/recipes.js":
/*!*************************!*\
  !*** ./data/recipes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const recipeData = [
  {
    "id": 595736,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
      {
        "id": 19206,
        "quantity": {
          "amount": 3,
          "unit": "Tbsp"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1012047,
        "quantity": {
          "amount": 24,
          "unit": "servings"
        }
      },
      {
        "id": 10019903,
        "quantity": {
          "amount": 2,
          "unit": "c"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ],
    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 678353,
    "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    "ingredients": [
      {
        "id": 1009016,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 9003,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 20027,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1002046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 1,
          "unit": "clove"
        }
      },
      {
        "id": 1012046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 19911,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 16112,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 10010062,
        "quantity": {
          "amount": 24,
          "unit": "ounce"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 16124,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }
    ],
    "name": "Maple Dijon Apple Cider Grilled Pork Chops",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 412309,
    "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
    "ingredients": [
      {
        "id": 1002030,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 8,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 2031,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 5100,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 2009,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 6168,
        "quantity": {
          "amount": 8,
          "unit": "cups"
        }
      },
      {
        "id": 9176,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2026,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 1.5,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
        "number": 1
      }
    ],
    "name": "Dirty Steve's Original Wing Sauce",
    "tags": [
      "sauce"
    ]
  },
  {
    "id": 741603,
    "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 18371,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 9040,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 20011,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 6,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1230,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 19296,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 16098,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Watch how to make this recipe.",
        "number": 1
      },
      {
        "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
        "number": 2
      },
      {
        "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
        "number": 3
      },
      {
        "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
        "number": 4
      },
      {
        "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
        "number": 5
      },
      {
        "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
        "number": 6
      },
      {
        "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
        "number": 7
      }
    ],
    "name": "Elvis Pancakes",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 562334,
    "image": "https://spoonacular.com/recipeImages/562334-556x370.jpg",
    "ingredients": [
      {
        "id": 2048,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 18371,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "teaspoon"
        }
      },
      {
        "id": 20090,
        "quantity": {
          "amount": 1.125,
          "unit": "cup"
        }
      },
      {
        "id": 93784,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1124,
        "quantity": {
          "amount": 3,
          "unit": "large"
        }
      },
      {
        "id": 93625,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 12220,
        "quantity": {
          "amount": 2,
          "unit": "Tablespoons"
        }
      },
      {
        "id": 10118375,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 19304,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 11413,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.75,
          "unit": "teaspoon"
        }
      },
      {
        "id": 93696,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 93760,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 93626,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Grease or spray oil a 9\u00d75 inch loaf pan.Preheat oven to 170 \u2013 200\u00b0F (lowest possible).",
        "number": 1
      },
      {
        "instruction": "Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds.",
        "number": 2
      },
      {
        "instruction": "Whisk together the dry ingredients; set aside.",
        "number": 3
      },
      {
        "instruction": "Add the oil, vinegar and yeast mixture to the egg whites and blend on low for a few seconds.",
        "number": 4
      },
      {
        "instruction": "Add dry ingredients all at once and mix on low speed until all dry ingredients are moistened. Then beat on high for 1 minute.",
        "number": 5
      },
      {
        "instruction": "Add dough batter to prepared pan and distribute and smooth the top using a rubber spatula. You'll want to meet all sides of the pan. If you miss the corners that will still be okay. It will fill in upon rising. To even out top, drop a few drops of filtered water on top, and spread evenly with a rubber spatula, or dip spatula in water several times.",
        "number": 6
      },
      {
        "instruction": "Place the bread pan in the oven. Turn oven off. Allow the dough to rise until the center is about 1/2\u201d over the top of the pan, about 22 minutes. It will rise more while the oven is heating and during baking.",
        "number": 7
      },
      {
        "instruction": "Remove pan from oven and preheat oven to 375\u00b0F.",
        "number": 8
      },
      {
        "instruction": "Place the pan on the center of the rack in the center of the oven and bake for about 45 minutes or more.",
        "number": 9
      },
      {
        "instruction": "Remove the loaf from the oven and immediately remove it from the pan (careful it will be hot), and set the loaf on a cooling rack to cool. If you do not remove it right away the steam will make the crust soggy.Slice off the two ends to allow the steam to escape, or it will begin to sink in on the sides and bottom.Once cooled, it will shrink a little bit. Slice it with an electric slicer, electric knife or serrated knife. You'll get about 13-16, depending upon how thick you slice it.",
        "number": 10
      }
    ],
    "name": "Mock Udi\u2019s Gluten Free Whole Grain Bread",
    "tags": []
  },
  {
    "id": 507921,
    "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
    "ingredients": [
      {
        "id": 18371,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 19350,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 1124,
        "quantity": {
          "amount": 2,
          "unit": "large"
        }
      },
      {
        "id": 20081,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 9099,
        "quantity": {
          "amount": 15,
          "unit": "oz"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "To make the Cupcakes: Preheat oven to 350 degrees. Line 12 cupcake tins with paper holders.",
        "number": 1
      },
      {
        "instruction": "Whisk together dry Fruit Cocktail Cupcakes ingredients.",
        "number": 2
      },
      {
        "instruction": "Add in wet Fruit Cocktail Cupcakes ingredients and stir with a rubber spatula until thoroughly combined. Fill cupcake tins evenly, and bake for 20 minutes or until thin knife inserted in center comes out clean.",
        "number": 3
      }
    ],
    "name": "Ambrosia Cupcakes",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 721146,
    "image": "https://spoonacular.com/recipeImages/721146-556x370.jpg",
    "ingredients": [
      {
        "id": 12061,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 6,
          "unit": "tablespoons"
        }
      },
      {
        "id": 12104,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 12115,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 4047,
        "quantity": {
          "amount": 6,
          "unit": "tablespoons"
        }
      },
      {
        "id": 10019071,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 8212,
        "quantity": {
          "amount": 1,
          "unit": "Handful"
        }
      },
      {
        "id": 19911,
        "quantity": {
          "amount": 5,
          "unit": "tablespoons"
        }
      },
      {
        "id": 8121,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      },
      {
        "id": 12142,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat the oven to 325 degrees F.Coarsely chop the almonds and pecans.",
        "number": 1
      },
      {
        "instruction": "Combine the oats, almonds, pecans, and salt in a bowl. Toss to combine.In a medium-sized bowl, combine the coconut oil (measure exactly when it's melted and not in the hardened state), and 1/2 cup chocolate chips.Microwave in bursts of 15 seconds stirring in between each burst for 15 seconds until completely melted.Stir in the brown sugar (measured lightly packed), honey or maple syrup, and vanilla extract.",
        "number": 2
      },
      {
        "instruction": "Pour the chocolate wet mixture into the oat and nut mixture and stir until well combined.",
        "number": 3
      },
      {
        "instruction": "Spread the granola evenly onto a parchment lined baking sheet.",
        "number": 4
      },
      {
        "instruction": "Bake for 20-30 minutes (depending on the heat of your oven) making sure to flip and stir the granola around every 6-8 minutes.",
        "number": 5
      },
      {
        "instruction": "Remove and allow the granola to harden and set up. (It may be soft and not very \"granola-like\", but it hardens as it dries out so be careful to not over-cook it). Mine generally takes about 21 minutes to be fully baked.Allow the granola to sit at room temperature for a few hours to harden and set up.Once the granola is hardened, stir in the remaining 1/2 cup chocolate chips and the toasted flaked coconut.To make a yogurt bowl: fill a bowl with the coconut cream yogurt, add a swirl of nut butter, add some fruit such as a banana, add the granola, and finish with chia seeds. Enjoy immediately.",
        "number": 6
      }
    ],
    "name": "Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 541288,
    "image": "https://spoonacular.com/recipeImages/541288-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 160,
          "unit": "g"
        }
      },
      {
        "id": 93740,
        "quantity": {
          "amount": 40,
          "unit": "g"
        }
      },
      {
        "id": 1125,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 12023,
        "quantity": {
          "amount": 40,
          "unit": "g"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 80,
          "unit": "g"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 1,
          "unit": "stick"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Cut the butter into small cubes and keep them refrigerated until ready to use (I cut on parchment paper and wrap up the butter for easy transfer.).In the food processor, combine the flour, almond meal, sugar, and salt. If you don\u2019t have a food processor, you can simply use a bowl to mix all the ingredients.If you want your sesame seeds to be fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.Take out the butter from the refrigerator and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.Lastly add egg yolk.If the food processor is small (like mine) and it doesn\u2019t look like it\u2019s mixed completely, take it out and mix well with a silicone spatula.Form the dough into a ball and cut in half.",
        "number": 1
      },
      {
        "instruction": "Roll it to a log approximately 2\u201d across. For me it\u2019s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. Form a nice shape. I wasn't paying attention so my log is flat on one side (see step 11)!Wrap the logs tightly in plastic wrap and refrigerate until firm, about 1 hour.Preheat the oven to 350\u00b0 F (175\u00b0 C).",
        "number": 2
      },
      {
        "instruction": "Remove the dough from plastic wrap and cut into discs about \u00bc inch thick (if you prefer thicker cookies, cut into discs about \u00bd inch and you get 20 cookies total).",
        "number": 3
      },
      {
        "instruction": "Place them on two baking sheets lined with parchment paper.",
        "number": 4
      },
      {
        "instruction": "Bake for about 15 minutes, or until lightly browned around the edges.",
        "number": 5
      },
      {
        "instruction": "Remove from the oven and allow to cool on the baking sheet for about 10 minutes. Then transfer to a wire rack to cool completely. Store cookies in an airtight container. Cookies will last for a day or two.",
        "number": 6
      }
    ],
    "name": "Sesame Cookies",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 779583,
    "image": "https://spoonacular.com/recipeImages/779583-556x370.jpg",
    "ingredients": [
      {
        "id": 19334,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 3,
          "unit": "tablespoons"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1015062,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 10011109,
        "quantity": {
          "amount": 4,
          "unit": "cups"
        }
      },
      {
        "id": 10116098,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 2064,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 2021,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 9160,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 9266,
        "quantity": {
          "amount": 1.25,
          "unit": "cups"
        }
      },
      {
        "id": 16124,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 0.5,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Prepare the chicken: In a large bowl, whisk together the brown sugar, ginger, oil, soy sauce, Sriracha and peanut butter.",
        "number": 1
      },
      {
        "instruction": "Add the chicken and toss to coat.",
        "number": 2
      },
      {
        "instruction": "Let marinate at room temperature for 15 minutes or cover and refrigerate for up to 6 hours. Preheat the oven broiler with a rack set 4-inches from the heat source. Line an 18x13-inch rimmed sheet pan with foil and spray with nonstick spray.",
        "number": 3
      },
      {
        "instruction": "Remove the chicken from the marinade, discarding excess marinade, and place on prepared pan, covering two-thirds of the pan and spacing evenly. Broil for 6 minutes.",
        "number": 4
      },
      {
        "instruction": "Remove the pan from the oven and spread pineapple on the remaining space on the pan. Sprinkle the pineapple with 1 tablespoon brown sugar. Broil for 3 to 5 minutes or until chicken is browned and no longer pink inside.",
        "number": 5
      },
      {
        "instruction": "Transfer the chicken to serving plates.",
        "number": 6
      },
      {
        "instruction": "Place the coleslaw mix in a medium bowl.",
        "number": 7
      },
      {
        "instruction": "Add the broiled pineapple, lime juice, oil, soy sauce and Sriracha; toss to coat. Divide among the plates with the chicken and sprinkle the slaw with mint or basil.",
        "number": 8
      }
    ],
    "name": "Thai Chicken Tenders with Broiled Pineapple Slaw",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 550940,
    "image": "https://spoonacular.com/recipeImages/550940-556x370.jpg",
    "ingredients": [
      {
        "id": 11135,
        "quantity": {
          "amount": 1,
          "unit": "large head"
        }
      },
      {
        "id": 6172,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1002046,
        "quantity": {
          "amount": 1,
          "unit": "tbsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 8,
          "unit": ""
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "cloves"
        }
      },
      {
        "id": 93632,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 12120,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 93690,
        "quantity": {
          "amount": 2,
          "unit": "tbsp"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 1,
          "unit": "small"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 10010123,
        "quantity": {
          "amount": 5,
          "unit": "slices"
        }
      },
      {
        "id": 11096,
        "quantity": {
          "amount": 200,
          "unit": "g"
        }
      },
      {
        "id": 1012047,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat the oven to 375FCook and peel the hard boiled eggs according to your favourite method.",
        "number": 1
      },
      {
        "instruction": "Add onion, garlic, salt and pepper to a medium saucepan. Cook over medium heat for one or two minutes, until fragrant and slightly softened.Throw the cauliflower florets in and continue cooking for a minute or two.",
        "number": 2
      },
      {
        "instruction": "Add chicken stock, cover and bring to the boil; lower heat and continue cooking until the cauliflower is tender, about 5-7 minutes.Ladle the cauliflower mixture into your blender; add ghee, Dijon mustard and nutritional yeast and process on high speed until super smooth and silky in consistency. Set aside. Steam the rapini for 30 seconds to a minute, until slightly softened and bright green. In a small skillet, dry roast the hazelnuts over medium heat until they become fragrant and take a nice golden coloration. Slice the hard boiled eggs and add them to a large mixing bowl, followed by \u201cBechamel\u201d sauce, rapini and three quarters of the hazelnuts.",
        "number": 3
      },
      {
        "instruction": "Mix very delicately until well combined and transfer to an oven safe dish. Tear the prosciutto into smaller pieces and arrange them on top of the dish. Sprinkle with the rest of the hazelnuts. Cover with foil and place in the oven for 20 minutes; after that time, remove the foil and set the oven to broil for a 2-3 minutes or until the prosciutto becomes nice and crispy and takes a nice golden coloration. You could also make this ahead of time and place it in the fridge after you have covered it with foil (although you might want to let it cool a bit beforehand). In this case, you\u2019ll want to increase oven time to about 45 minutes, at 375F. This also reheats extremely well in the microwave and will easily keep for 4-5 days in the refrigerator.",
        "number": 4
      }
    ],
    "name": "Egg and Rapini Casserole",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 583502,
    "image": "https://spoonacular.com/recipeImages/583502-556x370.jpg",
    "ingredients": [
      {
        "id": 6150,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 2,
          "unit": "tbsp"
        }
      },
      {
        "id": 6194,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 3,
          "unit": "large"
        }
      },
      {
        "id": 93627,
        "quantity": {
          "amount": 3,
          "unit": "tbsp"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 2028,
        "quantity": {
          "amount": 8,
          "unit": "servings"
        }
      },
      {
        "id": 10072,
        "quantity": {
          "amount": 6,
          "unit": "lbs"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 8,
          "unit": "servings"
        }
      },
      {
        "id": 6971,
        "quantity": {
          "amount": 2,
          "unit": "tbsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Combine 1 cup chicken broth, 1 cup BBQ sauce, 3 tbsp liquid smoke, 2 tbsp Worcestershire sauce, 3 pressed garlic cloves, 2 tbsp brown sugar and stir to combine.Generously sprinkle the pork roast with salt, pepper and paprika.Rub the seasoning into the pork shoulder.Chop 1 large onion and place it into the bottom of the slow cooker.",
        "number": 1
      },
      {
        "instruction": "Place the pork roast over the onion and pour the marinade over the pork.Cover and set on low for 8 hours.",
        "number": 2
      },
      {
        "instruction": "Let it cool down so you don't burn your fingers while shredding.",
        "number": 3
      },
      {
        "instruction": "Remove the meat to a large bowl and shred. This meat is fall-apart tender! The marinade enhances the natural flavors of the pork. When you're done shredding the pork, pour as much of the remaining sauce over the pork as you like.",
        "number": 4
      },
      {
        "instruction": "Serve with more Baby Rays BBQ Sauce... and pickles",
        "number": 5
      }
    ],
    "name": "Pulled Pork",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 543687,
    "image": "https://spoonacular.com/recipeImages/543687-556x370.jpg",
    "ingredients": [
      {
        "id": 93607,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 9040,
        "quantity": {
          "amount": 1,
          "unit": "small"
        }
      },
      {
        "id": 18942,
        "quantity": {
          "amount": 1,
          "unit": "Tbsp"
        }
      },
      {
        "id": 1012010,
        "quantity": {
          "amount": 0.25,
          "unit": "tsp"
        }
      },
      {
        "id": 2021,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 2025,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 43274,
        "quantity": {
          "amount": 1,
          "unit": "oz"
        }
      },
      {
        "id": 8120,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 11424,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Add all ingredients to a blender (except graham crackers if using). Cover and blend until well pureed then serve topped with crushed graham crackers if desired.*The banana is mostly what gives this smoothie it's sweetness, so I recommend using one that is speckled (not mushy though).Recipe Source: Cooking Classy",
        "number": 1
      }
    ],
    "name": "Pumpkin Cheesecake Breakfast Smoothie",
    "tags": [
      "morning meal",
      "brunch",
      "breakfast"
    ]
  },
  {
    "id": 516904,
    "image": "https://spoonacular.com/recipeImages/516904-556x370.jpg",
    "ingredients": [
      {
        "id": 9016,
        "quantity": {
          "amount": 3,
          "unit": "Tablespoons"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 1,
          "unit": "Tablespoon"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "Tablespoons"
        }
      },
      {
        "id": 18047,
        "quantity": {
          "amount": 16,
          "unit": "ounce"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 10,
          "unit": "large"
        }
      },
      {
        "id": 1089003,
        "quantity": {
          "amount": 5,
          "unit": "medium"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 2,
          "unit": "Tablespoons"
        }
      },
      {
        "id": 1012010,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Prepare apple filling: Melt butter over medium heat in 12- inch skillet.",
        "number": 1
      },
      {
        "instruction": "Add apples and sugar; cook 20 minutes, stirring occasionally. Stir in apple juice; cook 1 more minute.",
        "number": 2
      },
      {
        "instruction": "Grease 13 x 9-inch baking dish. Arrange 1/2 of bread slices, overlapping slightly.",
        "number": 3
      },
      {
        "instruction": "In a medium bowl, whisk milk, salt, cinnamon and eggs.",
        "number": 4
      },
      {
        "instruction": "Pour 1/2 of egg mixture over bread. Set aside 1/4 of apple filling; cover and refrigerate to spoon on after baking.",
        "number": 5
      },
      {
        "instruction": "Spread remaining apple filling over bread in an even layer. Arrange remaining bread slices over apple layer.",
        "number": 6
      },
      {
        "instruction": "Pour remaining egg mixture over top bread layer. Press bread down with spatula so it absorbs the maximum amount of egg mixture. Dot bread with butter and sprinkle with sugar. Cover and refrigerate overnight.",
        "number": 7
      },
      {
        "instruction": "To bake: Preheat oven to 325\u00b0F. Uncover dish and bake 50 to 55 minutes or until knife inserted in center comes out clean. Reheat remaining apple mixture in microwave. Spoon over top to serve.",
        "number": 8
      }
    ],
    "name": "Cinnamon Raisin Overnight French Toast w/ Apple Filling",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 988243,
    "image": "https://spoonacular.com/recipeImages/988243-556x370.jpg",
    "ingredients": [
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 4,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11297,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 6,
          "unit": "cloves"
        }
      },
      {
        "id": 1032009,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 15152,
        "quantity": {
          "amount": 2,
          "unit": "pounds"
        }
      },
      {
        "id": 11294,
        "quantity": {
          "amount": 0.25,
          "unit": "medium"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Melt butter to a large skillet over medium heat. As the butter melts, it will begin to foam as it transitions from a bright, lemon-yellow color to golden and then finally to a nutty-brown color. As the butter just begins to turn nutty-brown from golden, reduce your heat to medium-low and carefully toss in your garlic and onion. Cook until the onion just begins to become tender and then add in your shrimp. Stirring frequently, cook until the shrimp turn pink and lose their translucence.",
        "number": 1
      },
      {
        "instruction": "Stir in salt, black pepper, red pepper flakes and fresh parsley. Toss shrimp to make sure all are well-coated.",
        "number": 2
      },
      {
        "instruction": "Remove from heat and serve.",
        "number": 3
      }
    ],
    "name": "Brown Butter Garlic Shrimp",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 724018,
    "image": "https://spoonacular.com/recipeImages/724018-556x370.jpg",
    "ingredients": [
      {
        "id": 11007,
        "quantity": {
          "amount": 2,
          "unit": "large"
        }
      },
      {
        "id": 9150,
        "quantity": {
          "amount": 4,
          "unit": "slices"
        }
      },
      {
        "id": 9156,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 18069,
        "quantity": {
          "amount": 6,
          "unit": "slices"
        }
      },
      {
        "id": 1033,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 11297,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 6,
          "unit": "cloves"
        }
      },
      {
        "id": 2027,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1034053,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.125,
          "unit": "teaspoon"
        }
      },
      {
        "id": 2004,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 9150,
        "quantity": {
          "amount": 2,
          "unit": "slices"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "cloves"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Cut off the crust from 6 slices of bread. Chop the centers and put into a food processor. Pulse until you have coarse breadcrumbs. You should have about 3 cups.",
        "number": 1
      },
      {
        "instruction": "Make the stuffing: In a large bowl, stir together the breadcrumbs, lemon zest, Parmesan cheese, minced garlic, chopped parsley, minced oregano, 1/2 cup olive oil, and black pepper. Set aside.",
        "number": 2
      }
    ],
    "name": "Baked Stuffed Artichokes",
    "tags": [
      "side dish",
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 623855,
    "image": "https://spoonacular.com/recipeImages/623855-556x370.jpg",
    "ingredients": [
      {
        "id": 18372,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 10116098,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      },
      {
        "id": 10116098,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 20081,
        "quantity": {
          "amount": 1.25,
          "unit": "cup"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 19336,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 10019903,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "Tbsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat oven to 350FLine a baking sheet with parchment, set aside.In bowl of stand mixer cream butter and peanut butter together until smooth.",
        "number": 1
      },
      {
        "instruction": "Add both sugars and beat for 2 minutes.",
        "number": 2
      },
      {
        "instruction": "Add in egg, vanilla, baking soda and salt.",
        "number": 3
      },
      {
        "instruction": "Mix until combined.Turn mixer to low and add in flour.Portion out dough by in tablespoon amounts.",
        "number": 4
      },
      {
        "instruction": "Roll into a ball and then flatten to approximately  inch thick.",
        "number": 5
      },
      {
        "instruction": "Place on baking sheet about 2 inches apart.",
        "number": 6
      },
      {
        "instruction": "Bake for 8-9 minutes until golden at he edges.",
        "number": 7
      },
      {
        "instruction": "Remove from oven and transfer cookies to a wire rack to cool completely.In microwave safe bowl combine chocolate chips, peanut butter and butter.",
        "number": 8
      },
      {
        "instruction": "Heat on high for 1 minute and then stir until smooth.",
        "number": 9
      },
      {
        "instruction": "Place powdered sugar in bowl.Dip each cookie in chocolate and using a fork remove cookie, tapping off excess chocolate. You don't need a lot of chocolate coating on the cookies.Immediately dip the cookie into the powdered sugar and toss to coat completely.",
        "number": 10
      },
      {
        "instruction": "Place back on cooling rack to until chocolate is set. Repeat for all cookies.",
        "number": 11
      }
    ],
    "name": "Puppy Chow Cookies",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 793584,
    "image": "https://spoonacular.com/recipeImages/793584-556x370.jpg",
    "ingredients": [
      {
        "id": 11143,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 1002046,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1129,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 4641,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1011256,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2026,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 11297,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 11944,
        "quantity": {
          "amount": 3,
          "unit": "tablespoons"
        }
      },
      {
        "id": 10011282,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11353,
        "quantity": {
          "amount": 2,
          "unit": "pounds"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.75,
          "unit": "teaspoons"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Place potatoes in a large saucepan and add water to cover by 1 inch. Bring to boil over medium-high heat.",
        "number": 1
      },
      {
        "instruction": "Add 1-tablespoon salt, reduce heat to medium, and simmer. Stir a few times, until potatoes re-fork tender, about 8 minutes.",
        "number": 2
      },
      {
        "instruction": "Drain potatoes and transfer to a large bowl.In a medium sized bowl whisk together yogurt, mayonnaise, mustard, salt, pepper and onion powder.",
        "number": 3
      },
      {
        "instruction": "Add to potatoes and gently stir to combine.",
        "number": 4
      },
      {
        "instruction": "Add celery, pickles, red onions, parsley and chopped eggs to potato mixture, stir to combine.",
        "number": 5
      },
      {
        "instruction": "Add more salt and pepper to taste.Cover and refrigerate until chilled, about 1 hour before serving. Potato salad can be made up to one day ahead.",
        "number": 6
      }
    ],
    "name": "Easy Creamy Potato Salad with Yogurt",
    "tags": [
      "salad"
    ]
  },
  {
    "id": 607805,
    "image": "https://spoonacular.com/recipeImages/607805-556x370.jpg",
    "ingredients": [
      {
        "id": 10211821,
        "quantity": {
          "amount": 3,
          "unit": "large"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "cloves"
        }
      },
      {
        "id": 10020048,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 93651,
        "quantity": {
          "amount": 1,
          "unit": "cups"
        }
      },
      {
        "id": 7927,
        "quantity": {
          "amount": 0.5,
          "unit": "lb"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 1,
          "unit": "small"
        }
      },
      {
        "id": 2027,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1033,
        "quantity": {
          "amount": 2,
          "unit": "Tbsp"
        }
      },
      {
        "id": 11549,
        "quantity": {
          "amount": 14,
          "unit": "oz"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Cut tops off peppers; remove and discard seeds.",
        "number": 1
      },
      {
        "instruction": "Chop tops; place in medium bowl.",
        "number": 2
      },
      {
        "instruction": "Add sausage, onions, rice, Parmesan, garlic, oregano, 1-1/2 cups pizza sauce and 1-1/4 cups shredded cheese; mix lightly.  Spoon into pepper shells.",
        "number": 3
      },
      {
        "instruction": "Stand peppers in slow cooker; top with remaining sauce and shredded cheese.  Cover with lid.",
        "number": 4
      },
      {
        "instruction": "Cook on LOW 6 to 8 hours (or on HIGH 2-1/2 to 3-1/2 hours).",
        "number": 5
      }
    ],
    "name": "Slow-Cooker Italian-Stuffed Peppers",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 763858,
    "image": "https://spoonacular.com/recipeImages/763858-556x370.jpg",
    "ingredients": [
      {
        "id": 10120129,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 20081,
        "quantity": {
          "amount": 3.5,
          "unit": "cups"
        }
      },
      {
        "id": 1053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 19296,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      },
      {
        "id": 10118375,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 10118375,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 16,
          "unit": "servings"
        }
      },
      {
        "id": 8120,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 8120,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1012047,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Whisk flours together with  teaspoon instant yeast in a large mixing bowl with a tight-fitting lid (like this one), and then stir in the oats. Stir the water and milk together, then pour the liquids into the dry ingredients, stirring to create a loose, shaggy dough. Cover the mixing bowl tightly, and allow the dough to rest at room temperature at least eight and up to twelve hours.Dump the dough into the basin of a stand mixer (like this one), and then beat in the butter, honey, salt, and the remaining 2 tablespoons yeast. Continue beating all the ingredients together until they form a smooth dough, and then turn it out on a well-floured surface. Knead by hand for ten to fifteen minutes, incorporating about 1 cups additional flour, until the dough becomes smooth and elastic.Oil a large mixing bowl, and transfer the dough to the bowl. Cover tightly, and allow the dough to rise until doubled in volume.",
        "number": 1
      },
      {
        "instruction": "Transfer the dough to a well-floured surface, and split into two portions of approximately equal weight. Butter and flour two 4-inch by 8-inch loaf pans.Working one at a time, roll each lump of dough out into a large rectangle, about 8 by 16 inches. Working from the short end, roll the dough into a loaf, pinching the seam at the bottom of the loaf tightly to seal it.",
        "number": 2
      },
      {
        "instruction": "Place the dough, seam-side down, in a prepared loaf pan. Cover lightly with a kitchen towel, and allow it to rise until doubled in size, about two hours.While the dough rises, heat the oven to 400 F.Using a pastry brush, gently brush the top of the dough with cream, and then scatter one tablespoon rolled oats over each loaf.",
        "number": 3
      },
      {
        "instruction": "Transfer the loaves to the oven, and bake 5 minutes at 400 F. Then reduce the temperature to 350 F and continue baking until the crust is a dark brown and the bread reaches an internal temperature of 200 F about 45 minutes.",
        "number": 4
      },
      {
        "instruction": "Remove from the oven and allow the loaves to cool in their pans for five minutes, then turn out onto a wire rack, allowing the bread to cool completely before slicing.",
        "number": 5
      }
    ],
    "name": "Whole Wheat Milk and Honey Sandwich Bread",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 618332,
    "image": "https://spoonacular.com/recipeImages/618332-556x370.jpg",
    "ingredients": [
      {
        "id": 19912,
        "quantity": {
          "amount": 168,
          "unit": "g"
        }
      },
      {
        "id": 18371,
        "quantity": {
          "amount": 2,
          "unit": "g"
        }
      },
      {
        "id": 20027,
        "quantity": {
          "amount": 1,
          "unit": "g"
        }
      },
      {
        "id": 10019071,
        "quantity": {
          "amount": 42,
          "unit": "g"
        }
      },
      {
        "id": 1012010,
        "quantity": {
          "amount": 3,
          "unit": "g"
        }
      },
      {
        "id": 11424,
        "quantity": {
          "amount": 183,
          "unit": "g"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "g"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 28,
          "unit": "g"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 5,
          "unit": "mL"
        }
      },
      {
        "id": 10020080,
        "quantity": {
          "amount": 120,
          "unit": "g"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a medium bowl, whisk together the flour, baking powder, cornstarch, cinnamon, and salt. In a separate bowl, whisk together the butter, pumpkin, and vanilla. Stir in the agave.",
        "number": 1
      },
      {
        "instruction": "Add the flour mixture, stirring just until incorporated. Fold in 2 tablespoons of chocolate chips. Chill the cookie dough for at least 30 minutes. (If chilling longer than 1 hour, cover the top of the bowl with foil.)Preheat the oven to 325F, and line a baking sheet with parchment paper or a silicone baking mat. Drop the cookie dough into 12 rounded scoops onto the prepared baking sheet. Flatten slightly, and press the remaining chocolate chips into the tops of the cookie dough.",
        "number": 2
      },
      {
        "instruction": "Bake at 325F for 15-17 minutes. Cool on the baking sheet for at least 10 minutes before turning out onto a wire rack.",
        "number": 3
      }
    ],
    "name": "The Ultimate Healthy Soft & Chewy Pumpkin Chocolate Chip Cookies",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 231951,
    "image": "https://spoonacular.com/recipeImages/231951-556x370.jpg",
    "ingredients": [
      {
        "id": 20027,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 10019334,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 1053,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 93814,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Whisk together brown sugar, cornstarch, and 1/4 teaspoon salt in a heavy medium saucepan, then whisk in milk and cream. Bring to a boil over medium heat, whisking frequently, then boil, whisking, 1 minute.",
        "number": 1
      },
      {
        "instruction": "Remove from heat and whisk in butter and vanilla.",
        "number": 2
      },
      {
        "instruction": "Pour into a bowl, then cover surface with buttered wax paper and chill until cold, at least 1 1/2 hours.",
        "number": 3
      }
    ],
    "name": "Butterscotch Pudding",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 880108,
    "image": "https://spoonacular.com/recipeImages/880108-556x370.jpg",
    "ingredients": [
      {
        "id": 11206,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 11297,
        "quantity": {
          "amount": 1,
          "unit": "bunch"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 4,
          "unit": "cloves"
        }
      },
      {
        "id": 9150,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 20035,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 11529,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Rinse the quinoa under cool running water.",
        "number": 1
      },
      {
        "instruction": "Place the rinsed quinoa in a pot with 1.75 cups of water. Put a lid on top, bring it to a boil, then reduce the heat to low and let simmer for 15 minutes. After 15 minutes, turn off the heat. Allow the quinoa to cool before making the salad or else the heat will wilt the parsley and vegetables. To cool it faster, spread it out on a baking sheet and place in the refrigerator for 30 minutes.While the quinoa is cooling, prepare the rest of the salad.",
        "number": 2
      },
      {
        "instruction": "Cut the tomato and cucumber into a small dice. Rinse the parsley well to remove sand and grit, then chop well.",
        "number": 3
      },
      {
        "instruction": "Add the cucumber, tomato, and parsley to a bowl.To make the dressing, squeeze the juice from the lemon into a bowl (about  cup). Mince the garlic and add to the lemon juice along with the olive oil and salt.Once the quinoa is cooled, combine it with the chopped vegetables and the lemon dressing. Stir well and then serve!",
        "number": 4
      }
    ],
    "name": "quinoa tabbouleh",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 602311,
    "image": "https://spoonacular.com/recipeImages/602311-556x370.jpg",
    "ingredients": [
      {
        "id": 14242,
        "quantity": {
          "amount": 0.6666666666666666,
          "unit": "cup"
        }
      },
      {
        "id": 14130,
        "quantity": {
          "amount": 0.6666666666666666,
          "unit": "cup"
        }
      },
      {
        "id": 19177,
        "quantity": {
          "amount": 2,
          "unit": "envelopes"
        }
      },
      {
        "id": 1053,
        "quantity": {
          "amount": 1,
          "unit": "tbsp"
        }
      },
      {
        "id": 93645,
        "quantity": {
          "amount": 30,
          "unit": "servings"
        }
      },
      {
        "id": 14051,
        "quantity": {
          "amount": 0.6666666666666666,
          "unit": "cup"
        }
      },
      {
        "id": 1054,
        "quantity": {
          "amount": 30,
          "unit": "servings"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Lightly spray the mold with non-stick spray and wipe excess off with a paper towel. Don\u2019t overdo it or the residue will affect the taste of the jello.",
        "number": 1
      },
      {
        "instruction": "Pour the soda, juice, and cream into a medium saucepan and sprinkle the gelatin on top. Allow the gelatin to soak for 2-3 minutes, then begin to heat on low, stirring constantly until gelatin is fully dissolved (about 5 minutes).",
        "number": 2
      },
      {
        "instruction": "Remove saucepan from heat and add vodka and food coloring.",
        "number": 3
      },
      {
        "instruction": "Pour into molds and chill for several hours, or until set.",
        "number": 4
      },
      {
        "instruction": "Remove from mold, top with whipped cream, and enjoy responsibly!*The original recipe suggests 2-3 envelopes, depending on how long your jello shots will be left out (more gelatin for more time). I opted for 3 because we were traveling an hour to get to the party, but I found them to be a little too firm , so I suggest you stick with 2 and plan accordingly for the best results!",
        "number": 5
      }
    ],
    "name": "Birthday Cake Jello Shots",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 670408,
    "image": "https://spoonacular.com/recipeImages/670408-556x370.jpg",
    "ingredients": [
      {
        "id": 93828,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 11266,
        "quantity": {
          "amount": 16,
          "unit": "ounces"
        }
      },
      {
        "id": 1017,
        "quantity": {
          "amount": 4,
          "unit": "ounces"
        }
      },
      {
        "id": 1019,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1022027,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1082047,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1082047,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1033,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1032009,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 10011457,
        "quantity": {
          "amount": 8,
          "unit": "ounces"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat oven to 350 degrees F. First, remove the mushroom stems by pushing each one toward you, then away from you. It will pop right out. (Save them to add to another recipe.) Swish and rub the mushroom tops in a large bowl of cold water to get them clean. Then, lay them open side down on a kitchen towel to dry.While the mushrooms dry, mix together the cream cheese, spinach, artichoke hearts, parmesan, garlic powder, 1/2 tsp. kosher salt, and red pepper flakes.In a small bowl, stir together olive oil, 1/4 tsp. salt, and Italian seasoning. Use a basting brush or your fingers to lightly rub the outside of the mushrooms with the oil mixture.",
        "number": 1
      },
      {
        "instruction": "Place the mushrooms open side up on a baking sheet. Use a small disher or spoon to place a heaping scoop of dip mixture into each mushroom, pressing it down to make sure it fills the opening. Press a small amount of feta cheese on top of each stuffed mushroom.",
        "number": 2
      },
      {
        "instruction": "Bake in preheated oven for 20-25 minutes until filling is hot and bubbly and feta is starting to brown. Mushrooms will drain some brown liquid during cooking, so drain on paper towels before serving if you don't want that liquid on your serving plate. These taste just as good even after they have cooled down!",
        "number": 3
      }
    ],
    "name": "Artichoke Spinach Dip Stuffed Mushrooms",
    "tags": [
      "condiment",
      "dip",
      "spread"
    ]
  },
  {
    "id": 325208,
    "image": "https://spoonacular.com/recipeImages/325208-556x370.jpeg",
    "ingredients": [
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 2044,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "cloves"
        }
      },
      {
        "id": 1053,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 7036,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 1082047,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 10111549,
        "quantity": {
          "amount": 26,
          "unit": "ounce"
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1038,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      },
      {
        "id": 11304,
        "quantity": {
          "amount": 4,
          "unit": "ounces"
        }
      },
      {
        "id": 11677,
        "quantity": {
          "amount": 2,
          "unit": "small"
        }
      },
      {
        "id": 11020420,
        "quantity": {
          "amount": 12,
          "unit": ""
        }
      },
      {
        "id": 1001026,
        "quantity": {
          "amount": 8,
          "unit": "ounces"
        }
      },
      {
        "id": 93630,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 14106,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Watch how to make this recipe.",
        "number": 1
      },
      {
        "instruction": "Place an oven rack in the center of the oven. Preheat the oven to 350 degrees F. Spray a 9-by-13-by-2-inch glass baking dish with vegetable oil cooking spray. Set aside.",
        "number": 2
      },
      {
        "instruction": "For the fonduta sauce: In a medium heavy-bottomed saucepan, bring the milk and cream to a simmer over medium heat. Reduce the heat to low.",
        "number": 3
      },
      {
        "instruction": "Add the Pecorino Romano and whisk until the cheese is melted and the sauce is smooth.",
        "number": 4
      },
      {
        "instruction": "Remove the pan from the heat and stir in the basil. Set aside.",
        "number": 5
      },
      {
        "instruction": "In a large skillet, heat 2 tablespoons of olive oil over medium-high heat.",
        "number": 6
      },
      {
        "instruction": "Add the sausage, shallots, garlic, 1/4 teaspoon salt, and 1/4 teaspoon pepper. Cook until the sausage is cooked through and the vegetables have softened, 8 to 10 minutes. Using a wooden spoon, break the sausage into 1/2-inch pieces. Increase the heat to high.",
        "number": 7
      },
      {
        "instruction": "Add the wine and scrape up the brown bits that cling to the bottom of the pan with a wooden spoon. Cook until the wine has evaporated, about 2 minutes.",
        "number": 8
      },
      {
        "instruction": "Remove the pan from the heat and set aside to cool slightly.",
        "number": 9
      },
      {
        "instruction": "Add the peas, ricotta, and 1 cup of the fonduta sauce. Season with remaining 1/2 teaspoon kosher salt and 1/4 teaspoon pepper.",
        "number": 10
      },
      {
        "instruction": "Bring a large pot of salted water to a boil over high heat.",
        "number": 11
      },
      {
        "instruction": "Add the pasta and cook until just tender, 7 to 8 minutes.",
        "number": 12
      },
      {
        "instruction": "Drain and set aside.",
        "number": 13
      },
      {
        "instruction": "Spread half of the marinara sauce over the bottom of the prepared baking dish. Using a small spoon, fill the manicotti shells with the sausage filling and arrange in a single layer in the baking dish.",
        "number": 14
      },
      {
        "instruction": "Pour the remaining marinara sauce on top of the filled shells. Spoon the remaining fonduta sauce on top and sprinkle with the mozzarella.",
        "number": 15
      },
      {
        "instruction": "Drizzle with olive oil and bake until bubbly and golden brown, 30 to 35 minutes.",
        "number": 16
      }
    ],
    "name": "Baked Manicotti with Sausage and Peas",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 542778,
    "image": "https://spoonacular.com/recipeImages/542778-556x370.jpg",
    "ingredients": [
      {
        "id": 1123,
        "quantity": {
          "amount": 2,
          "unit": "medium size"
        }
      },
      {
        "id": 11463,
        "quantity": {
          "amount": 10,
          "unit": "ounces"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 3,
          "unit": ""
        }
      },
      {
        "id": 93651,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 93828,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1011256,
        "quantity": {
          "amount": 6,
          "unit": "ounces"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1025,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 20035,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 5,
          "unit": "servings"
        }
      },
      {
        "id": 11677,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat the oven to 375\u00b0F then prepare a large casserole dish (I used a 1 quart dish) by greasing with Earth Balance, butter or non-stick cooking spray.Warm the olive oil over medium heat in a saut\u00e9 pan and cook the shallot and garlic for a few minutes, until fragrant.Using a strainer and a paper towel, press the excess water out from the defrosted spinach then add it to the pan.",
        "number": 1
      },
      {
        "instruction": "Add the chopped artichoke hearts (I discarded any tough parts) and a pinch of salt & pepper to the pan and cook for five minutes.Meanwhile, combine the eggs, yogurt and cheese in a large bowl and whisk together until well-combined.",
        "number": 2
      },
      {
        "instruction": "Remove the spinach artichoke mixture from the heat and allow to cool for a few minutes before adding to the bowl with the eggs and cheese.Lastly, add the cooked quinoa and stir until everything is mixed together well.",
        "number": 3
      },
      {
        "instruction": "Place the mixture into the casserole dish, smoothing the top with the back of a spoon. Sprinkle a few tablespoons of cheese on top and cook for 30-35 minutes, until top is light golden brown.",
        "number": 4
      },
      {
        "instruction": "Serve warm and enjoy!",
        "number": 5
      }
    ],
    "name": "Spinach Artichoke Quinoa Casserole",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 698701,
    "image": "https://spoonacular.com/recipeImages/698701-556x370.jpg",
    "ingredients": [
      {
        "id": 10014623,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 10014623,
        "quantity": {
          "amount": 6,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1124,
        "quantity": {
          "amount": 4,
          "unit": "large"
        }
      },
      {
        "id": 9302,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 6,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "To prepare berry layer: Preheat oven to 375F. Coat six 8-ounce souffl cups with cooking spray.",
        "number": 1
      },
      {
        "instruction": "Add 1 teaspoon sugar to each cup and swirl to coat the inside. Distribute raspberries in the bottom of the cups and sprinkle each with 1 teaspoon crme de cassis (or eau-de-vie, juice or nectar).To prepare souffls: Stir raspberries in a saucepan over low heat until they are juicy (for fresh) or thawed (for frozen).",
        "number": 2
      },
      {
        "instruction": "Transfer to a fine sieve set over a bowl. With a spoon, press the berries through the sieve, being careful to extract all the pulp. Discard the seeds.Return the puree to the saucepan. Bring to a simmer and stir over medium heat until very thick and reduced to 1/4 cup, about 10 minutes. (Reduce the heat as the mixture thickens.) Stir in 1 tablespoon crme de cassis (or eau-de-vie, juice or nectar) and set aside to cool slightly.Beat egg whites and salt in a mixing bowl with an electric mixer on high speed until soft peaks form. Continuing to beat, gradually add sugar and beat until stiff peaks form. With a rubber spatula, fold about a fourth of the beaten whites into the reserved raspberry puree to lighten its texture, then pour the mixture over the remaining whites. Gently fold the puree and whites together until evenly blended. Spoon the souffl mixture into the cups, spreading to the edges of the cups.Set the cups on a baking sheet and bake for 10 minutes, or until lightly browned on the top. Dust with confectioners sugar and serve immediately.",
        "number": 3
      }
    ],
    "name": "Double Raspberry Souffl\u00e9s",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 515021,
    "image": "https://spoonacular.com/recipeImages/515021-556x370.jpg",
    "ingredients": [
      {
        "id": 9040,
        "quantity": {
          "amount": 4,
          "unit": ""
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 1.25,
          "unit": "sticks"
        }
      },
      {
        "id": 9354,
        "quantity": {
          "amount": 1,
          "unit": "large can"
        }
      },
      {
        "id": 9070,
        "quantity": {
          "amount": 15,
          "unit": "servings"
        }
      },
      {
        "id": 14181,
        "quantity": {
          "amount": 15,
          "unit": "servings"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 10018617,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1053,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 12135,
        "quantity": {
          "amount": 15,
          "unit": "servings"
        }
      },
      {
        "id": 19336,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Grease a 9\u00d713 pan.",
        "number": 1
      },
      {
        "instruction": "Mix together graham cracker crust and 1\u00bc sticks of butter. Press out in pan.In mixer, mix together powdered sugar, 2 sticks of butter, vanilla, and eggs.",
        "number": 2
      },
      {
        "instruction": "Pour on top of graham cracker crust.",
        "number": 3
      },
      {
        "instruction": "Spread out crushed pineapple on top of sugar mixture, then add sliced bananas. I added cherries next for fun.In mixer, add heavy cream and mix on medium high until soft peak. When almost completed, add \u00bd cup sugar.",
        "number": 4
      },
      {
        "instruction": "Spread whipped cream over top of bananas. Refrigerate for at least 2 hours, (I waited 1 hours and it was fine.)Enjoy!",
        "number": 5
      }
    ],
    "name": "A Cake To Warm Any Heart \u2013 Banana Split Cake",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 999044,
    "image": "https://spoonacular.com/recipeImages/999044-556x370.jpg",
    "ingredients": [
      {
        "id": 9037,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 16057,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 11297,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 2045,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1256,
        "quantity": {
          "amount": 3,
          "unit": "tablespoons"
        }
      },
      {
        "id": 9152,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 11291,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Working in a couple of batches, roughly chop the chickpeas and place in a bowl.",
        "number": 1
      },
      {
        "instruction": "Add the minced herbs and scallions to the chickpeas and give a quick toss.",
        "number": 2
      },
      {
        "instruction": "In a separate bowl, whisk together the mayo, lemon juice, and olive oil.",
        "number": 3
      },
      {
        "instruction": "Cut the avocado in half, remove the pit, and cut each half into  cubes (see note).",
        "number": 4
      },
      {
        "instruction": "Place in the bowl and pour the mayo mixture over the chickpeas and avocado. Toss until well combine. Taste and add salt/pepper to your preferred taste.",
        "number": 5
      },
      {
        "instruction": "Serve on a sandwich or with crackers.",
        "number": 6
      }
    ],
    "name": "Avocado Chickpea Salad",
    "tags": [
      "salad"
    ]
  },
  {
    "id": 798070,
    "image": "https://spoonacular.com/recipeImages/798070-556x370.jpg",
    "ingredients": [
      {
        "id": 18371,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 20081,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 9236,
        "quantity": {
          "amount": 20,
          "unit": "ounces"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 19095,
        "quantity": {
          "amount": 8,
          "unit": "servings"
        }
      },
      {
        "id": 1054,
        "quantity": {
          "amount": 8,
          "unit": "servings"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Melt butter and brush some of the butter around the slow cooker.Using a stand mixer, combine flour, 1-cup sugar, baking powder, and salt. Then, add milk and remaining melted cooled butter, mixing just until dry ingredients are moistened.",
        "number": 1
      },
      {
        "instruction": "Pour the batter in the slow cooker and place the frozen peaches on top.Cook on high for 3 hours with lid on top. Once the cobbler is done, divide and serve cobbler warm with ice cream and whipped cream on top.",
        "number": 2
      }
    ],
    "name": "Slow Cooker Peach Cobbler",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 574317,
    "image": "https://spoonacular.com/recipeImages/574317-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 2.5,
          "unit": "cups"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "T"
        }
      },
      {
        "id": 10862,
        "quantity": {
          "amount": 3,
          "unit": "strips"
        }
      },
      {
        "id": 5114,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1019,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 2,
          "unit": "t"
        }
      },
      {
        "id": 11333,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 1026,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 1033,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 10011282,
        "quantity": {
          "amount": 0.5,
          "unit": "medium"
        }
      },
      {
        "id": 10211529,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "t"
        }
      },
      {
        "id": 11424,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 1,
          "unit": "t"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 1011009,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, add 1 cup warm water, 1 pack rapid or quick yeast, 1 t sugar 1/2 t salt and 1 T olive oil.",
        "number": 1
      },
      {
        "instruction": "Mix well.",
        "number": 2
      },
      {
        "instruction": "Add 2 1/2 cups flour and mix.",
        "number": 3
      },
      {
        "instruction": "Add  a little more flour if too sticky but you are making a light dough not a heavy brick.",
        "number": 4
      },
      {
        "instruction": "Cover and let rise until double in size. About 30-40 minutes.",
        "number": 5
      },
      {
        "instruction": "While dough is rising, prep any toppings.",
        "number": 6
      },
      {
        "instruction": "Preheat oven 375 convection.",
        "number": 7
      },
      {
        "instruction": "Spread the dough on a well oiled large pizza pan or cookie sheet. Melt 2 T butter in a microwave for 15-20 seconds.",
        "number": 8
      },
      {
        "instruction": "Mix 2 t garlic powder in the butter and spread thinly over the dough.",
        "number": 9
      },
      {
        "instruction": "Top with cheeses and other toppings of choice.",
        "number": 10
      },
      {
        "instruction": "Bake in oven for 20 to 25 minutes.",
        "number": 11
      }
    ],
    "name": "4 Cheese White Pizza",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 673337,
    "image": "https://spoonacular.com/recipeImages/673337-556x370.jpg",
    "ingredients": [
      {
        "id": 98998,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "tablespoon"
        }
      },
      {
        "id": 8030,
        "quantity": {
          "amount": 6.5,
          "unit": "oz"
        }
      },
      {
        "id": 19116,
        "quantity": {
          "amount": 9,
          "unit": "oz"
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 19336,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Pour mixture into prepared pan, using your hands press to flatten. Set aside for 1-2 hours to set.In a separate bowl, combine powdered sugar with milk and stir to combine. Using a spoon, drizzle glaze on top of cereal bars and dust with colored sugar or sprinkles.",
        "number": 1
      }
    ],
    "name": "Cereal Marshmallow Bars",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 764184,
    "image": "https://spoonacular.com/recipeImages/764184-556x370.jpg",
    "ingredients": [
      {
        "id": 1123,
        "quantity": {
          "amount": 6,
          "unit": "large"
        }
      },
      {
        "id": 6150,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 16158,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2028,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 2046,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "To hard-boil the eggs, place the raw eggs at the bottom of a large pot.",
        "number": 1
      },
      {
        "instruction": "Pour water in the pot until the water is 1-2 inches over the top of the eggs.",
        "number": 2
      },
      {
        "instruction": "Place the pot on the stove top uncovered and turn the burner to high heat. Bring the water in the pot to a boil. When the water comes to a full boil, cover the pot with a lid and turn off the heat to the burner. Leave the pot on the burner, covered, for 12 minutes.While the eggs sit in the covered pot, fill a mixing bowl  way with ice water. When the time is up on the eggs, use a slotted spoon to remove them from the pot and transfer them to the bowl of ice water to stop them from cooking. Leave them in the bowl of ice water for a few minutes until fully cold.Peel the eggs under cold running water (Ive found its much easier). Slice the eggs in half lengthwise and removethe yolks into a mixing bowl. Use a fork to mash the yolks as much as you can. I usually add a little splash of water to the mashed egg yolks and mash again.",
        "number": 3
      },
      {
        "instruction": "Add the black pepper, hummus, hot sauce and mustard and stir together until well combined and mostly smooth. Spoon or pipe this filling back into the hollows of the egg whites. Sprinkle paprika over the tops of the eggs and serve.",
        "number": 4
      }
    ],
    "name": "Hummus Deviled Eggs",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 206402,
    "image": "https://spoonacular.com/recipeImages/206402-556x370.jpg",
    "ingredients": [
      {
        "id": 1017,
        "quantity": {
          "amount": 16,
          "unit": "ounces"
        }
      },
      {
        "id": 1214,
        "quantity": {
          "amount": 12,
          "unit": "ounces"
        }
      },
      {
        "id": 1053,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19206,
        "quantity": {
          "amount": 6.8,
          "unit": "ounces"
        }
      },
      {
        "id": 9214,
        "quantity": {
          "amount": 12,
          "unit": "ounces"
        }
      },
      {
        "id": 9216,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 9216,
        "quantity": {
          "amount": 8,
          "unit": "servings"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Whisk together evaporated milk, pudding mix, and zest in a bowl for 2 minutes or until mixture is thickened.",
        "number": 1
      },
      {
        "instruction": "Beat cream cheese and vanilla at medium speed with an electric mixer until fluffy.",
        "number": 2
      },
      {
        "instruction": "Add orange juice concentrate, beating until smooth; add evaporated milk mixture, and beat until blended.",
        "number": 3
      },
      {
        "instruction": "Pour into crust. Cover and chill 8 hours or until firm.",
        "number": 4
      },
      {
        "instruction": "Combine cream and confectioner's sugar in a bowl and whip with a whisk until it holds soft peaks. Dollop or pipe each slice with whipped cream, and garnish with candied zest or candy if desired.",
        "number": 5
      }
    ],
    "name": "Creamsicle Pie",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 446577,
    "image": "https://spoonacular.com/recipeImages/446577-556x370.jpg",
    "ingredients": [
      {
        "id": 10123,
        "quantity": {
          "amount": 6,
          "unit": "slices"
        }
      },
      {
        "id": 11052,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 1,
          "unit": "pinch"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.125,
          "unit": "teaspoon"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Place bacon in a large, deep skillet. Cook over medium high heat until the fat begins to render. Stir in onions and garlic; let cook for 1 minute. Stir in beans and water.",
        "number": 1
      },
      {
        "instruction": "Let the beans cook until the water has evaporated and the beans are tender. If the beans are not tender once the water has evaporated, add a small amount more water and let them cook until tender. Season with salt and pepper (to taste) and serve.",
        "number": 2
      }
    ],
    "name": "Smothered Green Beans",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 576906,
    "image": "https://spoonacular.com/recipeImages/576906-556x370.jpg",
    "ingredients": [
      {
        "id": 11959,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1004,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1012047,
        "quantity": {
          "amount": 2,
          "unit": "servings"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.125,
          "unit": "teaspoon"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 9252,
        "quantity": {
          "amount": 0.5,
          "unit": ""
        }
      },
      {
        "id": 9252,
        "quantity": {
          "amount": 1,
          "unit": "tablespoons"
        }
      },
      {
        "id": 43408,
        "quantity": {
          "amount": 3,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11677,
        "quantity": {
          "amount": 1,
          "unit": "medium"
        }
      },
      {
        "id": 2049,
        "quantity": {
          "amount": 2,
          "unit": "sprigs"
        }
      },
      {
        "id": 12155,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a medium bowl add the pear juice and vinegar. While whisking, slowly stream in the olive oil. Scrape the leaves off of two sprigs of thyme and add in the black pepper.",
        "number": 1
      },
      {
        "instruction": "Whisk to combine",
        "number": 2
      },
      {
        "instruction": "Assemble romaine leaves and top with sliced pear, shallot, toasted walnuts, blue cheese and season with sea salt to taste.",
        "number": 3
      },
      {
        "instruction": "Drizzle with desired amount of the pear vinaigrette and enjoy!",
        "number": 4
      }
    ],
    "name": "Pear & Walnut Salad with a Pear Vinaigrette",
    "tags": [
      "salad"
    ]
  },
  {
    "id": 504218,
    "image": "https://spoonacular.com/recipeImages/504218-556x370.jpg",
    "ingredients": [
      {
        "id": 10011693,
        "quantity": {
          "amount": 2,
          "unit": "cans"
        }
      },
      {
        "id": 11124,
        "quantity": {
          "amount": 4,
          "unit": ""
        }
      },
      {
        "id": 2012,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 1002014,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 11913,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "cloves"
        }
      },
      {
        "id": 11333,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 11477,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Chop all the veggies.",
        "number": 1
      },
      {
        "instruction": "Saute the onion and garlic in a large skillet.",
        "number": 2
      },
      {
        "instruction": "Add in the carrots and saute for a few minutes, covering to cook for about 5 minutes.",
        "number": 3
      },
      {
        "instruction": "Add in the other veggies and seasonings and let it cook until the veggies are tender.",
        "number": 4
      },
      {
        "instruction": "Serve hot over cornbread with shredded cheese and sour cream.",
        "number": 5
      }
    ],
    "name": "Mexican Vegetables on Cornbread",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 445196,
    "image": "https://spoonacular.com/recipeImages/445196-556x370.jpg",
    "ingredients": [
      {
        "id": 6150,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 10220445,
        "quantity": {
          "amount": 2,
          "unit": "servings"
        }
      },
      {
        "id": 2003,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 0.125,
          "unit": "teaspoon"
        }
      },
      {
        "id": 11333,
        "quantity": {
          "amount": 1,
          "unit": "medium"
        }
      },
      {
        "id": 19296,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 1,
          "unit": "medium"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.125,
          "unit": "teaspoon"
        }
      },
      {
        "id": 15152,
        "quantity": {
          "amount": 0.75,
          "unit": "pound"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a nonstick skillet coated with cooking spray, saute onion and green pepper for 3-4 minutes or until crisp-tender.",
        "number": 1
      },
      {
        "instruction": "Combine the barbecue sauce, honey, basil, garlic powder and pepper; pour over vegetables. Bring to a boil over medium-high heat, stirring constantly.",
        "number": 2
      },
      {
        "instruction": "Add shrimp; cook and stir for 3-5 minutes or until shrimp turn pink.",
        "number": 3
      },
      {
        "instruction": "Serve with rice.",
        "number": 4
      }
    ],
    "name": "Barbecue Shrimp Stir-Fry",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 759534,
    "image": "https://spoonacular.com/recipeImages/759534-556x370.jpg",
    "ingredients": [
      {
        "id": 19334,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 16018,
        "quantity": {
          "amount": 15,
          "unit": "oz"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 1,
          "unit": "Tbs"
        }
      },
      {
        "id": 99223,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 11165,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 10218364,
        "quantity": {
          "amount": 4,
          "unit": "8-inch"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 1002014,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }
      },
      {
        "id": 9160,
        "quantity": {
          "amount": 2,
          "unit": "Tbs"
        }
      },
      {
        "id": 10011109,
        "quantity": {
          "amount": 8,
          "unit": "oz"
        }
      },
      {
        "id": 10611282,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat oven to 450\u00b0F.",
        "number": 1
      },
      {
        "instruction": "Heat oil in saucepan over medium-high heat.",
        "number": 2
      },
      {
        "instruction": "Add onion, and cook 5 minutes, or until translucent.",
        "number": 3
      },
      {
        "instruction": "Add garlic and cumin, and cook 1 minute more.",
        "number": 4
      },
      {
        "instruction": "Place onion mixture in blender with beans, chipotle chile, brown sugar, and 3 Tbs. water. Blend until smooth. Season with salt and pepper.",
        "number": 5
      },
      {
        "instruction": "Place 2 tortillas each on 2 baking sheets.",
        "number": 6
      },
      {
        "instruction": "Spread bean mixture on tortillas, and bake 5 to 7 minutes, or until edges become golden.",
        "number": 7
      },
      {
        "instruction": "Toss slaw in bowl with cilantro and lime juice. Season with salt and pepper. Top each clayuda with slaw, and cut into triangles.",
        "number": 8
      }
    ],
    "name": "Clayudas",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 588893,
    "image": "https://spoonacular.com/recipeImages/588893-556x370.jpg",
    "ingredients": [
      {
        "id": 11457,
        "quantity": {
          "amount": 2,
          "unit": "handfuls"
        }
      },
      {
        "id": 11268,
        "quantity": {
          "amount": 0.5,
          "unit": "oz"
        }
      },
      {
        "id": 10020005,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "large cloves"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1033,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 5,
          "unit": "cups"
        }
      },
      {
        "id": 10511282,
        "quantity": {
          "amount": 0.5,
          "unit": "medium"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a medium sized pot combine the farro with the 5 cups of water and 2 teaspoons salt. Bring to a boil, then lower to a simmer and cook for about 25 minutes for semi-pearled farro and 50 minutes for whole farro. The farro is done when the grains are tender and all the water has been absorbed. Set aside.While the farro is cooking, combine the shiitake mushrooms with 1 cup of boiling water.",
        "number": 1
      },
      {
        "instruction": "Let sit for 15 minutes or however long the package instructions say is needed to reconstitute the mushrooms. When done, remove the mushrooms from the water and chop, reserving the liquid.About 2o minutes before the farro is done warm the olive oil in a large skillet. Cook the onion, stirring frequently, for about 5 minutes or until translucent and beginning to get some color.",
        "number": 2
      },
      {
        "instruction": "Add the garlic and crushed red pepper flakes (if using), cook 1 minute longer, until fragrant.",
        "number": 3
      },
      {
        "instruction": "Add the chopped mushrooms, mushroom broth and a few big handfuls of baby spinach. Cook, stirring frequently, until the spinach has wilted and most of the liquid has evaporated. Season with salt and pepper to taste.Stir in the farro, mixing with a large spoon to combine well.",
        "number": 4
      },
      {
        "instruction": "Serve topped with shredded Parmesan cheese.",
        "number": 5
      }
    ],
    "name": "Farro with Shiitake Mushrooms and Baby Spinach",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 615581,
    "image": "https://spoonacular.com/recipeImages/615581-556x370.jpg",
    "ingredients": [
      {
        "id": 2069,
        "quantity": {
          "amount": 0.5,
          "unit": "tablespoon"
        }
      },
      {
        "id": 11250,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 20027,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11156,
        "quantity": {
          "amount": 3,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11165,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 19296,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 4025,
        "quantity": {
          "amount": 5,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11119,
        "quantity": {
          "amount": 1,
          "unit": "head"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 15152,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 11112,
        "quantity": {
          "amount": 0.25,
          "unit": "head"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 98962,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a bowl, whisk together the mayo, chili sauce and sriracha, then set it aside until ready to use.Toss the shrimp with the cornstarch until evenly coated.",
        "number": 1
      },
      {
        "instruction": "Heat the canola oil in a large skillet over high heat.",
        "number": 2
      },
      {
        "instruction": "Add the shrimp and cook until it just turns pink and opaque, about 3 minutes.",
        "number": 3
      },
      {
        "instruction": "Transfer the shrimp to a large bowl and toss with the mayo mixture.In a separate bowl, add the cabbage and lettuce. Toss with the olive oil, vinegar and honey until well coated. Toss the cilantro in. To serve the shrimp, mix with the slaw and garnish the entire thing with chives. Enjoy!",
        "number": 4
      }
    ],
    "name": "Bang Bang Shrimp with Napa Cabbage Slaw",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 764810,
    "image": "https://spoonacular.com/recipeImages/764810-556x370.jpg",
    "ingredients": [
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 2003,
        "quantity": {
          "amount": 1.5,
          "unit": "teaspoons"
        }
      },
      {
        "id": 2042,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 4,
          "unit": ""
        }
      },
      {
        "id": 1002020,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 10023572,
        "quantity": {
          "amount": 2.75,
          "unit": "pounds"
        }
      },
      {
        "id": 2027,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1033,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1.5,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat the oven to 350F.Spray baking sheets with cooking spray or spread a thin layer of olive oil over them.",
        "number": 1
      },
      {
        "instruction": "Mix all of the ingredients together very well -- you'll need to use your hands.",
        "number": 2
      },
      {
        "instruction": "Roll into balls the size of a golf ball, molding them firmly together without packing them.",
        "number": 3
      },
      {
        "instruction": "Place the balls on baking sheets.",
        "number": 4
      },
      {
        "instruction": "Bake for 30 to 40 minutes, or until the center registers 160F on a meat thermometer.",
        "number": 5
      },
      {
        "instruction": "Remove from oven and use as needed.",
        "number": 6
      }
    ],
    "name": "Homemade Italian Meatballs",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 799732,
    "image": "https://spoonacular.com/recipeImages/799732-556x370.jpg",
    "ingredients": [
      {
        "id": 10011250,
        "quantity": {
          "amount": 4,
          "unit": ""
        }
      },
      {
        "id": 11143,
        "quantity": {
          "amount": 2,
          "unit": "rib"
        }
      },
      {
        "id": 5064,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 2015,
        "quantity": {
          "amount": 0.75,
          "unit": "teaspoon"
        }
      },
      {
        "id": 9160,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1009159,
        "quantity": {
          "amount": 0.75,
          "unit": "teaspoon"
        }
      },
      {
        "id": 4641,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      },
      {
        "id": 98991,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 10011282,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 9316,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a large bowl, mix the first six ingredients. Stir in  chicken, celery and onion. Refrigerate, covered, at least 1 hour.",
        "number": 1
      },
      {
        "instruction": "To serve, stir strawberries into chicken mixture.",
        "number": 2
      },
      {
        "instruction": "Serve over lettuce.",
        "number": 3
      }
    ],
    "name": "Curried Strawberry Chicken Salad",
    "tags": [
      "salad"
    ]
  },
  {
    "id": 621213,
    "image": "https://spoonacular.com/recipeImages/621213-556x370.jpg",
    "ingredients": [
      {
        "id": 10123,
        "quantity": {
          "amount": 14,
          "unit": "slices"
        }
      },
      {
        "id": 11090,
        "quantity": {
          "amount": 4,
          "unit": "oz"
        }
      },
      {
        "id": 1017,
        "quantity": {
          "amount": 3,
          "unit": "oz"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 2,
          "unit": "tsp"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 1,
          "unit": "tbsp"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 0.5,
          "unit": "small"
        }
      },
      {
        "id": 2026,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 10011821,
        "quantity": {
          "amount": 0.5,
          "unit": ""
        }
      },
      {
        "id": 10218,
        "quantity": {
          "amount": 16,
          "unit": "oz"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 10011457,
        "quantity": {
          "amount": 2,
          "unit": "oz"
        }
      },
      {
        "id": 11529,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Saute onion in 1 tbsp. Olive Oil for a few minutes until soft.",
        "number": 1
      },
      {
        "instruction": "Add garlic and cook for 45-60 seconds, then add spinach. Put all the spices in there except for 1/4 tsp. of the liquid smoke, thyme, and rosemary.",
        "number": 2
      },
      {
        "instruction": "Let wilt and then add cream cheese. Set aside.Preheat oven to 350F.Lay pork tenderloin on cutting board and cover with saran wrap, then pound with meat hammer until flat - cut the uneven sides so it goes square. Season with salt and pepper, then 1/4 tsp. liquid smoke.Make a bacon weave the same size as the pork tenderloin square.",
        "number": 3
      },
      {
        "instruction": "Spread spinach and cream cheese all over the pork tenderloin, then lay tenderloin on top of bacon. Slice the pieces of bacon that poke out.",
        "number": 4
      },
      {
        "instruction": "Roll it up. Season with salt and pepper and the remaining 1/4 tsp. of thyme and rosemary.",
        "number": 5
      },
      {
        "instruction": "Add toothpicks where the bacon ends are so that it doesn't fall apart.",
        "number": 6
      },
      {
        "instruction": "Bake for 75 minutes or until thermometer reads 140F.",
        "number": 7
      },
      {
        "instruction": "Saute broccoli, peppers, and tomatoes in the remaining fat in the bottom of the pan of the pork tenderloin while it rests.",
        "number": 8
      }
    ],
    "name": "Bacon Wrapped Stuffed Pork Tenderloin",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 611858,
    "image": "https://spoonacular.com/recipeImages/611858-556x370.jpg",
    "ingredients": [
      {
        "id": 18371,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 20081,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19157,
        "quantity": {
          "amount": 16,
          "unit": ""
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 10019903,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat oven to 350F. Line a 8x8-inch baking pan with foil and spray with non-stick cooking spray.In a medium bowl, whisk together the flour, baking powder, baking soda, and salt.In the bowl of a stand mixer fitted with the paddle attachment or in a large bowl with an electric mixer, combine the melted butter and brown sugar.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla, mixing until well combined. Gradually add in dry ingredients and mix until just combined. Stir in chocolate chips.",
        "number": 2
      },
      {
        "instruction": "Spread half the dough into the prepared pan.",
        "number": 3
      },
      {
        "instruction": "Place the Rolos evenly onto the cookie dough. Using a small cookie scoop, evenly distribute the rest of the cookie dough on top of the Rolos. There is need to spread evenly over the Rolos, this will happen naturally during the baking process.",
        "number": 4
      },
      {
        "instruction": "Bake in the preheated oven until a toothpick inserted in the center comes out clean, about 20 to 25 minutes.",
        "number": 5
      },
      {
        "instruction": "Remove pan to wire rack and cool completely.If desired, drizzle with melted chocolate or caramel before serving.",
        "number": 6
      }
    ],
    "name": "Rolo Cookie Bars",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 991136,
    "image": "https://spoonacular.com/recipeImages/991136-556x370.jpg",
    "ingredients": [
      {
        "id": 1001,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 98871,
        "quantity": {
          "amount": 12,
          "unit": ""
        }
      },
      {
        "id": 19296,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 6168,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1002030,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1055062,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Place chicken in a 3-qt. slow cooker. Toss with 2 tablespoons hot sauce and pepper; cook, covered, on low until tender, 3-4 hours.",
        "number": 1
      },
      {
        "instruction": "Remove chicken; discard cooking juices. In a small saucepan, combine butter, honey and remaining hot sauce; cook and stir over medium heat until blended. Shred chicken with two forks; stir into sauce and heat through.",
        "number": 2
      },
      {
        "instruction": "Serve on rolls with optional ingredients as desired. Freeze option: Freeze cooled chicken mixture in freezer containers. To use, partially thaw in refrigerator overnight. Microwave, covered, on high in a microwave-safe dish until heated through, stirring occasionally and adding a little water or broth if necessary.",
        "number": 3
      }
    ],
    "name": "Buffalo Chicken Sliders",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 583738,
    "image": "https://spoonacular.com/recipeImages/583738-556x370.jpg",
    "ingredients": [
      {
        "id": 18372,
        "quantity": {
          "amount": 0.75,
          "unit": "teaspoon"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 20081,
        "quantity": {
          "amount": 1.75,
          "unit": "cups"
        }
      },
      {
        "id": 16098,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 10019151,
        "quantity": {
          "amount": 8,
          "unit": "oz"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat oven to 350\u00b0F. Line two baking sheets with parchment paper.",
        "number": 1
      },
      {
        "instruction": "Combine the flour, baking soda and salt in a medium bowl. Set aside.In the bowl of a stand mixer, beat the butter, peanut butter and sugars, until light and fluffy.",
        "number": 2
      },
      {
        "instruction": "Add in the egg and vanilla.Gradually add in the flour mixture on low speed. Stir until dough forms. Then stir in Reese's Pieces by hand.Using a cookie dough scoop or your hands, form balls of dough with 1 heaping tablespoon of dough. Gently flatten cookie dough (to form a disk shape) and place on prepared baking sheets.",
        "number": 3
      },
      {
        "instruction": "Bake for 9 minutes and remove from oven.",
        "number": 4
      },
      {
        "instruction": "Let cool for 5 minutes before transferring cookies to a wire rack to cool completely.Note: Cookies will not spread much at all and will look like they are not done baking. But I promise they are! Once they finish cooling, the cookie and chocolate will become firm and you will have a magically soft and crumbly cookie!",
        "number": 5
      }
    ],
    "name": "Reese's Pieces Peanut Butter Cookies",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 601216,
    "image": "https://spoonacular.com/recipeImages/601216-556x370.jpg",
    "ingredients": [
      {
        "id": 1041009,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 10018413,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 2044,
        "quantity": {
          "amount": 3,
          "unit": "leaves"
        }
      },
      {
        "id": 10111529,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 11477,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Saute the zucchini in the olive oil on high heat. Season generously with salt and pepper. Stir and leave alone for a little while, so you get a little bit of texture from the browning on the zucchini.While you\u2019re sauteing, toast the flatbread in the oven at 400 degrees.When the zucchini is soft and just slightly browned, remove from the heat. Take the flatbread out of the oven and spread the zucchini on the flatbread.Top with the fresh tomatoes, cheese, and fresh basil.",
        "number": 1
      },
      {
        "instruction": "Cut, serve, and enjoy!",
        "number": 2
      }
    ],
    "name": "Farmer\u2019s Market Flatbread Pizza",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 226562,
    "image": "https://spoonacular.com/recipeImages/226562-556x370.jpg",
    "ingredients": [
      {
        "id": 9019,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 18079,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 16069,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 11124,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 2009,
        "quantity": {
          "amount": 0.25,
          "unit": "teaspoon"
        }
      },
      {
        "id": 9079,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      },
      {
        "id": 11165,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 3,
          "unit": ""
        }
      },
      {
        "id": 1002014,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 2042,
        "quantity": {
          "amount": 0.5,
          "unit": "teaspoon"
        }
      },
      {
        "id": 11935,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 4053,
        "quantity": {
          "amount": 2,
          "unit": "tablespoon"
        }
      },
      {
        "id": 11282,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 12151,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 11821,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 8,
          "unit": "servings"
        }
      },
      {
        "id": 6615,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Wash the lentils and place into a pot along with the vegetable broth. Bring to a boil, then reduce heat to medium-low and simmer, for about 40 minutes.",
        "number": 1
      },
      {
        "instruction": "Add more broth or water if necessary",
        "number": 2
      },
      {
        "instruction": "Meanwhile, warm the oil in a pan.",
        "number": 3
      },
      {
        "instruction": "Add the onions and cook for about 4 minutes or until soft.",
        "number": 4
      },
      {
        "instruction": "Add the carrots, bell pepper and garlic. Cook for about 3 minutes more. Set aside.When the lentils are ready mash them slightly with a potato masher or a fork.Preheat the oven to 350\u00ba F.In a large bowl, mix the onion mixture, mashed lentils, apple sauce, cranberries, pistachios, bread crumbs, cilantro, chili powder, cumin, thyme, salt and pepper.Line a loaf pan with parchment paper.",
        "number": 5
      },
      {
        "instruction": "Transfer the mixture to the loaf pan and press mixture into the pan with a spoon.",
        "number": 6
      },
      {
        "instruction": "Mix the glaze ingredients in a small bowl and spread evenly over the top.",
        "number": 7
      },
      {
        "instruction": "Bake for about 45 minutes.",
        "number": 8
      },
      {
        "instruction": "Transfer the pan to a wire rack and let the loaf cool a bit. Run a table knife around the edge of the pan and turn the loaf out onto a serving plate.",
        "number": 9
      }
    ],
    "name": "Vegan Lentil Loaf",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 605132,
    "image": "https://spoonacular.com/recipeImages/605132-556x370.jpg",
    "ingredients": [
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 20027,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": ""
        }
      },
      {
        "id": 1125,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 1077,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a heavy saucepan, stir together the milk and 1/4 cup of sugar. Bring to a boil over medium heat.",
        "number": 1
      },
      {
        "instruction": "In a medium bowl, whisk together the egg yolks and egg. Stir together the remaining sugar and cornstarch; then stir them into the egg until smooth. When the milk comes to a boil, drizzle it into the bowl in a thin stream while mixing so that you do not cook the eggs. Return the mixture to the saucepan, and slowly bring to a boil, stirring constantly so the eggs don' t curdle or scorch on the bottom.",
        "number": 2
      },
      {
        "instruction": "When the mixture comes to a boil and thickens, remove from the heat. Stir in the butter and vanilla, mixing until the butter is completely blended in.",
        "number": 3
      },
      {
        "instruction": "Pour into a heat-proof container and place a piece of plastic wrap directly on the surface to prevent a skin from forming. Refrigerate until chilled before using.",
        "number": 4
      }
    ],
    "name": "Pastry Cream",
    "tags": [
      "side dish"
    ]
  }
];

/* harmony default export */ __webpack_exports__["default"] = (recipeData);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100vh;\n    width: 100%;\n}\n\nbody {\n    font-family: 'Montserrat';\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.nav-items {\n    display: flex;\n    justify-content: space-around;\n    position: sticky;\n}\n\n.user-profile {\n    font-size: 3rem;\n}\n\n.menu {\n    display: flex;\n}\n\n.menu li {\n    margin: 1em;\n    font-size: 1.2rem;\n}\n\n.container {\n    height: calc(100vh - 3em);\n    display: grid;\n    grid-template-columns: minmax(max-content, 300px) 1fr;\n}\n\n.recipes {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(250px, 1fr));\n}\n\n.recipe {\n    width: 100%;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Recipes.js":
/*!************************!*\
  !*** ./src/Recipes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
      this.id = id;
      this.image = image;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.name = name;
      this.tags = tags;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recipes */ "./src/Recipes.js");
/* harmony import */ var _data_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/recipes */ "./data/recipes.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);




class Cooking {

    constructor() {
        this.recipes = null;
        this.$recipes = document.querySelector('.recipes');
        this.showRecipes();
    }

    getRecipes() {
        this.recipes = _data_recipes__WEBPACK_IMPORTED_MODULE_1__["default"].map(({id, image, ingredients, instructions, name, tags}) => {
            return new _Recipes__WEBPACK_IMPORTED_MODULE_0__["default"](id, image, ingredients, instructions, name, tags);
        });
    }

    showRecipes() {
        this.getRecipes();
        const recipes = this.recipes.map(({id, image}) => {

         return (
            `  <article id=${id} class="recipe">
                    <img src=${image}/>
                    <p>
                    <span class="favorite">♡</span>
                    <span class="save"></span>
                    </p>
               </article>
             `
         );

        }).join('');

        this.$recipes.innerHTML = recipes;
    }

}

new Cooking();

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9yZWNpcGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NTJmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esb0lBQW9JO0FBQ3BJO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1RUFBdUUsb0lBQW9JO0FBQzNNO0FBQ0EsT0FBTztBQUNQO0FBQ0EsOFFBQThRO0FBQzlRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw2Q0FBNkMsNkRBQTZEO0FBQzFHO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLE9BQU87QUFDUDtBQUNBLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBLG9JQUFvSTtBQUNwSTtBQUNBLE9BQU87QUFDUDtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUpBQW1KO0FBQ25KO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJHQUEyRztBQUMzRztBQUNBLE9BQU87QUFDUDtBQUNBLHVDQUF1Qyw0RkFBNEYsNEVBQTRFO0FBQy9NO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGlJQUFpSTtBQUNqSTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVSxFOzs7Ozs7Ozs7OztBQ3h3S3pCLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxNQUFNLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsVUFBVSxvQkFBb0Isa0JBQWtCLEdBQUcsVUFBVSxnQ0FBZ0MsR0FBRyxRQUFRLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsZ0JBQWdCLG9CQUFvQixvQ0FBb0MsdUJBQXVCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGdDQUFnQyxvQkFBb0IsNERBQTRELEdBQUcsY0FBYyxvQkFBb0IsMkRBQTJELEdBQUcsYUFBYSxrQkFBa0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUNGcHVCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDWHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDVTtBQUNuQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixxREFBVSxPQUFPLGlEQUFpRDtBQUN6Rix1QkFBdUIsZ0RBQU07QUFDN0IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVTs7QUFFckQ7QUFDQSw2QkFBNkIsR0FBRztBQUNoQywrQkFBK0IsTUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUEsYzs7Ozs7Ozs7Ozs7O0FDdkNBLGNBQWMsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRTdFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiY29uc3QgcmVjaXBlRGF0YSA9IFtcbiAge1xuICAgIFwiaWRcIjogNTk1NzM2LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTk1NzM2LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTIwNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJUYnNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDI0LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2UgbWl4aW5nIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBkcnkgaW5ncmVkaWVudHMgKGZsb3VyLCBwdWRkaW5nIG1peCwgc29kYSBhbmQgc2FsdCkuIFNldCBhc2lkZS5JbiBhIGxhcmdlIG1peGluZyBib3dsIG9mIGEgc3RhbmQgbWl4ZXIsIGNyZWFtIGJ1dHRlciBmb3IgMzAgc2Vjb25kcy4gR3JhZHVhbGx5IGFkZCBncmFudWxhdGVkIHN1Z2FyIGFuZCBicm93biBzdWdhciBhbmQgY3JlYW0gdW50aWwgbGlnaHQgYW5kIGZsdWZmeS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBlZ2cgYW5kIHZhbmlsbGEgYW5kIG1peCB1bnRpbCBjb21iaW5lZC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBkcnkgaW5ncmVkaWVudHMgYW5kIG1peCBvbiBsb3cganVzdCB1bnRpbCBpbmNvcnBvcmF0ZWQuIFN0aXIgaW4gY2hvY29sYXRlIGNoaXBzLlNjb29wIHRoZSBkb3VnaCBpbnRvIDEsNSB0YWJsZXNwb29uIHNpemUgYmFsbHMgYW5kIHBsYWNlIG9uIGEgcGxhdGUgb3Igc2hlZXQuIENvdmVyIHdpdGggc2FyYW4gd3JhcCBhbmQgY2hpbGwgYXQgbGVhc3QgMiBob3VycyBvciBvdmVybmlnaHQuV2hlbiByZWFkeSB0byBiYWtlLCBwcmVoZWF0IG92ZW4gdG8gMzUwIGRlZ3JlZXMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgY29va2llIGRvdWdoIGJhbGxzIGludG8gdW5ncmVhc2VkIG11ZmZpbiBwYW4uIFNwcmlua2xlIHdpdGggc2VhIHNhbHQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciA5IHRvIDEwIG1pbnV0ZXMsIG9yIHVudGlsIHlvdSBzZWUgdGhlIGVkZ2VzIHN0YXJ0IHRvIGJyb3duLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBwYW4gZnJvbSB0aGUgb3ZlbiBhbmQgbGV0IHNpdCBmb3IgMTAgbWludXRlcyBiZWZvcmUgcmVtb3Zpbmcgb250byBhIGNvb2xpbmcgcmFjay5Ub3Agd2l0aCBpY2UgY3JlYW0gYW5kIGEgZHJpenpsZSBvZiBjaG9jb2xhdGUgc2F1Y2UuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkxvYWRlZCBDaG9jb2xhdGUgQ2hpcCBQdWRkaW5nIENvb2tpZSBDdXBzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICBcInN0YXJ0ZXJcIixcbiAgICAgIFwic25hY2tcIixcbiAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjc4MzUzLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjc4MzUzLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwOTAxNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkwMDMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImNsb3ZlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDEyMDQ2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5OTExLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTYxMTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMTAwNjIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDI0LFxuICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNjEyNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZWFzb24gdGhlIHBvcmsgY2hvcHMgd2l0aCBzYWx0IGFuZCBwZXBwZXIgYW5kIGdyaWxsIG9yIHBhbiBmcnkgb3ZlciBtZWRpdW0gaGlnaCBoZWF0IHVudGlsIGNvb2tlZCwgYWJvdXQgMy01IG1pbnV0ZXMgcGVyIHNpZGUuIChJZiBncmlsbGluZywgYmFzdGUgdGhlIGNob3BzIGluIHRoZSBtYXBsZSBkaWpvbiBhcHBsZSBjaWRlciBzYXVjZSBhcyB5b3UgZ3JpbGwuKU1lYW53aGlsZSwgbWl4IHRoZSByZW1haW5pbmcgaW5ncmVkaWVudHMgZXhjZXB0IHRoZSBhcHBsZSBzbGljZXMsIGJyaW5nIHRvIGEgc2ltbWVyIGFuZCBjb29rIHVudGlsIHRoZSBzYXVjZSB0aGlja2VucywgYWJvdXQgMi01IG1pbnV0ZXMuR3JpbGwgb3Igc2F1dGUgdGhlIGFwcGxlIHNsaWNlcyB1bnRpbCBqdXN0IHRlbmRlciBidXQgc3RpbGwgY3Jpc3AuVG9zcyB0aGUgcG9yayBjaG9wcyBhbmQgYXBwbGUgc2xpY2VzIGluIHRoZSBtYXBsZSBkaWpvbiBhcHBsZSBjaWRlciBzYXVjZSBhbmQgZW5qb3khXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIk1hcGxlIERpam9uIEFwcGxlIENpZGVyIEdyaWxsZWQgUG9yayBDaG9wc1wiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcImx1bmNoXCIsXG4gICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgXCJkaW5uZXJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDEyMzA5LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNDEyMzA5LTU1NngzNzAuanBlZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDMxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNTEwMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA2MTY4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkxNzYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDQyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHRoZSBob3Qgc2F1Y2UsIGJ1dHRlciwgbWFuZ28gaGFiYW5lcm8gc2F1Y2UsIGJyb3duIHN1Z2FyLCBjaGlsaSBwb3dkZXIsIGdhcmxpYyBwb3dkZXIsIG9uaW9uIHBvd2RlciwgYmxhY2sgcGVwcGVyLCBjYXllbm5lIHBlcHBlciBhbmQgc2Vhc29uaW5nIHNhbHQgaW4gYSBib3dsLiBTdGlyIHZpZ29yb3VzbHkgdW50aWwgY29tcGxldGVseSBjb21iaW5lZC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiRGlydHkgU3RldmUncyBPcmlnaW5hbCBXaW5nIFNhdWNlXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2F1Y2VcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzQxNjAzLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzQxNjAzLTU1NngzNzAuanBlZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MDQwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwMTEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMjMwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE2MDk4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2F0Y2ggaG93IHRvIG1ha2UgdGhpcyByZWNpcGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIGJ1dHRlcm1pbGssIGVnZ3MsIGJha2luZyBwb3dkZXIsIHN1Z2FyLCBzYWx0IGFuZCBidXR0ZXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhbm90aGVyIGxhcmdlIGJvd2wgbWl4IHRvZ2V0aGVyIGFsbC1wdXJwb3NlIGZsb3VyIGFuZCBidWNrd2hlYXQgZmxvdXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTbG93bHkgYWRkIGZsb3VyIGludG8gdGhlIHdldCBpbmdyZWRpZW50cyBtaXhpbmcgd2l0aCBhIHdoaXNrLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHVudGlsIHRoZXJlIGFyZSBubyBsdW1wcyBhbmQgdGhlIGJhdHRlciBpcyBzbW9vdGggYW5kIHZlbHZldHkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIGNhc3QgaXJvbiBza2lsbGV0IG9yIGZsYXQgZ3JpbGwgcGFuIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdCwgbWVsdCBhIHRhYmxlc3Bvb24gb2YgYnV0dGVyLiBMYWRsZSBwYW5jYWtlIGJhdHRlciBvbnRvIHNraWxsZXQgdG8gZGVzaXJlZCBzaXplLiBVc2luZyB0aGUgbGFkbGUsIGZvcm0gcGFuY2FrZSBpbnRvIGNpcmN1bGFyIHNoYXBlLiBDb29rIG9uIGVhY2ggc2lkZSBmb3IgMiB0byAzIG1pbnV0ZXMgb3IgdW50aWwgZ29sZGVuIGJyb3duLiBTZXQgcGFuY2FrZXMgYXNpZGUgYW5kIGtlZXAgd2FybS4gUmVwZWF0IHdpdGggcmVtYWluaW5nIGluZ3JlZGllbnRzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiT25jZSBjb21wbGV0ZWQsIHNwcmVhZCBwZWFudXQgYnV0dGVyIG9uIGEgcGFuY2FrZSwgbGF5ZXIgaXQgd2l0aCBzbGljZWQgYmFuYW5hcyBhbmQgZHJpenpsZSBpdCB3aXRoIGhvbmV5LiBUb3AgdGhlIHBhbmNha2Ugd2l0aCBhbm90aGVyIHBhbmNha2UgdG8gZm9ybSBhIHNhbmR3aWNoLiBSZXBlYXQgd2l0aCByZW1haW5pbmcgcGFuY2FrZXMgYW5kIHNlcnZlIHdpdGggZXh0cmEgaG9uZXkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkVsdmlzIFBhbmNha2VzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2lkZSBkaXNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDU2MjMzNCxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU2MjMzNC01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDA5MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4xMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5Mzc4NCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTI0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzYyNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyMjIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDExODM3NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzA0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE0MTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzY5NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkzNzYwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzYyNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJHcmVhc2Ugb3Igc3ByYXkgb2lsIGEgOVxcdTAwZDc1IGluY2ggbG9hZiBwYW4uUHJlaGVhdCBvdmVuIHRvIDE3MCBcXHUyMDEzIDIwMFxcdTAwYjBGIChsb3dlc3QgcG9zc2libGUpLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHdhcm0gd2F0ZXIgd2l0aCBicm93biByaWNlIHN5cnVwLCBtb2xhc3NlcywgYW5kIHllYXN0IGluIGEgY3VwIGxhcmdlciB0aGFuIDggb3ouLCBhcyBpdCBtYXkgYnViYmxlIG92ZXI7IHNldCBhc2lkZSB1bnRpbCBmb2FteSBvbiB0aGUgdG9wLCBubyBtb3JlIHRoYW4gNSBtaW51dGVzLkluIHRoZSBib3dsIG9mIHlvdXIgbWl4ZXIsIGJlYXQgdGhlIGVnZ3MgYXQgaGlnaCBzcGVlZCBpbiBhIGxhcmdlIG1peGluZyBib3dsIHVudGlsIGxhcmdlIGJ1YmJsZXMgZm9ybSwgYWJvdXQgMjAgc2Vjb25kcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIHRvZ2V0aGVyIHRoZSBkcnkgaW5ncmVkaWVudHM7IHNldCBhc2lkZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgb2lsLCB2aW5lZ2FyIGFuZCB5ZWFzdCBtaXh0dXJlIHRvIHRoZSBlZ2cgd2hpdGVzIGFuZCBibGVuZCBvbiBsb3cgZm9yIGEgZmV3IHNlY29uZHMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZHJ5IGluZ3JlZGllbnRzIGFsbCBhdCBvbmNlIGFuZCBtaXggb24gbG93IHNwZWVkIHVudGlsIGFsbCBkcnkgaW5ncmVkaWVudHMgYXJlIG1vaXN0ZW5lZC4gVGhlbiBiZWF0IG9uIGhpZ2ggZm9yIDEgbWludXRlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGRvdWdoIGJhdHRlciB0byBwcmVwYXJlZCBwYW4gYW5kIGRpc3RyaWJ1dGUgYW5kIHNtb290aCB0aGUgdG9wIHVzaW5nIGEgcnViYmVyIHNwYXR1bGEuIFlvdSdsbCB3YW50IHRvIG1lZXQgYWxsIHNpZGVzIG9mIHRoZSBwYW4uIElmIHlvdSBtaXNzIHRoZSBjb3JuZXJzIHRoYXQgd2lsbCBzdGlsbCBiZSBva2F5LiBJdCB3aWxsIGZpbGwgaW4gdXBvbiByaXNpbmcuIFRvIGV2ZW4gb3V0IHRvcCwgZHJvcCBhIGZldyBkcm9wcyBvZiBmaWx0ZXJlZCB3YXRlciBvbiB0b3AsIGFuZCBzcHJlYWQgZXZlbmx5IHdpdGggYSBydWJiZXIgc3BhdHVsYSwgb3IgZGlwIHNwYXR1bGEgaW4gd2F0ZXIgc2V2ZXJhbCB0aW1lcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBicmVhZCBwYW4gaW4gdGhlIG92ZW4uIFR1cm4gb3ZlbiBvZmYuIEFsbG93IHRoZSBkb3VnaCB0byByaXNlIHVudGlsIHRoZSBjZW50ZXIgaXMgYWJvdXQgMS8yXFx1MjAxZCBvdmVyIHRoZSB0b3Agb2YgdGhlIHBhbiwgYWJvdXQgMjIgbWludXRlcy4gSXQgd2lsbCByaXNlIG1vcmUgd2hpbGUgdGhlIG92ZW4gaXMgaGVhdGluZyBhbmQgZHVyaW5nIGJha2luZy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBwYW4gZnJvbSBvdmVuIGFuZCBwcmVoZWF0IG92ZW4gdG8gMzc1XFx1MDBiMEYuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgcGFuIG9uIHRoZSBjZW50ZXIgb2YgdGhlIHJhY2sgaW4gdGhlIGNlbnRlciBvZiB0aGUgb3ZlbiBhbmQgYmFrZSBmb3IgYWJvdXQgNDUgbWludXRlcyBvciBtb3JlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBsb2FmIGZyb20gdGhlIG92ZW4gYW5kIGltbWVkaWF0ZWx5IHJlbW92ZSBpdCBmcm9tIHRoZSBwYW4gKGNhcmVmdWwgaXQgd2lsbCBiZSBob3QpLCBhbmQgc2V0IHRoZSBsb2FmIG9uIGEgY29vbGluZyByYWNrIHRvIGNvb2wuIElmIHlvdSBkbyBub3QgcmVtb3ZlIGl0IHJpZ2h0IGF3YXkgdGhlIHN0ZWFtIHdpbGwgbWFrZSB0aGUgY3J1c3Qgc29nZ3kuU2xpY2Ugb2ZmIHRoZSB0d28gZW5kcyB0byBhbGxvdyB0aGUgc3RlYW0gdG8gZXNjYXBlLCBvciBpdCB3aWxsIGJlZ2luIHRvIHNpbmsgaW4gb24gdGhlIHNpZGVzIGFuZCBib3R0b20uT25jZSBjb29sZWQsIGl0IHdpbGwgc2hyaW5rIGEgbGl0dGxlIGJpdC4gU2xpY2UgaXQgd2l0aCBhbiBlbGVjdHJpYyBzbGljZXIsIGVsZWN0cmljIGtuaWZlIG9yIHNlcnJhdGVkIGtuaWZlLiBZb3UnbGwgZ2V0IGFib3V0IDEzLTE2LCBkZXBlbmRpbmcgdXBvbiBob3cgdGhpY2sgeW91IHNsaWNlIGl0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxMFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiTW9jayBVZGlcXHUyMDE5cyBHbHV0ZW4gRnJlZSBXaG9sZSBHcmFpbiBCcmVhZFwiLFxuICAgIFwidGFnc1wiOiBbXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MDc5MjEsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81MDc5MjEtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MDk5LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG8gbWFrZSB0aGUgQ3VwY2FrZXM6IFByZWhlYXQgb3ZlbiB0byAzNTAgZGVncmVlcy4gTGluZSAxMiBjdXBjYWtlIHRpbnMgd2l0aCBwYXBlciBob2xkZXJzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG9nZXRoZXIgZHJ5IEZydWl0IENvY2t0YWlsIEN1cGNha2VzIGluZ3JlZGllbnRzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIHdldCBGcnVpdCBDb2NrdGFpbCBDdXBjYWtlcyBpbmdyZWRpZW50cyBhbmQgc3RpciB3aXRoIGEgcnViYmVyIHNwYXR1bGEgdW50aWwgdGhvcm91Z2hseSBjb21iaW5lZC4gRmlsbCBjdXBjYWtlIHRpbnMgZXZlbmx5LCBhbmQgYmFrZSBmb3IgMjAgbWludXRlcyBvciB1bnRpbCB0aGluIGtuaWZlIGluc2VydGVkIGluIGNlbnRlciBjb21lcyBvdXQgY2xlYW4uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkFtYnJvc2lhIEN1cGNha2VzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2lkZSBkaXNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDcyMTE0NixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzcyMTE0Ni01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyMDYxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTIxMDQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyMTE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNDA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMTkwNzEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA4MjEyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIkhhbmRmdWxcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5OTExLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA4MTIxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyMTQyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCB0aGUgb3ZlbiB0byAzMjUgZGVncmVlcyBGLkNvYXJzZWx5IGNob3AgdGhlIGFsbW9uZHMgYW5kIHBlY2Fucy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgdGhlIG9hdHMsIGFsbW9uZHMsIHBlY2FucywgYW5kIHNhbHQgaW4gYSBib3dsLiBUb3NzIHRvIGNvbWJpbmUuSW4gYSBtZWRpdW0tc2l6ZWQgYm93bCwgY29tYmluZSB0aGUgY29jb251dCBvaWwgKG1lYXN1cmUgZXhhY3RseSB3aGVuIGl0J3MgbWVsdGVkIGFuZCBub3QgaW4gdGhlIGhhcmRlbmVkIHN0YXRlKSwgYW5kIDEvMiBjdXAgY2hvY29sYXRlIGNoaXBzLk1pY3Jvd2F2ZSBpbiBidXJzdHMgb2YgMTUgc2Vjb25kcyBzdGlycmluZyBpbiBiZXR3ZWVuIGVhY2ggYnVyc3QgZm9yIDE1IHNlY29uZHMgdW50aWwgY29tcGxldGVseSBtZWx0ZWQuU3RpciBpbiB0aGUgYnJvd24gc3VnYXIgKG1lYXN1cmVkIGxpZ2h0bHkgcGFja2VkKSwgaG9uZXkgb3IgbWFwbGUgc3lydXAsIGFuZCB2YW5pbGxhIGV4dHJhY3QuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHRoZSBjaG9jb2xhdGUgd2V0IG1peHR1cmUgaW50byB0aGUgb2F0IGFuZCBudXQgbWl4dHVyZSBhbmQgc3RpciB1bnRpbCB3ZWxsIGNvbWJpbmVkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHRoZSBncmFub2xhIGV2ZW5seSBvbnRvIGEgcGFyY2htZW50IGxpbmVkIGJha2luZyBzaGVldC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDIwLTMwIG1pbnV0ZXMgKGRlcGVuZGluZyBvbiB0aGUgaGVhdCBvZiB5b3VyIG92ZW4pIG1ha2luZyBzdXJlIHRvIGZsaXAgYW5kIHN0aXIgdGhlIGdyYW5vbGEgYXJvdW5kIGV2ZXJ5IDYtOCBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGFuZCBhbGxvdyB0aGUgZ3Jhbm9sYSB0byBoYXJkZW4gYW5kIHNldCB1cC4gKEl0IG1heSBiZSBzb2Z0IGFuZCBub3QgdmVyeSBcXFwiZ3Jhbm9sYS1saWtlXFxcIiwgYnV0IGl0IGhhcmRlbnMgYXMgaXQgZHJpZXMgb3V0IHNvIGJlIGNhcmVmdWwgdG8gbm90IG92ZXItY29vayBpdCkuIE1pbmUgZ2VuZXJhbGx5IHRha2VzIGFib3V0IDIxIG1pbnV0ZXMgdG8gYmUgZnVsbHkgYmFrZWQuQWxsb3cgdGhlIGdyYW5vbGEgdG8gc2l0IGF0IHJvb20gdGVtcGVyYXR1cmUgZm9yIGEgZmV3IGhvdXJzIHRvIGhhcmRlbiBhbmQgc2V0IHVwLk9uY2UgdGhlIGdyYW5vbGEgaXMgaGFyZGVuZWQsIHN0aXIgaW4gdGhlIHJlbWFpbmluZyAxLzIgY3VwIGNob2NvbGF0ZSBjaGlwcyBhbmQgdGhlIHRvYXN0ZWQgZmxha2VkIGNvY29udXQuVG8gbWFrZSBhIHlvZ3VydCBib3dsOiBmaWxsIGEgYm93bCB3aXRoIHRoZSBjb2NvbnV0IGNyZWFtIHlvZ3VydCwgYWRkIGEgc3dpcmwgb2YgbnV0IGJ1dHRlciwgYWRkIHNvbWUgZnJ1aXQgc3VjaCBhcyBhIGJhbmFuYSwgYWRkIHRoZSBncmFub2xhLCBhbmQgZmluaXNoIHdpdGggY2hpYSBzZWVkcy4gRW5qb3kgaW1tZWRpYXRlbHkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkNyZWFteSBDb2NvbnV0IFlvZ3VydCBCb3dsIHdpdGggQ2hvY29sYXRlIEdyYW5vbGEgKFZpZGVvKVwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1NDEyODgsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NDEyODgtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTYwLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkzNzQwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0MCxcbiAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTI1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTIwMjMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQwLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA4MCxcbiAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInN0aWNrXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRoZSBidXR0ZXIgaW50byBzbWFsbCBjdWJlcyBhbmQga2VlcCB0aGVtIHJlZnJpZ2VyYXRlZCB1bnRpbCByZWFkeSB0byB1c2UgKEkgY3V0IG9uIHBhcmNobWVudCBwYXBlciBhbmQgd3JhcCB1cCB0aGUgYnV0dGVyIGZvciBlYXN5IHRyYW5zZmVyLikuSW4gdGhlIGZvb2QgcHJvY2Vzc29yLCBjb21iaW5lIHRoZSBmbG91ciwgYWxtb25kIG1lYWwsIHN1Z2FyLCBhbmQgc2FsdC4gSWYgeW91IGRvblxcdTIwMTl0IGhhdmUgYSBmb29kIHByb2Nlc3NvciwgeW91IGNhbiBzaW1wbHkgdXNlIGEgYm93bCB0byBtaXggYWxsIHRoZSBpbmdyZWRpZW50cy5JZiB5b3Ugd2FudCB5b3VyIHNlc2FtZSBzZWVkcyB0byBiZSBmaW5lIHRleHR1cmUsIGFkZCB0aGVtIG5vdy4gSWYgeW91IHByZWZlciB0byBrZWVwIHRoZSBvcmlnaW5hbCBzaGFwZSBvZiBzZXNhbWUgc2VlZHMsIGFkZCB0aGVtIHdpdGggZWdnIHlvbGsgbGF0ZXIgb24uVGFrZSBvdXQgdGhlIGJ1dHRlciBmcm9tIHRoZSByZWZyaWdlcmF0b3IgYW5kIG1peCB0b2dldGhlci4gSWYgeW91IHVzZSBhIHJlZ3VsYXIgYm93bCB0byBtaXgsIHVzZSBhIGRvdWdoL3Bhc3RyeSBibGVuZGVyIHRvIGNvbWJpbmUgdGhlIGJ1dHRlciBpbnRvIHRoZSBkcnkgaW5ncmVkaWVudHMuTGFzdGx5IGFkZCBlZ2cgeW9say5JZiB0aGUgZm9vZCBwcm9jZXNzb3IgaXMgc21hbGwgKGxpa2UgbWluZSkgYW5kIGl0IGRvZXNuXFx1MjAxOXQgbG9vayBsaWtlIGl0XFx1MjAxOXMgbWl4ZWQgY29tcGxldGVseSwgdGFrZSBpdCBvdXQgYW5kIG1peCB3ZWxsIHdpdGggYSBzaWxpY29uZSBzcGF0dWxhLkZvcm0gdGhlIGRvdWdoIGludG8gYSBiYWxsIGFuZCBjdXQgaW4gaGFsZi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJvbGwgaXQgdG8gYSBsb2cgYXBwcm94aW1hdGVseSAyXFx1MjAxZCBhY3Jvc3MuIEZvciBtZSBpdFxcdTIwMTlzIGVhc2llciB0byB3b3JrIHdoZW4gdGhlIGRvdWdoIGlzIHdyYXBwZWQgaW4gcGxhc3RpYyB3cmFwLiBXaGlsZSByb2xsaW5nLCB1bndyYXAgc29tZSBwYXJ0cyBvZiBwbGFzdGljIHdyYXAgdGhlbiByb2xsIGFnYWluLiBGb3JtIGEgbmljZSBzaGFwZS4gSSB3YXNuJ3QgcGF5aW5nIGF0dGVudGlvbiBzbyBteSBsb2cgaXMgZmxhdCBvbiBvbmUgc2lkZSAoc2VlIHN0ZXAgMTEpIVdyYXAgdGhlIGxvZ3MgdGlnaHRseSBpbiBwbGFzdGljIHdyYXAgYW5kIHJlZnJpZ2VyYXRlIHVudGlsIGZpcm0sIGFib3V0IDEgaG91ci5QcmVoZWF0IHRoZSBvdmVuIHRvIDM1MFxcdTAwYjAgRiAoMTc1XFx1MDBiMCBDKS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgZG91Z2ggZnJvbSBwbGFzdGljIHdyYXAgYW5kIGN1dCBpbnRvIGRpc2NzIGFib3V0IFxcdTAwYmMgaW5jaCB0aGljayAoaWYgeW91IHByZWZlciB0aGlja2VyIGNvb2tpZXMsIGN1dCBpbnRvIGRpc2NzIGFib3V0IFxcdTAwYmQgaW5jaCBhbmQgeW91IGdldCAyMCBjb29raWVzIHRvdGFsKS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZW0gb24gdHdvIGJha2luZyBzaGVldHMgbGluZWQgd2l0aCBwYXJjaG1lbnQgcGFwZXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciBhYm91dCAxNSBtaW51dGVzLCBvciB1bnRpbCBsaWdodGx5IGJyb3duZWQgYXJvdW5kIHRoZSBlZGdlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIHRoZSBvdmVuIGFuZCBhbGxvdyB0byBjb29sIG9uIHRoZSBiYWtpbmcgc2hlZXQgZm9yIGFib3V0IDEwIG1pbnV0ZXMuIFRoZW4gdHJhbnNmZXIgdG8gYSB3aXJlIHJhY2sgdG8gY29vbCBjb21wbGV0ZWx5LiBTdG9yZSBjb29raWVzIGluIGFuIGFpcnRpZ2h0IGNvbnRhaW5lci4gQ29va2llcyB3aWxsIGxhc3QgZm9yIGEgZGF5IG9yIHR3by5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiU2VzYW1lIENvb2tpZXNcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgIFwic3RhcnRlclwiLFxuICAgICAgXCJzbmFja1wiLFxuICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA3Nzk1ODMsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83Nzk1ODMtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDE1MDYyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDY0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAyMSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTE2MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTI2NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNjEyNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlcGFyZSB0aGUgY2hpY2tlbjogSW4gYSBsYXJnZSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgYnJvd24gc3VnYXIsIGdpbmdlciwgb2lsLCBzb3kgc2F1Y2UsIFNyaXJhY2hhIGFuZCBwZWFudXQgYnV0dGVyLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjaGlja2VuIGFuZCB0b3NzIHRvIGNvYXQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgbWFyaW5hdGUgYXQgcm9vbSB0ZW1wZXJhdHVyZSBmb3IgMTUgbWludXRlcyBvciBjb3ZlciBhbmQgcmVmcmlnZXJhdGUgZm9yIHVwIHRvIDYgaG91cnMuIFByZWhlYXQgdGhlIG92ZW4gYnJvaWxlciB3aXRoIGEgcmFjayBzZXQgNC1pbmNoZXMgZnJvbSB0aGUgaGVhdCBzb3VyY2UuIExpbmUgYW4gMTh4MTMtaW5jaCByaW1tZWQgc2hlZXQgcGFuIHdpdGggZm9pbCBhbmQgc3ByYXkgd2l0aCBub25zdGljayBzcHJheS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgY2hpY2tlbiBmcm9tIHRoZSBtYXJpbmFkZSwgZGlzY2FyZGluZyBleGNlc3MgbWFyaW5hZGUsIGFuZCBwbGFjZSBvbiBwcmVwYXJlZCBwYW4sIGNvdmVyaW5nIHR3by10aGlyZHMgb2YgdGhlIHBhbiBhbmQgc3BhY2luZyBldmVubHkuIEJyb2lsIGZvciA2IG1pbnV0ZXMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIHBhbiBmcm9tIHRoZSBvdmVuIGFuZCBzcHJlYWQgcGluZWFwcGxlIG9uIHRoZSByZW1haW5pbmcgc3BhY2Ugb24gdGhlIHBhbi4gU3ByaW5rbGUgdGhlIHBpbmVhcHBsZSB3aXRoIDEgdGFibGVzcG9vbiBicm93biBzdWdhci4gQnJvaWwgZm9yIDMgdG8gNSBtaW51dGVzIG9yIHVudGlsIGNoaWNrZW4gaXMgYnJvd25lZCBhbmQgbm8gbG9uZ2VyIHBpbmsgaW5zaWRlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIGNoaWNrZW4gdG8gc2VydmluZyBwbGF0ZXMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgY29sZXNsYXcgbWl4IGluIGEgbWVkaXVtIGJvd2wuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGJyb2lsZWQgcGluZWFwcGxlLCBsaW1lIGp1aWNlLCBvaWwsIHNveSBzYXVjZSBhbmQgU3JpcmFjaGE7IHRvc3MgdG8gY29hdC4gRGl2aWRlIGFtb25nIHRoZSBwbGF0ZXMgd2l0aCB0aGUgY2hpY2tlbiBhbmQgc3ByaW5rbGUgdGhlIHNsYXcgd2l0aCBtaW50IG9yIGJhc2lsLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJUaGFpIENoaWNrZW4gVGVuZGVycyB3aXRoIEJyb2lsZWQgUGluZWFwcGxlIFNsYXdcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJsdW5jaFwiLFxuICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgIFwiZGlubmVyXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDU1MDk0MCxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU1MDk0MC01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMTM1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlIGhlYWRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDYxNzIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzYzMixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyMTIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzY5MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJzbWFsbFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMTAxMjMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTA5NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDM3NUZDb29rIGFuZCBwZWVsIHRoZSBoYXJkIGJvaWxlZCBlZ2dzIGFjY29yZGluZyB0byB5b3VyIGZhdm91cml0ZSBtZXRob2QuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgb25pb24sIGdhcmxpYywgc2FsdCBhbmQgcGVwcGVyIHRvIGEgbWVkaXVtIHNhdWNlcGFuLiBDb29rIG92ZXIgbWVkaXVtIGhlYXQgZm9yIG9uZSBvciB0d28gbWludXRlcywgdW50aWwgZnJhZ3JhbnQgYW5kIHNsaWdodGx5IHNvZnRlbmVkLlRocm93IHRoZSBjYXVsaWZsb3dlciBmbG9yZXRzIGluIGFuZCBjb250aW51ZSBjb29raW5nIGZvciBhIG1pbnV0ZSBvciB0d28uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgY2hpY2tlbiBzdG9jaywgY292ZXIgYW5kIGJyaW5nIHRvIHRoZSBib2lsOyBsb3dlciBoZWF0IGFuZCBjb250aW51ZSBjb29raW5nIHVudGlsIHRoZSBjYXVsaWZsb3dlciBpcyB0ZW5kZXIsIGFib3V0IDUtNyBtaW51dGVzLkxhZGxlIHRoZSBjYXVsaWZsb3dlciBtaXh0dXJlIGludG8geW91ciBibGVuZGVyOyBhZGQgZ2hlZSwgRGlqb24gbXVzdGFyZCBhbmQgbnV0cml0aW9uYWwgeWVhc3QgYW5kIHByb2Nlc3Mgb24gaGlnaCBzcGVlZCB1bnRpbCBzdXBlciBzbW9vdGggYW5kIHNpbGt5IGluIGNvbnNpc3RlbmN5LiBTZXQgYXNpZGUuIFN0ZWFtIHRoZSByYXBpbmkgZm9yIDMwIHNlY29uZHMgdG8gYSBtaW51dGUsIHVudGlsIHNsaWdodGx5IHNvZnRlbmVkIGFuZCBicmlnaHQgZ3JlZW4uIEluIGEgc21hbGwgc2tpbGxldCwgZHJ5IHJvYXN0IHRoZSBoYXplbG51dHMgb3ZlciBtZWRpdW0gaGVhdCB1bnRpbCB0aGV5IGJlY29tZSBmcmFncmFudCBhbmQgdGFrZSBhIG5pY2UgZ29sZGVuIGNvbG9yYXRpb24uIFNsaWNlIHRoZSBoYXJkIGJvaWxlZCBlZ2dzIGFuZCBhZGQgdGhlbSB0byBhIGxhcmdlIG1peGluZyBib3dsLCBmb2xsb3dlZCBieSBcXHUyMDFjQmVjaGFtZWxcXHUyMDFkIHNhdWNlLCByYXBpbmkgYW5kIHRocmVlIHF1YXJ0ZXJzIG9mIHRoZSBoYXplbG51dHMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdmVyeSBkZWxpY2F0ZWx5IHVudGlsIHdlbGwgY29tYmluZWQgYW5kIHRyYW5zZmVyIHRvIGFuIG92ZW4gc2FmZSBkaXNoLiBUZWFyIHRoZSBwcm9zY2l1dHRvIGludG8gc21hbGxlciBwaWVjZXMgYW5kIGFycmFuZ2UgdGhlbSBvbiB0b3Agb2YgdGhlIGRpc2guIFNwcmlua2xlIHdpdGggdGhlIHJlc3Qgb2YgdGhlIGhhemVsbnV0cy4gQ292ZXIgd2l0aCBmb2lsIGFuZCBwbGFjZSBpbiB0aGUgb3ZlbiBmb3IgMjAgbWludXRlczsgYWZ0ZXIgdGhhdCB0aW1lLCByZW1vdmUgdGhlIGZvaWwgYW5kIHNldCB0aGUgb3ZlbiB0byBicm9pbCBmb3IgYSAyLTMgbWludXRlcyBvciB1bnRpbCB0aGUgcHJvc2NpdXR0byBiZWNvbWVzIG5pY2UgYW5kIGNyaXNweSBhbmQgdGFrZXMgYSBuaWNlIGdvbGRlbiBjb2xvcmF0aW9uLiBZb3UgY291bGQgYWxzbyBtYWtlIHRoaXMgYWhlYWQgb2YgdGltZSBhbmQgcGxhY2UgaXQgaW4gdGhlIGZyaWRnZSBhZnRlciB5b3UgaGF2ZSBjb3ZlcmVkIGl0IHdpdGggZm9pbCAoYWx0aG91Z2ggeW91IG1pZ2h0IHdhbnQgdG8gbGV0IGl0IGNvb2wgYSBiaXQgYmVmb3JlaGFuZCkuIEluIHRoaXMgY2FzZSwgeW91XFx1MjAxOWxsIHdhbnQgdG8gaW5jcmVhc2Ugb3ZlbiB0aW1lIHRvIGFib3V0IDQ1IG1pbnV0ZXMsIGF0IDM3NUYuIFRoaXMgYWxzbyByZWhlYXRzIGV4dHJlbWVseSB3ZWxsIGluIHRoZSBtaWNyb3dhdmUgYW5kIHdpbGwgZWFzaWx5IGtlZXAgZm9yIDQtNSBkYXlzIGluIHRoZSByZWZyaWdlcmF0b3IuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkVnZyBhbmQgUmFwaW5pIENhc3Nlcm9sZVwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcImx1bmNoXCIsXG4gICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgXCJkaW5uZXJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTgzNTAyLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTgzNTAyLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNjE1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDYxOTQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTM2MjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDcyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgIFwidW5pdFwiOiBcImxic1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNjk3MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29tYmluZSAxIGN1cCBjaGlja2VuIGJyb3RoLCAxIGN1cCBCQlEgc2F1Y2UsIDMgdGJzcCBsaXF1aWQgc21va2UsIDIgdGJzcCBXb3JjZXN0ZXJzaGlyZSBzYXVjZSwgMyBwcmVzc2VkIGdhcmxpYyBjbG92ZXMsIDIgdGJzcCBicm93biBzdWdhciBhbmQgc3RpciB0byBjb21iaW5lLkdlbmVyb3VzbHkgc3ByaW5rbGUgdGhlIHBvcmsgcm9hc3Qgd2l0aCBzYWx0LCBwZXBwZXIgYW5kIHBhcHJpa2EuUnViIHRoZSBzZWFzb25pbmcgaW50byB0aGUgcG9yayBzaG91bGRlci5DaG9wIDEgbGFyZ2Ugb25pb24gYW5kIHBsYWNlIGl0IGludG8gdGhlIGJvdHRvbSBvZiB0aGUgc2xvdyBjb29rZXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgcG9yayByb2FzdCBvdmVyIHRoZSBvbmlvbiBhbmQgcG91ciB0aGUgbWFyaW5hZGUgb3ZlciB0aGUgcG9yay5Db3ZlciBhbmQgc2V0IG9uIGxvdyBmb3IgOCBob3Vycy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCBpdCBjb29sIGRvd24gc28geW91IGRvbid0IGJ1cm4geW91ciBmaW5nZXJzIHdoaWxlIHNocmVkZGluZy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgbWVhdCB0byBhIGxhcmdlIGJvd2wgYW5kIHNocmVkLiBUaGlzIG1lYXQgaXMgZmFsbC1hcGFydCB0ZW5kZXIhIFRoZSBtYXJpbmFkZSBlbmhhbmNlcyB0aGUgbmF0dXJhbCBmbGF2b3JzIG9mIHRoZSBwb3JrLiBXaGVuIHlvdSdyZSBkb25lIHNocmVkZGluZyB0aGUgcG9yaywgcG91ciBhcyBtdWNoIG9mIHRoZSByZW1haW5pbmcgc2F1Y2Ugb3ZlciB0aGUgcG9yayBhcyB5b3UgbGlrZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIHdpdGggbW9yZSBCYWJ5IFJheXMgQkJRIFNhdWNlLi4uIGFuZCBwaWNrbGVzXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIlB1bGxlZCBQb3JrXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwibHVuY2hcIixcbiAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICBcImRpbm5lclwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1NDM2ODcsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NDM2ODctNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzYwNyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkwNDAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE4OTQyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlRic3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDIxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDI1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0MzI3NCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogODEyMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExNDI0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGFsbCBpbmdyZWRpZW50cyB0byBhIGJsZW5kZXIgKGV4Y2VwdCBncmFoYW0gY3JhY2tlcnMgaWYgdXNpbmcpLiBDb3ZlciBhbmQgYmxlbmQgdW50aWwgd2VsbCBwdXJlZWQgdGhlbiBzZXJ2ZSB0b3BwZWQgd2l0aCBjcnVzaGVkIGdyYWhhbSBjcmFja2VycyBpZiBkZXNpcmVkLipUaGUgYmFuYW5hIGlzIG1vc3RseSB3aGF0IGdpdmVzIHRoaXMgc21vb3RoaWUgaXQncyBzd2VldG5lc3MsIHNvIEkgcmVjb21tZW5kIHVzaW5nIG9uZSB0aGF0IGlzIHNwZWNrbGVkIChub3QgbXVzaHkgdGhvdWdoKS5SZWNpcGUgU291cmNlOiBDb29raW5nIENsYXNzeVwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJQdW1wa2luIENoZWVzZWNha2UgQnJlYWtmYXN0IFNtb290aGllXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwibW9ybmluZyBtZWFsXCIsXG4gICAgICBcImJydW5jaFwiLFxuICAgICAgXCJicmVha2Zhc3RcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTE2OTA0LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTE2OTA0LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTAxNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiVGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE4MDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwODkwMDMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMjAxMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZXBhcmUgYXBwbGUgZmlsbGluZzogTWVsdCBidXR0ZXIgb3ZlciBtZWRpdW0gaGVhdCBpbiAxMi0gaW5jaCBza2lsbGV0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGFwcGxlcyBhbmQgc3VnYXI7IGNvb2sgMjAgbWludXRlcywgc3RpcnJpbmcgb2NjYXNpb25hbGx5LiBTdGlyIGluIGFwcGxlIGp1aWNlOyBjb29rIDEgbW9yZSBtaW51dGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJHcmVhc2UgMTMgeCA5LWluY2ggYmFraW5nIGRpc2guIEFycmFuZ2UgMS8yIG9mIGJyZWFkIHNsaWNlcywgb3ZlcmxhcHBpbmcgc2xpZ2h0bHkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBib3dsLCB3aGlzayBtaWxrLCBzYWx0LCBjaW5uYW1vbiBhbmQgZWdncy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgMS8yIG9mIGVnZyBtaXh0dXJlIG92ZXIgYnJlYWQuIFNldCBhc2lkZSAxLzQgb2YgYXBwbGUgZmlsbGluZzsgY292ZXIgYW5kIHJlZnJpZ2VyYXRlIHRvIHNwb29uIG9uIGFmdGVyIGJha2luZy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCByZW1haW5pbmcgYXBwbGUgZmlsbGluZyBvdmVyIGJyZWFkIGluIGFuIGV2ZW4gbGF5ZXIuIEFycmFuZ2UgcmVtYWluaW5nIGJyZWFkIHNsaWNlcyBvdmVyIGFwcGxlIGxheWVyLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciByZW1haW5pbmcgZWdnIG1peHR1cmUgb3ZlciB0b3AgYnJlYWQgbGF5ZXIuIFByZXNzIGJyZWFkIGRvd24gd2l0aCBzcGF0dWxhIHNvIGl0IGFic29yYnMgdGhlIG1heGltdW0gYW1vdW50IG9mIGVnZyBtaXh0dXJlLiBEb3QgYnJlYWQgd2l0aCBidXR0ZXIgYW5kIHNwcmlua2xlIHdpdGggc3VnYXIuIENvdmVyIGFuZCByZWZyaWdlcmF0ZSBvdmVybmlnaHQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBiYWtlOiBQcmVoZWF0IG92ZW4gdG8gMzI1XFx1MDBiMEYuIFVuY292ZXIgZGlzaCBhbmQgYmFrZSA1MCB0byA1NSBtaW51dGVzIG9yIHVudGlsIGtuaWZlIGluc2VydGVkIGluIGNlbnRlciBjb21lcyBvdXQgY2xlYW4uIFJlaGVhdCByZW1haW5pbmcgYXBwbGUgbWl4dHVyZSBpbiBtaWNyb3dhdmUuIFNwb29uIG92ZXIgdG9wIHRvIHNlcnZlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJDaW5uYW1vbiBSYWlzaW4gT3Zlcm5pZ2h0IEZyZW5jaCBUb2FzdCB3LyBBcHBsZSBGaWxsaW5nXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2lkZSBkaXNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk4ODI0MyxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzk4ODI0My01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDMyMDA5LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyOTQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWVsdCBidXR0ZXIgdG8gYSBsYXJnZSBza2lsbGV0IG92ZXIgbWVkaXVtIGhlYXQuIEFzIHRoZSBidXR0ZXIgbWVsdHMsIGl0IHdpbGwgYmVnaW4gdG8gZm9hbSBhcyBpdCB0cmFuc2l0aW9ucyBmcm9tIGEgYnJpZ2h0LCBsZW1vbi15ZWxsb3cgY29sb3IgdG8gZ29sZGVuIGFuZCB0aGVuIGZpbmFsbHkgdG8gYSBudXR0eS1icm93biBjb2xvci4gQXMgdGhlIGJ1dHRlciBqdXN0IGJlZ2lucyB0byB0dXJuIG51dHR5LWJyb3duIGZyb20gZ29sZGVuLCByZWR1Y2UgeW91ciBoZWF0IHRvIG1lZGl1bS1sb3cgYW5kIGNhcmVmdWxseSB0b3NzIGluIHlvdXIgZ2FybGljIGFuZCBvbmlvbi4gQ29vayB1bnRpbCB0aGUgb25pb24ganVzdCBiZWdpbnMgdG8gYmVjb21lIHRlbmRlciBhbmQgdGhlbiBhZGQgaW4geW91ciBzaHJpbXAuIFN0aXJyaW5nIGZyZXF1ZW50bHksIGNvb2sgdW50aWwgdGhlIHNocmltcCB0dXJuIHBpbmsgYW5kIGxvc2UgdGhlaXIgdHJhbnNsdWNlbmNlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3RpciBpbiBzYWx0LCBibGFjayBwZXBwZXIsIHJlZCBwZXBwZXIgZmxha2VzIGFuZCBmcmVzaCBwYXJzbGV5LiBUb3NzIHNocmltcCB0byBtYWtlIHN1cmUgYWxsIGFyZSB3ZWxsLWNvYXRlZC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIGhlYXQgYW5kIHNlcnZlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJCcm93biBCdXR0ZXIgR2FybGljIFNocmltcFwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcImx1bmNoXCIsXG4gICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgXCJkaW5uZXJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzI0MDE4LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzI0MDE4LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEwMDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkxNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MTU2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxODA2OSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMzQwNTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDA0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTE1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCBvZmYgdGhlIGNydXN0IGZyb20gNiBzbGljZXMgb2YgYnJlYWQuIENob3AgdGhlIGNlbnRlcnMgYW5kIHB1dCBpbnRvIGEgZm9vZCBwcm9jZXNzb3IuIFB1bHNlIHVudGlsIHlvdSBoYXZlIGNvYXJzZSBicmVhZGNydW1icy4gWW91IHNob3VsZCBoYXZlIGFib3V0IDMgY3Vwcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1ha2UgdGhlIHN0dWZmaW5nOiBJbiBhIGxhcmdlIGJvd2wsIHN0aXIgdG9nZXRoZXIgdGhlIGJyZWFkY3J1bWJzLCBsZW1vbiB6ZXN0LCBQYXJtZXNhbiBjaGVlc2UsIG1pbmNlZCBnYXJsaWMsIGNob3BwZWQgcGFyc2xleSwgbWluY2VkIG9yZWdhbm8sIDEvMiBjdXAgb2xpdmUgb2lsLCBhbmQgYmxhY2sgcGVwcGVyLiBTZXQgYXNpZGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkJha2VkIFN0dWZmZWQgQXJ0aWNob2tlc1wiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiLFxuICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgIFwic3RhcnRlclwiLFxuICAgICAgXCJzbmFja1wiLFxuICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MjM4NTUsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MjM4NTUtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMTYwOTgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiVGJzcFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byAzNTBGTGluZSBhIGJha2luZyBzaGVldCB3aXRoIHBhcmNobWVudCwgc2V0IGFzaWRlLkluIGJvd2wgb2Ygc3RhbmQgbWl4ZXIgY3JlYW0gYnV0dGVyIGFuZCBwZWFudXQgYnV0dGVyIHRvZ2V0aGVyIHVudGlsIHNtb290aC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBib3RoIHN1Z2FycyBhbmQgYmVhdCBmb3IgMiBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIGVnZywgdmFuaWxsYSwgYmFraW5nIHNvZGEgYW5kIHNhbHQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdW50aWwgY29tYmluZWQuVHVybiBtaXhlciB0byBsb3cgYW5kIGFkZCBpbiBmbG91ci5Qb3J0aW9uIG91dCBkb3VnaCBieSBpbiB0YWJsZXNwb29uIGFtb3VudHMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSb2xsIGludG8gYSBiYWxsIGFuZCB0aGVuIGZsYXR0ZW4gdG8gYXBwcm94aW1hdGVseSAgaW5jaCB0aGljay5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIG9uIGJha2luZyBzaGVldCBhYm91dCAyIGluY2hlcyBhcGFydC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDgtOSBtaW51dGVzIHVudGlsIGdvbGRlbiBhdCBoZSBlZGdlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIG92ZW4gYW5kIHRyYW5zZmVyIGNvb2tpZXMgdG8gYSB3aXJlIHJhY2sgdG8gY29vbCBjb21wbGV0ZWx5LkluIG1pY3Jvd2F2ZSBzYWZlIGJvd2wgY29tYmluZSBjaG9jb2xhdGUgY2hpcHMsIHBlYW51dCBidXR0ZXIgYW5kIGJ1dHRlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkhlYXQgb24gaGlnaCBmb3IgMSBtaW51dGUgYW5kIHRoZW4gc3RpciB1bnRpbCBzbW9vdGguXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBwb3dkZXJlZCBzdWdhciBpbiBib3dsLkRpcCBlYWNoIGNvb2tpZSBpbiBjaG9jb2xhdGUgYW5kIHVzaW5nIGEgZm9yayByZW1vdmUgY29va2llLCB0YXBwaW5nIG9mZiBleGNlc3MgY2hvY29sYXRlLiBZb3UgZG9uJ3QgbmVlZCBhIGxvdCBvZiBjaG9jb2xhdGUgY29hdGluZyBvbiB0aGUgY29va2llcy5JbW1lZGlhdGVseSBkaXAgdGhlIGNvb2tpZSBpbnRvIHRoZSBwb3dkZXJlZCBzdWdhciBhbmQgdG9zcyB0byBjb2F0IGNvbXBsZXRlbHkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgYmFjayBvbiBjb29saW5nIHJhY2sgdG8gdW50aWwgY2hvY29sYXRlIGlzIHNldC4gUmVwZWF0IGZvciBhbGwgY29va2llcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMTFcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIlB1cHB5IENob3cgQ29va2llc1wiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA3OTM1ODQsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83OTM1ODQtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTE0MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQ2NDEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTEyNTYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE5NDQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTM1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBwb3RhdG9lcyBpbiBhIGxhcmdlIHNhdWNlcGFuIGFuZCBhZGQgd2F0ZXIgdG8gY292ZXIgYnkgMSBpbmNoLiBCcmluZyB0byBib2lsIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAxLXRhYmxlc3Bvb24gc2FsdCwgcmVkdWNlIGhlYXQgdG8gbWVkaXVtLCBhbmQgc2ltbWVyLiBTdGlyIGEgZmV3IHRpbWVzLCB1bnRpbCBwb3RhdG9lcyByZS1mb3JrIHRlbmRlciwgYWJvdXQgOCBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRHJhaW4gcG90YXRvZXMgYW5kIHRyYW5zZmVyIHRvIGEgbGFyZ2UgYm93bC5JbiBhIG1lZGl1bSBzaXplZCBib3dsIHdoaXNrIHRvZ2V0aGVyIHlvZ3VydCwgbWF5b25uYWlzZSwgbXVzdGFyZCwgc2FsdCwgcGVwcGVyIGFuZCBvbmlvbiBwb3dkZXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdG8gcG90YXRvZXMgYW5kIGdlbnRseSBzdGlyIHRvIGNvbWJpbmUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgY2VsZXJ5LCBwaWNrbGVzLCByZWQgb25pb25zLCBwYXJzbGV5IGFuZCBjaG9wcGVkIGVnZ3MgdG8gcG90YXRvIG1peHR1cmUsIHN0aXIgdG8gY29tYmluZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBtb3JlIHNhbHQgYW5kIHBlcHBlciB0byB0YXN0ZS5Db3ZlciBhbmQgcmVmcmlnZXJhdGUgdW50aWwgY2hpbGxlZCwgYWJvdXQgMSBob3VyIGJlZm9yZSBzZXJ2aW5nLiBQb3RhdG8gc2FsYWQgY2FuIGJlIG1hZGUgdXAgdG8gb25lIGRheSBhaGVhZC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiRWFzeSBDcmVhbXkgUG90YXRvIFNhbGFkIHdpdGggWW9ndXJ0XCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2FsYWRcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjA3ODA1LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjA3ODA1LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAyMTE4MjEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjAwNDgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkzNjUxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDc5MjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJsYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiVGJzcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE1NDksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE0LFxuICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRvcHMgb2ZmIHBlcHBlcnM7IHJlbW92ZSBhbmQgZGlzY2FyZCBzZWVkcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNob3AgdG9wczsgcGxhY2UgaW4gbWVkaXVtIGJvd2wuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgc2F1c2FnZSwgb25pb25zLCByaWNlLCBQYXJtZXNhbiwgZ2FybGljLCBvcmVnYW5vLCAxLTEvMiBjdXBzIHBpenphIHNhdWNlIGFuZCAxLTEvNCBjdXBzIHNocmVkZGVkIGNoZWVzZTsgbWl4IGxpZ2h0bHkuICBTcG9vbiBpbnRvIHBlcHBlciBzaGVsbHMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTdGFuZCBwZXBwZXJzIGluIHNsb3cgY29va2VyOyB0b3Agd2l0aCByZW1haW5pbmcgc2F1Y2UgYW5kIHNocmVkZGVkIGNoZWVzZS4gIENvdmVyIHdpdGggbGlkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29vayBvbiBMT1cgNiB0byA4IGhvdXJzIChvciBvbiBISUdIIDItMS8yIHRvIDMtMS8yIGhvdXJzKS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiU2xvdy1Db29rZXIgSXRhbGlhbi1TdHVmZmVkIFBlcHBlcnNcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzYzODU4LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzYzODU4LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMjAxMjksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDgxMjAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDgxMjAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgZmxvdXJzIHRvZ2V0aGVyIHdpdGggIHRlYXNwb29uIGluc3RhbnQgeWVhc3QgaW4gYSBsYXJnZSBtaXhpbmcgYm93bCB3aXRoIGEgdGlnaHQtZml0dGluZyBsaWQgKGxpa2UgdGhpcyBvbmUpLCBhbmQgdGhlbiBzdGlyIGluIHRoZSBvYXRzLiBTdGlyIHRoZSB3YXRlciBhbmQgbWlsayB0b2dldGhlciwgdGhlbiBwb3VyIHRoZSBsaXF1aWRzIGludG8gdGhlIGRyeSBpbmdyZWRpZW50cywgc3RpcnJpbmcgdG8gY3JlYXRlIGEgbG9vc2UsIHNoYWdneSBkb3VnaC4gQ292ZXIgdGhlIG1peGluZyBib3dsIHRpZ2h0bHksIGFuZCBhbGxvdyB0aGUgZG91Z2ggdG8gcmVzdCBhdCByb29tIHRlbXBlcmF0dXJlIGF0IGxlYXN0IGVpZ2h0IGFuZCB1cCB0byB0d2VsdmUgaG91cnMuRHVtcCB0aGUgZG91Z2ggaW50byB0aGUgYmFzaW4gb2YgYSBzdGFuZCBtaXhlciAobGlrZSB0aGlzIG9uZSksIGFuZCB0aGVuIGJlYXQgaW4gdGhlIGJ1dHRlciwgaG9uZXksIHNhbHQsIGFuZCB0aGUgcmVtYWluaW5nIDIgdGFibGVzcG9vbnMgeWVhc3QuIENvbnRpbnVlIGJlYXRpbmcgYWxsIHRoZSBpbmdyZWRpZW50cyB0b2dldGhlciB1bnRpbCB0aGV5IGZvcm0gYSBzbW9vdGggZG91Z2gsIGFuZCB0aGVuIHR1cm4gaXQgb3V0IG9uIGEgd2VsbC1mbG91cmVkIHN1cmZhY2UuIEtuZWFkIGJ5IGhhbmQgZm9yIHRlbiB0byBmaWZ0ZWVuIG1pbnV0ZXMsIGluY29ycG9yYXRpbmcgYWJvdXQgMSBjdXBzIGFkZGl0aW9uYWwgZmxvdXIsIHVudGlsIHRoZSBkb3VnaCBiZWNvbWVzIHNtb290aCBhbmQgZWxhc3RpYy5PaWwgYSBsYXJnZSBtaXhpbmcgYm93bCwgYW5kIHRyYW5zZmVyIHRoZSBkb3VnaCB0byB0aGUgYm93bC4gQ292ZXIgdGlnaHRseSwgYW5kIGFsbG93IHRoZSBkb3VnaCB0byByaXNlIHVudGlsIGRvdWJsZWQgaW4gdm9sdW1lLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIGRvdWdoIHRvIGEgd2VsbC1mbG91cmVkIHN1cmZhY2UsIGFuZCBzcGxpdCBpbnRvIHR3byBwb3J0aW9ucyBvZiBhcHByb3hpbWF0ZWx5IGVxdWFsIHdlaWdodC4gQnV0dGVyIGFuZCBmbG91ciB0d28gNC1pbmNoIGJ5IDgtaW5jaCBsb2FmIHBhbnMuV29ya2luZyBvbmUgYXQgYSB0aW1lLCByb2xsIGVhY2ggbHVtcCBvZiBkb3VnaCBvdXQgaW50byBhIGxhcmdlIHJlY3RhbmdsZSwgYWJvdXQgOCBieSAxNiBpbmNoZXMuIFdvcmtpbmcgZnJvbSB0aGUgc2hvcnQgZW5kLCByb2xsIHRoZSBkb3VnaCBpbnRvIGEgbG9hZiwgcGluY2hpbmcgdGhlIHNlYW0gYXQgdGhlIGJvdHRvbSBvZiB0aGUgbG9hZiB0aWdodGx5IHRvIHNlYWwgaXQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgZG91Z2gsIHNlYW0tc2lkZSBkb3duLCBpbiBhIHByZXBhcmVkIGxvYWYgcGFuLiBDb3ZlciBsaWdodGx5IHdpdGggYSBraXRjaGVuIHRvd2VsLCBhbmQgYWxsb3cgaXQgdG8gcmlzZSB1bnRpbCBkb3VibGVkIGluIHNpemUsIGFib3V0IHR3byBob3Vycy5XaGlsZSB0aGUgZG91Z2ggcmlzZXMsIGhlYXQgdGhlIG92ZW4gdG8gNDAwIEYuVXNpbmcgYSBwYXN0cnkgYnJ1c2gsIGdlbnRseSBicnVzaCB0aGUgdG9wIG9mIHRoZSBkb3VnaCB3aXRoIGNyZWFtLCBhbmQgdGhlbiBzY2F0dGVyIG9uZSB0YWJsZXNwb29uIHJvbGxlZCBvYXRzIG92ZXIgZWFjaCBsb2FmLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIGxvYXZlcyB0byB0aGUgb3ZlbiwgYW5kIGJha2UgNSBtaW51dGVzIGF0IDQwMCBGLiBUaGVuIHJlZHVjZSB0aGUgdGVtcGVyYXR1cmUgdG8gMzUwIEYgYW5kIGNvbnRpbnVlIGJha2luZyB1bnRpbCB0aGUgY3J1c3QgaXMgYSBkYXJrIGJyb3duIGFuZCB0aGUgYnJlYWQgcmVhY2hlcyBhbiBpbnRlcm5hbCB0ZW1wZXJhdHVyZSBvZiAyMDAgRiBhYm91dCA0NSBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gdGhlIG92ZW4gYW5kIGFsbG93IHRoZSBsb2F2ZXMgdG8gY29vbCBpbiB0aGVpciBwYW5zIGZvciBmaXZlIG1pbnV0ZXMsIHRoZW4gdHVybiBvdXQgb250byBhIHdpcmUgcmFjaywgYWxsb3dpbmcgdGhlIGJyZWFkIHRvIGNvb2wgY29tcGxldGVseSBiZWZvcmUgc2xpY2luZy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiV2hvbGUgV2hlYXQgTWlsayBhbmQgSG9uZXkgU2FuZHdpY2ggQnJlYWRcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgIFwic3RhcnRlclwiLFxuICAgICAgXCJzbmFja1wiLFxuICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTgzMzIsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MTgzMzItNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTkxMixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTY4LFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDE5MDcxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0MixcbiAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExNDI0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxODMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgIFwidW5pdFwiOiBcIm1MXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDA4MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTIwLFxuICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgZmxvdXIsIGJha2luZyBwb3dkZXIsIGNvcm5zdGFyY2gsIGNpbm5hbW9uLCBhbmQgc2FsdC4gSW4gYSBzZXBhcmF0ZSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgYnV0dGVyLCBwdW1wa2luLCBhbmQgdmFuaWxsYS4gU3RpciBpbiB0aGUgYWdhdmUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGZsb3VyIG1peHR1cmUsIHN0aXJyaW5nIGp1c3QgdW50aWwgaW5jb3Jwb3JhdGVkLiBGb2xkIGluIDIgdGFibGVzcG9vbnMgb2YgY2hvY29sYXRlIGNoaXBzLiBDaGlsbCB0aGUgY29va2llIGRvdWdoIGZvciBhdCBsZWFzdCAzMCBtaW51dGVzLiAoSWYgY2hpbGxpbmcgbG9uZ2VyIHRoYW4gMSBob3VyLCBjb3ZlciB0aGUgdG9wIG9mIHRoZSBib3dsIHdpdGggZm9pbC4pUHJlaGVhdCB0aGUgb3ZlbiB0byAzMjVGLCBhbmQgbGluZSBhIGJha2luZyBzaGVldCB3aXRoIHBhcmNobWVudCBwYXBlciBvciBhIHNpbGljb25lIGJha2luZyBtYXQuIERyb3AgdGhlIGNvb2tpZSBkb3VnaCBpbnRvIDEyIHJvdW5kZWQgc2Nvb3BzIG9udG8gdGhlIHByZXBhcmVkIGJha2luZyBzaGVldC4gRmxhdHRlbiBzbGlnaHRseSwgYW5kIHByZXNzIHRoZSByZW1haW5pbmcgY2hvY29sYXRlIGNoaXBzIGludG8gdGhlIHRvcHMgb2YgdGhlIGNvb2tpZSBkb3VnaC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgYXQgMzI1RiBmb3IgMTUtMTcgbWludXRlcy4gQ29vbCBvbiB0aGUgYmFraW5nIHNoZWV0IGZvciBhdCBsZWFzdCAxMCBtaW51dGVzIGJlZm9yZSB0dXJuaW5nIG91dCBvbnRvIGEgd2lyZSByYWNrLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJUaGUgVWx0aW1hdGUgSGVhbHRoeSBTb2Z0ICYgQ2hld3kgUHVtcGtpbiBDaG9jb2xhdGUgQ2hpcCBDb29raWVzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2lkZSBkaXNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIzMTk1MSxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzIzMTk1MS01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxOTMzNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTM4MTQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG9nZXRoZXIgYnJvd24gc3VnYXIsIGNvcm5zdGFyY2gsIGFuZCAxLzQgdGVhc3Bvb24gc2FsdCBpbiBhIGhlYXZ5IG1lZGl1bSBzYXVjZXBhbiwgdGhlbiB3aGlzayBpbiBtaWxrIGFuZCBjcmVhbS4gQnJpbmcgdG8gYSBib2lsIG92ZXIgbWVkaXVtIGhlYXQsIHdoaXNraW5nIGZyZXF1ZW50bHksIHRoZW4gYm9pbCwgd2hpc2tpbmcsIDEgbWludXRlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gaGVhdCBhbmQgd2hpc2sgaW4gYnV0dGVyIGFuZCB2YW5pbGxhLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBpbnRvIGEgYm93bCwgdGhlbiBjb3ZlciBzdXJmYWNlIHdpdGggYnV0dGVyZWQgd2F4IHBhcGVyIGFuZCBjaGlsbCB1bnRpbCBjb2xkLCBhdCBsZWFzdCAxIDEvMiBob3Vycy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiQnV0dGVyc2NvdGNoIFB1ZGRpbmdcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODgwMTA4LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvODgwMTA4LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMDYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImJ1bmNoXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkxNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDAzNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTUyOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJpbnNlIHRoZSBxdWlub2EgdW5kZXIgY29vbCBydW5uaW5nIHdhdGVyLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIHJpbnNlZCBxdWlub2EgaW4gYSBwb3Qgd2l0aCAxLjc1IGN1cHMgb2Ygd2F0ZXIuIFB1dCBhIGxpZCBvbiB0b3AsIGJyaW5nIGl0IHRvIGEgYm9pbCwgdGhlbiByZWR1Y2UgdGhlIGhlYXQgdG8gbG93IGFuZCBsZXQgc2ltbWVyIGZvciAxNSBtaW51dGVzLiBBZnRlciAxNSBtaW51dGVzLCB0dXJuIG9mZiB0aGUgaGVhdC4gQWxsb3cgdGhlIHF1aW5vYSB0byBjb29sIGJlZm9yZSBtYWtpbmcgdGhlIHNhbGFkIG9yIGVsc2UgdGhlIGhlYXQgd2lsbCB3aWx0IHRoZSBwYXJzbGV5IGFuZCB2ZWdldGFibGVzLiBUbyBjb29sIGl0IGZhc3Rlciwgc3ByZWFkIGl0IG91dCBvbiBhIGJha2luZyBzaGVldCBhbmQgcGxhY2UgaW4gdGhlIHJlZnJpZ2VyYXRvciBmb3IgMzAgbWludXRlcy5XaGlsZSB0aGUgcXVpbm9hIGlzIGNvb2xpbmcsIHByZXBhcmUgdGhlIHJlc3Qgb2YgdGhlIHNhbGFkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRoZSB0b21hdG8gYW5kIGN1Y3VtYmVyIGludG8gYSBzbWFsbCBkaWNlLiBSaW5zZSB0aGUgcGFyc2xleSB3ZWxsIHRvIHJlbW92ZSBzYW5kIGFuZCBncml0LCB0aGVuIGNob3Agd2VsbC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY3VjdW1iZXIsIHRvbWF0bywgYW5kIHBhcnNsZXkgdG8gYSBib3dsLlRvIG1ha2UgdGhlIGRyZXNzaW5nLCBzcXVlZXplIHRoZSBqdWljZSBmcm9tIHRoZSBsZW1vbiBpbnRvIGEgYm93bCAoYWJvdXQgIGN1cCkuIE1pbmNlIHRoZSBnYXJsaWMgYW5kIGFkZCB0byB0aGUgbGVtb24ganVpY2UgYWxvbmcgd2l0aCB0aGUgb2xpdmUgb2lsIGFuZCBzYWx0Lk9uY2UgdGhlIHF1aW5vYSBpcyBjb29sZWQsIGNvbWJpbmUgaXQgd2l0aCB0aGUgY2hvcHBlZCB2ZWdldGFibGVzIGFuZCB0aGUgbGVtb24gZHJlc3NpbmcuIFN0aXIgd2VsbCBhbmQgdGhlbiBzZXJ2ZSFcIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwicXVpbm9hIHRhYmJvdWxlaFwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MDIzMTEsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MDIzMTEtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNDI0MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTQxMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MTc3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImVudmVsb3Blc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzY0NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE0MDUxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDU0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzMCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxpZ2h0bHkgc3ByYXkgdGhlIG1vbGQgd2l0aCBub24tc3RpY2sgc3ByYXkgYW5kIHdpcGUgZXhjZXNzIG9mZiB3aXRoIGEgcGFwZXIgdG93ZWwuIERvblxcdTIwMTl0IG92ZXJkbyBpdCBvciB0aGUgcmVzaWR1ZSB3aWxsIGFmZmVjdCB0aGUgdGFzdGUgb2YgdGhlIGplbGxvLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB0aGUgc29kYSwganVpY2UsIGFuZCBjcmVhbSBpbnRvIGEgbWVkaXVtIHNhdWNlcGFuIGFuZCBzcHJpbmtsZSB0aGUgZ2VsYXRpbiBvbiB0b3AuIEFsbG93IHRoZSBnZWxhdGluIHRvIHNvYWsgZm9yIDItMyBtaW51dGVzLCB0aGVuIGJlZ2luIHRvIGhlYXQgb24gbG93LCBzdGlycmluZyBjb25zdGFudGx5IHVudGlsIGdlbGF0aW4gaXMgZnVsbHkgZGlzc29sdmVkIChhYm91dCA1IG1pbnV0ZXMpLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHNhdWNlcGFuIGZyb20gaGVhdCBhbmQgYWRkIHZvZGthIGFuZCBmb29kIGNvbG9yaW5nLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBpbnRvIG1vbGRzIGFuZCBjaGlsbCBmb3Igc2V2ZXJhbCBob3Vycywgb3IgdW50aWwgc2V0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gbW9sZCwgdG9wIHdpdGggd2hpcHBlZCBjcmVhbSwgYW5kIGVuam95IHJlc3BvbnNpYmx5ISpUaGUgb3JpZ2luYWwgcmVjaXBlIHN1Z2dlc3RzIDItMyBlbnZlbG9wZXMsIGRlcGVuZGluZyBvbiBob3cgbG9uZyB5b3VyIGplbGxvIHNob3RzIHdpbGwgYmUgbGVmdCBvdXQgKG1vcmUgZ2VsYXRpbiBmb3IgbW9yZSB0aW1lKS4gSSBvcHRlZCBmb3IgMyBiZWNhdXNlIHdlIHdlcmUgdHJhdmVsaW5nIGFuIGhvdXIgdG8gZ2V0IHRvIHRoZSBwYXJ0eSwgYnV0IEkgZm91bmQgdGhlbSB0byBiZSBhIGxpdHRsZSB0b28gZmlybSAsIHNvIEkgc3VnZ2VzdCB5b3Ugc3RpY2sgd2l0aCAyIGFuZCBwbGFuIGFjY29yZGluZ2x5IGZvciB0aGUgYmVzdCByZXN1bHRzIVwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJCaXJ0aGRheSBDYWtlIEplbGxvIFNob3RzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICBcInN0YXJ0ZXJcIixcbiAgICAgIFwic25hY2tcIixcbiAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjcwNDA4LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjcwNDA4LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTM4MjgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjY2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDE5LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIyMDI3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAzMjAwOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMTE0NTcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDM1MCBkZWdyZWVzIEYuIEZpcnN0LCByZW1vdmUgdGhlIG11c2hyb29tIHN0ZW1zIGJ5IHB1c2hpbmcgZWFjaCBvbmUgdG93YXJkIHlvdSwgdGhlbiBhd2F5IGZyb20geW91LiBJdCB3aWxsIHBvcCByaWdodCBvdXQuIChTYXZlIHRoZW0gdG8gYWRkIHRvIGFub3RoZXIgcmVjaXBlLikgU3dpc2ggYW5kIHJ1YiB0aGUgbXVzaHJvb20gdG9wcyBpbiBhIGxhcmdlIGJvd2wgb2YgY29sZCB3YXRlciB0byBnZXQgdGhlbSBjbGVhbi4gVGhlbiwgbGF5IHRoZW0gb3BlbiBzaWRlIGRvd24gb24gYSBraXRjaGVuIHRvd2VsIHRvIGRyeS5XaGlsZSB0aGUgbXVzaHJvb21zIGRyeSwgbWl4IHRvZ2V0aGVyIHRoZSBjcmVhbSBjaGVlc2UsIHNwaW5hY2gsIGFydGljaG9rZSBoZWFydHMsIHBhcm1lc2FuLCBnYXJsaWMgcG93ZGVyLCAxLzIgdHNwLiBrb3NoZXIgc2FsdCwgYW5kIHJlZCBwZXBwZXIgZmxha2VzLkluIGEgc21hbGwgYm93bCwgc3RpciB0b2dldGhlciBvbGl2ZSBvaWwsIDEvNCB0c3AuIHNhbHQsIGFuZCBJdGFsaWFuIHNlYXNvbmluZy4gVXNlIGEgYmFzdGluZyBicnVzaCBvciB5b3VyIGZpbmdlcnMgdG8gbGlnaHRseSBydWIgdGhlIG91dHNpZGUgb2YgdGhlIG11c2hyb29tcyB3aXRoIHRoZSBvaWwgbWl4dHVyZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBtdXNocm9vbXMgb3BlbiBzaWRlIHVwIG9uIGEgYmFraW5nIHNoZWV0LiBVc2UgYSBzbWFsbCBkaXNoZXIgb3Igc3Bvb24gdG8gcGxhY2UgYSBoZWFwaW5nIHNjb29wIG9mIGRpcCBtaXh0dXJlIGludG8gZWFjaCBtdXNocm9vbSwgcHJlc3NpbmcgaXQgZG93biB0byBtYWtlIHN1cmUgaXQgZmlsbHMgdGhlIG9wZW5pbmcuIFByZXNzIGEgc21hbGwgYW1vdW50IG9mIGZldGEgY2hlZXNlIG9uIHRvcCBvZiBlYWNoIHN0dWZmZWQgbXVzaHJvb20uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGluIHByZWhlYXRlZCBvdmVuIGZvciAyMC0yNSBtaW51dGVzIHVudGlsIGZpbGxpbmcgaXMgaG90IGFuZCBidWJibHkgYW5kIGZldGEgaXMgc3RhcnRpbmcgdG8gYnJvd24uIE11c2hyb29tcyB3aWxsIGRyYWluIHNvbWUgYnJvd24gbGlxdWlkIGR1cmluZyBjb29raW5nLCBzbyBkcmFpbiBvbiBwYXBlciB0b3dlbHMgYmVmb3JlIHNlcnZpbmcgaWYgeW91IGRvbid0IHdhbnQgdGhhdCBsaXF1aWQgb24geW91ciBzZXJ2aW5nIHBsYXRlLiBUaGVzZSB0YXN0ZSBqdXN0IGFzIGdvb2QgZXZlbiBhZnRlciB0aGV5IGhhdmUgY29vbGVkIGRvd24hXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkFydGljaG9rZSBTcGluYWNoIERpcCBTdHVmZmVkIE11c2hyb29tc1wiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcImNvbmRpbWVudFwiLFxuICAgICAgXCJkaXBcIixcbiAgICAgIFwic3ByZWFkXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDMyNTIwOCxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzMyNTIwOC01NTZ4MzcwLmpwZWdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA3MDM2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDExMTU0OSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMjYsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDM4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMzA0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE2NzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMDIwNDIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDEwMjYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzYzMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTQxMDYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2F0Y2ggaG93IHRvIG1ha2UgdGhpcyByZWNpcGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBhbiBvdmVuIHJhY2sgaW4gdGhlIGNlbnRlciBvZiB0aGUgb3Zlbi4gUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTAgZGVncmVlcyBGLiBTcHJheSBhIDktYnktMTMtYnktMi1pbmNoIGdsYXNzIGJha2luZyBkaXNoIHdpdGggdmVnZXRhYmxlIG9pbCBjb29raW5nIHNwcmF5LiBTZXQgYXNpZGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJGb3IgdGhlIGZvbmR1dGEgc2F1Y2U6IEluIGEgbWVkaXVtIGhlYXZ5LWJvdHRvbWVkIHNhdWNlcGFuLCBicmluZyB0aGUgbWlsayBhbmQgY3JlYW0gdG8gYSBzaW1tZXIgb3ZlciBtZWRpdW0gaGVhdC4gUmVkdWNlIHRoZSBoZWF0IHRvIGxvdy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgUGVjb3Jpbm8gUm9tYW5vIGFuZCB3aGlzayB1bnRpbCB0aGUgY2hlZXNlIGlzIG1lbHRlZCBhbmQgdGhlIHNhdWNlIGlzIHNtb290aC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgcGFuIGZyb20gdGhlIGhlYXQgYW5kIHN0aXIgaW4gdGhlIGJhc2lsLiBTZXQgYXNpZGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIHNraWxsZXQsIGhlYXQgMiB0YWJsZXNwb29ucyBvZiBvbGl2ZSBvaWwgb3ZlciBtZWRpdW0taGlnaCBoZWF0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBzYXVzYWdlLCBzaGFsbG90cywgZ2FybGljLCAxLzQgdGVhc3Bvb24gc2FsdCwgYW5kIDEvNCB0ZWFzcG9vbiBwZXBwZXIuIENvb2sgdW50aWwgdGhlIHNhdXNhZ2UgaXMgY29va2VkIHRocm91Z2ggYW5kIHRoZSB2ZWdldGFibGVzIGhhdmUgc29mdGVuZWQsIDggdG8gMTAgbWludXRlcy4gVXNpbmcgYSB3b29kZW4gc3Bvb24sIGJyZWFrIHRoZSBzYXVzYWdlIGludG8gMS8yLWluY2ggcGllY2VzLiBJbmNyZWFzZSB0aGUgaGVhdCB0byBoaWdoLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSB3aW5lIGFuZCBzY3JhcGUgdXAgdGhlIGJyb3duIGJpdHMgdGhhdCBjbGluZyB0byB0aGUgYm90dG9tIG9mIHRoZSBwYW4gd2l0aCBhIHdvb2RlbiBzcG9vbi4gQ29vayB1bnRpbCB0aGUgd2luZSBoYXMgZXZhcG9yYXRlZCwgYWJvdXQgMiBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBwYW4gZnJvbSB0aGUgaGVhdCBhbmQgc2V0IGFzaWRlIHRvIGNvb2wgc2xpZ2h0bHkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHBlYXMsIHJpY290dGEsIGFuZCAxIGN1cCBvZiB0aGUgZm9uZHV0YSBzYXVjZS4gU2Vhc29uIHdpdGggcmVtYWluaW5nIDEvMiB0ZWFzcG9vbiBrb3NoZXIgc2FsdCBhbmQgMS80IHRlYXNwb29uIHBlcHBlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCcmluZyBhIGxhcmdlIHBvdCBvZiBzYWx0ZWQgd2F0ZXIgdG8gYSBib2lsIG92ZXIgaGlnaCBoZWF0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgcGFzdGEgYW5kIGNvb2sgdW50aWwganVzdCB0ZW5kZXIsIDcgdG8gOCBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkRyYWluIGFuZCBzZXQgYXNpZGUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDEzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIGhhbGYgb2YgdGhlIG1hcmluYXJhIHNhdWNlIG92ZXIgdGhlIGJvdHRvbSBvZiB0aGUgcHJlcGFyZWQgYmFraW5nIGRpc2guIFVzaW5nIGEgc21hbGwgc3Bvb24sIGZpbGwgdGhlIG1hbmljb3R0aSBzaGVsbHMgd2l0aCB0aGUgc2F1c2FnZSBmaWxsaW5nIGFuZCBhcnJhbmdlIGluIGEgc2luZ2xlIGxheWVyIGluIHRoZSBiYWtpbmcgZGlzaC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMTRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHRoZSByZW1haW5pbmcgbWFyaW5hcmEgc2F1Y2Ugb24gdG9wIG9mIHRoZSBmaWxsZWQgc2hlbGxzLiBTcG9vbiB0aGUgcmVtYWluaW5nIGZvbmR1dGEgc2F1Y2Ugb24gdG9wIGFuZCBzcHJpbmtsZSB3aXRoIHRoZSBtb3p6YXJlbGxhLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkRyaXp6bGUgd2l0aCBvbGl2ZSBvaWwgYW5kIGJha2UgdW50aWwgYnViYmx5IGFuZCBnb2xkZW4gYnJvd24sIDMwIHRvIDM1IG1pbnV0ZXMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDE2XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJCYWtlZCBNYW5pY290dGkgd2l0aCBTYXVzYWdlIGFuZCBQZWFzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwibHVuY2hcIixcbiAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICBcImRpbm5lclwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1NDI3NzgsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NDI3NzgtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bSBzaXplXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQ2MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkzNjUxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MzgyOCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDExMjU2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAyNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMDM1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExNjc3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgdGhlIG92ZW4gdG8gMzc1XFx1MDBiMEYgdGhlbiBwcmVwYXJlIGEgbGFyZ2UgY2Fzc2Vyb2xlIGRpc2ggKEkgdXNlZCBhIDEgcXVhcnQgZGlzaCkgYnkgZ3JlYXNpbmcgd2l0aCBFYXJ0aCBCYWxhbmNlLCBidXR0ZXIgb3Igbm9uLXN0aWNrIGNvb2tpbmcgc3ByYXkuV2FybSB0aGUgb2xpdmUgb2lsIG92ZXIgbWVkaXVtIGhlYXQgaW4gYSBzYXV0XFx1MDBlOSBwYW4gYW5kIGNvb2sgdGhlIHNoYWxsb3QgYW5kIGdhcmxpYyBmb3IgYSBmZXcgbWludXRlcywgdW50aWwgZnJhZ3JhbnQuVXNpbmcgYSBzdHJhaW5lciBhbmQgYSBwYXBlciB0b3dlbCwgcHJlc3MgdGhlIGV4Y2VzcyB3YXRlciBvdXQgZnJvbSB0aGUgZGVmcm9zdGVkIHNwaW5hY2ggdGhlbiBhZGQgaXQgdG8gdGhlIHBhbi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY2hvcHBlZCBhcnRpY2hva2UgaGVhcnRzIChJIGRpc2NhcmRlZCBhbnkgdG91Z2ggcGFydHMpIGFuZCBhIHBpbmNoIG9mIHNhbHQgJiBwZXBwZXIgdG8gdGhlIHBhbiBhbmQgY29vayBmb3IgZml2ZSBtaW51dGVzLk1lYW53aGlsZSwgY29tYmluZSB0aGUgZWdncywgeW9ndXJ0IGFuZCBjaGVlc2UgaW4gYSBsYXJnZSBib3dsIGFuZCB3aGlzayB0b2dldGhlciB1bnRpbCB3ZWxsLWNvbWJpbmVkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBzcGluYWNoIGFydGljaG9rZSBtaXh0dXJlIGZyb20gdGhlIGhlYXQgYW5kIGFsbG93IHRvIGNvb2wgZm9yIGEgZmV3IG1pbnV0ZXMgYmVmb3JlIGFkZGluZyB0byB0aGUgYm93bCB3aXRoIHRoZSBlZ2dzIGFuZCBjaGVlc2UuTGFzdGx5LCBhZGQgdGhlIGNvb2tlZCBxdWlub2EgYW5kIHN0aXIgdW50aWwgZXZlcnl0aGluZyBpcyBtaXhlZCB0b2dldGhlciB3ZWxsLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIG1peHR1cmUgaW50byB0aGUgY2Fzc2Vyb2xlIGRpc2gsIHNtb290aGluZyB0aGUgdG9wIHdpdGggdGhlIGJhY2sgb2YgYSBzcG9vbi4gU3ByaW5rbGUgYSBmZXcgdGFibGVzcG9vbnMgb2YgY2hlZXNlIG9uIHRvcCBhbmQgY29vayBmb3IgMzAtMzUgbWludXRlcywgdW50aWwgdG9wIGlzIGxpZ2h0IGdvbGRlbiBicm93bi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIHdhcm0gYW5kIGVuam95IVwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJTcGluYWNoIEFydGljaG9rZSBRdWlub2EgQ2Fzc2Vyb2xlXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwibHVuY2hcIixcbiAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICBcImRpbm5lclwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2OTg3MDEsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82OTg3MDEtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkzMDIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIHByZXBhcmUgYmVycnkgbGF5ZXI6IFByZWhlYXQgb3ZlbiB0byAzNzVGLiBDb2F0IHNpeCA4LW91bmNlIHNvdWZmbCBjdXBzIHdpdGggY29va2luZyBzcHJheS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAxIHRlYXNwb29uIHN1Z2FyIHRvIGVhY2ggY3VwIGFuZCBzd2lybCB0byBjb2F0IHRoZSBpbnNpZGUuIERpc3RyaWJ1dGUgcmFzcGJlcnJpZXMgaW4gdGhlIGJvdHRvbSBvZiB0aGUgY3VwcyBhbmQgc3ByaW5rbGUgZWFjaCB3aXRoIDEgdGVhc3Bvb24gY3JtZSBkZSBjYXNzaXMgKG9yIGVhdS1kZS12aWUsIGp1aWNlIG9yIG5lY3RhcikuVG8gcHJlcGFyZSBzb3VmZmxzOiBTdGlyIHJhc3BiZXJyaWVzIGluIGEgc2F1Y2VwYW4gb3ZlciBsb3cgaGVhdCB1bnRpbCB0aGV5IGFyZSBqdWljeSAoZm9yIGZyZXNoKSBvciB0aGF3ZWQgKGZvciBmcm96ZW4pLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdG8gYSBmaW5lIHNpZXZlIHNldCBvdmVyIGEgYm93bC4gV2l0aCBhIHNwb29uLCBwcmVzcyB0aGUgYmVycmllcyB0aHJvdWdoIHRoZSBzaWV2ZSwgYmVpbmcgY2FyZWZ1bCB0byBleHRyYWN0IGFsbCB0aGUgcHVscC4gRGlzY2FyZCB0aGUgc2VlZHMuUmV0dXJuIHRoZSBwdXJlZSB0byB0aGUgc2F1Y2VwYW4uIEJyaW5nIHRvIGEgc2ltbWVyIGFuZCBzdGlyIG92ZXIgbWVkaXVtIGhlYXQgdW50aWwgdmVyeSB0aGljayBhbmQgcmVkdWNlZCB0byAxLzQgY3VwLCBhYm91dCAxMCBtaW51dGVzLiAoUmVkdWNlIHRoZSBoZWF0IGFzIHRoZSBtaXh0dXJlIHRoaWNrZW5zLikgU3RpciBpbiAxIHRhYmxlc3Bvb24gY3JtZSBkZSBjYXNzaXMgKG9yIGVhdS1kZS12aWUsIGp1aWNlIG9yIG5lY3RhcikgYW5kIHNldCBhc2lkZSB0byBjb29sIHNsaWdodGx5LkJlYXQgZWdnIHdoaXRlcyBhbmQgc2FsdCBpbiBhIG1peGluZyBib3dsIHdpdGggYW4gZWxlY3RyaWMgbWl4ZXIgb24gaGlnaCBzcGVlZCB1bnRpbCBzb2Z0IHBlYWtzIGZvcm0uIENvbnRpbnVpbmcgdG8gYmVhdCwgZ3JhZHVhbGx5IGFkZCBzdWdhciBhbmQgYmVhdCB1bnRpbCBzdGlmZiBwZWFrcyBmb3JtLiBXaXRoIGEgcnViYmVyIHNwYXR1bGEsIGZvbGQgYWJvdXQgYSBmb3VydGggb2YgdGhlIGJlYXRlbiB3aGl0ZXMgaW50byB0aGUgcmVzZXJ2ZWQgcmFzcGJlcnJ5IHB1cmVlIHRvIGxpZ2h0ZW4gaXRzIHRleHR1cmUsIHRoZW4gcG91ciB0aGUgbWl4dHVyZSBvdmVyIHRoZSByZW1haW5pbmcgd2hpdGVzLiBHZW50bHkgZm9sZCB0aGUgcHVyZWUgYW5kIHdoaXRlcyB0b2dldGhlciB1bnRpbCBldmVubHkgYmxlbmRlZC4gU3Bvb24gdGhlIHNvdWZmbCBtaXh0dXJlIGludG8gdGhlIGN1cHMsIHNwcmVhZGluZyB0byB0aGUgZWRnZXMgb2YgdGhlIGN1cHMuU2V0IHRoZSBjdXBzIG9uIGEgYmFraW5nIHNoZWV0IGFuZCBiYWtlIGZvciAxMCBtaW51dGVzLCBvciB1bnRpbCBsaWdodGx5IGJyb3duZWQgb24gdGhlIHRvcC4gRHVzdCB3aXRoIGNvbmZlY3Rpb25lcnMgc3VnYXIgYW5kIHNlcnZlIGltbWVkaWF0ZWx5LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJEb3VibGUgUmFzcGJlcnJ5IFNvdWZmbFxcdTAwZTlzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2lkZSBkaXNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDUxNTAyMSxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzUxNTAyMS01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDkwNDAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInN0aWNrc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTM1NCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZSBjYW5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkwNzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNDE4MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxODYxNyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyMTM1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiR3JlYXNlIGEgOVxcdTAwZDcxMyBwYW4uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdG9nZXRoZXIgZ3JhaGFtIGNyYWNrZXIgY3J1c3QgYW5kIDFcXHUwMGJjIHN0aWNrcyBvZiBidXR0ZXIuIFByZXNzIG91dCBpbiBwYW4uSW4gbWl4ZXIsIG1peCB0b2dldGhlciBwb3dkZXJlZCBzdWdhciwgMiBzdGlja3Mgb2YgYnV0dGVyLCB2YW5pbGxhLCBhbmQgZWdncy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgb24gdG9wIG9mIGdyYWhhbSBjcmFja2VyIGNydXN0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIG91dCBjcnVzaGVkIHBpbmVhcHBsZSBvbiB0b3Agb2Ygc3VnYXIgbWl4dHVyZSwgdGhlbiBhZGQgc2xpY2VkIGJhbmFuYXMuIEkgYWRkZWQgY2hlcnJpZXMgbmV4dCBmb3IgZnVuLkluIG1peGVyLCBhZGQgaGVhdnkgY3JlYW0gYW5kIG1peCBvbiBtZWRpdW0gaGlnaCB1bnRpbCBzb2Z0IHBlYWsuIFdoZW4gYWxtb3N0IGNvbXBsZXRlZCwgYWRkIFxcdTAwYmQgY3VwIHN1Z2FyLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHdoaXBwZWQgY3JlYW0gb3ZlciB0b3Agb2YgYmFuYW5hcy4gUmVmcmlnZXJhdGUgZm9yIGF0IGxlYXN0IDIgaG91cnMsIChJIHdhaXRlZCAxIGhvdXJzIGFuZCBpdCB3YXMgZmluZS4pRW5qb3khXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkEgQ2FrZSBUbyBXYXJtIEFueSBIZWFydCBcXHUyMDEzIEJhbmFuYSBTcGxpdCBDYWtlXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICBcInN0YXJ0ZXJcIixcbiAgICAgIFwic25hY2tcIixcbiAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTk5MDQ0LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvOTk5MDQ0LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTAzNyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE2MDU3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEyNTYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkxNTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyOTEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV29ya2luZyBpbiBhIGNvdXBsZSBvZiBiYXRjaGVzLCByb3VnaGx5IGNob3AgdGhlIGNoaWNrcGVhcyBhbmQgcGxhY2UgaW4gYSBib3dsLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBtaW5jZWQgaGVyYnMgYW5kIHNjYWxsaW9ucyB0byB0aGUgY2hpY2twZWFzIGFuZCBnaXZlIGEgcXVpY2sgdG9zcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgc2VwYXJhdGUgYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIG1heW8sIGxlbW9uIGp1aWNlLCBhbmQgb2xpdmUgb2lsLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRoZSBhdm9jYWRvIGluIGhhbGYsIHJlbW92ZSB0aGUgcGl0LCBhbmQgY3V0IGVhY2ggaGFsZiBpbnRvICBjdWJlcyAoc2VlIG5vdGUpLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgaW4gdGhlIGJvd2wgYW5kIHBvdXIgdGhlIG1heW8gbWl4dHVyZSBvdmVyIHRoZSBjaGlja3BlYXMgYW5kIGF2b2NhZG8uIFRvc3MgdW50aWwgd2VsbCBjb21iaW5lLiBUYXN0ZSBhbmQgYWRkIHNhbHQvcGVwcGVyIHRvIHlvdXIgcHJlZmVycmVkIHRhc3RlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgb24gYSBzYW5kd2ljaCBvciB3aXRoIGNyYWNrZXJzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJBdm9jYWRvIENoaWNrcGVhIFNhbGFkXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2FsYWRcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzk4MDcwLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzk4MDcwLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MjM2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTA5NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTA1NCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1lbHQgYnV0dGVyIGFuZCBicnVzaCBzb21lIG9mIHRoZSBidXR0ZXIgYXJvdW5kIHRoZSBzbG93IGNvb2tlci5Vc2luZyBhIHN0YW5kIG1peGVyLCBjb21iaW5lIGZsb3VyLCAxLWN1cCBzdWdhciwgYmFraW5nIHBvd2RlciwgYW5kIHNhbHQuIFRoZW4sIGFkZCBtaWxrIGFuZCByZW1haW5pbmcgbWVsdGVkIGNvb2xlZCBidXR0ZXIsIG1peGluZyBqdXN0IHVudGlsIGRyeSBpbmdyZWRpZW50cyBhcmUgbW9pc3RlbmVkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB0aGUgYmF0dGVyIGluIHRoZSBzbG93IGNvb2tlciBhbmQgcGxhY2UgdGhlIGZyb3plbiBwZWFjaGVzIG9uIHRvcC5Db29rIG9uIGhpZ2ggZm9yIDMgaG91cnMgd2l0aCBsaWQgb24gdG9wLiBPbmNlIHRoZSBjb2JibGVyIGlzIGRvbmUsIGRpdmlkZSBhbmQgc2VydmUgY29iYmxlciB3YXJtIHdpdGggaWNlIGNyZWFtIGFuZCB3aGlwcGVkIGNyZWFtIG9uIHRvcC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiU2xvdyBDb29rZXIgUGVhY2ggQ29iYmxlclwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1NzQzMTcsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NzQzMTctNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMi41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiVFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTA4NjIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic3RyaXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA1MTE0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMTksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAyNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIxMTUyOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQyNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMTAwOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIG1peGluZyBib3dsLCBhZGQgMSBjdXAgd2FybSB3YXRlciwgMSBwYWNrIHJhcGlkIG9yIHF1aWNrIHllYXN0LCAxIHQgc3VnYXIgMS8yIHQgc2FsdCBhbmQgMSBUIG9saXZlIG9pbC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB3ZWxsLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIDIgMS8yIGN1cHMgZmxvdXIgYW5kIG1peC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAgYSBsaXR0bGUgbW9yZSBmbG91ciBpZiB0b28gc3RpY2t5IGJ1dCB5b3UgYXJlIG1ha2luZyBhIGxpZ2h0IGRvdWdoIG5vdCBhIGhlYXZ5IGJyaWNrLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ292ZXIgYW5kIGxldCByaXNlIHVudGlsIGRvdWJsZSBpbiBzaXplLiBBYm91dCAzMC00MCBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpbGUgZG91Z2ggaXMgcmlzaW5nLCBwcmVwIGFueSB0b3BwaW5ncy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiAzNzUgY29udmVjdGlvbi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCB0aGUgZG91Z2ggb24gYSB3ZWxsIG9pbGVkIGxhcmdlIHBpenphIHBhbiBvciBjb29raWUgc2hlZXQuIE1lbHQgMiBUIGJ1dHRlciBpbiBhIG1pY3Jvd2F2ZSBmb3IgMTUtMjAgc2Vjb25kcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCAyIHQgZ2FybGljIHBvd2RlciBpbiB0aGUgYnV0dGVyIGFuZCBzcHJlYWQgdGhpbmx5IG92ZXIgdGhlIGRvdWdoLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG9wIHdpdGggY2hlZXNlcyBhbmQgb3RoZXIgdG9wcGluZ3Mgb2YgY2hvaWNlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgaW4gb3ZlbiBmb3IgMjAgdG8gMjUgbWludXRlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMTFcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIjQgQ2hlZXNlIFdoaXRlIFBpenphXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICBcInN0YXJ0ZXJcIixcbiAgICAgIFwic25hY2tcIixcbiAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjczMzM3LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjczMzM3LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTg5OTgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDgwMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDYuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkxMTYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDksXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIG1peHR1cmUgaW50byBwcmVwYXJlZCBwYW4sIHVzaW5nIHlvdXIgaGFuZHMgcHJlc3MgdG8gZmxhdHRlbi4gU2V0IGFzaWRlIGZvciAxLTIgaG91cnMgdG8gc2V0LkluIGEgc2VwYXJhdGUgYm93bCwgY29tYmluZSBwb3dkZXJlZCBzdWdhciB3aXRoIG1pbGsgYW5kIHN0aXIgdG8gY29tYmluZS4gVXNpbmcgYSBzcG9vbiwgZHJpenpsZSBnbGF6ZSBvbiB0b3Agb2YgY2VyZWFsIGJhcnMgYW5kIGR1c3Qgd2l0aCBjb2xvcmVkIHN1Z2FyIG9yIHNwcmlua2xlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiQ2VyZWFsIE1hcnNobWFsbG93IEJhcnNcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzY0MTg0LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzY0MTg0LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNjE1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTYxNTgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBoYXJkLWJvaWwgdGhlIGVnZ3MsIHBsYWNlIHRoZSByYXcgZWdncyBhdCB0aGUgYm90dG9tIG9mIGEgbGFyZ2UgcG90LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB3YXRlciBpbiB0aGUgcG90IHVudGlsIHRoZSB3YXRlciBpcyAxLTIgaW5jaGVzIG92ZXIgdGhlIHRvcCBvZiB0aGUgZWdncy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBwb3Qgb24gdGhlIHN0b3ZlIHRvcCB1bmNvdmVyZWQgYW5kIHR1cm4gdGhlIGJ1cm5lciB0byBoaWdoIGhlYXQuIEJyaW5nIHRoZSB3YXRlciBpbiB0aGUgcG90IHRvIGEgYm9pbC4gV2hlbiB0aGUgd2F0ZXIgY29tZXMgdG8gYSBmdWxsIGJvaWwsIGNvdmVyIHRoZSBwb3Qgd2l0aCBhIGxpZCBhbmQgdHVybiBvZmYgdGhlIGhlYXQgdG8gdGhlIGJ1cm5lci4gTGVhdmUgdGhlIHBvdCBvbiB0aGUgYnVybmVyLCBjb3ZlcmVkLCBmb3IgMTIgbWludXRlcy5XaGlsZSB0aGUgZWdncyBzaXQgaW4gdGhlIGNvdmVyZWQgcG90LCBmaWxsIGEgbWl4aW5nIGJvd2wgIHdheSB3aXRoIGljZSB3YXRlci4gV2hlbiB0aGUgdGltZSBpcyB1cCBvbiB0aGUgZWdncywgdXNlIGEgc2xvdHRlZCBzcG9vbiB0byByZW1vdmUgdGhlbSBmcm9tIHRoZSBwb3QgYW5kIHRyYW5zZmVyIHRoZW0gdG8gdGhlIGJvd2wgb2YgaWNlIHdhdGVyIHRvIHN0b3AgdGhlbSBmcm9tIGNvb2tpbmcuIExlYXZlIHRoZW0gaW4gdGhlIGJvd2wgb2YgaWNlIHdhdGVyIGZvciBhIGZldyBtaW51dGVzIHVudGlsIGZ1bGx5IGNvbGQuUGVlbCB0aGUgZWdncyB1bmRlciBjb2xkIHJ1bm5pbmcgd2F0ZXIgKEl2ZSBmb3VuZCBpdHMgbXVjaCBlYXNpZXIpLiBTbGljZSB0aGUgZWdncyBpbiBoYWxmIGxlbmd0aHdpc2UgYW5kIHJlbW92ZXRoZSB5b2xrcyBpbnRvIGEgbWl4aW5nIGJvd2wuIFVzZSBhIGZvcmsgdG8gbWFzaCB0aGUgeW9sa3MgYXMgbXVjaCBhcyB5b3UgY2FuLiBJIHVzdWFsbHkgYWRkIGEgbGl0dGxlIHNwbGFzaCBvZiB3YXRlciB0byB0aGUgbWFzaGVkIGVnZyB5b2xrcyBhbmQgbWFzaCBhZ2Fpbi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgYmxhY2sgcGVwcGVyLCBodW1tdXMsIGhvdCBzYXVjZSBhbmQgbXVzdGFyZCBhbmQgc3RpciB0b2dldGhlciB1bnRpbCB3ZWxsIGNvbWJpbmVkIGFuZCBtb3N0bHkgc21vb3RoLiBTcG9vbiBvciBwaXBlIHRoaXMgZmlsbGluZyBiYWNrIGludG8gdGhlIGhvbGxvd3Mgb2YgdGhlIGVnZyB3aGl0ZXMuIFNwcmlua2xlIHBhcHJpa2Egb3ZlciB0aGUgdG9wcyBvZiB0aGUgZWdncyBhbmQgc2VydmUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkh1bW11cyBEZXZpbGVkIEVnZ3NcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA2NDAyLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvMjA2NDAyLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxNyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMjE0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTIwNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNi44LFxuICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTIxNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5MjE2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTIxNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0b2dldGhlciBldmFwb3JhdGVkIG1pbGssIHB1ZGRpbmcgbWl4LCBhbmQgemVzdCBpbiBhIGJvd2wgZm9yIDIgbWludXRlcyBvciB1bnRpbCBtaXh0dXJlIGlzIHRoaWNrZW5lZC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJlYXQgY3JlYW0gY2hlZXNlIGFuZCB2YW5pbGxhIGF0IG1lZGl1bSBzcGVlZCB3aXRoIGFuIGVsZWN0cmljIG1peGVyIHVudGlsIGZsdWZmeS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBvcmFuZ2UganVpY2UgY29uY2VudHJhdGUsIGJlYXRpbmcgdW50aWwgc21vb3RoOyBhZGQgZXZhcG9yYXRlZCBtaWxrIG1peHR1cmUsIGFuZCBiZWF0IHVudGlsIGJsZW5kZWQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIGludG8gY3J1c3QuIENvdmVyIGFuZCBjaGlsbCA4IGhvdXJzIG9yIHVudGlsIGZpcm0uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb21iaW5lIGNyZWFtIGFuZCBjb25mZWN0aW9uZXIncyBzdWdhciBpbiBhIGJvd2wgYW5kIHdoaXAgd2l0aCBhIHdoaXNrIHVudGlsIGl0IGhvbGRzIHNvZnQgcGVha3MuIERvbGxvcCBvciBwaXBlIGVhY2ggc2xpY2Ugd2l0aCB3aGlwcGVkIGNyZWFtLCBhbmQgZ2FybmlzaCB3aXRoIGNhbmRpZWQgemVzdCBvciBjYW5keSBpZiBkZXNpcmVkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJDcmVhbXNpY2xlIFBpZVwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0NDY1NzcsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy80NDY1NzctNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDEyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMDUyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBiYWNvbiBpbiBhIGxhcmdlLCBkZWVwIHNraWxsZXQuIENvb2sgb3ZlciBtZWRpdW0gaGlnaCBoZWF0IHVudGlsIHRoZSBmYXQgYmVnaW5zIHRvIHJlbmRlci4gU3RpciBpbiBvbmlvbnMgYW5kIGdhcmxpYzsgbGV0IGNvb2sgZm9yIDEgbWludXRlLiBTdGlyIGluIGJlYW5zIGFuZCB3YXRlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCB0aGUgYmVhbnMgY29vayB1bnRpbCB0aGUgd2F0ZXIgaGFzIGV2YXBvcmF0ZWQgYW5kIHRoZSBiZWFucyBhcmUgdGVuZGVyLiBJZiB0aGUgYmVhbnMgYXJlIG5vdCB0ZW5kZXIgb25jZSB0aGUgd2F0ZXIgaGFzIGV2YXBvcmF0ZWQsIGFkZCBhIHNtYWxsIGFtb3VudCBtb3JlIHdhdGVyIGFuZCBsZXQgdGhlbSBjb29rIHVudGlsIHRlbmRlci4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyICh0byB0YXN0ZSkgYW5kIHNlcnZlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJTbW90aGVyZWQgR3JlZW4gQmVhbnNcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTc2OTA2LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTc2OTA2LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE5NTksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkyNTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkyNTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQzNDA4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTY3NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic3ByaWdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMjE1NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIGJvd2wgYWRkIHRoZSBwZWFyIGp1aWNlIGFuZCB2aW5lZ2FyLiBXaGlsZSB3aGlza2luZywgc2xvd2x5IHN0cmVhbSBpbiB0aGUgb2xpdmUgb2lsLiBTY3JhcGUgdGhlIGxlYXZlcyBvZmYgb2YgdHdvIHNwcmlncyBvZiB0aHltZSBhbmQgYWRkIGluIHRoZSBibGFjayBwZXBwZXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0byBjb21iaW5lXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBc3NlbWJsZSByb21haW5lIGxlYXZlcyBhbmQgdG9wIHdpdGggc2xpY2VkIHBlYXIsIHNoYWxsb3QsIHRvYXN0ZWQgd2FsbnV0cywgYmx1ZSBjaGVlc2UgYW5kIHNlYXNvbiB3aXRoIHNlYSBzYWx0IHRvIHRhc3RlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRHJpenpsZSB3aXRoIGRlc2lyZWQgYW1vdW50IG9mIHRoZSBwZWFyIHZpbmFpZ3JldHRlIGFuZCBlbmpveSFcIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiUGVhciAmIFdhbG51dCBTYWxhZCB3aXRoIGEgUGVhciBWaW5haWdyZXR0ZVwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNhbGFkXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDUwNDIxOCxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzUwNDIxOC01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDExNjkzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImNhbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMTI0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAxMixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTkxMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQ3NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDaG9wIGFsbCB0aGUgdmVnZ2llcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIHRoZSBvbmlvbiBhbmQgZ2FybGljIGluIGEgbGFyZ2Ugc2tpbGxldC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiB0aGUgY2Fycm90cyBhbmQgc2F1dGUgZm9yIGEgZmV3IG1pbnV0ZXMsIGNvdmVyaW5nIHRvIGNvb2sgZm9yIGFib3V0IDUgbWludXRlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiB0aGUgb3RoZXIgdmVnZ2llcyBhbmQgc2Vhc29uaW5ncyBhbmQgbGV0IGl0IGNvb2sgdW50aWwgdGhlIHZlZ2dpZXMgYXJlIHRlbmRlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIGhvdCBvdmVyIGNvcm5icmVhZCB3aXRoIHNocmVkZGVkIGNoZWVzZSBhbmQgc291ciBjcmVhbS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiTWV4aWNhbiBWZWdldGFibGVzIG9uIENvcm5icmVhZFwiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0NDUxOTYsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy80NDUxOTYtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA2MTUwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIyMDQ0NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBub25zdGljayBza2lsbGV0IGNvYXRlZCB3aXRoIGNvb2tpbmcgc3ByYXksIHNhdXRlIG9uaW9uIGFuZCBncmVlbiBwZXBwZXIgZm9yIDMtNCBtaW51dGVzIG9yIHVudGlsIGNyaXNwLXRlbmRlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgdGhlIGJhcmJlY3VlIHNhdWNlLCBob25leSwgYmFzaWwsIGdhcmxpYyBwb3dkZXIgYW5kIHBlcHBlcjsgcG91ciBvdmVyIHZlZ2V0YWJsZXMuIEJyaW5nIHRvIGEgYm9pbCBvdmVyIG1lZGl1bS1oaWdoIGhlYXQsIHN0aXJyaW5nIGNvbnN0YW50bHkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgc2hyaW1wOyBjb29rIGFuZCBzdGlyIGZvciAzLTUgbWludXRlcyBvciB1bnRpbCBzaHJpbXAgdHVybiBwaW5rLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgd2l0aCByaWNlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJCYXJiZWN1ZSBTaHJpbXAgU3Rpci1GcnlcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJsdW5jaFwiLFxuICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgIFwiZGlubmVyXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDc1OTUzNCxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc1OTUzNC01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNjAxOCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiVGJzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA5OTIyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIxODM2NCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCI4LWluY2hcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkxNjAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiVGJzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTA2MTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDQ1MFxcdTAwYjBGLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSGVhdCBvaWwgaW4gc2F1Y2VwYW4gb3ZlciBtZWRpdW0taGlnaCBoZWF0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIG9uaW9uLCBhbmQgY29vayA1IG1pbnV0ZXMsIG9yIHVudGlsIHRyYW5zbHVjZW50LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGdhcmxpYyBhbmQgY3VtaW4sIGFuZCBjb29rIDEgbWludXRlIG1vcmUuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBvbmlvbiBtaXh0dXJlIGluIGJsZW5kZXIgd2l0aCBiZWFucywgY2hpcG90bGUgY2hpbGUsIGJyb3duIHN1Z2FyLCBhbmQgMyBUYnMuIHdhdGVyLiBCbGVuZCB1bnRpbCBzbW9vdGguIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIDIgdG9ydGlsbGFzIGVhY2ggb24gMiBiYWtpbmcgc2hlZXRzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIGJlYW4gbWl4dHVyZSBvbiB0b3J0aWxsYXMsIGFuZCBiYWtlIDUgdG8gNyBtaW51dGVzLCBvciB1bnRpbCBlZGdlcyBiZWNvbWUgZ29sZGVuLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG9zcyBzbGF3IGluIGJvd2wgd2l0aCBjaWxhbnRybyBhbmQgbGltZSBqdWljZS4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyLiBUb3AgZWFjaCBjbGF5dWRhIHdpdGggc2xhdywgYW5kIGN1dCBpbnRvIHRyaWFuZ2xlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiQ2xheXVkYXNcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTg4ODkzLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTg4ODkzLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE0NTcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiaGFuZGZ1bHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjY4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDIwMDA1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlIGNsb3Zlc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTA1MTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBzaXplZCBwb3QgY29tYmluZSB0aGUgZmFycm8gd2l0aCB0aGUgNSBjdXBzIG9mIHdhdGVyIGFuZCAyIHRlYXNwb29ucyBzYWx0LiBCcmluZyB0byBhIGJvaWwsIHRoZW4gbG93ZXIgdG8gYSBzaW1tZXIgYW5kIGNvb2sgZm9yIGFib3V0IDI1IG1pbnV0ZXMgZm9yIHNlbWktcGVhcmxlZCBmYXJybyBhbmQgNTAgbWludXRlcyBmb3Igd2hvbGUgZmFycm8uIFRoZSBmYXJybyBpcyBkb25lIHdoZW4gdGhlIGdyYWlucyBhcmUgdGVuZGVyIGFuZCBhbGwgdGhlIHdhdGVyIGhhcyBiZWVuIGFic29yYmVkLiBTZXQgYXNpZGUuV2hpbGUgdGhlIGZhcnJvIGlzIGNvb2tpbmcsIGNvbWJpbmUgdGhlIHNoaWl0YWtlIG11c2hyb29tcyB3aXRoIDEgY3VwIG9mIGJvaWxpbmcgd2F0ZXIuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgc2l0IGZvciAxNSBtaW51dGVzIG9yIGhvd2V2ZXIgbG9uZyB0aGUgcGFja2FnZSBpbnN0cnVjdGlvbnMgc2F5IGlzIG5lZWRlZCB0byByZWNvbnN0aXR1dGUgdGhlIG11c2hyb29tcy4gV2hlbiBkb25lLCByZW1vdmUgdGhlIG11c2hyb29tcyBmcm9tIHRoZSB3YXRlciBhbmQgY2hvcCwgcmVzZXJ2aW5nIHRoZSBsaXF1aWQuQWJvdXQgMm8gbWludXRlcyBiZWZvcmUgdGhlIGZhcnJvIGlzIGRvbmUgd2FybSB0aGUgb2xpdmUgb2lsIGluIGEgbGFyZ2Ugc2tpbGxldC4gQ29vayB0aGUgb25pb24sIHN0aXJyaW5nIGZyZXF1ZW50bHksIGZvciBhYm91dCA1IG1pbnV0ZXMgb3IgdW50aWwgdHJhbnNsdWNlbnQgYW5kIGJlZ2lubmluZyB0byBnZXQgc29tZSBjb2xvci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgZ2FybGljIGFuZCBjcnVzaGVkIHJlZCBwZXBwZXIgZmxha2VzIChpZiB1c2luZyksIGNvb2sgMSBtaW51dGUgbG9uZ2VyLCB1bnRpbCBmcmFncmFudC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY2hvcHBlZCBtdXNocm9vbXMsIG11c2hyb29tIGJyb3RoIGFuZCBhIGZldyBiaWcgaGFuZGZ1bHMgb2YgYmFieSBzcGluYWNoLiBDb29rLCBzdGlycmluZyBmcmVxdWVudGx5LCB1bnRpbCB0aGUgc3BpbmFjaCBoYXMgd2lsdGVkIGFuZCBtb3N0IG9mIHRoZSBsaXF1aWQgaGFzIGV2YXBvcmF0ZWQuIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlciB0byB0YXN0ZS5TdGlyIGluIHRoZSBmYXJybywgbWl4aW5nIHdpdGggYSBsYXJnZSBzcG9vbiB0byBjb21iaW5lIHdlbGwuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSB0b3BwZWQgd2l0aCBzaHJlZGRlZCBQYXJtZXNhbiBjaGVlc2UuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkZhcnJvIHdpdGggU2hpaXRha2UgTXVzaHJvb21zIGFuZCBCYWJ5IFNwaW5hY2hcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJsdW5jaFwiLFxuICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgIFwiZGlubmVyXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNTU4MSxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYxNTU4MS01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNjksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTI1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMTU2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTE2NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0MDI1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTExOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJoZWFkXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTExMixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJoZWFkXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTg5NjIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBtYXlvLCBjaGlsaSBzYXVjZSBhbmQgc3JpcmFjaGEsIHRoZW4gc2V0IGl0IGFzaWRlIHVudGlsIHJlYWR5IHRvIHVzZS5Ub3NzIHRoZSBzaHJpbXAgd2l0aCB0aGUgY29ybnN0YXJjaCB1bnRpbCBldmVubHkgY29hdGVkLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSGVhdCB0aGUgY2Fub2xhIG9pbCBpbiBhIGxhcmdlIHNraWxsZXQgb3ZlciBoaWdoIGhlYXQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHNocmltcCBhbmQgY29vayB1bnRpbCBpdCBqdXN0IHR1cm5zIHBpbmsgYW5kIG9wYXF1ZSwgYWJvdXQgMyBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIHNocmltcCB0byBhIGxhcmdlIGJvd2wgYW5kIHRvc3Mgd2l0aCB0aGUgbWF5byBtaXh0dXJlLkluIGEgc2VwYXJhdGUgYm93bCwgYWRkIHRoZSBjYWJiYWdlIGFuZCBsZXR0dWNlLiBUb3NzIHdpdGggdGhlIG9saXZlIG9pbCwgdmluZWdhciBhbmQgaG9uZXkgdW50aWwgd2VsbCBjb2F0ZWQuIFRvc3MgdGhlIGNpbGFudHJvIGluLiBUbyBzZXJ2ZSB0aGUgc2hyaW1wLCBtaXggd2l0aCB0aGUgc2xhdyBhbmQgZ2FybmlzaCB0aGUgZW50aXJlIHRoaW5nIHdpdGggY2hpdmVzLiBFbmpveSFcIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiQmFuZyBCYW5nIFNocmltcCB3aXRoIE5hcGEgQ2FiYmFnZSBTbGF3XCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwibHVuY2hcIixcbiAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICBcImRpbm5lclwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA3NjQ4MTAsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83NjQ4MTAtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDAzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDQyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMzU3MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMi43NSxcbiAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDM1MEYuU3ByYXkgYmFraW5nIHNoZWV0cyB3aXRoIGNvb2tpbmcgc3ByYXkgb3Igc3ByZWFkIGEgdGhpbiBsYXllciBvZiBvbGl2ZSBvaWwgb3ZlciB0aGVtLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IGFsbCBvZiB0aGUgaW5ncmVkaWVudHMgdG9nZXRoZXIgdmVyeSB3ZWxsIC0tIHlvdSdsbCBuZWVkIHRvIHVzZSB5b3VyIGhhbmRzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUm9sbCBpbnRvIGJhbGxzIHRoZSBzaXplIG9mIGEgZ29sZiBiYWxsLCBtb2xkaW5nIHRoZW0gZmlybWx5IHRvZ2V0aGVyIHdpdGhvdXQgcGFja2luZyB0aGVtLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIGJhbGxzIG9uIGJha2luZyBzaGVldHMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciAzMCB0byA0MCBtaW51dGVzLCBvciB1bnRpbCB0aGUgY2VudGVyIHJlZ2lzdGVycyAxNjBGIG9uIGEgbWVhdCB0aGVybW9tZXRlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIG92ZW4gYW5kIHVzZSBhcyBuZWVkZWQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkhvbWVtYWRlIEl0YWxpYW4gTWVhdGJhbGxzXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICBcInN0YXJ0ZXJcIixcbiAgICAgIFwic25hY2tcIixcbiAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzk5NzMyLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzk5NzMyLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMTEyNTAsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTE0MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJyaWJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDUwNjQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAxNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTE2MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDkxNTksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQ2NDEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDk4OTkxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxMTI4MixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTMxNixcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBib3dsLCBtaXggdGhlIGZpcnN0IHNpeCBpbmdyZWRpZW50cy4gU3RpciBpbiAgY2hpY2tlbiwgY2VsZXJ5IGFuZCBvbmlvbi4gUmVmcmlnZXJhdGUsIGNvdmVyZWQsIGF0IGxlYXN0IDEgaG91ci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIHNlcnZlLCBzdGlyIHN0cmF3YmVycmllcyBpbnRvIGNoaWNrZW4gbWl4dHVyZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIG92ZXIgbGV0dHVjZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiQ3VycmllZCBTdHJhd2JlcnJ5IENoaWNrZW4gU2FsYWRcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzYWxhZFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MjEyMTMsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MjEyMTMtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDEyMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTA5MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAxNyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMjYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDExODIxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDIxOCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwMDExNDU3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTUyOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIG9uaW9uIGluIDEgdGJzcC4gT2xpdmUgT2lsIGZvciBhIGZldyBtaW51dGVzIHVudGlsIHNvZnQuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZ2FybGljIGFuZCBjb29rIGZvciA0NS02MCBzZWNvbmRzLCB0aGVuIGFkZCBzcGluYWNoLiBQdXQgYWxsIHRoZSBzcGljZXMgaW4gdGhlcmUgZXhjZXB0IGZvciAxLzQgdHNwLiBvZiB0aGUgbGlxdWlkIHNtb2tlLCB0aHltZSwgYW5kIHJvc2VtYXJ5LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IHdpbHQgYW5kIHRoZW4gYWRkIGNyZWFtIGNoZWVzZS4gU2V0IGFzaWRlLlByZWhlYXQgb3ZlbiB0byAzNTBGLkxheSBwb3JrIHRlbmRlcmxvaW4gb24gY3V0dGluZyBib2FyZCBhbmQgY292ZXIgd2l0aCBzYXJhbiB3cmFwLCB0aGVuIHBvdW5kIHdpdGggbWVhdCBoYW1tZXIgdW50aWwgZmxhdCAtIGN1dCB0aGUgdW5ldmVuIHNpZGVzIHNvIGl0IGdvZXMgc3F1YXJlLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIsIHRoZW4gMS80IHRzcC4gbGlxdWlkIHNtb2tlLk1ha2UgYSBiYWNvbiB3ZWF2ZSB0aGUgc2FtZSBzaXplIGFzIHRoZSBwb3JrIHRlbmRlcmxvaW4gc3F1YXJlLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHNwaW5hY2ggYW5kIGNyZWFtIGNoZWVzZSBhbGwgb3ZlciB0aGUgcG9yayB0ZW5kZXJsb2luLCB0aGVuIGxheSB0ZW5kZXJsb2luIG9uIHRvcCBvZiBiYWNvbi4gU2xpY2UgdGhlIHBpZWNlcyBvZiBiYWNvbiB0aGF0IHBva2Ugb3V0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUm9sbCBpdCB1cC4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyIGFuZCB0aGUgcmVtYWluaW5nIDEvNCB0c3AuIG9mIHRoeW1lIGFuZCByb3NlbWFyeS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0b290aHBpY2tzIHdoZXJlIHRoZSBiYWNvbiBlbmRzIGFyZSBzbyB0aGF0IGl0IGRvZXNuJ3QgZmFsbCBhcGFydC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDc1IG1pbnV0ZXMgb3IgdW50aWwgdGhlcm1vbWV0ZXIgcmVhZHMgMTQwRi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIGJyb2Njb2xpLCBwZXBwZXJzLCBhbmQgdG9tYXRvZXMgaW4gdGhlIHJlbWFpbmluZyBmYXQgaW4gdGhlIGJvdHRvbSBvZiB0aGUgcGFuIG9mIHRoZSBwb3JrIHRlbmRlcmxvaW4gd2hpbGUgaXQgcmVzdHMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkJhY29uIFdyYXBwZWQgU3R1ZmZlZCBQb3JrIFRlbmRlcmxvaW5cIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJsdW5jaFwiLFxuICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgIFwiZGlubmVyXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxMTg1OCxcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYxMTg1OC01NTZ4MzcwLmpwZ1wiLFxuICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE4MzcyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkxNTcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gdG8gMzUwRi4gTGluZSBhIDh4OC1pbmNoIGJha2luZyBwYW4gd2l0aCBmb2lsIGFuZCBzcHJheSB3aXRoIG5vbi1zdGljayBjb29raW5nIHNwcmF5LkluIGEgbWVkaXVtIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBmbG91ciwgYmFraW5nIHBvd2RlciwgYmFraW5nIHNvZGEsIGFuZCBzYWx0LkluIHRoZSBib3dsIG9mIGEgc3RhbmQgbWl4ZXIgZml0dGVkIHdpdGggdGhlIHBhZGRsZSBhdHRhY2htZW50IG9yIGluIGEgbGFyZ2UgYm93bCB3aXRoIGFuIGVsZWN0cmljIG1peGVyLCBjb21iaW5lIHRoZSBtZWx0ZWQgYnV0dGVyIGFuZCBicm93biBzdWdhci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBlZ2cgYW5kIHZhbmlsbGEsIG1peGluZyB1bnRpbCB3ZWxsIGNvbWJpbmVkLiBHcmFkdWFsbHkgYWRkIGluIGRyeSBpbmdyZWRpZW50cyBhbmQgbWl4IHVudGlsIGp1c3QgY29tYmluZWQuIFN0aXIgaW4gY2hvY29sYXRlIGNoaXBzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIGhhbGYgdGhlIGRvdWdoIGludG8gdGhlIHByZXBhcmVkIHBhbi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBSb2xvcyBldmVubHkgb250byB0aGUgY29va2llIGRvdWdoLiBVc2luZyBhIHNtYWxsIGNvb2tpZSBzY29vcCwgZXZlbmx5IGRpc3RyaWJ1dGUgdGhlIHJlc3Qgb2YgdGhlIGNvb2tpZSBkb3VnaCBvbiB0b3Agb2YgdGhlIFJvbG9zLiBUaGVyZSBpcyBuZWVkIHRvIHNwcmVhZCBldmVubHkgb3ZlciB0aGUgUm9sb3MsIHRoaXMgd2lsbCBoYXBwZW4gbmF0dXJhbGx5IGR1cmluZyB0aGUgYmFraW5nIHByb2Nlc3MuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGluIHRoZSBwcmVoZWF0ZWQgb3ZlbiB1bnRpbCBhIHRvb3RocGljayBpbnNlcnRlZCBpbiB0aGUgY2VudGVyIGNvbWVzIG91dCBjbGVhbiwgYWJvdXQgMjAgdG8gMjUgbWludXRlcy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBwYW4gdG8gd2lyZSByYWNrIGFuZCBjb29sIGNvbXBsZXRlbHkuSWYgZGVzaXJlZCwgZHJpenpsZSB3aXRoIG1lbHRlZCBjaG9jb2xhdGUgb3IgY2FyYW1lbCBiZWZvcmUgc2VydmluZy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiUm9sbyBDb29raWUgQmFyc1wiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcInNpZGUgZGlzaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5OTExMzYsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy85OTExMzYtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTg4NzEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA2MTY4LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDU1MDYyLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgY2hpY2tlbiBpbiBhIDMtcXQuIHNsb3cgY29va2VyLiBUb3NzIHdpdGggMiB0YWJsZXNwb29ucyBob3Qgc2F1Y2UgYW5kIHBlcHBlcjsgY29vaywgY292ZXJlZCwgb24gbG93IHVudGlsIHRlbmRlciwgMy00IGhvdXJzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGNoaWNrZW47IGRpc2NhcmQgY29va2luZyBqdWljZXMuIEluIGEgc21hbGwgc2F1Y2VwYW4sIGNvbWJpbmUgYnV0dGVyLCBob25leSBhbmQgcmVtYWluaW5nIGhvdCBzYXVjZTsgY29vayBhbmQgc3RpciBvdmVyIG1lZGl1bSBoZWF0IHVudGlsIGJsZW5kZWQuIFNocmVkIGNoaWNrZW4gd2l0aCB0d28gZm9ya3M7IHN0aXIgaW50byBzYXVjZSBhbmQgaGVhdCB0aHJvdWdoLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgb24gcm9sbHMgd2l0aCBvcHRpb25hbCBpbmdyZWRpZW50cyBhcyBkZXNpcmVkLiBGcmVlemUgb3B0aW9uOiBGcmVlemUgY29vbGVkIGNoaWNrZW4gbWl4dHVyZSBpbiBmcmVlemVyIGNvbnRhaW5lcnMuIFRvIHVzZSwgcGFydGlhbGx5IHRoYXcgaW4gcmVmcmlnZXJhdG9yIG92ZXJuaWdodC4gTWljcm93YXZlLCBjb3ZlcmVkLCBvbiBoaWdoIGluIGEgbWljcm93YXZlLXNhZmUgZGlzaCB1bnRpbCBoZWF0ZWQgdGhyb3VnaCwgc3RpcnJpbmcgb2NjYXNpb25hbGx5IGFuZCBhZGRpbmcgYSBsaXR0bGUgd2F0ZXIgb3IgYnJvdGggaWYgbmVjZXNzYXJ5LlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJCdWZmYWxvIENoaWNrZW4gU2xpZGVyc1wiLFxuICAgIFwidGFnc1wiOiBbXG4gICAgICBcImx1bmNoXCIsXG4gICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgXCJkaW5uZXJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTgzNzM4LFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTgzNzM4LTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTgzNzIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTYwOTgsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxOTE1MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byAzNTBcXHUwMGIwRi4gTGluZSB0d28gYmFraW5nIHNoZWV0cyB3aXRoIHBhcmNobWVudCBwYXBlci5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgdGhlIGZsb3VyLCBiYWtpbmcgc29kYSBhbmQgc2FsdCBpbiBhIG1lZGl1bSBib3dsLiBTZXQgYXNpZGUuSW4gdGhlIGJvd2wgb2YgYSBzdGFuZCBtaXhlciwgYmVhdCB0aGUgYnV0dGVyLCBwZWFudXQgYnV0dGVyIGFuZCBzdWdhcnMsIHVudGlsIGxpZ2h0IGFuZCBmbHVmZnkuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgaW4gdGhlIGVnZyBhbmQgdmFuaWxsYS5HcmFkdWFsbHkgYWRkIGluIHRoZSBmbG91ciBtaXh0dXJlIG9uIGxvdyBzcGVlZC4gU3RpciB1bnRpbCBkb3VnaCBmb3Jtcy4gVGhlbiBzdGlyIGluIFJlZXNlJ3MgUGllY2VzIGJ5IGhhbmQuVXNpbmcgYSBjb29raWUgZG91Z2ggc2Nvb3Agb3IgeW91ciBoYW5kcywgZm9ybSBiYWxscyBvZiBkb3VnaCB3aXRoIDEgaGVhcGluZyB0YWJsZXNwb29uIG9mIGRvdWdoLiBHZW50bHkgZmxhdHRlbiBjb29raWUgZG91Z2ggKHRvIGZvcm0gYSBkaXNrIHNoYXBlKSBhbmQgcGxhY2Ugb24gcHJlcGFyZWQgYmFraW5nIHNoZWV0cy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDkgbWludXRlcyBhbmQgcmVtb3ZlIGZyb20gb3Zlbi5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCBjb29sIGZvciA1IG1pbnV0ZXMgYmVmb3JlIHRyYW5zZmVycmluZyBjb29raWVzIHRvIGEgd2lyZSByYWNrIHRvIGNvb2wgY29tcGxldGVseS5Ob3RlOiBDb29raWVzIHdpbGwgbm90IHNwcmVhZCBtdWNoIGF0IGFsbCBhbmQgd2lsbCBsb29rIGxpa2UgdGhleSBhcmUgbm90IGRvbmUgYmFraW5nLiBCdXQgSSBwcm9taXNlIHRoZXkgYXJlISBPbmNlIHRoZXkgZmluaXNoIGNvb2xpbmcsIHRoZSBjb29raWUgYW5kIGNob2NvbGF0ZSB3aWxsIGJlY29tZSBmaXJtIGFuZCB5b3Ugd2lsbCBoYXZlIGEgbWFnaWNhbGx5IHNvZnQgYW5kIGNydW1ibHkgY29va2llIVwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJSZWVzZSdzIFBpZWNlcyBQZWFudXQgQnV0dGVyIENvb2tpZXNcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgIFwic3RhcnRlclwiLFxuICAgICAgXCJzbmFja1wiLFxuICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MDEyMTYsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MDEyMTYtNTU2eDM3MC5qcGdcIixcbiAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDQxMDA5LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAxODQxMyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDQsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwibGVhdmVzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDExMTUyOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE0NzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2F1dGUgdGhlIHp1Y2NoaW5pIGluIHRoZSBvbGl2ZSBvaWwgb24gaGlnaCBoZWF0LiBTZWFzb24gZ2VuZXJvdXNseSB3aXRoIHNhbHQgYW5kIHBlcHBlci4gU3RpciBhbmQgbGVhdmUgYWxvbmUgZm9yIGEgbGl0dGxlIHdoaWxlLCBzbyB5b3UgZ2V0IGEgbGl0dGxlIGJpdCBvZiB0ZXh0dXJlIGZyb20gdGhlIGJyb3duaW5nIG9uIHRoZSB6dWNjaGluaS5XaGlsZSB5b3VcXHUyMDE5cmUgc2F1dGVpbmcsIHRvYXN0IHRoZSBmbGF0YnJlYWQgaW4gdGhlIG92ZW4gYXQgNDAwIGRlZ3JlZXMuV2hlbiB0aGUgenVjY2hpbmkgaXMgc29mdCBhbmQganVzdCBzbGlnaHRseSBicm93bmVkLCByZW1vdmUgZnJvbSB0aGUgaGVhdC4gVGFrZSB0aGUgZmxhdGJyZWFkIG91dCBvZiB0aGUgb3ZlbiBhbmQgc3ByZWFkIHRoZSB6dWNjaGluaSBvbiB0aGUgZmxhdGJyZWFkLlRvcCB3aXRoIHRoZSBmcmVzaCB0b21hdG9lcywgY2hlZXNlLCBhbmQgZnJlc2ggYmFzaWwuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQsIHNlcnZlLCBhbmQgZW5qb3khXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkZhcm1lclxcdTIwMTlzIE1hcmtldCBGbGF0YnJlYWQgUGl6emFcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjI2NTYyLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvMjI2NTYyLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogOTAxOSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTgwNzksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxNjA2OSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTEyNCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwMDksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDkwNzksXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMDAyMDE0LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDIwNDIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE5MzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMjE1MSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTE4MjEsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA2NjE1LFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXYXNoIHRoZSBsZW50aWxzIGFuZCBwbGFjZSBpbnRvIGEgcG90IGFsb25nIHdpdGggdGhlIHZlZ2V0YWJsZSBicm90aC4gQnJpbmcgdG8gYSBib2lsLCB0aGVuIHJlZHVjZSBoZWF0IHRvIG1lZGl1bS1sb3cgYW5kIHNpbW1lciwgZm9yIGFib3V0IDQwIG1pbnV0ZXMuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgbW9yZSBicm90aCBvciB3YXRlciBpZiBuZWNlc3NhcnlcIixcbiAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1lYW53aGlsZSwgd2FybSB0aGUgb2lsIGluIGEgcGFuLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBvbmlvbnMgYW5kIGNvb2sgZm9yIGFib3V0IDQgbWludXRlcyBvciB1bnRpbCBzb2Z0LlwiLFxuICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjYXJyb3RzLCBiZWxsIHBlcHBlciBhbmQgZ2FybGljLiBDb29rIGZvciBhYm91dCAzIG1pbnV0ZXMgbW9yZS4gU2V0IGFzaWRlLldoZW4gdGhlIGxlbnRpbHMgYXJlIHJlYWR5IG1hc2ggdGhlbSBzbGlnaHRseSB3aXRoIGEgcG90YXRvIG1hc2hlciBvciBhIGZvcmsuUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTBcXHUwMGJhIEYuSW4gYSBsYXJnZSBib3dsLCBtaXggdGhlIG9uaW9uIG1peHR1cmUsIG1hc2hlZCBsZW50aWxzLCBhcHBsZSBzYXVjZSwgY3JhbmJlcnJpZXMsIHBpc3RhY2hpb3MsIGJyZWFkIGNydW1icywgY2lsYW50cm8sIGNoaWxpIHBvd2RlciwgY3VtaW4sIHRoeW1lLCBzYWx0IGFuZCBwZXBwZXIuTGluZSBhIGxvYWYgcGFuIHdpdGggcGFyY2htZW50IHBhcGVyLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIG1peHR1cmUgdG8gdGhlIGxvYWYgcGFuIGFuZCBwcmVzcyBtaXh0dXJlIGludG8gdGhlIHBhbiB3aXRoIGEgc3Bvb24uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdGhlIGdsYXplIGluZ3JlZGllbnRzIGluIGEgc21hbGwgYm93bCBhbmQgc3ByZWFkIGV2ZW5seSBvdmVyIHRoZSB0b3AuXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciBhYm91dCA0NSBtaW51dGVzLlwiLFxuICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIHBhbiB0byBhIHdpcmUgcmFjayBhbmQgbGV0IHRoZSBsb2FmIGNvb2wgYSBiaXQuIFJ1biBhIHRhYmxlIGtuaWZlIGFyb3VuZCB0aGUgZWRnZSBvZiB0aGUgcGFuIGFuZCB0dXJuIHRoZSBsb2FmIG91dCBvbnRvIGEgc2VydmluZyBwbGF0ZS5cIixcbiAgICAgICAgXCJudW1iZXJcIjogOVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiVmVnYW4gTGVudGlsIExvYWZcIixcbiAgICBcInRhZ3NcIjogW1xuICAgICAgXCJzaWRlIGRpc2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjA1MTMyLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjA1MTMyLTU1NngzNzAuanBnXCIsXG4gICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTEyNSxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGhlYXZ5IHNhdWNlcGFuLCBzdGlyIHRvZ2V0aGVyIHRoZSBtaWxrIGFuZCAxLzQgY3VwIG9mIHN1Z2FyLiBCcmluZyB0byBhIGJvaWwgb3ZlciBtZWRpdW0gaGVhdC5cIixcbiAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBlZ2cgeW9sa3MgYW5kIGVnZy4gU3RpciB0b2dldGhlciB0aGUgcmVtYWluaW5nIHN1Z2FyIGFuZCBjb3Juc3RhcmNoOyB0aGVuIHN0aXIgdGhlbSBpbnRvIHRoZSBlZ2cgdW50aWwgc21vb3RoLiBXaGVuIHRoZSBtaWxrIGNvbWVzIHRvIGEgYm9pbCwgZHJpenpsZSBpdCBpbnRvIHRoZSBib3dsIGluIGEgdGhpbiBzdHJlYW0gd2hpbGUgbWl4aW5nIHNvIHRoYXQgeW91IGRvIG5vdCBjb29rIHRoZSBlZ2dzLiBSZXR1cm4gdGhlIG1peHR1cmUgdG8gdGhlIHNhdWNlcGFuLCBhbmQgc2xvd2x5IGJyaW5nIHRvIGEgYm9pbCwgc3RpcnJpbmcgY29uc3RhbnRseSBzbyB0aGUgZWdncyBkb24nIHQgY3VyZGxlIG9yIHNjb3JjaCBvbiB0aGUgYm90dG9tLlwiLFxuICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hlbiB0aGUgbWl4dHVyZSBjb21lcyB0byBhIGJvaWwgYW5kIHRoaWNrZW5zLCByZW1vdmUgZnJvbSB0aGUgaGVhdC4gU3RpciBpbiB0aGUgYnV0dGVyIGFuZCB2YW5pbGxhLCBtaXhpbmcgdW50aWwgdGhlIGJ1dHRlciBpcyBjb21wbGV0ZWx5IGJsZW5kZWQgaW4uXCIsXG4gICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIGludG8gYSBoZWF0LXByb29mIGNvbnRhaW5lciBhbmQgcGxhY2UgYSBwaWVjZSBvZiBwbGFzdGljIHdyYXAgZGlyZWN0bHkgb24gdGhlIHN1cmZhY2UgdG8gcHJldmVudCBhIHNraW4gZnJvbSBmb3JtaW5nLiBSZWZyaWdlcmF0ZSB1bnRpbCBjaGlsbGVkIGJlZm9yZSB1c2luZy5cIixcbiAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiUGFzdHJ5IENyZWFtXCIsXG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgIFwic2lkZSBkaXNoXCJcbiAgICBdXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2lwZURhdGE7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbn1cXG5cXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm5hdi1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG4udXNlci1wcm9maWxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gICAgbWFyZ2luOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gM2VtKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWF4LWNvbnRlbnQsIDMwMHB4KSAxZnI7XFxufVxcblxcbi5yZWNpcGVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnJlY2lwZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgUmVjaXBlIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgaW1hZ2UsIGluZ3JlZGllbnRzLCBpbnN0cnVjdGlvbnMsIG5hbWUsIHRhZ3MpIHtcbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMudGFncyA9IHRhZ3M7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7IiwiaW1wb3J0IFJlY2lwZSBmcm9tICcuL1JlY2lwZXMnO1xuaW1wb3J0IHJlY2lwZURhdGEgZnJvbSBcIi4uL2RhdGEvcmVjaXBlc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jbGFzcyBDb29raW5nIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlY2lwZXMgPSBudWxsO1xuICAgICAgICB0aGlzLiRyZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZXMnKTtcbiAgICAgICAgdGhpcy5zaG93UmVjaXBlcygpO1xuICAgIH1cblxuICAgIGdldFJlY2lwZXMoKSB7XG4gICAgICAgIHRoaXMucmVjaXBlcyA9IHJlY2lwZURhdGEubWFwKCh7aWQsIGltYWdlLCBpbmdyZWRpZW50cywgaW5zdHJ1Y3Rpb25zLCBuYW1lLCB0YWdzfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWNpcGUoaWQsIGltYWdlLCBpbmdyZWRpZW50cywgaW5zdHJ1Y3Rpb25zLCBuYW1lLCB0YWdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1JlY2lwZXMoKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVjaXBlcygpO1xuICAgICAgICBjb25zdCByZWNpcGVzID0gdGhpcy5yZWNpcGVzLm1hcCgoe2lkLCBpbWFnZX0pID0+IHtcblxuICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGAgIDxhcnRpY2xlIGlkPSR7aWR9IGNsYXNzPVwicmVjaXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmF2b3JpdGVcIj7imaE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2F2ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgIGBcbiAgICAgICAgICk7XG5cbiAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgdGhpcy4kcmVjaXBlcy5pbm5lckhUTUwgPSByZWNpcGVzO1xuICAgIH1cblxufVxuXG5uZXcgQ29va2luZygpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=