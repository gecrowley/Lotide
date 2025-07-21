const assertEqual = function (actual, expected) {
  console.assert(assertEqual);
  if (actual === expected)
  console.log ("✅✅✅Assertion Passed:" + [actual] + "===" + [expected]);
  else
    console.log ("❌❌❌Assertion Failed:" + [actual] + "!==" + [expected]);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);