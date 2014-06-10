---
layout: post
title: "Pygments for syntax highlighting"
date: "Sat Jun 07 01:46:54 +0800 2014"
description: "The problems I met during add a syntax highlighter to jekyll"
categories:
  - en
  - blog
tags:
  - lib
  - tool
  - features
---

> BYR: This is not a tutorial.

__Syntax highlighting__ is a procedure to generated color decorated result
of a plain code text input. Because the plian code is usually hard to read
while is becomming longer. For example:

~~~
def ruby_code
  puts 'string should be another color'
end
~~~
Compare to

~~~ruby
def ruby_code
  puts 'string should be another color'
end
~~~

Thus we need a fancy way to make our code text into some _color decorated_
result to help us to read.

`code_ray` is quite famous and popular lib that could found on google, while
searching `syntax highlighter for jekyll`, so I just installed it first. Soon
that I've just found it's only support about 20 languages and seems not easy to
add custom lexer. This lack of languages variaty made me feel there should be
something more powerful. Then I just googled again, and found another worth
competitor that makes me feel worth to try -- `pygments`.

Using `pygments` is as simple as `code_ray`. Just add a gem called
`pygments.rb` to the `Gemfile`, and `bundle install` that's it. After installed
the gem, just take an excited heart to open your page refresh in browser and
check the result.

Sadly there is nothing when I firstly done this. The main point is that I just
forget to add some styling element for the generated markups. Again, I just add
a bunch of code highlighting styles from the internet. And **BANG**! the colored
syntax just appeared in the refreshed page. __OMG, this is really awesome.__
