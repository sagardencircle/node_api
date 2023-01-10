const sql = require('./db.config');

// constructor
const Customer = function(customer) {};

Customer.getAll = result => {
    sql.query("SELECT * FROM todolist", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Todo Lists: ", res);
      result(null, res);
    });
  };

Customer.create = (newCustomer, result) => {
    console.log(newCustomer);
    const insert = "INSERT INTO todolist (name, status) VALUES ?";
    //const value = ['admins', 'onlines'];
    sql.query('INSERT INTO todolist SET ?', newCustomer, (err, res) => {
        if(err)
        {
            console.log(err);
        }else{
            result(null, res);
        }
    });
};
  

// Customer.create = (newCustomer, result) => {
//     const select = "SELECT * from todolist";
//     sql.query(select, (err, res) => {
//         if(err){
//             console.log(err);
//         }else{
//             result(null, { res });
//         }
//     });
//     // sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
//     //   if (err) {
//     //     console.log("error: ", err);
//     //     result(err, null);
//     //     return;
//     //   }
  
//      // console.log("created customer: ");
//       //result(null, 'Hello models');
//     // });
//   };
  


  module.exports = Customer;