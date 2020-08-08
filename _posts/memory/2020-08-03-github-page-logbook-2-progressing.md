---
layout: post
title: "[??] GitHub Page Logbook 2: Exploring"
date: 2020-08-03
categories: "merticulous memory"
---

*Aug 5*: 
This was embarassing:
I learned something I should have known by day one:
I could totally disable Jekyll
and just upload a static site.
When Jekyll was run,
GitHub automatically generated the site again in the server end.
This, I knew already,
and was the reason the suggested `.gitignore` had `/site` in it.
But if there was a empty file `.nojekyll`,
GitHub no longer ran Jekyll;
it simply recognized `index.html` as the root folder,
and hosted accordingly.

Having known this, it suddenly looked feasible to design a custom format, and generate HTML-with-LaTeX myself.
Why stick to Markdown and LaTeX,
when I could forget about them?
Such thought resurfaced, and I went ambitious again.

*Aug 6*:

Surprisingly, as I tested for several simple cases, most browsers don't support MathML, including even Chrome and Safari.
That declared MathML could not, in this age, adequately be the carrier of my new notation.

Maybe I should use a more linear notation (as Peano did) completely falling in the realm of HTML and CSS, thus solving the problem by not creating it.
Who cared about the mainstream critics, on a personal blog?
Hurray for a even more unconventional notation!

That way, it only remained to keep dividing lines to be several sub-lines, possibly drawing a horizontal line between them, or vertical ones surrounding them.
At that time, I soon discovered that `<p>` did not allow block-level tags like `<table>` or `<div>`!

*Aug 7*:

Important realization!
HTML `<p>` may contain `<span>`, which may accommodate several lines separated by `<br>` and align them vertically.
Moreover, the CSS `border-left` `border-right` `border-top` `border-bottom` may serve as traditional mathematical brackets, with several styles of border line colors to use.
This would perhaps suffice for my revolution of notation!

*Aug 8*:

A while ago, I had considered the name *Melancholia*, meaning black bile, for my format in progress.
First, it stood for *ink*, which hints writing.
Second, it suggested depression, agreeing my constant tone.
And third, something coincidental which I only thought of later, it could have extension `.mlx`, sounding like *XML*!

Excited, I was thinking about writing a parser,
and vaguely recalled one might have to implement a PEG (parsing expression grammar) or a BNF (Backus–Naur form).
Bizarrely, it was still an open problem whether a PEG covers all BNF.
Before coding however, I had to have a clear picture about where *Melancholia* lies in the so-called Chomsky hierarchy, something Wikipedia reminded me, and I hardly had known.
They were, from the broader to narrower, *recursively enumerable*, *context-sensitive*, *context-free*, and *regular*

I learned that the danger was imminent that one designs a ambiguous language.
The original Markdown was a familiar example where the original definition was problematic.
Precisely for that reason, that version was superceded by CommonMark.
Unfortunately, it was pointed out that
    [CommonMark was still ambiguous](http://roopc.net/posts/2014/eval-stmd/).
It was now unclear to me that whether CommonMark was well defined as a context free language.

A possible scope of project might go like this.
The Small-Melancholia was to be context-free,
and was subset of Kramdown-with-Mathjax.
The Big-Melancholia was to be recursively enumerable,
and described a universal Turing machine.
I shall still use Kramdown-with-Mathjax for writing,
until the design was complete.
When that day came,
conversion of Small-Melancholia to Markdown would not sound like a particular difficulty, as long as Melancholia was designed reliable.
Afterwards, I shall disable Jekyll, use Big-Melancholia, and generate HTML myself.

Was it such thing possible?
I had no idea,
perhaps until I had a good grasp of the theory of computation.
Such design and coding will certainly take a long time.
Therefore, after a great deal of contemplation detailed above, I decided firmly to myself that I should really stick to Kramdown-with-Mathjax for now.
Enough with dreaming; concentrate on writing, and focus on the content!



<!-- To do:

- Via plugin, Jekyll can use custom converter, which converts custom format to HTML?
    [Converters](https://jekyllrb.com/docs/plugins/converters/)
    custom to HTML, or custom to Kramdown?

- Kramdown can merge row; need to change GH-copied CSS?


- Convert (with Python) Hiragana and Qianziwen-chars to Unicode

- Split file of Mathjax configs

-->