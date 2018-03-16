function isWeekday(day){
  var weekEnd = !day.startsWith("S");
  console.log(weekEnd);
  return weekEnd;
}
