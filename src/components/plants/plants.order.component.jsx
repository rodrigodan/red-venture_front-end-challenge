import React from 'react';
import {Container} from 'react-bootstrap';
import './plants.order.styles.scss'
import NavigationBar from '../navigationBar/navigationBar.component'
import FormBackground from './plants.order2.component'


class PlantsFormulario extends React.Component{

    
    render(){
        let name1 = this.props.plantDetail.name.split(" ")[0];
        let name2 = this.props.plantDetail.name.split(" ")[1];
        let toxicity = false;

        if(this.props.plantDetail.toxicity){
            toxicity = true;
        }
        else{
            toxicity = false;
        }
        return(
          
            <div className = "start-navigationbar">
                <Container>
                    <NavigationBar />
                </Container>
            <div className = {`plant-items ${this.props.plantDetail.id}`}>
                    <div className = "grid1">
                        <Container>
                        <h1 className = "namestop name1">{name1}</h1>
                        <h1 className = "namestop name2">{name2}</h1>
                        <p className = "item-price">${this.props.plantDetail.price}</p>
                        
                        <div clasName = "cardPlantDetail">
                            <img alt = "monster" src = {`${this.props.plantDetail.url}`}/>
                        </div> 

                        <p className = "details-name detail-sun">{this.props.plantDetail.sun.charAt(0).toUpperCase() + this.props.plantDetail.sun.slice(1)} sunlight</p>
                        <p className = "details-name detail-water">Water {this.props.plantDetail.water}</p>
                        {toxicity ? 
                        <p className = "details-name detail-toxic">
                            <span className = "aware">Beaware!</span>
                            Toxic for Pets
                        </p> : 
                        <p className = "details-name">Non-toxic for pets</p> }
                        </Container>
                    </div>   
                        
   

                        <div className = "grid2">
                            <FormBackground id = {this.props.plantDetail.id} featureforplants = {this.props.featureforplants}/>
                       

                        </div>
            </div>
            </div>
        )
    }
}

export default PlantsFormulario;