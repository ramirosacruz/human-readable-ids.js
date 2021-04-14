/*jshint -W054 */
(function (exports) {
  "use strict";

  var hri = exports.humanReadableIds || require("../index").hri,
    i;

  const { HumanReadableIds } = require("../index");

  const prueba = new HumanReadableIds({ lang: "es" });

  for (i = 0; i < 100; i += 1) {
    console.log(prueba.random());
  }
})(
  ("undefined" !== typeof exports && exports) || new Function("return this")()
);
