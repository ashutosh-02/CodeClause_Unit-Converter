function updateUnitDropdown() {
  var quantityDropdown = document.getElementById("dropdown");
  var unitDropdown1 = document.getElementById("dropdown1");
  var unitDropdown2 = document.getElementById("dropdown2");

  unitDropdown1.innerHTML = "";
  unitDropdown2.innerHTML = "";

  var selectedQuantity = quantityDropdown.value;

  if (selectedQuantity === "length") {
    unitDropdown1.add(new Option("Kilometer", "Kilometer"));
    unitDropdown1.add(new Option("Meter", "Meter"));
    unitDropdown1.add(new Option("Centimeter", "Centimeter"));
    unitDropdown1.add(new Option("Millimeter", "Millimeter"));

    unitDropdown2.add(new Option("Kilometer", "Kilometer"));
    unitDropdown2.add(new Option("Meter", "Meter"));
    unitDropdown2.add(new Option("Centimeter", "Centimeter"));
    unitDropdown2.add(new Option("Millimeter", "Millimeter"));
  } else if (selectedQuantity === "weight") {
    unitDropdown1.add(new Option("Gram", "Gram"));
    unitDropdown1.add(new Option("Kilogram", "Kilogram"));
    unitDropdown1.add(new Option("Pound", "Pound"));
    unitDropdown1.add(new Option("Ounce", "Ounce"));

    unitDropdown2.add(new Option("Gram", "Gram"));
    unitDropdown2.add(new Option("Kilogram", "Kilogram"));
    unitDropdown2.add(new Option("Pound", "Pound"));
    unitDropdown2.add(new Option("Ounce", "Ounce"));
  } else if (selectedQuantity === "temperature") {
    unitDropdown1.add(new Option("Celsius", "Celsius"));
    unitDropdown1.add(new Option("Fahrenheit", "Fahrenheit"));
    unitDropdown1.add(new Option("Kelvin", "Kelvin"));

    unitDropdown2.add(new Option("Celsius", "Celsius"));
    unitDropdown2.add(new Option("Fahrenheit", "Fahrenheit"));
    unitDropdown2.add(new Option("Kelvin", "Kelvin"));
  } else if (selectedQuantity === "area") {
    unitDropdown1.add(new Option("SquareMeter", "SquareMeter"));
    unitDropdown1.add(new Option("SquareKilometer", "SquareKilometer"));
    unitDropdown1.add(new Option("SquareCentimeter", "SquareCentimeter"));
    unitDropdown1.add(new Option("SquareMillimeter", "SquareMillimeter"));

    unitDropdown2.add(new Option("SquareMeter", "SquareMeter"));
    unitDropdown2.add(new Option("SquareKilometer", "SquareKilometer"));
    unitDropdown2.add(new Option("SquareCentimeter", "SquareCentimeter"));
    unitDropdown2.add(new Option("SquareMillimeter", "SquareMillimeter"));
  }
}

function convertUnit1() {
  var quantity = document.getElementById("dropdown").value;
  var unit1 = document.getElementById("dropdown1").value;
  var unit2 = document.getElementById("dropdown2").value;
  var value1 = parseFloat(document.getElementById("value1").value);
  var value2;

  if (quantity === "length") {
    value2 = convertLength(value1, unit1, unit2);
  } else if (quantity === "weight") {
    value2 = convertWeight(value1, unit1, unit2);
  } else if (quantity === "temperature") {
    value2 = convertTemperature(value1, unit1, unit2);
  } else if (quantity === "area") {
    value2 = convertArea(value1, unit1, unit2);
  }

  document.getElementById("value2").value = value2;
}

  function convertLength(value, unit1, unit2) {
    if (unit1 === unit2) {
      return value;
    }
    if (unit1 === "Kilometer") {
      if (unit2 === "Meter") {
        return value * 1000;
      } else if (unit2 === "Centimeter") {
        return value * 100000;
      } else if (unit2 === "Millimeter") {
        return value * 1000000;
      }
    } else if (unit1 === "Meter") {
      if (unit2 === "Kilometer") {
        return value / 1000;
      } else if (unit2 === "Centimeter") {
        return value * 100;
      } else if (unit2 === "Millimeter") {
        return value * 1000;
      }
    } else if (unit1 === "Centimeter") {
      if (unit2 === "Kilometer") {
        return value / 100000;
      } else if (unit2 === "Meter") {
        return value / 100;
      } else if (unit2 === "Millimeter") {
        return value * 10;
      }
    } else if (unit1 === "Millimeter") {
      if (unit2 === "Kilometer") {
        return value / 1000000;
      } else if (unit2 === "Meter") {
        return value / 1000;
      } else if (unit2 === "Centimeter") {
        return value / 10;
      }
    }
  }

