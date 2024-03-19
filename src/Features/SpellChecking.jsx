import React from 'react'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'

const SpellChecking = () => {
  return (
    <>
  <div className="text-white flex justify-center items-center m-8 text-3xl">
    Spell Checking 
  </div>
  <div className="flex flex-row justify-center items-center gap-4">
    <SearchBar placeholder="Enter Word"/>
    <Button text="Spell Check" style={{ width: '120px' }} />
  </div>
  <div className="flex justify-center container mx-auto items-center p-4 m-4 border border-gray-300 rounded-lg h-80 w-1/2 text-white">
    Output Text Goes Here
  </div>
</>
  )
}

export default SpellChecking
