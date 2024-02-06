import axios from 'axios';

const imagesUpload = async (imageFiles) => {
  const cloudName = 'debqyv4o6';
  const uploadPreset = 'property_hunter';

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  try {
    const uploadPromises = imageFiles.map(async (imageFile, index) => {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', uploadPreset);
      formData.append('folder', `images/photos`); // Include the folder

      const response = await axios.post(cloudinaryUrl, formData);

      if (response.data && response.data.secure_url) {
        console.log(`Image ${index + 1} uploaded successfully:`, response.data.secure_url);
        return response.data.secure_url;
      } else {
        throw new Error(`Image ${index + 1} upload failed.`);
      }
    });

    const uploadedImageUrls = await Promise.all(uploadPromises);

    console.log('All images uploaded successfully:', uploadedImageUrls);
    return uploadedImageUrls;
  } catch (error) {
    console.error('Error uploading images:', error.message);
    throw error;
  }
};

export default imagesUpload;
