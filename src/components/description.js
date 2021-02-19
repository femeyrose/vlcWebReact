export default function Description(props) {

    function createMarkup() {

    return {__html: props.desc};
          }

return(<div dangerouslySetInnerHTML={createMarkup()}/>)

}