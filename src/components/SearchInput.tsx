import React from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-2">
      <label className="mb-1 text-sm search-color">{label}</label>
      <input
        className="montreal border border-slim4 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
