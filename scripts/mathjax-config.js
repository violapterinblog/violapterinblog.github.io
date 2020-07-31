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

  /* * * * * * * * * * * * * * * * * * * * * * * */
  /* * * * * * * * * * * * * * * * * * * * * * * */
  /* * * * * * * * * * * * * * * * * * * * * * * */

  /* Define LaTeX macros, which will be expanded before TeX
  is called. Beware that `\` has to be escaped in JS. */
  tex: {
    macros: {
      // Test




      /* * * * * * * * * * * * * * * * * * * * * * * */
      /* Group 1: N, L, T, G, C, A, R, P, E */

      // N

      LA: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0041}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LB: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0042}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LC: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0043}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LD: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0044}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LE: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0045}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LF: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0046}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LG: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0047}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LH: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0048}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LI: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0049}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LK: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x004B}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LL: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x004C}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LM: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x004D}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LN: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x004E}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LO: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x004F}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LP: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0050}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LR: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0052}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LS: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0053}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LT: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0054}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LU: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0055}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LV: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0056}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LW: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0057}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LX: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0058}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LY: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0059}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      LZ: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x005A}} \\phantom {\\rule[0mu]{0mu}{11mu}}",

      LQ: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0051}} \\phantom {\\rule[-2mu]{0mu}{13mu}}",

      LJ: "\\phantom {\\rule[-2mu]{1mu}{13mu}} \\smash {\\large \\unicode [Source Serif Pro] {x004A}} \\phantom {\\rule[-2mu]{0mu}{13mu}}",

      La: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0061}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lc: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0063}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Le: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0065}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Li: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0131}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lm: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x006D}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Ln: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x006E}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lo: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x006F}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lr: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0072}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Ls: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0073}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lu: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0075}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lv: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0076}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lw: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0077}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lx: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0078}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Lz: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x007A}} \\phantom {\\rule[0mu]{0mu}{8mu}}",

      Lb: "\\phantom {\\rule[0mu]{1mu}{12mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0062}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Ld: "\\phantom {\\rule[0mu]{1mu}{12mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0064}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Lf: "\\phantom {\\rule[0mu]{1mu}{12mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0066}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Lh: "\\phantom {\\rule[0mu]{1mu}{12mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0068}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Lk: "\\phantom {\\rule[0mu]{1mu}{12mu}} \\smash {\\large \\unicode [Source Serif Pro] {x006B}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Ll: "\\phantom {\\rule[0mu]{1mu}{12mu}} \\smash {\\large \\unicode [Source Serif Pro] {x006C}} \\phantom {\\rule[0mu]{0mu}{12mu}}",

      Lt: "\\phantom {\\rule[0mu]{1mu}{8mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0074}} \\phantom {\\rule[0mu]{0mu}{10mu}}",

      Lg: "\\phantom {\\rule[-3mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0067}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",
      Lp: "\\phantom {\\rule[-3mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0070}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",
      Lq: "\\phantom {\\rule[-3mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0071}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",

      Lj: "\\phantom {\\rule[-3mu]{2mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0237}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",
      Ly: "\\phantom {\\rule[-3mu]{2mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0079}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",

      // T
      TA: "\\smash {\\large \\unicode [Source Sans Pro] {x0041}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TB: "\\smash {\\large \\unicode [Source Sans Pro] {x0042}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TC: "\\smash {\\large \\unicode [Source Sans Pro] {x0043}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TD: "\\smash {\\large \\unicode [Source Sans Pro] {x0044}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TE: "\\smash {\\large \\unicode [Source Sans Pro] {x0045}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TF: "\\smash {\\large \\unicode [Source Sans Pro] {x0046}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TG: "\\smash {\\large \\unicode [Source Sans Pro] {x0047}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TH: "\\smash {\\large \\unicode [Source Sans Pro] {x0048}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TI: "\\smash {\\large \\unicode [Source Sans Pro] {x0049}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TK: "\\smash {\\large \\unicode [Source Sans Pro] {x004B}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TL: "\\smash {\\large \\unicode [Source Sans Pro] {x004C}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TM: "\\smash {\\large \\unicode [Source Sans Pro] {x004D}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TN: "\\smash {\\large \\unicode [Source Sans Pro] {x004E}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TO: "\\smash {\\large \\unicode [Source Sans Pro] {x004F}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TP: "\\smash {\\large \\unicode [Source Sans Pro] {x0050}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TR: "\\smash {\\large \\unicode [Source Sans Pro] {x0052}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TS: "\\smash {\\large \\unicode [Source Sans Pro] {x0053}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TT: "\\smash {\\large \\unicode [Source Sans Pro] {x0054}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TU: "\\smash {\\large \\unicode [Source Sans Pro] {x0055}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TV: "\\smash {\\large \\unicode [Source Sans Pro] {x0056}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TW: "\\smash {\\large \\unicode [Source Sans Pro] {x0057}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TX: "\\smash {\\large \\unicode [Source Sans Pro] {x0058}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TY: "\\smash {\\large \\unicode [Source Sans Pro] {x0059}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      TZ: "\\smash {\\large \\unicode [Source Sans Pro] {x005A}} \\phantom {\\rule[0mu]{0mu}{11mu}}",

      TQ: "\\smash {\\large \\unicode [Source Sans Pro] {x0051}} \\phantom {\\rule[-2mu]{0mu}{13mu}}",
      TJ: "\\smash {\\large \\unicode [Source Sans Pro] {x004A}} \\phantom {\\rule[-2mu]{0mu}{13mu}}",

      Ta: "\\smash {\\large \\unicode [Source Sans Pro] {x0061}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tc: "\\smash {\\large \\unicode [Source Sans Pro] {x0063}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Te: "\\smash {\\large \\unicode [Source Sans Pro] {x0065}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tm: "\\smash {\\large \\unicode [Source Sans Pro] {x006D}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tn: "\\smash {\\large \\unicode [Source Sans Pro] {x006E}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      To: "\\smash {\\large \\unicode [Source Sans Pro] {x006F}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tr: "\\smash {\\large \\unicode [Source Sans Pro] {x0072}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Ts: "\\smash {\\large \\unicode [Source Sans Pro] {x0073}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tu: "\\smash {\\large \\unicode [Source Sans Pro] {x0075}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tv: "\\smash {\\large \\unicode [Source Sans Pro] {x0076}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tw: "\\smash {\\large \\unicode [Source Sans Pro] {x0077}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tx: "\\smash {\\large \\unicode [Source Sans Pro] {x0078}} \\phantom {\\rule[0mu]{0mu}{8mu}}",
      Tz: "\\smash {\\large \\unicode [Source Sans Pro] {x007A}} \\phantom {\\rule[0mu]{0mu}{8mu}}",

      Tb: "\\smash {\\large \\unicode [Source Sans Pro] {x0062}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Td: "\\smash {\\large \\unicode [Source Sans Pro] {x0064}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Tf: "\\smash {\\large \\unicode [Source Sans Pro] {x0066}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Th: "\\smash {\\large \\unicode [Source Sans Pro] {x0068}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Ti: "\\smash {\\large \\unicode [Source Sans Pro] {x0069}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Tk: "\\smash {\\large \\unicode [Source Sans Pro] {x006B}} \\phantom {\\rule[0mu]{0mu}{12mu}}",
      Tl: "\\smash {\\large \\unicode [Source Sans Pro] {x006C}} \\phantom {\\rule[0mu]{0mu}{12mu}}",

      Tt: "\\smash {\\large \\unicode [Source Sans Pro] {x0074}} \\phantom {\\rule[0mu]{0mu}{10mu}}",

      Tg: "\\smash {\\large \\unicode [Source Sans Pro] {x0067}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",
      Tp: "\\smash {\\large \\unicode [Source Sans Pro] {x0070}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",
      Tq: "\\smash {\\large \\unicode [Source Sans Pro] {x0071}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",
      Ty: "\\smash {\\large \\unicode [Source Sans Pro] {x0079}} \\phantom {\\rule[-3mu]{0mu}{11mu}}",

      Tj: "\\smash {\\large \\unicode [Source Sans Pro] {x006A}} \\phantom {\\rule[-3mu]{0mu}{15mu}}",

      // G

      GG: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0393}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GD: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0394}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GQ: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x0398}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GL: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x039B}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GC: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x039E}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GP: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03A0}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GS: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03A3}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GU: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03A5}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GF: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03A6}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GY: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03A8}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      GW: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03A9}} \\phantom {\\rule[0mu]{0mu}{11mu}}",

      Ga: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B1}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gb: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B2}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gg: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B3}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gd: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B4}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gv: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B5}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gz: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B6}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gh: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B7}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gq: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B8}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gi: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03B9}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gk: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03BA}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gl: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03BB}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gm: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03BC}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gn: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03BD}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gc: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03BE}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gp: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C0}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gr: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C1}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gs: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C2}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gt: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C3}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gu: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C4}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gf: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C5}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gx: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C6}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gy: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C7}} \\phantom {\\rule[0mu]{0mu}{11mu}}",
      Gw: "\\phantom {\\rule[0mu]{1mu}{11mu}} \\smash {\\large \\unicode [Source Serif Pro] {x03C8}} \\phantom {\\rule[0mu]{0mu}{11mu}}",


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
