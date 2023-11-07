export default function Button(props){


    return(<>
        <button onClick={props.onclick} className='gen-btn'>{props.text}</button>

        </>)
}