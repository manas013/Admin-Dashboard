const dropdowndata=require('../models/dropdownsdata/dropdowndataModels')

const dropdowndataControl={
    getdropdowndata:async(req,res)=>{
        try{
            const Dropdowndata=await dropdowndata.find();
            res.json(Dropdowndata)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
}
module.exports=dropdowndataControl;