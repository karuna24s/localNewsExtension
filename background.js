chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.openNewWindow === "initSearch") {
      console.log('open new window - to be continued');
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  if (request.candidateSearchInit){

    chrome.storage.sync.get(['candidateFirstName', 'candidateLastName'], function (data) {
      let firstName = data.candidateFirstName
      let lastName = data.candidateLastName
      let urlIdentifer = request.candidateSearchInit

      let timesTribuneUrl = `https://www.queryly.com/timestribune_search.htm?q=${firstName}%20${lastName}`
      let dailyLocalUrl = `https://www.dailylocal.com/search/?sd=desc&l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=${firstName}+${lastName}`
      let chesterCountyPressUrl = `http://www.chestercounty.com/search?utf8=%E2%9C%93&q=${firstName}+${lastName}`
      let citizensVoiceUrl = `https://www.citizensvoice.com/search-7.810076?q=${firstName}+${lastName}&selecturl=`
      let timesLeaderUrl = `https://www.timesleader.com/#/search;query=${firstName}%20${lastName}`
      let standardSpeakerUrl = `https://www.standardspeaker.com/search-7.506128?q=${firstName}+${lastName}&selecturl=`
      let wayneIndependentUrl = `http://www.wayneindependent.com/search?text=${firstName}%20${lastName}`
      let poconoRecordUrl = `http://www.poconorecord.com/search?text=${firstName}%20${lastName}`
      let pikeCountyCourierUrl = `http://www.pikecountycourier.com/apps/pbcs.dll/search?crit=${firstName}+${lastName}&SearchCategory=%25&DateRange=&noblankcheck=0&BuildNavigators=1`
      let latestTwitterAlertsUrl = `https://twitter.com/search?f=tweets&vertical=default&q=${firstName}%20${lastName}&lang=en`
      let latestYoutubeAlertsUrl = `https://www.youtube.com/results?search_query=${firstName}+${lastName}&sp=CAI%253D`
      // let latestFacebookAlertsUrl= `https://www.facebook.com/search/top/?q=${firstName}%20${lastName}`

      switch( urlIdentifer ) {

      case "timesTribune":
        chrome.tabs.create({url: timesTribuneUrl });
        break
      case "dailyLocal":
        chrome.tabs.create({url: dailyLocalUrl });
        break;
      case "chesterCountyPress":
        chrome.tabs.create({url: chesterCountyPressUrl });
        break;
      case "citizensVoice":
        chrome.tabs.create({url: citizensVoiceUrl });
        break;
      case "timesLeader":
        chrome.tabs.create({url: timesLeaderUrl });
        break;
      case "standardSpeaker":
        chrome.tabs.create({url: standardSpeakerUrl });
        break;
      case "wayneIndependent":
        chrome.tabs.create({url: wayneIndependentUrl });
        break;
      case "poconoRecord":
        chrome.tabs.create({url: poconoRecordUrl });
        break;
      case "pikeCountyCourier":
        chrome.tabs.create({url: pikeCountyCourierUrl });
        break
      case "latestTwitterAlerts":
        chrome.tabs.create({url: latestTwitterAlertsUrl });
        break
      case "latestYoutubeAlerts":
        chrome.tabs.create({url: latestYoutubeAlertsUrl });
        break
      // case "latestFacebookAlerts":
      //   chrome.tabs.create({url: latestFacebookAlertsUrl });
      //   break
      default:
          console.log("done");;
     }

   })
 }

})
