import React, { useEffect, useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [search,setSearch]=useState("")
  const [debounce,setDebounce]=useState("")
useEffect(()=>{
  const timer=setTimeout(()=>{
    onSearch(search)
  },400);
  return ()=>clearTimeout(timer);
},[search])
  return (
    <div className="mx-auto flex w-full max-w-2xl items-center justify-between rounded-full border border-gray-300 bg-gray-50 px-4 py-2 transition hover:bg-zinc-100 focus-within:border-blue-600 focus-within:bg-white">
  
  <span className="mr-2 text-gray-400">
    🔍
  </span>

  <input
    type="text"
    placeholder="Search products..."
    className="w-full bg-transparent text-sm outline-none"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>
  )
}

export default SearchBar