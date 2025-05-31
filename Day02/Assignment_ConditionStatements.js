
function launchBrowser(BrowserName)
{
    if (BrowserName === "Chrome") {
        console.log("Launching Chrome Browser");
    } else 
    {
        console.log("Launching  Browser is not chrome");
    }
}
function runTests(TestType)
{
    switch (TestType) {
        case "smoke":
            console.log("TestType is smoke");
            break;
        case "sanity":
            console.log("Testtype is sanity");
            break;
        case "regression":
            console.log("Testtype is regression");
            break;
        default:
            console.log("TestType is smoke");
    }
    
}


let BrowserName = "Edge";
let TestType = "sanity";
launchBrowser(BrowserName);
runTests(TestType);