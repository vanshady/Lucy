# How to get started

1. Clone the repository
  * `git clone git@github.com:AndrewNg/Lucy.git`
2. In Google Chrome, open up your extensions page located at chrome://extensions
3. Enable Developer Mode
4. Click "Load Unpacked Extension" and select Lucy as the directory
5. If this is your first time using Lucy, we have to do a little hack to enable Lucy to get access to your microphone
  * First, right click Lucy's extension icon and click "Options". You can also get to this page by clicking "Options" on the extension page
  * You should see Lucy request access to your microphone. Give her access!
6. Open a new page (say [Google](http://google.com)) and click on Lucy's extension icon located on the right side of the navigation bar
7. Say "Lucy" and wait for a ding
8. You're good to go! Give it commands like "search for HackPrinceton", "go to CNN", "scroll down", or even "click the link about the Final Four". Quick note—if you don't say anything for more than 10 seconds, Lucy will go to sleep because she doesn't want to eavesdrop on you and you'll hear a little swooping sound. Say "Lucy" again to wake her up for more commands.

We don't have a great way of shutting Lucy completely off right now (she gets attached easily). The easiest way is to go to chrome://extensions and click "view background page" under Lucy. Refresh the console window that pops up to turn her off. This is also a good way to reset Lucy if you're having any difficulty.

# Commands
Right now Lucy supports the following actions:
  * Scrolling (scroll up, scroll down, stop)
  * New tab
  * Close tab
  * Go back
  * Go forward
  * Click link
  * Navigate to a link
  * Look up

Lucy is trained using [api.ai](https://api.ai/), so she can process commands in natural language. Try out different commands and let us know which ones work (and don't work)! We'll be adding support for other commands and refining the existing ones in the future.

# Debugging
If you're having trouble getting Lucy set up, click on "background page" underneath Lucy in [chrome://extensions](chrome://extensions). Send us an email at ajng@princeton.edu with your logs if you're having trouble and we'll try to get you set up!

For more info, visit our [Devpost page](http://devpost.com/software/lucy).