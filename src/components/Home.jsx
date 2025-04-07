import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhanceImageAPI } from '../utils/EnhanceImageAPI'

function Home() {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhanceImage, setEnhanceImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const UploadImageHandler = async (file) => {
    // console.log(image);
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    try {
      const enhancedURL = await enhanceImageAPI(file)
      setEnhanceImage(enhancedURL)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhanceImage?.image}
      />
    </>
  )
}

export default Home