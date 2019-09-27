const MASTER_ID = "1VrtqJhWbcU_oIuHALlNXQvnNWMIBDrP2ZHiOlVLZ6sY";
const MASTER_SHEET_NAME = "ques1";

function formMapper(masterId, sheetName): object {
  const spreadSheet = SpreadsheetApp.openById(masterId);
  const sheet = spreadSheet.getSheetByName(sheetName);
  const rows = sheet.getDataRange();
  const values = rows.getValues();

  Logger.log("NumRows: %s", rows.getNumRows());
  Logger.log("Values: %s", values);

  return values;
}

function main(): void {
  const mapItems = formMapper(MASTER_ID, MASTER_SHEET_NAME);
  let map = {};
  mapItems.forEach( (item) => {
    const key = item[0];
    const value = item[1];

    map[key] = value;
  });

  Logger.log("Map: %s", map);
}
