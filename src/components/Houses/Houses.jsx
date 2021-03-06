import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllHouses } from "../../redux/actions";
import HouseCard from "../HouseCard/HouseCard";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllHouses();
    }

    render() {
        return (
            <div>
                <h1>Game of Thrones</h1>
                <img src="main-image-cp2.jpg" alt="main-img" />
                <h3>Houses</h3>
                {this.props.houses?.map( i => (
                    <HouseCard
                        id={i.id}
                        region={i.region}
                        name={i.name}
                        words={i.words}
                        characters={i.characters}
                    />
                ))}
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        houses: state.houses,
    };
};

export const mapDispatchToProps = function (dispatch) {
    return {
        getAllHouses: () => dispatch(getAllHouses()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
