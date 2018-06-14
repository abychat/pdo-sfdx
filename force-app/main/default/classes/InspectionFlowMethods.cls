public with sharing class InspectionFlowMethods {
	
    @AuraEnabled
    public static Maintenance_Check__c InitMaintenanceCheck(String planeID){
        System.debug(planeID);
        return new Maintenance_Check__c (Plane__c=planeID,Fuel_Level__c=50);
    }
    
    @InvocableMethod(label='update Plane')
    public static void updatePlane(List<PlaneId> planes){
    List<Plane__c> planeList = new List<Plane__c>();    
    for(PlaneId pid : planes){
      Plane__c plane = new Plane__c();
      plane.Id = pid.recordId;
      plane.Mileage__c = Long.valueOf(pid.mileage);
      planeList.add(plane);
     }
    update planeList;
    }
    
    public class PlaneId {
        @InvocableVariable(label='recordId' required=true)
		public Id recordId;

        @InvocableVariable(label='Mileage' required=true)
		public String mileage;


    }
}