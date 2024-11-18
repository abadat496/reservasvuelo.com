import Image from "next/image";

const LazyImage = ({ src, alt, height, width, fill, ...rest }) => {
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width || 50}
      height={height || 50}
      quality={100}
      fill={fill}
      {...rest}
      loading="lazy"
    />
  );
};

export default LazyImage;
