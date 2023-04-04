import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const ImageUploader = ({ setImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imageUrl = await response.json();
        setImage(imageUrl);
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormControl>
      <FormLabel>Book Cover</FormLabel>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <Button mt={4} colorScheme="teal" onClick={handleUploadClick}>
          Upload Image
        </Button>
      )}
    </FormControl>
  );
};

export default ImageUploader;