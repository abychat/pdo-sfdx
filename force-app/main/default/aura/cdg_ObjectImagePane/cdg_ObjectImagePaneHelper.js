({
    correctImageDeets : function(cmp, imageFile){
        var action = cmp.get("c.correctImageDeets");
        action.setParams({docID: imageFile.documentId, filename:cmp.get("v.filename")});

        action.setCallback(this, function(response){
            console.log(response.getReturnValue());
            var contentDoc = response.getReturnValue();
            //setImageURL(cmp, contentDoc);
            cmp.set("v.hasImage", true);
            var baseURL = cmp.get("v.baseURL") + '/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480';
            ///sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480
            baseURL = baseURL + '&versionId=' + contentDoc.LatestPublishedVersionId;
            //&versionId=VersionID
            baseURL = baseURL + '&contentId=' + contentDoc.Id;
            //&contentId=contentID
            cmp.set("v.imageURL", baseURL);
        });

        $A.enqueueAction(action);
    },
    setImageURL : function(cmp, doc){
        cmp.set("v.hasImage", true);
        var baseURL = cmp.get("v.baseURL") + '/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480';
        ///sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480
        baseURL = baseURL + '&versionId=' + contentDoc.LatestPublishedVersionId;
        //&versionId=VersionID
        baseURL = baseURL + '&contentId=' + contentDoc.Id;
        //&contentId=contentID
        cmp.set("v.imageURL", baseURL);
    },
    getImage : function(cmp) {
        var action = cmp.get("c.getRecordImage");
        var recordID = cmp.get("v.recordId");
        var filename = cmp.get("v.filename");
        action.setParams({recordID:recordID, filename:filename});

        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log(response.getReturnValue());
                if(response.getReturnValue() != null){

                
                    var contentDoc = response.getReturnValue();
                    //setImageURL(cmp, response.getReturnValue());
                    cmp.set("v.hasImage", true);
                    var baseURL = cmp.get("v.baseURL") + '/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480';
                    ///sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480
                    baseURL = baseURL + '&versionId=' + contentDoc.LatestPublishedVersionId;
                    //&versionId=VersionID
                    baseURL = baseURL + '&contentId=' + contentDoc.Id;
                    //&contentId=contentID
                    cmp.set("v.imageURL", baseURL);
                }else{
                    //returned no results. Guess I do nothing? Probably. I'm tired.
                }
            }else if (state === "INCOMPLETE"){
                console.log("incomplete?");
            }else if (state === "ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error Message: " + errors[0].message);
                    }
                    
                }else{
                    console.log("Unknown Error");
                }
            }
        });

        $A.enqueueAction(action);

    },

    getBaseURL : function(cmp){
        var action=cmp.get("c.getURLPrefix");
        action.setCallback(this, function(response){
            cmp.set("v.baseURL", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})