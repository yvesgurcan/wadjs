# v0.4.2: Update dependencies

-   It was time to upgrade some of the NPM packages, including home-brewed library `web-midi-player`, which is now much better optimized!

# v0.3.9: Smaller DataViews

-   In order to prevent the out of memory issue with web workers, I've added logic to shrink the size of the DataViews passed to the map parser.

# v0.3.8: Preview palettes and colormaps

-   You can now see the first palette or first colormap of a lump without having to opening it fully.

# v0.3.7: Fix Service Worker not updating on Chrome

-   There was a discrepancy between Firefox and Chrome. The former was accurately catching Service Worker updates, while the latter was not triggering the desired behavior. With a simple fix, I believe that all browsers should not behave uniformly when a new Service Worker is available to users.

# v0.3.6: Hotfix on Text Converter worker

-   Fix typo.

# v0.3.5: Fix Midi player

-   Since we opened Web Worker jobs to all lump types, it was necessary to fix the logic that allowed the Midi Player to automatically fetch the first converted Midi. Also fixed how to find the next Midi to play. C'est chose faites !

## v0.3.4: Web Worker safety net

-   After noticing that web workers can fail on devices with less memory, I implemented logic to retry spawning them.

## v0.3.3

-   ObjectURL are now created when a Web Worker provides a converted lump instead of being created in the render method of the view.
-   wadJS is now capable of catching errors that occur when sending messages to Web Workers instead of making the whole app fail.

## v0.3.2: Error boundaries

-   The app now does a better job at catching errors and displaying them to the user.

## v0.3.1: Map preview

-   wadJS is now able to create previews of the maps within a WAD.

## v0.3.0: Ramping up for MVP

-   wadJS is now able to convert DMX files into PCM and play them seamlessy. Hooray!
-   From now on, images will be converted to PNG after the lump directory has been processed instead of doing it at upload time. This allows to load WADs much faster and also not overwhelm the main thread with heavy computations but comes at the cost of converting images more slowly.
-   Various refactor to abstract away more stuff!

## v0.2.5: More potent web workers and CSS tweaks

-   Thanks to a big refactor behind the logic that run web worker tasks, each converter is now able to handle lumps coming from whatever lump type. This is a huge win, given the fact that the original format of a lump is usually not self-evident. As an example, we'll be able to parse intermission lumps from Heretic and Hexen with very little added code now.
-   A few aesthetical update related to responsive design. Some icons were shrunk extra small on smaller screens. The logo also had extra padding which made the screen bigger than the viewport.

## v0.2.4: Cache converted images and text

-   As a continuation of the previous update, simple images as well as text lumps are now cached when converted.

## v0.2.3: Lump cache

-   In addition to the Service Worker, a new system to cache lumps has been developed for wadJS. For now, it only keeps converted MUS files into the browser memory but soon all lumps will be systematically cached for super performances and full offline access to the app.

## v0.2.2: Service Worker update

-   This version adds a better way to handle app changes when service workers are enabled. The new service worker will now be installed in the background and a message will prompt the user to activate it. This should minimize exposure to stale versions of the app.

## v0.2.1: Light theme and Offline model

-   If for some silly reason, you need to switch to a theme that is not all dark, now you can!
-   You can also turn the offline access ON and OFF. That way, you can control if the app can be used while offline or not. This setting should solve cache-related problems if any.

## v0.2.0: Service Worker

-   It was time to upgrade the minor version of wadJS since we now have offline support for the app thanks to service workers!!! Yes, that's right. Once you visit the website, you should be able to use it at any time even if you have no connectivity. And that includes the MIDI player :)

## v0.1.38: SNDINFO

-   wadJS is now able to parse music and sounds from the Hexen IWAD correctly. I added some logic to get this data from the `SNDINFO` lump, since we can't rely on pattern-matching on the name of the lumps to know which lumps represent audio data.
-   ANSI lumps got some minor improvements. They will now shrink if they do not fit the width of the browser's window.
-   The application recognizes more intermission / final image lumps and will put them in the Intermission category.

## v0.1.37: ANSI Screen

-   wadJS can now display in the app the end screens that were displayed after quitting the game.

## v0.1.36

-   The app will show a message if storing uploaded WADs in your browser raises an error.
-   MIDI player can now loop through all the MIDIs in your uploaded WADs.

## v0.1.35: Various

