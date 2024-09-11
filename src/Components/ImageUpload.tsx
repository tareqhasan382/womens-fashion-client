import React, { useState } from "react";
import axios from "axios";
type Props = {
  setUploadedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
};

const ImageUpload: React.FC<Props> = ({ setUploadedImageUrl }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle image upload dsybkyula
  const handleImageUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Reservation");

    setUploading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
        formData
      );
      setUploadedImageUrl(response.data.secure_url); // Get the uploaded image URL
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  return (
    <div className="image-upload-container">
      <div className=" flex items-center gap-3 ">
        <label className=" cursor-pointer w-32 h-32 rounded flex items-center justify-center border-2 border-black ">
          + Add Images
          <br />
          <input
            type="file"
            onChange={handleImageChange}
            multiple
            accept="image/png , image/jpeg, image/webp"
            className="hidden cursor-pointer "
          />
        </label>

        {preview && (
          <div className="w-32 h-32 my-2 ">
            <img
              src={preview}
              alt="Selected Preview"
              className=" w-full h-full object-cover "
            />
          </div>
        )}
      </div>
      <button
        onClick={handleImageUpload}
        disabled={!image || uploading}
        className=" px-2 py-1 bg-blue-400 rounded my-2 "
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
};

export default ImageUpload;
