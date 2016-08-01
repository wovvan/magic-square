import AltContainer from 'alt-container';
import React from 'react';
import Squares from './Squares.jsx';
import SquareActions from '../actions/SquareActions';
import SquareStore from '../stores/SquareStore';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AltContainer stores={[SquareStore]} inject={{
                    items: () => SquareStore.getState().squares
                }}>
                    <Squares showCicle={this.showCicle}/>
                </AltContainer>
            </div>
        );
    }
    showCicle(id) {
        SquareActions.showCicle(id);
    }
}
