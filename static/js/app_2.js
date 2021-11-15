// from data.js
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

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let chngElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementVal = chngElement.property("value")
    console.log(elementVal);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = chngElement.attr("id");
    console.log(filterID);
  
    // 5. If a filter value was entered then add that filterID and value to the filters list. Otherwise, clear that filter from the filters object.
    if (elementVal != "") {
      filters[filterID] = elementVal;
    }
    else {
      delete filters[filterID];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    let filteredData = tableData.filter((obj) => {
      for(filterID in filters) {
          if(obj[filterID] !== filters[filterID]) {
            return false;
          }
      }
      return true;
    });
    
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  
  // Build the table when the page loads
  buildTable(tableData);
