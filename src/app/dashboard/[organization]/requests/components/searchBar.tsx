import { useState, ChangeEvent } from 'react';
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center w-[729px]" style={{ backgroundColor: '#F1F5F9', borderRadius: '6px 6px 6px 6px', height: '40px' }}>
      <Search className="w-500 h-5 text-gray-400 mx-2" />
      <input
        style={{ backgroundColor: '#F1F5F9', border: 'none', flex: 1, outline: 'none', marginLeft: '2px', padding: '0' }}
        type="text"
        placeholder="Buscar un pedido"
        value={query}
        onChange={handleInputChange}
        className="px-3 py-1"
      />
    </div>
  );
};

export default SearchBar;
