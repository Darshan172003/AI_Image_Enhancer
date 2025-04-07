# AI Image Enhancer

AI Image Enhancer is a React-based web application that allows users to upload an image, enhance it using AI-powered APIs, and download the enhanced version. The project is built with Vite for fast development and Tailwind CSS for styling.

## Features

- **Image Upload**: Drag and drop or click to upload an image.
- **AI Enhancement**: Enhance images using the PicWish API.
- **Preview**: View both the original and enhanced images side by side.
- **Download**: Download the enhanced image with a single click.
- **Responsive Design**: Fully responsive layout for all devices.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Fast development environment.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API requests.
- **PicWish API**: AI-powered image enhancement API.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Darshan172003/AI_Image_Enhancer
   cd AI_Image_Enhancer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your PicWish API key:
   ```
   VITE_PICWISH_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Upload an image by clicking the upload area or dragging and dropping an image file.
2. Wait for the AI to enhance the image.
3. Preview the original and enhanced images.
4. Download the enhanced image by clicking the "Download Enhanced Image" button.


## API Integration

The application uses the PicWish API for image enhancement. The API key is stored in the `.env` file and accessed via `import.meta.env.VITE_PICWISH_API_KEY`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.


## Acknowledgments

- [PicWish API](https://picwish.com/) for providing the AI image enhancement service.
- [Vite](https://vitejs.dev/) for the fast development environment.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.