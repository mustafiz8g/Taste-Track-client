
import f1 from '../../../assets/1.png'
import f2 from '../../../assets/2.png'
import f3 from '../../../assets/3.png'
import f4 from '../../../assets/4.png'
import f6 from '../../../assets/6.png'

import { useKeenSlider } from "keen-slider/react" 
import "keen-slider/keen-slider.min.css"
import "./Slider.css"

const animation = { duration: 7000, easing: (t) => t }
const Slider = () => {
    const carousel = (slider) => {
        const z = 300
        function rotate() {
          const deg = 360 * slider.track.details.progress
          slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
        }
        slider.on("created", () => {
          const deg = 360 / slider.slides.length
          slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
          })
          rotate()
        })
        slider.on("detailsChanged", rotate)
      }

      const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          drag: true,
          mode: "free-snap",
          created(s) {
            s.moveToIdx(5, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
        },
        
        [carousel]
      )
      
    return (
        <div className="w-11/12 mx-auto flex justify-center  pb-16 ">
              <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 "><img className='w-full h-full' src={f1} alt="" /></div>
          <div className="carousel__cell number-slide2"><img className='w-full h-full' src={f2} alt="" /></div>
          <div className="carousel__cell number-slide3"><img className='w-full h-full' src={f3} alt="" /></div>
          <div className="carousel__cell number-slide4">EMPTY</div>
          <div className="carousel__cell number-slide5"><img className='w-full h-full' src={f4} alt="" /></div>
          <div className="carousel__cell number-slide6"><img className='w-full h-full' src={f6} alt="" /></div>
        </div>
      </div>
      
        </div>
    );
};

export default Slider;