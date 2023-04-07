---
title: Resolving Lenovo Series One Google Meet Hardware Issues
date: 2023-04-07
author: Adrian Jost
avatar: https://avatars.githubusercontent.com/u/22987140?v=4
web: https://adrianjost.dev
---

We had some issues with our Lenovo Series One Google Meet Hardware. Here is how we solved them. 🤓

---

## Our Meeting Room Issues

This year, our company moved to a new office. I was in charge of setting up the meeting rooms. I wanted to have a simple setup that is easy to maintain and easy to use.
We already had the Lenovo Series One Medium Room Kit in use which worked okayish in combination with our Samsung TV.

But we had the following Issues:

1. No HDMI Signal: TV would not detect the HDMI input of the Meeting Hardware, if the TV was turned on after the Meeting Hardware. SO we had to reboot the Meet Hardware every time we turned off the TV.
2. Power Saving: The Meet Hardware was not capable of switching the TV on and off. So we had to use a separate remote control for the TV. In theory the Meet Hardware should be able to do this automatically based on scheduled meetings. But it did not work for us.

So I took this opportunity to dig deeper into the Meet Hardware and try to solve these issues. 👀

## Solving the Issues

### No HDMI Signal

We tried resetting the TV, using different HDMI Ports and Cables. But nothing worked. So we decided to use a different TV. We bought an LG TV and it worked right away. Awesome!

### Power Saving

This one was more tricky, because investigation showed that we had a couple of different issues:

#### Always on HDMI Input (Chromecast)

First of all, the Auto Standby feature does not work, when an HDMI Input is provided to the Meet Hardware. And we had a Chromecast for wireless sharing to the meeting always plugged in and powered on. Now that Google Meet Supports the Companion Mode, we just removed that one and share our screens directly via Google Meet. And for local only Meetings we use the TV's AirPlay feature.

#### Incompatible HDMI Cables

Secondly, not all HDMI Cables work, and all the ones we had lying around from PC Monitors didn't work. We had to buy a new one. The Meet Hardware is using the HDMI CEC Protocol and not all cables wire this up. In the end, we just got a cable the had advertised CEC support (there are not that many on Amazon). We settled with the following two and can confirm they work fine:

1. [Cable 1](https://www.amazon.de/gp/product/B09TFLNG4H/) (a bit cheaper)
2. [Cable 2](https://www.amazon.de/gp/product/B07X3H923J/)

They are a bit pricey, but I didn't want to order a bunch of cables and then have to return them. So I just ordered the most promising. And it worked out fine.

And obiously the No HDMI Signal also needed to be resolved before everything worked.

After that in the Meet Hardware a new option appeared in the Settings: "Test Energy Saving". Clicking it would turn the TV off and back on. Unfortunately, our setup only passed sometimes.

#### TV Settings

The final puzzle piece was to disable showing the LG Logo on every startup and shutdown, because that delays the Shutdown process long enough, for the test to time out.

To disable the Logo, we had to go to a video source that provided some sound and smash the mute button on the remote approximately 10 times. Then a hidden menu would appear where the Logo could be disabled.

Now everything worked super fine. The TV would turn on and off automatically before each scheduled meeting or when touching the Management Tablet and the HDMI Signal was always detected. 🎉

#### Google Admin Settings

Finally we also figured out some Settings for the Meet Hardware in the Google Admin Management Console. The time it takes to switch the TV off is configured with the Screen Saver setting. Yeah, obviously... 🙄.
After turning it down to a minute, we could see the results immediately.

## Conclusion

I hope this helps you to get your Meeting Hardware working as well. If you have any questions, feel free to reach out to me using https://adrianjost.dev/contact. And if you have any other tips, please let me know. I would love to hear and add them. 👍
