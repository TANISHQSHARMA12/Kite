const {model}=require("mongoose");

const { PositionSchemas } = require("../schemas/PositionSchemas");

const holdingModels= new model("Position",PositionSchemas);

module.exports={holdingModels}