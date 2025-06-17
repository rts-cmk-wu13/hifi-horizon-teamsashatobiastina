import HeroImg from '../assets/extra billeder/hero.png';

export default function Hero() {

    return (
        <div className='Hero w-full'>
        <img className='w-full h-auto'
        src={HeroImg} alt="hero-billede" />
        </div>
    )
}