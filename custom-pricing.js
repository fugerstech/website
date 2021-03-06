// Changing the pricing based on custom location

function getIP(json) {
	if (json.country) {
		var pricingStarter, pricingStandard, pricingPremium;

		switch (json.country) {
			case "India":
				pricingStarter = "₹7500",
					pricingStandard = "₹12000",
					pricingPremium = "₹18000"
				break;

			case "United Kingdom":
				pricingStarter = "£85",
					pricingStandard = "£150",
					pricingPremium = "£220+"
				break;

			case "Germany":
				pricingStarter = "€65",
					pricingStandard = "€115",
					pricingPremium = "€170+"
				break;

			case "Canada":
				pricingStarter = "$100",
					pricingStandard = "$215",
					pricingPremium = "$320+"
				break;

			case "United States":
				pricingStarter = "$95",
					pricingStandard = "$195",
					pricingPremium = "$295+"
				break;

			case "Nigeria":
				pricingStarter = "₦25000",
					pricingStandard = "₦70000",
					pricingPremium = "₦100000+"
				break;

			case "South Africa":
				pricingStarter = "R1499",
					pricingStandard = "R2599",
					pricingPremium = "R4499"
				break;

			default:
				pricingStarter = "$100",
					pricingStandard = "$220",
					pricingPremium = "$300"
				break;
		}

		var valueStarter = document.getElementById('starter-plan');
		var valueStandard = document.getElementById('standard-plan');
		var valuePremium = document.getElementById('premium-plan');


		valueStarter.innerHTML = pricingStarter;
		valueStandard.innerHTML = pricingStandard;
		valuePremium.innerHTML = pricingPremium;

	}
}
