'use strict';

// module.exports = function() {
//   return function verifyReq(req, res, next) {
//     console.log(req.body);
//     if (req.headers['x-transaction-id']) {
//       next();
//     } else {
//       let err = new Error('Request header should set x-transaction-id');
//       err.statusCode = 400;
//       next(err);
//     }
//   };
// };
