import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {

const scrollToElement = (element) => {
    scroller.scrollTo(element,{
       duration:500,
       delay:600,
       smooth:true,
       offset:-100
      });
      props.onClose(false)


}


    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose ={()=> props.onClose(false)}
        >
        <List component ="nav">
        
        <ListItem buttom onClick ={()=> scrollToElement('Featured')}>
          Event satarts in
        </ListItem>
        
        <ListItem buttom onClick ={()=> scrollToElement('Venue Info')}>
           Venue NFO 
         </ListItem>

         <ListItem buttom onClick ={()=> scrollToElement('Highlights')}>
           Highlights
          </ListItem> 

        <ListItem buttom onClick ={()=> scrollToElement('Pricing')}>
           Pricing
        </ListItem>

        <ListItem buttom onClick ={()=> scrollToElement('Location')}>
           Location
        </ListItem>

          </List> 

        </Drawer>
    )    
};

export default SideDrawer;