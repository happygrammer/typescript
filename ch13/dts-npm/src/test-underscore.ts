import * as _ from "underscore";
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);