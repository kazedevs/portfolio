import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-center px-4 py-4 bg-[#0b0b10]">
      <div className="w-full max-w-4xl h-28 sm:h-32 md:h-36 overflow-hidden rounded-2xl relative">
        <Image
          src="/banner1.gif"
          alt="Banner"
          fill
          className="object-cover scale-126"
          priority
        />
      </div>
    </div>
  );
}
