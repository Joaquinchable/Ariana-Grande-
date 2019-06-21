import React,{ Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';
 
class Discount extends Component{
 
state = { 
    discountStart:0,
     discountend:30
     }
 
     porcentage = () => {
                if (this.state.discountStart <  this.state.discountend){
         this.setState({
                 discountStart: this.state.discountStart + 1  
              })
           }
         } 
  componentDidUpdate(){
        
    setTimeout(()=>{
    this.porcentage()    
        },30)   
  }
             
    render(){
        return(
    
             <div className="center_wrapper">
                <div className="discount_wrapper">
       
                     <Fade
                     onReveal={()=> this.porcentage()}
                     >
                        <div className="discount_porcentage">
                 
                          <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                        </div>
                     </Fade>
       
        <Slide right>
            
               <div className="discount_description">
            <h3>Purchase tickets before 20th June</h3>
            <p>sequi nesciunt. Neque porro quisquam est, 
                qui dolorem ipsum quia dolor sit amet, 
              consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt </p>
              
            
            <MyButton
            text="Purchase tickets"
            bck="#ffa800"
            color="#ffffff"
            link="http://google.com"
            
            />
               </div>
            
            
         </Slide>
            
       </div>
   </div>
       
       
       )}
    }
       export default Discount;