import SrchbarStyle from './Searchbar.module.css';
import { IProps } from '../../types/interfaces';
import { useSearchParams } from 'react-router-dom';
useSearchParams;
function Searchbar({ onSubmitForm }: IProps) {
  const onSubmitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm(event.currentTarget.inputValue.value);
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
      />
    </form>
  );
}

export default Searchbar;
