import Image, { StaticImageData } from "next/image";

const ClientLogo = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="h-[160px] bg-white rounded-lg p-2 flex justify-center items-center relative">
      {image && <Image src={image} alt="client-logo" />}
    </div>
  );
};

export default ClientLogo;
