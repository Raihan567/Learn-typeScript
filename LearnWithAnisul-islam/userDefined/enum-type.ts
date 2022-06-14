/**
 * Enum store constant variable,
 * Duplicate value is not allow here
 * enum types: Numeric String, Heterogenous
 */

// Numeric enum:
enum RequestType {
  readData = 1,
  getData = 3,
  deleteData = 2,
}

console.log(RequestType);

// String Enum
enum RequestType2 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
}
console.log(RequestType.deleteData);
console.log(RequestType["readData"]);

// Heterogenous enum
enum RequestType3 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
  realId = 234,
}
