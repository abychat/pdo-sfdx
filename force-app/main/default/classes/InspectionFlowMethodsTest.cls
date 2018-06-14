@isTest

public class InspectionFlowMethodsTest {
    
    static testMethod void testFlowMethods(){
        Plane__c testPlane = new Plane__c(name='testPlane');
        testPlane.Flight_Hours__c =15000.00;
        testPlane.Mileage__c = 88387828.00;
        test.startTest();
        insert testPlane;
        test.stopTest();
        List<InspectionFlowMethods.PlaneId> planeList = new List<InspectionFlowMethods.PlaneId>();
        InspectionFlowMethods.PlaneId pid = new InspectionFlowMethods.PlaneId();
        pid.recordId = testPlane.Id;
        pid.mileage = String.valueOf(testPlane.Mileage__c);
        planeList.add(pid);
        String planeId = (String)testPlane.Id;
        Maintenance_Check__c maintcheck = InspectionFlowMethods.InitMaintenanceCheck(planeId);
        InspectionFlowMethods.updatePlane(planeList);
       
    }

}