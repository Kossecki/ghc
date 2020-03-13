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

    var data = {
        ratio: 16,
        waterAmount: 250,
        coffeeAmount: null,
        lastChangedCoffee: false
    };

    function displayAll(e) {


 console.log("start", data);
         if (e) {
             var changedValue = parseInt(e.target.value);

             data.lastChangedCoffee = false;

            if (e.target === ratio) {
                data.ratio = changedValue;
            } else if (e.target === waterAmountSlider || e.target === waterAmountInput ) {
                data.waterAmount = changedValue;
            } else if (e.target === coffeeAmountSlider || e.target === coffeeAmountInput) {
                data.coffeeAmount = changedValue;
                data.lastChangedCoffee = true;
            }
         }

         if (data.lastChangedCoffee) {
            data.waterAmount = calculateInitialWater(data.coffeeAmount, data.ratio);
         } else {
             data.coffeeAmount = calculateWeight(data.waterAmount, data.ratio);
         }

         console.log("end", data);
        chosenRatio.innerHTML = data.ratio;
        waterAmountSlider.value = data.waterAmount;
        waterAmountInput.value = data.waterAmount;
        coffeeAmountSlider.value = data.coffeeAmount;
        coffeeAmountInput.value = data.coffeeAmount;
        displayYield.innerHTML = calculateWater(data.waterAmount);
    }

    displayAll();

    document.querySelector("form").addEventListener("input", displayAll);

}

if (document.readyState != "loading") {
    calculator();
} else {
    document.addEventListener("DOMContentLoaded", calculator);
}
