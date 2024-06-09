import Image1 from '../../../assets/01.jpg'
import Image2 from '../../../assets/02.jpg'
import Image3 from '../../../assets/03.png'
import Image4 from '../../../assets/04.jpg'
import Image5 from '../../../assets/05.png'
import Image6 from '../../../assets/06.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop>
                <div className='sm:h-[480px]'>
                    <img src={Image1} className='h-full'/>
                </div>
                <div className='sm:h-[480px]'>
                    <img src={Image2} className='h-full'/>
                </div>
                <div className='sm:h-[480px]'>
                    <img src={Image3} className='h-full'/>
                </div>
                <div className='sm:h-[480px]'>
                    <img src={Image4} className='h-full'/>
                </div>
                <div className='sm:h-[480px]'>
                    <img src={Image5} className='h-full'/>
                </div>
                <div className='sm:h-[480px]'>
                    <img src={Image6} className='h-full'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;