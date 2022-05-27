import Image from 'next/image';
import sunset2 from '../public/sunset2.jpg';

export default function BetterFormatSizeResolution() {
  return (
    <div className="container">
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image
        src="/sunset1.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
        loading="eager"
        layout="fixed"
      />
      
      <Image
        src={sunset2} 
        alt="Sunset" 
        width={600} 
        height={450} 
        layout="responsive"
        placeholder="blur"
      />

    </div>
  )
}
