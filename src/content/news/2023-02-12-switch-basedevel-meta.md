---
title: "Switch to the base-devel meta package requires manual intervention"
author: "Robin Candau"
publishDate: 2023-02-12
---

On February 2nd, the `base-devel` package group has been replaced by a meta package of the same name.
If you installed the `base-devel` package group prior to this date, explicitly re-install it to get the new base-devel package installed on the system:

`pacman -Syu base-devel`
