const ImageBlock = ({ src, alt, caption }) => (
  <figure className="my-8">
    <img src={src} alt={alt} className="rounded-lg shadow-md w-full" />
    {caption && <figcaption className="text-center text-md text-gray-600 mt-2">{caption}</figcaption>}
  </figure>
);
export default ImageBlock;
