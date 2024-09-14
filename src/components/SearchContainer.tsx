import React from 'react';
import SearchInput from './SearchInput';
import { FaHome } from 'react-icons/fa'; 

interface SearchContainerProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  usernameFilter: string;
  setUsernameFilter: (value: string) => void;
  emailFilter: string;
  setEmailFilter: (value: string) => void;
  phoneFilter: string;
  setPhoneFilter: (value: string) => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  nameFilter,
  setNameFilter,
  usernameFilter,
  setUsernameFilter,
  emailFilter,
  setEmailFilter,
  phoneFilter,
  setPhoneFilter,
}) => {
  return (
    <div className="border-slim4 formula navbar max-w-4xl mx-auto bg-gray-100 p-4 rounded-md shadow-md mb-6 flex items-center  ">
      <a href="/smart-it" className="mr-4 text-[#CF89D9]">
        <FaHome size={20} />
      </a>
      <div className="flex flex-wrap justify-center gap-2">
        <SearchInput
          label="Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <SearchInput
          label="Username"
          value={usernameFilter}
          onChange={(e) => setUsernameFilter(e.target.value)}
        />
        <SearchInput
          label="Email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
        />
        <SearchInput
          label="Phone"
          value={phoneFilter}
          onChange={(e) => setPhoneFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchContainer;