
import girl from '../../images/girl.jpg'
import bg from '../../images/bg.jpg'
import design from './HomeBody.module.scss'
import comp from '../../images/computing.png'



const HomeBody = () => {
  return (
    <>
    <div className={`container ${design.background}`}>
      <h2 className='d-flex p-5'> Live To Create </h2>

      <div className={design.background}>
           <div className={design.boxes}>
     <div className={design.text}>
      <h4 className={design.we}> We Will Make </h4>
      <h2 className={design.machine}> Your Machine Learn </h2>
    <p>
Use AI to get the best out of your business
We are a new company who believes that AI has a place in every business and you shouldn’t have to be Facebook, Google or Amazon to benefit. We have created a recommender system that can be adapted to any catalogue and to optimise for any 
</p>

     </div>
     <img src={bg} alt='girl' className={design.girl}/>
     <img src={comp} alt='girl' className={design.comp}/> 
     <img src={girl} alt='girl' className={design.bg}/>    
     </div>
</div>
    </div>
    
    </>
  )
}

export default HomeBody