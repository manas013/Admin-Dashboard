const AdminData=require('../models/admindataModels')

const admindataControl={
    getadmindata:async(req,res)=>{
        try{
            const admindata=await AdminData.find();
            res.json(admindata)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    
    getadmindataWithID:async(req,res)=>{
        try{
            const admindata=await AdminData.findById({_id:req.params.id});
            res.json(admindata)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    
    postadmindata:async(req,res)=>{
        try{
            const adminData = new AdminData(req.body);
           await adminData.save()
           res.json({msg:"new data  created"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updatePostadmindata:async(req,res)=>{
        try{
            const adminData = await AdminData.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!adminData) {
      return res.status(404).send();
    }
    res.send(adminData);
        }
        catch(err){
            return res.status(500).json({msg:err.messgae})
        }
    },
}
module.exports=admindataControl;