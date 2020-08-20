---
layout: post
title: "Melancholia: Escape rules"
date: 2020-08-08
tags: "Fastidious files"
---

# Character blocks

| marks | ` `-' `
| symbols | `[]\;',./`
| numbers | `123456789`
| letters | `abc` ... `xyz`

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