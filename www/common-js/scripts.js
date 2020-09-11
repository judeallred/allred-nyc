// Update favicon based on time of day:
$(function(){
  const hours = (new Date).getHours();
  //🏙️🌆🌃🌇
  //night: 0-4 or 20-24 
  const night = '/assets/night-with-stars_1f303.png?1547406659151';
  //dawn: 4-8 
  const dawn = '/assets/cityscape-at-dusk_1f306.png?1547406659134';
  //day: 8-16 
  const day = '/assets/cityscape_1f3d9.png?1547406659104';
  //sunset: 16-20
  const sunset = '/assets/sunset-over-buildings_1f307.png?1547406659218';
  let emoji = night;
  if(hours >= 4 && hours < 8) {
    emoji = dawn;
  } else if (hours >= 8 && hours < 16){
    emoji = day;
  } else if (hours >= 16 && hours < 20) {
    emoji = sunset;
  }
  
  // :tip-of-the-hat: https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = emoji;
  document.getElementsByTagName('head')[0].appendChild(link);
});