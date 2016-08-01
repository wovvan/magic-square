import uuid from 'node-uuid';
import alt from '../libs/alt';
import SquareActions from '../actions/SquareActions';
class SquareStore {
  constructor() {
    this.bindActions(SquareActions);
    this.squares = [];
    this.initialize.call(this);
  }

  initialize() {
    for(var i = 0; i < 16; i++){
      this.squares.push({id: uuid.v4(), opacity: 0});
    }
  }

  showCicle(id) {
    let squares = this.squares;
    this.changeOpacity.call(this, id, 1);
  }

  continueHidingCircle() {
    self = this;
    self.squares.forEach(function(item) {
      if(item.opacity > 0){
        self.changeOpacity.call(self, item.id, item.opacity)
      }
    })
  }

  changeOpacity(id, opacity){
    self = this;
    const squareIndex = self.findSquare(id);
    if (squareIndex < 0) {
      return;
    }
    self.squares[squareIndex].opacity = opacity;
    let timerId = setInterval(function() {
      self.squares[squareIndex].opacity -= 0.25;
      SquareActions.updateSquare();
      self.setState({
        squares: self.squares
      });
    }, 3000);

    setTimeout(function() {
      clearInterval(timerId);
    }, 12000);
  }

  findSquare(id) {
    const squares = this.squares;
    const squareIndex = squares.findIndex((square) => square.id === id);
    if (squareIndex < 0) {
      console.warn('Failed to find square', squares, id);
    }
    return squareIndex;
  }

}
export default alt.createStore(SquareStore, 'SquareStore');
