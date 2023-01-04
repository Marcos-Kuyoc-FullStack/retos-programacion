/*
Dada una hora en formato de 12-horas AM/PM, conviértala a hora militar (24 horas).

Nota:
- 12:00:00 AM en un reloj de 12 horas es 00:00:00 en un reloj de 24 horas.
- 12:00:00 PM en un reloj de 12 horas es 12:00:00 en un reloj de 24 horas.

Input 
07:05:45PM

Output
19:05:45
*/

const timeConversion = (time) => {
  return parse24(time);
}

const parse24 = (time) => {
  const am = time.includes("AM") || time.includes("am");
  const pm = time.includes("PM") || time.includes("pm");
  
  if (am) {
    const {hh, mm, ss} = hhmmss(time);
    let hh24 = hh;
    
    if (hh === 12) {
      hh24 = 0;
    }
    
    return validFormat(hh24, mm, ss);
  }
  
  if (pm) {
    const {hh, mm, ss} = hhmmss(time);
    let hh24 = hh + 12;
    
    if (hh24 === 24) {
      hh24 = 12;
    } 
    
    return validFormat(hh24, mm, ss);
  }
}

const validFormat = (hh, mm, ss) => {
  const format24 = TM24();
  const format60 = TM60();
  
  const parseHH = formatTwoCharacter(hh);
  const isFormat24 = format24.includes(parseHH);

  if (!isFormat24) {
    throw 'invalid time format';
  }

  const parseMM = formatTwoCharacter(mm);
  const parseSS = formatTwoCharacter(ss);

  const isMM24 =  format60.includes(parseMM);
  const isSS24 =  format60.includes(parseSS);

  if (!isMM24) {
    throw 'invalid minute format';
  }

  if (!isSS24) {
    throw 'invalid seconds format';
  }

  return `${parseHH}:${parseMM}:${parseSS}`;
}

const formatTwoCharacter = (i) => {
  try {
    console.log(typeof i);
    let format = '';

    if (i < 10) {
      format = '0'+i.toString();
    } else {
      format = i.toString()
    }

    return format;
  }catch(e) {
    console.log('ERROR');
    console.error(e);
  }
}

const hhmmss = (time) => {
  const newTime = time.substr(0, time.length-2);
  const splitTime = newTime.split(':');
  const hh = parseInt(splitTime[0]);
  const mm = parseInt(splitTime[1]);
  const ss = parseInt(splitTime[2]);
  
  return {hh, mm, ss};
}

const TM24 = () => {
  let hh = [];
  let formatHH = '';
  
  for (let i=1; i <= 24; i++) {
    if (i === 24) {
      formatHH = '00'
    } else {
      if (i < 10) {
        formatHH = '0'+i.toString();
      } else {
        formatHH = i.toString()
      }
    }
    hh.push(formatHH);
  }
  return hh;
}

const TM60 = () => {
  let mm = [];
  let formatMM = '';
  for (let i= 1; i <= 60; i++) {
    if (i === 24) {
      formatMM = '00'
    } else {
      if (i < 10) {
        formatMM = '0'+i.toString();
      } else {
        formatMM = i.toString()
      }
    }
    mm.push(formatMM);
  }
  return mm;
}

timeConversion('07:05:45PM');
timeConversion('12:00:0AM');
timeConversion('12:00:0PM');
timeConversion('06:40:03AM');
timeConversion('04:59:59AM');