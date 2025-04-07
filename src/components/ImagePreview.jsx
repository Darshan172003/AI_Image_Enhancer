import Loading from "./Loading";

function ImagePreview(props) {
  return (
    <>
      <div className="mt-8 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Original Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-gray-800 text-white p-1">Original Image</h2>
          {props.uploaded ? (
            <img src={props.uploaded} alt="Uploaded" className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-80 bg-gray-200">No Image Selected</div>
          )}
        </div>

        {/* Enhanced Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-blue-500 text-white p-1">Enhanced Image</h2>

          {props.enhanced && !props.loading && (
            <img src={props.enhanced} alt="Enhanced" className="w-full h-full object-cover" />
          )}

          {props.loading ? (
            <Loading />
          ) : (
            !props.enhanced && (
              <div className="flex items-center justify-center h-full bg-gray-200">No Enhanced Image</div>
            )
          )}
        </div>

      </div>
      {/* Download Button */}
      {props.enhanced && !props.loading && (
        <div className="">
          <a
            href={props.enhanced}
            download="enhanced-image.jpg"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Download Enhanced Image
          </a>
        </div>
      )}
    </>
  );
}

export default ImagePreview;

