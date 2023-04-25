<!-- begin rushed readme file -->
# Spammerbot
Annoy your friends with the new GS program **SPAMMERBOT!!11!**

<br>

## What it does
Sends a whole lot of emails **AS YOU**<sup>sadly this isn't anonymous</sup> depending on some user input

<br>

## How to install?

1. Open new Google Apps Script
2. Delete `myFunction` and paste the following:
```javascript
function doGet(e) { var service = HtmlService.createHtmlOutput(UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/Spammerbot/main/src/index.html")).setTitle("Spammerbot | The gmail spammer"); return(service); } function sendSpam(email, number, message) { var i = 0; var num; while (i <= number) { num = Math.floor((Math.random()*1000000000000)+1); MailApp.sendEmail(email, num, message); i++; } }
```
3. Deploy as web app and open the url!

<br><br>

# Like content like this?

Check out my [profile](https://github.com/WillDev12) or share it! (It means a lot to me)<br>
```
https://github.com/WillDev12
```
