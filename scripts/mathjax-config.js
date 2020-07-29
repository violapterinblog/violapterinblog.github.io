MathJax = {
  /* Mathjax has difficulty recognizing `$$`, which Kramdown takes for granted. */
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


      /* Group 1: N, L, T, G, C, A, R, P, E */
      /* Group 2: X, Y, Z */

      // N

      LA: "\\smash {\\large \\unicode [Source Serif Pro] {65}} \\vphantom {\\small A}",
      LB: "\\smash {\\large \\unicode [Source Serif Pro] {66}} \\vphantom {\\small B}",
      LC: "\\smash {\\large \\unicode [Source Serif Pro] {67}} \\vphantom {\\small C}",
      LD: "\\smash {\\large \\unicode [Source Serif Pro] {68}} \\vphantom {\\small D}",
      LE: "\\smash {\\large \\unicode [Source Serif Pro] {69}} \\vphantom {\\small E}",
      LF: "\\smash {\\large \\unicode [Source Serif Pro] {70}} \\vphantom {\\small F}",
      LG: "\\smash {\\large \\unicode [Source Serif Pro] {71}} \\vphantom {\\small G}",
      LH: "\\smash {\\large \\unicode [Source Serif Pro] {72}} \\vphantom {\\small H}",
      LI: "\\smash {\\large \\unicode [Source Serif Pro] {73}} \\vphantom {\\small I}",
      LJ: "\\smash {\\large \\unicode [Source Serif Pro] {74}} \\vphantom {\\small J}",
      LK: "\\smash {\\large \\unicode [Source Serif Pro] {75}} \\vphantom {\\small K}",
      LL: "\\smash {\\large \\unicode [Source Serif Pro] {76}} \\vphantom {\\small L}",
      LM: "\\smash {\\large \\unicode [Source Serif Pro] {77}} \\vphantom {\\small M}",
      LN: "\\smash {\\large \\unicode [Source Serif Pro] {78}} \\vphantom {\\small N}",
      LO: "\\smash {\\large \\unicode [Source Serif Pro] {79}} \\vphantom {\\small O}",
      LP: "\\smash {\\large \\unicode [Source Serif Pro] {80}} \\vphantom {\\small P}",
      LQ: "\\smash {\\large \\unicode [Source Serif Pro] {81}} \\vphantom {\\small Q}",
      LR: "\\smash {\\large \\unicode [Source Serif Pro] {82}} \\vphantom {\\small R}",
      LS: "\\smash {\\large \\unicode [Source Serif Pro] {83}} \\vphantom {\\small S}",
      LT: "\\smash {\\large \\unicode [Source Serif Pro] {84}} \\vphantom {\\small T}",
      LU: "\\smash {\\large \\unicode [Source Serif Pro] {85}} \\vphantom {\\small U}",
      LV: "\\smash {\\large \\unicode [Source Serif Pro] {86}} \\vphantom {\\small V}",
      LW: "\\smash {\\large \\unicode [Source Serif Pro] {87}} \\vphantom {\\small W}",
      LX: "\\smash {\\large \\unicode [Source Serif Pro] {88}} \\vphantom {\\small X}",
      LY: "\\smash {\\large \\unicode [Source Serif Pro] {89}} \\vphantom {\\small Y}",
      LZ: "\\smash {\\large \\unicode [Source Serif Pro] {90}} \\vphantom {\\small Z}",

      La: "\\smash {\\large \\unicode [Source Serif Pro] {97}} \\vphantom {\\small a}",
      Lb: "\\smash {\\large \\unicode [Source Serif Pro] {98}} \\vphantom {\\small b}",
      Lc: "\\smash {\\large \\unicode [Source Serif Pro] {99}} \\vphantom {\\small c}",
      Ld: "\\smash {\\large \\unicode [Source Serif Pro] {100}} \\vphantom {\\small d}",
      Le: "\\smash {\\large \\unicode [Source Serif Pro] {101}} \\vphantom {\\small e}",
      Lf: "\\smash {\\large \\unicode [Source Serif Pro] {102}} \\vphantom {\\small f}",
      Lg: "\\smash {\\large \\unicode [Source Serif Pro] {103}} \\vphantom {\\small g}",
      Lh: "\\smash {\\large \\unicode [Source Serif Pro] {104}} \\vphantom {\\small h}",
      Li: "\\smash {\\large \\unicode [Source Serif Pro] {105}} \\vphantom {\\small i}",
      Lj: "\\smash {\\large \\unicode [Source Serif Pro] {106}} \\vphantom {\\small j}",
      Lk: "\\smash {\\large \\unicode [Source Serif Pro] {107}} \\vphantom {\\small k}",
      Ll: "\\smash {\\large \\unicode [Source Serif Pro] {108}} \\vphantom {\\small l}",
      Lm: "\\smash {\\large \\unicode [Source Serif Pro] {109}} \\vphantom {\\small m}",
      Ln: "\\smash {\\large \\unicode [Source Serif Pro] {110}} \\vphantom {\\small n}",
      Lo: "\\smash {\\large \\unicode [Source Serif Pro] {111}} \\vphantom {\\small o}",
      Lp: "\\smash {\\large \\unicode [Source Serif Pro] {112}} \\vphantom {\\small p}",
      Lq: "\\smash {\\large \\unicode [Source Serif Pro] {113}} \\vphantom {\\small q}",
      Lr: "\\smash {\\large \\unicode [Source Serif Pro] {114}} \\vphantom {\\small r}",
      Ls: "\\smash {\\large \\unicode [Source Serif Pro] {115}} \\vphantom {\\small s}",
      Lt: "\\smash {\\large \\unicode [Source Serif Pro] {116}} \\vphantom {\\small t}",
      Lu: "\\smash {\\large \\unicode [Source Serif Pro] {117}} \\vphantom {\\small u}",
      Lv: "\\smash {\\large \\unicode [Source Serif Pro] {118}} \\vphantom {\\small v}",
      Lw: "\\smash {\\large \\unicode [Source Serif Pro] {119}} \\vphantom {\\small w}",
      Lx: "\\smash {\\large \\unicode [Source Serif Pro] {120}} \\vphantom {\\small x}",
      Ly: "\\smash {\\large \\unicode [Source Serif Pro] {121}} \\vphantom {\\small y}",
      Lz: "\\smash {\\large \\unicode [Source Serif Pro] {122}} \\vphantom {\\small z}",

      // T

      TA: "\\smash {\\large \\unicode [Source Serif Pro] {65}} \\vphantom {\\small A}",
      TB: "\\smash {\\large \\unicode [Source Serif Pro] {66}} \\vphantom {\\small B}",
      TC: "\\smash {\\large \\unicode [Source Serif Pro] {67}} \\vphantom {\\small C}",
      TD: "\\smash {\\large \\unicode [Source Serif Pro] {68}} \\vphantom {\\small D}",
      TE: "\\smash {\\large \\unicode [Source Serif Pro] {69}} \\vphantom {\\small E}",
      TF: "\\smash {\\large \\unicode [Source Serif Pro] {70}} \\vphantom {\\small F}",
      TG: "\\smash {\\large \\unicode [Source Serif Pro] {71}} \\vphantom {\\small G}",
      TH: "\\smash {\\large \\unicode [Source Serif Pro] {72}} \\vphantom {\\small H}",
      TI: "\\smash {\\large \\unicode [Source Serif Pro] {73}} \\vphantom {\\small I}",
      TJ: "\\smash {\\large \\unicode [Source Serif Pro] {74}} \\vphantom {\\small J}",
      TK: "\\smash {\\large \\unicode [Source Serif Pro] {75}} \\vphantom {\\small K}",
      TL: "\\smash {\\large \\unicode [Source Serif Pro] {76}} \\vphantom {\\small L}",
      TM: "\\smash {\\large \\unicode [Source Serif Pro] {77}} \\vphantom {\\small M}",
      TN: "\\smash {\\large \\unicode [Source Serif Pro] {78}} \\vphantom {\\small N}",
      TO: "\\smash {\\large \\unicode [Source Serif Pro] {79}} \\vphantom {\\small O}",
      TP: "\\smash {\\large \\unicode [Source Serif Pro] {80}} \\vphantom {\\small P}",
      TQ: "\\smash {\\large \\unicode [Source Serif Pro] {81}} \\vphantom {\\small Q}",
      TR: "\\smash {\\large \\unicode [Source Serif Pro] {82}} \\vphantom {\\small R}",
      TS: "\\smash {\\large \\unicode [Source Serif Pro] {83}} \\vphantom {\\small S}",
      TT: "\\smash {\\large \\unicode [Source Serif Pro] {84}} \\vphantom {\\small T}",
      TU: "\\smash {\\large \\unicode [Source Serif Pro] {85}} \\vphantom {\\small U}",
      TV: "\\smash {\\large \\unicode [Source Serif Pro] {86}} \\vphantom {\\small V}",
      TW: "\\smash {\\large \\unicode [Source Serif Pro] {87}} \\vphantom {\\small W}",
      TX: "\\smash {\\large \\unicode [Source Serif Pro] {88}} \\vphantom {\\small X}",
      TY: "\\smash {\\large \\unicode [Source Serif Pro] {89}} \\vphantom {\\small Y}",
      TZ: "\\smash {\\large \\unicode [Source Serif Pro] {90}} \\vphantom {\\small Z}",

      La: "\\smash {\\large \\unicode [Source Serif Pro] {97}} \\vphantom {\\small a}",
      Lb: "\\smash {\\large \\unicode [Source Serif Pro] {98}} \\vphantom {\\small b}",
      Lc: "\\smash {\\large \\unicode [Source Serif Pro] {99}} \\vphantom {\\small c}",
      Ld: "\\smash {\\large \\unicode [Source Serif Pro] {100}} \\vphantom {\\small d}",
      Le: "\\smash {\\large \\unicode [Source Serif Pro] {101}} \\vphantom {\\small e}",
      Lf: "\\smash {\\large \\unicode [Source Serif Pro] {102}} \\vphantom {\\small f}",
      Lg: "\\smash {\\large \\unicode [Source Serif Pro] {103}} \\vphantom {\\small g}",
      Lh: "\\smash {\\large \\unicode [Source Serif Pro] {104}} \\vphantom {\\small h}",
      Li: "\\smash {\\large \\unicode [Source Serif Pro] {105}} \\vphantom {\\small i}",
      Lj: "\\smash {\\large \\unicode [Source Serif Pro] {106}} \\vphantom {\\small j}",
      Lk: "\\smash {\\large \\unicode [Source Serif Pro] {107}} \\vphantom {\\small k}",
      Ll: "\\smash {\\large \\unicode [Source Serif Pro] {108}} \\vphantom {\\small l}",
      Lm: "\\smash {\\large \\unicode [Source Serif Pro] {109}} \\vphantom {\\small m}",
      Ln: "\\smash {\\large \\unicode [Source Serif Pro] {110}} \\vphantom {\\small n}",
      Lo: "\\smash {\\large \\unicode [Source Serif Pro] {111}} \\vphantom {\\small o}",
      Lp: "\\smash {\\large \\unicode [Source Serif Pro] {112}} \\vphantom {\\small p}",
      Lq: "\\smash {\\large \\unicode [Source Serif Pro] {113}} \\vphantom {\\small q}",
      Lr: "\\smash {\\large \\unicode [Source Serif Pro] {114}} \\vphantom {\\small r}",
      Ls: "\\smash {\\large \\unicode [Source Serif Pro] {115}} \\vphantom {\\small s}",
      Lt: "\\smash {\\large \\unicode [Source Serif Pro] {116}} \\vphantom {\\small t}",
      Lu: "\\smash {\\large \\unicode [Source Serif Pro] {117}} \\vphantom {\\small u}",
      Lv: "\\smash {\\large \\unicode [Source Serif Pro] {118}} \\vphantom {\\small v}",
      Lw: "\\smash {\\large \\unicode [Source Serif Pro] {119}} \\vphantom {\\small w}",
      Lx: "\\smash {\\large \\unicode [Source Serif Pro] {120}} \\vphantom {\\small x}",
      Ly: "\\smash {\\large \\unicode [Source Serif Pro] {121}} \\vphantom {\\small y}",
      Lz: "\\smash {\\large \\unicode [Source Serif Pro] {122}} \\vphantom {\\small z}",
      // G
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

      /* Group 3: D, I, S, U, O, B */
      DOD: ["\\smash {\\overset {\\raise {-2mu} {\\small \\cdot}} {#1}} \\vphantom {#1}", 1],
      DUD: ["\\smash {\\underset {\\raise {8mu} {\\small \\cdot}} {#1}} \\vphantom {#1}", 1],
      DOT: ["\\smash {\\overset {\\raise {-2mu} {\\small \\thicksim}} {#1}} \\vphantom {#1}", 1],
      DUT: ["\\smash {\\underset {\\raise {8mu} {\\small \\thicksim}} {#1}} \\vphantom {#1}", 1],

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
