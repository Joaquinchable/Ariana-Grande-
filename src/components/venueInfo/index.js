import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/icons/calendar.png';
import icon_location from '../../resources/icons/location.png';

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className= "vn_wrapper">
                 
                 <Zoom duretion={500}>
                  <div className="vn_item">
                    <div className="vn_outer">
                      <div className="vn_inner">
                         <div className="vn_icon_square bck_red"></div>
                            
                            <div className="vn_icon"
                            style={{
                                background:`url(${icon_calendar})`
                          }}> 
                          </div>

                               <div className ="vn_title">
                                 Event Date & Time
                                </div>
                                 <div className ="vn_title">
                                     Dec, 16, 2025
                                 </div>
 
                            </div>
                         </div> 
                     </div>
                  
                 </Zoom>

                <Zoom duretion ={500} delay={500}>

                     <div className="vn_item">
                         <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                             
                                  <div className="vn_icon"
                                  style={{
                                    background:`url(${icon_location})`
                                   }}> 
                                </div>

                                    <div className ="vn_title">
                                     Location
                                     </div>
                                     <div className ="vn_title">
                                      Foro Sol
                                    </div>
 
                            </div>
                         </div> 
                     </div>
                  
                   </Zoom>
                  
                </div>   
            </div>
          </div>
    );
};

export default VenueInfo;