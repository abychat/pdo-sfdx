({
	handleToggle : function (cmp, event) {
         var sourceElement = event.getSource(); 
		 var elemId = sourceElement.getLocalId();
         var attrName = "v."+elemId;
       
         var toggleValue = cmp.get(attrName);
         if(toggleValue == undefined){
             toggleValue=false;
         }
         cmp.set(attrName, !toggleValue);
         var oppAttrName = '';
         if(attrName.includes('Uncheck')){
             oppAttrName=attrName.replace("Un","");
             oppAttrName=oppAttrName.replace("check","Check");
         }else{
             var startPos=attrName.indexOf("Check");
             oppAttrName= attrName.slice(0,startPos)+'Uncheck';
         }
         cmp.set(oppAttrName,false);
        
    }
})