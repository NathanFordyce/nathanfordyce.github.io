interface ImageInterface {
  filename: string;
  className?: string;
}

const Image: React.FC<ImageInterface> = ({ filename, className }) => {

  return (
    <img src={`${filename}`} id="socialLinks" alt={`${filename}`} className={`img-fluid ${className}`} />
  );
};

export default Image;