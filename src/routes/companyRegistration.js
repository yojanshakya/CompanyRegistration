var express = require('express');
const CompanyModel = require('../db/models/company');
var router = express.Router();

// get approved
router.get('/approved', function(req, res, next){
  CompanyModel.findOne({
    where: {
      approved: true
    }
  }).then((dbRes)=>{
    if(!dbRes){
      throw new Error("Not found");
    }
    res.json({
      message: "Succesfully found data",
      data: dbRes
    })
  }).catch((dbErr)=>{

    if(dbErr.message == "Not found"){
      res.status(404);
      res.json({
        message: "Can't find requested data",
      })
    }

    res.status(500);
    res.json({
      message: "There was some error",
      data: dbErr
    })
  })
})

// get by id
router.get('/:id', function(req, res, next){
  CompanyModel.findOne({
    where: {
      id: req.params.id
    }
  }).then((dbRes)=>{
    if(!dbRes){
      throw new Error("Not found");
    }
    res.json({
      message: "Succesfully found data",
      data: dbRes
    })
  }).catch((dbErr)=>{

    if(dbErr.message == "Not found"){
      res.status(404);
      res.json({
        message: "Can't find requested data",
      })
    }

    res.status(500);
    res.json({
      message: "There was some error",
      data: dbErr
    })
  })
});


// get all
router.get('/',function (req,res,next) {
  CompanyModel.findAll().then((companyData)=> {
    res.json({
      message: "Successfully fetched",
      data: companyData
    })
  })
  .catch((err)=>{
    res.status(500);
    res.json({
      message: "There was some error"
    })
  });
});

// create company
router.post('/',function (req,res,next) {
  let { 
    name,
    email,
    telephone,
    fax,
    taxId,
    fieldOfBusiness,
    state,
    district,
    municipality,
    postalCode,
    wardNo
   } = req.body;

  CompanyModel.create({
    name,
    email,
    telephone,
    fax,
    taxId,
    fieldOfBusiness,
    state,
    district,
    municipality,
    postalCode,
    wardNo
  }).then((successResponse)=>{
    res.json({
      message: "Created Successfully",
      data: successResponse
    })
  })
  .catch((err)=>{
    res.status(500);

    console.log(err);
    res.json({
      message: "There was some error",
      err: err.message
    })
  })
})

// approve company
router.put('/approve/:id', function(req, res,body){
  let id = req.params.id;

  let approved = req.body?.approved || true;

  debugger;
  CompanyModel.update({approved }, {
    where: {
      id
    }
  }).then((dbRes)=>{
    console.log(dbRes);
    res.json({
      message: "Successfully updated",
      data: dbRes
    })
  }).catch((dbErr)=> {
    res.status(500);
    res.json({
      message: "There was some error",
    })
  })
  
})

module.exports = router;
