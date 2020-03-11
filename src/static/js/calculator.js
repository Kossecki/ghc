function calculator() {
    var ratio = document.getElementById("ratio");
    var chosenRatio = document.getElementById("chosenRatio");
    var displayWeight = document.getElementById("displayWeight");
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
/*      if (e) {
            var a = waterAmountInput.value;
            var aa = waterAmountSlider.value;
            var b = coffeeAmountInput.value;
            var bb = coffeeAmountSlider.value;
            var waterAmount;
            var coffeeAmount;
            if (e.target === ratio) {
                b = calculateWeight(a, ratio.value);
                console.log(b);
                bb = b;
            } else if (e.target === waterAmountSlider) {
                a = aa;
                waterAmount = parseInt(a);
                b = calculateWeight(waterAmount, ratio.value);
                bb = b;
            } else if (e.target === waterAmountInput) {
                aa = a;
                waterAmount = parseInt(a);
                b = calculateWeight(waterAmount, ratio.value);
                bb = b
            } else if (e.target === coffeeAmountSlider) {
                b = bb;
                coffeeAmount = parseInt(bb);
                a = calculateInitialWater(coffeeAmount, ratio.value);
                aa = a;
            } else if (e.target === coffeeAmountInput) {
                bb = b;
                coffeeAmount = parseInt(b);
                aa = calculateInitialWater(coffeeAmount, ratio.value);
                a = aa;
            }
        }*/
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
