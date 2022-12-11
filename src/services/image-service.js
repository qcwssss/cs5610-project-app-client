import axios from "axios";

export const uploadImageToCloud = async (formData) => {
  const response = await axios.post(process.env.REACT_APP_CLOUDINARY, formData);
  console.log(response.data);
  return response.data;
};

export const handleImageData = (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "yufx9r6u");
  return formData;
};
