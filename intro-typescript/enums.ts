enum Direction {
  LEFT = "Left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

function moveToFn(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log(" move to " + Direction.LEFT);  
      break;
    case Direction.RIGHT: 
      console.log(" move to " + Direction.RIGHT);  
      break;
    case Direction.TOP: 
      console.log(" move to " + Direction.TOP);  
      break;
    case Direction.BOTTOM: 
      console.log(" move to " + Direction.BOTTOM);  
      break;    
    default:
      console.log("I don't know where to go :(");  
      break;
  }
}

moveToFn(Direction.BOTTOM)

/* 
  Outra forma de usar enums
*/

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel[key]) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");