---
layout: post
title: "GitHub Page logbook 1: Beginning"
date: 2020-07-19
categories: "merticulous memory"
---

*July 18, 2020*:
Today, at about 5:30 pm Taiwan time, I registered a 2nd GitHub account, `violapterinblog`, for sake of this GitHub Page (GHP),
and the new site was born!
Every account of GitHub was allowed to own 1 GHP, endowed with a unique URL derived from the username.
I would like to import some past posts and modify the time stamp accordingly,
so let this notice attest to the moment of what was supposedly a new start.

One reason I want to have a personal site is to write notes containing mathematics, of either popular or research level.
About just one year ago, I created a WordPress (WP) account,
mainly because they support LaTeX (to some extent).
WP's interface is straighforward,
their templates modern and elegant,
their email support prompt and helpful.

So why move away?
WP only allowed the user to type in the interface,
and one could not write and save locally.
WP was generally restrictive on CSS,
let alone Javascript except in some expensive plans.
Most importantly, it required `$latex ...$` for LaTeX expression, which quickly got verbose,
and there was no way to compile and preview one's work.
Thus I basically stopped writing on the WP site after a while.

This May, I somehow recalled to have heard something good said about GHP.
I researched about that,
and found the description to be close to what I intend.
It supported Mathjax, a free engine of LaTeX rendition.
And with GHP the user might write on local device and commit,
as was the usual GitHub experience.
Furthermore, no matter what fancy thing I might want to do,
I imagined, as long as I converted the piece to standard HTML,
it would be fine.
Commit records would also better protect my intellectual property,
or at least that would make me assured.

