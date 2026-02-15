import './hero.css'
export default function HeroFunction(){
    return(
        <div className='herodiv'>
            <div>
            <h1 className='h1text'>Welcome to Jason Shopping </h1>
            <p className='paragraph text-primary'>Buy your latest shopping gadgets </p>
            <button className='btn btn-success'> Buy Now </button>
            <button className='btn btn-primary ml-4'>Contact us</button>
            </div>
            <img className='image' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Tennis shoes" />
        </div>
    )
}