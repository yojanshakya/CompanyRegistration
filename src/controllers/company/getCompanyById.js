module.exports = function(req, res, next){
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
}