const {model}=require("mongoose");

const{holdingSchemas}=require("../schemas/holdingSchemas");

const holdingModels= new model("holding",holdingSchemas);

module.exports={holdingModels}