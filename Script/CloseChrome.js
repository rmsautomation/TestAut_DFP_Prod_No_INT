function CloseChorme () {
    var browser = Aliases.browser;
    if (browser.Exists) {
        browser.Close();
        Log.Message("Browser window has been closed.");
    } else {
        Log.Message("Browser window was not found.");
    }
}

function Hooks_OnLogError(Sender, LogParams)
{
  var browser = Aliases.browser;
    if (browser.Exists) {
        browser.Close();
        Log.Message("Browser window has been closed.");
    } else {
        Log.Message("Browser window was not found.");
    }
  
}