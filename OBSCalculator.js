
//CALCULATE GA FROM LMP
function calcGAfromLMP(event) {
    event.preventDefault(); // Prevent form submission

    // Get all elements
    const GA_LMP_day = document.getElementById('GA-LMP-day');
    const GA_LMP_month = document.getElementById('GA-LMP-month')
    const GA_LMP_year = document.getElementById('GA-LMP-year')

    const GA_LMP_day_Value = Math.floor(Number(GA_LMP_day.value));
    const GA_LMP_month_Value = Math.floor(Number(GA_LMP_month.value));
    const GA_LMP_year_Value = Math.floor(Number(GA_LMP_year.value));

    const day_input_error = document.getElementById('GA-LMP-day-input-error');
    const month_input_error = document.getElementById('GA-LMP-month-input-error');
    const year_input_error = document.getElementById('GA-LMP-year-input-error');

    
    function setError(element, errorMessage, errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.color = "red";
        element.style.border = "2px solid red";
    }

    function clearError(element, errorElement) {
        errorElement.textContent = '';
        element.style.border = "initial";
    }

    let isValid = true;

    // Validation
    if (isNaN(GA_LMP_day_Value) || GA_LMP_day_Value < 1 || GA_LMP_day_Value > 31) {
        setError(GA_LMP_day, 'Invalid Day', day_input_error);
        isValid = false;
    } else {
        clearError(GA_LMP_day, day_input_error);
    }

    if (isNaN(GA_LMP_month_Value) || GA_LMP_month_Value < 1 || GA_LMP_month_Value > 12) {
        setError(GA_LMP_month, 'Invalid Month', month_input_error);
        isValid = false;
    } else {
        clearError(GA_LMP_month, month_input_error);
    }

    if (isNaN(GA_LMP_year_Value) || GA_LMP_year_Value < 2000 || GA_LMP_year_Value > 5000) {
        setError(GA_LMP_year, 'Invalid Year', year_input_error);
        isValid = false;
    } else {
        clearError(GA_LMP_year, year_input_error);
    }

    if (!isValid) return; // Stop if input is invalid

    // Create LMP Date Object
    let lmpDate = new Date(GA_LMP_year_Value, GA_LMP_month_Value - 1, GA_LMP_day_Value); // Month - 1 because JS months are 0-based
    let today = new Date(); // Get today's date

      // Prevent future dates
    if (lmpDate > today) {
        setError(GA_LMP_day, 'LMP cannot be in the future', day_input_error);
        setError(GA_LMP_month, 'LMP cannot be in the future', month_input_error);
        setError(GA_LMP_year, 'LMP cannot be in the future', year_input_error);
        return;
    }

    // Calculate difference in milliseconds and convert to days
    let diffInDays = Math.floor((today - lmpDate) / (1000 * 60 * 60 * 24));

    // Convert days to weeks and days
    let weeks = Math.floor(diffInDays / 7);
    let days = diffInDays % 7;

    // Display GA
    if (weeks > 41) {
        document.getElementById('GA-LMP-answer').textContent = `Post Term Gestation`;
    } else {
        document.getElementById('GA-LMP-answer').textContent = `${weeks}weeks and ${days}days`;
    }
}

