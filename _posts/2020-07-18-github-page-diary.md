---
layout: post
title: "GitHub Page Diary"
date: 2020-07-18
categories: life
---

July 18, 2020:
Created the 2nd GitHub account of mine, in order to use the one-time right GH provides with every account.
Looks rather complicated. Maybe it's only me, as I have zero experience with web development.
Hope such effort will turn out to be worthwhile.

July 19:
Directly use the [Jekyll template](https://github.com/jekyll/example) provided officially on GitHub, and my site works on localhost for the first time.

July 20:
Realized that Jekyll allow protected html code, so that I may actually define my own format, implemented in html, and incorporated in the markdown, to let Jekyll process it.
Tried to call Mathjax, which Kramdown is able to call, with no avail.
It is pointed out that Mathjax seems to have difficulty recognizing `$$`.
One has to apply the snippet on [official document](http://docs.mathjax.org/en/latest/upgrading/v2.html#changes-in-the-mathjax-api), which works.

July 22: Though I have succeeded in typesetting mathematics, I still hope that the font families that `textrm`, `textsf`, `texttt` use can be customzed in the CSS, and in doing so I may call my favorite Google fonts.
I asked on Stack Exchange and Stack Overflow, and it turns out that, although Mathjax 2.7 allows that, Mathjax 3 doesn't.
I try to call Mathjax 2.7 without success.
Quite disappointed, I give up the thought eventually.

July 26: 
As I said, I created a WordPress site last July.
There is a [tutorial](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site) of adding new CNAME.
WordPress
