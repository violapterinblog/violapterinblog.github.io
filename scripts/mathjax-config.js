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

  tex: {
    macros: {
      XX: "abcd",

      a: "+", <!--  add -->
      s: "-", <!--  subtract -->
      m: "\\cdot", <!--  multiply -->
      d: "/", <!--  divide -->
      e: "=", <!--  equal -->
      g: ">", <!--  greater -->
      l: "<", <!--  less -->
      c: ",", <!--  comma -->
      p: ".", <!--  period -->

      PCl: ":", <!--  colon -->
      PSm: ";", <!--  semicolon -->
      PEx: "!", <!--  colon -->
      PQs: "?", <!--  question -->

      PDC: "\\cdots",
      PDL: "\\ldots",
      PDV: "\\vdots",
      PDD: "\\ddots",

      RGE: "\\geq",
      RLE: "\\leq",
      RD: ":=", <!--  definition -->
      RS: "\\sim",
      RA: "\\approx",
      RV: "\\mid", <!--  vertical -->

<!--  letter-like symbols (L) -->
      LPt: "\\partial",
      LT: "\\intercal",

<!--  Greek (G) -->
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
      Gp: "\\pi",
      Gr: "\\rho",
      GS: "\\Sigma",
      Gs: "\\sigma",
      Gt: "\\tau",
      GU: "\\Upsilon",
      Gu: "\\upsilon",
      GF: "\\Phi",
      Gf: "\\varphi",
      GX: "\\Chi",
      Gx: "\\chi",
      GY: "\\Psi",
      Gy: "\\psi",
      GW: "\\Omega",
      Gw: "\\omega",

      SpXS: "",
      SpS: "",
      SpM: "",
      SpL: "",
      SpXL: "",



    },
  },


};
