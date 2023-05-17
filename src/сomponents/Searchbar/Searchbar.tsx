import { useState } from 'react';
import SrchbarStyle from './Searchbar.module.css';
import { useSearchParams } from 'react-router-dom';

function Searchbar() {
  const [_, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>('');

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryValueEvent = event.target.value;
    setInputValue(queryValueEvent);
  };

  const onSubmitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const queryValueEvent = event.currentTarget.inputValue.value;
    queryValueEvent ? setSearchParams({ query: queryValueEvent }) : setSearchParams({});
  };

  return (
    <form onSubmit={onSubmitSearchForm} className={SrchbarStyle.SearchForm}>
      <button type='submit' className={SrchbarStyle.SearchFormButton} name='button'>
        Search
      </button>
      <input
        className={SrchbarStyle.SearchFormInput}
        type='text'
        autoComplete='off'
        placeholder='Search movie'
        name='inputValue'
        onChange={inputChange}
        value={inputValue}
      />
    </form>
  );
}

export default Searchbar;
