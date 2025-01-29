// Step 1: Capture the form for submit event
document.getElementById('akan-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Step 2: Get user input
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    // Step 3: Validate input
    if (day <= 0 || day > 31) {
        alert('Invalid day! Please enter a day between 1 and 31.');
        return;
    }

    if (month <= 0 || month > 12) {
        alert('Invalid month! Please enter a month between 1 and 12.');
        return;
    }

    if (year <= 0) {
        alert('Invalid year! Please enter a positive year.');
        return;
    }

    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    // Step 4: Adjust month and year for January and February
    let adjustedMonth = month;
    let adjustedYear = year;
    if (month === 1 || month === 2) {
        adjustedMonth += 12;
        adjustedYear -= 1;
    }

    // Step 5: Break the year into century CC and year YY (year within century)
    const CC = Math.floor(adjustedYear / 100); // Century part
    const YY = adjustedYear % 100; // Year part within century

    // Step 6: Calculate the day of the week using the formula
    const dayOfWeek = Math.floor(
        (day +
            Math.floor(2.6 * (adjustedMonth + 1)) +
            YY +
            Math.floor(YY / 4) +
            Math.floor(CC / 4) -
            2 * CC) %
        7
    );

    // Ensure positive indexing for dayOfWeek
    const positiveDayOfWeek = (dayOfWeek + 7) % 7;

    // Step 7: Map the day of the week to Akan name
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    let akanName;
    if (gender === 'male') {
        akanName = maleNames[positiveDayOfWeek];
    } else if (gender === 'female') {
        akanName = femaleNames[positiveDayOfWeek];
    }

    // Step 8: Display the results
       document.getElementById('result').innerText = `Hey Babe! Your Unique Akan name is ${akanName}`;

});
