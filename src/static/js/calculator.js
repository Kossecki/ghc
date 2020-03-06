function fn() {
    var ratio = document.getElementById("ratio");
    var chosenRatio = document.getElementById("chosenRatio");
    var displayWeight = document.getElementById("displayWeight");
    var displayYield = document.getElementById("displayYield");
    var waterAmountInput = document.getElementById("numberValue");
    var waterAmountSlider = document.getElementById("sliderValue");

    function calculateWeight(water, ratio) {
      return Math.round(water / ratio);
    }

    function calculateWater(water) {
      return Math.round(water * 0.9);
    }

    function displayAll(e) {
      chosenRatio.innerHTML = ratio.value;
      if (e) {
        if (e.target === waterAmountSlider) {
          waterAmountInput.value = waterAmountSlider.value;
        } else if (e.target === waterAmountInput) {
          waterAmountSlider.value = waterAmountInput.value;
        }
      }
      var waterAmount = parseInt(waterAmountInput.value);
      displayWeight.innerHTML = calculateWeight(waterAmount, ratio.value);
      displayYield.innerHTML = calculateWater(waterAmount);
    }

    displayAll();

    document.querySelector("form").addEventListener("input", displayAll);
  }

  function ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
