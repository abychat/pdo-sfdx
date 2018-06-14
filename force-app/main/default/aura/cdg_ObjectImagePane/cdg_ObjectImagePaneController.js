({
    doInit : function(cmp, evt, helper){
        var action = cmp.get("c.getURLPrefix");
        action.setCallback(this, function(response){
            cmp.set("v.baseURL", response.getReturnValue());
            helper.getImage(cmp);
        });
        $A.enqueueAction(action);
    },
    handleImageUpload : function(cmp, evt, helper) {
        //convert the pane to the display div not the input div
        var uploadedFiles = evt.getParam("files");
        var imageFile = uploadedFiles[0];
        helper.correctImageDeets(cmp, imageFile);
    },
    changeImageHandler : function(cmp, evt, helper){
        //flip to upload pane
        cmp.set("v.hasImage", false);
    }
})