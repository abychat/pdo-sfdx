({
	 handleToggle : function (cmp, event) {
         var sourceElement = event.getSource(); 
		 var elemId = sourceElement.getLocalId();
         var attrName = "v."+elemId;
         var fileUpload = false;
         if(attrName.includes("Uncheck")){
             fileUpload = true;
             cmp.set("v.showFileUpload",fileUpload);
         }
         console.log(cmp.get("v.showFileUpload"));
         var toggleValue = cmp.get(attrName);
         if(toggleValue == undefined){
             toggleValue=false;
         }
         cmp.set(attrName, !toggleValue);
         var oppAttrName = '';
         //Toggle the state of the respective opposite button
         if(fileUpload==true){
             oppAttrName=attrName.replace("Un","");
             oppAttrName=oppAttrName.replace("check","Check");
         }else{
             var startPos=attrName.indexOf("Check");
             oppAttrName= attrName.slice(0,startPos)+'Uncheck';
         }
         cmp.set(oppAttrName,false);
         console.log(cmp.get("v.showFileUpload"));
    }
})