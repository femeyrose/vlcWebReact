
import { Redirect } from 'react-router';

export default function Description(props) {

    function createMarkup() {
   
    return {__html: props.desc};
    
          }

return(<div>
  
    
<div dangerouslySetInnerHTML={createMarkup()}/>
</div>)

}