//CALCULATE EDD FROM LMP
function calcEDDfromLMP(event) {
    event.preventDefault(); // Prevent form submission

    // Get all elements
    const EDD_LMP_day = document.getElementById('EDD-LMP-day');
    const EDD_LMP_month = document.getElementById('EDD-LMP-month')
    const EDD_LMP_year = document.getElementById('EDD-LMP-year')
    
    const EDD_LMP_day_Value = Math.floor(Number(EDD_LMP_day.value));
    const EDD_LMP_month_Value = Math.floor(Number(EDD_LMP_month.value));
    const EDD_LMP_year_Value = Math.floor(Number(EDD_LMP_year.value));

    const day_input_error = document.getElementById('EDD-LMP-day-input-error');
    const month_input_error = document.getElementById('EDD-LMP-month-input-error');
    const year_input_error = document.getElementById('EDD-LMP-year-input-error');

    function setError(element, errorMessage, errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.color = "red";
        element.style.border = "2px solid red";
    }

    function clearError(element, errorElement) {
        errorElement.textContent = '';
        element.style.border = "initial";
    }

    let isValid = true;

    // Validate Month
    if (isNaN(EDD_LMP_month_Value) || EDD_LMP_month_Value < 1 || EDD_LMP_month_Value > 12) {
        setError(EDD_LMP_month, 'Invalid Input', month_input_error);
        isValid = false;
    } else {
        clearError(EDD_LMP_month, month_input_error);
    }

    // Validate Day
    if (isNaN(EDD_LMP_day_Value) || EDD_LMP_day_Value < 1 || EDD_LMP_day_Value > 31) {
        setError(EDD_LMP_day, 'Invalid Input', day_input_error);
        isValid = false;
    } else {
        clearError(EDD_LMP_day, day_input_error);
    }

    // Validate Year
    if (isNaN(EDD_LMP_year_Value) || EDD_LMP_year_Value < 2000 || EDD_LMP_year_Value > 5000) {
        setError(EDD_LMP_year, 'Invalid Input', year_input_error);
        isValid = false;
    } else {
        clearError(EDD_LMP_year, year_input_error);
    }

    if (isValid) {

        let lmpDate = new Date(EDD_LMP_year_Value, EDD_LMP_month_Value - 1, EDD_LMP_day_Value);
        lmpDate.setDate(lmpDate.getDate() + 280);

        let formattedEDD = lmpDate.toDateString();

        document.getElementById('EDD-LMP-answer').textContent = formattedEDD;
    }
}

//CALCULATE EDD FROM REPORT
function calcEDDfromReport(event) {
    event.preventDefault(); 

    // Get all elements
    const EDD_Report_day = document.getElementById('EDD-Report-day');
    const EDD_Report_month = document.getElementById('EDD-Report-month');
    const EDD_Report_year = document.getElementById('EDD-Report-year');
    const weeks_at_report_date = document.getElementById('Weeks-at-report-date');
    const days_at_report_date = document.getElementById('Days-at-report-date');

    const EDD_Report_day_Value = Math.floor(Number(EDD_Report_day.value));
    const EDD_Report_month_Value = Math.floor(Number(EDD_Report_month.value));
    const EDD_Report_year_Value = Math.floor(Number(EDD_Report_year.value));
    const weeks_at_report_date_Value = Math.floor(Number(weeks_at_report_date.value));
    const days_at_report_date_Value = Math.floor(Number(days_at_report_date.value));
  
    // Validation (Basic Input Check)
    if (
        isNaN(EDD_Report_day_Value) || EDD_Report_day_Value < 1 || EDD_Report_day_Value > 31 ||
        isNaN(EDD_Report_month_Value) || EDD_Report_month_Value < 1 || EDD_Report_month_Value > 12 ||
        isNaN(EDD_Report_year_Value) || EDD_Report_year_Value < 2000 || EDD_Report_year_Value > 5000 ||
        isNaN(weeks_at_report_date_Value) || weeks_at_report_date_Value < 0 || weeks_at_report_date_Value > 42 ||
        isNaN(days_at_report_date_Value) || days_at_report_date_Value < 0 || days_at_report_date_Value > 6
    ) {
        document.getElementById('EDD-Report-answer').textContent = "Invalid Input";
        document.getElementById('EDD-Report-answer').style.color = 'red'
        return;
    }

    // Create a Date object for the ultrasound scan date
    let scanDate = new Date(EDD_Report_year_Value, EDD_Report_month_Value - 1, EDD_Report_day_Value); 

    // Calculate remaining days until EDD
    let totalPregnancyDays = 280;
    let GA_at_scan_in_days = (weeks_at_report_date_Value * 7) + days_at_report_date_Value;
    let remaining_days_to_EDD = totalPregnancyDays - GA_at_scan_in_days;

    // Add remaining days to scan date to get EDD
    let today = new Date();
    if (scanDate > today) {
        document.getElementById('EDD-Report-answer').textContent = "Scan date cannot be in the future.";
        document.getElementById('EDD-Report-answer').style.color = 'red';
        return;  
    }
    console.log(scanDate + ' p ' + today)
    scanDate.setDate(scanDate.getDate() + remaining_days_to_EDD);
    
    function getDaysBetweenDates(date1, date2) {
        // Ensure both dates are parsed correctly in UTC
        const timestamp1 = Date.UTC(
          new Date(date1).getFullYear(),
          new Date(date1).getMonth(),
          new Date(date1).getDate()
        );
        
        const timestamp2 = Date.UTC(
          new Date(date2).getFullYear(),
          new Date(date2).getMonth(),
          new Date(date2).getDate()
        );
      
        // Calculate the difference in milliseconds and convert to days
        const differenceDays = Math.abs((timestamp2 - timestamp1) / (1000 * 3600 * 24));
      
        return differenceDays;
    }
      
      // ✅ Correct way to define dates
    const scanDate1 = `${EDD_Report_year_Value}-${EDD_Report_month_Value}-${EDD_Report_day_Value}`; // Use YYYY-MM-DD format
    const today1 = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    console.log(today1 + 'pp ' + scanDate1);

    let daysSinceScan = getDaysBetweenDates(scanDate1, today1);

    let currentGA_days = GA_at_scan_in_days + daysSinceScan;
    let currentGA_weeks = Math.floor(currentGA_days / 7);
    let remainingGA_days = currentGA_days % 7;
    
    // Format and display EDD
    let EDD_formatted = scanDate.toDateString();
    document.getElementById('Current-GA-from-UR').textContent = `Current GA: ${currentGA_weeks}weeks ${remainingGA_days}days`;
    document.getElementById('EDD-Report-answer').textContent = ` ${EDD_formatted}`;
    document.getElementById('EDD-Report-answer').style.color = 'initial'

}

