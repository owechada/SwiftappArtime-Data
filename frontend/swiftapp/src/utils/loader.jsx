import Spinner from 'react-bootstrap/Spinner';


export default function Loader(){


return (<div id="loading-view" className="loader-container">
    <div>
 <Spinner animation="grow" variant="info" />

 </div>
</div>)
}