Live Calendar App
This is a simple interactive web-based **Live Calendar** built using HTML, CSS, and JavaScript. Users can select any month from a dropdown, and the app dynamically displays the corresponding number of days for that month.

Features
- Dropdown to select a month
- Displays the name of the selected month
- Shows all days (1 to 28/30/31) based on the selected month
- Responsive and styled with a soft purple aesthetic'

Project Structure:
live-calendar/
│
├── index.html # Main HTML structure
├── script.js # JavaScript for dynamic behavior
├── styles.css # CSS styling (optional if embedded in <style>)
└── README.md # Project documentation

Technologies Used
- HTML5
- CSS3 (with Flexbox)
- JavaScript (DOM Manipulation)

How It Works
1. The user selects a month from the dropdown menu.
2. JavaScript captures the selected value and determines the number of days:
   - 31 days: Jan, Mar, May, Jul, Aug, Oct, Dec
   - 30 days: Apr, Jun, Sep, Nov
   - 28 days: Feb
3. It updates the heading with the selected month.
4. Dynamically generates and displays day numbers as a styled list.

Preview
html
Select the month: [ January ▼ ]
January
1  2  3  4  5 ...
