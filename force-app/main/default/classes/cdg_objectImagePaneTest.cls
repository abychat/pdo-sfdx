@isTest
public class cdg_objectImagePaneTest {
    
    
    static testMethod void imagePaneTest(){
        system.assert(System.URL.getSalesforceBaseURL().toExternalForm() == cdg_objectImagePaneController.getURLPrefix());

        //create account
        Account a = new Account(name = 'Accounty McAccountface');
        insert a;
        system.debug('a id = ' + a.id);
        //create contentDocument
        ContentVersion cv = new contentVersion();
        cv.ContentLocation = 'S';
        cv.PathOnClient = 'blerp.txt';
        cv.title = 'blerp';
        cv.versionData = Blob.valueOf('blahblahblah');
        insert cv;
        system.debug('cv id = ' + cv.id);
        system.debug('cv doc id = ' + cv.contentDocumentID);
        
        //make second cv for update detection
        ContentVersion cv2 = new contentVersion();
        cv2.ContentLocation = 'S';
        cv2.PathOnClient = 'blerp.txt';
        cv2.title = 'blerp2';
        cv2.versionData = Blob.valueOf('blahblahblah');
        insert cv2;
        string doc2ID = [select ContentDocumentID from ContentVersion where id = :cv2.id].ContentDocumentID; 
        //create cdl for cd 

        string docID = [select ContentDocumentID from ContentVersion where id = :cv.id].ContentDocumentID;
        system.debug('doc id = ' + docID);
        ContentDocumentLink cdl = new ContentDocumentLink();
        cdl.ContentDocumentID = docID;
        cdl.linkedEntityID = a.id;
        cdl.shareType = 'I';
        insert cdl;
        system.debug('cdl id = ' + cdl.id);

        ContentDocument cd;
        cd = cdg_objectImagePaneController.getRecordImage(string.valueOf(a.id), 'blerp');
        cd = cdg_objectImagePaneController.getRecordImage(string.valueOf(a.id), 'not bluerp');

        cd = cdg_objectImagePaneController.correctImageDeets(docid, 'not blerp');
        cd = cdg_objectImagePaneController.correctImageDeets(doc2id, 'not blerp');
    }
}