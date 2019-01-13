// Update emoji title based on time of day:
$(function(){
  const hours = (new Date).getHours();
  //🏙️🌆🌃🌇
  //night: 0-4 or 20-24
  //dawn: 4-8
  //day: 8-16
  //dusk: 16-20
  let emoji = "🌃";
  if(hours >= 4 && hours < 8) {
    emoji = "🌆";
  } else if (hours >= 8 && hours < 16){
    emoji = "🏙️";
  } else if (hours >= 16 && hours < 20) {
    emoji = "🌇"
  }
  
  document.title = emoji + " Allred.nyc";
});