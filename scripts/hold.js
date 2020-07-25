




<!--


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

      SU: "\\.",
      SD: "\\:",
      ST: "\\;",
      SQ: "\\quad",


<!-- while-like -->
\define [1] {\WIU} {\int {#1}}
\define [2] {\WID} {\int {#1} \Ld #2}
\define [3] {\WIT} {\int _{#1} {#2} \Ld #3}
\define [4] {\WIQ} {\int _{#1} ^{#2} #3 \Ld #4}
\define [1] {\WSU} {\sum {#1}}
\define [2] {\WSD} {\sum _{#1} {#2}}
\define [3] {\WST} {\sum _{#1} ^{#2} {#3}}
\define [1] {\WPU} {\prod {#1}}
\define [2] {\WPD} {\prod _{#1} {#2}}
\define [3] {\WPT} {\prod _{#1} ^{#2} {#3}}

<!--  superscript, subscript -->
\define [2] {\X} {{#1} _{#2}}
\define [2] {\Y} {{#1} ^{#2}}
\define [3] {\Z} {{#1} _{#2} ^{#3}}
\define [2] {\U} {\underset {#2} {#1}}
\define [2] {\V} {\overset {#2} {#1}}




<!--
\define [1] {\Rm} {{\tf \rm #1}}
\define [1] {\Bf} {{\bf \rm #1}}
\define [1] {\It} {{\it \rm #1}}
\define [1] {\BfIt} {{\bi \rm #1}}

\define [1] {\Rd} {\sqrt {#1}} <!--  radical -->
\define [2] {\F} {\dfrac {#1} {#2}}

\define [1] {\BR} {\left( #1 \right)}
\define [1] {\BRXS} {( #1 )}
\define [1] {\BRS} {\big( #1 \big)}
\define [1] {\BRM} {\Big( #1 \Big)}
\define [1] {\BRL} {\bigg( #1 \bigg)}
\define [1] {\BRXL} {\Bigg( #1 \Bigg)}
\define [1] {\BS} {\left[ #1 \right]}
\define [1] {\BSXS} {[ #1 ]}
\define [1] {\BSS} {\big[ #1 \big]}
\define [1] {\BSM} {\Big[ #1 \Big]}
\define [1] {\BSL} {\bigg[ #1 \bigg]}
\define [1] {\BSXL} {\Bigg[ #1 \Bigg]}
\define [1] {\BC} {\left{ #1 \right}}
\define [1] {\BCXS} {{ #1 }}
\define [1] {\BCS} {\big{ #1 \big}}
\define [1] {\BCM} {\Big{ #1 \Big}}
\define [1] {\BCL} {\bigg{ #1 \bigg}}
\define [1] {\BCXL} {\Bigg{ #1 \Bigg}}

<!--  integration -->
\define [2] {\ItD} {\int #1 \Dif #2}
\define [3] {\ItT} {\int _{#1} #2 \Dif #3}
\define [4] {\ItQ} {\int _{#1} ^{#2} #3 \Dif #4}

<!--  summation -->
\define [1] {\SmU} {\sum #1}
\define [2] {\SmD} {\sum _{#1} #2}
\define [3] {\SmT} {\sum _{#1} ^{#2} #3}

<!--  product -->
\define [1] {\PdU} {\prod #1}
\define [2] {\PdD} {\prod _{#1} #2}
\define [3] {\PdT} {\prod _{#1} ^{#2} #3}

<!--  superscript, subscript -->
\define [2] {\I} {{#1} _{#2}} <!--  inferior -->
\define [2] {\S} {{#1} ^{#2}} <!--  superior -->
\define [3] {\IS} {{#1} _{#2} ^{#3}}
<!-- \define [2] {\IC} {{#1} _{#2}} % center -->
\define [2] {\SC} {\overset {#2} {#1}}
<!-- \define [2] {\ISC} {{#1} ^{#2}} -->
\define [2] {\ICRm} {\underset {#2} {\Rm {#1}}}
<!-- \define [2] {\SCRm} {{#1} ^{#2}} -->
<!-- \define [2] {\ISCRm} {{#1} ^{#2}} -->
<!-- \define [2] {\IL} {{#1} _{#2}} -->
<!-- \define [2] {\SL} {{#1} ^{#2}} % left -->
<!-- \define [2] {\IL} {{#1} ^{#2}} -->
<!-- \define [2] {\ISL} {{#1} ^{#2}} -->

<!--  diacritic above (D) -->
\define [1] {\DA} {\acute {#1}}
\define [1] {\DB} {\breve {#1}}
\define [1] {\DC} {\check {#1}}
\define [1] {\DD} {\dot {#1}}
\define [1] {\DDD} {\ddot {#1}}
\define [1] {\DG} {\grave {#1}}
\define [1] {\DH} {\hat {#1}}
\define [1] {\DL} {\bar {#1}} <!--  line -->
\define [1] {\DLL} {\bar {\bar {#1}}}
\define [1] {\DT} {\tilde {#1}}

<!--  diacritic under (U) -->
\define [1] {\UL} {\underline {#1}}
\define [1] {\ULL} {\underline {\underline {#1}}}

-->


