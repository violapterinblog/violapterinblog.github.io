/* Mathjax has difficulty recognizing `$$`, which Kramdown takes for granted.
Selected references:
`http://docs.mathjax.org/en/latest/upgrading/v2.html#changes-in-the-mathjax-api`
`https://stackoverflow.com/questions/26275645/how-to-support-latex-in-github-pages`
`https://11011110.github.io/blog/2019/10/17/mathjax-3-jekyll.html`
`https://chrisyeh96.github.io/2020/03/29/mathjax3.html`
*/

MathJax = {
  options: {
    renderActions: {
      find: [
        10,
        function (doc) {
          for (const node of document.querySelectorAll(
            'script[type^="math/tex"]'
          )) {
            const display = !!node.type.match(/; *mode=display/);
            const math = new doc.options.MathItem(
              node.textContent,
              doc.inputJax[0],
              display
            );
            const text = document.createTextNode("");
            node.parentNode.replaceChild(text, node);
            math.start = { node: text, delim: "", n: 0 };
            math.end = { node: text, delim: "", n: 0 };
            doc.math.push(math);
          }
        },
        "",
      ],
    },
  },

  /* Define LaTeX macros. Recall that `\` has to be escaped. */
  tex: {
    macros: {
      // Test
      ZFC: "\\textsf {ZFC}",
      Eq: ["\\begin{equation} #1 \\end{equation}", 1],

      P puctuation
      R relation
      S symbol

      LF frak
      LB blackboard
      LH handwriting
      LS script
      G greek
      C cyrillic
      
      D diacritics
      U under
      T text

      W while

      O over

      X
      Y
      Z
      

      OA: "+", <!--  add -->
      OS: "-", <!--  subtract -->
      OM: "\\cdot", <!--  multiply -->
      OD: "/", <!--  divide -->

      PC: ",", <!--  comma -->
      PP: ".", <!--  period -->
      PCl: ":", <!--  colon -->
      PSm: ";", <!--  semicolon -->
      PEc: "!", <!--  exclamation -->
      PQt: "?", <!--  question -->
      PDC: "\\cdots",
      PDL: "\\ldots",
      PDV: "\\vdots",
      PDD: "\\ddots",

      RE: "=", <!--  equal -->
      RG: ">", <!--  greater -->
      RL: "<", <!--  less -->
      RGE: "\\geq",
      RLE: "\\leq",
      RD: ":=", <!--  definition -->
      RS: "\\sim",
      RA: "\\approx",
      RM: "\\mid", <!--  vertical -->

      <!--  letter-like (L) -->
      Ld: "\\mathfrak {d}",
      LP: "\\partial",
      LT: "\\intercal",


    },
  },
};
