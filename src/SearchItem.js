const SearchItem = ({search, setSearch}) => {
  return (
    <form className = 'searchForm'>
        <label htmlFor = 'search'>Search</label>
        <input 
            id = 'search'
            type = 'text'
            role = 'searchbox'
            placeholder = 'Search Items'
            value = {search}
            onChange = {(searchEvent) => setSearch(searchEvent.target.value)}
        />
    </form>
  );
};

export default SearchItem;