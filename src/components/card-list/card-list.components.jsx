import React from 'react';

import './card-list.styles.scss';

import Card from '../card/card.component';

import TitleQuizzResult from '../end/title.component'

import PlantsFormulario from '../plants/plants.order.component'

import NavigationBar from '../navigationBar/navigationBar.component'

import LeftLogo from '../left-logo/Left.log.component';

import {Link} from 'react-router-dom';


// import {Col, Rowk} from 'react-bootstrap'

// props 

class CardList extends React.Component{
    constructor(props){
        super(props);
    
        /* state is a component object*/
        this.state = {
         formulario: false,
         plantDetail: []
       }
      }

      

      plantForm = (idPlantChoice) => {
        // alert("id:" + idPlantChoice);

        fetch(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=${idPlantChoice}`)
          .then(response => response.json())
          // .then(users => {this.setState({plants: users}); console.log(this.state.plants)});
          .then(users => {this.setState({
            plantDetail:users,
            formulario: true
          }); } );

      }
  
      render(){
        if(this.props.errors){
            
            return(
                
            <div>
                <NavigationBar />

                <Link to='/'>
                    <LeftLogo  />
                </Link>
                {/* title of the page in the plants list: */}
                <TitleQuizzResult />
                <h1>Error 422 </h1>
                <h2> missing argument </h2>
            </div>
            )
        }
        if(!this.state.formulario){
                let valueIncrement = 0;
                
                valueIncrement = this.props.sizeItens;
                
                return(
                <div>
                <div className = {`bigsideline${valueIncrement}`}>
                    <Link to='/'>
                        <LeftLogo className = {`${this.props.flag === true ? "bigleftline" : ""}`} />
                    </Link>
                </div>
                  
                <NavigationBar />
                  
                {/* title of the page in the plants list: */}
                <TitleQuizzResult />
                <div className = "card-list">
        
                        {this.props.plants.map(plants => (
                                <Card key = {plants.id} plants = {plants} plantForm = {this.plantForm} />
                    ))}
            </div>
                </div>
            )
        }
        else{
            return(

            <div>
            <Link to='/'>
                <LeftLogo  />
            </Link>
                <PlantsFormulario plantDetail = {this.state.plantDetail} featureforplants = {this.props.featureforplants}/>
                
            </div>
            )
        }
      }
}

// export const CardList = props => {

//     let plants = props.plants;



    /* moved this from the last commit that was in the app, cause rendering card-list is not
    responsibility of App, but the card-list component:
    */

    // however our card list component should not think about details of the elements and images

    // the reponsibility of it is another component. This one is just about thinking what to add



       /* react needs to know what elements it need to update */
        /* if one of this elements in our array has a value that changes */
        /* without that that, our jsx would need to re render everything every time */
        /* And that is heaaaavy */
        /* then, with monsters.key inside h1 */
        /* I can know what element changes and update just that instead of thousands */


        // console.log(props.monsters[1].skillname),
        // props.monsters.resumeData.skills && props.monsters.resumeData.skills.map((item) => {
        //     return 0
        // })






        

    //     console.log(plants);
    //     return(
    //         // <h1>Retornou</h1>
    //     <div className = "card-list">
 
    //             {props.plants.map(plants => (
    //                     <Card key = {plants.id} plants = {plants} />
    //         ))}
    // </div>
    // )
    
// };

export default CardList;