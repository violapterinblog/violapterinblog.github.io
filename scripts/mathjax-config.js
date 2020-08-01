MathJax = {
  /* Mathjax has difficulty recognizing `$$`, which Kramdown assumes. */
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

  /* * * * * * * * * * * * * * * * * * * * * * * */
  /* * * * * * * * * * * * * * * * * * * * * * * */
  /* * * * * * * * * * * * * * * * * * * * * * * */

  /* Define LaTeX macros, which will be expanded before TeX
  is called. Beware that `\` has to be escaped in JS. */
  tex: {
    macros: {
      // helper functions
      HPt: ["\\phantom {\\rule[#1mu]{#2mu}{#3mu}}", 3], // phantom
      HGR: ["{\\large \\unicode [Source Serif Pro] {#1}}", 1], // glyph roman
      HGG: ["{\\large \\unicode [Source Sans Pro] {#1}}", 1], // glyph gothic
      HGRB: ["{\\large \\unicode [Alegreya] {#1}}", 1], // glyph roman, black
      HGGB: ["{\\large \\unicode [Alegreya Sans] {#1}}", 1], // glyph gothic, black
      HTsR: ["\\HPt {#1} {#2} {#3} \\smash {\\HGR {#4}} \\HPt {#1} {#2} {#3}", 4], // typeset roman
      HTsG: ["\\HPt {#1} {#2} {#3} \\smash {\\HGG {#4}} \\HPt {#1} {#2} {#3}", 4], // typeset gothic
      HTsRB: ["\\HPt {#1} {#2} {#3} \\smash {\\HGRB {#4}} \\HPt {#1} {#2} {#3}", 4], // typeset roman, black
      HTsGB: ["\\HPt {#1} {#2} {#3} \\smash {\\HGGB {#4}} \\HPt {#1} {#2} {#3}", 4], // typeset gothic, black

      /* * * * * * * * * * * * * * * * * * * * * * * */
      /* Group 1: N, L, T, G, C, A, R, P, E */

      // N

      LA: "\\HTsR {0} {1} {11} {x0041}",
      LB: "\\HTsR {0} {1} {11} {x0042}",
      LC: "\\HTsR {0} {1} {11} {x0043}",
      LD: "\\HTsR {0} {1} {11} {x0044}",
      LE: "\\HTsR {0} {1} {11} {x0045}",
      LF: "\\HTsR {0} {1} {11} {x0046}",
      LG: "\\HTsR {0} {1} {11} {x0047}",
      LH: "\\HTsR {0} {1} {11} {x0048}",
      LI: "\\HTsR {0} {1} {11} {x0049}",
      LK: "\\HTsR {0} {1} {11} {x004B}",
      LL: "\\HTsR {0} {1} {11} {x004C}",
      LM: "\\HTsR {0} {1} {11} {x004D}",
      LN: "\\HTsR {0} {1} {11} {x004E}",
      LO: "\\HTsR {0} {1} {11} {x004F}",
      LP: "\\HTsR {0} {1} {11} {x0050}",
      LR: "\\HTsR {0} {1} {11} {x0052}",
      LS: "\\HTsR {0} {1} {11} {x0053}",
      LT: "\\HTsR {0} {1} {11} {x0054}",
      LU: "\\HTsR {0} {1} {11} {x0055}",
      LV: "\\HTsR {0} {1} {11} {x0056}",
      LW: "\\HTsR {0} {1} {11} {x0057}",
      LX: "\\HTsR {0} {1} {11} {x0058}",
      LY: "\\HTsR {0} {1} {11} {x0059}",
      LZ: "\\HTsR {0} {1} {11} {x005A}",

      LQ: "\\HTsR {-2} {1} {13} {x0051}",
      LJ: "\\HTsR {-2} {1} {13} {x004A}",

      La: "\\HTsR {0} {1} {8} {x0061}",
      Lc: "\\HTsR {0} {1} {8} {x0063}",
      Le: "\\HTsR {0} {1} {8} {x0065}",
      Li: "\\HTsR {0} {1} {8} {x0131}",
      Lm: "\\HTsR {0} {1} {8} {x006D}",
      Ln: "\\HTsR {0} {1} {8} {x006E}",
      Lo: "\\HTsR {0} {1} {8} {x006F}",
      Lr: "\\HTsR {0} {1} {8} {x0072}",
      Ls: "\\HTsR {0} {1} {8} {x0073}",
      Lu: "\\HTsR {0} {1} {8} {x0075}",
      Lv: "\\HTsR {0} {1} {8} {x0076}",
      Lw: "\\HTsR {0} {1} {8} {x0077}",
      Lx: "\\HTsR {0} {1} {8} {x0078}",
      Lz: "\\HTsR {0} {1} {8} {x007A}",

      Lb: "\\HTsR {0} {1} {12} {x0062}",
      Ld: "\\HTsR {0} {1} {12} {x0064}",
      Lf: "\\HTsR {0} {1} {12} {x0066}",
      Lh: "\\HTsR {0} {1} {12} {x0068}",
      Lk: "\\HTsR {0} {1} {12} {x006B}",
      Ll: "\\HTsR {0} {1} {12} {x006C}",

      Lt: "\\HTsR {0} {1} {10} {x0074}",

      Lg: "\\HTsR {-3} {1} {11} {x0067}",
      Lp: "\\HTsR {-3} {1} {11} {x0070}",
      Lq: "\\HTsR {-3} {1} {11} {x0071}",
      Lj: "\\HTsR {-3} {1} {11} {x0237}",
      Ly: "\\HTsR {-3} {1} {11} {x0079}",

      // text (T)
      TA: "\\HTsR {0} {0} {11} {x0041}",
      TB: "\\HTsR {0} {0} {11} {x0042}",
      TC: "\\HTsR {0} {0} {11} {x0043}",
      TD: "\\HTsR {0} {0} {11} {x0044}",
      TE: "\\HTsR {0} {0} {11} {x0045}",
      TF: "\\HTsR {0} {0} {11} {x0046}",
      TG: "\\HTsR {0} {0} {11} {x0047}",
      TH: "\\HTsR {0} {0} {11} {x0048}",
      TI: "\\HTsR {0} {0} {11} {x0049}",
      TJ: "\\HTsR {0} {0} {11} {x004A}",
      TK: "\\HTsR {0} {0} {11} {x004B}",
      TL: "\\HTsR {0} {0} {11} {x004C}",
      TM: "\\HTsR {0} {0} {11} {x004D}",
      TN: "\\HTsR {0} {0} {11} {x004E}",
      TO: "\\HTsR {0} {0} {11} {x004F}",
      TP: "\\HTsR {0} {0} {11} {x0050}",
      TR: "\\HTsR {0} {0} {11} {x0052}",
      TS: "\\HTsR {0} {0} {11} {x0053}",
      TT: "\\HTsR {0} {0} {11} {x0054}",
      TU: "\\HTsR {0} {0} {11} {x0055}",
      TV: "\\HTsR {0} {0} {11} {x0056}",
      TW: "\\HTsR {0} {0} {11} {x0057}",
      TX: "\\HTsR {0} {0} {11} {x0058}",
      TY: "\\HTsR {0} {0} {11} {x0059}",
      TZ: "\\HTsR {0} {0} {11} {x005A}",

      TQ: "\\HTsR {-2} {0} {13} {x0051}",

      Ta: "\\HTsR {0} {0} {8} {x0061}",
      Tc: "\\HTsR {0} {0} {8} {x0063}",
      Te: "\\HTsR {0} {0} {8} {x0065}",
      Tm: "\\HTsR {0} {0} {8} {x006D}",
      Tn: "\\HTsR {0} {0} {8} {x006E}",
      To: "\\HTsR {0} {0} {8} {x006F}",
      Tr: "\\HTsR {0} {0} {8} {x0072}",
      Ts: "\\HTsR {0} {0} {8} {x0073}",
      Tu: "\\HTsR {0} {0} {8} {x0075}",
      Tv: "\\HTsR {0} {0} {8} {x0076}",
      Tw: "\\HTsR {0} {0} {8} {x0077}",
      Tx: "\\HTsR {0} {0} {8} {x0078}",
      Tz: "\\HTsR {0} {0} {8} {x007A}",

      Tb: "\\HTsR {0} {0} {12} {x0062}",
      Td: "\\HTsR {0} {0} {12} {x0064}",
      Tf: "\\HTsR {0} {0} {12} {x0066}",
      Th: "\\HTsR {0} {0} {12} {x0068}",
      Ti: "\\HTsR {0} {0} {12} {x0131}",
      Tk: "\\HTsR {0} {0} {12} {x006B}",
      Tl: "\\HTsR {0} {0} {12} {x006C}",

      Tt: "\\HTsR {0} {0} {10} {x0074}",

      Tg: "\\HTsR {-3} {0} {11} {x0067}",
      Tp: "\\HTsR {-3} {0} {11} {x0070}",
      Tq: "\\HTsR {-3} {0} {11} {x0071}",
      Ty: "\\HTsR {-3} {0} {11} {x0079}",

      Tj: "\\HTsR {-3} {0} {15} {x0237}",
      
      // G

      GG: "\\HTsR {0} {1} {11} {x0393}",
      GD: "\\HTsR {0} {1} {11} {x0394}",
      GQ: "\\HTsR {0} {1} {11} {x0398}",
      GL: "\\HTsR {0} {1} {11} {x039B}",
      GC: "\\HTsR {0} {1} {11} {x039E}",
      GP: "\\HTsR {0} {1} {11} {x03A0}",
      GS: "\\HTsR {0} {1} {11} {x03A3}",
      GU: "\\HTsR {0} {1} {11} {x03A5}",
      GF: "\\HTsR {0} {1} {11} {x03A6}",
      GY: "\\HTsR {0} {1} {11} {x03A8}",
      GW: "\\HTsR {0} {1} {11} {x03A9}",

      Ga: "\\HTsR {0} {1} {11} {x03B1}",
      Gb: "\\HTsR {0} {1} {11} {x03B2}",
      Gg: "\\HTsR {0} {1} {11} {x03B3}",
      Gd: "\\HTsR {0} {1} {11} {x03B4}",
      Gv: "\\HTsR {0} {1} {11} {x03B5}",
      Gz: "\\HTsR {0} {1} {11} {x03B6}",
      Gh: "\\HTsR {0} {1} {11} {x03B7}",
      Gq: "\\HTsR {0} {1} {11} {x03B8}",
      Gi: "\\HTsR {0} {1} {11} {x03B9}",
      Gk: "\\HTsR {0} {1} {11} {x03BA}",
      Gl: "\\HTsR {0} {1} {11} {x03BB}",
      Gm: "\\HTsR {0} {1} {11} {x03BC}",
      Gn: "\\HTsR {0} {1} {11} {x03BD}",
      Gc: "\\HTsR {0} {1} {11} {x03BE}",
      Gp: "\\HTsR {0} {1} {11} {x03C0}",
      Gr: "\\HTsR {0} {1} {11} {x03C1}",
      Gs: "\\HTsR {0} {1} {11} {x03C2}",
      Gt: "\\HTsR {0} {1} {11} {x03C3}",
      Gu: "\\HTsR {0} {1} {11} {x03C4}",
      Gf: "\\HTsR {0} {1} {11} {x03C5}",
      Gx: "\\HTsR {0} {1} {11} {x03C6}",
      Gy: "\\HTsR {0} {1} {11} {x03C7}",
      Gw: "\\HTsR {0} {1} {11} {x03C8}",



      // C

      AA: "+", // add
      AS: "-", // subtract
      AM: "\\cdot", // multiply
      AD: "/", // divide

      RE: "=", //  equal
      RG: ">", // greater
      RL: "<", //  less
      RGE: "\\geq",
      RLE: "\\leq",
      RD: ":=", // definition
      RS: "\\sim",
      RA: "\\approx",
      RM: "\\mid",


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

      EM: "\\hspace {0.20em}",
      ED: "\\hspace {0.40em}",
      ET: "\\hspace {0.60em}",
      EQ: "\\hspace {0.80em}",
      EP: "\\hspace {1.00em}",
      EH: "\\hspace {1.20em}",
      ES: "\\hspace {1.40em}",
      EO: "\\hspace {1.60em}",
      EN: "\\hspace {1.80em}",

      /* * * * * * * * * * * * * * * * * * * * * * * */
      /* Group 2: X, Y, Z */

      /* Group 3: D, I, S, U, O, B */
      DOT: ["\\smash {\\overset {\\raise {-1mu} {\\tiny \\boldsymbol {\\thicksim}}} {#1}} \\vphantom {#1}", 1], // tilde
      DOM: ["\\smash {\\overset {\\raise {-1mu} {\\tiny \\boldsymbol {-}}} {#1}} \\vphantom {#1}", 1], // macron
      DOH: ["\\smash {\\overset {\\raise {-1mu} {\\tiny \\boldsymbol {\\vee}}} {#1}} \\vphantom {#1}", 1], // hachek
      DOC: ["\\smash {\\overset {\\raise {-1mu} {\\tiny \\boldsymbol {\\wedge}}} {#1}} \\vphantom {#1}", 1], // circumflex
      DOR: ["\\smash {\\overset {\\raise {-1mu} {\\tiny \\boldsymbol {\\circ}}} {#1}} \\vphantom {#1}", 1], // ring
      DOD: ["\\smash {\\overset {\\raise {-1mu} {\\tiny \\bullet}} {#1}} \\vphantom {#1}", 1], // dot
      DOP: ["\\smash {\\overset {\\raise {-1mu} {\\small \\textbf{,}}} {#1}} \\vphantom {#1}", 1], // psili

      DUT: ["\\smash {\\underset {\\raise {8mu} {\\tiny \\boldsymbol {\\thicksim}}} {#1}} \\vphantom {#1}", 1],
      DUM: ["\\smash {\\underset {\\raise {8mu} {\\tiny \\boldsymbol {-}}} {#1}} \\vphantom {#1}", 1],
      DUH: ["\\smash {\\underset {\\raise {8mu} {\\tiny \\boldsymbol {\\vee}}} {#1}} \\vphantom {#1}", 1],
      DUC: ["\\smash {\\underset {\\raise {8mu} {\\tiny \\boldsymbol {\\wedge}}} {#1}} \\vphantom {#1}", 1],
      DUR: ["\\smash {\\underset {\\raise {8mu} {\\tiny \\boldsymbol {\\circ}}} {#1}} \\vphantom {#1}", 1],
      DUD: ["\\smash {\\underset {\\raise {8mu} {\\tiny \\bullet}} {#1}} \\vphantom {#1}", 1],
      DUP: ["\\smash {\\underset {\\raise {8mu} {\\small \\textbf{,}}} {#1}} \\vphantom {#1}", 1],


      I: ["{#1} _{#2}", 2],
      S: ["{#1} _{#2}", 2],
      IS: ["{#1} _{#2} ^{#3}", 3],

      F: ["\\frac {#1} {#2}", 2], // fraction
      Q: ["\\sqrt {#1}", 1], // quadratic



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

      /* Group 4: Q, F, W, M */

      // while-like constructions (W)
      WI: "\\int",
      WID: ["\\int \\!\\! {\\vphantom {\\int}}^{#1}", 1],
      WII: ["\\int\\limits_{#1}", 1],
      WIID: ["\\int\\limits_{#1} \\!\\! {\\vphantom {\\int}}^{#2}", 2],
      WIIS: ["\\int\\limits_{#1}^{#2}", 2],
      WIISD: ["\\int\\limits_{#1}^{#2} \\!\\! {\\vphantom {\\int}}^{#3}", 3],

/* Deprecated

      // letter-like (Y, Z)
      Ld: "\\textbf {d}",
      LdP: "\\partial",
      Le: "\\textbf {e}",
      Li: "\\mathring {\\mathi}",
      Lj: "\\mathring {\\mathj}",
      LT: "\\intercal",
      Lp: "\\pi",

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
*/

//M, D, T, Q, P, H, S, O, N
    },
  },
};

// \\large
//БДЄЖЗИЛЦЧЏШЩЭЯ
//бдєжзилцчџшщэя


      /*
      N number
      L Latin
      G greek
      C cyrillic
      A arithmetic
      R relation
      P puctuation
      E empty

      X letter-like symbols
      Y non-letter symbols
      Z geometric symbols

      D diacritics
      I infra
      S supra
      U under
      O over
      B bracket
      T text

      Q quadratic
      F fraction
      W while
      M matrix

      // PRAWNLVGCEDTMBSIOUFQXYZ
      // ABCDE FGILM NOPQR STUVW XYZ
      // (HJK)
      // ...... ...... ...... ......
      //number:  (M, D, T, Q, P, H, S, O, N)
      */
