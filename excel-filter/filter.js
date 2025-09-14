const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

// 1. Read the Excel file (works with both .xls and .xlsx)
const workbook = XLSX.readFile("data.xls"); // or "data.xls"
const sheetName = workbook.SheetNames[0];    // use first sheet
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// 2. Group rows by "Created By"
const grouped = {};
data.forEach(row => {
  const creator = row["Created by"] || "Unknown"; // match your header exactly
  if (!grouped[creator]) grouped[creator] = [];
  grouped[creator].push(row);
});

// 3. Create "output" folder if it doesn't exist
const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 4. Write separate Excel files into "output" folder
Object.keys(grouped).forEach(creator => {
  const newSheet = XLSX.utils.json_to_sheet(grouped[creator]);
  const newWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Data");

  // safe filename (remove special chars, limit length)
  const safeName = creator.replace(/[^a-z0-9]/gi, "_").substring(0, 50);

  const filePath = path.join(outputDir, `${safeName}.xlsx`);
  XLSX.writeFile(newWorkbook, filePath);

  console.log(`✅ File created: ${filePath}`);
});

console.log("🎉 All files created inside 'output' folder!");
