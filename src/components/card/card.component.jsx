import React from 'react';

import './card.styles.scss';


class Card extends React.Component{

    render(){


            return(
                <div className = {`card-container card${this.props.plants.id}`}>
                    <img alt = "monster" src = {`${this.props.plants.url}`}/>
                    {/* <img className = {`${props.plants.id}`} /> */}
                    {/* <h2> {props.plants.name} </h2> */}
                    <p className = "plant-name">{this.props.plants.name}</p>
                    <p className = "plant-price">$ {this.props.plants.price}</p>
                    <button
                    className="button button1"
                    onClick={() => this.props.plantForm(this.props.plants.id)}>
                        buy now
                    </button>
                </div>
            )
        }

    }


// export const Card = (props) => (
//     // console.log(props.monster.skillname)
//     <div className = {`card-container card${props.plants.id}`}>
//         <img alt = "monster" src = {`${props.plants.url}`}/>
//         {/* <img className = {`${props.plants.id}`} /> */}
//         {/* <h2> {props.plants.name} </h2> */}
//         <p className = "plant-name">{props.plants.name}</p>
//         <p className = "plant-price">$ {props.plants.price}</p>
//         <button class="button button1">buy now</button>
//     </div>
// )

export default Card;