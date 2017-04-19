if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['pascal'] = [
  [
    [
      /\b(?:And|Array|Asm|Case|Const|Constructor|Destructor|Div|Do|Downto|Else|Exports|File|For|Function|Goto|If|Implementation|In|Inherited|Inline|Interface|Label|Library|Mod|Nil|Not|Object|Of|Or|Packed|Procedure|Program|Record|Repeat|Set|Shl|Shr|String|Then|To|Type|Unit|Until|Uses|Var|While|With|Xor)\b/gi,
      'sh_keyword',
      -1
    ],
    [
      /\b(?:Begin|End;|End\.|End)\b/gi,
      'sh_cbracket',
      -1
    ],
    [
      /\b(?:True|False|Pi)\b/gi,
      'sh_predef_var',
      -1
    ],
    [
      /\b(?:Write|Writeln|Read|Readln|ReadKey|KeyPressed|Clrscr|Textcolor|Textbackground|Sound|Delay|Nosound|Windows|Highvideo|Lowvideo|Normvideo|Gotoxy|Deline|Clreol|Insline|Exit|Textmode|Randomize|Move|Halt|Abs|Arctan|Cos|Exp|Frac|Int|Ln|Sin|Sqr|Sqrt|Pred|Suuc|Odd|Chr|Ord|Round|Random|Upcase|Assign|Rewrite|Append|Close|Erase|Rename|Length|Copy|Insert|Delete|Initgraph|Closegraph|Setcolor|Outtext|Outtextxy|Rectangle|Line|Moveto|Lineto|Circle|Ellipse|Floodfill|Getfillpattern|Setfillpattern|Cleardevice|Settextstyle|Bar|Bar3d|Arc|Setbkcolor|Putpixel|Setfillstyle|Setlinestyle|Getmem|Getimage|Putimage|Getdate|Gettime|Findnext|Findfirst)\b/gi,
      'sh_predef_func',
      -1
    ],
    [
      /\(\*/g,
      'sh_comment',
      1
    ],
    [
      /\{/g,
      'sh_comment',
      2
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /"/g,
      'sh_string',
      3
    ],
    [
      /'/g,
      'sh_string',
      4
    ],
    [
      /\b(?:boolean|byte|char|integer|longint|word|string|array|maxint|real)\b/gi,
      'sh_type',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'sh_symbol',
      -1
    ],
    [
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,
      'sh_function',
      -1
    ]
  ],
  [
    [
      /\*\)/g,
      'sh_comment',
      -2
    ],
    [
      /\(\*/g,
      'sh_comment',
      1
    ]
  ],
  [
    [
      /\}/g,
      'sh_comment',
      -2
    ],
    [
      /\{/g,
      'sh_comment',
      2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_string',
      -2
    ]
  ]
];
