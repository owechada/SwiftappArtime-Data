import ListGroup from 'react-bootstrap/ListGroup';


export default function Transactions(props){



    return (<div className='transactions-container'>


<ListGroup as="ol" numbered>
    {props.obj.map((item,key)=>{

return (<ListGroup.Item as="li">{item.name }:{item.status}</ListGroup.Item>)

    })} 
       </ListGroup>
 

    </div>)
}