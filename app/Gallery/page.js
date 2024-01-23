'use client'
import { Image } from "@nextui-org/react";

const Gallery = () => {
  return (
    <div className="pt-12">
      <h1 className="page_title">Gallery</h1>

      <div className="grid grid-cols-2 pt-8  lg:grid-cols-4 gap-8">
        {/* Row 1 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/vcs_small.jpg" alt="1" fill={true}/>
            <div className="overlay_text z-20">VCS - Culture Komission Board Member (HS22)</div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/oc_lab.jpg" alt="2" fill={true}/>
            <div className="overlay_text">Had a great time in the BCB III: OC lab</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/board_small.heic" alt="2" fill={true}/>
            <div className="overlay_text">Board from my lesson on molecular orbitals</div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content "  placeholder='blur' src="/img/Gallery/dominik.jpg" alt="1" fill={true}/>
            <div className="overlay_text">At Polyball 2023, Europes biggest dance ball</div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/retro_small.jpg" alt="2" fill={true}/>
            <div className="overlay_text">Second place at Retrosyntheton HS23</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/london_small.JPG" alt="3" fill={true}/>
            <div className="overlay_text">Exchange week between ETH Zurich and ICL (FS23)</div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/bike_small.HEIC" alt="1" fill={true}/>
            <div className="overlay_text">In summer you will find me on the road with my bike </div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content"  placeholder='blur' src="/img/Gallery/RBTL_big.jpg" alt="2" fill={true}/>
            <div className="overlay_text">Award for best poster and presentation in Blockkurs: Research Cycle in Genomics</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/sunset_small.HEIC" alt="2" fill={true}/>
            <div className="overlay_text">One of the countless stunning sunsets at ETH Hönggerberg</div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content"  placeholder='blur' src="/img/Gallery/heart_small.jpg" alt="1" fill={true}/>
            <div className="overlay_text">Cy5 labled mRNA under confacal microscope</div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/paintball_small.jpg" alt="2" fill={true}/>
            <div className="overlay_text">Most sucessful event I coordinated, VCS plays paintball against VMP</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/bib_big.HEIC" alt="2" fill={true}/>
            <div className="overlay_text">The library at ETH Hönggerberg, my favorite study spot</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery_card {
          position: relative;
          overflow: hidden;
        }

        .gallery_card:hover .image_content {
          filter: blur(8px);
        }

        .overlay_text {
          position: absolute;
          bottom: 10px;
          left: 10px;
          color: white;
          font-size: 20px;
          display: none;
        }

        .gallery_card:hover .overlay_text {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
