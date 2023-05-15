import { genreTable } from './geners';
function getGenres(arr: number[]) {
  return arr
    .map((id) => {
      return genreTable.find((gener) => gener.id === id);
    })
    .map((gener) => gener!.name);
}

export default getGenres;
