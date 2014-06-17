---
layout: post
title: "Extend Partition"
date: "Tue Jun 17 20:56:37 +0800 2014"
categories:
  - en
  - system
tags:
  - ubuntu
  - commands
---

**This is not a tutorial!**

Recently my ubuntu become very slow. After use `uptime`, I have found that
the load average is quite high. Sometimes it's goes `10.32, 9.41, 6.88`, and
much much higher, even more then `15.0` today.

Originally I don't really care this issue because I could still work. Although
the fan still operting on full-speed. But this is very annoying while it's stops
me to continue my work.

At first, I just removed the `unity` and reinstalled it. But this only imporved
several days. Until today it's bumped a warning message to told me that the disk
is almost full and needs to be check.

Because I just checked my vm and find nothing could be deleted. So I started to
try to expend my disk space from other source. After installed addition
gigabytes, the problem finally comes: I have free space on machine, but I can't
use it.

Some direct way to solve this is just create a new partition, and mounted on the
system. But I want to expand my boot partition, and there are `swap` area
also running on my system. So the first thing is jsut make swap off.

For simplicity, I just use the GUI tool called `Disks` to remove swap off. The
buttons shell changed in the future, so I won't describe how did I make it.
Now I got a totally free partitions at the end of my disk. The problem should
soon approached to my desired result. Huh? Just install the app `Gparted` and
everything just like a peice of cake.

The sad thing is `Gparted` does not allow people like me to shrink disk while
it is partitioned as bootable flag. So I need use a live CD built-in version,
which will be run as on another OS. To make my machine boot on by the live CD
is another bothering work. First I need change the BIOS settings to make it
able to boot with CD. Then I could login the Guest OS provided by Ubuntu.

Finally, the `Gparted` runs a long time check for my boot partition, and extend
the new space for me. I also create a swap space at the end of my disk. The
story just not over since the swap space needs to be activated.

So now turns to be the most geeky part of this article, that how to setup the
swap space on command line tool:

My swap is on partition `/dev/sda2`

~~~bash
sudo mkswap /dev/sda2
blkid /dev/sda2  # this will generate an UUID string, copy without qoutes
sudo swapon -U <UUID from previous step>
sudo vim /etc/fstab  # important! change the UUID for your swap, it's different
~~~

I don't know if this is helped. But after reboot, my load-average just comes
back to `0.1, 0.09, 0.11`, somewhat like the peaceful old days.
