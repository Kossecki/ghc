function calculator() {
    var ratio = document.getElementById("ratio");
    var chosenRatio = document.getElementById("chosenRatio");
    var displayYield = document.getElementById("displayYield");
    var waterAmountInput = document.getElementById("numberValue");
    var waterAmountSlider = document.getElementById("sliderValue");
    var coffeeAmountInput = document.getElementById("numberValueCoffee");
    var coffeeAmountSlider = document.getElementById("sliderValueCoffee");


    function calculateWeight(water, ratio) {
        return Math.round(water / ratio);
    }

    function calculateWater(water) {
        return Math.round(water * 0.9);
    }

    function calculateInitialWater(coffee, ratio) {
        return coffee * ratio;
    }

    function displayAll(e) {
        chosenRatio.innerHTML = ratio.value;
        var waterAmount = parseInt(waterAmountInput.value);
         if (e) {
            if (e.target === ratio) {
                coffeeAmountInput.value = calculateWeight(waterAmount, ratio.value);
                coffeeAmountSlider.value = coffeeAmountInput.value;
            } else if (e.target === waterAmountSlider) {
                waterAmountInput.value = waterAmountSlider.value;
                var waterAmount = parseInt(waterAmountInput.value);
                coffeeAmountInput.value = calculateWeight(waterAmount, ratio.value);
                coffeeAmountSlider.value = coffeeAmountInput.value;
            } else if (e.target === waterAmountInput) {
                waterAmountSlider.value = waterAmountInput.value;
                var waterAmount = parseInt(waterAmountSlider.value);
                coffeeAmountInput.value = calculateWeight(waterAmount, ratio.value);
                coffeeAmountSlider.value = coffeeAmountInput.value;
            } else if (e.target === coffeeAmountSlider) {
                coffeeAmountInput.value = coffeeAmountSlider.value;
                var coffeeAmount = parseInt(coffeeAmountSlider.value);
                waterAmountInput.value = calculateInitialWater(coffeeAmount, ratio.value);
                waterAmountSlider.value = waterAmountInput.value;
            } else if (e.target === coffeeAmountInput) {
                coffeeAmountSlider.value = coffeeAmountInput.value;
                var coffeeAmount = parseInt(coffeeAmountInput.value);
                waterAmountSlider.value = calculateInitialWater(coffeeAmount, ratio.value);
                waterAmountInput.value = waterAmountSlider.value;
            }
            } else {
                coffeeAmountInput.value = calculateWeight(waterAmount, ratio.value);
                coffeeAmountSlider.value = coffeeAmountInput.value;
            }

        displayYield.innerHTML = calculateWater(waterAmount);
    }

    displayAll();

    document.querySelector("form").addEventListener("input", displayAll);
}

if (document.readyState != "loading") {
    calculator();
} else {
    document.addEventListener("DOMContentLoaded", calculator);
}
