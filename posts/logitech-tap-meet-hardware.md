---
title: 2nd Display on Logitech Tap Large Room Solution for Google Meet
date: 2023-04-08
author: Adrian Jost
avatar: https://avatars.githubusercontent.com/u/22987140?v=4
web: https://adrianjost.dev
---

How hard can it be, two connect two Displays to hardware that is designed for large meeting rooms and often advertised in use with two displays? 🤔

---

The Lenovo Series One Meet Hardware for Medium Sized Rooms, we have, has two HDMI Outputs, unfortunately the Chromebox in the Large Room Bundle of Logitech only has one HDMI and one USB-C display output. So we had to find a solution to connect a second display to the Logitech Tap Large Room Kit.

<figure>
  <img src="https://user-images.githubusercontent.com/22987140/230938909-96e18696-ffba-430a-b2cf-0092ac41b5c3.png" alt="I/O of Logitech Meet Compute Engine" />
  <figcaption>
    This is the CTL Meet Compute System GQE15C (For Logitech Google Meet Kits) that is provided with the Large Room Kit.
  <br/>
  image source: <a href="https://ctl.net/products/ctl-meet-compute-system-gqe15c" target="_blank"
    rel="noopener noreferrer">ctl.net</a>
  </figcaption>
</figure>

We didn't want to loose the Power Saving feature of the Meet Hardware we just got used to ([see previous post](./series-one-meet-hardware.md)). So we had to find a solution.

At first we tested a couple of cheap USB-C to HDMI cables we already used to connect pc monitors to our laptops. Like [this one](https://www.amazon.de/dp/B07CL2RHX5/). But those didn't work.

I already knew that the power saving feature is based on the HDMI CEC Protocol. So I started looking for a USB-C to HDMI Adapter that supports CEC. Easier said then done, because as far as I know, USB-C is not really capable of passing through HDMI-CEC signals.
I found the `LogiLink USB-Adapter CUA0103`. It advertised CEC compatibility in it's [datasheet](https://cdn.bueromarkt-ag.de/downloads/produktdatenblaetter/cua0103.pdf) but unfortunately didn't work.
Then I stumbled over the [Accell](https://www.accellww.com/products/usb-c-to-hdmi-2-0-adapter-cec-enabled) adapter which claimed full compatibility with "Google Hangouts Meet". Digging deeper showed, that it was designed for a previous iteration of Chromebox ([ASUS Chromebox 3](https://www.gend.co/hangouts-meet-hardware-asus-chromebox)) that also had a USB-C Display output in addition to an anchor screw.

<figure>
<img width="961" alt="Screentshot of the Accell Adapter's product page, showing the USB-C and HDMI interface with the special anchor screw." src="https://user-images.githubusercontent.com/22987140/230941492-75bdd828-fb04-45a3-9b39-a92aacbd0731.png">
<figcaption>
    Screenshot of the 
    <a href="https://www.accellww.com/products/usb-c-to-hdmi-2-0-adapter-cec-enabled"
    target="_blank"
    rel="noopener noreferrer"
    >
    Accell Adapter's product page.
    </a>
  </figcaption>
</figure>

At first I couldn't find any seller that shipped outside the US, but then I found [this one on Amazon](https://www.amazon.de/gp/product/B07VYMQBFX/).
And to my surprise, it worked! 🎉

I don't know how they managed to get the CEC signals through the USB-C connection, but it works, so I am happy.
I even ordered a second one, just in case the first one breaks and I can't find it anymore. Would be a shame to loose the power saving feature again and downgrade a hardware bundle that costs thousands of euros.
