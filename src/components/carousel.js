import React from 'react'
import {Link} from 'react-router-dom';



const Carousel = props =>  {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
       
              <div className="carousel-item active" style={{background :"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')",opacity:'0.6'}}>
                  <div className="project">
                    <div className="project-scenario">Senaryo1</div>
                    <div className="project-scenario-message">acıklama</div>
                  </div>
        
             
              </div>
    
              <div className="carousel-item" style={{background :"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"}}>
                
              </div>
       
              <div className="carousel-item" style={{background :"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"}}>
                
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
          </div>
    )
}

export default Carousel;
