import React, { ChangeEventHandler } from "react";

type SearchInputProps = {
    searchQuery:string;
    handleSearchChange:ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({searchQuery,handleSearchChange}:SearchInputProps) => {
    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                style={{
                    padding: '8px',
                    marginBottom: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    maxWidth: '300px',
                }}
            />
        </div>
    )
};

export default SearchInput;