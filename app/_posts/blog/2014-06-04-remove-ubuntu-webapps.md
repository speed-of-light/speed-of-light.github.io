---
layout: post
title: "Remove Ubuntu webapps"
date: "Wed Jun 04 15:30:21 +0800 2014"
categories:
  - en
  - blog
tags:
  - system
  - ubuntu
  - performance
---

Recently I have found that the os is slowing down.
So I decided to remove it.
Just a log for solving this issue.

~~~bash
pkill -9 ubuntu-webapps-service
sudo apt-get purge -Y unity-webapps-common unity-webapps-service
~~~

Done
Taking time to observing this will help or not.
