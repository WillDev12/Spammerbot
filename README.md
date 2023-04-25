<br>

<h3 align="center">⚠️ WARNING: PLEASE SEE <a href="https://github.com/WillDev12/Spammerbot/blob/main/TERMSOFUSE">USAGE POLICIES</a> BEFORE USING THIS PROGRAM ⚠️</h3>

<br><br>

<p align="center"><img src="https://cdn-icons-png.flaticon.com/512/4403/4403384.png" width="250" height="250"></p>

<h1 align="center">Spammerbot</h1>

<p align="center">
<img src="https://img.shields.io/github/followers/WillDev12?label=follow%20my%20github&logo=github&style=for-the-badge">
<img src="https://img.shields.io/github/stars/WillDev12/Spammerbot?style=for-the-badge">
<img src="https://img.shields.io/github/forks/WillDev12/Spammerbot?style=for-the-badge">
<img src="https://img.shields.io/github/watchers/WillDev12/Spammerbot?style=for-the-badge">
</p>

<br>
<br>

## What it does
Rapidly sends emails to another inbox using the Gmail API.[^1]

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

[^1]: Sadly due to the fact that logging into an external account cannot be performed in Google Apps Script, every email sent will be delivered from your own personal account.
