import React from 'react';

const ImageItem = ({ title, url }) => {
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.gif`; 
    link.target = "_blank"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
      <button onClick={downloadImage}>Descargar</button>
    </div>
  );
}

export default ImageItem;
