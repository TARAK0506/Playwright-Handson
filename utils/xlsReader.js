// Importing the XLSX Library
const xlsx = require('xlsx');


// Read data from an Excel file
function readExcelData(filePath) {

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; 
    const worksheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(worksheet);     //Converts the worksheet content into JSON format, which is easy to work with in JavaScript.Each row becomes an object, and each column header becomes a key.

}

module.exports = { readExcelData };




