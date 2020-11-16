$(document).ready(function() {
    var myRules = {
        weight: {
            required: true,
            min:88,
            max:353,
            digits:true
        },
        height: {
            required: true,
            min:59,
            max:79,
            digits:true
        }
    }
    var myMessages = {
        weight: {
            required: "weight in pounds is required!",
            min:"minimum weight is 88 lb.",
            max:"maximum weight is 353 lb.",
            digits:"weight must be a number!"
        },
        height: {
            required: "height in inches is required!",
            min:"minimum height is 59 in.",
            max:"maximum height is 79 in.",
            digits:"height must be a number!"
        }
    }

    function calcBMI() {

        var w = parseFloat($("#weight").val());
        var h = parseFloat($("#height").val());
        var BMI = (w / (h * h)) * 703;
        var BMI = BMI.toFixed(1);
        var cat = "";
        if(BMI < 15) {cat = "Very severely underweight";}
        else if (BMI < 16) {cat = "Severely underweight";}
        else if (BMI < 18.5)  {cat = "Underweight";}
        else if (BMI < 25) {cat = "Normal";}
        else if (BMI < 30) {cat = "Overweight";}
        else if (BMI < 35) {cat = "Moderately obese";}
        else if (BMI < 40) {cat = "Severely obese";}
        else {cat = "Very severely obese";}
        var output = BMI + " or " + cat;
        $("#output").val(output);

    }
    $("form").validate({
        submitHandler: calcBMI,
        rules: myRules,
        messages: myMessages
    });
});