import queryString from 'query-string';

export default function getQparam(search: string) {
  return queryString.parse(search);
}