-   Catch errors from localForage. So if the JSON of your WADs is getting too big, you should get an error.
-   MIDI player will loop within same WAD (by clicking on the next track button or by allowing in the settings to play the next available track automatically) if it didn't find any other uploaded WADs to look for MIDIs.
-   Deleting all WADs will stop MIDI playback.
-   The app will not bug you about unsupported Media Session API if you are not seemingly on a mobile device.

## v0.1.34: Updating documentation and MIDI player icons

-   Fix icons not showing up in the help documentation.
-   Add help documentation for the settings menu.
-   Replace playback buttons of the MIDI player with SVG icons instead of relying on emojis.

## v0.1.33: Media Session API

-   Giving a try to Media Session and hopefully give some ability to control playback of MIDIs from the notification screen on your decvices :)

## v0.1.32: Text lumps

-   We're trying to get the data out of these WADs, right? Well, this time, we're working on getting text info out of them. With the `textConverter`, wadJS will attempt to convert any uncategorized lump to text so that the user can see what's inside.

## v0.1.31: Play MIDIs from the same WAD

-   The MIDI player is now able to play MIDIs in the same WAD as the lump that is currently being played. Next, I'll add the abilitiy to play all MIDIS from all WADs. Because this MIDI player is gonna be fancy! 🍌🍌🍌

## v0.1.30: Settings and MIDI loop

-   I've tweaked the "helper bar" that appears at the bottom. The `^` icon has now been changed for something like `⚙️`. That's right, wadJS now has settings. They're only for the MIDI player right now, but I've been thinking about that for a while, so I'm happy :)

-   The MIDI player got some hotfixing and also was given the ability to play the same track repeatedly. Yeehaw!

## v0.1.29: Improved MIDI player

-   I thought that the current MIDI player was cool, but I felt like it cool be better. I've been working on converting the code to modern JavaScript and add functionalities that I wish were present on the initial version. With a more robust event system and error handling, I hope to create a better user experience. I also want to take further advantage of the AudioContext API to add functionalities to the player such as a simple playlist system and display the actual duration of a track.

## v0.1.27 and v0.1.28: Preparing for more workers

-   The UI now has a "global message" component that can show info and error messages. This comes handy when things are happening in the background or for issues that affect the whole app. There wasn't any logical place to show this kind of info before.

-   The app now handles the lack of support of `OffscreenCanvas` by displaying a message. It's not really an option to run the app without this feature, so a browser that is not compatible with `OffscreenCanvas` is pretty much a dealbreaker.

-   The MIDI player now has bigger buttons. Easier to click on 'em on a mobile device.

-   Now that I am more familiar with web workers, I refactored the code that handles the tasks they execute. The goal is to make the code as reusable as possible to easily create new types of workers. The end goal is to have this app convert anything you throw at it, namely sounds, maps, scripts, etc., but that's a long ways away. Right now, a big step after this one would be to parse the entire WAD for a certain file format instead of limiting the workers to a specific lump type (for example, the "simple image converter" only looks in flat lumps, but this file format also exists in menu lumps for Heretic).

## v0.1.26: Image worker

-   Flats are now outsourced to workers when processing WADs. This allows to upload files much faster and also update the UI much faster so that you can browse the data without having to wait for the images to be processed and rendered.

## v0.1.25: MIDI playback adjustments

-   I upgraded the MIDIjs script. As a result, I was able to implement more playback functionalities. Namely, pause and resume. I decided to add this behavior to the "portable" MIDI player that appears at the bottom of the screen, to keep the MIDI lumps simple.

## v0.1.24: MIDI conversion queue

-   Now that we have a nice-looking MIDI player, it was time to tackle a better way to send tasks to our MIDI-conversion worker. Once a WAD is uploaded, the app will look for MUS lumps in it and add them to a queue that is processed by the worker. The worker will check for more lumps to convert after it is done with the current one until the queue is empty. Next, I'm hoping to prioritize the wad and lumps that are currently being displayed on the screen.

## v0.1.23: MIDI player

