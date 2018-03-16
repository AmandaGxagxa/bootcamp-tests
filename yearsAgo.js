function yearsAgo(year){
  var date = new Date();
  var thisYear = date.getFullYear();
  var result = thisYear-year;
  console.log (result);
  return result;


}
