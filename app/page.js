import Progress from './components/progress'
import Carousel from "./components/carousel"

export default function Home() {

  return (
    <div>
      <div className="mt-5">
        <div className='text-center text-bold text-xl'>Circular Progress</div>
        <div className='w-24 flex justify-center w-full'>
          <Progress />
        </div>
      </div>
      <div>Hello</div>
      <div className='w-96 m-auto mt-10'>
        <div className='text-center text-bold text-xl'> Auto Carsouel</div>
        <div>
          <Carousel/>
        </div>
      </div>
    </div>

  );
}