I tred to follow
  [Jonathan McGlone's guide on GHP](http://jmcglone.com/guides/github-pages/),
  but by now, everything looked rather complicated.
Maybe it's only me,
as I have zero experience with web development.
There was quite a lot to learn,
and hopefully such effort would turn out to be worthwhile.

*July 19*:
Found the
  [Jekyll template](https://github.com/jekyll/example)
  provided officially by Jekyll group, which was incredibly helpful.
Copied the code to my repo,
and for the first time, my site worked on localhost, with `bundle exec jekyll serve`.
After I committed,
the default domain `violapterinblog.github.io` was also rendered successfully on the browser, which was exciting!

*July 20*:
Jekyll called Kramdown, a Markdown standard, by default.
Realized that Jekyll allowed raw html code protected by tags,
so I might actually write directly in HTML.
But it did not harm to try Kramdown first.

Tried to call Mathjax, which Kramdown was said to call, with no avail.
It was pointed out that Mathjax seemed to have difficulty recognizing `$$`.
Therefore, one had to apply the snippet on
  [official document](http://docs.mathjax.org/en/latest/upgrading/v2.html#changes-in-the-mathjax-api),
  which solved everything.

*July 22*:
Though I could typeset mathematics now,
I wanted more.
In fact, I had hoped that my favorite Google fonts may be used instead of the default LaTeX fonts.
Perhaps I might specify, in the CSS, the fonts which `\textrm`, `\textsf`, `\texttt` calls, as a slight abuse of system?
I asked on Stack Exchange and Stack Overflow,
and it turned out that, although Mathjax 2.7 allowed that, Mathjax 3 didn't.
Tried to call Mathjax 2.7 instead of 3,
and failed.
Quite disappointed, I give up eventually the thought of using custom fonts in LaTeX.

But at least I learned to call Google fonts, as explained in
  [Getting Started](https://developers.google.com/fonts/docs/getting_started).
Jekyll characterized CSS in `/css/main.scss`,
and `$`-prefixed variables were expanded, in order to generated CSS statements.
I used Roboto Sans for titles and headings, Open Sans for normal text.
On the other hand, I used Vollkorn for bold text (again a slight abuse of design), which corresponds to Markdown `** ... **` and HTML tag `<strong>`.

*July 26*:
Last year, I had bought a domain under WP account,
and today I finally transfered that to the GHP.
I asked WordPress staff via email,
and their response was so kind!
They sent link of instruction, which had always been there,
and I never read carefully.
To start, I had to renew `violapterin.com` and `violapterin.blog`, like before, which was a matter of one-click.
Then, to point the two domains, presently managed by WordPress-com, towards my GHP, I had to add a DNS CNAME-records  on WordPress-com, under WP's tutorial
  [domain management](https://wordpress.com/domains/manage),
and simply add the alias on the web interface for GitHub repo.
The introduction by GitHub itself,
  [Managing a custom domain for your github pages site](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site),
  explains everything.

*July 28*:
Discovered `\unicode` extension of MathJax,
and suddenly there again was hope for changing LaTeX font.
In doing so, I might extract arbitrary unicode characters,
as long as the font (known to the browser) supports that.
It appeared I could not specify the style (normal or italic) and weight (light, regular, or bold etc),
but obviously this was asking too much.

The `macro` extension was tremendously helpful too.
While it was not part of TeX,
still these macros expanded, even recursively, before Mathjax was called!
I imported and translated the whole big list of custom LaTeX macros I used with ConTeXt,

*July 29*:
A critical progress!
This night, I was thinking intensively of an imagined command.
This command displayed a first glyph onto the document,
but threw it away from the ``stack'' (or whatever),
and displayed a second glyph like usual,
so that the ensuing, third glyph knew only the second glyph, but not the first one.
If only there is exactly such TeX command!
But I was not optimistic,
as I felt this did not quite agree the spirit of TeX's design.

Meanwhile, I was troubled by the ugliness of the `\unicode` letters manually accented by me.
When researching Stack Overflow about `\overset` and `\underset`, I saw several posts, like `barbara beeton`'s answer in
  [this thread on vertical spacing of `\underset`](https://tex.stackexchange.com/questions/302830/vertical-spacing-of-underset-and-other-tweaks)
  used the plain-TeX control sequence `\smash`.
Its name alone sounded just like what I was after!
I was excited and nervous, and looked up Knuth's *TeXbook*, quoted below (p.178)

  Plain TeX also provides `\smash {<subformula>}`, a macro that yields the same result as `<subformula>`, but makes the height and depth zero.
  By using both `\smash` and `\vphantom` you can typeset any subformula and give it any desired nonnegative height and depth.

Its implementation was shown in Appendix B (p.360),

    \def\smash{\relax % \relax, in case this comes first in \halign
      \ifmmode\def\next{\mathpalette\mathsm@sh}\else\let\next\makesm@sh
      \fi \next}

Instantly I applied `\smash` to my `\unicode`-containing macro, and the letters did look normal!
I really should learn TeX at least in a cursory manner,
since many of my original solutions might very well be simplified greatly by plain TeX sequences which I did not yet know (or would never know).


*Aug 2*:
Turned out most
  [miscellaneous symbols](https://en.wikipedia.org/wiki/Miscellaneous_Symbols)
  were not in Noto Sans nor Noto Serif,
as one can test on Google Font's demonstration page of these font families.
This was a bit disappointing,
but a moment's reflection assured me that those LaTeX- and AMS-provided symbols should actually suffice, considering moreover there were underset and oversets to combine symbols with geometric shapes for instance.
Besides, with Mathjax's `\unicode` extension, it might be possible to display Japanese Hiragana and Kanji.
*Qianziwen* (千字文), it occured to me, was a good choice, since a variety of things from gambling tickets to military division had been numbered with it.

*Aug 3*:
Confirmed that `\unicode` could display Hiragana and Kanji.
If I was not mistaken, the code points of Hiragana and Kanji (Basic Multilingual Plane) were indeed same as their UTF-16 encodings.

I examined textual differences of *Qianziwen*, and revised in favor of Japanese-Kanji characters defined in standards JIS-X-0208, 0212, and 0213.
Originally, I thought I had to write a Python script to check the encodings,
but unexpectedly, I could just check this out on Windows Notepad,
since those not in JIS were in different fonts and visually different.

At this point, I decided to take a break to learn a good deal of 
[HTML], 
[CSS], and 
[JS], 
as well as
[Jekyll],
[SASS], and 
[Kramdown].
Afterwards the solution of some problems will hopefully come naturally,
and knowing more web programming can only be beneficial to one's career.
And of course, I had spent too much on these matters which this post explains,
and for now I had better focus on the very writing which this site was constructed for.
In case the reader is interested in details,
check my public repo `violapterin.github.io`, the source of this blog, 