import avatar from '../images/Avatar_PH.svg';
const imagePath = 'https://image.tmdb.org/t/p/w500';
const defaultPath = avatar;

export default function getAvatarPath(urlPart: string | null): string {
  if (urlPart) {
    const posterPath = `${imagePath}${urlPart}`;
    return posterPath;
  }
  const posterPath = defaultPath;
  return posterPath;
}
