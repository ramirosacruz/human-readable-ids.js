/*jshint -W054 */
(function (exports) {
  "use strict";

  var lists = exports.humanReadableIds || require("./lists"),
    shuffle = exports.knuthShuffle || require("knuth-shuffle").knuthShuffle,
    animals = [],
    adjectives = [],
    numbers = [];
  function genNumbers() {
    var i = 2;
    numbers = [];
    numbers.push(0);
    // 1 is not plural, so we skip it
    for (i = 2; i <= 100; i += 1) {
      numbers.push(i);
    }

    return shuffle(numbers);
  }

  class HumanReadableIds {
    props = {
      lang: "en",
    };
    constructor(props) {
      this.props = {
        ...this.props,
        ...props,
      };
    }
    random() {
      if (!adjectives.length) {
        adjectives = shuffle(lists[this.props.lang].adjectives.slice(0));
      }
      if (!animals.length) {
        animals = shuffle(lists[this.props.lang].animals.slice(0));
      }
      if (!numbers.length) {
        numbers = shuffle(genNumbers());
      }

      return adjectives.pop() + "-" + animals.pop() + "-" + numbers.pop();
    }
  }

  exports.HumanReadableIds = HumanReadableIds;
  exports.hri = exports.humanReadableIds;
})(
  ("undefined" !== typeof exports && exports) || new Function("return this")()
);
