// import posterPH from '../images/FlimStrip_PH.svg';

const imagePath = 'https://image.tmdb.org/t/p/w500';
// const defaultPath = '../images/FlimStrip_PH.svg';
// 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-768x768.png';

export default function getPosterPath(urlPart: string | null) {
  // console.log(urlPart, Date.now());
  if (urlPart) {
    return `${imagePath}${urlPart}`;
  }
  return '../images/FlimStrip_PH.svg';
}
