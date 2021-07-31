import React, {useEffect, useState} from 'react'
import Galery from './components/galery/Galery'
import SearchImage from './components/searchImage/SearchImage'
import {  getImages, getImagesBySearch } from './services/pexelsApi'

const App = () => {


  const [images, setImages] = useState([]);

    useEffect(() => {
        getImages().then(data => {
          setImages(data)
        });

    }, [])

  const handleSearchImg = (word) => {
    getImagesBySearch(word).then(data => {
      setImages(data)
    })
  }


 
  return (
    <div>
      <SearchImage handleSearchImg={handleSearchImg} />
      <Galery images={images}/>
    </div>
  )
}

export default App
