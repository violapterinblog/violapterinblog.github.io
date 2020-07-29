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
      //XXXA: "{\\large \\unicode[.10,.05][Source Serif Pro]{65}}",
      //XXXD: "\\overset {\\cdot} {\\raise{1ex}{\\XXXA}}",
      XXXA: "\\smash {\\large \\unicode [Source Serif Pro] {65}} \\vphantom {\\small A}",
      XXXDAO: "\\smash {\\overset {\\raise {-2mu} {\\scriptsize \\bullet}} {\\XXXA}} \\vphantom {\\XXXA}",
      XXXDAU: "\\smash {\\underset {\\raise {8mu} {\\small \\bullet}} {\\XXXA}} \\vphantom {\\XXXA}",
      XXXDAT: "\\dot {A}",
      XXXTAO: "\\smash {\\overset {\\raise {-2mu} {\\small \\thicksim}} {\\XXXA}} \\vphantom {\\XXXA}",
      XXXTAU: "\\smash {\\underset {\\raise {8mu} {\\small \\thicksim}} {\\XXXA}} \\vphantom {\\XXXA}",
      XXXTAT: "\\tilde {A}",

      XXXg: "\\smash {\\large \\unicode [Source Serif Pro] {103}} \\vphantom {\\small g}",
      XXXDgO: "\\smash {\\overset {\\raise {-2mu} {\\scriptsize \\bullet}} {\\XXXg}} \\vphantom {\\XXXg}",
      XXXDgU: "\\smash {\\underset {\\raise {8mu} {\\scriptsize \\bullet}} {\\XXXg}} \\vphantom {\\XXXg}",
      XXXDgT: "\\dot {g}",
      XXXTgO: "\\smash {\\overset {\\raise {-2mu} {\\small \\thicksim}} {\\XXXg}} \\vphantom {\\XXXg}",
      XXXTgU: "\\smash {\\underset {\\raise {8mu} {\\small \\thicksim}} {\\XXXg}} \\vphantom {\\XXXg}",
      XXXTgT: "\\tilde {g}",


      I: ["{#1} _{#2}", 2],
      S: ["{#1} _{#2}", 2],
      IS: ["{#1} _{#2} ^{#3}", 3],

      F: ["\\frac {#1} {#2}", 2], // fraction
      Q: ["\\sqrt {#1}", 1], // quadratic

      // while-like constructions (W)
      WI: "\\int",
      WID: ["\\int \\!\\! {\\vphantom {\\int}}^{#1}", 1],
      WII: ["\\int\\limits_{#1}", 1],
      WIID: ["\\int\\limits_{#1} \\!\\! {\\vphantom {\\int}}^{#2}", 2],
      WIIS: ["\\int\\limits_{#1}^{#2}", 2],
      WIISD: ["\\int\\limits_{#1}^{#2} \\!\\! {\\vphantom {\\int}}^{#3}", 3],

      BR: ["\\left( #1 \\right)", 1],
      BRM: ["( #1 )", 1],
      BRD: ["\\big( #1 \\big)", 1],
      BRT: ["\\Big( #1 \\Big)", 1],
      BRQ: ["\\bigg( #1 \\bigg)", 1],
      BRP: ["\\Bigg( #1 \\Bigg)", 1],
      BS: ["\\left( #1 \\right)", 1],
      BSM: ["[ #1 ]", 1],
      BSD: ["\\big[ #1 \\big]", 1],
      BST: ["\\Big[ #1 \\Big]", 1],
      BSQ: ["\\bigg[ #1 \\bigg]", 1],
      BSP: ["\\Bigg[ #1 \\Bigg]", 1],
      BC: ["\\left\\{ #1 \right\\}", 1],
      BCM: ["\\{ #1 \\}", 1],
      BCD: ["\\big\\{ #1 \\big\\}", 1],
      BCT: ["\\Big\\{ #1 \\Big\\}", 1],
      BCQ: ["\\bigg\\{ #1 \\bigg\\}", 1],
      BCP: ["\\Bigg\\{ #1 \\Bigg\\}", 1],


      DD: ["\\underset {#1} {\\cdot}", 1],

      AA: "+", // add
      AS: "-", // subtract
      AM: "\\cdot", // multiply
      AD: "/", // divide

      PC: ",", // comma
      PP: ".", // period
      PCl: ":", // colon
      PSm: ";", // semicolon
      PEc: "!", // exclamation
      PQt: "?", // question
      PDC: "\\cdots",
      PDL: "\\ldots",
      PDV: "\\vdots",
      PDD: "\\ddots",

      RE: "=", //  equal
      RG: ">", // greater
      RL: "<", //  less
      RGE: "\\geq",
      RLE: "\\leq",
      RD: ":=", // definition
      RS: "\\sim",
      RA: "\\approx",
      RM: "\\mid", <!--  vertical -->

      // letter-like (Y, Z)
      Ld: "\\textbf {d}",
      LdP: "\\partial",
      Le: "\\textbf {e}",
      Li: "\\mathring {\\mathi}",
      Lj: "\\mathring {\\mathj}",
      LT: "\\intercal",
      Lp: "\\pi",

      // Blackboard bold
      VFA: "\\mathfrak {A}",
      VFB: "\\mathfrak {B}",
      VFC: "\\mathfrak {C}",
      VFD: "\\mathfrak {D}",
      VFE: "\\mathfrak {E}",
      VFF: "\\mathfrak {F}",
      VFG: "\\mathfrak {G}",
      VFH: "\\mathfrak {H}",
      VFI: "\\mathfrak {I}",
      VFJ: "\\mathfrak {J}",
      VFK: "\\mathfrak {K}",
      VFL: "\\mathfrak {L}",
      VFM: "\\mathfrak {M}",
      VFN: "\\mathfrak {N}",
      VFO: "\\mathfrak {O}",
      VFP: "\\mathfrak {P}",
      VFQ: "\\mathfrak {Q}",
      VFR: "\\mathfrak {R}",
      VFS: "\\mathfrak {S}",
      VFT: "\\mathfrak {T}",
      VFU: "\\mathfrak {U}",
      VFV: "\\mathfrak {V}",
      VFW: "\\mathfrak {W}",
      VFX: "\\mathfrak {X}",
      VFY: "\\mathfrak {Y}",
      VFZ: "\\mathfrak {Z}",

      // Script
      VSA: "\\mathcal {A}",
      VSB: "\\mathcal {B}",
      VSC: "\\mathcal {C}",
      VSD: "\\mathcal {D}",
      VSE: "\\mathcal {E}",
      VSF: "\\mathcal {F}",
      VSG: "\\mathcal {G}",
      VSH: "\\mathcal {H}",
      VSI: "\\mathcal {I}",
      VSJ: "\\mathcal {J}",
      VSK: "\\mathcal {K}",
      VSL: "\\mathcal {L}",
      VSM: "\\mathcal {M}",
      VSN: "\\mathcal {N}",
      VSO: "\\mathcal {O}",
      VSP: "\\mathcal {P}",
      VSQ: "\\mathcal {Q}",
      VSR: "\\mathcal {R}",
      VSS: "\\mathcal {S}",
      VST: "\\mathcal {T}",
      VSU: "\\mathcal {U}",
      VSV: "\\mathcal {V}",
      VSW: "\\mathcal {W}",
      VSX: "\\mathcal {X}",
      VSY: "\\mathcal {Y}",
      VSZ: "\\mathcal {Z}",


      // Greek (G)
      Ga: "\\alpha",
      Gb: "\\beta",
      GG: "\\Gamma",
      Gg: "\\gamma",
      GD: "\\Delta",
      Gd: "\\delta",
      Ge: "\\varepsilon",
      Gz: "\\zeta",
      Gh: "\\eta",
      GQ: "\\Theta",
      Gq: "\\vartheta",
      Gi: "\\iota",
      Gk: "\\kappa",
      GL: "\\Lambda",
      Gl: "\\lambda",
      Gm: "\\mu",
      Gn: "\\nu",
      Gi: "\\iota",
      GP: "\\Pi",
      Gp: "\\varpi",
      Gr: "\\rho",
      GS: "\\Sigma",
      Gs: "\\sigma",
      Gt: "\\tau",
      GU: "\\Upsilon",
      Gu: "\\upsilon",
      GF: "\\Phi",
      Gf: "\\varphi",
      Gx: "\\chi",
      GY: "\\Psi",
      Gy: "\\psi",
      GW: "\\Omega",
      Gw: "\\omega",

      EM: "\\hspace {0.20em}",
      ED: "\\hspace {0.40em}",
      ET: "\\hspace {0.60em}",
      EQ: "\\hspace {0.80em}",
      EP: "\\hspace {1.00em}",
      EH: "\\hspace {1.20em}",
      ES: "\\hspace {1.40em}",
      EO: "\\hspace {1.60em}",
      EN: "\\hspace {1.80em}",

//M, D, T, Q, P, H, S, O, N
    },
  },
};

// \\large
//БДЄЖЗИЛЦЧЏШЩЭЯ
//бдєжзилцчџшщэя


      /*
      P puctuation
      R relation
      A arithmetic
      W while

      N number
      L Latin
      VF frak
      VB blackboard
      VH handwriting
      G greek
      C cyrillic

      E empty
      DS, DI diacritics
      T text
      M matrix
      B bracket

      S supra
      I infra
      O over
      U under
      F fraction
      Q quadratic

      X letter-like symbols
      Y non-letter symbols
      Z geometric symbols


      // PRAWNLVGCEDTMBSIOUFQXYZ
      // ABCDE FGILM NOPQR STUVW XYZ
      // (HJK)
      // ...... ...... ...... ......
      //number:  (M, D, T, Q, P, H, S, O, N)
      */
