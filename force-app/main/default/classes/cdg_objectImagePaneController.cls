public class cdg_objectImagePaneController {

    @AuraEnabled
    public static string getURLPrefix(){
        return System.URL.getSalesforceBaseUrl().toExternalForm();
    }
    
    @AuraEnabled
    public static ContentDocument getRecordImage(string recordID, string filename){
        List<ContentDocumentLink> cdl = [select ContentDocumentID from ContentDocumentLink where LinkedEntityID = :recordID AND ContentDocument.Title = :filename Limit 1];
        system.debug(cdl);
        if(cdl.size() > 0){
            //doc exists
            system.debug(cdl[0]);
            string contentDocumentID = cdl[0].ContentDocumentID;
            return [select id, title, LatestPublishedVersion.ContentURL, LatestPublishedVersionId from ContentDocument where id = :contentDocumentID];
        }else{
            return null;
        }
    }
    

    @AuraEnabled
    public static ContentDocument correctImageDeets(string docID, string filename){
        //ContentDocument doc = [select id, title, LatestPublishedVersion.ContentURL, LatestPublishedVersionId from ContentDocument where id = :docID];
        //need to validate if this thing exists already then convert to a new version
        List<ContentDocument> existingDocs = [select id, title, LatestPublishedVersionId from ContentDocument where title = :filename];
        if(existingDocs.size() > 0){
            delete existingDocs;
        }

        ContentDocument newdoc = [select id, title, LatestPublishedVersionId from ContentDocument where id =:docID];
        newdoc.title = filename;
        update newdoc;
        return newdoc;
        

        
        
    }
}