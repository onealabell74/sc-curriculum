const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  time: String,
  driver: String
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = {
  model: Delivery,
  schema: deliverySchema
};
{
	"customer": {
		"name": "Ronald McDOnald",
		"address": "1 Main Street",
		"city": "Anytown",
		"state": "MO",
		"postalCode": "77777"
	},
	"pizzas": [
		{
			"crust": "hand tossed",
			"cheese": "regular",
			"sauce": "marinara",
			"toppings": ["pepperoni", "ham"]
		}
	],
	"notes": [
		{
			"timestamp": 	1607120034,
			"note": "Delivery to back door"
		}
	]
}
