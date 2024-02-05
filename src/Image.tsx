interface ImageInterface {
  filename: string;
  url: string;
}

const Image: React.FC<ImageInterface> = ({ filename, url}) => {

  return (
    <a href={`${url}`}><img src={`${filename}`} id="socialLinks" alt={`${filename}`} className="img-fluid" /></a>
  );
};

export default Image;