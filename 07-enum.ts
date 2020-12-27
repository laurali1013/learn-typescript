enum Direction{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);  //0
console.log(Direction[0]);  // Up

enum Color{
    Red = 'Red',
    Blue = 'Blue',
    Green = 'Green',
}

const value = 'Red';
if (value === Color.Red) {
    console.log(`the color is ${value}`);    
}