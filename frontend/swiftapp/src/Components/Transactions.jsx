import ListGroup from 'react-bootstrap/ListGroup';


export default function Transactions(props){



    return (<div className='transactions-container'>
<h3>Transactions</h3>
{ props.obj.length>0?
<ListGroup as="ol" numbered>
    {props.obj.map((item,key)=>{

return (<ListGroup.Item as="li">{item.name }:{item.status}</ListGroup.Item>)

    })} 
       </ListGroup>:<p>All your transactions will appear here</p>}
 

    </div>)
}