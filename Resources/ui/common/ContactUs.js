	
var subject = "Subway";
var emailDialog = Titanium.UI.createEmailDialog();
    emailDialog.subject = subject;
    emailDialog.toRecipients = ['support@relevantmobile.com'];
    emailDialog.messageBody = "";
    emailDialog.open();  



