const Customer = require('./api.model');


// Retrieve all Customers from the database.

exports.findAll = (req, res ) => {
    Customer.getAll((err, data) => {
        if(err){
            console.log(err);
            res.send('Error'+ err);
        }else{
            res.send(data);
        }
    });
}



// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body.name);
    // Create a Customer
    const customer = {
      name: req.body.name,
      status: req.body.status
    };
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };