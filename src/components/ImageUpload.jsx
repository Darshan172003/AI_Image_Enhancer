function ImageUpload(props) {

  const ShowImageHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  }
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
      <label
        htmlFor="fileInput"
        className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 hover:border-blue-500 transition duration-200 ease-in-out'
      >
        <input type="file" id="fileInput" className='hidden' onChange={ShowImageHandler} />
        <span className='text-lg font-medium text-gray-600'>Click or Drag to upload your Image</span>
      </label>
    </div>
  )
}

export default ImageUpload