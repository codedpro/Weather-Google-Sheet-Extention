const SPREADSHEET_ID = "1r6HUu3lM4FByTPoe3pFA1JF2ARvT8HyP5R2MGPbUiS8";
const openweathermap = "c277bf84cc56fda2eeb7b5b1026fc48b";
let previousRows = [];

function updateCityTemperatures() {
  try {
    const sheets = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = sheets.getSheetByName("AppsScript");

    const range = sheet.getRange("A:B");
    const currentRows = range.getValues();

    if (currentRows.length === 0) {
      Logger.log("No data found.");
      return;
    }
    if (JSON.stringify(currentRows) === JSON.stringify(previousRows)) {
      Logger.log("No changes detected.");
      return;
    }

    const updatedRows = currentRows.map((row, index) => {
      if (index === 0) {
        return row;
      }

      const city = row[0];

      try {
        const temp = getCityTemperature(city);
        return [city, temp];
      } catch (error) {
        Logger.log(`Error fetching temperature for city ${city}: ${error}`);
        return row;
      }
    });

    range.setValues(updatedRows);

    Logger.log("Spreadsheet updated successfully.");
    previousRows = currentRows;
  } catch (error) {
    Logger.log("Error updating city temperatures: " + error);
  }
}

function getCityTemperature(city) {
  try {
    if (city === "") {
      return ""; 
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap}&units=metric`;
    const response = UrlFetchApp.fetch(apiUrl);
    const data = JSON.parse(response.getContentText());

    if (response.getResponseCode() === 200) {
      return data.main.temp.toFixed(1);
    } else {
      throw new Error(
        `Failed to fetch temperature for ${city}: ${data.message}`
      );
    }
  } catch (error) {
    throw new Error(
      `Failed to fetch temperature for ${city}: ${error.message}`
    );
  }
}

function onEdit(e) {
  updateCityTemperatures();
}

function createTimeTrigger() {
  ScriptApp.newTrigger('updateCityTemperatures')
    .timeBased()
    .everyMinutes(1)
    .create();
}

function setupTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));

  ScriptApp.newTrigger('onEdit')
    .forSpreadsheet(SpreadsheetApp.openById(SPREADSHEET_ID))
    .onEdit()
    .create();
  
  createTimeTrigger();

  Logger.log("Triggers have been set up.");
}

function initialize() {
  setupTriggers();
}
