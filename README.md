تغییر فونت توییتر در مرورگر کروم با فونت وزیر<br>
مرورگر کروم را باز کنید <br>
داخل کروم  chrome://extensions/.  را وارد کنید<br>
"Developer mode" را فعال کنید
روی load unpacked کلیک کنید و فولدر دانلود شده را انتخاب کنید.
# twiter-persianfont
Open Chrome and go to chrome://extensions/. <br>
Enable "Developer mode" in the top right corner. <br>
Click "Load unpacked" and select the folder containing your extension files. <br>
Now, when you visit twitter.com, the custom font from your local machine should be applied to the text elements on the page. <br>

## Version 1.1

- Fixed issue where the extension was not able to access the website "twitter.com" due to a malformed URL pattern in the manifest file.
- Updated the manifest version to 3.
- Added the `all_frames` property to the content script to ensure it runs in all frames of the target website.

## Version 1.0

- Initial release of the extension.

## Known issues

- None

## Upcoming features

- Support for loading custom fonts from multiple URLs.
- Option to disable the extension on specific websites.

---

If you enjoy this extension, please consider leaving a review on the Chrome Web Store. Your feedback is greatly appreciated!
