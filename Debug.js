function shouldISend(wakeUpHour, sleepHour) {
  const now = new Date();

  const wakeUpTime = new Date();
  wakeUpTime.setHours(wakeUpHour);
  wakeUpTime.setMinutes(0);

  const sleepTime = new Date();
  sleepTime.setHours(sleepHour);
  sleepTime.setMinutes(0);

  if (wakeUpTime.getTime() > sleepTime.getTime()) {
    sleepTime.setDate(sleepTime.getDate() + 1);
  }

  if (
    wakeUpTime.getTime() < now.getTime() &&
    sleepTime.getTime() > now.getTime()
  ) {
    console.log("Send the spam!");
  } else {
    console.log(
      "Wait to send spam, next awake at",
      wakeUpTime.toLocaleString()
    );
  }
}

shouldISend(20, 11);
