// Update emoji title based on time of day:
$(function(){
  const hours = (new Date).getHours();
  //🏙️🌆🌃🌇
  //night: 0-4 or 20-24 
  const night = 'https://cdn.glitch.com/b3384a4b-72a7-4d1e-9839-98acf912077a%2Fnight-with-stars_1f303.png?1547406659151';
  //dawn: 4-8 
  const dawn = 'https://cdn.glitch.com/b3384a4b-72a7-4d1e-9839-98acf912077a%2Fcityscape-at-dusk_1f306.png?1547406659134';
  //day: 8-16 
  const day = 'https://cdn.glitch.com/b3384a4b-72a7-4d1e-9839-98acf912077a%2Fcityscape_1f3d9.png?1547406659104';
  //sunset: 16-20
  const sunset = 'https://cdn.glitch.com/b3384a4b-72a7-4d1e-9839-98acf912077a%2Fsunset-over-buildings_1f307.png?1547406659218';
  let emoji = night;
  if(hours >= 4 && hours < 8) {
    emoji = dawn;
  } else if (hours >= 8 && hours < 16){
    emoji = day;
  } else if (hours >= 16 && hours < 20) {
    emoji = sunset;
  }
  
  // :hat-tip: https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = emoji;
  document.getElementsByTagName('head')[0].appendChild(link);
});