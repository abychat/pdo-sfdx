({
    handleRangeChange: function (cmp, event) {
        var detail = cmp.set("v.fuelLevel", event.getParam("value"));
    },

    doInit: function(cmp) {
        var planeId = cmp.get("v.planeId");
        var action = cmp.get("c.InitMaintenanceCheck");
        action.setParams({ planeId : cmp.get("v.planeId") });
       	action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {   
                cmp.set("v.newMaintCheck", response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
		
        $A.enqueueAction(action);

    }
})