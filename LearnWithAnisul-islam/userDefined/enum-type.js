/**
 * Enum store constant variable,
 * Duplicate value is not allow here
 * enum types: Numeric String, Heterogenous
 */
// Numeric enum:
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["getData"] = 3] = "getData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// String Enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType.deleteData);
console.log(RequestType["readData"]);
// Heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["realId"] = 234] = "realId";
})(RequestType3 || (RequestType3 = {}));
