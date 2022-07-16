module.exports = function (req,res,next) {
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
}