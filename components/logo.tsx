import Image from "next/image";
import LogoImage from "@/public/awdaw.png";

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
  return <Image src={LogoImage} alt="Logo" height={85} />;
};
