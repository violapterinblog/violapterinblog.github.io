---
layout: post
title: "Testing math"
date: 2020-07-21
categories: test
---

- Latin alphabets

$$ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z $$

$$ a b c d e f g h i j k l m n o p q r s t u v w x y z $$

$$ \XX $$

$$ 𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷$$

$$ℌ 	ℍ 	ℎ 	ℏ ℐ 	ℑ 	ℒ 	ℓ 	℔ 	ℕ 	№ 	℗ 	℘ 	ℙ 	ℚ 	ℛ 	ℜ 	ℝ 	℞ 	℟
℠ 	℡ 	™ 	℣ 	ℤ 	℥ 	Ω 	℧ 	ℨ 	℩ 	K 	Å 	ℬ 	ℭ 	℮ 	ℯ
ℰ 	ℱ 	Ⅎ 	ℳ 	ℴ 	ℵ 	ℶ 	ℷ 	ℸ 	ℹ 	℺ 	℻ 	ℼ$$

$$\textsf {ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}$$

$$\mathbb {ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}$$

$$\mathfrak {ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}$$

$$\mathcal {ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}$$

$$\mathscr {ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}$$



language used by that system may interfere with the TeX notation used by MathJax. For example, if 


When $$a \ne 0$$, there are two solutions to $$ax^2 + bx + c = 0$$ and they are
$$x = \dfrac {-b \pm \sqrt{b^2-4ac}} {2a}.$$

<p> Since the TeX notation is part of the text of the page, there are some caveats that you must keep in mind when you enter your mathematics. In particular, you need to be careful about the use of less-than signs, since those are what the browser uses to indicate the start of a tag in HTML. Putting a space on both sides of the less-than sign should be sufficient, but see TeX and LaTeX support for more details. </p>

<p> If you are using MathJax within a blog, wiki, or other content management system, the markup language used by that system may interfere with the TeX notation used by MathJax. For example, if your blog uses Markdown notation for authoring your pages, the underscores used by TeX to indicate subscripts may be confused with the use of underscores by Markdown to indicate italics, and the two uses may prevent your mathematics from being displayed. See TeX and LaTeX support for some suggestions about how to deal with the problem. </p>