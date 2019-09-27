const PropService = PropertiesService.getScriptProperties();
const MASTER_ID = PropService.getProperty("MASTER_ID");

function formMapFrom(masterId, sheetName): object {
  const sheet = SpreadsheetApp.openById(masterId).getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();

  let map = {};

  values.forEach( (item) => {
    const key = item[0];
    const value = item[1];
    map[key] = value;
  });

  return map;
}

function submitForm(event): void {
  const formName = FormApp.getActiveForm().getTitle();
  const itemResponses: object = event.response.getItemResponses();
  const map: object = formMapFrom(MASTER_ID, formName);

  let record: object = {};
  itemResponses.forEach( (item) => {
    const key = map[item.getItem().getTitle()];
    const value = item.getResponse();
    record[key] = value;
  });


  Logger.log("Map: %s", map);
  Logger.log("Records: %s", [record]);
  Logger.log(Moment.moment().format());
}
