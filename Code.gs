// 🄯 copyleft WillDev12 2023

function doGet(e) {
  
  var service = HtmlService.createHtmlOutput(UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/Spammerbot/main/src/index.html")).setTitle("Spammerbot | The gmail spammer");
  return(service);

}

function sendSpam(email, number, message) {

  var i = 0;
  var num;

  while (i <= number) {

    num = Math.floor((Math.random()*1000000000000)+1);
    MailApp.sendEmail(email, num, message);
    i++;

  }

}
