import HueObject from '../HueObject'
import Hue from './Hue'
import PostHue from './PostHue'


interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike: (id?:number)=> void

}

const Main = ({hues, addHue, toggleLike} : Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>

        <PostHue addHue={addHue}/>


        {hues.map( (hue) => ( 
            
            <Hue hue={hue} toggleLike={toggleLike}/>
       ))}

        

    </div>
  )
}

export default Main