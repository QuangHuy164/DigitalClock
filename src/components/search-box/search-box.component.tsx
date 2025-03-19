import './search-box.styles.css';

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a:string) => void
}

type SearchBoxProps = {
  className: string;
  placeholder?:string;
  onChangeHandler: (a:string) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
          <input 
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder}
            onChange={(e) => onChangeHandler(e)} 
      />
        );

export default SearchBox;