import { useEffect, useState } from "react"
import './card.css'

const Flashcard = (props: { question: string ; answer: string}) =>{

    const [flip, setFlip] = useState(true)
    useEffect(()=>{     
            setFlip(true)
    }, [props.question])

    return(
        <>
          <div className="card" onClick={()=>{setFlip(!flip)}}>
            {flip ? <div className="front">{props.question}</div>
             : <div className="back">{props.answer} </div>}
            </div>
        </>
      
    )

}
export default Flashcard;