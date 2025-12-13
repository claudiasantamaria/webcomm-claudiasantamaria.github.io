// Text in the grid

document.addEventListener("DOMContentLoaded", function () {

    function showSection(textId, titleId, clickId) {

        document.getElementById(textId).classList.remove("d-none");

        document.getElementById(titleId).style.display = "none";
        document.getElementById(clickId).style.display = "none";
    }

    // Mountain
    document.getElementById("readMoreMountain").addEventListener("click", function () {
        showSection("mountainText", "mountainTitle", "readMoreMountain");
    });

    // Sea
    document.getElementById("readMoreSea").addEventListener("click", function () {
        showSection("seaText", "seaTitle", "readMoreSea");
    });

    // City
    document.getElementById("readMoreCity").addEventListener("click", function () {
        showSection("cityText", "cityTitle", "readMoreCity");
    });

    // Accommodation
    document.getElementById("readMoreAccommodation").addEventListener("click", function () {
        showSection("accommodationText", "accommodationTitle", "readMoreAccommodation");
    });

});



// Test score

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("test-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    reactToTest();          
  });
});

function scoreToPercentage(score) {

    let converted = (score / 30) * 100;

    let pc = Math.round(converted);

    return pc;
}


// Test reaction

function reactToTest() {

    let score = 0;

    score += Number(document.getElementById("q1").value);
    score += Number(document.getElementById("q2").value);
    score += Number(document.getElementById("q3").value);
    score += Number(document.getElementById("q4").value);
    score += Number(document.getElementById("q5").value);
    score += Number(document.getElementById("q6").value);

    let pc = scoreToPercentage(score);

    console.log("Percentage = " + pc);

    if (pc <= 40) {
        console.log('Unaware Traveler')
        alert('You will get there! You can find how to do better on our magazine!');
        document.body.style.background = "lightpink";


    } else if (pc <= 75) {
        console.log('Conscious Traveler')
        alert('You are on your way, check out our magazine to get even better results!');
        document.body.style.background = "lightgoldenrodyellow";

    } else {
        console.log('Sustainability Professional')
        alert('Congratulations, keep getting updating through our magazine!');
        document.body.style.background = "honeydew";
    }
}


// Subscription thank you message

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("specificSizeInputName");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
         event.preventDefault();

          const name = nameInput.value.trim();

        if (name === "") {
            thankYouMessage.textContent = "Please enter your name before submitting.";
            thankYouMessage.style.color = "red";
            thankYouMessage.style.fontSize = "1.3rem" ;
            thankYouMessage.style.fontFamily = "fantasy" ;
            nameInput.focus();
        } else {
            thankYouMessage.textContent = "Thank you, " + name + "!" + "We just sent you a confirmation email";
            thankYouMessage.style.color = "green";
            thankYouMessage.style.fontSize = "1.3rem" ;
            thankYouMessage.style.fontFamily = "fantasy" ;
        }
    });

});