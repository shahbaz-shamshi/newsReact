
import Cardimage from './Cardimage';

function Card(props){
    //console.log(props)
    const element = props.element;

return (
    <main class="mainDiv">
    <article class="card">
      
      <Cardimage
      
      image={element.urlToImage}

      />
      
      {/* <img
        src={element.urlToImage}
        alt="new photo"
      /> */}
      <div class="player">
      <p className="titleClass"> {element.title}</p> 

      <p> {element.content}</p> 

      <a href={element.url} className="button-class" target="_blank">Read More</a>


      </div>
      </article>

      </main>
  )

}

export default Card;
