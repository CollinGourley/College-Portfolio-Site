// Coding Challenge 2A

//Coding Starts Here

  //Strings!
     let productName = "Fishing Rods";
     let basePrice = 500;
     let costPerUnit = 300;
     let discountRate=.1;
     let salesTaxRate=.07;
     let monthlyFixedCosts = 100;
  //Calculating Pricing and Profit Metrics
     let discountedPrice = basePrice * (1-discountRate);  
     let finalPriceWithTax = discountedPrice * (1+ salesTaxRate); 
     let profitPerUnit = finalPriceWithTax - costPerUnit;
     let breakEvenUnits = (monthlyFixedCosts / profitPerUnit);
        breakEvenUnits; Math.ceil (.5509641873278237)
     let isProfitablePerUnit= profitPerUnit > 0 
        isProfitablePerUnit
 // Print to Console
    console.log("Product Name is Fishing Rods\nDiscounted Price Before Tax is $450\nFinal Price With Tax is $481.5\nProfit Per Unit is $181.5\n Break Even Units is 1 unit\nPer Unit Profitability is True");
// What my final outputs look liked
        //Product Name is Fishing Rods
        //Discounted Price Before Tax is $450
        //Final Price With Tax is $481.5
        //Profit Per Unit is $181.5
        //Break Even Units is 1 unit
        //Per Unit Profitability is True