//CALCULATE EDD FROM Given Date
function calcEDDfromGivenDate(event) {
    event.preventDefault(); 

    // Get all elements
    const EDD_Given_day = document.getElementById('EDD-Given-day');
    const EDD_Given_month = document.getElementById('EDD-Given-month');
    const EDD_Given_year = document.getElementById('EDD-Given-year');
    const weeks_at_given_date = document.getElementById('Weeks-at-given-date');
    const days_at_given_date = document.getElementById('Days-at-given-date');

    const EDD_Given_day_Value = Math.floor(Number(EDD_Given_day.value));
    const EDD_Given_month_Value = Math.floor(Number(EDD_Given_month.value));
    const EDD_Given_year_Value = Math.floor(Number(EDD_Given_year.value));
    const weeks_at_given_date_Value = Math.floor(Number(weeks_at_given_date.value));
    const days_at_given_date_Value = Math.floor(Number(days_at_given_date.value));

    // Validation (Basic Input Check)
    if (
        isNaN(EDD_Given_day_Value) || EDD_Given_day_Value < 1 || EDD_Given_day_Value > 31 ||
        isNaN(EDD_Given_month_Value) || EDD_Given_month_Value < 1 || EDD_Given_month_Value > 12 ||
        isNaN(EDD_Given_year_Value) || EDD_Given_year_Value < 2000 || EDD_Given_year_Value > 5000 ||
        isNaN(weeks_at_given_date_Value) || weeks_at_given_date_Value < 0 || weeks_at_given_date_Value > 42 ||
        isNaN(days_at_given_date_Value) || days_at_given_date_Value < 0 || days_at_given_date_Value > 6
    ) {
        document.getElementById('EDD-Given-answer').textContent = "Invalid Input";
        document.getElementById('EDD-Given-answer').style.color = 'red'
        return;
    }

    // Create a Date object for the ultrasound scan date
    let scanDate = new Date(EDD_Given_year_Value, EDD_Given_month_Value - 1, EDD_Given_day_Value); 

    // Calculate remaining days until EDD
    let totalPregnancyDays = 280;
    let GA_at_scan_in_days = (weeks_at_given_date_Value * 7) + days_at_given_date_Value;
    let remaining_days_to_EDD = totalPregnancyDays - GA_at_scan_in_days;

    // Add remaining days to scan date to get EDD
    scanDate.setDate(scanDate.getDate() + remaining_days_to_EDD);

    // Format and display EDD
    let EDD_formatted = scanDate.toDateString();
    document.getElementById('EDD-Given-answer').textContent = ` ${EDD_formatted}`;
    document.getElementById('EDD-Given-answer').style.color = 'initial'
}