-   It was time to make playing MIDI convenient, so I added a little widget at the bottom of the screen to help always have a look at what's playing. That way, you can browse away from your WAD MIDIs and still be able to silence or restart the song you are currently playing.
-   Also did some minor changes to make the error component more resilient (it won't blow up the app if no error was provided to the component).
-   I added some comments in the code when it comes to parsing lumps.

## v0.1.22: Web Workers, MUS and MIDI

-   You can now play WAD songs as MIDIs (if compatible; MP3 are not handled yet). This one was a little bit of a doozy. As I chose to use the localForage library instead of the localStorage API, I ran into more size limitations when I worked on parsing Doom original music data (MUS). As a result, I decided to let web workers handle the conversion of these music lumps into MIDI files. Works like a charm. Could use some optimization. The only, significant downside is that these MIDI files have to be regenerated every time the user reloads the page.
-   Thanks to jmickle66666666 for writing the code to handle the conversion from MUS to MIDI. I unhesitatingly implemented his code into wadJS and am very, very grateful for the time I was able to save this way!

## v0.1.21: JSON Export/Import (2)

-   Fix bug where the file would not appear in the list of uploaded file immediately.
-   Refactor the handling of lump instances when restoring WAD files from a JSON object.
-   Allow to import multiple JSON files.
-   Invite user to report bugs when errors occur.

## v0.1.20: JSON Export/Import

-   wadJS is now capable of exporting the processed WAD files to JSON. This will be helpful to create quick copies of a WAD without compiling it. It will also be instrumental in sharing these assets in a lightweight format among users or to help debug errors in the application! :)

## v0.1.19: The magic rocket

-   Very important update. Would probably be considered MVP, but it was a lot of fun to code: I added a little animation while uploading WADs to the application. Don't be surprise if you see a rocket crossing your screen when you add your favorite WAD :)

## v0.1.18: IWADs and PWADs

-   Since we are diving into displaying graphical assets, it was time to make a distinction between Internal WADs and Patch WADs. The application now separates the two categories on the UI and allows users to link PWADs to already-uploaded IWAD. As a result, it will still be possible to display graphics from PWADs without any palettes data. Yay!

## v0.1.17: Image reader

-   Thanks to jmickle66666666's code, I was able to improve easily the logic to parse most images within WADs. As a result, wadJS is now able to display sprites and patches.
-   I've used this opportunity to refactor some code on the UI side.
-   I've also surfaced the texture lumps. Right now, the app is not able to recreate the image but we're getting there :)

## v0.1.16: Patch names

-   You can now consult the PNAMES lump to see a list of all the patches within the WAD.
-   I did some preliminary work to parse patch lumps.

## v0.1.15: Flats

-   You can now see thumbnails of the flats when browsing your WADs. When you click on a particular flat, an enlarged version of the flat is shown.

## v0.1.14: Moved to localForage + PLAYPAL and COLORMAP

-   I ran into issues with the size limits of the localStorage API pretty quickly, so I outsourced the task of saving WADs to local memory to a libray called localForage.
-   Implemented logic to parse palettes and colormaps from WADs.

## v0.1.13: Lump views

-   Lumps are now broken down by category in the UI. This should help avoid long lists of lumps and simplify browsing. Also, it should improve the performances of the app when it re-renders.

## v0.1.12: Patch lumps

-   Patch lumps are now marked as such. This update paves the way to detect other types of lump.

## v0.1.11: Group map lumps together

-   With this new update, lumps such as "THINGS", "VERTEXES" (sic! the plural of vertex is vertices...), "LINEDEFS", etc., are now grouped under the lump that holds the name of the map. As a result, the lumps in question do not show up in the list anymore but they will soon once I focus more on the map lumps.

## v0.1.10: Selectable lumps

-   You can now click on a lump to see more details about it.
-   Additionally, if you reload the page, the application will focus your browser view to the appropriate wad or lump details, so you can resume right where you left.
-   From a data model perspective, lumps now have their own class, which means that they have their own set of methods, separate from the Wad class.

## v0.1.9: Display WAD lumps

-   When you click on an uploaded lump, a whole list of the lumps within the file will now be displayed below the WAD name.

## v0.1.8: Better error handling for upload

-   I made the upload of files more resilient in order to get more visibility on possible issues and errors that show up when adding WADs to your list.

## v0.1.7: Handle multiple files

-   The uploader can now upload multiple files at once from your device.

## v0.1.6: Handle ZIP/PK3 files

-   The uploader is now able to extract a WAD from a zipped file.

## v0.1.5: Remote WAD upload

-   I've added the code and UI to upload WAD files from a URL. No need to access your device anymore to manipulate your WADs :)
