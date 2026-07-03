const {model}=require("mongoose");

const{OrdersSchemas}=require("../schemas/OrdersSchemas");

const OrdersModels= new model("Order",OrdersSchemas);

module.exports={OrdersModels}