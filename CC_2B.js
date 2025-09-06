// Coding Challenge 00

// Code goes here
//Strings
     let productName = "Grills";
     let unitCost = "800";
     let currentStock = "600";
     let reorderLevel = "50";
     let targetStock = "800";
     let weeklyDemand = "100";
     let supplierLeadTimeWeeks = "7";
//Equations
    let weeksOfCover = weeklyDemand>0 ? currentStock / weeklyDemand : Infinity; 6
    let stockDeficit = Math.max (0,targetStock - currentStock); 200
    let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0; 200
    let estimatedReorderCost = reorderLevel * unitCost; 40000
    let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks; True
// Print To Console
    console.log("Item Name is Grills\nWeeks of Cover is 6 weeks\nReorder now is True\nRecommended Reorder Quantity is 200 Grills\nEstimated Reorder cost is $40,000");
    //The output was as follows
    //Item Name is Grills
    //Weeks of Cover is 6 weeks
    //Reorder now is True
    //Recommended Reorder Quantity is 200 Grills
    //Estimated Reorder cost is $40,000


