import posterPath from '../images/FlimStrip_PH.svg';
const imagePath = 'https://image.tmdb.org/t/p/w500';
const defaultPath = posterPath;

export default function getPosterPath(urlPart: string | null) {
  if (urlPart) {
    return `${imagePath}${urlPart}`;
  }
  return defaultPath;
}
