---
layout: post
title: "GitHub Page Logbook"
date: 2020-07-19
categories: life
---

July 18, 2020:
Created the 2nd GitHub account of mine, `violapterinblog`, in order to use the one-time right GH provides with every account.
Looks rather complicated. Maybe it's only me, as I have zero experience with web development.
Hope such effort will turn out to be worthwhile.

July 19:
Found the [Jekyll template](https://github.com/jekyll/example) provided officially by Jekyll group.
Copied the code to my repo, and my site worked on localhost for the first time.
After I committed, the default domain `violapterinblog.github.io`, 

July 20:
Realized that Jekyll allow protected html code, so that I may actually define my own format, implemented in html, and incorporated in the markdown, to let Jekyll process it.
Tried to call Mathjax, which Kramdown is able to call, with no avail.
It is pointed out that Mathjax seems to have difficulty recognizing `$$`.
One has to apply the snippet on [official document](http://docs.mathjax.org/en/latest/upgrading/v2.html#changes-in-the-mathjax-api), which works.

July 22:

Though I have succeeded in typesetting mathematics, I still hope that the font families that `textrm`, `textsf`, `texttt` use can be customzed in the CSS, and in doing so I may call my favorite Google fonts.
I asked on Stack Exchange and Stack Overflow, and it turns out that, although Mathjax 2.7 allows that, Mathjax 3 doesn't.
I try to call Mathjax 2.7 without success.
Quite disappointed, I give up the thought eventually.

Learned to call Google fonts, as described in
  [Getting Started]
  (https://developers.google.com/fonts/docs/getting_started)
Jekyll describes CSS in `/css/main.scss`, and `$`-prefixed variables are expanded to generated CSS statements.
I used Roboto Sans for titles and headings, Open Sans for text.
I shall use Source Serif Pro for Markdown `** ... **`, corresponding to HTML tag `<strong>`.
I want to apply them for quoted text, though this is a slight abuse of tags.

July 26: 
As I said, I created a WordPress site last July, but after several posts, I soon stopped using it.
Typing with `$latex ...$` is 

The tutorial
  [Managing a custom domain for your github pages site]
  (https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
  explains how to add new CNAME.

WordPress staff responce reads so kind!

The instruction has always been there, and unfortunately I didn't realize earlier how straightforward it was.
To start, I have to renew `violapterin.com` and `violapterin.blog`, like before, which is a matter of one-click.

Then, to point the two domains, so managed by WordPress-com, towards my GitHub Page, I have to add a DNS CNAME-records  on WordPress-com, under ``domain management'' (instruction here),
and simply add the alias on GitHub repo (instruction here).

July 28:
Discover `\unicode` extension of MathJax, and suddenly there is hope for the arbitrary font thing.
Though not part of TeX, it works with the `macro` extension, since these macros expand before TeX is called!

July 29:
A critical progress!
This night, I was thinking intensively of an imagined 
If only there is exactly such TeX command!
I was not optimistic, as I feel this is contrary to TeX's mindset.
Still, I am troubled by the ugliness of the accented `\unicode` letters.
When researching Stack Overflow about `\overset` and `\underset`, several posts, like
  [`barbara beeton` answering about the vertical spacing of `\underset`]
  (https://tex.stackexchange.com/questions/302830/vertical-spacing-of-underset-and-other-tweaks)
uses the plain-TeX control sequence `\smash`.
The name alone sounds like what I was after!
I was excited and nervous, and looked up Knuth's *TeXbook*, quoted below (p.178)

  Plain TeX also provides `\smash {<subformula>}`, a macro that yields the same result as `<subformula>`, but makes the height and depth zero.
  By using both `\smash` and `\vphantom` you can typeset any subformula and give it any desired nonnegative height and depth.

Its implementation is shown in Appendix B (p.360),

    \def\smash{\relax % \relax, in case this comes first in \halign
      \ifmmode\def\next{\mathpalette\mathsm@sh}\else\let\next\makesm@sh
      \fi \next}

And the `\unicode` letters does look normal!
I really should learn TeX at least in a cursory manner, since many of my original solutions may very well be simplified greatly by plain TeX sequences which I do not yet know (or will never know).

<!----->
In case the reader is interested in details, check my public repo `violapterin.github.io` on GitHub, which is the source associated with this blog, 