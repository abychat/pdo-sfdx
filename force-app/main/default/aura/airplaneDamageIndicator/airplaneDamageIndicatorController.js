({
    
    indicate : function(component,event,helper){
        var clickedArea = event.currentTarget;        
        var clickedAreaName = event.currentTarget.id;    
        var clickedAreaCoords = event.currentTarget.coords;    
        
        console.log(clickedArea)
        console.log(clickedAreaName)
        console.log(clickedAreaCoords)
        
        var searchString = clickedAreaName + '-overlay';
        
        var clickedArea = component.find(searchString);
        
        console.log(searchString)        
        console.log(clickedArea)        
        $A.util.toggleClass(clickedArea, 'slds-hide');        
        
    },
    
    hideSelf : function(component,event,helper){
        
        $A.util.toggleClass(event.currentTarget, 'slds-hide');        
        
    }    
    
    
})