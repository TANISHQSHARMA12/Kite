const {model}=require("mongoose");

const { PositionSchemas } = require("../schemas/PositionSchemas");

const PositionModels= new model("Position",PositionSchemas);

module.exports={PositionModels}