function convertWeight(value, unit1, unit2) {
  if (unit1 === unit2) {
    return value;
  }

  if (unit1 === "Gram") {
    if (unit2 === "Kilogram") {
      return value / 1000;
    } else if (unit2 === "Pound") {
      return value * 0.00220462;
    } else if (unit2 === "Ounce") {
      return value * 0.03527396;
    }
  } else if (unit1 === "Kilogram") {
    if (unit2 === "Gram") {
      return value * 1000;
    } else if (unit2 === "Pound") {
      return value * 2.20462;
    } else if (unit2 === "Ounce") {
      return value * 35.27396;
    }
  } else if (unit1 === "Pound") {
    if (unit2 === "Gram") {
      return value * 453.592;
    } else if (unit2 === "Kilogram") {
      return value * 0.453592;
    } else if (unit2 === "Ounce") {
      return value * 16;
    }
  } else if (unit1 === "Ounce") {
    if (unit2 === "Gram") {
      return value * 28.3495;
    } else if (unit2 === "Kilogram") {
      return value * 0.0283495;
    } else if (unit2 === "Pound") {
      return value * 0.0625;
    }
  }
}

function convertTemperature(value, unit1, unit2) {
  if (unit1 === unit2) {
    return value;
  }

  if (unit1 === "Celsius") {
    if (unit2 === "Fahrenheit") {
      return (value * 9 / 5) + 32;
    } else if (unit2 === "Kelvin") {
      return value + 273.15;
    }
  } else if (unit1 === "Fahrenheit") {
    if (unit2 === "Celsius") {
      return (value - 32) * 5 / 9;
    } else if (unit2 === "Kelvin") {
      return (value + 459.67) * 5 / 9;
    }
  } else if (unit1 === "Kelvin") {
    if (unit2 === "Celsius") {
      return value - 273.15;
    } else if (unit2 === "Fahrenheit") {
      return (value * 9 / 5) - 459.67;
    }
  }
}

function convertArea(value, unit1, unit2) {
  if (unit1 === unit2) {
    return value;
  }

  if (unit1 === "SquareMeter") {
    if (unit2 === "SquareKilometer") {
      return value / 1000000;
    } else if (unit2 === "SquareCentimeter") {
      return value * 10000;
    } else if (unit2 === "SquareMillimeter") {
      return value * 1000000;
    }
  } else if (unit1 === "SquareKilometer") {
    if (unit2 === "SquareMeter") {
      return value * 1000000;
    } else if (unit2 === "SquareCentimeter") {
      return value * 10000000000;
    } else if (unit2 === "SquareMillimeter") {
      return value * 1000000000000;
    }
  } else if (unit1 === "SquareCentimeter") {
    if (unit2 === "SquareMeter") {
      return value / 10000;
    } else if (unit2 === "SquareKilometer") {
      return value / 10000000000;
    } else if (unit2 === "SquareMillimeter") {
      return value * 100;
    }
  } else if (unit1 === "SquareMillimeter") {
    if (unit2 === "SquareMeter") {
      return value / 1000000;
    } else if (unit2 === "SquareKilometer") {
      return value / 1000000000000;
    } else if (unit2 === "SquareCentimeter") {
      return value / 100;
    }
  }
}
