---
layout: post
title: "[??] GitHub Page Logbook 2: Digressing"
date: 2020-08-03
categories: "merticulous memory"
---

*Aug 5*: 
This was embarassing:
I learned something I should have known by day one:
I could totally disable Jekyll to make it a static site.
When Jekyll was run,
GitHub automatically generated the site again in the server end.
This, I knew already (which was the reason the suggested `.gitignore` had `/site` in it).
But if there was a empty file `.nojekyll`,
GitHub no longer ran Jekyll;
it simply recognized `index.html` as the root folder,
and hosted existent files accordingly.

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
And third, something coincidental which I only thought of today, it could have extension `.mlx`, sounding like *XML*!
This had me made up my mind.

Excited, I was thinking about writing a parser,
and vaguely recalled one might have to implement a PEG (parsing expression grammar) or a BNF (Backus–Naur form).
Bizarrely, it was still an open problem whether a PEG covers all BNF.
Before coding however, I had to have a clear picture about where *Melancholia* lies in the so-called Chomsky hierarchy, something Wikipedia reminded me, and I hardly had known.
They were, from the broader to narrower, *recursively enumerable*, *context-sensitive*, *context-free*, and *regular*

On one hand, Markdown was not (as what I would call) elegantly designed,
and it had at least potentially surprising behaviors.
The foremost suggestion of Markdown by Gruber was indeed problematic.
It was pointed out that
    [the original Markdown cannot be context-free](http://roopc.net/posts/2014/eval-stmd/).
Precisely for that reason, it was superceded by CommonMark.
John MacFarlane, one of CommonMark's creators, implemented a PEG.
I did not know whether GitHub-Flavored Markdown has a PEG or CFG.
Recall that it was well known that whether a language is unambiguous is undecidable, in general.

On the other hand, I was far from capable to design Melancholia in near future.
The case of Markdown only reminded me more of the imminent danger of ambiguity.
A possible scope of project might go like this.
The Small-Melancholia was to be context-free,
and was subset of Kramdown-with-Mathjax.
The Big-Melancholia was to be recursively enumerable,
[like HTML5 is](http://trevorjim.com/a-grammar-for-html5/),
and shall describe a universal Turing machine.
I shall still use Kramdown-with-Mathjax for writing,
until I complete the design.
By then, conversion of Small-Melancholia to Markdown would not sound like a particular difficulty, as long as Melancholia was designed reliable.
Indeed, mathematical subscripts, superscripts, diactritics, undersets, and supersets will correspond, with injection, to the Melancholia model enunciated solely by dedicated symbols and vertical division of lines.
Afterwards, I shall disable Jekyll, use Big-Melancholia, and generate HTML myself.

Was it such thing possible?
I had no idea,
perhaps until I had a good grasp of the theory of computation.
Such design and coding will certainly take a long time.
Therefore, after a great deal of contemplation detailed above, I decided firmly to myself that I should really stick to Kramdown-with-Mathjax for now.
Enough with these nonsense;
concentrate on writing, and focus on the content!

*Aug 12*: Test CSS-span-fractions, okay.
Suddenly discover CSS grids.
Came up with the artificial square brackets made of `span`.

    .v, .v-b, .v-l, .v-r, .v-l-r {
        display: inline-block;
        vertical-align: middle;
    }
    .v-b { border-bottom: thin dotted black;}
    .v-l { border-left: thin dotted black;}
    .v-r { border-right: thin dotted black;}
    .v-l-r { border-left: thin dotted black;
        border-right: thin dotted black;}

    <span class="v-l-r">
        <span class="v-b">
        <span class="v-r">
            <span class="v-b"> a </span> <br>
            <span class="v"> b </span>
        </span>
        - <span class="v"> cd </span>
        </span> <br>
        <span class="v"> x+y+z </span>
    </span>


Aug 14: Realize that an expression is really a tree.
If I choose prefix form always, there is no parsiing problem, like Lisp does.
Later today, my friend Authur Lin coincidentally posted a link talking about prefix-infix-postfix transformation, because I brought up the topic of obelus sign.
This helped me further clarify the tree image, and came up with a interpretation of the transformation.
The design of esoteric language Jelly (inspired by J and APL in turn) is very instructive in its tacit function notation.


<!-- problem of greedy parsing of `|` -->

<!-- To do:

- Color Mathjax output (dark blue?)

- Convert (with Python) Hiragana and Qianziwen-chars to Unicode

- Split file of Mathjax configs

-->