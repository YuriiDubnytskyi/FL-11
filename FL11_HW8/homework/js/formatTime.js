function formatTime(time) {
    let minute = time%60;
    let hour = (time-minute)/60%24;
    let day= time/60/24;
    return Math.floor(day)+" day(s) "+ hour + "hour(s) " +minute+ " minute(s)."
}
formatTime(120);