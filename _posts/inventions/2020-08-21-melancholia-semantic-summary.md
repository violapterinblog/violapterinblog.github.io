---
layout: post
title: "Melancholia: Escape rules"
date: 2020-08-08
tags: "Fastidious files"
---

# Character blocks

| tick | ` ` `
| primary symbols | ` `~@#$%^&*_=+[{]}\|'"<>/`
| secondary symbols | `!()-;:,.?`
| numbers | `123456789`
| letters | `aAbBcC` ... `xXyYzZ`

# Scope types

| scope | literal blocks
| none | none
| `{` ... `}` | letters
| `{{` ... `}}` | secondary symbols, <br> numbers, letters
| `{{{` ... `}}}` | primary symbols, secondary symbols, <br> numbers, letters
| `/[` ... `/]`, `//[[` ... `//]]`, <br> `//[[` ... `//]]`, ... | everything
| `\[` ... `\]`, `\\[[` ... `\\]]`, <br> `\\[[` ... `\\]]`, ... | none

# Glossary

| ` ` ` | to escape
| `1` | sans-serif, italic
| `2` | serif
| `3` | serif, italic
| `4` | black sans-serif, blue
| `5` | black serif, blue
| `6` | monospace
| `7` | regular slab
| `8` | medium slab
| `9` | black slab
| `0` | sans-serif
| `-` | to form quantity name
| `=` | to assign

| `~` | to assert equality
| `!` | to do once or do while
| `@` | to apply style (with numbers)
| `#` | to start paragraph (with numbers)
| `$` | to start line (with numbers)
| `%` | to start table (with numbers)
| `^` | to traverse to previous sister node
| `&` | to form while clause
| `*` | to traverse to next sister node
| `(` | to start function scope
| `)` | to end function scope
| `_` | to add a block
| `+` | to traverse to mother or daughter node (with `^`, `*`)

| `[` | to start verbatim and comment scope
| `]` | to end verbatim and comment scope
| `\` | to help form verbatim scope
| `;` | to end function
| `'` | to select primary symbols
| `,` | to separate variables
| `.` | to use namespace
| `/` | to help form verbatim scope

| | `{` | to start general scope
| | `}` | to end general scope
| | `|` | to separate vertical bracketed box
| | `:` | to apply function, to assign
| | `"` | to select secondary symbols
| | `<` | to start a bracketed box 
| | `>` | to end a bracketed box
| | `?` | to form if clause


| | `[` | `(`
| | `]` | `)`
| | `\` | `-`
| | `;` | `;`
| | `'` | `’`
| | `,` | `,`
| | `.` | `.`
| | `/` | `?`
| | `-{` | `[`
| | `-}` | `]`
| | `-|` | `—`
| | `-:` | `:`
| | `-"` | `‘`
| | `-<` | `“`
| | `->` | `”`
| | `-?` | `!`


# Functional sequences (in order of precedence)

| | characters | verbal description
| | `-` | to escape characters
| | `=` | to call common tokens
| | `+` | to call rare tokens
| | `_` | to call tokens by mneumonic
| | ` ` ` | to make a space
| | ` ` ` | to make a space
| | `0`, ..., `9` | to control styles and colors
| | `0`, ..., `9` | to form boxes


# Styles

| | `0` | normal serif | source serif pro
| | `9` | italic serif | source serif pro italic
| | `8` | bold serif | source serif pro bold
| | `1` | normal sans-serif | source sans pro
| | `2` | italic sans-serif | source sans pro italic
| | `3` | bold sans-serif | source sans pro bold
| | `4` | monospace | source code pro
| | `7` | heading one | roboto slab black
| | `6` | heading two | roboto slab bold
| | `5` | heading three | roboto slab medium

# Boxes

| | | text paragraph |
| | | text line |
| | | quote paragraph |
| | | items |
| | | code line |
| | | block tabular box |
| | | inline tabular box |
| | | horizontal expression |
| | | vertical expression |
| | | matrix expression |

# Math

| | ~ | go back one edge |
| | ! | negative |
| | @ | addition |
| | # | holder |
| | $ | power |
| | % | division |
| | ^ | go to stem |
| | & | multiplication |
| | * | load one tree |
| | ( | start scope |
| | ) | end scope |
| | _ | start position zero |
| | + | map all subtrees |