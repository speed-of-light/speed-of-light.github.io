---
layout: post
title: "Unity disappeared!"
date: "Sun Jun 15 17:25:00 +0800 2014"
categories:
  - en
  - ubuntu
  - accidental-issue
tags:
  - system
  - commands
---

To solve this issue on `ubuntu 13.10`:

```bash
sudo apt-get install --reinstall unity ubuntu-desktop
dconf reset -f /org/compiz/ && unity --reset-icons &disown
```

[Original Ref](https://askubuntu.com/questions/17381/unity-doesnt-load-no-launcher-no-dash-appears/386791#386791?newreg=d17762478dc24c26bde884918b83b8ee)
