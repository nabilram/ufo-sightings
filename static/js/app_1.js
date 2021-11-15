// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// d3.select is tell JS to look for <tbody> tags in HTML
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html(""); //clear table
    data.forEach((dataRow) => { //loop through each object in data js array
        let row = tbody.append("tr"); // append a row to the table for each object
        Object.values(dataRow).forEach((val) => { //loop through each field/cell/line within the object
            let cell = row.append("td"); // add each value as a cell in the table ("td")
            cell.text(val);
        });
    });
};

function handleClick() {
    let date = d3.select("#datetime").property("value"); // grab the date time value from filter (input by user?)
    let filteredData = tableData; // reset tale to original state; assign the constant global table to it
    if (date) { //if there is a date entered -- there is a value on date
        filteredData = filteredData.filter(row => row.datetime === date); // filter all rows that have strict equality to date
    };
    buildTable(filteredData); //build the table using filtered data; unfiltered data b/c no date makes it orig table
};

d3.selectAll("#filter-btn").on("click", handleClick); // listen to event; call out unique button element that you will assign

buildTable(tableData); // build table when page loads -- techinically when the code itself starts

