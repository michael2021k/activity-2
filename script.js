// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let math = document.querySelector("#math").value;
    let science = document.querySelector("#science").value;
    let english = document.querySelector("#english").value;
    let filipino = document.querySelector("#filipino").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades =
        parseFloat(math) +
        parseFloat(science) +
        parseFloat(english) +
        parseFloat(filipino);
    
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (math == "" || english == ""
                || science == "" || filipino == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
    
        // Checking the condition for the fail and pass
        if (percentage >= 39.5) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 400 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. You are Pass. `;
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 400 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. You are Fail. `;
        }
    }
    };
    