// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
//d3.select is tell JS to look for <tbody> tags in HTML
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
}