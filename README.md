# daily-scheduler
![GitHub](https://img.shields.io/github/license/AndrewLawendy/daily-scheduler)
![GitHub package.json version](https://img.shields.io/github/package-json/v/AndrewLawendy/daily-scheduler)
![npm](https://img.shields.io/npm/dw/daily-scheduler)
![GitHub file size in bytes](https://img.shields.io/github/size/AndrewLawendy/daily-scheduler/src/index.js)

[![NPM](https://nodei.co/npm/daily-scheduler.png?downloads=true)](https://nodei.co/npm/daily-scheduler/)

This will help you to schedule any function to be executed daily at a specific time.
Can be used on a browser or in an electron app depending on the browser's/operating system's time zone.

## Getting Started

Install daily-scheduler using npm:

```console
$ npm install daily-scheduler
```

Import daily-scheduler and schedule a task:

```javascript
var schedule = require('daily-scheduler');

schedule(14,0,0, () => {
  console.log("It's 02:00 PM!");
});
```

## Syntax
daily-scheduler takes 4 arguments
- hours: 0 - 23
- minutes: 0 - 59
- seconds: 0 - 59
- callback: function, _typically `() => void`_
