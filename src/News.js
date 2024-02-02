import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

import Card from './card';

function News() {
  var [TopicNew, setTopic] = useState("delhi");

  var [FullArticle, setArticle] = useState([]);

  function NewTopic(event) {
    TopicNew = event.target.value;

    // if(event!=null){
    //   event.preventDefault();
    // }

    // console.log(city);

    setTopic(TopicNew);
  }

  async function fetchArticle() { 
    try{
    const response = await axios.get(
      `http://newsapi.org/v2/everything?q=${TopicNew}&apiKey=`{api_key}`
    );

    var FullArticle = response?.data?.articles;

    // var image=response.data.article[1];
    // console.log

    console.log(FullArticle);
    setArticle(FullArticle);
    }

    catch(error) {

    }
  }

  //useEffect(fetchArticle, [TopicNew]);

  useEffect(() => {
    fetchArticle();
  }, [TopicNew]);

  return (
    <>
      <form id="userInputForm">
        <div className="bar">
         <input type="text" name="News" onChange={NewTopic} required  className="searchBar" placeholder="Search News"/>
        </div>
      </form>
      

      <div className="mapDiv">


      {FullArticle.map((element) => {
              return (
                
                   <Card
                         element={element}
                         

                      />

              )


                    

              })
            }

</div>

      </>

      )
      

  
    }

export default News;
