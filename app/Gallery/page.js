'use client'
import { Image } from "@nextui-org/react";

const Gallery = () => {
  return (
    <div className="">
      <h1 className="page_title">Gallery</h1>

      <div className="grid grid-cols-2 pt-8  lg:grid-cols-4 gap-8">
        {/* Row 1 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/cloud.jpg" alt="1" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text z-20">Irridescnet cloud in the skys</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/vcs_small.jpg" alt="1" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text z-20">VCS - Culture Komission Board Member (HS22)</div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/oc_lab.jpg" alt="2" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Had a great time in the BCB III: OC lab</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/board_small.jpg" alt="3" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Board from my lesson on molecular orbitals</div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/motorradtur.jpg" alt="5" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">View from my last vacation (2024)</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content "  placeholder='blur' src="/img/Gallery/dominik.jpg" alt="4" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">At Polyball 2023, Europes biggest dance ball</div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/retro_small.jpg" alt="5" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Second place at Retrosyntheton HS23</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/london_small.JPG" alt="6" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Exchange week between ETH Zurich and ICL (FS23)</div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/weidaussicht.jpg" alt="7" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">View from the Weid Aussicht in Zurich </div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/bike_small.jpg" alt="7" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">In summer you will find me on the road with my bike </div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content"  placeholder='blur' src="/img/Gallery/RBTL_big.jpg" alt="8" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Award for best poster and presentation in Blockkurs: Research Cycle in Genomics</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/sunset_small.jpg" alt="9" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">One of the countless stunning sunsets at ETH Hönggerberg</div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid gap-4">
          {/* Column 1 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content"  placeholder='blur' src="/img/Gallery/alphainsights.jpg" alt="10" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">First lab day with alphainsights</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content"  placeholder='blur' src="/img/Gallery/heart_small_2.jpg" alt="10" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Cy5 labled mRNA under confocal microscope</div>
          </div>
          {/* Column 2 */}
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/paintball_small.jpg" alt="11" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">Best event I coordinated, VCS plays paintball against VMP</div>
          </div>
          <div className="gallery_card">
            <Image radius="lg"  className="image_content" placeholder='blur' src="/img/Gallery/bib_big.jpg" alt="12" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
            <div className="overlay_text">The library at ETH Hönggerberg, my favorite study spot</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;
