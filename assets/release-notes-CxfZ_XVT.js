import{n as e,r as t,t as n}from"./main-wtXSXwOV.js";function r(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var i=r();function a(e){i=e}var o={exec:()=>null};function s(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function c(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(u.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var l=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),u={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:s(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:s(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:s(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:s(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:s(e=>RegExp(`^ {0,${e}}(?:</?(?:${ae})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:s(e=>RegExp(`^ {0,${e}}>`))},d=/^(?:[ \t]*(?:\n|$))+/,f=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,p=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,m=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,h=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,g=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ee=c(_).replace(/bull/g,g).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),te=c(_).replace(/bull/g,g).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),v=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ne=/^[^\n]+/,re=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,y=c(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,re).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ie=c(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,g).getRegex(),ae=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,oe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,b=c(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,oe).replace(`tag`,ae).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),se=e=>c(v).replace(`hr`,m).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,ae).getRegex(),ce=se(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),le=se(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),ue={blockquote:c(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,le).getRegex(),code:f,def:y,fences:p,heading:h,hr:m,html:b,lheading:ee,list:ie,newline:d,paragraph:ce,table:o,text:ne},de=c(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,m).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,ae).getRegex(),fe={...ue,lheading:te,table:de,paragraph:c(v).replace(`hr`,m).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,de).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,ae).getRegex()},pe={...ue,html:c(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,oe).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:o,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:c(v).replace(`hr`,m).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ee).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,he=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ge=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,_e=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,x=/[\p{P}\p{S}]/u,ve=/[\s\p{P}\p{S}]/u,ye=/[^\s\p{P}\p{S}]/u,S=c(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,ve).getRegex(),be=/[\p{Pi}\p{Ps}"']/u,xe=/(?!~)[\p{P}\p{S}]/u,Se=/(?!~)[\s\p{P}\p{S}]/u,Ce=/(?:[^\s\p{P}\p{S}]|~)/u,we=c(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,l?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Te=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ee=c(Te,`u`).replace(/punct/g,x).getRegex(),De=c(Te,`u`).replace(/punct/g,xe).getRegex(),Oe=c(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,be).replace(/punct/g,x).getRegex(),C=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,ke=c(C,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,x).getRegex(),w=c(C,`gu`).replace(/notPunctSpace/g,Ce).replace(/punctSpace/g,Se).replace(/punct/g,xe).getRegex(),Ae=c(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,x).getRegex(),T=c(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,x).getRegex(),je=c(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,x).getRegex(),Me=c(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,x).getRegex(),E=c(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,x).getRegex(),Ne=c(/\\(punct)/,`gu`).replace(/punct/g,x).getRegex(),Pe=c(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,x).getRegex(),Fe=c(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ie=c(oe).replace(`(?:-->|$)`,`-->`).getRegex(),D=c(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ie).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),O=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,k=c(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,O).getRegex(),Le=c(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,k).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Re=c(/^!?\[(label)\]\[(ref)\]/).replace(`label`,k).replace(`ref`,re).getRegex(),ze=c(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,re).getRegex(),Be=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Ve=c(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,O).getRegex(),He=c(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,c(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Ve).replace(`ref`,Be).getRegex()).replace(`nolink`,c(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Be).getRegex()).getRegex(),Ue=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,We=c(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),Ge={_backpedal:o,anyPunctuation:Ne,anyPunctuationOutsideCode:Pe,autolink:Fe,blockSkip:we,br:ge,code:he,del:o,delLDelim:o,delRDelim:o,emStrongLDelim:Ee,emStrongRDelimAst:ke,emStrongRDelimUnd:T,escape:me,link:Le,nolink:ze,punctuation:S,reflink:Re,reflinkSearch:He,tag:D,text:_e,url:o},Ke={...Ge,emStrongLDelim:Oe,emStrongRDelimAst:Ae,emStrongRDelimUnd:je,link:c(/^!?\[(label)\]\((.*?)\)/).replace(`label`,k).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,k).getRegex()},qe={...Ge,emStrongRDelimAst:w,emStrongLDelim:De,delLDelim:Me,delRDelim:E,url:c(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,We).replace(`protocol`,Ue).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:c(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,Ue).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},Je={...qe,br:c(ge).replace(`{2,}`,`*`).getRegex(),text:c(qe.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},A={normal:ue,gfm:fe,pedantic:pe},j={normal:Ge,gfm:qe,breaks:Je,pedantic:Ke},Ye={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Xe=e=>Ye[e];function M(e,t){if(t){if(u.escapeTest.test(e))return e.replace(u.escapeReplace,Xe)}else if(u.escapeTestNoEncode.test(e))return e.replace(u.escapeReplaceNoEncode,Xe);return e}function Ze(e){return u.numericCharacterReference.test(e)?e.replace(u.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function Qe(e){try{e=encodeURI(e).replace(u.percentDecode,`%`)}catch{return null}return e}function $e(e,t){let n=e.replace(u.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(u.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(u.slashPipe,`|`);return n}function N(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function et(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&u.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function P(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function tt(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function nt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function rt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function it(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function at(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var ot=class{options;rules;lexer;constructor(e){this.options=e||i}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:et(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=it(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=N(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:N(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:N(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=N(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`||u?.type===`heading`||u?.type===`hr`||u?.type===`html`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`)}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,r=()=>n.length-e.length,i=t[1].trim(),a=i.length>1,o={type:`list`,raw:``,ordered:a,start:a?+i.slice(0,-1):``,loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:`[*+-]`);let s=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,a=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let l=r();e=e.substring(t[0].length);let u=t[2].split(`
`,1)[0],d=t[1].length,f=this.options.pedantic?nt(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>nt(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>nt(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;a+=`
`+p}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=et(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&tt(t[2],`()`)!==-1)return;let e=P(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:N(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=$e(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:N(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push($e(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:N(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&at(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=N(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=tt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),rt(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&at(e,n[1],r,this.rules))return;let i=t[P((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return rt(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:Ze(t[0]),escaped:e}}}},F=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||i,this.options.tokenizer=this.options.tokenizer||new ot,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:u,block:A.normal,inline:j.normal};this.options.pedantic?(t.block=A.pedantic,t.inline=j.pedantic):this.options.gfm&&(t.block=A.gfm,t.inline=this.options.breaks?j.breaks:j.gfm),this.tokenizer.rules=t}static get rules(){return{block:A,inline:j}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(u.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(u.tabCharGlobal,`    `).replace(u.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if((i=this.tokenizer.fences(e))||(i=this.tokenizer.heading(e))||(i=this.tokenizer.hr(e))||(i=this.tokenizer.blockquote(e))||(i=this.tokenizer.list(e))||(i=this.tokenizer.html(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if((i=this.tokenizer.table(e))||(i=this.tokenizer.lheading(e))){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length)}else if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,P(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,P(n.slice(r+1,-1))))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},st=class{options;parser;constructor(e){this.options=e||i}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(u.notSpaceStart)?.[0],i=e?e.replace(u.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+M(r)+`">`+(n?i:M(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:M(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${M(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?M(n,!0):this.parser.parseInline(r),o=Qe(e);if(o===null)return a;e=M(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+M(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Qe(e);if(i===null)return M(n);e=i;let a=`<img src="${M(e)}" alt="${M(n)}"`;return t&&(a+=` title="${M(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:M(e.text)}},ct=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},I=class e{options;renderer;textRenderer;constructor(e){this.options=e||i,this.options.renderer=this.options.renderer||new st,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ct}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},lt=class{options;block;constructor(e){this.options=e||i}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?F.lex:F.lexInline}provideParser(e=this.block){return e?I.parse:I.parseInline}};function L(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var R=new class{defaults=r();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=I;Renderer=st;TextRenderer=ct;Lexer=F;Tokenizer=ot;Hooks=lt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(L(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)L(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)L(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;L(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);L(n,this.walkTokens(i,t))}):e.tokens&&L(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new st(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new ot(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new lt;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=lt.passThroughHooks.has(n)?e=>{if(this.defaults.async&&lt.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&L(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return F.lex(e,t??this.defaults)}parser(e,t){return I.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?F.lex:F.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?I.parse:I.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?F.lex:F.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?I.parse:I.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+M(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function z(e,t){return R.parse(e,t)}z.options=z.setOptions=function(e){return R.setOptions(e),z.defaults=R.defaults,a(z.defaults),z},z.getDefaults=r,z.defaults=i;function ut(...e){return R.use(...e),z.defaults=R.defaults,a(z.defaults),z}z.use=ut,z.walkTokens=function(e,t){return R.walkTokens(e,t)},z.parseInline=R.parseInline,z.Parser=I,z.parser=I.parse,z.Renderer=st,z.TextRenderer=ct,z.Lexer=F,z.lexer=F.lex,z.Tokenizer=ot,z.Hooks=lt,z.parse=z,z.options,z.setOptions,z.walkTokens,z.parseInline,I.parse,F.lex;function dt(e,t){this.v=e,this.k=t}function ft(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function pt(e){if(Array.isArray(e))return e}function mt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ht(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(e,t){return pt(e)||mt(e,t)||_t(e,t)||ht()}function _t(e,t){if(e){if(typeof e==`string`)return ft(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ft(e,t):void 0}}function B(e){var t,n;function r(t,n){try{var a=e[t](n),o=a.value,s=o instanceof dt;Promise.resolve(s?o.v:o).then(function(n){if(s){var c=t===`return`&&o.k?t:`next`;if(!o.k||n.done)return r(c,n);n=e[c](n).value}i(!!a.done,n)},function(e){r(`throw`,e)})}catch(e){i(2,e)}}function i(e,i){e===2?t.reject(i):t.resolve({value:i,done:e}),(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,i){return new Promise(function(a,o){var s={key:e,arg:i,resolve:a,reject:o,next:null};n?n=n.next=s:(t=n=s,r(e,i))})},typeof e.return!=`function`&&(this.return=void 0)}B.prototype[typeof Symbol==`function`&&Symbol.asyncIterator||`@@asyncIterator`]=function(){return this},B.prototype.next=function(e){return this._invoke(`next`,e)},B.prototype.throw=function(e){return this._invoke(`throw`,e)},B.prototype.return=function(e){return this._invoke(`return`,e)};var vt=Object.entries,yt=Object.setPrototypeOf,bt=Object.isFrozen,xt=Object.getPrototypeOf,St=Object.getOwnPropertyDescriptor,V=Object.freeze,H=Object.seal,Ct=Object.create,wt=typeof Reflect<`u`&&Reflect,Tt=wt.apply,Et=wt.construct;V||=function(e){return e},H||=function(e){return e},Tt||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Et||=function(e){return new e(...[...arguments].slice(1))};var U=K(Array.prototype.forEach);Array.prototype.indexOf;var Dt=K(Array.prototype.lastIndexOf),Ot=K(Array.prototype.pop),kt=K(Array.prototype.push),At=K(Array.prototype.slice),jt=K(Array.prototype.splice),Mt=Array.isArray,Nt=Jt(Set),Pt=K(Set.prototype.add),Ft=K(Set.prototype.has),It=K(String.prototype.toLowerCase),Lt=K(String.prototype.toString),Rt=K(String.prototype.match),zt=K(String.prototype.replace),Bt=K(String.prototype.indexOf),Vt=K(String.prototype.trim),Ht=K(Number.prototype.toString),Ut=K(Boolean.prototype.toString),Wt=typeof BigInt>`u`?null:K(BigInt.prototype.toString),Gt=typeof Symbol>`u`?null:K(Symbol.prototype.toString),W=K(Object.prototype.hasOwnProperty),Kt=K(Object.prototype.toString),G=K(RegExp.prototype.test),qt=Jt(TypeError);function K(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Tt(e,t,n)}}function Jt(e){return function(){return Et(e,[...arguments])}}function q(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:It;if(yt&&yt(e,null),!Mt(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(bt(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Yt(e){for(let t=0;t<e.length;t++)W(e,t)||(e[t]=null);return e}function J(e){let t=Ct(null);for(let r of vt(e)){var n=gt(r,2);let i=n[0],a=n[1];W(e,i)&&(t[i]=Mt(a)?Yt(a):a&&typeof a==`object`&&a.constructor===Object?J(a):a)}return t}function Xt(e){switch(typeof e){case`string`:return e;case`number`:return Ht(e);case`boolean`:return Ut(e);case`bigint`:return Wt?Wt(e):`0`;case`symbol`:return Gt?Gt(e):`Symbol()`;case`undefined`:return Kt(e);case`function`:case`object`:{if(e===null)return Kt(e);let t=e,n=Y(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:Kt(e)}return Kt(e)}default:return Kt(e)}}function Y(e,t){for(;e!==null;){let n=St(e,t);if(n){if(n.get)return K(n.get);if(typeof n.value==`function`)return K(n.value)}e=xt(e)}function n(){return null}return n}function Zt(e,t){for(;e!==null;){let n=St(e,t);if(n)return n.get?K(n.get):null;e=xt(e)}return null}function Qt(e){try{return G(e,``),!0}catch{return!1}}var $t=V(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),en=V(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),tn=V([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),nn=V([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),rn=V(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),an=V([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),on=V([`#text`]),sn=V(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),cn=V(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),ln=V(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),un=V([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),dn=H(/{{[\w\W]*|^[\w\W]*}}/g),fn=H(/<%[\w\W]*|^[\w\W]*%>/g),pn=H(/\${[\w\W]*/g),mn=H(/^data-[\-\w.\u00B7-\uFFFF]+$/),hn=H(/^aria-[\-\w]+$/),gn=H(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_n=H(/^(?:\w+script|data):/i),vn=H(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yn=H(/^html$/i),bn=H(/^[a-z][.\w]*(-[.\w]+)+$/i),xn=H(/<[/\w!]/g),Sn=H(/<[/\w]/g),Cn=H(/<\/no(script|embed|frames)/i),wn=H(/\/>/i),X={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Tn=V(q({},[`style`,`script`,`xmp`,`iframe`,`noembed`,`noframes`,`plaintext`,`noscript`])),En=function(){return typeof window>`u`?null:window},Dn=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},On=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},kn=function(e,t,n,r){return W(e,t)&&Mt(e[t])?q(r.base?J(r.base):{},e[t],r.transform):n},An=function(e,t,n){let r=W(e,t)?e[t]:void 0;return r&&typeof r==`object`?J(r):n()};function jn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:En(),t=e=>jn(e);if(t.version=`3.4.17`,t.removed=[],!e||!e.document||e.document.nodeType!==X.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=Y(d,`cloneNode`),p=Y(d,`remove`),m=Y(d,`removeAttributeNode`),h=Y(d,`nextSibling`),g=Y(d,`childNodes`),_=Y(d,`parentNode`),ee=Y(d,`shadowRoot`),te=Y(d,`attributes`),v=o&&o.prototype?Y(o.prototype,`nodeType`):null,ne=o&&o.prototype?Y(o.prototype,`nodeName`):null,re=o&&o.prototype?Y(o.prototype,`ownerDocument`):null,y=function(e){return v?v(e):e.nodeType},ie=function(e){return ne?ne(e):e.nodeName},ae=Zt(d,`namespaceURI`),oe=function(e){return ae?ae(e):e.namespaceURI};if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let b,se=``,ce,le=!1,ue=0,de=function(){if(ue>0)throw qt(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},fe=function(e){de(),ue++;try{return b.createHTML(e)}finally{ue--}},pe=function(e){de(),ue++;try{return b.createScriptURL(e)}finally{ue--}},me=function(){return le||=(ce=Dn(u,i),!0),ce},he=n,ge=he.implementation,_e=he.createNodeIterator,x=he.createDocumentFragment,ve=he.getElementsByTagName,ye=r.importNode,S=On();t.isSupported=typeof vt==`function`&&typeof _==`function`&&ge&&ge.createHTMLDocument!==void 0;let be=dn,xe=fn,Se=pn,Ce=mn,we=hn,Te=_n,Ee=vn,De=bn,Oe=gn,C=null,ke=q({},[...$t,...en,...tn,...rn,...on]),w=null,Ae=q({},[...sn,...cn,...ln,...un]),T=Object.seal(Ct(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),je=null,Me=null,E=Object.seal(Ct(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Ne=!0,Pe=!0,Fe=!1,Ie=!0,D=!1,O=!0,k=!1,Le=!1,Re=null,ze=null,Be=!1,Ve=!1,He=!1,Ue=!1,We=!0,Ge=!1,Ke=`user-content-`,qe=!0,Je=!1,A=null,j={},Ye=null,Xe=q({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),M=null,Ze=q({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Qe=null,$e=q({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),N=`http://www.w3.org/1998/Math/MathML`,et=`http://www.w3.org/2000/svg`,P=`http://www.w3.org/1999/xhtml`,tt=P,nt=!1,rt=null,it=q({},[N,et,P],Lt),at=V([`mi`,`mo`,`mn`,`ms`,`mtext`]),ot=q({},at),F=V([`annotation-xml`]),st=q({},F),ct=q({},[`title`,`style`,`font`,`a`,`script`]),I=null,lt=[`application/xhtml+xml`,`text/html`],L=null,R=null,z=n.createElement(`form`),ut=function(e){return e instanceof RegExp||e instanceof Function},dt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(R&&R===e)return;(!e||typeof e!=`object`)&&(e={}),e=J(e),I=lt.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,L=I===`application/xhtml+xml`?Lt:It,C=kn(e,`ALLOWED_TAGS`,ke,{transform:L}),w=kn(e,`ALLOWED_ATTR`,Ae,{transform:L}),rt=kn(e,`ALLOWED_NAMESPACES`,it,{transform:Lt}),Qe=kn(e,`ADD_URI_SAFE_ATTR`,$e,{transform:L,base:$e}),M=kn(e,`ADD_DATA_URI_TAGS`,Ze,{transform:L,base:Ze}),Ye=kn(e,`FORBID_CONTENTS`,Xe,{transform:L}),je=kn(e,`FORBID_TAGS`,J({}),{transform:L}),Me=kn(e,`FORBID_ATTR`,J({}),{transform:L}),j=W(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?J(e.USE_PROFILES):e.USE_PROFILES:!1,Ne=e.ALLOW_ARIA_ATTR!==!1,Pe=e.ALLOW_DATA_ATTR!==!1,Fe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,D=e.SAFE_FOR_TEMPLATES||!1,O=e.SAFE_FOR_XML!==!1,k=e.WHOLE_DOCUMENT||!1,Ve=e.RETURN_DOM||!1,He=e.RETURN_DOM_FRAGMENT||!1,Ue=e.RETURN_TRUSTED_TYPE||!1,Be=e.FORCE_BODY||!1,We=e.SANITIZE_DOM!==!1,Ge=e.SANITIZE_NAMED_PROPS||!1,qe=e.KEEP_CONTENT!==!1,Je=e.IN_PLACE||!1,Oe=Qt(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:gn,tt=typeof e.NAMESPACE==`string`?e.NAMESPACE:P,ot=An(e,`MATHML_TEXT_INTEGRATION_POINTS`,()=>q({},at)),st=An(e,`HTML_INTEGRATION_POINTS`,()=>q({},F));let t=An(e,`CUSTOM_ELEMENT_HANDLING`,()=>Ct(null));if(T=Ct(null),W(t,`tagNameCheck`)&&ut(t.tagNameCheck)&&(T.tagNameCheck=t.tagNameCheck),W(t,`attributeNameCheck`)&&ut(t.attributeNameCheck)&&(T.attributeNameCheck=t.attributeNameCheck),W(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(T.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),H(T),D&&(Pe=!1),He&&(Ve=!0),j&&(C=q({},on),w=Ct(null),j.html===!0&&(q(C,$t),q(w,sn)),j.svg===!0&&(q(C,en),q(w,cn),q(w,un)),j.svgFilters===!0&&(q(C,tn),q(w,cn),q(w,un)),j.mathMl===!0&&(q(C,rn),q(w,ln),q(w,un))),E.tagCheck=null,E.attributeCheck=null,W(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?E.tagCheck=e.ADD_TAGS:Mt(e.ADD_TAGS)&&(C===ke&&(C=J(C)),q(C,e.ADD_TAGS,L))),W(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?E.attributeCheck=e.ADD_ATTR:Mt(e.ADD_ATTR)&&(w===Ae&&(w=J(w)),q(w,e.ADD_ATTR,L))),W(e,`ADD_FORBID_CONTENTS`)&&Mt(e.ADD_FORBID_CONTENTS)&&(Ye===Xe&&(Ye=J(Ye)),q(Ye,e.ADD_FORBID_CONTENTS,L)),qe&&(C[`#text`]=!0),k&&q(C,[`html`,`head`,`body`]),C.table&&(q(C,[`tbody`]),delete je.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw qt(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw qt(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=b;b=e.TRUSTED_TYPES_POLICY;try{se=fe(``)}catch(e){throw b=t,e}}else e.TRUSTED_TYPES_POLICY===null?(b=void 0,se=``):(b===void 0&&(b=me()),b&&typeof se==`string`&&(se=fe(``)));V&&V(e),R=e},ft=q({},[...en,...tn,...nn]),pt=q({},[...rn,...an]),mt=function(e,t,n){return t.namespaceURI===P?e===`svg`:t.namespaceURI===N?e===`svg`&&(n===`annotation-xml`||ot[n]):!!ft[e]},ht=function(e,t,n){return t.namespaceURI===P?e===`math`:t.namespaceURI===et?e===`math`&&st[n]:!!pt[e]},gt=function(e,t,n){return t.namespaceURI===et&&!st[n]||t.namespaceURI===N&&!ot[n]?!1:!pt[e]&&(ct[e]||!ft[e])},_t=function(e){let t=oe(e),n=It(ie(e)),r=_(e),i,a;return r&&y(r)===X.element?(i={namespaceURI:oe(r)},a=It(ie(r))):(i={namespaceURI:tt},a=`template`),rt[t]?t===et?mt(n,i,a):t===N?ht(n,i,a):t===P?gt(n,i,a):!!(I===`application/xhtml+xml`&&rt[t]):!1},B=function(e){kt(t.removed,{element:e});try{_(e).removeChild(e)}catch{if(p(e),!_(e))throw qt(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},yt=function(e,t,n){try{m(e,t)}catch{try{e.removeAttribute(n)}catch{}}},bt=function(e){Tt(e);let t=g(e);t&&U(At(t),e=>{try{p(e)}catch{}});let n=y(e)===X.element?te(e):null;if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;typeof i==`string`&&yt(e,r,i)}},xt=function(e,n,r){if(!r)try{r=n.getAttributeNode(e)}catch{r=null}kt(t.removed,{attribute:r||null,from:n});try{r?m(n,r):n.removeAttribute(e)}catch{try{n.removeAttribute(e)}catch{}}if(e===`is`){if(Ve||He)try{B(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},St=function(e){let t=te(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;typeof i!=`string`||w[L(i)]||yt(e,r,i)}},wt=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=[e];for(;r.length>0;){let e=r.pop();if(t(e)===!1)continue;if(n&&y(e)===X.element){let t=ee(e);Q(t)&&r.push(t)}let i=g(e);if(i)for(let e=i.length-1;e>=0;--e)r.push(i[e])}},Tt=function(e){wt(e,e=>{y(e)===X.element&&St(e)})},Et=function(e){let t=[];return wt(e,e=>{t.push(e)},!0),t},Ht=function(e,t){let n=Nt();U(Et(e),e=>{y(e)===X.element&&Pt(n,e)}),U(t,e=>{y(e)===X.element&&!Ft(n,e)&&St(e)})},Ut=function(e,n){let r=!1;return U(t.removed,t=>{t.element&&(r||=t.element===e,Tt(t.element))}),Ht(e,n),r},Wt=function(e,t){let n=A,r=null,i=()=>(r||(r=Nt(),U(t,e=>{Pt(r,e)})),r);for(let t=0;;t++){let r=Et(e),a=[e],o=!1;if(U(r,e=>{y(e)===X.documentFragment?kt(a,e):!o&&!Ft(n,e)&&(o=Ft(i(),e))}),!o)return;if(t>=8)throw qt(`the tree kept changing during in-place sanitization; refusing to return it`);U(a,(t,n)=>{Gt(t,n>0,e,i())})}},Gt=function(e,t,n,r){let i=Mn(e),a;for(;a=i.nextNode();)Ft(r,a)&&!Ft(A,a)&&(t&&$(S.uponSanitizeShadowNode,a,null),Hn(a,n),Yn(a,n),Q(a.content)&&Xn(a.content))},Kt=function(e){A&&Pt(A,e)},K=function(e,t){return O?e===`patchsrc`||e===`for`&&t!==`label`&&t!==`output`:!1},Jt=function(e){O&&wt(e,e=>{let t=y(e);if(t===X.processingInstruction||t===X.comment&&G(Sn,e.data)){try{p(e)}catch{}return!1}if(t===X.element){let t=e,n=L(ie(e));try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&K(`for`,n)&&t.removeAttribute(`for`)}catch{}}return!0})},Yt=function(e){let t=null,r=null;if(Be)e=`<remove></remove>`+e;else{let t=Rt(e,/^[\r\n\t ]+/);r=t&&t[0]}I===`application/xhtml+xml`&&tt===P&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=b?fe(e):e;if(tt===P)try{t=new l().parseFromString(i,I)}catch{}if(!t||!t.documentElement){t=ge.createDocument(tt,`template`,null);try{t.documentElement.innerHTML=nt?se:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),tt===P?ve.call(t,k?`html`:`body`)[0]:k?t.documentElement:a},Mn=function(e){let t=re?re(e):e.ownerDocument;return _e.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Z=function(e){return e=zt(e,be,` `),e=zt(e,xe,` `),e=zt(e,Se,` `),e},Nn=function(e){Pn(e);let t=e.querySelectorAll?.call(e,`template`);t&&U(t,e=>{Q(e.content)&&Nn(e.content)})},Pn=function(e){e.normalize();let t=re?re(e):e.ownerDocument,n=_e.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=Z(r.data),r=n.nextNode()},Fn=function(e){let t=ne?ne(e):null;return typeof t!=`string`||L(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==te(e)||typeof e.removeAttribute!=`function`||typeof e.removeAttributeNode!=`function`||typeof e.getAttributeNode!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==v(e)||e.childNodes!==g(e)},Q=function(e){if(!v||typeof e!=`object`||!e)return!1;try{return v(e)===X.documentFragment}catch{return!1}},In=function(e){if(!v||typeof e!=`object`||!e)return!1;try{return typeof v(e)==`number`}catch{return!1}};function $(e,n,r){e.length!==0&&U(e,e=>{e.call(t,n,r,R)})}let Ln=function(e,t){return!!(O&&e.hasChildNodes()&&!In(e.firstElementChild)&&G(xn,e.textContent)&&G(xn,e.innerHTML)||O&&Tn[t]&&y(e)===X.element&&oe(e)===P&&(In(e.firstElementChild)||typeof e.textContent==`string`&&G(xn,e.textContent))||e.nodeType===X.processingInstruction||O&&e.nodeType===X.comment&&G(Sn,e.data))},Rn=function(e,t){return e instanceof RegExp?G(e,t):e instanceof Function&&!!e(t,...[...arguments].slice(2))},zn=function(e,t,n){if(!je[t]&&Gn(t)&&Rn(T.tagNameCheck,t))return!1;if(qe&&!Ye[t]&&!Ye[It(t)]){let t=_(e),r=g(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,h(e))}}}return B(e),!0},Bn=function(e,t,n,r){return e.length===0?t:t===n||t===r?J(t):t},Vn=function(e,t){return e===t||_(e)!==null?!1:(Je&&Tt(e),!0)},Hn=function(e,n){if(Kt(e),$(S.beforeSanitizeElements,e,null),Vn(e,n))return!0;if(Fn(e))return B(e),!0;let r=L(ie(e));if(C=Bn(S.uponSanitizeElement,C,ke,Re),$(S.uponSanitizeElement,e,{tagName:r,allowedTags:C}),Vn(e,n))return!0;if(Ln(e,r))return B(e),!0;if(je[r]||!(E.tagCheck instanceof Function&&E.tagCheck(r))&&!C[r]){let t=zn(e,r,n);return t===!1&&($(S.afterSanitizeElements,e,null),Vn(e,n))?!0:t}if(y(e)===X.element&&!_t(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&G(Cn,e.innerHTML))return B(e),!0;if(D&&e.nodeType===X.text){let n=Z(e.textContent);e.textContent!==n&&(kt(t.removed,{element:e.cloneNode()}),e.textContent=n)}return $(S.afterSanitizeElements,e,null),Vn(e,n)},Un=function(e,t,r){if(Me[t]||K(t,e)||We&&(t===`id`||t===`name`)&&(r in n||r in z))return!1;let i=w[t]||E.attributeCheck instanceof Function&&E.attributeCheck(t,e);return Pe&&G(Ce,t)||Ne&&G(we,t)?!0:i?Qe[t]||G(Oe,zt(r,Ee,``))||(t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Bt(r,`data:`)===0&&M[e]||Fe&&!G(Te,zt(r,Ee,``))?!0:!r:Gn(e)&&Rn(T.tagNameCheck,e)&&Rn(T.attributeNameCheck,t,e)||t===`is`&&T.allowCustomizedBuiltInElements&&Rn(T.tagNameCheck,r)},Wn=q({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Gn=function(e){return!Wn[It(e)]&&G(De,e)},Kn=function(e,t,n,r){if(b&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return fe(r);case`TrustedScriptURL`:return pe(r)}return r},qn=function(e,t,n,r){try{return n?e.setAttributeNS(n,t,r):e.setAttribute(t,r),!Fn(e)||(B(e),!1)}catch{return xt(t,e),!1}},Jn=function(e,t){return O&&G(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,t)?!0:It(e)===`attributename`&&Rt(t,`href`)!==null},Yn=function(e,n){if($(S.beforeSanitizeAttributes,e,null),Vn(e,n))return;let r=e.attributes;if(!r||Fn(e))return;w=Bn(S.uponSanitizeAttribute,w,Ae,ze);let i={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:w,forceKeepAttr:void 0},a=r.length,o=L(e.nodeName);for(;a--;){let n=r[a],s=n.name,c=n.namespaceURI,l=n.value,u=L(s),d=l,f=s===`value`?d:Vt(d),p=!1;i.attrName=u,i.attrValue=f,i.keepAttr=!0,i.forceKeepAttr=void 0,$(S.uponSanitizeAttribute,e,i),f=i.attrValue,Ge&&(u===`id`||u===`name`)&&Bt(f,Ke)!==0&&(xt(s,e,n),f=Ke+f,p=!0),Jn(s,f)?xt(s,e,n):i.forceKeepAttr||(i.keepAttr?!Ie&&G(wn,f)?xt(s,e,n):(D&&(f=Z(f)),Un(o,u,f)?(f=Kn(o,u,c,f),f!==d&&qn(e,s,c,f)&&p&&Ot(t.removed)):xt(s,e,n)):xt(s,e,n))}$(S.afterSanitizeAttributes,e,null),Vn(e,n)},Xn=function(e){let t=null,n=Mn(e);for($(S.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if($(S.uponSanitizeShadowNode,t,null),Hn(t,e),Yn(t,e),Q(t.content)&&Xn(t.content),y(t)===X.element){let e=ee(t);Q(e)&&(Zn(e),Xn(e))}D&&Pn(e),$(S.afterSanitizeShadowDOM,e,null)},Zn=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){Xn(e.shadow);continue}let n=e.node,r=y(n)===X.element,i=g(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=ne?ne(n):null;if(typeof e==`string`&&L(e)===`template`){let e=n.content;Q(e)&&t.push({node:e,shadow:null})}}if(r){let e=ee(n);Q(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(nt=!e,nt&&(e=`<!-->`),typeof e!=`string`&&!In(e)&&(e=Xt(e),typeof e!=`string`))throw qt(`dirty is not a string, aborting`);if(!t.isSupported)return e;Le?(C=Re,w=ze):dt(n),(S.uponSanitizeElement.length>0||S.uponSanitizeAttribute.length>0)&&(C=J(C)),S.uponSanitizeAttribute.length>0&&(w=J(w)),t.removed=[];let c=Je&&typeof e!=`string`&&In(e),l=[],u=A;if(c){Jt(e);let t=ie(e);if(typeof t==`string`){let n=L(t);if(!C[n]||je[n])throw bt(e),qt(`root node is forbidden and cannot be sanitized in-place`)}if(Fn(e))throw bt(e),qt(`root node is clobbered and cannot be sanitized in-place`);l=Et(e),A=Nt()}else if(In(e))i=Yt(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===X.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),Zn(i);else{if(!Ve&&!D&&!k&&e.indexOf(`<`)===-1)return b&&Ue?fe(e):e;if(i=Yt(e),!i)return Ve?null:Ue?se:``}i&&Be&&B(i.firstChild);let d=c?e:i;try{c&&Zn(e);let t=Mn(d);for(;o=t.nextNode();)Hn(o,d),Yn(o,d),Q(o.content)&&Xn(o.content);c&&Wt(e,l)}catch(t){throw c&&(bt(e),Ut(e,l)),t}finally{A=u}if(c){if(Ut(e,l))throw qt(`a node selected for removal could not be safely returned; refusing to sanitize in place`);return D&&Nn(e),e}if(Ve){if(D&&Nn(i),He)for(s=x.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(w.shadowroot||w.shadowrootmode)&&(s=ye.call(r,s,!0)),s}let f=k?i.outerHTML:i.innerHTML;return k&&C[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&G(yn,i.ownerDocument.doctype.name)&&(f=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+f),D&&(f=Z(f)),b&&Ue?fe(f):f},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};dt(e),Le=!0,Re=C,ze=w},t.clearConfig=function(){R=null,Le=!1,Re=null,ze=null,b=ce,se=``},t.isValidAttribute=function(e,t,n){R||dt({});let r=L(e),i=L(t);return typeof n==`string`&&(Jn(t,n)||!Ie&&G(wn,n))?!1:Un(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&W(S,e)&&kt(S[e],t)},t.removeHook=function(e,t){if(W(S,e)){if(t!==void 0){let n=Dt(S[e],t);return n===-1?void 0:jt(S[e],n,1)[0]}return Ot(S[e])}},t.removeHooks=function(e){W(S,e)&&(S[e]=[])},t.removeAllHooks=function(){S=On()},t}var Mn=jn(),Z={syncedAt:`2026-10-19T07:46:55.116Z`,repositoryUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser`,notesRevision:`245aaccf06233251450f587934eebbed145dbf10`,releases:[{id:397603432,tag:`1.0.8`,name:`ヤハギ v1.0.8`,publishedAt:`2026-09-27T10:41:48Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.8`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.8/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.8/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.8/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.8/README.ko.md)

本次更新是 **今年最后一个大型版本更新**。目前 Yahagi 的主要功能已基本开发完成，后续开发将逐步转向 **维护、优化与问题修复**，因此未来版本的更新频率预计也会有所降低。

相较 v1.0.7，本次更新重点加入了 **海域与敌舰资料查询、舰娘经验规划、记录备份与恢复、游戏资源完整缓存，以及针对大尺寸设备优化的 HD 布局**。同时也继续改善舰队信息展示、游戏浏览操作及日常状态提醒等功能。

本版本支持从 **v1.0.7 及此前发布的 v1.0.8 Beta 版本直接覆盖升级**。安装前无需卸载旧版本，且请勿主动卸载，以免造成应用内数据丢失。

**并且感谢 Github ID @Kutinana 同志做了个IOS1.08移植版本，但是该版本由第三方自行移植和制作。**

## 一、新增功能与主要改进

### 1. 海域查询与敌舰资料

工具箱新增「海域查询」功能，可选择常规海域，查看海域路线图及各节点的相关资料。

- 可查看节点类型、敌方编成、阵型、经验值及制空相关数据，方便出击前快速确认。
- 点击敌舰后，可进一步查看敌舰属性、装备及搭载等详细资料。
- 海域与敌舰资料支持在应用内独立检查并更新。当游戏资料发生变化时，无需等待 Yahagi 发布新版本即可获取最新数据。

### 2. 舰娘经验计算与养成追踪

工具箱新增「经验计算」功能。选择舰娘、当前等级及目标等级后，可根据计划使用的出击路线，估算每轮获得经验及达到目标等级所需的出击次数。

- 支持添加多个战斗节点，并分别设置胜利评价、旗舰及 MVP 条件。
- 可直接使用海域资料中的经验估算值，也可手动输入经验，适用于演习或资料暂不完整的节点。
- 支持将养成目标加入追踪，方便后续持续查看舰娘的升级进度。

### 3. 航海日志与编成记录备份

设置中新增「记录备份与恢复」功能，主要用于保存 **当前账号的航海日志与编成记录**。

- 可选择设备上的文档文件夹启用后台同步，也可随时手动执行同步。
- 支持将备份文件保存至本机，或通过其他应用进行分享。
- 更换设备后，可通过导入备份文件恢复相关记录。
- 执行恢复前，应用会显示此次恢复涉及的数据范围，并要求再次确认，避免误操作。

### 4. HD布局与首页自定义

新增针对平板、折叠屏及其他大尺寸设备优化的 **HD 布局**，让游戏画面与舰队、任务、远征、修理等信息能够在大屏设备上更加清晰地并排展示。**8寸以下设备请不要尝试。**

首页同时加入自定义编辑功能，可自由调整各模块的排列顺序、隐藏暂时不需要的卡片，并支持一键恢复默认布局。

舰队简报也增加了更多显示自定义选项，可调整信息项目、舰队名称及舰种标签等内容的显示方式，让紧凑屏幕与大屏设备都能根据使用习惯进行调整。

### 5. 游戏资源完整缓存

在原有「游玩过程中按需缓存」机制的基础上，新增「本地缓存」模式，可提前下载游戏基础资源至设备。

- 缓存下载过程中仍可正常进行游戏。
- 可在设置中查看当前缓存状态，并暂停或继续下载。
- 支持检查缓存完整性及清理本地缓存。
- 原有临时缓存模式仍然保留，可继续按需使用。

### 6. 资源栏与游戏操作细节

- 顶部资源栏新增 **家具币** 显示，并可选择是否将家具箱折算后计入预览数值。
- 资源胶囊的显示项目与排列顺序可进一步自定义。
- 新增游戏框架快捷刷新入口，在遇到游戏画面异常时，可更方便地重新加载游戏框架。
- 改进全屏模式的退出操作。

### 7. 支持鼠标操作

Yahagi 现已支持使用外接鼠标进行操作，并支持通过 **鼠标滚轮滚动页面**，进一步改善平板、桌面模式及大屏设备上的操作体验。

如连接鼠标后出现滚轮无法正常使用、页面无法滚动等情况，可前往 **设置** 中开启「鼠标兼容设置」，以改善部分设备或鼠标的兼容性。

## 二、修复与体验优化

- **游戏画面与缓存：** 优化资源下载、缓存校验及异常恢复机制；改善游戏画面缩放、窗口尺寸变化以及全屏切换时的显示稳定性。
- **任务与通知：** 完善任务进度计算与完成反馈，减少任务状态更新不及时的问题；同时调整部分通知的触发时机与显示内容。
- **舰队与修理：** 改进舰队状态展示、泊地修理倒计时、入渠状态及修理完成提醒的刷新准确性。
- **页面适配：** 优化编成图、经验计算、舰队卡片及设置页面在窄屏与大屏设备上的布局，修复部分文字溢出、内容遮挡及操作区域不便点击等问题。
- **其他修复：** 持续修正部分账号切换后的数据展示异常、战斗信息显示问题，并进一步优化界面性能与运行稳定性。

## 三、使用提示

- 海域经验、敌方编成及相关资料可能会随着游戏内容更新而发生变化，查询结果请以游戏内实际情况为准。可在设置中随时检查海域资料更新。
- 当前「记录备份与恢复」功能主要面向 **航海日志与编成记录**，并非完整的应用数据备份。
- 如准备更换设备、卸载应用或清理应用数据，建议提前导出备份文件，并确认备份文件已经成功保存。

感谢各位提督一直以来的反馈与支持！

随着主要功能逐渐完善，Yahagi 接下来会将更多精力放在稳定性、兼容性与使用体验的持续改善上。
`,notes:{"zh-CN":{body:`本次更新是 **今年最后一个大型版本更新**。目前 Yahagi 的主要功能已基本开发完成，后续开发将逐步转向 **维护、优化与问题修复**，因此未来版本的更新频率预计也会有所降低。

相较 v1.0.7，本次更新重点加入了 **海域与敌舰资料查询、舰娘经验规划、记录备份与恢复、游戏资源完整缓存，以及针对大尺寸设备优化的 HD 布局**。同时也继续改善舰队信息展示、游戏浏览操作及日常状态提醒等功能。

本版本支持从 **v1.0.7 及此前发布的 v1.0.8 Beta 版本直接覆盖升级**。安装前无需卸载旧版本，且请勿主动卸载，以免造成应用内数据丢失。

**并且感谢 Github ID @Kutinana 同志做了个IOS1.08移植版本，但是该版本由第三方自行移植和制作。**

## 一、新增功能与主要改进

### 1. 海域查询与敌舰资料

工具箱新增「海域查询」功能，可选择常规海域，查看海域路线图及各节点的相关资料。

- 可查看节点类型、敌方编成、阵型、经验值及制空相关数据，方便出击前快速确认。
- 点击敌舰后，可进一步查看敌舰属性、装备及搭载等详细资料。
- 海域与敌舰资料支持在应用内独立检查并更新。当游戏资料发生变化时，无需等待 Yahagi 发布新版本即可获取最新数据。

### 2. 舰娘经验计算与养成追踪

工具箱新增「经验计算」功能。选择舰娘、当前等级及目标等级后，可根据计划使用的出击路线，估算每轮获得经验及达到目标等级所需的出击次数。

- 支持添加多个战斗节点，并分别设置胜利评价、旗舰及 MVP 条件。
- 可直接使用海域资料中的经验估算值，也可手动输入经验，适用于演习或资料暂不完整的节点。
- 支持将养成目标加入追踪，方便后续持续查看舰娘的升级进度。

### 3. 航海日志与编成记录备份

设置中新增「记录备份与恢复」功能，主要用于保存 **当前账号的航海日志与编成记录**。

- 可选择设备上的文档文件夹启用后台同步，也可随时手动执行同步。
- 支持将备份文件保存至本机，或通过其他应用进行分享。
- 更换设备后，可通过导入备份文件恢复相关记录。
- 执行恢复前，应用会显示此次恢复涉及的数据范围，并要求再次确认，避免误操作。

### 4. HD布局与首页自定义

新增针对平板、折叠屏及其他大尺寸设备优化的 **HD 布局**，让游戏画面与舰队、任务、远征、修理等信息能够在大屏设备上更加清晰地并排展示。**8寸以下设备请不要尝试。**

首页同时加入自定义编辑功能，可自由调整各模块的排列顺序、隐藏暂时不需要的卡片，并支持一键恢复默认布局。

舰队简报也增加了更多显示自定义选项，可调整信息项目、舰队名称及舰种标签等内容的显示方式，让紧凑屏幕与大屏设备都能根据使用习惯进行调整。

### 5. 游戏资源完整缓存

在原有「游玩过程中按需缓存」机制的基础上，新增「本地缓存」模式，可提前下载游戏基础资源至设备。

- 缓存下载过程中仍可正常进行游戏。
- 可在设置中查看当前缓存状态，并暂停或继续下载。
- 支持检查缓存完整性及清理本地缓存。
- 原有临时缓存模式仍然保留，可继续按需使用。

### 6. 资源栏与游戏操作细节

- 顶部资源栏新增 **家具币** 显示，并可选择是否将家具箱折算后计入预览数值。
- 资源胶囊的显示项目与排列顺序可进一步自定义。
- 新增游戏框架快捷刷新入口，在遇到游戏画面异常时，可更方便地重新加载游戏框架。
- 改进全屏模式的退出操作。

### 7. 支持鼠标操作

Yahagi 现已支持使用外接鼠标进行操作，并支持通过 **鼠标滚轮滚动页面**，进一步改善平板、桌面模式及大屏设备上的操作体验。

如连接鼠标后出现滚轮无法正常使用、页面无法滚动等情况，可前往 **设置** 中开启「鼠标兼容设置」，以改善部分设备或鼠标的兼容性。

## 二、修复与体验优化

- **游戏画面与缓存：** 优化资源下载、缓存校验及异常恢复机制；改善游戏画面缩放、窗口尺寸变化以及全屏切换时的显示稳定性。
- **任务与通知：** 完善任务进度计算与完成反馈，减少任务状态更新不及时的问题；同时调整部分通知的触发时机与显示内容。
- **舰队与修理：** 改进舰队状态展示、泊地修理倒计时、入渠状态及修理完成提醒的刷新准确性。
- **页面适配：** 优化编成图、经验计算、舰队卡片及设置页面在窄屏与大屏设备上的布局，修复部分文字溢出、内容遮挡及操作区域不便点击等问题。
- **其他修复：** 持续修正部分账号切换后的数据展示异常、战斗信息显示问题，并进一步优化界面性能与运行稳定性。

## 三、使用提示

- 海域经验、敌方编成及相关资料可能会随着游戏内容更新而发生变化，查询结果请以游戏内实际情况为准。可在设置中随时检查海域资料更新。
- 当前「记录备份与恢复」功能主要面向 **航海日志与编成记录**，并非完整的应用数据备份。
- 如准备更换设备、卸载应用或清理应用数据，建议提前导出备份文件，并确认备份文件已经成功保存。

感谢各位提督一直以来的反馈与支持！

随着主要功能逐渐完善，Yahagi 接下来会将更多精力放在稳定性、兼容性与使用体验的持续改善上。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.8/README.md`},"zh-TW":{body:`本次更新是 **今年最後一個大型版本更新**。目前 Yahagi 的主要功能已大致開發完成，後續開發將逐步轉向 **維護、最佳化與問題修正**，因此預計未來版本的更新頻率也會降低。

相較於 v1.0.7，本次更新重點加入了 **海域與敵艦資料查詢、艦娘經驗規劃、記錄備份與還原、遊戲資源完整快取，以及針對大尺寸裝置最佳化的 HD 配置**。同時也持續改善艦隊資訊顯示、遊戲瀏覽操作及日常狀態提醒等功能。

本版本支援從 **v1.0.7 及先前發布的 v1.0.8 Beta 版本直接覆蓋升級**。安裝前無須解除安裝舊版，且請勿自行解除安裝，以免造成應用程式內資料遺失。

**也感謝 GitHub ID @Kutinana 同志製作了 iOS 1.08 移植版本，但該版本由第三方自行移植與製作。**

## 一、新增功能與主要改進

### 1. 海域查詢與敵艦資料

工具箱新增「海域查詢」功能，可選擇一般海域，查看海域路線圖及各節點的相關資料。

- 可查看節點類型、敵方編成、陣形、經驗值及制空相關資料，方便出擊前快速確認。
- 點選敵艦後，可進一步查看敵艦屬性、裝備與搭載等詳細資料。
- 海域與敵艦資料支援在應用程式內獨立檢查並更新。遊戲資料變更時，無須等待 Yahagi 發布新版本，即可取得最新資料。

### 2. 艦娘經驗計算與養成追蹤

工具箱新增「經驗計算」功能。選擇艦娘、目前等級與目標等級後，可依預計使用的出擊路線，估算每輪獲得的經驗與達到目標等級所需的出擊次數。

- 支援加入多個戰鬥節點，並分別設定勝利評價、旗艦與 MVP 條件。
- 可直接使用海域資料中的經驗估算值，也可手動輸入經驗，適用於演習或資料尚未完整的節點。
- 支援將養成目標加入追蹤，方便後續持續查看艦娘的升級進度。

### 3. 航海日誌與編成記錄備份

設定中新增「記錄備份與還原」功能，主要用於保存 **目前帳號的航海日誌與編成記錄**。

- 可選擇裝置上的文件資料夾啟用背景同步，也可隨時手動執行同步。
- 支援將備份檔案儲存至本機，或透過其他應用程式分享。
- 更換裝置後，可匯入備份檔案還原相關記錄。
- 執行還原前，應用程式會顯示此次還原涉及的資料範圍，並要求再次確認，以避免誤操作。

### 4. HD 配置與首頁自訂

新增針對平板、摺疊螢幕及其他大尺寸裝置最佳化的 **HD 配置**，讓遊戲畫面與艦隊、任務、遠征、修理等資訊能在大螢幕裝置上更清楚地並排顯示。**8 吋以下裝置請勿嘗試。**

首頁同時加入自訂編輯功能，可自由調整各模組的排列順序、隱藏暫時不需要的卡片，並支援一鍵恢復預設配置。

艦隊簡報也增加更多顯示自訂選項，可調整資訊項目、艦隊名稱及艦種標籤等內容的顯示方式，讓小螢幕與大螢幕裝置都能依使用習慣調整。

### 5. 遊戲資源完整快取

在原有「遊玩過程中按需快取」機制的基礎上，新增「本機快取」模式，可事先將遊戲基礎資源下載至裝置。

- 快取下載過程中仍可正常遊玩。
- 可在設定中查看目前快取狀態，並暫停或繼續下載。
- 支援檢查快取完整性與清除本機快取。
- 原有暫存快取模式仍保留，可繼續按需使用。

### 6. 資源列與遊戲操作細節

- 頂部資源列新增 **家具幣** 顯示，並可選擇是否將家具箱換算後計入預覽數值。
- 資源膠囊的顯示項目與排列順序可進一步自訂。
- 新增遊戲框架快速重新整理入口，在遊戲畫面異常時，可更方便地重新載入遊戲框架。
- 改善全螢幕模式的退出操作。

### 7. 支援滑鼠操作

Yahagi 現已支援使用外接滑鼠操作，並支援透過 **滑鼠滾輪捲動頁面**，進一步改善平板、桌面模式與大螢幕裝置上的操作體驗。

如果連接滑鼠後出現滾輪無法正常使用、頁面無法捲動等情況，可前往 **設定** 開啟「滑鼠相容設定」，以改善部分裝置或滑鼠的相容性。

## 二、修正與體驗最佳化

- **遊戲畫面與快取：** 最佳化資源下載、快取驗證及異常復原機制；改善遊戲畫面縮放、視窗尺寸變更及全螢幕切換時的顯示穩定性。
- **任務與通知：** 完善任務進度計算與完成回饋，減少任務狀態更新不即時的問題；同時調整部分通知的觸發時機與顯示內容。
- **艦隊與修理：** 改善艦隊狀態顯示、泊地修理倒數、入渠狀態及修理完成提醒的更新準確度。
- **頁面適配：** 最佳化編成圖、經驗計算、艦隊卡片及設定頁面在窄螢幕與大螢幕裝置上的配置，修正部分文字溢出、內容遮擋與操作區域不易點選等問題。
- **其他修正：** 持續修正部分帳號切換後的資料顯示異常、戰鬥資訊顯示問題，並進一步最佳化介面效能與執行穩定性。

## 三、使用提示

- 海域經驗、敵方編成及相關資料可能隨遊戲內容更新而變更，查詢結果請以遊戲內實際情況為準。可隨時在設定中檢查海域資料更新。
- 目前「記錄備份與還原」功能主要針對 **航海日誌與編成記錄**，並非完整的應用程式資料備份。
- 如果準備更換裝置、解除安裝應用程式或清除應用程式資料，建議事先匯出備份檔案，並確認備份檔案已成功儲存。

感謝各位提督一直以來的回饋與支持！

隨著主要功能逐漸完善，Yahagi 接下來會投入更多心力，持續改善穩定性、相容性與使用體驗。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.8/README.zh-Hant.md`},ja:{body:`今回の更新は **今年最後の大型アップデート** です。Yahagi の主要機能はおおむね開発が完了し、今後は徐々に **保守、最適化、不具合修正** へ移行するため、今後のアップデート頻度も低下する見込みです。

v1.0.7 と比べ、今回は **海域・敵艦情報の検索、艦娘の経験値計画、記録のバックアップと復元、ゲームリソースの完全キャッシュ、大型端末向けに最適化した HD レイアウト** を中心に追加しました。艦隊情報の表示、ゲーム画面の操作、日常的な状態通知なども引き続き改善しています。

本バージョンは、**v1.0.7 および先行公開された v1.0.8 Beta から直接上書きアップデートできます**。インストール前に旧バージョンをアンインストールする必要はありません。アプリ内データの消失を防ぐため、旧バージョンをアンインストールしないでください。

**GitHub ID @Kutinana さんが iOS 1.08 移植版を制作してくださったことにも感謝します。ただし、このバージョンは第三者が独自に移植・制作したものです。**

## 一、新機能・主な改善

### 1. 海域検索・敵艦情報

ツールボックスに「海域検索」機能を追加しました。通常海域を選び、海域のルート図と各マスの関連情報を確認できます。

- マスの種類、敵編成、陣形、経験値、制空関連データを確認でき、出撃前の素早いチェックに役立ちます。
- 敵艦をタップすると、ステータス、装備、搭載数などの詳細情報を確認できます。
- 海域・敵艦データはアプリ内で個別に更新確認・更新が可能です。ゲームの情報が変わった際も、Yahagi の新バージョンを待たずに最新データを取得できます。

### 2. 艦娘の経験値計算・育成追跡

ツールボックスに「経験値計算」機能を追加しました。艦娘、現在レベル、目標レベルを選ぶと、予定する出撃ルートに応じて、1 周あたりの獲得経験値と目標レベルまでに必要な出撃回数を見積もれます。

- 複数の戦闘マスを追加し、それぞれに勝利判定、旗艦、MVP の条件を設定できます。
- 海域データの経験値推定値をそのまま使うことも、経験値を手動入力することもできます。演習や、データがまだ十分に揃っていないマスにも利用できます。
- 育成目標を追跡対象に追加でき、その後も艦娘のレベルアップ進捗を継続して確認できます。

### 3. 航海日誌・編成記録のバックアップ

設定に「記録のバックアップと復元」を追加しました。主に **現在のアカウントの航海日誌と編成記録** を保存する機能です。

- 端末内のドキュメントフォルダーを選んでバックグラウンド同期を有効にでき、いつでも手動で同期できます。
- バックアップファイルを端末に保存したり、他のアプリ経由で共有したりできます。
- 端末を変更した後は、バックアップファイルをインポートして該当する記録を復元できます。
- 復元前には、対象となるデータ範囲を表示し、誤操作を防ぐために再確認を求めます。

### 4. HD レイアウト・ホーム画面のカスタマイズ

タブレット、折りたたみ端末、その他の大型端末向けに最適化した **HD レイアウト** を追加しました。ゲーム画面と、艦隊、任務、遠征、修理などの情報を、大きな画面でより見やすく並べて表示できます。**8 インチ以下の端末では使用しないでください。**

ホーム画面にはカスタマイズ編集機能も追加しました。各モジュールの並び順を自由に変更し、不要なカードを非表示にでき、ワンタップで初期レイアウトに戻せます。

艦隊サマリーにも表示設定を追加しました。表示する情報項目、艦隊名、艦種ラベルなどの表示方法を調整でき、小型画面でも大型画面でも、使い方に合わせて変更できます。

### 5. ゲームリソースの完全キャッシュ

従来の「プレイ中に必要に応じてキャッシュする」仕組みに加え、「ローカルキャッシュ」モードを追加しました。ゲームの基本リソースを事前に端末へダウンロードできます。

- キャッシュのダウンロード中も通常どおりゲームをプレイできます。
- 設定で現在のキャッシュ状態を確認し、ダウンロードを一時停止・再開できます。
- キャッシュの完全性チェックとローカルキャッシュの削除に対応しています。
- 従来の一時キャッシュモードも残しており、引き続き必要に応じて利用できます。

### 6. 資源バー・ゲーム操作の細部

- 上部の資源バーに **家具コイン** の表示を追加しました。家具箱を換算してプレビュー値に含めるかどうかも選べます。
- 資源カプセルの表示項目と並び順を、さらにカスタマイズできます。
- ゲームフレームを素早く再読み込みする入口を追加し、ゲーム画面に異常がある際にフレームを読み込み直しやすくしました。
- 全画面モードを終了する操作を改善しました。

### 7. マウス操作への対応

Yahagi は外付けマウスによる操作に対応し、**マウスホイールでのページスクロール** も可能になりました。タブレット、デスクトップモード、大型端末での操作性をさらに改善しています。

マウス接続後にホイールが正常に動作しない、ページをスクロールできないといった場合は、**設定** の「マウス互換設定」を有効にすると、一部の端末やマウスとの互換性を改善できる場合があります。

## 二、修正・使い勝手の改善

- **ゲーム画面・キャッシュ：** リソースのダウンロード、キャッシュ検証、異常時の復旧処理を改善しました。ゲーム画面の拡大縮小、ウィンドウサイズ変更、全画面切り替え時の表示安定性も改善しました。
- **任務・通知：** 任務進捗の計算と完了時のフィードバックを改善し、任務状態の更新が遅れる問題を軽減しました。一部の通知の発生タイミングと表示内容も調整しました。
- **艦隊・修理：** 艦隊状態、泊地修理のカウントダウン、入渠状態、修理完了通知の更新精度を改善しました。
- **画面サイズへの対応：** 編成画像、経験値計算、艦隊カード、設定ページのレイアウトを狭い画面と大型画面向けに最適化しました。一部の文字のはみ出し、内容の重なり、操作領域をタップしにくい問題などを修正しました。
- **その他の修正：** アカウント切り替え後の一部データ表示異常や戦闘情報の表示問題を引き続き修正し、画面のパフォーマンスと動作の安定性もさらに改善しました。

## 三、利用上の注意

- 海域経験値、敵編成、関連情報はゲーム内容の更新に伴って変更される可能性があります。検索結果よりもゲーム内の実際の状態を優先してください。海域データの更新は、設定からいつでも確認できます。
- 現在の「記録のバックアップと復元」は、主に **航海日誌と編成記録** が対象であり、アプリデータ全体のバックアップではありません。
- 端末の変更、アプリのアンインストール、アプリデータの削除を予定している場合は、事前にバックアップファイルをエクスポートし、正常に保存できたことを確認してください。

いつもフィードバックと応援をいただき、ありがとうございます！

主要機能が揃いつつある今後の Yahagi では、安定性、互換性、使い勝手の継続的な改善に、さらに力を入れていきます。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.8/README.ja.md`},ko:{body:`이번 업데이트는 **올해 마지막 대규모 버전 업데이트**입니다. 현재 Yahagi의 주요 기능은 대부분 개발이 완료되었으며, 향후 개발은 점차 **유지보수, 최적화 및 문제 수정**으로 전환됩니다. 이에 따라 이후 버전의 업데이트 빈도도 낮아질 것으로 예상합니다.

v1.0.7과 비교하여 이번에는 **해역 및 적함 자료 조회, 칸무스 경험치 계획, 기록 백업 및 복원, 게임 리소스 전체 캐시, 대형 기기에 최적화된 HD 레이아웃**을 중점적으로 추가했습니다. 함대 정보 표시, 게임 탐색 조작 및 일상적인 상태 알림 등의 기능도 계속 개선했습니다.

이 버전은 **v1.0.7 및 이전에 공개된 v1.0.8 Beta 버전에서 바로 덮어쓰기 업데이트**할 수 있습니다. 설치 전에 이전 버전을 삭제할 필요가 없으며, 앱 내부 데이터 손실을 방지하기 위해 직접 삭제하지 마세요.

**iOS 1.08 이식 버전을 제작해 주신 GitHub ID @Kutinana 님께도 감사드립니다. 다만 해당 버전은 제3자가 독자적으로 이식하고 제작한 것입니다.**

## 1. 새 기능 및 주요 개선

### 1. 해역 조회 및 적함 자료

도구 상자에 「해역 조회」 기능을 추가했습니다. 일반 해역을 선택하여 해역 경로 지도와 각 지점의 관련 자료를 확인할 수 있습니다.

- 지점 유형, 적 편성, 진형, 경험치 및 제공 관련 데이터를 확인하여 출격 전에 빠르게 점검할 수 있습니다.
- 적함을 누르면 능력치, 장비 및 탑재 수 등의 상세 자료를 확인할 수 있습니다.
- 해역 및 적함 자료는 앱 안에서 별도로 업데이트를 확인하고 갱신할 수 있습니다. 게임 자료가 바뀌어도 Yahagi의 새 버전 출시를 기다리지 않고 최신 데이터를 받을 수 있습니다.

### 2. 칸무스 경험치 계산 및 육성 추적

도구 상자에 「경험치 계산」 기능을 추가했습니다. 칸무스, 현재 레벨 및 목표 레벨을 선택하면 계획한 출격 경로에 따라 한 바퀴당 획득 경험치와 목표 레벨에 도달하는 데 필요한 출격 횟수를 추정할 수 있습니다.

- 여러 전투 지점을 추가하고 각 지점의 승리 평가, 기함 및 MVP 조건을 따로 설정할 수 있습니다.
- 해역 자료의 경험치 추정값을 바로 사용하거나 수동으로 경험치를 입력할 수 있어, 연습이나 아직 자료가 충분하지 않은 지점에도 사용할 수 있습니다.
- 육성 목표를 추적 목록에 추가하여 이후에도 칸무스의 레벨업 진행 상황을 계속 확인할 수 있습니다.

### 3. 항해 일지 및 편성 기록 백업

설정에 「기록 백업 및 복원」 기능을 추가했습니다. 주로 **현재 계정의 항해 일지와 편성 기록**을 보관하는 기능입니다.

- 기기의 문서 폴더를 선택하여 백그라운드 동기화를 켤 수 있으며, 언제든 수동으로 동기화할 수도 있습니다.
- 백업 파일을 기기에 저장하거나 다른 앱을 통해 공유할 수 있습니다.
- 기기를 바꾼 뒤 백업 파일을 가져와 관련 기록을 복원할 수 있습니다.
- 복원 전에 앱이 이번 복원에 포함되는 데이터 범위를 표시하고 다시 확인을 요청하여 잘못된 조작을 방지합니다.

### 4. HD 레이아웃 및 홈 화면 맞춤 설정

태블릿, 폴더블 및 기타 대형 기기에 최적화된 **HD 레이아웃**을 추가했습니다. 대형 화면에서 게임 화면과 함대, 임무, 원정, 수리 등의 정보를 더 명확하게 나란히 표시할 수 있습니다. **8인치 이하 기기에서는 사용하지 마세요.**

홈 화면에는 맞춤 편집 기능도 추가했습니다. 각 모듈 순서를 자유롭게 바꾸고 당장 필요 없는 카드를 숨길 수 있으며, 한 번 눌러 기본 레이아웃으로 복원할 수 있습니다.

함대 요약에도 표시 맞춤 옵션을 더 추가했습니다. 정보 항목, 함대 이름 및 함종 태그 등의 표시 방식을 조정하여 작은 화면과 큰 화면 모두 사용 습관에 맞게 바꿀 수 있습니다.

### 5. 게임 리소스 전체 캐시

기존의 「플레이 중 필요할 때 캐시」하는 방식에 더해 「로컬 캐시」 모드를 추가했습니다. 게임 기본 리소스를 기기에 미리 다운로드할 수 있습니다.

- 캐시를 다운로드하는 동안에도 게임을 정상적으로 플레이할 수 있습니다.
- 설정에서 현재 캐시 상태를 확인하고 다운로드를 일시 정지하거나 다시 시작할 수 있습니다.
- 캐시 무결성 검사 및 로컬 캐시 삭제를 지원합니다.
- 기존 임시 캐시 모드도 유지되며 계속 필요에 따라 사용할 수 있습니다.

### 6. 자원 표시줄 및 게임 조작 세부 사항

- 상단 자원 표시줄에 **가구 코인**을 추가했습니다. 가구 상자를 코인으로 환산하여 미리보기 수치에 포함할지도 선택할 수 있습니다.
- 자원 캡슐에 표시할 항목과 순서를 더욱 세밀하게 설정할 수 있습니다.
- 게임 프레임 빠른 새로고침 기능을 추가하여 게임 화면에 이상이 생겼을 때 프레임을 더 편리하게 다시 불러올 수 있습니다.
- 전체 화면 모드 종료 조작을 개선했습니다.

### 7. 마우스 조작 지원

Yahagi는 이제 외장 마우스 조작을 지원하며, **마우스 휠로 페이지 스크롤**도 할 수 있습니다. 태블릿, 데스크톱 모드 및 대형 기기에서의 조작 경험을 더욱 개선했습니다.

마우스를 연결한 뒤 휠이 정상적으로 작동하지 않거나 페이지를 스크롤할 수 없는 경우, **설정**에서 「마우스 호환 설정」을 켜 일부 기기 또는 마우스와의 호환성을 개선할 수 있습니다.

## 2. 수정 및 사용 경험 최적화

- **게임 화면 및 캐시:** 리소스 다운로드, 캐시 검증 및 오류 복구 방식을 최적화했습니다. 게임 화면 확대·축소, 창 크기 변경 및 전체 화면 전환 시의 표시 안정성을 개선했습니다.
- **임무 및 알림:** 임무 진행 계산과 완료 피드백을 개선하여 임무 상태 갱신이 늦어지는 문제를 줄였습니다. 일부 알림의 발생 시점과 표시 내용도 조정했습니다.
- **함대 및 수리:** 함대 상태 표시, 정박지 수리 카운트다운, 입거 상태 및 수리 완료 알림의 갱신 정확도를 높였습니다.
- **페이지 대응:** 좁은 화면과 큰 화면에서 편성 이미지, 경험치 계산, 함대 카드 및 설정 페이지의 레이아웃을 최적화했습니다. 일부 텍스트 넘침, 내용 가림 및 조작 영역을 누르기 어려운 문제 등을 수정했습니다.
- **기타 수정:** 계정 전환 후의 일부 데이터 표시 이상과 전투 정보 표시 문제를 계속 수정하고, 화면 성능과 실행 안정성을 더욱 최적화했습니다.

## 3. 사용 안내

- 해역 경험치, 적 편성 및 관련 자료는 게임 내용 업데이트에 따라 바뀔 수 있으므로 조회 결과는 실제 게임 상황을 기준으로 확인해 주세요. 설정에서 언제든 해역 자료 업데이트를 확인할 수 있습니다.
- 현재 「기록 백업 및 복원」 기능은 주로 **항해 일지와 편성 기록**을 대상으로 하며 앱 데이터 전체를 백업하는 기능은 아닙니다.
- 기기 변경, 앱 삭제 또는 앱 데이터 초기화를 준비하고 있다면 미리 백업 파일을 내보내고 파일이 정상적으로 저장되었는지 확인하는 것을 권장합니다.

항상 의견과 응원을 보내 주시는 제독 여러분께 감사드립니다!

주요 기능이 점차 완성됨에 따라 Yahagi는 앞으로 안정성, 호환성 및 사용 경험의 지속적인 개선에 더 많은 노력을 기울이겠습니다.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.8/README.ko.md`},en:{body:`This is **the last major update of this year**. Yahagi's main features are now largely complete, and development will gradually shift toward **maintenance, optimization, and bug fixes**, so future releases are also expected to become less frequent.

Compared with v1.0.7, this update focuses on **map and enemy ship information lookup, ship experience planning, record backup and restore, complete game resource caching, and an HD layout optimized for larger devices**. Fleet information displays, game browsing controls, everyday status reminders, and other features also continue to improve.

This version supports **direct in-place upgrades from v1.0.7 and previously released v1.0.8 Beta versions**. There is no need to uninstall the old version before installation. Please do not uninstall it, as doing so may cause the loss of data stored in the app.

**Thank you as well to GitHub user @Kutinana for making an iOS 1.08 port. This version was independently ported and produced by a third party.**

## 1. New features and main improvements

### 1. Map lookup and enemy ship information

Added Map lookup to the Toolbox. Select a regular map to view its route map and information about each node.

- Check node types, enemy compositions, formations, experience, and air power data for a quick review before a sortie.
- Tap an enemy ship to view detailed stats, equipment, aircraft counts, and more.
- Map and enemy ship data can be checked for updates and updated independently within the app. When game data changes, you can obtain the latest data without waiting for a new Yahagi release.

### 2. Ship experience calculation and training tracking

Added Experience calculator to the Toolbox. After choosing a ship, its current level, and a target level, you can estimate the experience gained per run and the number of sorties needed to reach the target based on your planned sortie route.

- Add multiple battle nodes and set victory rating, flagship, and MVP conditions separately for each one.
- Use estimated experience values from map data directly, or enter experience manually for exercises or nodes with incomplete data.
- Add training goals to tracking so that you can keep checking a ship's leveling progress afterward.

### 3. Logbook and fleet composition record backup

Added Record backup and restore in Settings, mainly for saving **the current account's logbook and fleet composition records**.

- Select a document folder on your device to enable background synchronization, or synchronize manually at any time.
- Save backup files locally or share them through other apps.
- After changing devices, import a backup file to restore the relevant records.
- Before restoring, the app shows the scope of data involved and asks for confirmation again to help prevent mistakes.

### 4. HD layout and home page customization

Added an **HD layout** optimized for tablets, foldables, and other larger devices, displaying the game alongside fleet, quest, expedition, repair, and other information more clearly on large screens. **Do not use it on devices 8 inches or smaller.**

The home page now also supports custom editing. Freely reorder its modules, hide cards you do not currently need, and restore the default layout with one tap.

The fleet summary has additional display customization options too. Adjust which information items appear and how fleet names, ship type labels, and other content are displayed, adapting both compact and large screens to your preferences.

### 5. Complete game resource caching

In addition to the existing mechanism that caches resources as needed while playing, a Local cache mode now lets you download the game's basic resources to your device in advance.

- Continue playing normally while the cache downloads.
- Check the current cache status in Settings, and pause or resume downloads.
- Check cache integrity and clear the local cache.
- The existing temporary cache mode remains available for use as needed.

### 6. Resource bar and game control details

- Added **Furniture coins** to the top resource bar, with an option to convert furniture boxes into their coin value and include them in the preview total.
- Further customize the items and order shown in resource capsules.
- Added a shortcut to refresh the game frame, making it easier to reload the frame when the game display behaves abnormally.
- Improved the controls for exiting full-screen mode.

### 7. Mouse support

Yahagi now supports external mouse input, including **scrolling pages with the mouse wheel**, further improving operation on tablets, in desktop mode, and on larger devices.

If the wheel does not work correctly or pages cannot be scrolled after connecting a mouse, enable Mouse compatibility settings in **Settings** to improve compatibility with some devices or mice.

## 2. Fixes and experience improvements

- **Game display and caching:** Improved resource downloads, cache validation, and recovery from errors; improved display stability when zooming the game, resizing the window, or switching full-screen mode.
- **Quests and notifications:** Improved quest progress calculations and completion feedback, reducing delayed quest state updates; adjusted the timing and content of some notifications.
- **Fleets and repairs:** Improved refresh accuracy for fleet status, anchorage repair countdowns, repair dock status, and repair completion reminders.
- **Layout adaptation:** Improved composition image, experience calculator, fleet card, and Settings page layouts on narrow and large screens; fixed some text overflow, obscured content, and controls that were difficult to tap.
- **Other fixes:** Continued fixing some data display issues after switching accounts and battle information display issues, with further improvements to interface performance and runtime stability.

## 3. Usage notes

- Map experience, enemy compositions, and related data may change with game updates. Refer to the actual in-game situation when using lookup results. You can check for map data updates in Settings at any time.
- Record backup and restore currently focuses on **logbook and fleet composition records**; it is not a complete backup of the app's data.
- If you plan to change devices, uninstall the app, or clear its data, export a backup file in advance and confirm that it has been saved successfully.

Thank you to all admirals for your continued feedback and support!

As its main features become more complete, Yahagi will devote more effort to continuously improving stability, compatibility, and the user experience.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.8/README.en.md`}}},{id:387882737,tag:`1.0.7`,name:`ヤハギ v1.0.7`,publishedAt:`2026-09-13T11:51:34Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.7`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.7/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.7/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.7/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.7/README.ko.md)

# **ヤハギ v1.0.7 更新说明**

本次更新为 **紧急特殊上线版本**。

考虑到目前 **ACGP 已无法正常使用**，近期也有较多提督询问 Yahagi 是否能够配合 **岛风GO** 使用。同时，部分使用岛风GO的提督还遇到了 **“显示区域被限制”** 的问题。

因此，本次紧急加入了针对 **“显示区域被限制”问题的绕行处理**，并将目前已经开发完成、可以提前公开的部分功能一并整理，推出 **Yahagi v1.0.7** 版本。

需要特别说明的是：

**岛风GO目前原生并不支持 Yahagi。**

本次更新只是由 Yahagi 侧新增了相关绕行兼容功能，使岛风GO在部分情况下能够与 Yahagi 配合使用，并不代表双方已经实现完整适配，也无法保证所有环境下都能够 100% 正常运行。

目前经过多位提督参与实际测试，反馈显示：**通过本次新增的绕行功能，已经可以在 Yahagi 中结合岛风GO正常登录游戏。**

不过，如果希望未来能够在 Yahagi 中 **完整使用岛风GO的全部功能**，仍需要岛风GO方面将 **Yahagi 加入其支持白名单**，才能实现更加完整、稳定的兼容。

因此，现阶段岛风GO相关功能仍属于 **兼容性支持 / 临时绕行方案**，实际使用效果可能会因设备、网络环境以及岛风GO版本不同而存在差异。

---

## **岛风GO / 其他代理出现“显示区域被限制”的处理方法**

如果在使用 **岛风GO** 时出现 **“显示区域被限制”** 的问题，请先关闭岛风GO中的：

* **使用远端缓存**
* **全图鉴功能**

上述功能可能会与 **Yahagi 的本地缓存机制产生冲突**，从而导致 **“显示区域被限制”** 的情况。

如果已经关闭岛风GO的 **“使用远端缓存”** 和 **“全图鉴功能”**，但仍然出现 **“显示区域被限制”**，或者使用其他代理工具时也出现相同问题，请：

进入 **Yahagi → 网络设置**，在页面最下方开启 **“绕行功能”**，然后重新刷新游戏。

目前根据测试反馈，开启绕行功能后，**绝大多数“显示区域被限制”的问题都可以得到解决**。

建议使用岛风GO的提督优先保持 **远端缓存与全图鉴功能关闭**，再配合 Yahagi 使用，如果仍然存在“显示区域被限制”。请打开绕行功能再尝试，以减少缓存冲突和区域限制问题。

---

除上述紧急兼容处理外，本次 v1.0.7 还加入了 **舰队编成图生成、舰船属性浮卡、多账号数据隔离、任务系统升级、noro6 / DeckBuilder 导出优化、侧边栏状态显示增强** 等功能，并对多项界面与稳定性问题进行了调整。

---

# **一、新增功能与核心改进**

## **1. 全新「舰队编成图」功能**

工具箱新增 **「编成图」** 功能，可一键将舰队与基地航空队配置生成高清长图。

主要支持：

* 自由选择最多 **4 支舰队**，支持 7 舰游击部队。
* 可同时加入指定海域的 **基地航空队**。
* 显示舰娘立绘、等级、运、装备、改修、熟练度、补强增设及搭载数等信息。
* 搭载数支持 **隐藏 / 当前搭载 / 最大搭载** 三种显示方式。
* 可直接保存高清 PNG 至系统相册。

---

## **2. 「未卜先知」新增舰船属性浮卡**

在 **未卜先知** 与实时战斗面板中，点击我方或敌方舰船即可查看详细信息。

支持显示：

* 当前火力、雷装、对空、装甲属性。
* 当前装备与各槽位搭载情况。
* 敌舰属性根据基础数值与装备效果综合计算。
* elite / flagship 状态直接显示。
* 浮卡会根据屏幕位置自动调整，并在页面切换或滚动时自动收起。

---

## **3. 多账号数据彻底隔离**

针对多账号用户，对底层数据存储机制进行了重构。

现在不同账号的以下数据均会独立保存：

* 舰队与库存数据
* 出击与战斗记录
* 任务进度
* 建造 / 开发记录
* 阵型记忆
* 远征与改修收藏
* 新舰锁船排除名单等

舰娘、装备主数据、地图数据、游戏缓存等公共资源仍然共用，避免重复占用空间。

同时优化了账号切换逻辑，降低跨账号串数据、旧账号通知误触发等情况。

---

## **4. 任务系统全面升级**

本次对任务系统进行了较大幅度的重构。

主要包括：

* 任务状态细分为：
  **未接取 / 进行中 / 待领取 / 推算已完成 / 未解锁**
* 任务进度推算逻辑进一步对齐 **Poi 任务插件**。
* 新增 **“仅已接取”** 快捷筛选。
* 搜索支持多关键词，可按任务名称、翻译、奖励、备注及编号进行检索。
* 当任务推算完成时，顶部会即时提示 **“有任务已完成”**。
* 左侧任务按钮会显示当前待领取任务数量。
* 优化现代任务接口的全量同步逻辑，减少翻页造成的任务遗漏。

> ※ 任务完成状态主要依赖 Yahagi 的本地记录进行推算。如果在其他设备上完成任务，本机可能无法获取完整记录，因此显示结果可能存在一定偏差。

---

## **5. noro6 / DeckBuilder 导出优化**

对制空权模拟器及 DeckBuilder 导出功能进行了重新检查和精度优化。

主要修复与改进：

* 更完整地导出舰娘改修强化属性。
* 支持补强增设与特殊强化道具。
* 准确保留实际搭载数，包括 **0 搭载槽位**。
* 修复空装备槽被压缩导致装备位置错位的问题。
* 优化基地航空队状态、扩建基地及中队槽位导出。
* 修复连续换装时部分属性可能出现不同步的问题。

导出结果现在与 noro6 原版解析逻辑进一步对齐。

---

## **6. 左侧菜单栏显示优化**

左侧菜单栏新增更多实时状态提示。

* **任务按钮**
  显示当前已完成 / 待领取的任务数量。
  ※ 依赖 Yahagi 本地缓存记录，跨设备操作可能导致显示与实际情况存在偏差。

* **远征按钮**
  显示当前正在进行中的远征数量。

* **修理按钮**
  显示当前正在修理中的舰娘数量。

* **建造按钮**
  显示当前已经建造完成、等待领取的舰娘数量。

---

# **二、细节优化与问题修复**

本次同时对多项细节进行了优化：

* **远征通知优化**
  舰队重新出发远征后，会自动移除该舰队之前的自然疲劳恢复提醒，避免产生无效通知。

* **入渠界面优化**
  修复大和改二、武藏改二等三位数 HP 舰娘在修理界面发生换行或截断的问题。

* **陆航卡片适配**
  修复部分窄屏、折叠屏设备上的文本溢出问题。

* **出击准备检查优化**
  调整首页舰队简报中的出击前状态检查与提示显示。

* **字体与多语言优化**
  改进字体回退机制，并进一步补充任务及部分弹窗的多语言显示。

---

# **三、已知问题与使用建议**

* **编成图生成** 与 **noro6 / DeckBuilder 导出** 均依赖本地母港数据。
  建议在使用前先进入游戏母港进行一次刷新。

* 编成图保存会调用系统相册 / 媒体存储功能。
  Android 10 及以上通常无需额外存储权限，旧版本 Android 请根据系统提示进行授权。

* **“显示区域被限制”绕行功能** 设有防止无限重试的保护机制，单次会话最多自动尝试一次。
  如果当前网络出口本身无法访问游戏服务，仍有可能停留在限制页面，此时请优先检查代理或网络环境。

* 岛风GO目前仍属于 **非原生支持状态**。如岛风GO后续调整接口、缓存机制或访问规则，相关兼容效果也可能随之发生变化。

---

感谢各位提督在紧急版本测试过程中提供的反馈与协助。

由于 v1.0.7 属于临时提前上线的特殊版本，其中部分功能原本仍处于后续版本的开发计划中。如在使用过程中发现异常、兼容性问题或其他 Bug，欢迎继续反馈。
`,notes:{"zh-CN":{body:`本次更新为 **紧急特殊上线版本**。

考虑到目前 **ACGP 已无法正常使用**，近期也有较多提督询问 Yahagi 是否能够配合 **岛风GO** 使用。同时，部分使用岛风GO的提督还遇到了 **“显示区域被限制”** 的问题。

因此，本次紧急加入了针对 **“显示区域被限制”问题的绕行处理**，并将目前已经开发完成、可以提前公开的部分功能一并整理，推出 **Yahagi v1.0.7** 版本。

需要特别说明的是：

**岛风GO目前原生并不支持 Yahagi。**

本次更新只是由 Yahagi 侧新增了相关绕行兼容功能，使岛风GO在部分情况下能够与 Yahagi 配合使用，并不代表双方已经实现完整适配，也无法保证所有环境下都能够 100% 正常运行。

目前经过多位提督参与实际测试，反馈显示：**通过本次新增的绕行功能，已经可以在 Yahagi 中结合岛风GO正常登录游戏。**

不过，如果希望未来能够在 Yahagi 中 **完整使用岛风GO的全部功能**，仍需要岛风GO方面将 **Yahagi 加入其支持白名单**，才能实现更加完整、稳定的兼容。

因此，现阶段岛风GO相关功能仍属于 **兼容性支持 / 临时绕行方案**，实际使用效果可能会因设备、网络环境以及岛风GO版本不同而存在差异。

---

## **岛风GO / 其他代理出现“显示区域被限制”的处理方法**

如果在使用 **岛风GO** 时出现 **“显示区域被限制”** 的问题，请先关闭岛风GO中的：

* **使用远端缓存**
* **全图鉴功能**

上述功能可能会与 **Yahagi 的本地缓存机制产生冲突**，从而导致 **“显示区域被限制”** 的情况。

如果已经关闭岛风GO的 **“使用远端缓存”** 和 **“全图鉴功能”**，但仍然出现 **“显示区域被限制”**，或者使用其他代理工具时也出现相同问题，请：

进入 **Yahagi → 网络设置**，在页面最下方开启 **“绕行功能”**，然后重新刷新游戏。

目前根据测试反馈，开启绕行功能后，**绝大多数“显示区域被限制”的问题都可以得到解决**。

建议使用岛风GO的提督优先保持 **远端缓存与全图鉴功能关闭**，再配合 Yahagi 使用，如果仍然存在“显示区域被限制”。请打开绕行功能再尝试，以减少缓存冲突和区域限制问题。

---

除上述紧急兼容处理外，本次 v1.0.7 还加入了 **舰队编成图生成、舰船属性浮卡、多账号数据隔离、任务系统升级、noro6 / DeckBuilder 导出优化、侧边栏状态显示增强** 等功能，并对多项界面与稳定性问题进行了调整。

---

# **一、新增功能与核心改进**

## **1. 全新「舰队编成图」功能**

工具箱新增 **「编成图」** 功能，可一键将舰队与基地航空队配置生成高清长图。

主要支持：

* 自由选择最多 **4 支舰队**，支持 7 舰游击部队。
* 可同时加入指定海域的 **基地航空队**。
* 显示舰娘立绘、等级、运、装备、改修、熟练度、补强增设及搭载数等信息。
* 搭载数支持 **隐藏 / 当前搭载 / 最大搭载** 三种显示方式。
* 可直接保存高清 PNG 至系统相册。

---

## **2. 「未卜先知」新增舰船属性浮卡**

在 **未卜先知** 与实时战斗面板中，点击我方或敌方舰船即可查看详细信息。

支持显示：

* 当前火力、雷装、对空、装甲属性。
* 当前装备与各槽位搭载情况。
* 敌舰属性根据基础数值与装备效果综合计算。
* elite / flagship 状态直接显示。
* 浮卡会根据屏幕位置自动调整，并在页面切换或滚动时自动收起。

---

## **3. 多账号数据彻底隔离**

针对多账号用户，对底层数据存储机制进行了重构。

现在不同账号的以下数据均会独立保存：

* 舰队与库存数据
* 出击与战斗记录
* 任务进度
* 建造 / 开发记录
* 阵型记忆
* 远征与改修收藏
* 新舰锁船排除名单等

舰娘、装备主数据、地图数据、游戏缓存等公共资源仍然共用，避免重复占用空间。

同时优化了账号切换逻辑，降低跨账号串数据、旧账号通知误触发等情况。

---

## **4. 任务系统全面升级**

本次对任务系统进行了较大幅度的重构。

主要包括：

* 任务状态细分为：
  **未接取 / 进行中 / 待领取 / 推算已完成 / 未解锁**
* 任务进度推算逻辑进一步对齐 **Poi 任务插件**。
* 新增 **“仅已接取”** 快捷筛选。
* 搜索支持多关键词，可按任务名称、翻译、奖励、备注及编号进行检索。
* 当任务推算完成时，顶部会即时提示 **“有任务已完成”**。
* 左侧任务按钮会显示当前待领取任务数量。
* 优化现代任务接口的全量同步逻辑，减少翻页造成的任务遗漏。

> ※ 任务完成状态主要依赖 Yahagi 的本地记录进行推算。如果在其他设备上完成任务，本机可能无法获取完整记录，因此显示结果可能存在一定偏差。

---

## **5. noro6 / DeckBuilder 导出优化**

对制空权模拟器及 DeckBuilder 导出功能进行了重新检查和精度优化。

主要修复与改进：

* 更完整地导出舰娘改修强化属性。
* 支持补强增设与特殊强化道具。
* 准确保留实际搭载数，包括 **0 搭载槽位**。
* 修复空装备槽被压缩导致装备位置错位的问题。
* 优化基地航空队状态、扩建基地及中队槽位导出。
* 修复连续换装时部分属性可能出现不同步的问题。

导出结果现在与 noro6 原版解析逻辑进一步对齐。

---

## **6. 左侧菜单栏显示优化**

左侧菜单栏新增更多实时状态提示。

* **任务按钮**
  显示当前已完成 / 待领取的任务数量。
  ※ 依赖 Yahagi 本地缓存记录，跨设备操作可能导致显示与实际情况存在偏差。

* **远征按钮**
  显示当前正在进行中的远征数量。

* **修理按钮**
  显示当前正在修理中的舰娘数量。

* **建造按钮**
  显示当前已经建造完成、等待领取的舰娘数量。

---

# **二、细节优化与问题修复**

本次同时对多项细节进行了优化：

* **远征通知优化**
  舰队重新出发远征后，会自动移除该舰队之前的自然疲劳恢复提醒，避免产生无效通知。

* **入渠界面优化**
  修复大和改二、武藏改二等三位数 HP 舰娘在修理界面发生换行或截断的问题。

* **陆航卡片适配**
  修复部分窄屏、折叠屏设备上的文本溢出问题。

* **出击准备检查优化**
  调整首页舰队简报中的出击前状态检查与提示显示。

* **字体与多语言优化**
  改进字体回退机制，并进一步补充任务及部分弹窗的多语言显示。

---

# **三、已知问题与使用建议**

* **编成图生成** 与 **noro6 / DeckBuilder 导出** 均依赖本地母港数据。
  建议在使用前先进入游戏母港进行一次刷新。

* 编成图保存会调用系统相册 / 媒体存储功能。
  Android 10 及以上通常无需额外存储权限，旧版本 Android 请根据系统提示进行授权。

* **“显示区域被限制”绕行功能** 设有防止无限重试的保护机制，单次会话最多自动尝试一次。
  如果当前网络出口本身无法访问游戏服务，仍有可能停留在限制页面，此时请优先检查代理或网络环境。

* 岛风GO目前仍属于 **非原生支持状态**。如岛风GO后续调整接口、缓存机制或访问规则，相关兼容效果也可能随之发生变化。

---

感谢各位提督在紧急版本测试过程中提供的反馈与协助。

由于 v1.0.7 属于临时提前上线的特殊版本，其中部分功能原本仍处于后续版本的开发计划中。如在使用过程中发现异常、兼容性问题或其他 Bug，欢迎继续反馈。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.7/README.md`},"zh-TW":{body:`本次更新為 **緊急特別發布版本**。

考量到目前 **ACGP 已無法正常使用**，近期也有不少提督詢問 Yahagi 是否能搭配 **島風GO** 使用。同時，部分使用島風GO的提督也遇到了 **「顯示區域受到限制」** 的問題。

因此，本次緊急加入了針對 **「顯示區域受到限制」問題的繞行處理**，並將目前已開發完成、可以提前公開的部分功能一併整理，推出 **Yahagi v1.0.7** 版本。

需要特別說明的是：

**島風GO目前原生並不支援 Yahagi。**

本次更新只是由 Yahagi 端新增相關繞行相容功能，使島風GO在部分情況下能與 Yahagi 搭配使用，並不代表雙方已完成完整適配，也無法保證所有環境下都能 100% 正常運作。

目前經過多位提督參與實際測試，回饋顯示：**透過本次新增的繞行功能，已可在 Yahagi 中搭配島風GO正常登入遊戲。**

不過，如果希望未來能在 Yahagi 中 **完整使用島風GO的全部功能**，仍需要島風GO方面將 **Yahagi 加入其支援白名單**，才能達成更完整、穩定的相容性。

因此，現階段島風GO相關功能仍屬於 **相容性支援／臨時繞行方案**，實際使用效果可能因裝置、網路環境及島風GO版本不同而有所差異。

---

## **島風GO／其他代理出現「顯示區域受到限制」的處理方法**

如果使用 **島風GO** 時出現 **「顯示區域受到限制」** 的問題，請先關閉島風GO中的：

* **使用遠端快取**
* **全圖鑑功能**

上述功能可能與 **Yahagi 的本機快取機制產生衝突**，導致 **「顯示區域受到限制」**。

如果已關閉島風GO的 **「使用遠端快取」** 和 **「全圖鑑功能」**，但仍出現 **「顯示區域受到限制」**，或使用其他代理工具時也出現相同問題，請：

進入 **Yahagi → 網路設定**，在頁面最下方開啟 **「繞行功能」**，然後重新整理遊戲。

目前根據測試回饋，開啟繞行功能後，**絕大多數「顯示區域受到限制」的問題都能解決**。

建議使用島風GO的提督優先保持 **遠端快取與全圖鑑功能關閉**，再搭配 Yahagi 使用。如果仍出現「顯示區域受到限制」，請開啟繞行功能後再試，以減少快取衝突與區域限制問題。

---

除了上述緊急相容處理，本次 v1.0.7 也加入了 **艦隊編成圖產生、艦船屬性浮卡、多帳號資料隔離、任務系統升級、noro6／DeckBuilder 匯出最佳化、側邊欄狀態顯示強化** 等功能，並調整多項介面與穩定性問題。

---

# **一、新增功能與核心改進**

## **1. 全新「艦隊編成圖」功能**

工具箱新增 **「編成圖」** 功能，可一鍵將艦隊與基地航空隊配置產生為高解析度長圖。

主要支援：

* 自由選擇最多 **4 支艦隊**，支援 7 艦遊擊部隊。
* 可同時加入指定海域的 **基地航空隊**。
* 顯示艦娘立繪、等級、運、裝備、改修、熟練度、補強增設及搭載數等資訊。
* 搭載數支援 **隱藏／目前搭載／最大搭載** 三種顯示方式。
* 可直接將高解析度 PNG 儲存至系統相簿。

---

## **2.「未卜先知」新增艦船屬性浮卡**

在 **未卜先知** 與即時戰鬥面板中，點選我方或敵方艦船即可查看詳細資訊。

支援顯示：

* 目前火力、雷裝、對空、裝甲屬性。
* 目前裝備與各欄位搭載情況。
* 敵艦屬性根據基礎數值與裝備效果綜合計算。
* 直接顯示 elite／flagship 狀態。
* 浮卡會依螢幕位置自動調整，並在切換頁面或捲動時自動收起。

---

## **3. 多帳號資料完整隔離**

針對多帳號使用者，重構了底層資料儲存機制。

現在不同帳號的以下資料皆會獨立儲存：

* 艦隊與庫存資料
* 出擊與戰鬥記錄
* 任務進度
* 建造／開發記錄
* 陣形記憶
* 遠征與改修收藏
* 新艦鎖船排除名單等

艦娘、裝備主資料、地圖資料、遊戲快取等共用資源仍會共用，避免重複占用空間。

同時最佳化帳號切換邏輯，減少跨帳號資料混用、舊帳號通知誤觸發等情況。

---

## **4. 任務系統全面升級**

本次對任務系統進行了較大幅度的重構。

主要包括：

* 任務狀態細分為：
  **未接取／進行中／待領取／推算已完成／未解鎖**
* 任務進度推算邏輯進一步對齊 **Poi 任務外掛**。
* 新增 **「僅已接取」** 快速篩選。
* 搜尋支援多個關鍵字，可依任務名稱、翻譯、獎勵、備註及編號查詢。
* 當任務推算完成時，頂部會即時提示 **「有任務已完成」**。
* 左側任務按鈕會顯示目前待領取的任務數量。
* 最佳化新版任務介面的完整同步邏輯，減少翻頁造成的任務遺漏。

> ※ 任務完成狀態主要依賴 Yahagi 的本機記錄進行推算。如果在其他裝置完成任務，本機可能無法取得完整記錄，因此顯示結果可能存在一定偏差。

---

## **5. noro6／DeckBuilder 匯出最佳化**

重新檢查制空權模擬器與 DeckBuilder 匯出功能，並提升精確度。

主要修正與改進：

* 更完整地匯出艦娘近代化改修強化屬性。
* 支援補強增設與特殊強化道具。
* 準確保留實際搭載數，包括 **0 搭載欄位**。
* 修正空裝備欄位遭壓縮，導致裝備位置錯位的問題。
* 最佳化基地航空隊狀態、擴建基地及中隊欄位的匯出。
* 修正連續換裝時，部分屬性可能不同步的問題。

匯出結果現在進一步對齊 noro6 原版的解析邏輯。

---

## **6. 左側選單列顯示最佳化**

左側選單列新增更多即時狀態提示。

* **任務按鈕**
  顯示目前已完成／待領取的任務數量。
  ※ 依賴 Yahagi 的本機快取記錄，跨裝置操作可能導致顯示與實際情況存在偏差。

* **遠征按鈕**
  顯示目前進行中的遠征數量。

* **修理按鈕**
  顯示目前修理中的艦娘數量。

* **建造按鈕**
  顯示目前已建造完成、等待領取的艦娘數量。

---

# **二、細節最佳化與問題修正**

本次同時最佳化多項細節：

* **遠征通知最佳化**
  艦隊再次出發遠征後，會自動移除該艦隊之前的自然疲勞恢復提醒，避免無效通知。

* **入渠介面最佳化**
  修正大和改二、武藏改二等三位數 HP 艦娘在修理介面發生換行或截斷的問題。

* **陸航卡片適配**
  修正部分窄螢幕、摺疊螢幕裝置上的文字溢出問題。

* **出擊準備檢查最佳化**
  調整首頁艦隊簡報中的出擊前狀態檢查與提示顯示。

* **字型與多語言最佳化**
  改善字型後備機制，並進一步補充任務及部分彈出視窗的多語言顯示。

---

# **三、已知問題與使用建議**

* **編成圖產生** 與 **noro6／DeckBuilder 匯出** 皆依賴本機母港資料。
  建議使用前先進入遊戲母港重新整理一次。

* 儲存編成圖會呼叫系統相簿／媒體儲存功能。
  Android 10 及以上版本通常不需要額外的儲存權限，舊版 Android 請依系統提示授權。

* **「顯示區域受到限制」繞行功能** 設有防止無限重試的保護機制，每次工作階段最多自動嘗試一次。
  如果目前的網路出口本身無法存取遊戲服務，仍可能停留在限制頁面；此時請優先檢查代理或網路環境。

* 島風GO目前仍為 **非原生支援狀態**。如果島風GO日後調整介面、快取機制或存取規則，相關相容效果也可能隨之改變。

---

感謝各位提督在緊急版本測試過程中提供的回饋與協助。

由於 v1.0.7 是臨時提前發布的特別版本，部分功能原本仍在後續版本的開發計畫中。如在使用過程中發現異常、相容性問題或其他 Bug，歡迎繼續回饋。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.7/README.zh-Hant.md`},ja:{body:`今回のアップデートは **緊急の特別リリース** です。

現在 **ACGP が正常に使用できなくなっている** こともあり、最近は Yahagi を **島風GO** と併用できるかというお問い合わせが多く寄せられています。また、島風GOを利用している一部の提督からは **「表示地域が制限されています」** という問題も報告されています。

そのため、今回は **「表示地域が制限されています」という問題への回避処理** を緊急追加しました。あわせて、すでに開発が完了し、先行公開できる機能をまとめ、**Yahagi v1.0.7** としてリリースします。

特にご理解いただきたい点があります。

**島風GOは現在、Yahagi を標準ではサポートしていません。**

今回の更新は、Yahagi 側に回避用の互換機能を追加し、一部の状況で島風GOとの併用を可能にするものです。双方の完全な対応が実現したことを意味するものではなく、すべての環境で 100% 正常に動作することも保証できません。

複数の提督に実際のテストへご協力いただいた結果、**今回追加した回避機能により、Yahagi 上で島風GOを併用して正常にゲームへログインできる** との報告をいただいています。

ただし、今後 Yahagi 上で **島風GOのすべての機能を完全に使用する** には、島風GO側で **Yahagi をサポート対象のホワイトリストに追加していただく** 必要があります。それによって、より完全で安定した互換性が実現できます。

したがって、現段階の島風GO関連機能は **互換性サポート／一時的な回避策** です。実際の動作は、端末、ネットワーク環境、島風GOのバージョンによって異なる場合があります。

---

## **島風GO／その他のプロキシで「表示地域が制限されています」と表示される場合の対処方法**

**島風GO** の使用中に **「表示地域が制限されています」** と表示される場合は、まず島風GOの以下の機能を無効にしてください。

* **リモートキャッシュを使用（使用远端缓存）**
* **全図鑑機能（全图鉴功能）**

これらの機能が **Yahagi のローカルキャッシュ機構と競合** し、**「表示地域が制限されています」** という状態を引き起こす可能性があります。

島風GOの **「リモートキャッシュを使用」** と **「全図鑑機能」** を無効にしても **「表示地域が制限されています」** と表示される場合、または他のプロキシツールで同じ問題が起きる場合は、以下をお試しください。

**Yahagi → ネットワーク設定** を開き、ページ最下部の **「回避機能」** を有効にしてから、ゲームを再読み込みしてください。

現在のテスト報告では、回避機能を有効にすると、**「表示地域が制限されています」という問題の大部分を解決できています**。

島風GOを利用する提督には、まず **リモートキャッシュと全図鑑機能を無効にした状態** で Yahagi と併用することをおすすめします。それでも「表示地域が制限されています」と表示される場合は、回避機能を有効にして再度お試しください。キャッシュの競合や地域制限の問題を減らすための手順です。

---

上記の緊急対応に加え、v1.0.7 では **艦隊編成画像の生成、艦船ステータスのポップアップカード、複数アカウントのデータ分離、任務システムの改良、noro6／DeckBuilder エクスポートの改善、サイドバーの状態表示強化** なども追加し、各種画面や安定性の問題を調整しました。

---

# **一、新機能・主な改善**

## **1. 新しい「艦隊編成画像」機能**

ツールボックスに **「編成画像」** 機能を追加しました。艦隊と基地航空隊の編成を、ワンタップで高解像度の縦長画像にできます。

主な対応内容：

* 最大 **4 艦隊**を自由に選択でき、7 隻編成の遊撃部隊にも対応。
* 指定した海域の **基地航空隊**を同時に追加可能。
* 艦娘の立ち絵、レベル、運、装備、改修、熟練度、補強増設、搭載数などを表示。
* 搭載数は **非表示／現在搭載数／最大搭載数** の 3 種類から選択可能。
* 高解像度 PNG を端末の写真ライブラリへ直接保存可能。

---

## **2.「未卜先知」に艦船ステータスのポップアップカードを追加**

**未卜先知** とリアルタイム戦闘パネルで、味方または敵の艦船をタップすると詳細情報を確認できます。

表示内容：

* 現在の火力、雷装、対空、装甲。
* 現在の装備と各スロットの搭載状況。
* 敵艦のステータスは、基礎値と装備効果を合わせて計算。
* elite／flagship の状態を直接表示。
* カードは画面内の位置に応じて自動調整され、ページ切り替えやスクロール時には自動で閉じます。

---

## **3. 複数アカウントのデータを完全に分離**

複数アカウントを利用する方向けに、基盤となるデータ保存機構を再構成しました。

以下のデータは、アカウントごとに独立して保存されます。

* 艦隊・所持データ
* 出撃・戦闘記録
* 任務進捗
* 建造／開発記録
* 陣形の記憶
* 遠征・改修のお気に入り
* 新規艦ロックの除外リストなど

艦娘・装備のマスターデータ、マップデータ、ゲームキャッシュなどの共通リソースは引き続き共有し、保存容量の重複を防ぎます。

アカウント切り替え処理も改善し、アカウント間のデータ混在や、前のアカウントの通知が誤って発生する問題などを減らしました。

---

## **4. 任務システムを全面改良**

今回、任務システムを大幅に再構成しました。

主な内容：

* 任務状態を以下のように細分化：
  **未受諾／遂行中／報酬受取待ち／完了と推定／未解放**
* 任務進捗の推定ロジックを **Poi 任務プラグイン**にさらに準拠。
* **「受諾済みのみ」** のクイックフィルターを追加。
* 複数キーワード検索に対応し、任務名、翻訳、報酬、備考、番号で検索可能。
* 任務の完了を推定すると、画面上部に **「完了した任務があります」** と即時表示。
* 左側の任務ボタンに、現在報酬受取待ちの任務数を表示。
* 新しい任務 API の全件同期処理を改善し、ページ切り替えによる任務の取りこぼしを軽減。

> ※ 任務の完了状態は、主に Yahagi のローカル記録から推定しています。他の端末で任務を完了した場合、この端末で完全な記録を取得できず、表示と実際の状態に差が出ることがあります。

---

## **5. noro6／DeckBuilder エクスポートの改善**

制空権シミュレータと DeckBuilder へのエクスポート機能を再点検し、精度を改善しました。

主な修正・改善：

* 艦娘の近代化改修による強化値を、より完全にエクスポート。
* 補強増設と特殊強化アイテムに対応。
* **搭載数 0 のスロット**を含め、実際の搭載数を正確に保持。
* 空の装備スロットが詰められ、装備位置がずれる問題を修正。
* 基地航空隊の状態、拡張された基地、中隊スロットのエクスポートを改善。
* 連続して装備を変更した際、一部ステータスが同期されないことがある問題を修正。

エクスポート結果は、noro6 本家の解析ロジックにさらに近づいています。

---

## **6. 左側メニューの表示改善**

左側メニューに、リアルタイムの状態表示を追加しました。

* **任務ボタン**
  現在完了済み／報酬受取待ちの任務数を表示。
  ※ Yahagi のローカルキャッシュ記録に依存するため、他の端末で操作すると表示と実際の状態に差が出る場合があります。

* **遠征ボタン**
  現在実行中の遠征数を表示。

* **修理ボタン**
  現在修理中の艦娘数を表示。

* **建造ボタン**
  現在建造が完了し、受け取り待ちとなっている艦娘数を表示。

---

# **二、細部の改善・不具合修正**

各種細部の改善も行いました。

* **遠征通知の改善**
  艦隊が再び遠征に出発した際、その艦隊に以前設定された自然疲労回復の通知を自動で削除し、不要な通知を防ぎます。

* **入渠画面の改善**
  大和改二、武蔵改二など、HP が 3 桁の艦娘が修理画面で改行されたり、表示が切れたりする問題を修正しました。

* **基地航空隊カードの調整**
  一部の狭い画面や折りたたみ端末で文字がはみ出す問題を修正しました。

* **出撃準備チェックの改善**
  ホーム画面の艦隊サマリーにある出撃前の状態チェックと通知表示を調整しました。

* **フォント・多言語表示の改善**
  フォントのフォールバックを改善し、任務と一部ダイアログの多言語表示をさらに補いました。

---

# **三、既知の問題・利用上のアドバイス**

* **編成画像の生成** と **noro6／DeckBuilder へのエクスポート** は、どちらもローカルの母港データに依存します。
  使用前にゲームの母港へ入り、一度情報を更新することをおすすめします。

* 編成画像の保存には、端末の写真ライブラリ／メディアストレージ機能を使用します。
  Android 10 以降では通常、追加のストレージ権限は不要です。それ以前の Android では、システムの案内に従って権限を許可してください。

* **「表示地域が制限されています」回避機能** には無限再試行を防ぐ仕組みがあり、1 回のセッションにつき自動試行は最大 1 回です。
  現在のネットワーク出口自体からゲームサービスへアクセスできない場合、制限ページのままになる可能性があります。その場合は、まずプロキシやネットワーク環境を確認してください。

* 島風GOは現在も **標準サポート外** です。今後、島風GO側の API、キャッシュ機構、アクセス規則が変更された場合、互換性も変わる可能性があります。

---

緊急版のテスト中にフィードバックやご協力をいただいた提督の皆さまに感謝します。

v1.0.7 は臨時の先行公開という特別なバージョンであり、一部の機能は本来、今後のバージョンで開発する予定だったものです。使用中に異常、互換性の問題、その他の不具合を見つけた場合は、引き続きご報告ください。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.7/README.ja.md`},ko:{body:`이번 업데이트는 **긴급 특별 출시 버전**입니다.

현재 **ACGP가 더 이상 정상적으로 작동하지 않는** 상황에서, 최근 Yahagi를 **시마카제GO(岛风GO)** 와 함께 사용할 수 있는지 묻는 제독님이 많았습니다. 시마카제GO 사용자 일부는 **「표시 지역이 제한되었습니다」** 문제도 겪고 있습니다.

이에 **「표시 지역이 제한되었습니다」 문제를 위한 우회 처리**를 긴급히 추가하고, 현재 개발이 완료되어 미리 공개할 수 있는 일부 기능을 함께 정리하여 **Yahagi v1.0.7**을 출시합니다.

특히 다음 사항을 알려 드립니다.

**시마카제GO는 현재 Yahagi를 기본 지원하지 않습니다.**

이번 업데이트는 Yahagi 쪽에 관련 우회 호환 기능을 추가하여 일부 상황에서 시마카제GO를 함께 사용할 수 있게 한 것입니다. 양쪽이 완전히 대응한 상태라는 뜻은 아니며, 모든 환경에서 100% 정상 작동을 보장할 수 없습니다.

여러 제독님이 실제 테스트에 참여해 주셨으며, 그 결과 **이번에 추가한 우회 기능으로 Yahagi에서 시마카제GO를 함께 사용하여 게임에 정상 로그인할 수 있다**는 의견을 받았습니다.

다만 앞으로 Yahagi에서 **시마카제GO의 모든 기능을 완전히 사용**하려면, 시마카제GO 측에서 **Yahagi를 지원 허용 목록에 추가**해야 더 완전하고 안정적인 호환이 가능합니다.

따라서 현재 시마카제GO 관련 기능은 여전히 **호환성 지원 / 임시 우회 방법**입니다. 실제 사용 결과는 기기, 네트워크 환경 및 시마카제GO 버전에 따라 다를 수 있습니다.

---

## **시마카제GO / 다른 프록시에서 「표시 지역이 제한되었습니다」가 나타날 때의 해결 방법**

**시마카제GO** 사용 중 **「표시 지역이 제한되었습니다」** 문제가 나타나면 먼저 시마카제GO의 다음 기능을 꺼 주세요.

* **원격 캐시 사용(使用远端缓存)**
* **전체 도감 기능(全图鉴功能)**

위 기능은 **Yahagi의 로컬 캐시 방식과 충돌**하여 **「표시 지역이 제한되었습니다」** 문제를 일으킬 수 있습니다.

시마카제GO의 **「원격 캐시 사용」** 과 **「전체 도감 기능」** 을 껐는데도 **「표시 지역이 제한되었습니다」** 가 계속 나타나거나, 다른 프록시 도구에서도 같은 문제가 나타나면 다음과 같이 해 주세요.

**Yahagi → 네트워크 설정**으로 이동하여 페이지 맨 아래의 **「우회 기능」** 을 켠 뒤 게임을 새로고침해 주세요.

현재 테스트 의견에 따르면 우회 기능을 켠 뒤 **「표시 지역이 제한되었습니다」 문제의 대부분이 해결되었습니다**.

시마카제GO를 사용하는 제독님은 먼저 **원격 캐시와 전체 도감 기능을 끈 상태**로 Yahagi와 함께 사용하는 것을 권장합니다. 그래도 「표시 지역이 제한되었습니다」가 나타나면 우회 기능을 켜고 다시 시도하여 캐시 충돌과 지역 제한 문제를 줄여 주세요.

---

위 긴급 호환 처리 외에도 v1.0.7에는 **함대 편성 이미지 생성, 함선 능력치 팝업 카드, 다중 계정 데이터 분리, 임무 시스템 개선, noro6 / DeckBuilder 내보내기 최적화, 사이드바 상태 표시 강화** 등의 기능을 추가하고 여러 화면 및 안정성 문제를 조정했습니다.

---

# **1. 새 기능 및 핵심 개선**

## **1. 새로운 「함대 편성 이미지」 기능**

도구 상자에 **「편성 이미지」** 기능을 추가했습니다. 한 번 눌러 함대와 기지항공대 구성을 고해상도 세로 이미지로 만들 수 있습니다.

주요 지원 내용:

* 최대 **4개 함대**를 자유롭게 선택할 수 있으며, 7척 유격부대를 지원합니다.
* 지정한 해역의 **기지항공대**를 함께 추가할 수 있습니다.
* 칸무스 일러스트, 레벨, 운, 장비, 개수, 숙련도, 보강증설 및 탑재 수 등을 표시합니다.
* 탑재 수는 **숨김 / 현재 탑재 / 최대 탑재**의 세 가지 표시 방식을 지원합니다.
* 고해상도 PNG를 시스템 사진 앨범에 직접 저장할 수 있습니다.

---

## **2. 「전투 예측」에 함선 능력치 팝업 카드 추가**

**전투 예측**과 실시간 전투 패널에서 아군 또는 적 함선을 누르면 상세 정보를 확인할 수 있습니다.

표시 내용:

* 현재 화력, 뇌장, 대공, 장갑 능력치.
* 현재 장비 및 각 슬롯의 탑재 상태.
* 적함 능력치는 기본 수치와 장비 효과를 종합하여 계산합니다.
* elite / flagship 상태를 직접 표시합니다.
* 팝업 카드는 화면 위치에 따라 자동으로 조정되며 페이지 전환이나 스크롤 시 자동으로 닫힙니다.

---

## **3. 다중 계정 데이터 완전 분리**

여러 계정을 사용하는 분을 위해 기반 데이터 저장 방식을 재구성했습니다.

이제 다음 데이터는 계정별로 독립적으로 저장됩니다.

* 함대 및 보유 데이터
* 출격 및 전투 기록
* 임무 진행 상황
* 건조 / 개발 기록
* 진형 기억
* 원정 및 개수 즐겨찾기
* 신규 함선 잠금 제외 목록 등

칸무스 및 장비 마스터 데이터, 해역 데이터, 게임 캐시 등 공통 리소스는 계속 공유하여 저장 공간의 중복 사용을 피합니다.

계정 전환 처리도 최적화하여 계정 간 데이터가 섞이거나 이전 계정의 알림이 잘못 발생하는 등의 상황을 줄였습니다.

---

## **4. 임무 시스템 전면 개선**

이번에는 임무 시스템을 대폭 재구성했습니다.

주요 내용:

* 임무 상태를 다음과 같이 세분화했습니다.
  **미수락 / 진행 중 / 보상 수령 대기 / 완료 추정 / 미해금**
* 임무 진행 추정 로직을 **Poi 임무 플러그인**에 더욱 맞췄습니다.
* **「수락한 임무만」** 빠른 필터를 추가했습니다.
* 여러 검색어를 지원하며 임무 이름, 번역, 보상, 메모 및 번호로 검색할 수 있습니다.
* 임무가 완료된 것으로 추정되면 상단에 **「완료된 임무가 있습니다」** 가 즉시 표시됩니다.
* 왼쪽 임무 버튼에 현재 보상 수령 대기 중인 임무 수를 표시합니다.
* 최신 임무 API의 전체 동기화 로직을 개선하여 페이지를 넘길 때 임무가 누락되는 일을 줄였습니다.

> ※ 임무 완료 상태는 주로 Yahagi의 로컬 기록을 바탕으로 추정합니다. 다른 기기에서 임무를 완료하면 이 기기에서 전체 기록을 얻지 못할 수 있으므로, 표시 결과에 다소 차이가 있을 수 있습니다.

---

## **5. noro6 / DeckBuilder 내보내기 최적화**

제공권 시뮬레이터 및 DeckBuilder 내보내기 기능을 다시 점검하고 정확도를 높였습니다.

주요 수정 및 개선:

* 칸무스의 근대화개수 강화 능력치를 더 완전하게 내보냅니다.
* 보강증설 및 특수 강화 아이템을 지원합니다.
* **탑재 수가 0인 슬롯**을 포함하여 실제 탑재 수를 정확하게 유지합니다.
* 빈 장비 슬롯이 압축되어 장비 위치가 어긋나던 문제를 수정했습니다.
* 기지항공대 상태, 확장된 기지 및 중대 슬롯의 내보내기를 최적화했습니다.
* 연속으로 장비를 바꿀 때 일부 능력치가 동기화되지 않을 수 있던 문제를 수정했습니다.

내보내기 결과가 이제 noro6 원본의 해석 로직에 더욱 가까워졌습니다.

---

## **6. 왼쪽 메뉴 표시 최적화**

왼쪽 메뉴에 실시간 상태 표시를 더 추가했습니다.

* **임무 버튼**
  현재 완료 / 보상 수령 대기 상태인 임무 수를 표시합니다.
  ※ Yahagi의 로컬 캐시 기록에 의존하므로 다른 기기에서 조작하면 실제 상황과 표시가 다를 수 있습니다.

* **원정 버튼**
  현재 진행 중인 원정 수를 표시합니다.

* **수리 버튼**
  현재 수리 중인 칸무스 수를 표시합니다.

* **건조 버튼**
  현재 건조가 완료되어 수령을 기다리는 칸무스 수를 표시합니다.

---

# **2. 세부 최적화 및 문제 수정**

여러 세부 사항도 함께 최적화했습니다.

* **원정 알림 최적화**
  함대가 다시 원정에 출발하면 해당 함대의 기존 자연 피로 회복 알림을 자동으로 제거하여 불필요한 알림을 방지합니다.

* **입거 화면 최적화**
  야마토 개2, 무사시 개2 등 HP가 세 자리인 칸무스가 수리 화면에서 줄바꿈되거나 잘리던 문제를 수정했습니다.

* **기지항공대 카드 대응**
  일부 좁은 화면 및 폴더블 기기에서 텍스트가 넘치던 문제를 수정했습니다.

* **출격 준비 점검 최적화**
  홈 화면 함대 요약의 출격 전 상태 점검과 알림 표시를 조정했습니다.

* **글꼴 및 다국어 최적화**
  대체 글꼴 적용 방식을 개선하고 임무 및 일부 팝업의 다국어 표시를 더욱 보완했습니다.

---

# **3. 알려진 문제 및 사용 권장 사항**

* **편성 이미지 생성**과 **noro6 / DeckBuilder 내보내기**는 모두 로컬 모항 데이터에 의존합니다.
  사용 전에 게임 모항에 진입하여 한 번 새로고침하는 것을 권장합니다.

* 편성 이미지를 저장할 때 시스템 사진 앨범 / 미디어 저장 기능을 사용합니다.
  Android 10 이상은 보통 추가 저장소 권한이 필요하지 않습니다. 이전 Android 버전에서는 시스템 안내에 따라 권한을 허용해 주세요.

* **「표시 지역이 제한되었습니다」 우회 기능**에는 무한 재시도 방지 장치가 있으며, 한 세션당 자동 시도는 최대 한 번입니다.
  현재 네트워크 출구 자체에서 게임 서비스에 접근할 수 없다면 제한 페이지에 계속 머무를 수 있습니다. 이 경우 프록시 또는 네트워크 환경을 먼저 확인해 주세요.

* 시마카제GO는 현재도 **기본 지원이 아닌 상태**입니다. 시마카제GO가 이후 API, 캐시 방식 또는 접근 규칙을 변경하면 관련 호환성도 달라질 수 있습니다.

---

긴급 버전 테스트 과정에서 의견과 도움을 보내 주신 제독 여러분께 감사드립니다.

v1.0.7은 예정에 앞서 임시로 출시한 특별 버전이며, 일부 기능은 원래 후속 버전 개발 계획에 있던 것입니다. 사용 중 이상, 호환 문제 또는 기타 버그를 발견하면 계속 의견을 보내 주세요.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.7/README.ko.md`},en:{body:`This update is an **emergency special release**.

As **ACGP is currently no longer working normally**, many admirals have recently asked whether Yahagi can be used with **Shimakaze GO (岛风GO)**. Some admirals using Shimakaze GO have also encountered the **“Display region is restricted”** issue.

We have therefore urgently added a **workaround for the “Display region is restricted” issue**, and included some features that have already been developed and are ready for early release, bringing you **Yahagi v1.0.7**.

Please pay particular attention to the following:

**Shimakaze GO does not currently support Yahagi natively.**

This update only adds a compatibility workaround on Yahagi's side, allowing Shimakaze GO to work with Yahagi in some situations. It does not mean the two are fully integrated, and normal operation cannot be guaranteed in 100% of environments.

Several admirals have taken part in practical testing, and their feedback shows that **the new workaround already allows successful game login in Yahagi when used with Shimakaze GO**.

However, to **use all of Shimakaze GO's features fully** in Yahagi in the future, Shimakaze GO would still need to **add Yahagi to its supported application whitelist** to provide more complete and stable compatibility.

At this stage, Shimakaze GO functionality is therefore still **compatibility support / a temporary workaround**. Actual results may vary by device, network environment, and Shimakaze GO version.

---

## **Resolving “Display region is restricted” with Shimakaze GO / other proxies**

If you see **“Display region is restricted”** while using **Shimakaze GO**, first disable these options in Shimakaze GO:

* **Use remote cache (使用远端缓存)**
* **Full encyclopedia feature (全图鉴功能)**

These features may **conflict with Yahagi's local caching mechanism**, resulting in **“Display region is restricted”**.

If you have disabled Shimakaze GO's **Use remote cache** and **Full encyclopedia feature** but still see **“Display region is restricted”**, or encounter the same issue with another proxy tool:

Go to **Yahagi → Network settings**, enable **Bypass** at the very bottom of the page, and then refresh the game.

Based on testing feedback so far, enabling the workaround resolves **the vast majority of “Display region is restricted” cases**.

Admirals using Shimakaze GO are advised to first keep **remote cache and the full encyclopedia feature disabled** when using it with Yahagi. If “Display region is restricted” still appears, enable Bypass and try again to reduce cache conflicts and regional restriction issues.

---

In addition to this emergency compatibility work, v1.0.7 adds **fleet composition image generation, ship stat pop-up cards, account data isolation, a quest system upgrade, noro6 / DeckBuilder export improvements, and enhanced sidebar status displays**, along with adjustments to various interface and stability issues.

---

# **1. New features and core improvements**

## **1. New Fleet composition image feature**

Added **Composition image** to the Toolbox, allowing you to generate a high-resolution tall image of fleet and land-based air squadron configurations with one tap.

Main features:

* Freely select up to **4 fleets**, with support for seven-ship striking forces.
* Include **land-based air squadrons** from a selected map area at the same time.
* Display ship artwork, level, luck, equipment, improvement levels, proficiency, reinforcement expansion, aircraft counts, and more.
* Choose among three aircraft count displays: **Hidden / Current aircraft / Maximum aircraft**.
* Save a high-resolution PNG directly to the system photo gallery.

---

## **2. Ship stat pop-up cards in Battle prediction**

Tap a friendly or enemy ship in **Battle prediction** or the real-time battle panel to view detailed information.

The cards show:

* Current firepower, torpedo, anti-air, and armor stats.
* Current equipment and aircraft counts in each slot.
* Enemy ship stats calculated from both base values and equipment effects.
* elite / flagship status directly.
* Cards adjust automatically to their screen position and close automatically when switching pages or scrolling.

---

## **3. Complete data isolation between accounts**

Rebuilt the underlying data storage mechanism for users with multiple accounts.

The following data is now saved independently for each account:

* Fleet and inventory data
* Sortie and battle records
* Quest progress
* Construction / development records
* Remembered formations
* Expedition and improvement favorites
* New ship locking exclusion lists, and more

Common resources such as ship and equipment master data, map data, and the game cache remain shared to avoid taking up duplicate storage space.

Also improved account switching logic to reduce data mixing between accounts and incorrectly triggered notifications from a previous account.

---

## **4. Comprehensive quest system upgrade**

The quest system has undergone a major restructuring in this update.

Main changes:

* More detailed quest states:
  **Not accepted / In progress / Rewards ready / Estimated complete / Locked**
* Quest progress estimation logic is now more closely aligned with the **Poi quest plugin**.
* Added an **Accepted only** quick filter.
* Search supports multiple keywords across quest names, translations, rewards, notes, and IDs.
* When a quest is estimated to be complete, **“A quest has been completed”** appears immediately at the top.
* The left-side quest button shows the current number of quests awaiting reward collection.
* Improved full synchronization logic for the modern quest API, reducing quests missed when changing pages.

> ※ Quest completion is mainly estimated from Yahagi's local records. If you complete quests on another device, this device may not receive the full records, so the displayed results may differ somewhat from the actual state.

---

## **5. noro6 / DeckBuilder export improvements**

Rechecked the Air Superiority Simulator and DeckBuilder export features and improved their accuracy.

Main fixes and improvements:

* More complete export of ship modernization stat increases.
* Support for reinforcement expansion and special stat enhancement items.
* Accurate preservation of actual aircraft counts, including **slots with 0 aircraft**.
* Fixed equipment shifting into the wrong positions when empty slots were compacted.
* Improved export of land-based air squadron states, expanded bases, and squadron slots.
* Fixed some stats potentially becoming out of sync when changing equipment repeatedly.

Export results are now more closely aligned with noro6's original parsing logic.

---

## **6. Improved left-side menu displays**

Added more real-time status indicators to the left-side menu.

* **Quest button**
  Shows the current number of completed quests / quests awaiting reward collection.
  ※ This relies on Yahagi's local cached records. Actions on another device may cause the display to differ from the actual state.

* **Expedition button**
  Shows the number of expeditions currently in progress.

* **Repair button**
  Shows the number of ships currently under repair.

* **Construction button**
  Shows the number of ships whose construction is complete and which are waiting to be collected.

---

# **2. Detail improvements and bug fixes**

This update also improves several details:

* **Expedition notifications**
  When a fleet departs on another expedition, its previous natural morale recovery reminder is automatically removed to avoid unnecessary notifications.

* **Repair dock interface**
  Fixed line wrapping or truncation on the repair screen for ships with three-digit HP, such as Yamato Kai Ni and Musashi Kai Ni.

* **Land-based air squadron cards**
  Fixed text overflow on some narrow-screen and foldable devices.

* **Sortie preparation checks**
  Adjusted pre-sortie status checks and alert displays in the home page fleet summary.

* **Fonts and localization**
  Improved font fallback and added further localized displays for quests and some dialogs.

---

# **3. Known issues and usage advice**

* **Composition image generation** and **noro6 / DeckBuilder export** both rely on local home port data.
  Enter the game's home port and refresh the data once before using them.

* Saving composition images uses the system photo gallery / media storage functionality.
  Android 10 and later usually require no additional storage permission. On older Android versions, grant permission as prompted by the system.

* The **“Display region is restricted” workaround** includes protection against endless retries, allowing at most one automatic attempt per session.
  If your current network exit cannot reach the game service itself, you may remain on the restriction page. Check your proxy or network environment first in that case.

* Shimakaze GO remains **without native support for Yahagi**. If its APIs, caching mechanism, or access rules change in the future, compatibility may change as well.

---

Thank you to all admirals who provided feedback and assistance while testing this emergency release.

As v1.0.7 is a special version released ahead of schedule at short notice, some of its features were originally planned for later versions. Please continue to report any abnormalities, compatibility issues, or other bugs you encounter.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.7/README.en.md`}}},{id:383614142,tag:`1.0.6`,name:`ヤハギ v1.0.6`,publishedAt:`2026-09-06T14:32:49Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.6`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.6/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.6/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.6/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.6/README.ko.md)

# ヤハギ v1.0.6 更新说明

**本次更新主要新增 **装备开发查询、装备与舰娘双向适配查询、出击记录战斗详情、noro6导出、出击记录** 等功能，并进一步完善多语言与界面体验。**
**并且受到多数提督反馈，高刷模式已经进行优化然后重新加入。**

**并且感谢 Github ID @Kutinana 同志自发性做了个IOS移植版本，但是该版本由第三方自行移植和制作。我手上也没有IOS设备，所以对于该IOS版本的无法做出测试，并且可能存在与我开发的安卓版本存在版本差异，未知BUG，和功能缺失情况。**

---

## 一、新增与优化

### 1. 装备开发查询

在「建造」页面新增装备开发功能，支持：

* 输入配方查看可开发装备及概率
* 选择目标装备反推推荐配方与秘书舰

### 2. 装备 / 舰娘双向适配

新增：

* 装备 → 可装备舰娘查询
* 舰娘 → 可装备装备查询

### 3. 出击记录战斗详情

航海日志新增战斗详情，可查看昼战、夜战、航空战、支援、基地航空队等战斗过程及伤害信息。

同时优化出击记录加载方式，提升大量历史记录下的查询性能。

### 4. 舰队配置导出

工具箱新增舰队导出功能，支持：

* DeckBuilder v4 JSON
* noro6 制空权模拟器

### 5. 未卜先知与战斗提醒

* 新增节点阵形记录，可以查看该节点上一次战斗的使用整形
* 支持按损伤状态设置闪屏与震动提醒
* 优化大破进击判定

### 6. 界面与性能优化

* 重构资源趋势页面
* 主界面支持左右布局切换
* 支持恢复默认卡片排序
* 新增 4 档帧率模式：30 FPS / 自动 60 FPS / 持续 60 FPS / 高刷解锁
**高刷模式伴随一定风险性，请酌情使用。**

### 7. 多语言优化

对简体中文、繁體中文、日本語共 **895+ 词条**进行重新审查，修正 100+ 处翻译与显示问题。

---

## 二、问题修复

* 修复航海日志部分掉落记录遗漏
* 修复夜战节点制空状态记录异常
* 修复司令部退避状态同步问题
* 修复联合舰队二队旗舰大破误报警告
* 修复出击记录筛选与分页异常
* 修复装备开发工作台部分加载问题
* 修复资源趋势采样及卡顿问题
* 修复多处翻译、排版与触控问题


---

感谢各位提督一直以来的测试与反馈！

**Yahagi 会继续努力，为大家带来更顺手的移动端舰 C 体验。**
`,notes:{"zh-CN":{body:`**本次更新主要新增 **装备开发查询、装备与舰娘双向适配查询、出击记录战斗详情、noro6导出、出击记录** 等功能，并进一步完善多语言与界面体验。**
**并且受到多数提督反馈，高刷模式已经进行优化然后重新加入。**

**并且感谢 Github ID @Kutinana 同志自发性做了个IOS移植版本，但是该版本由第三方自行移植和制作。我手上也没有IOS设备，所以对于该IOS版本的无法做出测试，并且可能存在与我开发的安卓版本存在版本差异，未知BUG，和功能缺失情况。**

---

## 一、新增与优化

### 1. 装备开发查询

在「建造」页面新增装备开发功能，支持：

* 输入配方查看可开发装备及概率
* 选择目标装备反推推荐配方与秘书舰

### 2. 装备 / 舰娘双向适配

新增：

* 装备 → 可装备舰娘查询
* 舰娘 → 可装备装备查询

### 3. 出击记录战斗详情

航海日志新增战斗详情，可查看昼战、夜战、航空战、支援、基地航空队等战斗过程及伤害信息。

同时优化出击记录加载方式，提升大量历史记录下的查询性能。

### 4. 舰队配置导出

工具箱新增舰队导出功能，支持：

* DeckBuilder v4 JSON
* noro6 制空权模拟器

### 5. 未卜先知与战斗提醒

* 新增节点阵形记录，可以查看该节点上一次战斗的使用整形
* 支持按损伤状态设置闪屏与震动提醒
* 优化大破进击判定

### 6. 界面与性能优化

* 重构资源趋势页面
* 主界面支持左右布局切换
* 支持恢复默认卡片排序
* 新增 4 档帧率模式：30 FPS / 自动 60 FPS / 持续 60 FPS / 高刷解锁
**高刷模式伴随一定风险性，请酌情使用。**

### 7. 多语言优化

对简体中文、繁體中文、日本語共 **895+ 词条**进行重新审查，修正 100+ 处翻译与显示问题。

---

## 二、问题修复

* 修复航海日志部分掉落记录遗漏
* 修复夜战节点制空状态记录异常
* 修复司令部退避状态同步问题
* 修复联合舰队二队旗舰大破误报警告
* 修复出击记录筛选与分页异常
* 修复装备开发工作台部分加载问题
* 修复资源趋势采样及卡顿问题
* 修复多处翻译、排版与触控问题


---

感谢各位提督一直以来的测试与反馈！

**Yahagi 会继续努力，为大家带来更顺手的移动端舰 C 体验。**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.6/README.md`},"zh-TW":{body:`**本次更新主要新增裝備開發查詢、裝備與艦娘雙向適配查詢、出擊記錄戰鬥詳情、noro6 匯出、出擊記錄等功能，並進一步完善多語言與介面體驗。**
**另外，根據多數提督的回饋，高更新率模式已經過最佳化並重新加入。**

**也感謝 GitHub ID @Kutinana 同志自發製作了 iOS 移植版本，但該版本由第三方自行移植與製作。我手上沒有 iOS 裝置，因此無法測試該 iOS 版本，而且它與我開發的 Android 版本之間可能存在版本差異、未知 BUG 及功能缺失。**

---

## 一、新增與最佳化

### 1. 裝備開發查詢

在「建造」頁面新增裝備開發功能，支援：

* 輸入配方，查看可開發裝備及機率
* 選擇目標裝備，反查推薦配方與秘書艦

### 2. 裝備／艦娘雙向適配

新增：

* 裝備 → 可裝備艦娘查詢
* 艦娘 → 可裝備裝備查詢

### 3. 出擊記錄戰鬥詳情

航海日誌新增戰鬥詳情，可查看日戰、夜戰、航空戰、支援、基地航空隊等戰鬥過程及傷害資訊。

同時最佳化出擊記錄的載入方式，提升大量歷史記錄下的查詢效能。

### 4. 艦隊配置匯出

工具箱新增艦隊匯出功能，支援：

* DeckBuilder v4 JSON
* noro6 制空權模擬器

### 5. 未卜先知與戰鬥提醒

* 新增節點陣形記錄，可查看該節點上一次戰鬥使用的陣形
* 支援依損傷狀態設定閃屏與震動提醒
* 最佳化大破進擊判定

### 6. 介面與效能最佳化

* 重構資源趨勢頁面
* 主介面支援左右配置切換
* 支援恢復預設卡片排序
* 新增 4 種幀率模式：30 FPS／自動 60 FPS／持續 60 FPS／高更新率解鎖

**高更新率模式伴隨一定風險，請酌情使用。**

### 7. 多語言最佳化

重新審查簡體中文、繁體中文、日本語共 **895+ 詞條**，修正 100+ 處翻譯與顯示問題。

---

## 二、問題修正

* 修正航海日誌部分掉落記錄遺漏
* 修正夜戰節點制空狀態記錄異常
* 修正司令部退避狀態同步問題
* 修正聯合艦隊第二艦隊旗艦大破誤報警告
* 修正出擊記錄篩選與分頁異常
* 修正裝備開發工作台部分載入問題
* 修正資源趨勢取樣及卡頓問題
* 修正多處翻譯、排版與觸控問題

---

感謝各位提督一直以來的測試與回饋！

**Yahagi 會繼續努力，為大家帶來更順手的行動裝置艦 C 體驗。**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.6/README.zh-Hant.md`},ja:{body:`**今回のアップデートでは、主に装備開発検索、装備と艦娘の双方向装備可否検索、出撃記録の戦闘詳細、noro6 へのエクスポート、出撃記録などの機能を追加し、多言語表示や画面の使い勝手もさらに改善しました。**
**また、多くの提督からのご意見を受け、高リフレッシュレートモードを最適化したうえで再追加しました。**

**GitHub ID @Kutinana さんが自主的に iOS 移植版を制作してくださったことにも感謝します。ただし、このバージョンは第三者が独自に移植・制作したものです。私は iOS 端末を所有していないため、この iOS 版のテストはできません。また、私が開発している Android 版とのバージョンの相違、未知の不具合、機能の不足がある可能性があります。**

---

## 一、新機能・改善

### 1. 装備開発検索

「建造」ページに装備開発機能を追加しました。以下に対応しています。

* レシピを入力し、開発可能な装備とその確率を確認
* 目標装備を選択し、推奨レシピと秘書艦を逆引き

### 2. 装備／艦娘の双方向装備可否検索

以下を追加しました。

* 装備 → 装備可能な艦娘の検索
* 艦娘 → 装備可能な装備の検索

### 3. 出撃記録の戦闘詳細

航海日誌に戦闘詳細を追加し、昼戦、夜戦、航空戦、支援、基地航空隊などの戦闘経過とダメージ情報を確認できるようになりました。

出撃記録の読み込み方法も改善し、大量の履歴がある場合の検索性能を向上させました。

### 4. 艦隊編成のエクスポート

ツールボックスに艦隊エクスポート機能を追加しました。以下に対応しています。

* DeckBuilder v4 JSON
* noro6 制空権シミュレータ

### 5. 未卜先知・戦闘通知

* マスごとの陣形記録を追加し、そのマスの前回の戦闘で使用した陣形を確認可能に
* 損傷状態に応じた画面フラッシュと振動の通知設定に対応
* 大破進撃の判定を改善

### 6. 画面・パフォーマンスの改善

* 資源推移ページを再構成
* メイン画面の左右レイアウト切り替えに対応
* カードの並び順を初期状態に戻す機能に対応
* 4 種類のフレームレートモードを追加：30 FPS／自動 60 FPS／常時 60 FPS／高リフレッシュレート解放

**高リフレッシュレートモードには一定のリスクが伴います。状況に応じてご利用ください。**

### 7. 多言語表示の改善

簡体字中国語、繁体字中国語、日本語の計 **895 項目以上**を見直し、翻訳や表示の問題を 100 か所以上修正しました。

---

## 二、不具合修正

* 航海日誌で一部のドロップ記録が欠落する問題を修正
* 夜戦マスの制空状態が正しく記録されない問題を修正
* 司令部施設による退避状態の同期問題を修正
* 連合艦隊の第二艦隊旗艦が大破した際に誤った警告が出る問題を修正
* 出撃記録の絞り込み・ページ切り替えの不具合を修正
* 装備開発ワークベンチの一部読み込み問題を修正
* 資源推移のサンプリングと動作の引っかかりを修正
* 各所の翻訳、レイアウト、タッチ操作の問題を修正

---

いつもテストとフィードバックにご協力いただき、ありがとうございます！

**Yahagi はこれからも、モバイル端末でより快適に艦これを楽しめるよう改善を続けていきます。**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.6/README.ja.md`},ko:{body:`**이번 업데이트에서는 장비 개발 조회, 장비와 칸무스 간 양방향 장착 가능 여부 조회, 출격 기록의 전투 상세, noro6 내보내기, 출격 기록 등의 기능을 주로 추가하고 다국어 및 화면 사용 경험을 더욱 개선했습니다.**
**또한 많은 제독님의 의견을 받아 고주사율 모드를 최적화한 뒤 다시 추가했습니다.**

**자발적으로 iOS 이식 버전을 제작해 주신 GitHub ID @Kutinana 님께도 감사드립니다. 다만 이 버전은 제3자가 독자적으로 이식하고 제작한 것입니다. 저는 iOS 기기가 없어 해당 iOS 버전을 테스트할 수 없으며, 제가 개발하는 Android 버전과 버전 차이, 알려지지 않은 버그 및 일부 기능 누락이 있을 수 있습니다.**

---

## 1. 새 기능 및 최적화

### 1. 장비 개발 조회

「건조」 페이지에 장비 개발 기능을 추가했습니다. 다음 기능을 지원합니다.

* 레시피를 입력하여 개발 가능한 장비와 확률 확인
* 목표 장비를 선택하여 권장 레시피와 비서함 역조회

### 2. 장비 / 칸무스 양방향 장착 가능 여부 조회

다음 기능을 추가했습니다.

* 장비 → 장착 가능한 칸무스 조회
* 칸무스 → 장착 가능한 장비 조회

### 3. 출격 기록의 전투 상세

항해 일지에 전투 상세를 추가하여 주간전, 야간전, 항공전, 지원, 기지항공대 등의 전투 과정과 피해 정보를 확인할 수 있습니다.

출격 기록을 불러오는 방식도 최적화하여 과거 기록이 많을 때 조회 성능을 높였습니다.

### 4. 함대 편성 내보내기

도구 상자에 함대 내보내기 기능을 추가했습니다. 다음 형식을 지원합니다.

* DeckBuilder v4 JSON
* noro6 제공권 시뮬레이터

### 5. 전투 예측 및 전투 알림

* 지점별 진형 기록을 추가하여 해당 지점의 이전 전투에서 사용한 진형 확인 가능
* 손상 상태별 화면 점멸 및 진동 알림 설정 지원
* 대파 상태에서의 진격 판정 개선

### 6. 화면 및 성능 최적화

* 자원 추이 페이지 재구성
* 메인 화면의 좌우 레이아웃 전환 지원
* 카드 순서를 기본값으로 복원하는 기능 지원
* 네 가지 프레임 속도 모드 추가: 30 FPS / 자동 60 FPS / 상시 60 FPS / 고주사율 제한 해제

**고주사율 모드에는 일정한 위험이 따릅니다. 상황에 맞게 사용해 주세요.**

### 7. 다국어 최적화

중국어 간체, 중국어 번체, 일본어의 **895개 이상 항목**을 다시 검토하고 100곳 이상의 번역 및 표시 문제를 수정했습니다.

---

## 2. 문제 수정

* 항해 일지의 일부 드롭 기록 누락 수정
* 야간전 지점의 제공 상태 기록 이상 수정
* 사령부 퇴피 상태 동기화 문제 수정
* 연합함대 제2함대 기함의 대파 경고가 잘못 표시되던 문제 수정
* 출격 기록 필터 및 페이지 구분 이상 수정
* 장비 개발 작업대의 일부 로딩 문제 수정
* 자원 추이 샘플링 및 끊김 문제 수정
* 여러 번역, 레이아웃 및 터치 조작 문제 수정

---

항상 테스트와 의견을 보내 주시는 제독 여러분께 감사드립니다!

**Yahagi는 더 편리한 모바일 칸코레 경험을 제공하기 위해 계속 노력하겠습니다.**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.6/README.ko.md`},en:{body:`**This update mainly adds equipment development lookup, two-way compatibility lookup between equipment and ships, battle details for sortie records, noro6 export, and sortie records, while further improving localization and the interface experience.**
**Following feedback from many admirals, high refresh rate mode has also been optimized and added back.**

**Thank you as well to GitHub user @Kutinana for independently making an iOS port. However, this version was ported and produced by a third party. I do not own an iOS device, so I cannot test this iOS version. It may also differ in version from the Android version I develop, contain unknown bugs, or lack some features.**

---

## 1. New features and improvements

### 1. Equipment development lookup

Added equipment development functionality to the Construction page, supporting:

* Entering a recipe to see the equipment that can be developed and its probabilities
* Selecting target equipment to find recommended recipes and secretary ships

### 2. Two-way equipment / ship compatibility lookup

Added:

* Equipment → ships that can equip it
* Ship → equipment it can equip

### 3. Battle details for sortie records

Added battle details to the logbook, showing battle sequences and damage information for day battles, night battles, aerial battles, support, land-based air squadrons, and more.

Also improved how sortie records are loaded, making queries faster when there are large amounts of historical records.

### 4. Fleet configuration export

Added fleet export to the Toolbox, supporting:

* DeckBuilder v4 JSON
* The noro6 Air Superiority Simulator

### 5. Battle prediction and battle alerts

* Added formation records for each node, allowing you to check the formation used in the previous battle at that node
* Added screen flash and vibration alert settings based on damage status
* Improved the judgment for advancing with heavily damaged ships

### 6. Interface and performance improvements

* Rebuilt the resource trends page
* Added switching between left and right layouts on the main screen
* Added restoring the default card order
* Added four frame rate modes: 30 FPS / Automatic 60 FPS / Continuous 60 FPS / Unlocked high refresh rate

**High refresh rate mode carries some risk. Please use it at your discretion.**

### 7. Localization improvements

Reviewed **895+ entries** across Simplified Chinese, Traditional Chinese, and Japanese, correcting more than 100 translation and display issues.

---

## 2. Bug fixes

* Fixed some missing drop records in the logbook
* Fixed incorrect air superiority state records for night battle nodes
* Fixed synchronization of evacuation status from the fleet command facility
* Fixed false heavy damage warnings for the second fleet flagship in combined fleets
* Fixed sortie record filtering and pagination issues
* Fixed some loading issues in the equipment development workbench
* Fixed resource trend sampling and stuttering issues
* Fixed various translation, layout, and touch input issues

---

Thank you to all admirals for your continued testing and feedback!

**Yahagi will keep working to make KanColle more convenient to play on mobile devices.**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.6/README.en.md`}}},{id:378520245,tag:`1.0.5`,name:`ヤハギ v1.0.5`,publishedAt:`2026-08-28T13:56:44Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.5`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.5/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.5/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.5/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.5/README.ko.md)

# ヤハギ v1.0.5 更新说明

**本次更新主要新增 Android 原生通知、框架刷新、后台游戏保持、OOI 连接、新舰提醒与未持有一览、陆基简报、未卜先知战斗预测及 KCWiki 数据贡献，并进一步优化原生直连、资源缓存与运行稳定性。**

**并且感谢 Github ID @Kutinana 同志自发性做了个IOS移植版本，但是该版本由第三方自行移植和制作。我手上也没有IOS设备，所以对于该IOS版本的无法做出测试，并且可能存在与我开发的安卓版本存在版本差异，未知BUG，和功能缺失情况。**

## 一、新增功能与功能增强

### 1. 全新 Android 原生通知中心

新增「设置 → 通知」页面，可统一管理远征、入渠、建造、明石泊地修理、疲劳恢复及刷闪提醒。

* 支持查看通知权限、精确提醒权限及通知渠道状态。
* 支持准点、提前 30 秒、提前 60 秒提醒。
* 明石泊地修理支持「首轮 20 分钟」「全部修满」「双阶段提醒」。
* 通知栏可集中显示任务进度、百分比和实时倒计时。
* 快速建造、快速修复或舰队状态变化后，会自动撤销失效提醒。
* 应用被普通后台清理后，已交由 Android 系统的提醒仍可继续工作。

同时新增「后台保持游戏」开关，默认开启。进入游戏后切至后台时，Yahagi 会通过常驻通知提高游戏进程与 WebView 的存活优先级，降低被系统回收的概率。

该功能可能增加耗电，可在「设置 → 画面与声音」中关闭。

### 2. 新增 Yahagi / OOI 双连接

在「设置 → 网络」新增游戏连接选择：

* **Yahagi 连接：** 使用 DMM 官方登录入口，默认推荐。
* **OOI 连接（实验性）：** 打开 \`ooi.moe\` 登录页，由用户自行选择模式 1、3 或 4。

本版本补充 OOI 模式 1 的 KCSAPI 捕获和游戏画面适配。切换连接后，舰队、任务、战斗、日志、通知及资源缓存等 Yahagi 功能仍可继续使用。

OOI 登录页面由第三方提供。Yahagi **不会读取、保存或自动填写账号、密码、Cookie 和登录令牌**。其可用性及兼容性取决于第三方服务与用户网络环境。

### 3. 游戏刷新与原生直连优化

工具栏刷新现在提供：

* **刷新游戏页面：** 重新加载整个页面。
* **重新载入游戏：** 仅重新载入舰 C 游戏框架，速度更快，但可能出现猫袭或网络异常。

原生直连模式新增弹窗快照，打开制空、索敌等弹窗时，不再容易出现覆盖弹窗、遮罩黑屏等问题。

同时优化：

* 后台恢复与页面初始化重试；
* DMM 新版游戏入口识别；
* 游戏画面缩放与尺寸恢复；
* 顶部栏残留和底部裁切；
* 加载过程中缩放被重置的问题。

应用内截图、设置保存、网络、缓存及错误提示也统一移动至顶部胶囊区域，避免遮挡游戏画面。

### 4. 新增「新舰提醒」与「未持有一览」

持有一览新增「持有 / 未持有」及「舰娘 / 装备」切换，可查看当前账号的收集情况，并新增新舰上锁提醒。

* 未持有舰娘按改造链归并，不重复计算不同改造形态。
* 支持舰种、装备类型筛选及一键重置。
* 可将不需要提醒的舰系加入排除名单，并按账号分别保存。
* 支持识别掉落、活动奖励、任务奖励及建造获得的新舰。
* 战斗获得新舰时，会在返回母港后通过游戏内提示、系统通知及振动提醒上锁，避免遮挡结算演出。
* 未持有装备按当前仓库及舰娘装备槽统计，仅用于查看，不产生提醒。

这里的「未持有」表示当前账号没有持有对应舰系，并不代表图鉴中的历史首次获得记录。

### 5. 新增首页「陆基简报」

首页新增陆基航空队状态卡片，可查看：

* 出击、防空、休息、待机、退避等行动状态；
* 制空值、熟练度区间及有效航程；
* 4 个中队的装备、搭载数和槽位状态；
* 缺机、配置转换、黄疲劳、红疲劳提示；
* 基地空袭后的当前 HP 与损伤状态。

### 6. 优化「未卜先知」POI 战斗预测

POI 预测引擎改为从开战状态完整重放战斗阶段，减少前一阶段错误状态继续影响后续计算。

本次重点完善：

* 通常舰队、联合舰队、敌联合舰队及 7 舰游击部队；
* 昼战、夜战、航空战、基地航空队、支援及开幕阶段顺序；
* NPC 友军与玩家舰队状态隔离；
* 多段攻击与损管触发；
* 要员、女神的单次消费判定；
* 战果等级、MVP 与异常目标判定。

遇到未知阶段或数据不足时，会优先标记为「未确认」，避免显示看似确定但可能错误的结果。

完整模式同时新增战前敌方立绘，并在双方 HP 条加入 **25% / 50% / 75%** 损伤刻度，方便判断大破、中破、小破与健全状态。

### 7. 舰队状态与大破提醒增强

* 首页编队简报和舰队中心的「最低疲劳」可点击切换为恢复至 Cond 49 的倒计时，并自动保存显示模式。
* 点击制空指标可查看「最小」「最大」「无熟练度加成」3 项制空值。
* 补充日向改二、海防舰、轻空母、护卫空母等多类先制对潜判定。
* 大破提醒改为战果阶段先记录风险，选择进击后再明确警告；撤退或返回母港时不再误报。

### 8. 战果中心与资源缓存优化

战果中心新增「本月 / 今日」出击统计切换，并修复部分多路线海域 Boss 路线漏记。

同时优化日结、换月、季度及年度战果任务的状态迁移和预计战果计算。

资源缓存方面：

* 修复完整缓存长时间未联网校验后被误判为过期的问题。
* 原「过期」状态调整为「待校验」。
* 待校验文件仍保留在本地，不会自动删除。
* 完整性检查会分别显示缺失、损坏和待校验数量。

### 9. 帧率、输入与界面调整

* 应用菜单、列表和页面滚动使用当前屏幕支持的最高刷新率。
* 舰 C 游戏本体继续独立使用 30 / 60 FPS 控制。
* 自动模式最高 60 FPS，低耗模式固定 30 FPS。
* 移除游戏未限速高刷模式，旧设置自动迁移为「自动」。
* 优化折叠屏、窗口尺寸变化及键盘弹出时的输入稳定性。
* 移除原生直连模式长按游戏画面时的蓝色高亮。

### 10. 新增「KCWiki 数据贡献」

为了支持 KCWiki 长期以来对于社区和各位玩家的贡献，Yahagi 也正式成为 **KCWiki 的数据合作站点**。

在「设置 → 数据」新增 KCWiki 数据贡献，当前版本默认开启，可随时关闭。

开启后仅发送：

* 海域带路；
* 任务前置；
* 战斗；
* 友军；
* 陆航 / 基地空袭；
* 装备改修数据。

不会发送：

* DMM 登录令牌；
* Cookie；
* 完整请求头；
* 登录表单；
* Yahagi 本地设置。

设置页可查看等待、上传成功、上传失败及丢弃数量。

关闭后不会继续收集、组包或发送 KCWiki 专属数据，也不会影响游戏和本地辅助功能。

> **需要注意：KCWiki 当前接收服务器仍使用未加密 HTTP。**
> 如果不希望参与数据贡献，可在「设置 → 数据」中关闭。

## 二、性能与稳定性优化

* 通知倒计时和准点提醒改由 Android 系统负责，减少后台刷新与额外唤醒。
* 后台游戏保持与任务进度共用同一套前台服务，减少重复常驻通知。
* KCWiki 上传使用独立队列，服务器异常不会阻塞游戏状态和战斗记录。
* 大型游戏数据解析超时后可自动恢复，避免后续事件长期卡住。
* 原生 WebView 加强页面初始化、弹窗覆盖及前后台切换时的失效任务清理。
* 应用 UI 与游戏帧率独立控制，在提高界面流畅度的同时控制发热与功耗。

## 三、问题修复

本版本主要修复：

* DMM 新版入口下顶部栏残留、底部裁切及缩放失效。
* 原生直连后台恢复时偶发初始化超时、黑屏及弹窗层级异常。
* 「重新载入游戏」因跨域限制无法正常工作。
* 远征、入渠、建造、泊地修理及疲劳提醒提前消失、重复或丢失。
* 快速建造、快速修复后旧任务仍残留在通知栏。
* 缓存容量统计异常及大量资源被误标记为过期。
* 航海日志重启后可能重复记录同一次建造。
* 旧任务快照恢复已经移除的任务。
* 部分多路线 Boss 节点战果漏记。
* 7 舰游击部队第 7 舰伤害位置错误。
* NPC 友军伤害错误作用于玩家舰队。
* 多段攻击重复触发损管，以及要员、女神跨节点重复使用。
* 联合舰队、夜战及特殊阶段中的部分目标、MVP 和战果等级错误。
* 折叠屏键盘遮挡、页面挤压及输入弹窗布局不稳定。
* KCWiki 开关切换时刷新游戏页面。
* 未持有舰娘归并、陆航状态、制空公式及多项界面问题。

## 四、已知问题与使用建议

* OOI 为第三方实验性连接，无法保证长期可用性及所有模式兼容性。出现异常时建议先切回 Yahagi 连接对照。
* 通知权限、精确提醒权限及厂商省电策略可能影响提醒送达。设备重启或强行停止应用后，建议重新打开一次 Yahagi 同步任务。
* 后台保持游戏会增加一定耗电，也无法保证 WebView 永远不被系统回收。
* 「未卜先知」属于本地辅助计算，请勿完全替代对实际 HP、退避及损管状态的确认。
* Android 分屏、多窗口及画中画尚未完成全面适配，建议优先使用全屏。
* Google 账号登录 DMM 仍可能受到 WebView 安全限制，建议优先使用其他可用登录方式。

后续将继续根据测试反馈完善通知可靠性、战斗规则、OOI 兼容、原生直连、本地缓存及移动端性能。

非常感谢各位提督一直以来提供的测试、问题反馈、功能建议与支持。

**Yahagi 仍然是个人维护的兴趣项目，也会继续在能力范围内改善移动端舰 C 的使用体验。**
`,notes:{"zh-CN":{body:`**本次更新主要新增 Android 原生通知、框架刷新、后台游戏保持、OOI 连接、新舰提醒与未持有一览、陆基简报、未卜先知战斗预测及 KCWiki 数据贡献，并进一步优化原生直连、资源缓存与运行稳定性。**

**并且感谢 Github ID @Kutinana 同志自发性做了个IOS移植版本，但是该版本由第三方自行移植和制作。我手上也没有IOS设备，所以对于该IOS版本的无法做出测试，并且可能存在与我开发的安卓版本存在版本差异，未知BUG，和功能缺失情况。**

## 一、新增功能与功能增强

### 1. 全新 Android 原生通知中心

新增「设置 → 通知」页面，可统一管理远征、入渠、建造、明石泊地修理、疲劳恢复及刷闪提醒。

* 支持查看通知权限、精确提醒权限及通知渠道状态。
* 支持准点、提前 30 秒、提前 60 秒提醒。
* 明石泊地修理支持「首轮 20 分钟」「全部修满」「双阶段提醒」。
* 通知栏可集中显示任务进度、百分比和实时倒计时。
* 快速建造、快速修复或舰队状态变化后，会自动撤销失效提醒。
* 应用被普通后台清理后，已交由 Android 系统的提醒仍可继续工作。

同时新增「后台保持游戏」开关，默认开启。进入游戏后切至后台时，Yahagi 会通过常驻通知提高游戏进程与 WebView 的存活优先级，降低被系统回收的概率。

该功能可能增加耗电，可在「设置 → 画面与声音」中关闭。

### 2. 新增 Yahagi / OOI 双连接

在「设置 → 网络」新增游戏连接选择：

* **Yahagi 连接：** 使用 DMM 官方登录入口，默认推荐。
* **OOI 连接（实验性）：** 打开 \`ooi.moe\` 登录页，由用户自行选择模式 1、3 或 4。

本版本补充 OOI 模式 1 的 KCSAPI 捕获和游戏画面适配。切换连接后，舰队、任务、战斗、日志、通知及资源缓存等 Yahagi 功能仍可继续使用。

OOI 登录页面由第三方提供。Yahagi **不会读取、保存或自动填写账号、密码、Cookie 和登录令牌**。其可用性及兼容性取决于第三方服务与用户网络环境。

### 3. 游戏刷新与原生直连优化

工具栏刷新现在提供：

* **刷新游戏页面：** 重新加载整个页面。
* **重新载入游戏：** 仅重新载入舰 C 游戏框架，速度更快，但可能出现猫袭或网络异常。

原生直连模式新增弹窗快照，打开制空、索敌等弹窗时，不再容易出现覆盖弹窗、遮罩黑屏等问题。

同时优化：

* 后台恢复与页面初始化重试；
* DMM 新版游戏入口识别；
* 游戏画面缩放与尺寸恢复；
* 顶部栏残留和底部裁切；
* 加载过程中缩放被重置的问题。

应用内截图、设置保存、网络、缓存及错误提示也统一移动至顶部胶囊区域，避免遮挡游戏画面。

### 4. 新增「新舰提醒」与「未持有一览」

持有一览新增「持有 / 未持有」及「舰娘 / 装备」切换，可查看当前账号的收集情况，并新增新舰上锁提醒。

* 未持有舰娘按改造链归并，不重复计算不同改造形态。
* 支持舰种、装备类型筛选及一键重置。
* 可将不需要提醒的舰系加入排除名单，并按账号分别保存。
* 支持识别掉落、活动奖励、任务奖励及建造获得的新舰。
* 战斗获得新舰时，会在返回母港后通过游戏内提示、系统通知及振动提醒上锁，避免遮挡结算演出。
* 未持有装备按当前仓库及舰娘装备槽统计，仅用于查看，不产生提醒。

这里的「未持有」表示当前账号没有持有对应舰系，并不代表图鉴中的历史首次获得记录。

### 5. 新增首页「陆基简报」

首页新增陆基航空队状态卡片，可查看：

* 出击、防空、休息、待机、退避等行动状态；
* 制空值、熟练度区间及有效航程；
* 4 个中队的装备、搭载数和槽位状态；
* 缺机、配置转换、黄疲劳、红疲劳提示；
* 基地空袭后的当前 HP 与损伤状态。

### 6. 优化「未卜先知」POI 战斗预测

POI 预测引擎改为从开战状态完整重放战斗阶段，减少前一阶段错误状态继续影响后续计算。

本次重点完善：

* 通常舰队、联合舰队、敌联合舰队及 7 舰游击部队；
* 昼战、夜战、航空战、基地航空队、支援及开幕阶段顺序；
* NPC 友军与玩家舰队状态隔离；
* 多段攻击与损管触发；
* 要员、女神的单次消费判定；
* 战果等级、MVP 与异常目标判定。

遇到未知阶段或数据不足时，会优先标记为「未确认」，避免显示看似确定但可能错误的结果。

完整模式同时新增战前敌方立绘，并在双方 HP 条加入 **25% / 50% / 75%** 损伤刻度，方便判断大破、中破、小破与健全状态。

### 7. 舰队状态与大破提醒增强

* 首页编队简报和舰队中心的「最低疲劳」可点击切换为恢复至 Cond 49 的倒计时，并自动保存显示模式。
* 点击制空指标可查看「最小」「最大」「无熟练度加成」3 项制空值。
* 补充日向改二、海防舰、轻空母、护卫空母等多类先制对潜判定。
* 大破提醒改为战果阶段先记录风险，选择进击后再明确警告；撤退或返回母港时不再误报。

### 8. 战果中心与资源缓存优化

战果中心新增「本月 / 今日」出击统计切换，并修复部分多路线海域 Boss 路线漏记。

同时优化日结、换月、季度及年度战果任务的状态迁移和预计战果计算。

资源缓存方面：

* 修复完整缓存长时间未联网校验后被误判为过期的问题。
* 原「过期」状态调整为「待校验」。
* 待校验文件仍保留在本地，不会自动删除。
* 完整性检查会分别显示缺失、损坏和待校验数量。

### 9. 帧率、输入与界面调整

* 应用菜单、列表和页面滚动使用当前屏幕支持的最高刷新率。
* 舰 C 游戏本体继续独立使用 30 / 60 FPS 控制。
* 自动模式最高 60 FPS，低耗模式固定 30 FPS。
* 移除游戏未限速高刷模式，旧设置自动迁移为「自动」。
* 优化折叠屏、窗口尺寸变化及键盘弹出时的输入稳定性。
* 移除原生直连模式长按游戏画面时的蓝色高亮。

### 10. 新增「KCWiki 数据贡献」

为了支持 KCWiki 长期以来对于社区和各位玩家的贡献，Yahagi 也正式成为 **KCWiki 的数据合作站点**。

在「设置 → 数据」新增 KCWiki 数据贡献，当前版本默认开启，可随时关闭。

开启后仅发送：

* 海域带路；
* 任务前置；
* 战斗；
* 友军；
* 陆航 / 基地空袭；
* 装备改修数据。

不会发送：

* DMM 登录令牌；
* Cookie；
* 完整请求头；
* 登录表单；
* Yahagi 本地设置。

设置页可查看等待、上传成功、上传失败及丢弃数量。

关闭后不会继续收集、组包或发送 KCWiki 专属数据，也不会影响游戏和本地辅助功能。

> **需要注意：KCWiki 当前接收服务器仍使用未加密 HTTP。**
> 如果不希望参与数据贡献，可在「设置 → 数据」中关闭。

## 二、性能与稳定性优化

* 通知倒计时和准点提醒改由 Android 系统负责，减少后台刷新与额外唤醒。
* 后台游戏保持与任务进度共用同一套前台服务，减少重复常驻通知。
* KCWiki 上传使用独立队列，服务器异常不会阻塞游戏状态和战斗记录。
* 大型游戏数据解析超时后可自动恢复，避免后续事件长期卡住。
* 原生 WebView 加强页面初始化、弹窗覆盖及前后台切换时的失效任务清理。
* 应用 UI 与游戏帧率独立控制，在提高界面流畅度的同时控制发热与功耗。

## 三、问题修复

本版本主要修复：

* DMM 新版入口下顶部栏残留、底部裁切及缩放失效。
* 原生直连后台恢复时偶发初始化超时、黑屏及弹窗层级异常。
* 「重新载入游戏」因跨域限制无法正常工作。
* 远征、入渠、建造、泊地修理及疲劳提醒提前消失、重复或丢失。
* 快速建造、快速修复后旧任务仍残留在通知栏。
* 缓存容量统计异常及大量资源被误标记为过期。
* 航海日志重启后可能重复记录同一次建造。
* 旧任务快照恢复已经移除的任务。
* 部分多路线 Boss 节点战果漏记。
* 7 舰游击部队第 7 舰伤害位置错误。
* NPC 友军伤害错误作用于玩家舰队。
* 多段攻击重复触发损管，以及要员、女神跨节点重复使用。
* 联合舰队、夜战及特殊阶段中的部分目标、MVP 和战果等级错误。
* 折叠屏键盘遮挡、页面挤压及输入弹窗布局不稳定。
* KCWiki 开关切换时刷新游戏页面。
* 未持有舰娘归并、陆航状态、制空公式及多项界面问题。

## 四、已知问题与使用建议

* OOI 为第三方实验性连接，无法保证长期可用性及所有模式兼容性。出现异常时建议先切回 Yahagi 连接对照。
* 通知权限、精确提醒权限及厂商省电策略可能影响提醒送达。设备重启或强行停止应用后，建议重新打开一次 Yahagi 同步任务。
* 后台保持游戏会增加一定耗电，也无法保证 WebView 永远不被系统回收。
* 「未卜先知」属于本地辅助计算，请勿完全替代对实际 HP、退避及损管状态的确认。
* Android 分屏、多窗口及画中画尚未完成全面适配，建议优先使用全屏。
* Google 账号登录 DMM 仍可能受到 WebView 安全限制，建议优先使用其他可用登录方式。

后续将继续根据测试反馈完善通知可靠性、战斗规则、OOI 兼容、原生直连、本地缓存及移动端性能。

非常感谢各位提督一直以来提供的测试、问题反馈、功能建议与支持。

**Yahagi 仍然是个人维护的兴趣项目，也会继续在能力范围内改善移动端舰 C 的使用体验。**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.5/README.md`},"zh-TW":{body:`**本次更新主要新增 Android 原生通知、框架重新整理、背景遊戲保持、OOI 連線、新艦提醒與未持有一覽、陸基簡報、未卜先知戰鬥預測及 KCWiki 資料貢獻，並進一步最佳化原生直連、資源快取與執行穩定性。**

**並且感謝 GitHub ID @Kutinana 同志自發性做了個 iOS 移植版本，但是該版本由第三方自行移植和製作。我手上也沒有 iOS 裝置，所以無法對該 iOS 版本進行測試，並且可能存在與我開發的 Android 版本有版本差異、未知 BUG 和功能缺失的情況。**

## 一、新增功能與功能增強

### 1. 全新 Android 原生通知中心

新增「設定 → 通知」頁面，可統一管理遠征、入渠、建造、明石泊地修理、疲勞恢復及刷閃提醒。

* 支援查看通知權限、精確提醒權限及通知管道狀態。
* 支援準點、提前 30 秒、提前 60 秒提醒。
* 明石泊地修理支援「首輪 20 分鐘」「全部修滿」「雙階段提醒」。
* 通知列可集中顯示工作進度、百分比和即時倒數計時。
* 快速建造、快速修復或艦隊狀態變化後，會自動撤銷失效提醒。
* 應用程式被一般背景清理後，已交由 Android 系統的提醒仍可繼續運作。

同時新增「背景保持遊戲」開關，預設開啟。進入遊戲後切至背景時，Yahagi 會透過常駐通知提高遊戲處理程序與 WebView 的存活優先順序，降低被系統回收的機率。

該功能可能增加耗電，可在「設定 → 畫面與聲音」中關閉。

### 2. 新增 Yahagi / OOI 雙連線

在「設定 → 網路」新增遊戲連線選擇：

* **Yahagi 連線：** 使用 DMM 官方登入入口，預設推薦。
* **OOI 連線（實驗性）：** 開啟 \`ooi.moe\` 登入頁，由使用者自行選擇模式 1、3 或 4。

本版本補充 OOI 模式 1 的 KCSAPI 擷取和遊戲畫面適配。切換連線後，艦隊、任務、戰鬥、日誌、通知及資源快取等 Yahagi 功能仍可繼續使用。

OOI 登入頁面由第三方提供。Yahagi **不會讀取、儲存或自動填入帳號、密碼、Cookie 和登入權杖**。其可用性及相容性取決於第三方服務與使用者網路環境。

### 3. 遊戲重新整理與原生直連最佳化

工具列重新整理現在提供：

* **重新整理遊戲頁面：** 重新載入整個頁面。
* **重新載入遊戲：** 僅重新載入艦 C 遊戲框架，速度更快，但可能出現貓襲或網路異常。

原生直連模式新增彈出視窗快照，開啟制空、索敵等彈出視窗時，不再容易出現覆蓋視窗、遮罩黑畫面等問題。

同時最佳化：

* 背景恢復與頁面初始化重試；
* DMM 新版遊戲入口識別；
* 遊戲畫面縮放與尺寸恢復；
* 頂部列殘留和底部裁切；
* 載入過程中縮放被重設的問題。

應用程式內截圖、設定儲存、網路、快取及錯誤提示也統一移動至頂部膠囊區域，避免遮擋遊戲畫面。

### 4. 新增「新艦提醒」與「未持有一覽」

持有一覽新增「持有／未持有」及「艦娘／裝備」切換，可查看當前帳號的收集情況，並新增新艦上鎖提醒。

* 未持有艦娘按改造鏈歸併，不重複計算不同改造型態。
* 支援艦種、裝備類型篩選及一鍵重設。
* 可將不需要提醒的艦系加入排除清單，並按帳號分別儲存。
* 支援識別掉落、活動獎勵、任務獎勵及建造獲得的新艦。
* 戰鬥獲得新艦時，會在返回母港後透過遊戲內提示、系統通知及震動提醒上鎖，避免遮擋結算演出。
* 未持有裝備按當前倉庫及艦娘裝備欄位統計，僅用於查看，不產生提醒。

這裡的「未持有」表示當前帳號沒有持有對應艦系，並不代表圖鑑中的歷史首次獲得記錄。

### 5. 新增首頁「陸基簡報」

首頁新增陸基航空隊狀態卡片，可查看：

* 出擊、防空、休息、待機、退避等行動狀態；
* 制空值、熟練度區間及有效航程；
* 4 個中隊的裝備、搭載數和欄位狀態；
* 缺機、配置轉換、黃疲勞、紅疲勞提示；
* 基地空襲後的當前 HP 與損傷狀態。

### 6. 最佳化「未卜先知」POI 戰鬥預測

POI 預測引擎改為從開戰狀態完整重播戰鬥階段，減少前一階段錯誤狀態繼續影響後續計算。

本次重點完善：

* 通常艦隊、聯合艦隊、敵聯合艦隊及 7 艦遊擊部隊；
* 晝戰、夜戰、航空戰、基地航空隊、支援及開幕階段順序；
* NPC 友軍與玩家艦隊狀態隔離；
* 多段攻擊與損管觸發；
* 要員、女神的單次消耗判定；
* 戰果等級、MVP 與異常目標判定。

遇到未知階段或資料不足時，會優先標記為「未確認」，避免顯示看似確定但可能錯誤的結果。

完整模式同時新增戰前敵方立繪，並在雙方 HP 條加入 **25% / 50% / 75%** 損傷刻度，方便判斷大破、中破、小破與健全狀態。

### 7. 艦隊狀態與大破提醒增強

* 首頁編隊簡報和艦隊中心的「最低疲勞」可點選切換為恢復至 Cond 49 的倒數計時，並自動儲存顯示模式。
* 點選制空指標可查看「最小」「最大」「無熟練度加成」3 項制空值。
* 補充日向改二、海防艦、輕空母、護衛空母等多類先制對潛判定。
* 大破提醒改為戰果階段先記錄風險，選擇進擊後再明確警告；撤退或返回母港時不再誤報。

### 8. 戰果中心與資源快取最佳化

戰果中心新增「本月／今日」出擊統計切換，並修復部分多路線海域 Boss 路線漏記。

同時最佳化日結、換月、季度及年度戰果任務的狀態遷移和預計戰果計算。

資源快取方面：

* 修復完整快取長時間未連網驗證後被誤判為過期的問題。
* 原「過期」狀態調整為「待驗證」。
* 待驗證檔案仍保留在本機，不會自動刪除。
* 完整性檢查會分別顯示缺失、損壞和待驗證數量。

### 9. 影格率、輸入與介面調整

* 應用程式選單、清單和頁面捲動使用當前螢幕支援的最高更新率。
* 艦 C 遊戲本體繼續獨立使用 30 / 60 FPS 控制。
* 自動模式最高 60 FPS，低耗電模式固定 30 FPS。
* 移除遊戲未限速高更新率模式，舊設定自動遷移為「自動」。
* 最佳化摺疊螢幕、視窗尺寸變化及鍵盤彈出時的輸入穩定性。
* 移除原生直連模式長按遊戲畫面時的藍色反白效果。

### 10. 新增「KCWiki 資料貢獻」

為了支持 KCWiki 長期以來對於社群和各位玩家的貢獻，Yahagi 也正式成為 **KCWiki 的資料合作站點**。

在「設定 → 資料」新增 KCWiki 資料貢獻，當前版本預設開啟，可隨時關閉。

開啟後僅傳送：

* 海域帶路；
* 任務前置；
* 戰鬥；
* 友軍；
* 陸航／基地空襲；
* 裝備改修資料。

不會傳送：

* DMM 登入權杖；
* Cookie；
* 完整請求標頭；
* 登入表單；
* Yahagi 本機設定。

設定頁可查看等待、上傳成功、上傳失敗及捨棄數量。

關閉後不會繼續收集、組包或傳送 KCWiki 專屬資料，也不會影響遊戲和本機輔助功能。

> **需要注意：KCWiki 當前接收伺服器仍使用未加密 HTTP。**
> 如果不希望參與資料貢獻，可在「設定 → 資料」中關閉。

## 二、效能與穩定性最佳化

* 通知倒數計時和準點提醒改由 Android 系統負責，減少背景重新整理與額外喚醒。
* 背景遊戲保持與工作進度共用同一套前景服務，減少重複常駐通知。
* KCWiki 上傳使用獨立佇列，伺服器異常不會阻塞遊戲狀態和戰鬥記錄。
* 大型遊戲資料解析逾時後可自動恢復，避免後續事件長期卡住。
* 原生 WebView 加強頁面初始化、彈出視窗覆蓋及前背景切換時的失效工作清理。
* 應用程式 UI 與遊戲影格率獨立控制，在提高介面流暢度的同時控制發熱與耗電。

## 三、問題修復

本版本主要修復：

* DMM 新版入口下頂部列殘留、底部裁切及縮放失效。
* 原生直連背景恢復時偶發初始化逾時、黑畫面及彈出視窗層級異常。
* 「重新載入遊戲」因跨來源限制無法正常運作。
* 遠征、入渠、建造、泊地修理及疲勞提醒提前消失、重複或遺失。
* 快速建造、快速修復後舊工作仍殘留在通知列。
* 快取容量統計異常及大量資源被誤標記為過期。
* 航海日誌重新啟動後可能重複記錄同一次建造。
* 舊任務快照恢復已經移除的任務。
* 部分多路線 Boss 節點戰果漏記。
* 7 艦遊擊部隊第 7 艦傷害位置錯誤。
* NPC 友軍傷害錯誤套用於玩家艦隊。
* 多段攻擊重複觸發損管，以及要員、女神跨節點重複使用。
* 聯合艦隊、夜戰及特殊階段中的部分目標、MVP 和戰果等級錯誤。
* 摺疊螢幕鍵盤遮擋、頁面擠壓及輸入視窗配置不穩定。
* KCWiki 開關切換時重新整理遊戲頁面。
* 未持有艦娘歸併、陸航狀態、制空公式及多項介面問題。

## 四、已知問題與使用建議

* OOI 為第三方實驗性連線，無法保證長期可用性及所有模式相容性。出現異常時建議先切回 Yahagi 連線對照。
* 通知權限、精確提醒權限及廠商省電策略可能影響提醒送達。裝置重新啟動或強行停止應用程式後，建議重新開啟一次 Yahagi 同步工作。
* 背景保持遊戲會增加一定耗電，也無法保證 WebView 永遠不被系統回收。
* 「未卜先知」屬於本機輔助計算，請勿完全取代對實際 HP、退避及損管狀態的確認。
* Android 分割畫面、多視窗及子母畫面尚未完成全面適配，建議優先使用全螢幕。
* Google 帳號登入 DMM 仍可能受到 WebView 安全限制，建議優先使用其他可用登入方式。

後續將繼續根據測試回饋完善通知可靠性、戰鬥規則、OOI 相容性、原生直連、本機快取及行動端效能。

非常感謝各位提督一直以來提供的測試、問題回饋、功能建議與支持。

**Yahagi 仍然是個人維護的興趣專案，也會繼續在能力範圍內改善行動端艦 C 的使用體驗。**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.5/README.zh-Hant.md`},ja:{body:`**今回のアップデートでは、主に Android ネイティブ通知、ゲームフレームの再読み込み、バックグラウンドでのゲーム保持、OOI 接続、新艦通知と未所持一覧、基地航空隊概要、戦闘予測、KCWiki へのデータ提供を追加し、ネイティブ直接接続、リソースキャッシュ、動作の安定性をさらに改善しました。**

**また、自発的に iOS 移植版を作成してくださった GitHub ユーザー @Kutinana さんに感謝します。ただし、このバージョンは第三者が独自に移植・制作したものです。私の手元には iOS 端末がないため、この iOS 版のテストはできていません。私が開発する Android 版とのバージョンの差異、未知の不具合、機能の欠落がある可能性もあります。**

## 一、新機能と機能強化

### 1. 新しい Android ネイティブ通知センター

「設定 → 通知」ページを追加し、遠征、入渠、建造、明石の泊地修理、疲労回復、キラ付けの通知をまとめて管理できるようにしました。

* 通知権限、正確なアラームの権限、通知チャンネルの状態を確認できます。
* 定刻、30秒前、60秒前の通知に対応します。
* 明石の泊地修理は「初回20分」「全回復」「両方通知」に対応します。
* 通知欄にタスクの進捗、パーセント、リアルタイムのカウントダウンをまとめて表示できます。
* 高速建造、高速修復、艦隊状態の変化後は、不要になった通知を自動で取り消します。
* 通常のバックグラウンド整理でアプリが終了されても、Android システムへ登録済みの通知は引き続き動作できます。

あわせて「バックグラウンドでゲームを保持」スイッチを追加しました。既定で有効です。ゲーム開始後にバックグラウンドへ移ると、Yahagi は常駐通知を使ってゲームプロセスと WebView の生存優先度を上げ、システムに終了される可能性を減らします。

電池消費が増える場合があります。「設定 → 画面と音声」で無効にできます。

### 2. Yahagi / OOI の2種類の接続

「設定 → ネットワーク」にゲーム接続の選択を追加しました。

* **Yahagi 接続：** DMM 公式のログイン入口を使用します。既定の推奨接続です。
* **OOI 接続（実験的）：** \`ooi.moe\` のログインページを開き、利用者がモード1、3、4を自分で選択します。

本バージョンでは OOI モード1の KCSAPI 取得とゲーム画面の調整を追加しました。接続を切り替えた後も、艦隊、任務、戦闘、ログ、通知、リソースキャッシュなどの Yahagi の機能を引き続き利用できます。

OOI のログインページは第三者が提供しています。Yahagi は **アカウント、パスワード、Cookie、ログイントークンの読み取り、保存、自動入力を行いません**。利用可能性と互換性は、第三者サービスと利用者のネットワーク環境に依存します。

### 3. ゲーム更新とネイティブ直接接続の最適化

ツールバーの更新操作で、次の項目を選べるようになりました。

* **ゲームページを更新：** ページ全体を再読み込みします。
* **ゲームを再読み込み：** 艦これのゲームフレームのみを再読み込みします。高速ですが、猫エラーやネットワーク異常が発生する場合があります。

ネイティブ直接接続モードにポップアップ用のスナップショットを追加しました。制空・索敵などのポップアップを開いたとき、ポップアップが覆われたり、黒いオーバーレイが表示されたりする問題が起きにくくなります。

あわせて、次の点を最適化しました。

* バックグラウンドからの復帰とページ初期化の再試行；
* DMM の新しいゲーム入口の認識；
* ゲーム画面の拡大縮小とサイズ復元；
* 上部バーの残留と下部の見切れ；
* 読み込み中に拡大縮小がリセットされる問題。

アプリ内スクリーンショット、設定保存、ネットワーク、キャッシュ、エラーのメッセージも上部のカプセル領域へ統一し、ゲーム画面を覆わないようにしました。

### 4. 「新艦通知」と「未所持一覧」の追加

保有一覧に「所持／未所持」「艦娘／装備」の切り替えを追加し、現在のアカウントの収集状況を確認できるようにしました。新艦のロック通知も追加しました。

* 未所持艦娘は改造系列ごとにまとめ、異なる改造段階を重複して数えません。
* 艦種・装備種別での絞り込みと、ワンタップでのリセットに対応します。
* 通知が不要な艦の系列を除外リストに追加でき、アカウントごとに保存します。
* ドロップ、イベント報酬、任務報酬、建造で入手した新艦を認識できます。
* 戦闘で新艦を入手した場合は、結果演出を妨げないよう、母港に戻ってからゲーム内メッセージ、システム通知、振動でロックを促します。
* 未所持装備は現在の倉庫と艦娘の装備スロットから集計します。閲覧用のみで、通知は発生しません。

ここでの「未所持」は、現在のアカウントが該当する艦の系列を所持していないことを意味し、図鑑上の過去の初入手記録を表すものではありません。

### 5. ホームに「基地航空隊概要」を追加

ホームに基地航空隊の状態カードを追加しました。次の情報を確認できます。

* 出撃、防空、休息、待機、退避などの行動状態；
* 制空値、熟練度の範囲、有効な行動半径；
* 4中隊の装備、搭載数、スロット状態；
* 機数不足、配置転換、黄疲労、赤疲労の表示；
* 基地空襲後の現在 HP と損傷状態。

### 6. POI 戦闘予測の最適化

POI 予測エンジンは、戦闘開始時点の状態から全フェーズを再現する方式へ変更しました。前のフェーズで生じた誤った状態が、その後の計算へ影響し続けることを減らします。

今回は、主に次の点を改善しました。

* 通常艦隊、連合艦隊、敵連合艦隊、7隻の遊撃部隊；
* 昼戦、夜戦、航空戦、基地航空隊、支援、開幕フェーズの順序；
* NPC 友軍とプレイヤー艦隊の状態の分離；
* 多段攻撃とダメコンの発動；
* 応急修理要員・女神の1回分の消費判定；
* 勝利ランク、MVP、異常な対象の判定。

未知のフェーズやデータ不足に遭遇した場合は、確定しているように見えて誤っている可能性のある結果を避けるため、「未確認」とすることを優先します。

完全モードには戦闘前の敵立ち絵も追加し、双方の HP バーに **25% / 50% / 75%** の損傷目盛りを追加しました。大破・中破・小破・健全の状態を判断しやすくします。

### 7. 艦隊状態と大破通知の強化

* ホームの編成概要と艦隊センターの「最低コンディション」をタップすると、Cond 49 まで回復するカウントダウンに切り替えられます。表示モードは自動保存します。
* 制空指標をタップすると、「最小」「最大」「熟練度補正なし」の3種類の制空値を確認できます。
* 日向改二、海防艦、軽空母、護衛空母など、複数の先制対潜判定を追加しました。
* 大破通知は戦闘結果フェーズでリスクを記録し、進撃を選択した後に明確な警告を表示する方式へ変更しました。撤退・母港帰投時には誤警告しません。

### 8. 戦果センターとリソースキャッシュの最適化

戦果センターに出撃統計の「今月／今日」切り替えを追加し、複数ルートのある一部海域で Boss ルートの記録が漏れる問題を修正しました。

あわせて、日次集計、月替わり、クォータリー・イヤーリー戦果任務の状態移行と予想戦果の計算を最適化しました。

リソースキャッシュについて：

* 完全なキャッシュでも長期間オンライン検証をしていないと期限切れと誤判定される問題を修正しました。
* 従来の「期限切れ」状態を「検証待ち」に変更しました。
* 検証待ちファイルはローカルに保持され、自動削除されません。
* 整合性チェックでは、欠落・破損・検証待ちの件数を分けて表示します。

### 9. フレームレート、入力、画面の調整

* アプリのメニュー、一覧、ページのスクロールは、現在の画面が対応する最高リフレッシュレートを使用します。
* 艦これ本体は、引き続き独立した 30 / 60 FPS 制御を使用します。
* 自動モードは最大 60 FPS、低消費電力モードは 30 FPS 固定です。
* ゲームの無制限高リフレッシュレートモードを削除し、旧設定は自動で「自動」へ移行します。
* 折りたたみ端末、ウィンドウサイズ変更時、キーボード表示時の入力の安定性を改善しました。
* ネイティブ直接接続モードでゲーム画面を長押ししたときの青いハイライトを削除しました。

### 10. 「KCWiki へのデータ提供」の追加

KCWiki が長年コミュニティとプレイヤーに行ってきた貢献を支えるため、Yahagi も正式に **KCWiki のデータ提携サイト** になりました。

「設定 → データ」に KCWiki へのデータ提供を追加しました。現在のバージョンでは既定で有効で、いつでも無効にできます。

有効な場合、送信するのは次のデータのみです。

* 海域のルート分岐；
* 任務の前提条件；
* 戦闘；
* 友軍；
* 基地航空隊／基地空襲；
* 装備改修データ。

次の情報は送信しません。

* DMM のログイントークン；
* Cookie；
* 完全なリクエストヘッダー；
* ログインフォーム；
* Yahagi のローカル設定。

設定ページでは、待機、送信成功、送信失敗、破棄の件数を確認できます。

無効にすると、KCWiki 専用データの収集、パッケージ化、送信を停止します。ゲームやローカルの補助機能には影響しません。

> **ご注意：KCWiki の現在の受信サーバーは、暗号化されていない HTTP を使用しています。**
> データ提供に参加したくない場合は、「設定 → データ」で無効にできます。

## 二、パフォーマンスと安定性の最適化

* 通知のカウントダウンと定刻通知を Android システムに任せ、バックグラウンド更新と追加のスリープ解除を削減しました。
* バックグラウンドでのゲーム保持とタスク進捗で同じフォアグラウンドサービスを共有し、常駐通知の重複を削減しました。
* KCWiki への送信は独立したキューを使用し、サーバー異常がゲーム状態や戦闘記録を妨げないようにしました。
* 大きなゲームデータの解析がタイムアウトした後に自動復旧できるようにし、後続イベントが長時間滞ることを防ぎます。
* ネイティブ WebView で、ページ初期化、ポップアップの重なり、前面・背面切り替え時の無効なタスクの整理を強化しました。
* アプリ UI とゲームのフレームレートを独立して制御し、画面を滑らかにしながら発熱と消費電力を抑えます。

## 三、不具合修正

本バージョンでは、主に次の問題を修正しました。

* DMM の新しい入口で上部バーが残る、下部が見切れる、拡大縮小が効かない問題。
* ネイティブ直接接続でバックグラウンドから復帰した際、まれに初期化がタイムアウトする、黒い画面になる、ポップアップの重なり順が異常になる問題。
* 「ゲームを再読み込み」がクロスオリジン制限によって正常に動作しない問題。
* 遠征、入渠、建造、泊地修理、疲労回復の通知が早く消える、重複する、失われる問題。
* 高速建造・高速修復後も古いタスクが通知欄に残る問題。
* キャッシュ容量の集計異常と、多数のリソースが期限切れと誤判定される問題。
* 再起動後、航海日誌に同じ建造が重複して記録される場合がある問題。
* 古い任務スナップショットが削除済みの任務を復元してしまう問題。
* 複数ルートのある一部 Boss マスの戦果記録漏れ。
* 7隻の遊撃部隊で7隻目のダメージ位置が誤る問題。
* NPC 友軍のダメージがプレイヤー艦隊に誤って適用される問題。
* 多段攻撃でダメコンが重複発動し、応急修理要員・女神が複数マスにまたがって再使用される問題。
* 連合艦隊、夜戦、特殊フェーズにおける一部の対象、MVP、勝利ランクの誤り。
* 折りたたみ端末でキーボードが画面を覆う、ページが圧迫される、入力ダイアログの配置が不安定になる問題。
* KCWiki スイッチを切り替えるとゲームページが更新される問題。
* 未所持艦娘の集約、基地航空隊の状態、制空式、複数の画面上の問題。

## 四、既知の問題と利用上のおすすめ

* OOI は第三者による実験的な接続です。長期的な利用可能性や、すべてのモードとの互換性は保証できません。異常が発生した場合は、まず Yahagi 接続へ戻して比較することをおすすめします。
* 通知権限、正確なアラームの権限、メーカーの省電力制御が通知の到達に影響する場合があります。端末の再起動やアプリの強制停止後は、一度 Yahagi を開いてタスクを同期することをおすすめします。
* バックグラウンドでのゲーム保持は電池消費がある程度増え、WebView がシステムに終了されないことを常に保証するものではありません。
* 「戦闘予測」はローカルでの補助計算です。実際の HP、退避、ダメコンの状態の確認を完全に置き換えないでください。
* Android の分割画面、マルチウィンドウ、ピクチャーインピクチャーには、まだ全面的な対応が完了していません。全画面での利用を優先することをおすすめします。
* Google アカウントでの DMM ログインは、引き続き WebView のセキュリティ制限を受ける可能性があります。他の利用可能なログイン方法を優先することをおすすめします。

今後もテストのフィードバックをもとに、通知の信頼性、戦闘ルール、OOI の互換性、ネイティブ直接接続、ローカルキャッシュ、モバイルでの性能を改善していきます。

いつもテスト、不具合報告、機能のご提案、ご支援をいただき、提督の皆さまに心から感謝します。

**Yahagi は引き続き個人で保守する趣味のプロジェクトです。これからも、できる範囲でモバイルの艦これ体験を改善していきます。**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.5/README.ja.md`},ko:{body:`**이번 업데이트에서는 주로 Android 네이티브 알림, 게임 프레임 새로고침, 백그라운드 게임 유지, OOI 연결, 새 칸무스 알림과 미보유 목록, 기지항공대 요약, 전투 예측 및 KCWiki 데이터 기여를 추가하고, 네이티브 직접 연결, 리소스 캐시 및 실행 안정성을 더욱 최적화했습니다.**

**또한 자발적으로 iOS 이식 버전을 제작해 주신 GitHub 사용자 @Kutinana 님께 감사드립니다. 다만 이 버전은 제3자가 독립적으로 이식하고 제작한 것입니다. 제게는 iOS 기기가 없어 해당 iOS 버전을 테스트할 수 없으며, 제가 개발하는 Android 버전과 버전 차이, 알려지지 않은 버그 또는 누락된 기능이 있을 수 있습니다.**

## 1. 새로운 기능 및 기능 개선

### 1. 새로운 Android 네이티브 알림 센터

「설정 → 알림」 페이지를 추가하여 원정, 입거, 건조, 아카시 정박지 수리, 피로 회복 및 반짝이 작업 알림을 한곳에서 관리할 수 있습니다.

* 알림 권한, 정확한 알람 권한 및 알림 채널 상태를 확인할 수 있습니다.
* 정시, 30초 전, 60초 전 알림을 지원합니다.
* 아카시 정박지 수리는 「첫 20분」「모두 수리 완료」「두 시점 모두 알림」을 지원합니다.
* 알림 창에 작업 진행 상황, 백분율 및 실시간 카운트다운을 모아서 표시할 수 있습니다.
* 고속 건조, 고속 수복 또는 함대 상태 변경 후 더 이상 유효하지 않은 알림을 자동으로 취소합니다.
* 일반적인 백그라운드 정리로 앱이 종료되어도 Android 시스템에 넘겨진 알림은 계속 작동할 수 있습니다.

「백그라운드에서 게임 유지」 스위치도 추가했으며 기본으로 켜져 있습니다. 게임에 진입한 뒤 백그라운드로 전환하면 Yahagi가 상시 알림을 통해 게임 프로세스와 WebView의 생존 우선순위를 높여 시스템이 회수할 가능성을 낮춥니다.

이 기능은 배터리 소모를 늘릴 수 있으며 「설정 → 화면 및 소리」에서 끌 수 있습니다.

### 2. Yahagi / OOI 두 가지 연결 추가

「설정 → 네트워크」에 게임 연결 선택을 추가했습니다.

* **Yahagi 연결:** DMM 공식 로그인 진입점을 사용하며, 기본 권장 방식입니다.
* **OOI 연결 (실험적):** \`ooi.moe\` 로그인 페이지를 열고 사용자가 모드 1, 3 또는 4를 직접 선택합니다.

이번 버전에서는 OOI 모드 1의 KCSAPI 수집과 게임 화면 대응을 보완했습니다. 연결을 바꾼 뒤에도 함대, 임무, 전투, 로그, 알림 및 리소스 캐시 등 Yahagi 기능을 계속 사용할 수 있습니다.

OOI 로그인 페이지는 제3자가 제공합니다. Yahagi는 **계정, 비밀번호, Cookie 및 로그인 토큰을 읽거나 저장하거나 자동 입력하지 않습니다**. 사용 가능 여부와 호환성은 제3자 서비스와 사용자의 네트워크 환경에 따라 달라집니다.

### 3. 게임 새로고침 및 네이티브 직접 연결 최적화

도구 모음의 새로고침에서 다음을 선택할 수 있습니다.

* **게임 페이지 새로고침:** 페이지 전체를 다시 불러옵니다.
* **게임 다시 불러오기:** 칸코레 게임 프레임만 다시 불러옵니다. 더 빠르지만 고양이 오류나 네트워크 이상이 발생할 수 있습니다.

네이티브 직접 연결 모드에 팝업용 스냅샷을 추가했습니다. 제공·색적 등의 팝업을 열 때 팝업이 가려지거나 검은 오버레이가 나타나는 문제가 줄어듭니다.

다음 사항도 최적화했습니다.

* 백그라운드 복귀 및 페이지 초기화 재시도;
* DMM의 새로운 게임 진입점 인식;
* 게임 화면 확대·축소 및 크기 복원;
* 상단 바 잔상 및 하단 잘림;
* 로딩 중 확대·축소가 초기화되는 문제.

앱 내 스크린샷, 설정 저장, 네트워크, 캐시 및 오류 안내도 상단 캡슐 영역으로 통일하여 게임 화면을 가리지 않도록 했습니다.

### 4. 「새 칸무스 알림」과 「미보유 목록」 추가

보유 목록에 「보유 / 미보유」 및 「칸무스 / 장비」 전환을 추가하여 현재 계정의 수집 현황을 확인할 수 있습니다. 새 칸무스 잠금 알림도 추가했습니다.

* 미보유 칸무스는 개장 계보별로 묶어, 서로 다른 개장 형태를 중복 계산하지 않습니다.
* 함종 및 장비 유형 필터와 한 번의 탭으로 초기화하는 기능을 지원합니다.
* 알림이 필요 없는 함선 계보를 제외 목록에 추가하고 계정별로 따로 저장할 수 있습니다.
* 드롭, 이벤트 보상, 임무 보상 및 건조로 얻은 새 칸무스를 인식합니다.
* 전투에서 새 칸무스를 얻으면 결과 연출을 가리지 않도록 모항으로 돌아온 뒤 게임 내 안내, 시스템 알림 및 진동으로 잠금을 알립니다.
* 미보유 장비는 현재 창고와 칸무스 장비 슬롯을 기준으로 집계하며, 조회 전용으로 알림을 생성하지 않습니다.

여기서 「미보유」는 현재 계정이 해당 함선 계보를 보유하지 않았다는 뜻이며, 도감상의 과거 최초 획득 기록을 뜻하지 않습니다.

### 5. 홈 화면에 「기지항공대 요약」 추가

홈 화면에 기지항공대 상태 카드를 추가했습니다. 다음 내용을 확인할 수 있습니다.

* 출격, 방공, 휴식, 대기, 퇴피 등의 행동 상태;
* 제공치, 숙련도 구간 및 유효 행동 반경;
* 4개 중대의 장비, 탑재 수 및 슬롯 상태;
* 항공기 부족, 배치 전환, 노란 피로 및 빨간 피로 안내;
* 기지 공습 후 현재 HP 및 손상 상태.

### 6. POI 전투 예측 최적화

POI 예측 엔진이 전투 시작 상태부터 모든 전투 단계를 재현하도록 변경되어, 이전 단계의 잘못된 상태가 이후 계산에 계속 영향을 주는 일을 줄입니다.

이번에 중점적으로 개선한 사항은 다음과 같습니다.

* 일반 함대, 연합함대, 적 연합함대 및 7척 유격부대;
* 주간전, 야간전, 항공전, 기지항공대, 지원 및 개막 단계 순서;
* NPC 우군과 플레이어 함대의 상태 분리;
* 다단 공격과 응급수리 발동;
* 응급수리요원·여신의 1회 소모 판정;
* 승리 랭크, MVP 및 비정상 대상 판정.

알 수 없는 단계나 부족한 데이터를 만나면, 확정적으로 보이지만 틀릴 수 있는 결과를 표시하지 않도록 「미확인」으로 표시하는 것을 우선합니다.

전체 모드에는 전투 전 적군 일러스트를 추가하고, 양측 HP 바에 **25% / 50% / 75%** 손상 눈금을 넣어 대파, 중파, 소파 및 정상 상태를 쉽게 판단할 수 있게 했습니다.

### 7. 함대 상태 및 대파 알림 강화

* 홈 화면 함대 요약과 함대 센터의 「최저 컨디션」을 누르면 Cond 49까지 회복하는 카운트다운으로 전환할 수 있으며, 표시 모드는 자동 저장됩니다.
* 제공 지표를 누르면 「최소」「최대」「숙련도 보너스 제외」의 3가지 제공치를 확인할 수 있습니다.
* 휴가 카이2, 해방함, 경항모, 호위항모 등 여러 유형의 선제 대잠 판정을 보완했습니다.
* 대파 알림은 전투 결과 단계에서 위험을 기록하고 진격을 선택한 뒤 명확히 경고하도록 바꿨습니다. 철수하거나 모항으로 돌아갈 때는 잘못 알리지 않습니다.

### 8. 전과 센터 및 리소스 캐시 최적화

전과 센터에 출격 통계 「이번 달 / 오늘」 전환을 추가하고, 여러 경로가 있는 일부 해역의 Boss 경로 기록 누락을 수정했습니다.

일일 결산, 월 변경, 분기 및 연간 전과 임무의 상태 전환과 예상 전과 계산도 최적화했습니다.

리소스 캐시 관련 변경:

* 완전한 캐시가 오랫동안 온라인 검증을 받지 않았다는 이유로 만료된 것으로 잘못 판정되는 문제를 수정했습니다.
* 기존 「만료」 상태를 「검증 대기」로 변경했습니다.
* 검증 대기 파일은 로컬에 유지되며 자동 삭제되지 않습니다.
* 무결성 검사에서 누락, 손상 및 검증 대기 수를 각각 표시합니다.

### 9. 프레임률, 입력 및 인터페이스 조정

* 앱 메뉴, 목록 및 페이지 스크롤은 현재 화면이 지원하는 최고 주사율을 사용합니다.
* 칸코레 게임 본체는 계속 독립적인 30 / 60 FPS 제어를 사용합니다.
* 자동 모드는 최대 60 FPS, 저전력 모드는 30 FPS 고정입니다.
* 게임 프레임 제한 없는 고주사율 모드를 제거하고, 기존 설정은 자동으로 「자동」으로 이전합니다.
* 폴더블 기기, 창 크기 변경 및 키보드 표시 시의 입력 안정성을 최적화했습니다.
* 네이티브 직접 연결 모드에서 게임 화면을 길게 누를 때 나타나던 파란 강조 표시를 제거했습니다.

### 10. 「KCWiki 데이터 기여」 추가

KCWiki가 오랫동안 커뮤니티와 플레이어에게 해 온 기여를 지원하기 위해 Yahagi도 공식적으로 **KCWiki 데이터 협력 사이트**가 되었습니다.

「설정 → 데이터」에 KCWiki 데이터 기여를 추가했습니다. 현재 버전에서는 기본으로 켜져 있으며 언제든 끌 수 있습니다.

활성화하면 다음 데이터만 전송합니다.

* 해역 분기;
* 임무 선행 조건;
* 전투;
* 우군;
* 기지항공대 / 기지 공습;
* 장비 개수 데이터.

다음 정보는 전송하지 않습니다.

* DMM 로그인 토큰;
* Cookie;
* 전체 요청 헤더;
* 로그인 양식;
* Yahagi 로컬 설정.

설정 페이지에서 대기, 업로드 성공, 업로드 실패 및 폐기 수를 확인할 수 있습니다.

끄면 KCWiki 전용 데이터를 더 이상 수집하거나 묶거나 전송하지 않으며, 게임과 로컬 보조 기능에는 영향을 주지 않습니다.

> **주의: KCWiki의 현재 수신 서버는 아직 암호화되지 않은 HTTP를 사용합니다.**
> 데이터 기여에 참여하고 싶지 않다면 「설정 → 데이터」에서 끌 수 있습니다.

## 2. 성능 및 안정성 최적화

* 알림 카운트다운과 정시 알림을 Android 시스템이 담당하도록 바꾸어 백그라운드 갱신과 추가 깨우기를 줄였습니다.
* 백그라운드 게임 유지와 작업 진행 상황이 동일한 포그라운드 서비스를 공유하여 중복 상시 알림을 줄였습니다.
* KCWiki 업로드는 독립적인 대기열을 사용하므로 서버 이상이 게임 상태나 전투 기록을 막지 않습니다.
* 큰 게임 데이터 분석이 시간 초과된 후 자동 복구할 수 있어 후속 이벤트가 오랫동안 막히는 것을 방지합니다.
* 네이티브 WebView에서 페이지 초기화, 팝업 겹침 및 포그라운드·백그라운드 전환 시 무효 작업 정리를 강화했습니다.
* 앱 UI와 게임 프레임률을 독립적으로 제어하여 인터페이스를 부드럽게 하면서 발열과 전력 소비를 조절합니다.

## 3. 문제 수정

이번 버전에서 주로 수정한 문제는 다음과 같습니다.

* DMM의 새 진입점에서 상단 바가 남거나 하단이 잘리고 확대·축소가 작동하지 않는 문제.
* 네이티브 직접 연결에서 백그라운드 복귀 시 간헐적인 초기화 시간 초과, 검은 화면 및 팝업 계층 이상.
* 「게임 다시 불러오기」가 교차 출처 제한으로 제대로 작동하지 않는 문제.
* 원정, 입거, 건조, 정박지 수리 및 피로 알림이 일찍 사라지거나 중복되거나 누락되는 문제.
* 고속 건조·고속 수복 후에도 이전 작업이 알림 창에 남는 문제.
* 캐시 용량 집계 이상 및 많은 리소스가 만료로 잘못 표시되는 문제.
* 재시작 후 항해 일지가 같은 건조를 중복 기록할 수 있는 문제.
* 이전 임무 스냅샷이 이미 제거된 임무를 복원하는 문제.
* 여러 경로가 있는 일부 Boss 지점의 전과 기록 누락.
* 7척 유격부대에서 7번째 함선의 피해 위치가 잘못되는 문제.
* NPC 우군 피해가 플레이어 함대에 잘못 적용되는 문제.
* 다단 공격이 응급수리를 중복 발동하고, 응급수리요원·여신이 여러 지점에 걸쳐 반복 사용되는 문제.
* 연합함대, 야간전 및 특수 단계의 일부 대상, MVP 및 승리 랭크 오류.
* 폴더블 기기에서 키보드가 화면을 가리거나 페이지가 압축되고 입력 팝업 레이아웃이 불안정한 문제.
* KCWiki 스위치를 바꿀 때 게임 페이지가 새로고침되는 문제.
* 미보유 칸무스 묶음 처리, 기지항공대 상태, 제공 공식 및 여러 인터페이스 문제.

## 4. 알려진 문제 및 사용 권장 사항

* OOI는 제3자가 제공하는 실험적 연결로, 장기적인 사용 가능 여부와 모든 모드의 호환성을 보장할 수 없습니다. 이상이 발생하면 우선 Yahagi 연결로 돌아가 비교하는 것을 권장합니다.
* 알림 권한, 정확한 알람 권한 및 제조사의 절전 정책이 알림 전달에 영향을 줄 수 있습니다. 기기를 다시 시작하거나 앱을 강제 종료한 뒤에는 Yahagi를 한 번 다시 열어 작업을 동기화하는 것을 권장합니다.
* 백그라운드 게임 유지는 배터리 소모를 어느 정도 늘리며, 시스템이 WebView를 절대 회수하지 않는다고 보장할 수도 없습니다.
* 「전투 예측」은 로컬 보조 계산 기능입니다. 실제 HP, 퇴피 및 응급수리 상태 확인을 완전히 대체하지 마세요.
* Android 분할 화면, 다중 창 및 화면 속 화면은 아직 전면적인 대응이 완료되지 않았습니다. 우선 전체 화면 사용을 권장합니다.
* Google 계정의 DMM 로그인은 여전히 WebView 보안 제한을 받을 수 있습니다. 다른 사용 가능한 로그인 방식을 우선 사용하는 것을 권장합니다.

이후에도 테스트 피드백을 바탕으로 알림 신뢰성, 전투 규칙, OOI 호환성, 네이티브 직접 연결, 로컬 캐시 및 모바일 성능을 계속 개선하겠습니다.

항상 테스트, 문제 보고, 기능 제안 및 지원을 보내 주시는 제독 여러분께 진심으로 감사드립니다.

**Yahagi는 계속 개인이 관리하는 취미 프로젝트이며, 앞으로도 제 능력이 닿는 범위에서 모바일 칸코레 사용 경험을 개선하겠습니다.**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.5/README.ko.md`},en:{body:`**This update primarily adds native Android notifications, game frame reloading, background game retention, OOI connections, new ship alerts and an unowned inventory, a land base summary, Battle prediction, and KCWiki data contributions, while further improving native direct connection, resource caching, and runtime stability.**

**Also, thank you to GitHub user @Kutinana for voluntarily creating an iOS port. However, that version is independently ported and built by a third party. I do not have an iOS device, so I cannot test it, and it may differ in version from the Android version I develop, contain unknown bugs, or lack features.**

## I. New features and enhancements

### 1. New native Android notification center

Added “Settings → Notifications” to manage expedition, repair dock, construction, Akashi anchorage repair, morale recovery, and sparkling reminders in one place.

* View notification permissions, exact alarm permissions, and notification channel status.
* Receive reminders on time, 30 seconds early, or 60 seconds early.
* Akashi anchorage repair supports “First repair after 20 minutes,” “All repairs complete,” and “Both stages.”
* The notification shade can display task progress, percentages, and live countdowns together.
* Obsolete reminders are automatically canceled after instant construction, instant repair, or fleet status changes.
* Reminders already handed over to Android can continue working after the app is cleared through ordinary background cleanup.

Also added a “Keep game in background” switch, enabled by default. When you move Yahagi to the background after entering the game, it uses a persistent notification to raise the survival priority of the game process and WebView, reducing the likelihood of the system reclaiming them.

This feature may increase battery use and can be turned off under “Settings → Screen and sound.”

### 2. Yahagi / OOI connection options

Added a game connection selector under “Settings → Network”:

* **Yahagi connection:** Uses the official DMM login entry point; recommended by default.
* **OOI connection (experimental):** Opens the \`ooi.moe\` login page, where users choose mode 1, 3, or 4 themselves.

This version adds KCSAPI capture and game display adaptation for OOI mode 1. After switching connections, Yahagi features such as fleets, quests, battles, logs, notifications, and resource caching remain available.

The OOI login page is provided by a third party. Yahagi **does not read, save, or automatically fill in accounts, passwords, cookies, or login tokens**. Availability and compatibility depend on the third-party service and the user's network environment.

### 3. Game refresh and native direct connection improvements

The toolbar refresh action now offers:

* **Refresh game page:** Reloads the entire page.
* **Reload game:** Reloads only the KanColle game frame. This is faster, but may cause cat errors or network errors.

Native direct connection mode now takes a snapshot for pop-ups, making problems such as pop-ups being covered or black overlay screens less likely when opening air power, line of sight, and other pop-ups.

Also improved:

* Recovery from the background and page initialization retries;
* Detection of DMM's new game entry point;
* Game display scaling and size restoration;
* Remnants of the top bar and clipping at the bottom;
* Scaling being reset during loading.

In-app screenshots, settings save messages, network messages, cache messages, and error messages have also been moved to the top capsule area to avoid obscuring the game display.

### 4. New ship alerts and unowned inventory

Inventory now has “Owned / Unowned” and “Ships / Equipment” switches to show the current account's collection, along with new ship locking reminders.

* Unowned ships are grouped by remodel chain, without counting different remodel forms separately.
* Filter by ship class or equipment type, and reset filters with one tap.
* Add ship families that do not need reminders to an exclusion list, saved separately for each account.
* Recognizes new ships obtained from drops, event rewards, quest rewards, and construction.
* When a new ship is obtained in battle, locking reminders are delivered after returning to port through an in-game message, a system notification, and vibration, avoiding interference with the results animation.
* Unowned equipment is determined from the current inventory and ships' equipment slots. It is for viewing only and does not trigger reminders.

“Unowned” here means that the current account does not own that ship family; it does not represent a historical first acquisition in the ship encyclopedia.

### 5. Land base summary on the home page

Added a land-based air squadron status card to the home page, showing:

* Action states such as sortie, air defense, rest, standby, and evacuation;
* Air power, proficiency ranges, and effective combat radius;
* Equipment, aircraft counts, and slot status for all 4 squadrons;
* Warnings for missing aircraft, relocation, yellow fatigue, and red fatigue;
* Current HP and damage status after land base air raids.

### 6. POI Battle prediction improvements

The POI prediction engine now fully replays battle phases from the start-of-battle state, reducing the propagation of incorrect states from an earlier phase into later calculations.

This update focuses on improvements to:

* Normal fleets, combined fleets, enemy combined fleets, and 7-ship striking forces;
* Phase ordering for day battles, night battles, aerial battles, land-based air squadrons, support, and opening phases;
* Separation of NPC friendly fleet and player fleet states;
* Multiple-hit attacks and damage control activation;
* Determining single-use consumption of Repair Teams and Repair Goddesses;
* Battle ranks, MVPs, and abnormal target detection.

When a phase is unknown or data is insufficient, the engine prioritizes marking results as “Unconfirmed” to avoid presenting seemingly certain but potentially incorrect results.

Full mode also adds pre-battle enemy portraits and **25% / 50% / 75%** damage markers on both sides' HP bars, making it easier to judge heavy damage, moderate damage, light damage, and healthy states.

### 7. Fleet status and heavy damage alert enhancements

* Tap “Minimum morale” in the home page fleet summary or fleet center to switch to a countdown until Cond 49. The display mode is saved automatically.
* Tap the air power indicator to view 3 values: “Minimum,” “Maximum,” and “Without proficiency bonuses.”
* Added opening anti-submarine warfare checks for several ship types, including Hyuuga Kai Ni, coastal defense ships, light carriers, and escort carriers.
* Heavy damage alerts now record risks during the battle results phase and issue an explicit warning after you choose to advance; they no longer give false alarms when retreating or returning to port.

### 8. Senka center and resource cache improvements

The senka center now lets you switch sortie statistics between “This month / Today,” and fixes missed boss-route records on some maps with multiple routes.

Also improved state transitions and projected senka calculations for daily settlement, month changes, and quarterly and yearly senka quests.

Resource cache changes:

* Fixed complete caches being incorrectly treated as expired after a long time without online validation.
* Renamed the previous “Expired” status to “Pending validation.”
* Files pending validation remain locally stored and are not automatically deleted.
* Integrity checks show separate counts for missing, damaged, and pending-validation files.

### 9. Frame rate, input, and interface adjustments

* App menus, lists, and page scrolling use the highest refresh rate supported by the current screen.
* The KanColle game itself continues to use independent 30 / 60 FPS controls.
* Auto mode runs at up to 60 FPS; low-power mode is fixed at 30 FPS.
* Removed the uncapped high-refresh-rate game mode. Existing settings are automatically migrated to “Auto.”
* Improved input stability on foldable devices, during window resizing, and when the keyboard appears.
* Removed the blue highlight caused by long-pressing the game display in native direct connection mode.

### 10. KCWiki data contributions

To support KCWiki's longstanding contributions to the community and players, Yahagi has officially become a **KCWiki data partner site**.

Added KCWiki data contributions under “Settings → Data.” In this version, it is enabled by default and can be turned off at any time.

When enabled, it only sends:

* Map routing;
* Quest prerequisites;
* Battles;
* Friendly fleets;
* Land-based air squadrons / land base air raids;
* Equipment improvement data.

It does not send:

* DMM login tokens;
* Cookies;
* Complete request headers;
* Login forms;
* Yahagi's local settings.

The settings page shows counts for queued, successfully uploaded, failed, and discarded submissions.

Turning it off stops the collection, packaging, and sending of KCWiki-specific data, without affecting the game or local helper features.

> **Please note: KCWiki's receiving server currently still uses unencrypted HTTP.**
> If you do not wish to participate in data contributions, you can turn it off under “Settings → Data.”

## II. Performance and stability improvements

* Notification countdowns and on-time reminders are now handled by Android, reducing background refreshes and extra wakeups.
* Background game retention and task progress share the same foreground service, reducing duplicate persistent notifications.
* KCWiki uploads use a separate queue, so server errors do not block game state updates or battle records.
* Parsing of large game data can automatically recover after a timeout, preventing subsequent events from remaining stuck for a long time.
* Native WebView now clears invalid tasks more thoroughly during page initialization, pop-up overlays, and foreground/background transitions.
* App UI and game frame rates are controlled independently, improving interface smoothness while managing heat and power consumption.

## III. Fixes

This version mainly fixes:

* Top bar remnants, bottom clipping, and scaling failures with DMM's new entry point.
* Occasional initialization timeouts, black screens, and incorrect pop-up layering when native direct connection resumes from the background.
* “Reload game” failing because of cross-origin restrictions.
* Expedition, repair dock, construction, anchorage repair, and morale reminders disappearing early, duplicating, or going missing.
* Old tasks remaining in the notification shade after instant construction or instant repair.
* Incorrect cache size totals and large numbers of resources incorrectly marked as expired.
* The logbook potentially recording the same construction again after restarting.
* Old quest snapshots restoring quests that had already been removed.
* Missing senka records for some boss nodes on maps with multiple routes.
* Incorrect damage positions for the 7th ship in a 7-ship striking force.
* NPC friendly fleet damage being incorrectly applied to the player fleet.
* Multiple-hit attacks triggering damage control repeatedly, and Repair Teams or Repair Goddesses being reused across nodes.
* Some incorrect targets, MVPs, and battle ranks in combined fleets, night battles, and special phases.
* Keyboard obstruction, compressed pages, and unstable input dialog layouts on foldable devices.
* The game page refreshing when toggling the KCWiki switch.
* Unowned ship grouping, land-based air squadron status, air power formulas, and various interface issues.

## IV. Known issues and usage suggestions

* OOI is an experimental third-party connection. Long-term availability and compatibility with every mode cannot be guaranteed. If problems occur, try switching back to the Yahagi connection for comparison first.
* Notification permissions, exact alarm permissions, and manufacturer power-saving policies may affect reminder delivery. After restarting the device or force-stopping the app, it is recommended to open Yahagi once to synchronize tasks.
* Keeping the game in the background increases battery use to some extent and cannot guarantee that WebView will never be reclaimed by the system.
* “Battle prediction” is a local helper calculation. Do not use it as a complete replacement for checking actual HP, evacuation, and damage control status.
* Android split screen, multiple windows, and picture-in-picture have not yet been fully adapted. Full screen is recommended.
* Google account login to DMM may still be subject to WebView security restrictions. Other available login methods are recommended.

Further development will continue to improve notification reliability, battle rules, OOI compatibility, native direct connection, local caching, and mobile performance based on testing feedback.

Thank you very much to all admirals for your continued testing, issue reports, feature suggestions, and support.

**Yahagi remains a personally maintained hobby project, and I will continue improving the mobile KanColle experience within my abilities.**`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.5/README.en.md`}}},{id:373944659,tag:`1.0.4`,name:`ヤハギ v1.0.4`,publishedAt:`2026-08-20T18:29:13Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.4`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.4/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.4/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.4/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.4/README.ko.md)

# ヤハギ v1.0.4 更新说明

本次更新主要围绕 **原生直连渲染、内置游戏资源缓存、战果中心全面重构、野埼刷闪计时器、持有一览多级排序、出击前检查与海域血条、远征规则、战斗机制与司令部退避预警、触控兼容及安全防护** 等方面进行了较大规模的升级。

同时修复了多项已知问题，并针对 **内存占用、设备发热、长时间运行稳定性以及不同 Android 设备之间的兼容性** 进行了进一步优化。

根据目前测试群的实际使用反馈，**「原生直连 + 完整缓存」是目前整体表现较好的组合**。截至本版本发布前，暂未收到明确由原生直连模式本身导致的闪退反馈，同时多数测试用户反馈设备发热情况相比此前有所改善。

需要说明的是，**Yahagi 本质上仍是一个集成辅助功能的舰 C WebView 浏览器客户端**。舰 C 本身为 HTML5 游戏，移动设备长时间通过 WebView 持续进行动画、Canvas / WebGL 与音视频资源渲染时，仍会持续占用 CPU、GPU 与内存，因此**长时间游戏后出现一定程度的发热属于正常现象**。本次优化的目标是尽可能降低额外损耗，而并非完全消除设备发热。目前 Yahagi 尚未针对 Android 分屏、多窗口及画中画（PiP）模式进行专门适配。 在这些显示模式下，应用窗口尺寸与比例可能频繁发生变化，部分界面布局、WebView 尺寸及原生视图层级可能无法及时完成重新计算，可能出现界面错位、显示异常、黑屏，极少数情况下也可能导致应用异常退出或闪退。**现阶段建议尽量在全屏模式下使用 Yahagi，后续将视情况逐步完善相关兼容性。**

**QQ 测试反馈群：1104904097**

---

# 一、新增功能与功能增强

## 1. 新增「原生直连」渲染模式

在现有的 **标准模式、高性能模式与兼容模式** 之外，新增第四种渲染模式——**「原生直连」**（Native Activity WebView）。

该模式采用与 GOTO 同类的**原生 WebView 直连渲染思路**，进一步缩短 Flutter 与 Android 原生视图之间的渲染链路，减少额外的图形合成与中间层资源开销，有助于降低运行时内存压力、设备发热以及资源压力导致的异常退出。

* **更直接的原生渲染链路**
  游戏 WebView 直接挂载至 Android 原生 Activity，由系统原生 View 层负责显示，不再经过 Flutter Platform View 的嵌入与多层图形合成。相比现有 Flutter WebView 模式，整体渲染链路更加精简，可减少中间层带来的额外性能开销。

* **更低的运行内存压力**
  由于减少了 Flutter 与 Android 原生视图之间的中间合成层，该模式通常可以降低额外的内存与图形资源占用。对于低内存设备尤其有利，可一定程度改善长时间运行后的内存持续升高、系统回收后台以及资源压力导致的异常退出等问题。

* **目前稳定性表现较好**
  经过测试群较长时间的实际使用，目前尚未收到明确由该模式本身导致的异常闪退反馈，整体稳定性表现较好。
  因此，**现阶段 Yahagi 默认使用「原生直连」渲染模式**。

* **画面自适应能力相对有限**
  原生直连模式绕过了 Flutter 层原有的部分布局约束与画面自适应逻辑，因此在部分特殊设备、分辨率变化、折叠屏状态变化或系统窗口切换时，对游戏画面尺寸的判断可能不够准确，**极少数情况下可能出现画面异常放大的现象**。

  此外，由于该模式直接采用 Android 原生 Activity 与 WebView 进行显示，在页面切换、横竖屏变化或视图重新布局时，**偶尔可能出现短暂的画面残留或刷新延迟**。这属于原生视图与 Surface 重新合成过程中可能出现的正常现象，一般会很快恢复，**不会影响游戏操作及游戏数据**。

  若遇到画面尺寸异常，可尝试使用 **「画面重置」按钮**或**刷新游戏页面**。程序会临时进行一次横屏 ↔ 竖屏切换，以重新触发系统布局与尺寸计算，通常即可恢复正常显示。

  后续版本也将继续完善原生模式下的尺寸检测与画面自适应逻辑。

---

## 2. 新增「内置式游戏资源缓存」系统

本次新增 Yahagi 自带的**游戏资源本地缓存系统**，工作方式类似岛风 GO 的本地缓存模式。

常用的舰娘立绘、装备、家具、地图、音效等静态资源可直接保存至设备本地，后续再次调用时优先从本地读取，从而减少重复从舰 C 官方服务器下载相同资源。

**强烈推荐启用本地缓存系统。**

对于长期使用 Yahagi 的用户，本地缓存不仅能够有效减少重复流量消耗，还可降低 WebView 反复下载、解析及缓存大量静态资源所产生的额外性能、存储与 I/O 压力，有助于改善长时间运行后的卡顿、资源占用升高以及异常退出等问题。

尤其对于**长时间运行舰 C、频繁切换游戏页面，或经常使用移动网络的用户**，建议优先启用 **「完整缓存」模式**，以获得更加稳定的资源加载体验，并进一步减少流量消耗。

该功能使用的游戏资源仍直接来自 **舰 C 官方资源服务器**，**不依赖外部代理、HTTPS 证书或第三方缓存程序**，所有缓存数据均由 Yahagi 在设备本地进行管理。

* **减少重复流量消耗**
  已缓存的游戏资源再次使用时可直接从本地读取，避免进入母港、编成、补给、工厂等页面时反复下载相同文件。对于经常使用移动网络的设备，可明显减少重复产生的资源流量。

* **降低重复加载带来的性能开销**
  将大量不会频繁变化的静态资源提前保存在本地，可减少游戏运行过程中重复进行网络请求、资源下载、解析及缓存所产生的额外开销，使页面切换与资源加载更加稳定。

* **减轻 WebView 自身缓存压力**
  普通模式下，大量游戏资源主要交由 Android WebView 自身的缓存机制处理。长时间运行后，缓存目录及相关资源占用可能逐渐增加。

  启用 Yahagi 内置缓存后，可由独立缓存引擎统一管理大量游戏静态资源，减少 WebView 对相同资源的重复缓存及缓存持续膨胀带来的存储、I/O 与运行压力，从而降低长时间运行后出现卡顿或异常退出的概率。

* **两种缓存模式**

  * **无本地缓存**：完全旁路 Yahagi 自有缓存系统，保持原始官方网络加载方式。
  * **完整缓存**：根据已知游戏资源清单，可一键预下载舰娘、装备、家具、地图、音效等静态资源；已经存在且校验正常的资源不会重复下载。

* **智能增量更新与网络控制**
  支持自动检查新增或更新后的官方资源。Wi-Fi 环境下可自动补充缺失资源；使用移动网络时会提前提示预计下载流量，由用户确认后再开始下载。下载任务支持**暂停、继续与断点续传**。

* **缓存维护与完整性检查**
  支持一键检查当前缓存的**占用容量、资源数量与完整度**，自动检测缺失或损坏文件并进行修复，同时支持随时安全清空 Yahagi 本地资源缓存。

---

## 3. 全面重构「战果中心」

战果中心全面重构为 **「战果信息」「战果日历」「战果计算」** 三个独立页面，并针对手机横竖屏、平板与折叠屏进行了响应式布局优化。

* **战果信息与出击统计**

  * 整合服务器信息、当前战果、历史排名走势及排名变化基准。
  * 新增 **「出击海域战果统计」**，自动实时记录本月各海域的出击次数、进入 Boss 次数、S 胜与 A 胜次数，并支持常用海域收藏与隐藏。

* **战果日历**

  * 独立页面展示 6×7 月度战果日历、每日战果明细与本月累计。
  * 战果数值统一精确至两位小数。

* **战果计算器**

  * 支持自定义 **「目标战果」**，实时显示预计战果进度及已选 EO、已选任务、剩余日数、素战果、每日所需战果、今日剩余目标等关键指标。
  * 集成 EO、季度战果任务、年度战果任务（AL 作战、机动部队决战）以及单次战果任务（火球炮等）。
  * 支持 **未计划 / 计划中 / 已完成（已结算）** 三态管理，并自动同步能够识别的游戏内通关状态，实时计算预计战果与目标差距。

* **素战果安全累计与手动校正**

  * 优化素战果累计算法（提督经验增加量 × 7 / 10000），加入乱序及重复快照保护，避免经验数据异常造成重复累计。
  * 在「设置 → 数据」新增 **「本月累计素战果」** 校正入口，可手动填写数值或一键归零。
  * 校正后自动同步调整相关排名变化基准。
  * 战果相关时间统一使用 **JST（日本标准时间）**。

---

## 4. 正式上线「野埼刷闪 / 计时器」

针对给粮舰 **「野埼」**（未改造 / 改）正式接入刷闪判定与计时系统。

* **智能识别编成**
  自动识别第 1 / 第 2 舰队中野埼的编成位置与状态，并根据舰型应用对应加成（未改 +2、改 +3，15 分钟结算周期）。

* **实时收益预测**
  根据舰队当前 Cond 状态，实时计算各舰娘达到 Cond 54 所需时间、预计结算周期数（Ticks）及燃料消耗。

* **状态提示与多舰队切换**
  支持显示刷闪中、已达成、野埼自身、入渠中、无法刷闪、尚未满足条件等状态，并可在界面内快速切换舰队查看。

---

## 5. 持有一览支持「锁定式多级排序」

全面重构舰娘持有一览表头排序交互，采用 **「点击临时排序，长按锁定优先级」** 的操作方式。

* **单列快速排序**
  点击任意未锁定表头，即可按该字段进行升序 / 降序排列。

* **多级锁定排序**
  长按表头可将该字段锁定为优先排序条件，并显示优先级编号及锁定状态；随后可继续增加第二、第三等多级排序条件。

* **长按解锁与一键还原**
  长按已锁定表头即可解除该条件，其他排序优先级自动前移。筛选栏新增**一键还原排序**按钮，同时保留当前舰种筛选状态。

* 统一各属性列宽、文字对齐及横向滚动表现，提升列表整体可读性。

---

## 6. 增强「出击前检查」与「海域血条」

首页出击前检查卡片新增 **「舰娘检查」** 与 **「海域血条」** 双模式切换。

* **舰娘检查模式**
  集中检查各舰队的未补给（油弹不足）、中破 / 大破、疲劳（红脸 / 橙脸）、工作舰泊地修理状态等风险。点击对应预警项可快速跳转至相关舰队。

* **海域血条模式**
  实时显示常规海域及 EO 海域的击破次数与通关进度（如 1-6、2-5、7-2 等），并支持显示活动海域血条剩余 HP 与百分比。
  同时支持选择是否显示已经通关的海域。

---

## 7. 增强战斗机制识别与司令部退避预警

* **舰队司令部设施（FCF）退避预警**
  完善战斗结果中的退避及护航拖曳信息识别。确认退避后，后续战斗节点会自动排除已经退避的舰娘，减少因舰队状态不同步造成的大破进击误报，并在回港或开始新一次出击时自动重置状态。

* **战斗机制与特殊攻击判定**
  新增或完善以下机制的静态条件识别及部分发动概率估算：

  * 先制对潜
  * 对空 CI
  * 对空喷进弹幕
  * 空母夜袭 CI
  * Nelson Touch
  * 长门 / 陆奥特殊攻击
  * Colorado Touch
  * 大和型特殊攻击
  * 金刚型 / 榛名僚舰夜战突击
  * Queen Elizabeth 级特殊攻击
  * Richelieu 级特殊攻击
  * 潜水舰队特殊攻击等

---

## 8. 安全防护与登录兼容性调整

* **DMM PT 充值页面阻断**
  优化 DMM 商店及道具购买流程，在应用内可正常查看商品、确认购买，并使用账号现有的 DMM PT 余额进行结算。

* 对 **「ポイントをチャージする」** 及相关外部充值跳转进行阻断，避免应用内意外进入充值页面，同时**不影响已有 DMM PT 余额的正常购买流程及返回游戏操作**。

* **解除此前对登录页面的限制**
  目前已可正常使用 DMM 账号等其他可用方式进行登录，不再对登录页面进行统一阻断。

* **Google 账号登录暂不支持**
  由于 Google 对 OAuth 登录环境存在安全限制，**Google 账号认证无法直接在普通 Android WebView 内完成**。因此，目前通过 Google 账号登录 DMM 的方式在 Yahagi 内仍无法正常使用。
  如账号同时具备其他可用的 DMM 登录方式，请优先使用其他方式登录。

---

## 9. Android 触摸兼容性优化

* 优化 Android WebView 下 PixiJS 触摸事件映射及 InteractionManager 相关兼容处理。
* 修复移动端在母港**长按「工厂」按钮无法进入明石改修工厂**的问题。
* 同时保持普通点击、拖动及其他游戏触控操作的正常响应。

---

## 10. 改修规划与任务中心细节增强

* **改修规划分级消耗**

  * 分阶段展示 \`0 → +6\` 与 \`+6 → MAX\` 的开发资材、改修资材消耗。
  * 区分普通改修与确保成功情况下的消耗。
  * 显示各星级阶段的固定消耗及追加消耗。

* **任务中心中文兜底**

  * 新增本地简体中文翻译兜底机制。
  * 补充部分上游暂未翻译或缺失的期间限定、日常任务中文说明。
  * 优化任务详情中的换行与排版处理。

---

## 11. 帧率设置调整与温控策略

* **档位文案调整**
  中文省电档统一命名为 **「低耗」**，固定 30 FPS，避免与 Android 系统级省电模式混淆。

* **自动档智能温控**
  自动档可响应 Android 系统节能状态及设备热状态。当设备达到一定热状态时，可主动降低至 30 FPS，以减轻持续发热。

* **前后台自动降载**
  应用进入后台后临时降低运行负载，并暂停部分 Dart 性能采样；恢复前台后自动恢复用户设定。

* 进一步明确 **60 FPS 封顶模式**与**高刷新率屏幕模式**之间的区别。

---

## 12. 顶部信息栏与诊断日志增强

* 顶部信息栏支持更多资源与道具自定义显示，并增强与泊地修理、野埼计时器等功能之间的快捷联动。
* 诊断日志新增：

  * 上一次进程退出原因（PreviousExitReason）
  * 设备运行快照（DeviceSnapshot）
  * 导出文件名规范化
  * 本地存储路径选择等功能

---

# 二、性能优化

1. **原生直连渲染优化**
   通过 Android 原生 WebView 挂载方案减少 Flutter Platform View 中间层的图形合成与资源开销，降低内存压力并改善长时间运行稳定性。

2. **本地静态资源快速加载**
   通过内置缓存引擎直接读取已经命中的本地图片、音频及其他静态资源，减少重复网络请求，提高母港、编成等页面的资源加载效率。

3. **后台数据处理与状态合并**
   对出击事件、战果统计及战斗数据增加串行处理与幂等校验，减少乱序或重复数据造成的重复计算及不必要的界面刷新。

4. **温控与后台性能降载**
   根据设备热状态与应用前后台状态动态调整部分运行负载与帧率，降低长期运行时的发热与电量消耗。

---

# 三、问题修复

本次更新修复及改善以下问题：

1. 修复折叠屏设备在展开 / 折叠屏幕时，游戏画面可能出现拉伸或黑边的问题。
2. 修复部分 Android 设备在特定情况下 WebGL 原生 Surface 渲染异常及画面重置问题。
3. 修复侧边栏自动隐藏模式下，编成界面舰娘无法拖动调整顺序的问题。
4. 修复航海日志中建造记录偶尔未能及时同步或丢失的问题，并增强日志数据库写入稳定性。
5. 修复部分远征大成功条件判断不准确及大成功率显示异常的问题。
6. 修复素战果在特定乱序经验快照下可能出现重复累计的问题。
7. 修复任务详情文本中部分 \`<br>\` 换行标签未正确解析造成的排版异常。
8. 修复切换侧边栏与全屏页面时，原生 WebView 偶尔出现层级遮挡的问题。
9. 修复多项 UI 在不同分辨率及屏幕比例下出现的文字截断、溢出与布局异常。
10. 修复若干已知异常，进一步提升整体稳定性及跨机型兼容性。
11. 完善远征评估器，对齐 Poi 远征判定规则，并修正部分舰种、等级、士气、装备、属性及大成功条件判断。

---

# 四、已知问题与后续开发计划

目前收到的兼容性问题反馈仍主要集中在**部分华为系及荣耀设备**，其他品牌设备的相关反馈相对较少。

Yahagi 主要依据 **Android、Flutter 与 Android WebView 的标准开发接口**进行开发与适配。由于不同手机厂商可能会对系统底层、WebView、窗口管理、图形渲染及系统组件进行不同程度的定制，因此部分设备上的兼容性问题可能具有较强的机型或系统版本特征，也可能较难在其他设备上稳定复现。

本次新增的 **「原生直连」渲染模式**与**「内置游戏资源缓存」**，也是针对移动端长期运行中的内存压力、图形合成开销、资源重复加载以及部分机型兼容性问题所进行的重要调整。

如果在使用过程中遇到**闪退、画面异常、功能识别错误或其他兼容性问题**，欢迎通过测试群反馈，并尽量同时导出 Yahagi 诊断日志。完整日志能够大幅提高问题定位和复现效率。

## 后续开发方向

之后的开发仍将主要围绕以下方向持续推进：

* 持续优化移动端舰 C 的操作与交互体验
* 提升不同设备、Android 版本及 WebView 环境下的兼容性
* 继续改善客户端内存占用、设备发热与功耗表现
* 完善现有辅助功能，并逐步加入更多实用工具
* 持续修正舰 C 游戏机制、远征与战斗条件的识别准确度
* 根据测试反馈继续完善原生直连与本地缓存系统

非常感谢各位提督一直以来提供的**测试、问题反馈、功能建议与支持**。

Yahagi 仍然是个人维护的兴趣项目，很多功能都是在大家的实际使用反馈中一点点完善起来的。后续也会继续在能力范围内尽可能改善使用体验。
`,notes:{"zh-CN":{body:`本次更新主要围绕 **原生直连渲染、内置游戏资源缓存、战果中心全面重构、野埼刷闪计时器、持有一览多级排序、出击前检查与海域血条、远征规则、战斗机制与司令部退避预警、触控兼容及安全防护** 等方面进行了较大规模的升级。

同时修复了多项已知问题，并针对 **内存占用、设备发热、长时间运行稳定性以及不同 Android 设备之间的兼容性** 进行了进一步优化。

根据目前测试群的实际使用反馈，**「原生直连 + 完整缓存」是目前整体表现较好的组合**。截至本版本发布前，暂未收到明确由原生直连模式本身导致的闪退反馈，同时多数测试用户反馈设备发热情况相比此前有所改善。

需要说明的是，**Yahagi 本质上仍是一个集成辅助功能的舰 C WebView 浏览器客户端**。舰 C 本身为 HTML5 游戏，移动设备长时间通过 WebView 持续进行动画、Canvas / WebGL 与音视频资源渲染时，仍会持续占用 CPU、GPU 与内存，因此**长时间游戏后出现一定程度的发热属于正常现象**。本次优化的目标是尽可能降低额外损耗，而并非完全消除设备发热。目前 Yahagi 尚未针对 Android 分屏、多窗口及画中画（PiP）模式进行专门适配。 在这些显示模式下，应用窗口尺寸与比例可能频繁发生变化，部分界面布局、WebView 尺寸及原生视图层级可能无法及时完成重新计算，可能出现界面错位、显示异常、黑屏，极少数情况下也可能导致应用异常退出或闪退。**现阶段建议尽量在全屏模式下使用 Yahagi，后续将视情况逐步完善相关兼容性。**

**QQ 测试反馈群：1104904097**

---

# 一、新增功能与功能增强

## 1. 新增「原生直连」渲染模式

在现有的 **标准模式、高性能模式与兼容模式** 之外，新增第四种渲染模式——**「原生直连」**（Native Activity WebView）。

该模式采用与 GOTO 同类的**原生 WebView 直连渲染思路**，进一步缩短 Flutter 与 Android 原生视图之间的渲染链路，减少额外的图形合成与中间层资源开销，有助于降低运行时内存压力、设备发热以及资源压力导致的异常退出。

* **更直接的原生渲染链路**
  游戏 WebView 直接挂载至 Android 原生 Activity，由系统原生 View 层负责显示，不再经过 Flutter Platform View 的嵌入与多层图形合成。相比现有 Flutter WebView 模式，整体渲染链路更加精简，可减少中间层带来的额外性能开销。

* **更低的运行内存压力**
  由于减少了 Flutter 与 Android 原生视图之间的中间合成层，该模式通常可以降低额外的内存与图形资源占用。对于低内存设备尤其有利，可一定程度改善长时间运行后的内存持续升高、系统回收后台以及资源压力导致的异常退出等问题。

* **目前稳定性表现较好**
  经过测试群较长时间的实际使用，目前尚未收到明确由该模式本身导致的异常闪退反馈，整体稳定性表现较好。
  因此，**现阶段 Yahagi 默认使用「原生直连」渲染模式**。

* **画面自适应能力相对有限**
  原生直连模式绕过了 Flutter 层原有的部分布局约束与画面自适应逻辑，因此在部分特殊设备、分辨率变化、折叠屏状态变化或系统窗口切换时，对游戏画面尺寸的判断可能不够准确，**极少数情况下可能出现画面异常放大的现象**。

  此外，由于该模式直接采用 Android 原生 Activity 与 WebView 进行显示，在页面切换、横竖屏变化或视图重新布局时，**偶尔可能出现短暂的画面残留或刷新延迟**。这属于原生视图与 Surface 重新合成过程中可能出现的正常现象，一般会很快恢复，**不会影响游戏操作及游戏数据**。

  若遇到画面尺寸异常，可尝试使用 **「画面重置」按钮**或**刷新游戏页面**。程序会临时进行一次横屏 ↔ 竖屏切换，以重新触发系统布局与尺寸计算，通常即可恢复正常显示。

  后续版本也将继续完善原生模式下的尺寸检测与画面自适应逻辑。

---

## 2. 新增「内置式游戏资源缓存」系统

本次新增 Yahagi 自带的**游戏资源本地缓存系统**，工作方式类似岛风 GO 的本地缓存模式。

常用的舰娘立绘、装备、家具、地图、音效等静态资源可直接保存至设备本地，后续再次调用时优先从本地读取，从而减少重复从舰 C 官方服务器下载相同资源。

**强烈推荐启用本地缓存系统。**

对于长期使用 Yahagi 的用户，本地缓存不仅能够有效减少重复流量消耗，还可降低 WebView 反复下载、解析及缓存大量静态资源所产生的额外性能、存储与 I/O 压力，有助于改善长时间运行后的卡顿、资源占用升高以及异常退出等问题。

尤其对于**长时间运行舰 C、频繁切换游戏页面，或经常使用移动网络的用户**，建议优先启用 **「完整缓存」模式**，以获得更加稳定的资源加载体验，并进一步减少流量消耗。

该功能使用的游戏资源仍直接来自 **舰 C 官方资源服务器**，**不依赖外部代理、HTTPS 证书或第三方缓存程序**，所有缓存数据均由 Yahagi 在设备本地进行管理。

* **减少重复流量消耗**
  已缓存的游戏资源再次使用时可直接从本地读取，避免进入母港、编成、补给、工厂等页面时反复下载相同文件。对于经常使用移动网络的设备，可明显减少重复产生的资源流量。

* **降低重复加载带来的性能开销**
  将大量不会频繁变化的静态资源提前保存在本地，可减少游戏运行过程中重复进行网络请求、资源下载、解析及缓存所产生的额外开销，使页面切换与资源加载更加稳定。

* **减轻 WebView 自身缓存压力**
  普通模式下，大量游戏资源主要交由 Android WebView 自身的缓存机制处理。长时间运行后，缓存目录及相关资源占用可能逐渐增加。

  启用 Yahagi 内置缓存后，可由独立缓存引擎统一管理大量游戏静态资源，减少 WebView 对相同资源的重复缓存及缓存持续膨胀带来的存储、I/O 与运行压力，从而降低长时间运行后出现卡顿或异常退出的概率。

* **两种缓存模式**

  * **无本地缓存**：完全旁路 Yahagi 自有缓存系统，保持原始官方网络加载方式。
  * **完整缓存**：根据已知游戏资源清单，可一键预下载舰娘、装备、家具、地图、音效等静态资源；已经存在且校验正常的资源不会重复下载。

* **智能增量更新与网络控制**
  支持自动检查新增或更新后的官方资源。Wi-Fi 环境下可自动补充缺失资源；使用移动网络时会提前提示预计下载流量，由用户确认后再开始下载。下载任务支持**暂停、继续与断点续传**。

* **缓存维护与完整性检查**
  支持一键检查当前缓存的**占用容量、资源数量与完整度**，自动检测缺失或损坏文件并进行修复，同时支持随时安全清空 Yahagi 本地资源缓存。

---

## 3. 全面重构「战果中心」

战果中心全面重构为 **「战果信息」「战果日历」「战果计算」** 三个独立页面，并针对手机横竖屏、平板与折叠屏进行了响应式布局优化。

* **战果信息与出击统计**

  * 整合服务器信息、当前战果、历史排名走势及排名变化基准。
  * 新增 **「出击海域战果统计」**，自动实时记录本月各海域的出击次数、进入 Boss 次数、S 胜与 A 胜次数，并支持常用海域收藏与隐藏。

* **战果日历**

  * 独立页面展示 6×7 月度战果日历、每日战果明细与本月累计。
  * 战果数值统一精确至两位小数。

* **战果计算器**

  * 支持自定义 **「目标战果」**，实时显示预计战果进度及已选 EO、已选任务、剩余日数、素战果、每日所需战果、今日剩余目标等关键指标。
  * 集成 EO、季度战果任务、年度战果任务（AL 作战、机动部队决战）以及单次战果任务（火球炮等）。
  * 支持 **未计划 / 计划中 / 已完成（已结算）** 三态管理，并自动同步能够识别的游戏内通关状态，实时计算预计战果与目标差距。

* **素战果安全累计与手动校正**

  * 优化素战果累计算法（提督经验增加量 × 7 / 10000），加入乱序及重复快照保护，避免经验数据异常造成重复累计。
  * 在「设置 → 数据」新增 **「本月累计素战果」** 校正入口，可手动填写数值或一键归零。
  * 校正后自动同步调整相关排名变化基准。
  * 战果相关时间统一使用 **JST（日本标准时间）**。

---

## 4. 正式上线「野埼刷闪 / 计时器」

针对给粮舰 **「野埼」**（未改造 / 改）正式接入刷闪判定与计时系统。

* **智能识别编成**
  自动识别第 1 / 第 2 舰队中野埼的编成位置与状态，并根据舰型应用对应加成（未改 +2、改 +3，15 分钟结算周期）。

* **实时收益预测**
  根据舰队当前 Cond 状态，实时计算各舰娘达到 Cond 54 所需时间、预计结算周期数（Ticks）及燃料消耗。

* **状态提示与多舰队切换**
  支持显示刷闪中、已达成、野埼自身、入渠中、无法刷闪、尚未满足条件等状态，并可在界面内快速切换舰队查看。

---

## 5. 持有一览支持「锁定式多级排序」

全面重构舰娘持有一览表头排序交互，采用 **「点击临时排序，长按锁定优先级」** 的操作方式。

* **单列快速排序**
  点击任意未锁定表头，即可按该字段进行升序 / 降序排列。

* **多级锁定排序**
  长按表头可将该字段锁定为优先排序条件，并显示优先级编号及锁定状态；随后可继续增加第二、第三等多级排序条件。

* **长按解锁与一键还原**
  长按已锁定表头即可解除该条件，其他排序优先级自动前移。筛选栏新增**一键还原排序**按钮，同时保留当前舰种筛选状态。

* 统一各属性列宽、文字对齐及横向滚动表现，提升列表整体可读性。

---

## 6. 增强「出击前检查」与「海域血条」

首页出击前检查卡片新增 **「舰娘检查」** 与 **「海域血条」** 双模式切换。

* **舰娘检查模式**
  集中检查各舰队的未补给（油弹不足）、中破 / 大破、疲劳（红脸 / 橙脸）、工作舰泊地修理状态等风险。点击对应预警项可快速跳转至相关舰队。

* **海域血条模式**
  实时显示常规海域及 EO 海域的击破次数与通关进度（如 1-6、2-5、7-2 等），并支持显示活动海域血条剩余 HP 与百分比。
  同时支持选择是否显示已经通关的海域。

---

## 7. 增强战斗机制识别与司令部退避预警

* **舰队司令部设施（FCF）退避预警**
  完善战斗结果中的退避及护航拖曳信息识别。确认退避后，后续战斗节点会自动排除已经退避的舰娘，减少因舰队状态不同步造成的大破进击误报，并在回港或开始新一次出击时自动重置状态。

* **战斗机制与特殊攻击判定**
  新增或完善以下机制的静态条件识别及部分发动概率估算：

  * 先制对潜
  * 对空 CI
  * 对空喷进弹幕
  * 空母夜袭 CI
  * Nelson Touch
  * 长门 / 陆奥特殊攻击
  * Colorado Touch
  * 大和型特殊攻击
  * 金刚型 / 榛名僚舰夜战突击
  * Queen Elizabeth 级特殊攻击
  * Richelieu 级特殊攻击
  * 潜水舰队特殊攻击等

---

## 8. 安全防护与登录兼容性调整

* **DMM PT 充值页面阻断**
  优化 DMM 商店及道具购买流程，在应用内可正常查看商品、确认购买，并使用账号现有的 DMM PT 余额进行结算。

* 对 **「ポイントをチャージする」** 及相关外部充值跳转进行阻断，避免应用内意外进入充值页面，同时**不影响已有 DMM PT 余额的正常购买流程及返回游戏操作**。

* **解除此前对登录页面的限制**
  目前已可正常使用 DMM 账号等其他可用方式进行登录，不再对登录页面进行统一阻断。

* **Google 账号登录暂不支持**
  由于 Google 对 OAuth 登录环境存在安全限制，**Google 账号认证无法直接在普通 Android WebView 内完成**。因此，目前通过 Google 账号登录 DMM 的方式在 Yahagi 内仍无法正常使用。
  如账号同时具备其他可用的 DMM 登录方式，请优先使用其他方式登录。

---

## 9. Android 触摸兼容性优化

* 优化 Android WebView 下 PixiJS 触摸事件映射及 InteractionManager 相关兼容处理。
* 修复移动端在母港**长按「工厂」按钮无法进入明石改修工厂**的问题。
* 同时保持普通点击、拖动及其他游戏触控操作的正常响应。

---

## 10. 改修规划与任务中心细节增强

* **改修规划分级消耗**

  * 分阶段展示 \`0 → +6\` 与 \`+6 → MAX\` 的开发资材、改修资材消耗。
  * 区分普通改修与确保成功情况下的消耗。
  * 显示各星级阶段的固定消耗及追加消耗。

* **任务中心中文兜底**

  * 新增本地简体中文翻译兜底机制。
  * 补充部分上游暂未翻译或缺失的期间限定、日常任务中文说明。
  * 优化任务详情中的换行与排版处理。

---

## 11. 帧率设置调整与温控策略

* **档位文案调整**
  中文省电档统一命名为 **「低耗」**，固定 30 FPS，避免与 Android 系统级省电模式混淆。

* **自动档智能温控**
  自动档可响应 Android 系统节能状态及设备热状态。当设备达到一定热状态时，可主动降低至 30 FPS，以减轻持续发热。

* **前后台自动降载**
  应用进入后台后临时降低运行负载，并暂停部分 Dart 性能采样；恢复前台后自动恢复用户设定。

* 进一步明确 **60 FPS 封顶模式**与**高刷新率屏幕模式**之间的区别。

---

## 12. 顶部信息栏与诊断日志增强

* 顶部信息栏支持更多资源与道具自定义显示，并增强与泊地修理、野埼计时器等功能之间的快捷联动。
* 诊断日志新增：

  * 上一次进程退出原因（PreviousExitReason）
  * 设备运行快照（DeviceSnapshot）
  * 导出文件名规范化
  * 本地存储路径选择等功能

---

# 二、性能优化

1. **原生直连渲染优化**
   通过 Android 原生 WebView 挂载方案减少 Flutter Platform View 中间层的图形合成与资源开销，降低内存压力并改善长时间运行稳定性。

2. **本地静态资源快速加载**
   通过内置缓存引擎直接读取已经命中的本地图片、音频及其他静态资源，减少重复网络请求，提高母港、编成等页面的资源加载效率。

3. **后台数据处理与状态合并**
   对出击事件、战果统计及战斗数据增加串行处理与幂等校验，减少乱序或重复数据造成的重复计算及不必要的界面刷新。

4. **温控与后台性能降载**
   根据设备热状态与应用前后台状态动态调整部分运行负载与帧率，降低长期运行时的发热与电量消耗。

---

# 三、问题修复

本次更新修复及改善以下问题：

1. 修复折叠屏设备在展开 / 折叠屏幕时，游戏画面可能出现拉伸或黑边的问题。
2. 修复部分 Android 设备在特定情况下 WebGL 原生 Surface 渲染异常及画面重置问题。
3. 修复侧边栏自动隐藏模式下，编成界面舰娘无法拖动调整顺序的问题。
4. 修复航海日志中建造记录偶尔未能及时同步或丢失的问题，并增强日志数据库写入稳定性。
5. 修复部分远征大成功条件判断不准确及大成功率显示异常的问题。
6. 修复素战果在特定乱序经验快照下可能出现重复累计的问题。
7. 修复任务详情文本中部分 \`<br>\` 换行标签未正确解析造成的排版异常。
8. 修复切换侧边栏与全屏页面时，原生 WebView 偶尔出现层级遮挡的问题。
9. 修复多项 UI 在不同分辨率及屏幕比例下出现的文字截断、溢出与布局异常。
10. 修复若干已知异常，进一步提升整体稳定性及跨机型兼容性。
11. 完善远征评估器，对齐 Poi 远征判定规则，并修正部分舰种、等级、士气、装备、属性及大成功条件判断。

---

# 四、已知问题与后续开发计划

目前收到的兼容性问题反馈仍主要集中在**部分华为系及荣耀设备**，其他品牌设备的相关反馈相对较少。

Yahagi 主要依据 **Android、Flutter 与 Android WebView 的标准开发接口**进行开发与适配。由于不同手机厂商可能会对系统底层、WebView、窗口管理、图形渲染及系统组件进行不同程度的定制，因此部分设备上的兼容性问题可能具有较强的机型或系统版本特征，也可能较难在其他设备上稳定复现。

本次新增的 **「原生直连」渲染模式**与**「内置游戏资源缓存」**，也是针对移动端长期运行中的内存压力、图形合成开销、资源重复加载以及部分机型兼容性问题所进行的重要调整。

如果在使用过程中遇到**闪退、画面异常、功能识别错误或其他兼容性问题**，欢迎通过测试群反馈，并尽量同时导出 Yahagi 诊断日志。完整日志能够大幅提高问题定位和复现效率。

## 后续开发方向

之后的开发仍将主要围绕以下方向持续推进：

* 持续优化移动端舰 C 的操作与交互体验
* 提升不同设备、Android 版本及 WebView 环境下的兼容性
* 继续改善客户端内存占用、设备发热与功耗表现
* 完善现有辅助功能，并逐步加入更多实用工具
* 持续修正舰 C 游戏机制、远征与战斗条件的识别准确度
* 根据测试反馈继续完善原生直连与本地缓存系统

非常感谢各位提督一直以来提供的**测试、问题反馈、功能建议与支持**。

Yahagi 仍然是个人维护的兴趣项目，很多功能都是在大家的实际使用反馈中一点点完善起来的。后续也会继续在能力范围内尽可能改善使用体验。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.4/README.md`},"zh-TW":{body:`本次更新主要圍繞 **原生直連繪製、內建遊戲資源快取、戰果中心全面重構、野埼刷閃計時器、持有一覽多級排序、出擊前檢查與海域血條、遠征規則、戰鬥機制與司令部退避預警、觸控相容及安全防護** 等方面進行了較大規模的升級。

同時修復了多項已知問題，並針對 **記憶體占用、裝置發熱、長時間執行穩定性以及不同 Android 裝置之間的相容性** 進行了進一步最佳化。

根據目前測試群的實際使用回饋，**「原生直連 + 完整快取」是目前整體表現較好的組合**。截至本版本發布前，暫未收到明確由原生直連模式本身導致的閃退回饋，同時多數測試使用者回饋裝置發熱情況相比此前有所改善。

需要說明的是，**Yahagi 本質上仍是一個整合輔助功能的艦 C WebView 瀏覽器用戶端**。艦 C 本身為 HTML5 遊戲，行動裝置長時間透過 WebView 持續進行動畫、Canvas / WebGL 與影音資源繪製時，仍會持續占用 CPU、GPU 與記憶體，因此**長時間遊戲後出現一定程度的發熱屬於正常現象**。本次最佳化的目標是盡可能降低額外損耗，而非完全消除裝置發熱。目前 Yahagi 尚未針對 Android 分割畫面、多視窗及子母畫面（PiP）模式進行專門適配。在這些顯示模式下，應用程式視窗尺寸與比例可能頻繁發生變化，部分介面配置、WebView 尺寸及原生檢視層級可能無法及時完成重新計算，可能出現介面錯位、顯示異常、黑畫面，極少數情況下也可能導致應用程式異常退出或閃退。**現階段建議盡量在全螢幕模式下使用 Yahagi，後續將視情況逐步完善相關相容性。**

**QQ 測試回饋群：1104904097**

---

# 一、新增功能與功能增強

## 1. 新增「原生直連」繪製模式

在現有的 **標準模式、高效能模式與相容模式** 之外，新增第四種繪製模式——**「原生直連」**（Native Activity WebView）。

此模式採用與 GOTO 同類的**原生 WebView 直連繪製方式**，進一步縮短 Flutter 與 Android 原生檢視之間的繪製鏈路，減少額外的圖形合成與中間層資源開銷，有助於降低執行時記憶體壓力、裝置發熱以及資源壓力導致的異常退出。

* **更直接的原生繪製鏈路**
  遊戲 WebView 直接掛載至 Android 原生 Activity，由系統原生 View 層負責顯示，不再經過 Flutter Platform View 的嵌入與多層圖形合成。相較現有 Flutter WebView 模式，整體繪製鏈路更加精簡，可減少中間層帶來的額外效能開銷。

* **更低的執行記憶體壓力**
  由於減少了 Flutter 與 Android 原生檢視之間的中間合成層，此模式通常可以降低額外的記憶體與圖形資源占用。對於低記憶體裝置尤其有利，可在一定程度上改善長時間執行後記憶體持續增加、系統回收背景程序以及資源壓力導致的異常退出等問題。

* **目前穩定性表現較好**
  經過測試群較長時間的實際使用，目前尚未收到明確由此模式本身導致的異常閃退回饋，整體穩定性表現較好。
  因此，**現階段 Yahagi 預設使用「原生直連」繪製模式**。

* **畫面自適應能力相對有限**
  原生直連模式略過了 Flutter 層原有的部分配置約束與畫面自適應邏輯，因此在部分特殊裝置、解析度變化、摺疊螢幕狀態變化或系統視窗切換時，對遊戲畫面尺寸的判斷可能不夠準確，**極少數情況下可能出現畫面異常放大的現象**。

  此外，由於此模式直接採用 Android 原生 Activity 與 WebView 進行顯示，在頁面切換、橫直向變化或檢視重新配置時，**偶爾可能出現短暫的畫面殘留或更新延遲**。這屬於原生檢視與 Surface 重新合成過程中可能出現的正常現象，一般會很快恢復，**不會影響遊戲操作及遊戲資料**。

  若遇到畫面尺寸異常，可嘗試使用 **「畫面重設」按鈕**或**重新整理遊戲頁面**。程式會暫時進行一次橫向 ↔ 直向切換，以重新觸發系統配置與尺寸計算，通常即可恢復正常顯示。

  後續版本也將繼續完善原生模式下的尺寸偵測與畫面自適應邏輯。

---

## 2. 新增「內建式遊戲資源快取」系統

本次新增 Yahagi 自帶的**遊戲資源本機快取系統**，運作方式類似島風 GO 的本機快取模式。

常用的艦娘立繪、裝備、家具、地圖、音效等靜態資源可直接儲存至裝置本機，後續再次呼叫時優先從本機讀取，從而減少重複從艦 C 官方伺服器下載相同資源。

**強烈推薦啟用本機快取系統。**

對於長期使用 Yahagi 的使用者，本機快取不僅能夠有效減少重複流量消耗，還可降低 WebView 反覆下載、解析及快取大量靜態資源所產生的額外效能、儲存與 I/O 壓力，有助於改善長時間執行後的延遲、資源占用增加以及異常退出等問題。

尤其對於**長時間執行艦 C、頻繁切換遊戲頁面，或經常使用行動網路的使用者**，建議優先啟用 **「完整快取」模式**，以獲得更加穩定的資源載入體驗，並進一步減少流量消耗。

此功能使用的遊戲資源仍直接來自 **艦 C 官方資源伺服器**，**不依賴外部代理、HTTPS 憑證或第三方快取程式**，所有快取資料均由 Yahagi 在裝置本機進行管理。

* **減少重複流量消耗**
  已快取的遊戲資源再次使用時可直接從本機讀取，避免進入母港、編成、補給、工廠等頁面時反覆下載相同檔案。對於經常使用行動網路的裝置，可明顯減少重複產生的資源流量。

* **降低重複載入帶來的效能開銷**
  將大量不會頻繁變化的靜態資源預先儲存在本機，可減少遊戲執行過程中重複進行網路請求、資源下載、解析及快取所產生的額外開銷，使頁面切換與資源載入更加穩定。

* **減輕 WebView 自身快取壓力**
  一般模式下，大量遊戲資源主要交由 Android WebView 自身的快取機制處理。長時間執行後，快取目錄及相關資源占用可能逐漸增加。

  啟用 Yahagi 內建快取後，可由獨立快取引擎統一管理大量遊戲靜態資源，減少 WebView 對相同資源的重複快取及快取持續膨脹帶來的儲存、I/O 與執行壓力，從而降低長時間執行後出現延遲或異常退出的機率。

* **兩種快取模式**

  * **無本機快取**：完全略過 Yahagi 自有快取系統，維持原始官方網路載入方式。
  * **完整快取**：根據已知遊戲資源清單，可一鍵預先下載艦娘、裝備、家具、地圖、音效等靜態資源；已經存在且驗證正常的資源不會重複下載。

* **智慧增量更新與網路控制**
  支援自動檢查新增或更新後的官方資源。Wi-Fi 環境下可自動補充缺失資源；使用行動網路時會事先提示預估下載流量，由使用者確認後再開始下載。下載任務支援**暫停、繼續與斷點續傳**。

* **快取維護與完整性檢查**
  支援一鍵檢查目前快取的**占用容量、資源數量與完整度**，自動偵測缺失或損壞檔案並進行修復，同時支援隨時安全清空 Yahagi 本機資源快取。

---

## 3. 全面重構「戰果中心」

戰果中心全面重構為 **「戰果資訊」「戰果日曆」「戰果計算」** 三個獨立頁面，並針對手機橫直向、平板與摺疊螢幕進行了響應式配置最佳化。

* **戰果資訊與出擊統計**

  * 整合伺服器資訊、目前戰果、歷史排名趨勢及排名變化基準。
  * 新增 **「出擊海域戰果統計」**，自動即時記錄本月各海域的出擊次數、進入 Boss 次數、S 勝與 A 勝次數，並支援常用海域收藏與隱藏。

* **戰果日曆**

  * 獨立頁面展示 6×7 月度戰果日曆、每日戰果明細與本月累計。
  * 戰果數值統一精確至小數點後兩位。

* **戰果計算器**

  * 支援自訂 **「目標戰果」**，即時顯示預估戰果進度及已選 EO、已選任務、剩餘日數、素戰果、每日所需戰果、今日剩餘目標等關鍵指標。
  * 整合 EO、季度戰果任務、年度戰果任務（AL 作戰、機動部隊決戰）以及單次戰果任務（火球炮等）。
  * 支援 **未規劃 / 規劃中 / 已完成（已結算）** 三態管理，並自動同步能夠識別的遊戲內通關狀態，即時計算預估戰果與目標差距。

* **素戰果安全累計與手動校正**

  * 最佳化素戰果累計演算法（提督經驗增加量 × 7 / 10000），加入亂序及重複快照保護，避免經驗資料異常造成重複累計。
  * 在「設定 → 資料」新增 **「本月累計素戰果」** 校正入口，可手動填寫數值或一鍵歸零。
  * 校正後自動同步調整相關排名變化基準。
  * 戰果相關時間統一使用 **JST（日本標準時間）**。

---

## 4. 正式推出「野埼刷閃 / 計時器」

針對給糧艦 **「野埼」**（未改造 / 改）正式接入刷閃判定與計時系統。

* **智慧識別編成**
  自動識別第 1 / 第 2 艦隊中野埼的編成位置與狀態，並根據艦型套用對應加成（未改 +2、改 +3，15 分鐘結算週期）。

* **即時收益預測**
  根據艦隊目前 Cond 狀態，即時計算各艦娘達到 Cond 54 所需時間、預估結算週期數（Ticks）及燃料消耗。

* **狀態提示與多艦隊切換**
  支援顯示刷閃中、已達成、野埼自身、入渠中、無法刷閃、尚未滿足條件等狀態，並可在介面內快速切換艦隊查看。

---

## 5. 持有一覽支援「鎖定式多級排序」

全面重構艦娘持有一覽表頭排序互動，採用 **「點擊暫時排序，長按鎖定優先順序」** 的操作方式。

* **單欄快速排序**
  點擊任意未鎖定表頭，即可按該欄位進行升冪 / 降冪排列。

* **多級鎖定排序**
  長按表頭可將該欄位鎖定為優先排序條件，並顯示優先順序編號及鎖定狀態；隨後可繼續增加第二、第三等多級排序條件。

* **長按解鎖與一鍵還原**
  長按已鎖定表頭即可解除該條件，其他排序優先順序自動前移。篩選列新增**一鍵還原排序**按鈕，同時保留目前艦種篩選狀態。

* 統一各屬性欄寬、文字對齊及水平捲動表現，提升列表整體可讀性。

---

## 6. 增強「出擊前檢查」與「海域血條」

首頁出擊前檢查卡片新增 **「艦娘檢查」** 與 **「海域血條」** 雙模式切換。

* **艦娘檢查模式**
  集中檢查各艦隊的未補給（油彈不足）、中破 / 大破、疲勞（紅臉 / 橙臉）、工作艦泊地修理狀態等風險。點擊對應預警項可快速跳轉至相關艦隊。

* **海域血條模式**
  即時顯示一般海域及 EO 海域的擊破次數與通關進度（如 1-6、2-5、7-2 等），並支援顯示活動海域血條剩餘 HP 與百分比。
  同時支援選擇是否顯示已經通關的海域。

---

## 7. 增強戰鬥機制識別與司令部退避預警

* **艦隊司令部設施（FCF）退避預警**
  完善戰鬥結果中的退避及護航拖曳資訊識別。確認退避後，後續戰鬥節點會自動排除已經退避的艦娘，減少因艦隊狀態不同步造成的大破進擊誤報，並在回港或開始新一次出擊時自動重設狀態。

* **戰鬥機制與特殊攻擊判定**
  新增或完善以下機制的靜態條件識別及部分發動機率估算：

  * 先制對潛
  * 對空 CI
  * 對空噴進彈幕
  * 空母夜襲 CI
  * Nelson Touch
  * 長門 / 陸奧特殊攻擊
  * Colorado Touch
  * 大和型特殊攻擊
  * 金剛型 / 榛名僚艦夜戰突擊
  * Queen Elizabeth 級特殊攻擊
  * Richelieu 級特殊攻擊
  * 潛水艦隊特殊攻擊等

---

## 8. 安全防護與登入相容性調整

* **DMM PT 儲值頁面阻斷**
  最佳化 DMM 商店及道具購買流程，在應用程式內可正常查看商品、確認購買，並使用帳號現有的 DMM PT 餘額進行結算。

* 對 **「ポイントをチャージする」** 及相關外部儲值跳轉進行阻斷，避免應用程式內意外進入儲值頁面，同時**不影響既有 DMM PT 餘額的正常購買流程及返回遊戲操作**。

* **解除此前對登入頁面的限制**
  目前已可正常使用 DMM 帳號等其他可用方式進行登入，不再對登入頁面進行統一阻斷。

* **Google 帳號登入暫不支援**
  由於 Google 對 OAuth 登入環境存在安全限制，**Google 帳號驗證無法直接在一般 Android WebView 內完成**。因此，目前透過 Google 帳號登入 DMM 的方式在 Yahagi 內仍無法正常使用。
  如帳號同時具備其他可用的 DMM 登入方式，請優先使用其他方式登入。

---

## 9. Android 觸控相容性最佳化

* 最佳化 Android WebView 下 PixiJS 觸控事件對應及 InteractionManager 相關相容處理。
* 修復行動端在母港**長按「工廠」按鈕無法進入明石改修工廠**的問題。
* 同時維持一般點擊、拖曳及其他遊戲觸控操作的正常回應。

---

## 10. 改修規劃與任務中心細節增強

* **改修規劃分級消耗**

  * 分階段展示 \`0 → +6\` 與 \`+6 → MAX\` 的開發資材、改修資材消耗。
  * 區分一般改修與確保成功情況下的消耗。
  * 顯示各星級階段的固定消耗及追加消耗。

* **任務中心中文備援翻譯**

  * 新增本機簡體中文備援翻譯機制。
  * 補充部分上游暫未翻譯或缺失的期間限定、日常任務中文說明。
  * 最佳化任務詳情中的換行與排版處理。

---

## 11. 影格率設定調整與溫控策略

* **檔位文字調整**
  中文省電檔統一命名為 **「低耗」**，固定 30 FPS，避免與 Android 系統層級省電模式混淆。

* **自動檔智慧溫控**
  自動檔可回應 Android 系統節能狀態及裝置熱狀態。當裝置達到一定熱狀態時，可主動降低至 30 FPS，以減輕持續發熱。

* **前景背景自動降載**
  應用程式進入背景後暫時降低執行負載，並暫停部分 Dart 效能採樣；恢復前景後自動恢復使用者設定。

* 進一步明確 **60 FPS 封頂模式**與**高更新率螢幕模式**之間的區別。

---

## 12. 頂部資訊列與診斷日誌增強

* 頂部資訊列支援更多資源與道具自訂顯示，並增強與泊地修理、野埼計時器等功能之間的快捷聯動。
* 診斷日誌新增：

  * 上一次程序退出原因（PreviousExitReason）
  * 裝置執行快照（DeviceSnapshot）
  * 匯出檔案名稱標準化
  * 本機儲存路徑選擇等功能

---

# 二、效能最佳化

1. **原生直連繪製最佳化**
   透過 Android 原生 WebView 掛載方案減少 Flutter Platform View 中間層的圖形合成與資源開銷，降低記憶體壓力並改善長時間執行穩定性。

2. **本機靜態資源快速載入**
   透過內建快取引擎直接讀取已經命中的本機圖片、音訊及其他靜態資源，減少重複網路請求，提高母港、編成等頁面的資源載入效率。

3. **背景資料處理與狀態合併**
   對出擊事件、戰果統計及戰鬥資料增加循序處理與冪等檢查，減少亂序或重複資料造成的重複計算及不必要的介面更新。

4. **溫控與背景效能降載**
   根據裝置熱狀態與應用程式前景背景狀態動態調整部分執行負載與影格率，降低長期執行時的發熱與電量消耗。

---

# 三、問題修復

本次更新修復及改善以下問題：

1. 修復摺疊螢幕裝置在展開 / 摺疊螢幕時，遊戲畫面可能出現拉伸或黑邊的問題。
2. 修復部分 Android 裝置在特定情況下 WebGL 原生 Surface 繪製異常及畫面重設問題。
3. 修復側邊欄自動隱藏模式下，編成介面艦娘無法拖曳調整順序的問題。
4. 修復航海日誌中建造記錄偶爾未能及時同步或遺失的問題，並增強日誌資料庫寫入穩定性。
5. 修復部分遠征大成功條件判斷不準確及大成功率顯示異常的問題。
6. 修復素戰果在特定亂序經驗快照下可能出現重複累計的問題。
7. 修復任務詳情文字中部分 \`<br>\` 換行標籤未正確解析造成的排版異常。
8. 修復切換側邊欄與全螢幕頁面時，原生 WebView 偶爾出現層級遮擋的問題。
9. 修復多項 UI 在不同解析度及螢幕比例下出現的文字截斷、溢位與配置異常。
10. 修復若干已知異常，進一步提升整體穩定性及跨機型相容性。
11. 完善遠征評估器，對齊 Poi 遠征判定規則，並修正部分艦種、等級、士氣、裝備、屬性及大成功條件判斷。

---

# 四、已知問題與後續開發計畫

目前收到的相容性問題回饋仍主要集中在**部分華為系列及榮耀裝置**，其他品牌裝置的相關回饋相對較少。

Yahagi 主要依據 **Android、Flutter 與 Android WebView 的標準開發介面**進行開發與適配。由於不同手機廠商可能會對系統底層、WebView、視窗管理、圖形繪製及系統元件進行不同程度的客製，因此部分裝置上的相容性問題可能具有較強的機型或系統版本特徵，也可能較難在其他裝置上穩定重現。

本次新增的 **「原生直連」繪製模式**與**「內建遊戲資源快取」**，也是針對行動端長期執行中的記憶體壓力、圖形合成開銷、資源重複載入以及部分機型相容性問題所進行的重要調整。

如果在使用過程中遇到**閃退、畫面異常、功能識別錯誤或其他相容性問題**，歡迎透過測試群回饋，並盡量同時匯出 Yahagi 診斷日誌。完整日誌能夠大幅提高問題定位和重現效率。

## 後續開發方向

之後的開發仍將主要圍繞以下方向持續推進：

* 持續最佳化行動端艦 C 的操作與互動體驗
* 提升不同裝置、Android 版本及 WebView 環境下的相容性
* 繼續改善用戶端記憶體占用、裝置發熱與耗電表現
* 完善現有輔助功能，並逐步加入更多實用工具
* 持續修正艦 C 遊戲機制、遠征與戰鬥條件的識別準確度
* 根據測試回饋繼續完善原生直連與本機快取系統

非常感謝各位提督一直以來提供的**測試、問題回饋、功能建議與支持**。

Yahagi 仍然是個人維護的興趣專案，很多功能都是在大家的實際使用回饋中一點一點完善起來的。後續也會繼續在能力範圍內盡可能改善使用體驗。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.4/README.zh-Hant.md`},ja:{body:`今回のアップデートでは、主に **ネイティブ直接描画、内蔵ゲームリソースキャッシュ、戦果センターの全面再構築、野埼キラ付けタイマー、所持艦一覧の多段階ソート、出撃前検査と海域ゲージ、遠征ルール、戦闘システムと司令部退避警告、タッチ操作の互換性と安全対策** などを大幅に強化しました。

また、複数の既知の問題を修正し、**メモリ使用量、端末の発熱、長時間動作時の安定性、異なる Android 端末間の互換性** をさらに改善しました。

現在のテストグループでの実際の使用報告では、**「ネイティブ直接描画 + フルキャッシュ」は、現時点で総合的な動作が比較的良好な組み合わせです**。本バージョンのリリース前までに、ネイティブ直接描画モード自体が原因と明確に判断できるクラッシュ報告は届いておらず、多くのテスターから、以前より端末の発熱が改善したとの報告も寄せられています。

ただし、**Yahagi はあくまで補助機能を統合した艦これ用 WebView ブラウザークライアントです**。艦これ自体は HTML5 ゲームであり、モバイル端末で WebView を通してアニメーション、Canvas / WebGL、音声・動画リソースを長時間継続して描画・再生すると、CPU、GPU、メモリを継続的に使用します。そのため、**長時間のプレイ後にある程度発熱するのは通常の現象です**。今回の最適化は、余分な負荷をできる限り減らすことを目的としており、端末の発熱を完全になくすものではありません。現在、Yahagi は Android の画面分割、マルチウィンドウ、ピクチャーインピクチャー（PiP）モードに専用の対応を行っていません。これらの表示モードでは、アプリのウィンドウサイズや縦横比が頻繁に変化するため、一部の画面レイアウト、WebView のサイズ、ネイティブビューの重なり順の再計算が間に合わず、表示位置のずれ、表示異常、黒画面が発生する可能性があります。ごくまれに、異常終了やクラッシュにつながる場合もあります。**現段階では、できるだけ全画面モードで Yahagi を使用することをお勧めします。今後、状況に応じて互換性を段階的に改善していきます。**

**QQ テスト・フィードバックグループ：1104904097**

---

# 一、新機能と機能強化

## 1. 「ネイティブ直接描画」モードを追加

既存の **標準モード、高性能モード、互換モード** に加え、4 番目の描画モードとして **「ネイティブ直接描画」**（Native Activity WebView）を追加しました。

このモードは、GOTO と同種の **ネイティブ WebView による直接描画方式** を採用し、Flutter と Android ネイティブビュー間の描画経路をさらに短縮します。余分なグラフィックス合成や中間層のリソース消費を削減することで、実行時のメモリ負荷、端末の発熱、リソース不足による異常終了の軽減が期待できます。

* **より直接的なネイティブ描画経路**
  ゲームの WebView を Android のネイティブ Activity に直接配置し、システムのネイティブ View 層で表示します。Flutter Platform View への埋め込みや多層のグラフィックス合成を経由しません。既存の Flutter WebView モードと比べ、描画経路全体が簡素化され、中間層による余分な処理負荷を減らせます。

* **実行時のメモリ負荷を軽減**
  Flutter と Android ネイティブビュー間の中間合成層を減らすため、通常は追加のメモリやグラフィックスリソースの使用量を抑えられます。特にメモリの少ない端末で有効で、長時間動作後の継続的なメモリ増加、システムによるバックグラウンドプロセスの回収、リソース不足による異常終了などをある程度改善できます。

* **現時点での安定性は比較的良好**
  テストグループでの長期間の実使用において、現時点ではこのモード自体が原因と明確に判断できる異常なクラッシュ報告は届いておらず、全体として比較的安定した動作が確認されています。
  このため、**現段階の Yahagi では「ネイティブ直接描画」を既定の描画モードとしています**。

* **画面の自動調整には制限あり**
  ネイティブ直接描画モードは、Flutter 層にあった一部のレイアウト制約や画面の自動調整処理を経由しません。そのため、一部の特殊な端末、解像度の変更、折りたたみ端末の開閉、システムウィンドウの切り替え時には、ゲーム画面のサイズを正確に判断できない場合があり、**ごくまれに画面が異常に拡大されることがあります**。

  また、このモードは Android のネイティブ Activity と WebView で直接表示するため、ページの切り替え、画面の縦横切り替え、ビューの再配置時に、**一時的な残像や再描画の遅れが発生する場合があります**。これはネイティブビューと Surface の再合成中に起こりうる通常の現象で、多くの場合すぐに解消し、**ゲーム操作やゲームデータには影響しません**。

  画面サイズに異常がある場合は、**「画面リセット」ボタン**、または **ゲームページの再読み込み** をお試しください。一時的に横画面 ↔ 縦画面を切り替え、システムのレイアウトとサイズの再計算を発生させることで、通常は正常な表示に戻ります。

  今後のバージョンでも、ネイティブモードでのサイズ検出と画面の自動調整処理を改善していきます。

---

## 2. 「内蔵ゲームリソースキャッシュ」システムを追加

Yahagi 独自の **ゲームリソースのローカルキャッシュシステム** を追加しました。島風 GO のローカルキャッシュモードに近い仕組みで動作します。

よく使う艦娘の立ち絵、装備、家具、マップ、効果音などの静的リソースを端末内に直接保存し、次回以降はローカルからの読み込みを優先します。これにより、艦これ公式サーバーから同じリソースを繰り返しダウンロードする回数を減らせます。

**ローカルキャッシュシステムの有効化を強くお勧めします。**

Yahagi を継続的に使用する場合、ローカルキャッシュは重複する通信量を効果的に削減するだけでなく、WebView が大量の静的リソースを繰り返しダウンロード、解析、キャッシュする際の余分な処理、ストレージ、I/O の負荷も減らせます。長時間動作後のカクつき、リソース使用量の増加、異常終了などの改善につながります。

特に **艦これを長時間起動する方、ゲーム内の画面を頻繁に切り替える方、モバイル回線をよく使用する方** は、**「フルキャッシュ」モード** を優先して有効にすることをお勧めします。リソースの読み込みがより安定し、通信量もさらに抑えられます。

この機能で使用するゲームリソースは、引き続き **艦これ公式リソースサーバー** から直接取得します。**外部プロキシ、HTTPS 証明書、サードパーティ製キャッシュソフトには依存しません**。キャッシュデータはすべて Yahagi が端末内で管理します。

* **重複する通信量を削減**
  キャッシュ済みのゲームリソースは、再使用時にローカルから直接読み込めるため、母港、編成、補給、工廠などの画面を開くたびに同じファイルをダウンロードすることを避けられます。モバイル回線をよく使用する端末では、重複して発生するリソース通信量を大きく削減できます。

* **繰り返し読み込みによる処理負荷を軽減**
  あまり変更されない大量の静的リソースを事前にローカル保存することで、プレイ中のネットワークリクエスト、リソースのダウンロード、解析、キャッシュの繰り返しによる余分な負荷を減らし、画面切り替えやリソース読み込みをより安定させます。

* **WebView 自体のキャッシュ負荷を軽減**
  通常モードでは、大量のゲームリソースの処理を主に Android WebView 自体のキャッシュ機構に任せています。長時間動作すると、キャッシュディレクトリや関連リソースの使用量が徐々に増える場合があります。

  Yahagi の内蔵キャッシュを有効にすると、独立したキャッシュエンジンが大量の静的ゲームリソースを一括管理します。WebView が同じリソースを重複してキャッシュすることや、キャッシュの肥大化によるストレージ、I/O、実行時の負荷を減らし、長時間動作後のカクつきや異常終了の発生確率を抑えます。

* **2 種類のキャッシュモード**

  * **ローカルキャッシュなし**：Yahagi 独自のキャッシュシステムを完全に迂回し、従来どおり公式サーバーからネットワーク経由で読み込みます。
  * **フルキャッシュ**：既知のゲームリソース一覧に基づき、艦娘、装備、家具、マップ、効果音などの静的リソースをワンタップで事前ダウンロードできます。すでに存在し、検証で正常と確認できたリソースは再ダウンロードしません。

* **インクリメンタル更新とネットワーク制御**
  新規追加・更新された公式リソースの自動確認に対応します。Wi-Fi 接続時は不足リソースを自動補完でき、モバイル回線では事前に予想ダウンロード容量を表示し、ユーザーの確認後にダウンロードを開始します。ダウンロードは **一時停止、再開、中断箇所からの再開** に対応します。

* **キャッシュの保守と整合性確認**
  現在のキャッシュの **使用容量、リソース数、完全性** をワンタップで確認できます。不足・破損ファイルを自動検出して修復するほか、Yahagi のローカルリソースキャッシュはいつでも安全に消去できます。

---

## 3. 「戦果センター」を全面再構築

戦果センターを **「戦果情報」「戦果カレンダー」「戦果計算」** の 3 つの独立したページに再構築し、スマートフォンの縦横画面、タブレット、折りたたみ端末向けのレスポンシブレイアウトも最適化しました。

* **戦果情報と出撃統計**

  * サーバー情報、現在の戦果、過去の順位推移、順位変動の基準値を統合しました。
  * **「出撃海域別戦果統計」** を追加しました。今月の各海域の出撃回数、ボス到達回数、S 勝利・A 勝利回数を自動でリアルタイム記録し、よく使う海域のお気に入り登録や非表示にも対応します。

* **戦果カレンダー**

  * 独立したページに 6×7 の月間戦果カレンダー、日別戦果明細、今月の累計を表示します。
  * 戦果の数値はすべて小数点以下 2 桁に統一しました。

* **戦果計算機**

  * **「目標戦果」** を自由に設定でき、予想戦果の進捗に加え、選択済み EO、選択済み任務、残り日数、素戦果、1 日に必要な戦果、本日の残り目標などの主要指標をリアルタイムで表示します。
  * EO、クォータリー戦果任務、イヤーリー戦果任務（AL 作戦、機動部隊決戦）、単発戦果任務（火球砲など）を統合しました。
  * **未計画 / 計画中 / 完了（精算済み）** の 3 状態で管理できます。判別可能なゲーム内のクリア状態を自動同期し、予想戦果と目標との差をリアルタイムで計算します。

* **素戦果の安全な累計と手動補正**

  * 素戦果の累計処理（提督経験値の増加量 × 7 / 10000）を最適化し、順序が入れ替わったスナップショットや重複スナップショットへの保護を追加しました。経験値データの異常による二重加算を防ぎます。
  * 「設定 → データ」に **「今月の累計素戦果」** の補正項目を追加し、数値の手動入力やワンタップでのゼロリセットに対応しました。
  * 補正後は、関連する順位変動の基準値も自動で調整します。
  * 戦果関連の時刻はすべて **JST（日本標準時）** を使用します。

---

## 4. 「野埼キラ付け / タイマー」を正式実装

給糧艦 **「野埼」**（未改造 / 改）のキラ付け判定とタイマー機能を正式に組み込みました。

* **編成の自動認識**
  第 1 / 第 2 艦隊における野埼の編成位置と状態を自動認識し、艦の形態に応じた加算値を適用します（未改造 +2、改 +3、15 分間隔で反映）。

* **効果をリアルタイムで予測**
  艦隊の現在の Cond 状態に基づき、各艦娘が Cond 54 に達するまでの所要時間、予想反映回数（Ticks）、燃料消費をリアルタイムで計算します。

* **状態表示と艦隊切り替え**
  キラ付け中、達成済み、野埼自身、入渠中、キラ付け不可、条件未達成などの状態を表示し、画面内で艦隊を素早く切り替えて確認できます。

---

## 5. 所持艦一覧が「ロック式多段階ソート」に対応

所持艦一覧の列見出しによるソート操作を全面的に再構築し、**「タップで一時ソート、長押しで優先順位をロック」** する方式に変更しました。

* **単一列のクイックソート**
  ロックされていない見出しをタップすると、その項目で昇順 / 降順に並べ替えられます。

* **多段階のソートロック**
  見出しを長押しすると、その項目を優先ソート条件としてロックし、優先順位の番号とロック状態を表示します。その後、第 2、第 3 と複数のソート条件を追加できます。

* **長押しで解除、ワンタップで復元**
  ロック済みの見出しを長押しすると、その条件を解除し、残りのソート条件の優先順位が自動で繰り上がります。フィルターバーに **並び順を戻す** ボタンを追加し、現在の艦種フィルターは維持します。

* 各能力値の列幅、文字揃え、横スクロールの動作を統一し、一覧全体の読みやすさを改善しました。

---

## 6. 「出撃前検査」と「海域ゲージ」を強化

ホーム画面の出撃前検査カードに、**「艦娘検査」** と **「海域ゲージ」** の 2 モード切り替えを追加しました。

* **艦娘検査モード**
  各艦隊の未補給（燃料・弾薬不足）、中破 / 大破、疲労（赤疲労 / オレンジ疲労）、工作艦による泊地修理状態などのリスクをまとめて確認します。警告項目をタップすると、該当艦隊へ素早く移動できます。

* **海域ゲージモード**
  通常海域と EO 海域の撃破回数・クリア進捗（1-6、2-5、7-2 など）をリアルタイムで表示し、イベント海域のゲージ残り HP と割合の表示にも対応します。
  クリア済み海域を表示するかどうかも選択できます。

---

## 7. 戦闘システムの認識と司令部退避警告を強化

* **艦隊司令部施設（FCF）の退避警告**
  戦闘結果における退避と護衛艦による曳航情報の認識を改善しました。退避確認後は、以降の戦闘マスから退避済み艦娘を自動で除外し、艦隊状態の同期ずれによる大破進撃の誤警告を減らします。帰投時、または新たな出撃開始時には状態を自動リセットします。

* **戦闘システムと特殊攻撃の判定**
  以下のシステムについて、静的な発動条件の認識と一部の発動確率推定を追加・改善しました。

  * 先制対潜
  * 対空 CI
  * 対空噴進弾幕
  * 空母夜襲 CI
  * Nelson Touch
  * 長門 / 陸奥特殊攻撃
  * Colorado Touch
  * 大和型特殊攻撃
  * 金剛型 / 榛名僚艦夜戦突撃
  * Queen Elizabeth 級特殊攻撃
  * Richelieu 級特殊攻撃
  * 潜水艦隊特殊攻撃など

---

## 8. 安全対策とログイン互換性の調整

* **DMM PT チャージページの遮断**
  DMM ストアとアイテム購入の処理を改善しました。アプリ内で商品の閲覧、購入確認、アカウントにある既存の DMM PT 残高による決済を通常どおり行えます。

* **「ポイントをチャージする」** と関連する外部チャージページへの遷移を遮断し、アプリ内で誤ってチャージページを開くことを防ぎます。同時に、**既存の DMM PT 残高を使った通常の購入手順や、ゲームに戻る操作には影響しません**。

* **従来のログインページ制限を解除**
  DMM アカウントなど、ほかの利用可能な方法で通常どおりログインできるようになり、ログインページの一律遮断を解除しました。

* **Google アカウントでのログインは現時点では非対応**
  Google の OAuth ログイン環境に関するセキュリティ制限により、**通常の Android WebView 内で Google アカウント認証を直接完了することはできません**。このため、Google アカウントを使って DMM にログインする方法は、現在も Yahagi 内では正常に利用できません。
  アカウントでほかの DMM ログイン方法も利用できる場合は、そちらを優先して使用してください。

---

## 9. Android のタッチ操作互換性を改善

* Android WebView における PixiJS のタッチイベントの対応付けと InteractionManager 関連の互換処理を最適化しました。
* モバイル環境で、母港の **「工廠」ボタンを長押ししても明石の改修工廠に入れない** 問題を修正しました。
* 通常のタップ、ドラッグ、その他のゲーム内タッチ操作は引き続き正常に反応します。

---

## 10. 改修計画と任務センターの細部を強化

* **改修計画の段階別消費**

  * \`0 → +6\` と \`+6 → MAX\` の開発資材・改修資材の消費を段階別に表示します。
  * 通常改修と確実化した場合の消費を区別します。
  * 各改修段階の固定消費と追加消費を表示します。

* **任務センターの中国語フォールバック翻訳**

  * ローカルの簡体字中国語フォールバック翻訳機構を追加しました。
  * 上流データで未翻訳または欠落している一部の期間限定任務・デイリー任務の中国語説明を補完しました。
  * 任務詳細の改行と組版処理を改善しました。

---

## 11. フレームレート設定の調整と温度制御

* **設定名の調整**
  中国語の省電力設定名を **「低耗」** に統一し、30 FPS 固定としました。Android のシステム全体の省電力モードとの混同を避けるためです。

* **自動モードの温度制御**
  自動モードは、Android のシステム省電力状態と端末の温度状態に応じて動作します。端末が一定の温度状態に達した場合、フレームレートを自発的に 30 FPS に下げ、継続的な発熱を抑えられます。

* **前面・バックグラウンドでの自動負荷調整**
  アプリがバックグラウンドに移ると、一時的に動作負荷を下げ、一部の Dart 性能サンプリングを停止します。前面に戻ると、ユーザーの設定を自動で復元します。

* **60 FPS 上限モード** と **高リフレッシュレート画面モード** の違いをさらに明確にしました。

---

## 12. 上部情報バーと診断ログを強化

* 上部情報バーで、より多くの資源・アイテムの表示をカスタマイズできるようにし、泊地修理や野埼タイマーなどの機能へのショートカット連携も強化しました。
* 診断ログに以下を追加しました。

  * 前回のプロセス終了理由（PreviousExitReason）
  * 端末の動作スナップショット（DeviceSnapshot）
  * エクスポートファイル名の統一
  * ローカル保存先の選択など

---

# 二、パフォーマンス改善

1. **ネイティブ直接描画の最適化**
   Android のネイティブ WebView を直接配置する方式により、Flutter Platform View の中間層におけるグラフィックス合成とリソース消費を減らし、メモリ負荷と長時間動作時の安定性を改善しました。

2. **ローカル静的リソースの高速読み込み**
   内蔵キャッシュエンジンが、該当するローカル画像、音声、その他の静的リソースを直接読み込むことで、重複するネットワークリクエストを減らし、母港や編成などの画面のリソース読み込み効率を高めました。

3. **バックグラウンドデータ処理と状態の統合**
   出撃イベント、戦果統計、戦闘データに直列処理と冪等性チェックを追加し、順序の入れ替わりや重複データによる二重計算、不要な画面更新を減らしました。

4. **温度制御とバックグラウンド負荷の軽減**
   端末の温度状態とアプリの前面・バックグラウンド状態に応じて、一部の動作負荷やフレームレートを動的に調整し、長時間動作時の発熱と電力消費を抑えました。

---

# 三、不具合修正

今回のアップデートでは、以下の問題を修正・改善しました。

1. 折りたたみ端末の開閉時に、ゲーム画面が引き伸ばされたり黒帯が表示されたりする場合がある問題を修正しました。
2. 一部の Android 端末で、特定の条件下における WebGL のネイティブ Surface 描画異常と画面リセットの問題を修正しました。
3. サイドバーの自動非表示モードで、編成画面の艦娘をドラッグして並べ替えられない問題を修正しました。
4. 航海日誌の建造記録が、まれに同期されるのが遅れたり失われたりする問題を修正し、ログデータベースへの書き込みの安定性を強化しました。
5. 一部の遠征の大成功条件判定が不正確な問題と、大成功率の表示異常を修正しました。
6. 順序が入れ替わった特定の経験値スナップショットにより、素戦果が二重加算される場合がある問題を修正しました。
7. 任務詳細の一部の \`<br>\` 改行タグが正しく解析されず、組版が乱れる問題を修正しました。
8. サイドバーと全画面ページの切り替え時に、ネイティブ WebView の重なり順により表示が隠れることがある問題を修正しました。
9. 解像度や画面比率の違いにより、複数の UI で文字切れ、はみ出し、レイアウト異常が発生する問題を修正しました。
10. 複数の既知の異常を修正し、全体の安定性と機種間の互換性をさらに改善しました。
11. 遠征評価機能を改善して Poi の遠征判定ルールに合わせ、一部の艦種、レベル、士気、装備、能力値、大成功条件の判定を修正しました。

---

# 四、既知の問題と今後の開発計画

現時点で届いている互換性の問題報告は、主に **一部の Huawei 系および Honor 端末** に集中しており、ほかのメーカーの端末に関する報告は比較的少ない状況です。

Yahagi は主に **Android、Flutter、Android WebView の標準開発インターフェース** に基づいて開発・対応を行っています。スマートフォンメーカーによって、システムの基盤部分、WebView、ウィンドウ管理、グラフィックス描画、システムコンポーネントなどへの独自変更の度合いが異なります。そのため、一部の端末の互換性問題は、特定の機種やシステムバージョンに強く依存し、ほかの端末で安定して再現するのが難しい場合があります。

今回追加した **「ネイティブ直接描画」モード** と **「内蔵ゲームリソースキャッシュ」** も、モバイル環境で長時間動作する際のメモリ負荷、グラフィックス合成負荷、リソースの繰り返し読み込み、一部機種の互換性問題に対する重要な調整です。

使用中に **クラッシュ、画面異常、機能の誤認識、その他の互換性問題** が発生した場合は、テストグループでご報告ください。可能であれば、同時に Yahagi の診断ログもエクスポートしてください。完全なログがあると、原因の特定や再現の効率が大幅に向上します。

## 今後の開発方針

今後も、主に以下の方向で開発を進めていきます。

* モバイル環境での艦これの操作とインタラクションを継続的に改善
* 端末、Android バージョン、WebView 環境の違いに対する互換性を向上
* クライアントのメモリ使用量、端末の発熱、電力消費を引き続き改善
* 既存の補助機能を充実させ、便利なツールを段階的に追加
* 艦これのゲームシステム、遠征、戦闘条件の認識精度を継続的に修正
* テスト報告に基づき、ネイティブ直接描画とローカルキャッシュを引き続き改善

いつも **テスト、不具合報告、機能の提案、応援** を寄せてくださる提督の皆さまに、心より感謝します。

Yahagi は、今も個人で維持している趣味のプロジェクトです。多くの機能は、皆さまからの実際の使用報告をもとに、少しずつ改善してきました。今後もできる範囲で、使い心地の向上に努めていきます。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.4/README.ja.md`},ko:{body:`이번 업데이트에서는 **네이티브 직접 렌더링, 내장 게임 리소스 캐시, 전과 센터 전면 개편, 노자키 키라작 타이머, 보유 목록 다중 정렬, 출격 전 점검 및 해역 게이지, 원정 규칙, 전투 시스템 및 사령부 퇴피 경고, 터치 호환성 및 보안 기능** 등을 대폭 개선했습니다.

여러 알려진 문제를 수정하고, **메모리 사용량, 기기 발열, 장시간 실행 안정성 및 Android 기기 간 호환성**도 추가로 최적화했습니다.

현재 테스트 그룹의 실제 사용 피드백에 따르면, **「네이티브 직접 렌더링 + 전체 캐시」는 현재 전반적인 성능이 비교적 좋은 조합입니다**. 이 버전이 출시되기 전까지 네이티브 직접 렌더링 모드 자체가 원인이라고 명확하게 볼 수 있는 비정상 종료 보고는 없었으며, 대부분의 테스트 사용자는 이전보다 기기 발열이 개선되었다고 보고했습니다.

다만 **Yahagi는 기본적으로 보조 기능을 통합한 칸코레 WebView 브라우저 클라이언트입니다**. 칸코레 자체가 HTML5 게임이므로, 모바일 기기에서 WebView로 애니메이션, Canvas / WebGL 및 오디오·비디오 리소스를 장시간 계속 렌더링하면 CPU, GPU 및 메모리를 지속적으로 사용합니다. 따라서 **장시간 플레이한 뒤 어느 정도 발열이 발생하는 것은 정상입니다**. 이번 최적화의 목적은 추가 부담을 최대한 줄이는 것이며, 기기 발열을 완전히 없애는 것은 아닙니다. 현재 Yahagi는 Android 분할 화면, 다중 창 및 화면 속 화면(PiP) 모드에 별도로 대응하지 않았습니다. 이러한 표시 모드에서는 앱 창의 크기와 비율이 자주 바뀔 수 있어 일부 화면 배치, WebView 크기 및 네이티브 뷰 계층의 재계산이 제때 이루어지지 않을 수 있습니다. 이로 인해 화면 위치 어긋남, 표시 이상, 검은 화면이 발생할 수 있으며, 극히 드물게 앱이 비정상적으로 종료되거나 충돌할 수도 있습니다. **현 단계에서는 가능한 한 전체 화면 모드로 Yahagi를 사용하는 것을 권장하며, 추후 상황에 따라 관련 호환성을 점차 개선할 예정입니다.**

**QQ 테스트·피드백 그룹: 1104904097**

---

# 1부. 신규 기능 및 기능 강화

## 1. 「네이티브 직접 렌더링」 모드 추가

기존 **표준 모드, 고성능 모드 및 호환 모드**에 이어 네 번째 렌더링 모드인 **「네이티브 직접 렌더링」**(Native Activity WebView)을 추가했습니다.

이 모드는 GOTO와 유사한 **네이티브 WebView 직접 렌더링 방식**을 사용하여 Flutter와 Android 네이티브 뷰 사이의 렌더링 경로를 더 단축합니다. 추가 그래픽 합성과 중간 계층의 리소스 부담을 줄여 실행 중 메모리 부담, 기기 발열 및 리소스 부족으로 인한 비정상 종료를 완화하는 데 도움이 됩니다.

* **더 직접적인 네이티브 렌더링 경로**
  게임 WebView를 Android 네이티브 Activity에 직접 배치하고 시스템의 네이티브 View 계층에서 표시합니다. Flutter Platform View 삽입이나 여러 단계의 그래픽 합성을 거치지 않습니다. 기존 Flutter WebView 모드보다 전체 렌더링 경로가 간결하여 중간 계층에서 발생하는 추가 성능 부담을 줄일 수 있습니다.

* **실행 중 메모리 부담 감소**
  Flutter와 Android 네이티브 뷰 사이의 중간 합성 계층을 줄이므로 일반적으로 추가 메모리 및 그래픽 리소스 사용량을 낮출 수 있습니다. 특히 메모리가 적은 기기에 유리하며, 장시간 실행 후 메모리가 계속 늘어나는 현상, 시스템의 백그라운드 프로세스 회수 및 리소스 부담으로 인한 비정상 종료 등을 어느 정도 개선할 수 있습니다.

* **현재까지 비교적 양호한 안정성**
  테스트 그룹에서 장기간 실제 사용한 결과, 현재까지 이 모드 자체가 원인이라고 명확하게 볼 수 있는 비정상 종료 보고는 없었으며 전반적인 안정성은 비교적 양호합니다.
  따라서 **현 단계에서 Yahagi는 「네이티브 직접 렌더링」을 기본 렌더링 모드로 사용합니다**.

* **비교적 제한적인 화면 자동 맞춤**
  네이티브 직접 렌더링 모드는 Flutter 계층에 있던 일부 레이아웃 제약과 화면 자동 맞춤 로직을 우회합니다. 따라서 일부 특수 기기, 해상도 변경, 폴더블 화면 상태 변경 또는 시스템 창 전환 시 게임 화면 크기를 정확히 판단하지 못할 수 있으며, **극히 드물게 화면이 비정상적으로 확대될 수 있습니다**.

  또한 이 모드는 Android 네이티브 Activity와 WebView를 직접 사용해 표시하므로 페이지 전환, 화면 방향 변경 또는 뷰 재배치 시 **짧은 잔상이나 화면 갱신 지연이 가끔 발생할 수 있습니다**. 이는 네이티브 뷰와 Surface가 다시 합성되는 과정에서 생길 수 있는 정상적인 현상으로, 대개 빠르게 복구되며 **게임 조작이나 게임 데이터에는 영향을 주지 않습니다**.

  화면 크기에 이상이 있으면 **「화면 초기화」 버튼**을 사용하거나 **게임 페이지를 새로고침**해 보세요. 앱이 잠시 가로 ↔ 세로 화면을 전환하여 시스템의 배치와 크기 계산을 다시 실행하므로, 보통 정상 표시로 복구됩니다.

  이후 버전에서도 네이티브 모드의 크기 감지와 화면 자동 맞춤 로직을 계속 개선할 예정입니다.

---

## 2. 「내장 게임 리소스 캐시」 시스템 추가

Yahagi 자체 **게임 리소스 로컬 캐시 시스템**을 추가했습니다. 시마카제 GO의 로컬 캐시 모드와 비슷한 방식으로 작동합니다.

자주 사용하는 칸무스 일러스트, 장비, 가구, 지도, 효과음 등의 정적 리소스를 기기에 직접 저장하고, 이후 다시 필요할 때 로컬에서 우선 읽어 칸코레 공식 서버에서 같은 리소스를 반복해서 다운로드하는 횟수를 줄입니다.

**로컬 캐시 시스템 사용을 강력히 권장합니다.**

Yahagi를 꾸준히 사용하는 경우 로컬 캐시는 반복되는 데이터 사용을 효과적으로 줄일 뿐 아니라, WebView가 많은 정적 리소스를 반복해서 다운로드·해석·캐시하면서 발생하는 추가 처리, 저장 공간 및 I/O 부담도 낮출 수 있습니다. 이를 통해 장시간 실행 후의 끊김, 리소스 사용량 증가 및 비정상 종료 등의 문제를 완화하는 데 도움이 됩니다.

특히 **칸코레를 장시간 실행하거나, 게임 화면을 자주 전환하거나, 모바일 데이터를 자주 사용하는 사용자**는 **「전체 캐시」 모드**를 우선 사용하는 것을 권장합니다. 리소스를 더 안정적으로 불러오고 데이터 사용량도 추가로 줄일 수 있습니다.

이 기능의 게임 리소스는 계속 **칸코레 공식 리소스 서버**에서 직접 가져옵니다. **외부 프록시, HTTPS 인증서 또는 타사 캐시 프로그램에 의존하지 않으며**, 모든 캐시 데이터는 Yahagi가 기기 내에서 관리합니다.

* **반복적인 데이터 사용 감소**
  캐시된 게임 리소스는 다시 사용할 때 로컬에서 직접 읽으므로 모항, 편성, 보급, 공창 등의 화면에 들어갈 때 같은 파일을 반복해서 다운로드하지 않아도 됩니다. 모바일 데이터를 자주 사용하는 기기에서는 중복되는 리소스 통신량을 크게 줄일 수 있습니다.

* **반복 로딩에 따른 성능 부담 감소**
  자주 바뀌지 않는 많은 정적 리소스를 미리 로컬에 저장하여, 플레이 중 네트워크 요청, 리소스 다운로드, 해석 및 캐시를 반복하면서 발생하는 추가 부담을 줄입니다. 이를 통해 화면 전환과 리소스 로딩이 더 안정적으로 이루어집니다.

* **WebView 자체 캐시 부담 완화**
  일반 모드에서는 많은 게임 리소스를 주로 Android WebView 자체의 캐시 기능이 처리합니다. 장시간 실행하면 캐시 디렉터리와 관련 리소스 사용량이 점차 늘어날 수 있습니다.

  Yahagi의 내장 캐시를 사용하면 별도의 캐시 엔진이 많은 정적 게임 리소스를 통합 관리합니다. WebView가 같은 리소스를 중복 캐시하는 일과 캐시가 계속 커지면서 생기는 저장 공간, I/O 및 실행 부담을 줄여, 장시간 실행 후 끊김이나 비정상 종료가 발생할 가능성을 낮춥니다.

* **두 가지 캐시 모드**

  * **로컬 캐시 없음**: Yahagi 자체 캐시 시스템을 완전히 우회하고 기존의 공식 서버 네트워크 로딩 방식을 유지합니다.
  * **전체 캐시**: 알려진 게임 리소스 목록을 바탕으로 칸무스, 장비, 가구, 지도, 효과음 등의 정적 리소스를 한 번에 미리 다운로드할 수 있습니다. 이미 존재하고 검증을 통과한 리소스는 다시 다운로드하지 않습니다.

* **스마트 증분 업데이트 및 네트워크 제어**
  새로 추가되거나 변경된 공식 리소스를 자동으로 확인할 수 있습니다. Wi-Fi에서는 누락된 리소스를 자동으로 보충할 수 있으며, 모바일 데이터를 사용할 때는 예상 다운로드 용량을 미리 표시하고 사용자가 확인한 뒤 다운로드를 시작합니다. 다운로드 작업은 **일시 중지, 재개 및 중단 지점부터 이어받기**를 지원합니다.

* **캐시 관리 및 무결성 검사**
  현재 캐시의 **사용 용량, 리소스 수 및 완전성**을 한 번에 확인할 수 있습니다. 누락되거나 손상된 파일을 자동으로 감지하여 복구하며, Yahagi의 로컬 리소스 캐시를 언제든 안전하게 비울 수 있습니다.

---

## 3. 「전과 센터」 전면 개편

전과 센터를 **「전과 정보」, 「전과 달력」, 「전과 계산」**의 독립된 세 페이지로 개편하고, 스마트폰의 가로·세로 화면, 태블릿 및 폴더블 기기에 맞게 반응형 레이아웃을 최적화했습니다.

* **전과 정보 및 출격 통계**

  * 서버 정보, 현재 전과, 과거 순위 추이 및 순위 변동 기준값을 통합했습니다.
  * **「출격 해역 전과 통계」**를 추가하여 이번 달 각 해역의 출격 횟수, 보스 진입 횟수, S승 및 A승 횟수를 자동으로 실시간 기록합니다. 자주 사용하는 해역의 즐겨찾기와 숨기기도 지원합니다.

* **전과 달력**

  * 독립 페이지에서 6×7 월간 전과 달력, 일별 전과 내역 및 이번 달 누적치를 표시합니다.
  * 전과 수치는 모두 소수점 이하 두 자리로 통일했습니다.

* **전과 계산기**

  * **「목표 전과」**를 직접 설정할 수 있으며, 예상 전과 진행 상황과 함께 선택한 EO, 선택한 임무, 남은 일수, 기본 전과, 하루에 필요한 전과, 오늘 남은 목표 등의 주요 지표를 실시간으로 표시합니다.
  * EO, 분기 전과 임무, 연간 전과 임무(AL 작전, 기동부대 결전) 및 단발 전과 임무(화구포 등)를 통합했습니다.
  * **미계획 / 계획 중 / 완료(정산됨)**의 세 상태로 관리합니다. 식별 가능한 게임 내 클리어 상태를 자동으로 동기화하고, 예상 전과와 목표까지의 차이를 실시간으로 계산합니다.

* **안전한 기본 전과 누적 및 수동 보정**

  * 기본 전과 누적 알고리즘(제독 경험치 증가량 × 7 / 10000)을 최적화하고, 순서가 뒤바뀌거나 중복된 스냅샷에 대한 보호를 추가하여 비정상적인 경험치 데이터로 인한 중복 누적을 방지했습니다.
  * 「설정 → 데이터」에 **「이번 달 누적 기본 전과」** 보정 항목을 추가했습니다. 수치를 직접 입력하거나 한 번에 0으로 초기화할 수 있습니다.
  * 보정 후 관련 순위 변동 기준값도 자동으로 함께 조정합니다.
  * 전과 관련 시간은 모두 **JST(일본 표준시)**를 사용합니다.

---

## 4. 「노자키 키라작 / 타이머」 정식 도입

급양함 **「노자키」**(미개장 / 개)의 키라작 판정 및 타이머 시스템을 정식으로 도입했습니다.

* **스마트 편성 인식**
  제1 / 제2 함대에서 노자키의 편성 위치와 상태를 자동으로 인식하고, 함의 형태에 맞는 보너스를 적용합니다(미개장 +2, 개 +3, 15분 주기로 반영).

* **실시간 효과 예측**
  함대의 현재 Cond 상태를 바탕으로 각 칸무스가 Cond 54에 도달하기까지 걸리는 시간, 예상 반영 주기 수(Ticks) 및 연료 소비량을 실시간으로 계산합니다.

* **상태 안내 및 함대 전환**
  키라작 중, 달성 완료, 노자키 본인, 입거 중, 키라작 불가, 조건 미충족 등의 상태를 표시하며, 화면 안에서 함대를 빠르게 전환하여 확인할 수 있습니다.

---

## 5. 보유 목록의 「고정식 다중 정렬」 지원

칸무스 보유 목록의 열 머리글 정렬 조작을 전면 개편하여 **「누르면 임시 정렬, 길게 누르면 우선순위 고정」** 방식으로 바꾸었습니다.

* **단일 열 빠른 정렬**
  고정되지 않은 머리글을 누르면 해당 항목을 기준으로 오름차순 / 내림차순 정렬할 수 있습니다.

* **다중 우선순위 고정 정렬**
  머리글을 길게 누르면 해당 항목을 우선 정렬 조건으로 고정하고 우선순위 번호와 고정 상태를 표시합니다. 이후 두 번째, 세 번째 등의 정렬 조건을 계속 추가할 수 있습니다.

* **길게 눌러 고정 해제 및 한 번에 복원**
  고정된 머리글을 길게 누르면 해당 조건이 해제되며, 나머지 정렬 우선순위는 자동으로 앞으로 당겨집니다. 필터 표시줄에 **정렬 복원** 버튼을 추가했으며 현재 함종 필터는 유지됩니다.

* 각 능력치 열의 너비, 텍스트 정렬 및 가로 스크롤 동작을 통일하여 목록 전체의 가독성을 높였습니다.

---

## 6. 「출격 전 점검」 및 「해역 게이지」 강화

홈 화면의 출격 전 점검 카드에 **「칸무스 점검」**과 **「해역 게이지」** 두 모드를 전환하는 기능을 추가했습니다.

* **칸무스 점검 모드**
  각 함대의 미보급(연료·탄약 부족), 중파 / 대파, 피로(빨간 얼굴 / 주황 얼굴), 공작함의 정박 수리 상태 등의 위험 요소를 한곳에서 확인합니다. 경고 항목을 누르면 해당 함대로 빠르게 이동할 수 있습니다.

* **해역 게이지 모드**
  일반 해역 및 EO 해역의 격파 횟수와 클리어 진행도(1-6, 2-5, 7-2 등)를 실시간으로 표시하고, 이벤트 해역 게이지의 남은 HP와 백분율 표시도 지원합니다.
  이미 클리어한 해역을 표시할지도 선택할 수 있습니다.

---

## 7. 전투 시스템 인식 및 사령부 퇴피 경고 강화

* **함대사령부시설(FCF) 퇴피 경고**
  전투 결과의 퇴피 및 호위함 예인 정보 인식을 개선했습니다. 퇴피를 확인하면 이후 전투 지점에서 이미 퇴피한 칸무스를 자동으로 제외하여 함대 상태의 동기화 지연으로 인한 대파 진격 오경고를 줄입니다. 귀항하거나 새 출격을 시작하면 상태를 자동으로 초기화합니다.

* **전투 시스템 및 특수 공격 판정**
  다음 시스템의 정적 조건 인식과 일부 발동 확률 추정을 추가하거나 개선했습니다.

  * 선제 대잠
  * 대공 CI
  * 대공 분진탄막
  * 항모 야습 CI
  * Nelson Touch
  * 나가토 / 무츠 특수 공격
  * Colorado Touch
  * 야마토급 특수 공격
  * 콩고급 / 하루나 요함 야전 돌격
  * Queen Elizabeth급 특수 공격
  * Richelieu급 특수 공격
  * 잠수함대 특수 공격 등

---

## 8. 보안 기능 및 로그인 호환성 조정

* **DMM PT 충전 페이지 차단**
  DMM 상점 및 아이템 구매 절차를 개선했습니다. 앱 안에서 상품을 확인하고 구매를 확정한 뒤, 계정에 이미 보유한 DMM PT 잔액으로 정상적으로 결제할 수 있습니다.

* **「ポイントをチャージする」** 및 관련 외부 충전 페이지 이동을 차단하여 앱 안에서 실수로 충전 페이지에 들어가지 않도록 합니다. 동시에 **기존 DMM PT 잔액을 사용하는 정상적인 구매 절차와 게임으로 돌아가는 조작에는 영향을 주지 않습니다**.

* **기존 로그인 페이지 제한 해제**
  이제 DMM 계정 등 다른 사용 가능한 방법으로 정상적으로 로그인할 수 있으며, 로그인 페이지를 일괄 차단하지 않습니다.

* **Google 계정 로그인은 아직 지원하지 않음**
  Google의 OAuth 로그인 환경에 대한 보안 제한으로 인해 **일반 Android WebView 안에서는 Google 계정 인증을 직접 완료할 수 없습니다**. 따라서 Google 계정으로 DMM에 로그인하는 방식은 현재도 Yahagi 안에서 정상적으로 사용할 수 없습니다.
  계정에 다른 DMM 로그인 방법도 연결되어 있다면 해당 방법을 우선 사용해 주세요.

---

## 9. Android 터치 호환성 최적화

* Android WebView의 PixiJS 터치 이벤트 매핑과 InteractionManager 관련 호환 처리를 최적화했습니다.
* 모바일에서 모항의 **「공창」 버튼을 길게 눌러도 아카시 개수공창에 들어갈 수 없던** 문제를 수정했습니다.
* 일반 누르기, 드래그 및 기타 게임 터치 조작은 계속 정상적으로 반응합니다.

---

## 10. 개수 계획 및 임무 센터 세부 기능 강화

* **개수 계획의 단계별 소비량**

  * \`0 → +6\`과 \`+6 → MAX\` 단계별 개발자재 및 개수자재 소비량을 표시합니다.
  * 일반 개수와 성공 보장 개수의 소비량을 구분합니다.
  * 각 별 단계의 고정 소비량과 추가 소비량을 표시합니다.

* **임무 센터의 중국어 대체 번역**

  * 로컬 중국어 간체 대체 번역 기능을 추가했습니다.
  * 상위 데이터에서 아직 번역되지 않았거나 누락된 일부 기간 한정 및 일일 임무의 중국어 설명을 보완했습니다.
  * 임무 상세 내용의 줄바꿈과 서식 처리를 개선했습니다.

---

## 11. 프레임 레이트 설정 조정 및 발열 제어

* **설정 이름 조정**
  중국어 절전 단계의 이름을 **「低耗」(저소모)**로 통일하고 30 FPS로 고정하여 Android 시스템 수준의 절전 모드와 혼동하지 않도록 했습니다.

* **자동 모드의 스마트 발열 제어**
  자동 모드는 Android 시스템 절전 상태와 기기 발열 상태에 대응합니다. 기기가 일정 발열 상태에 도달하면 프레임 레이트를 선제적으로 30 FPS로 낮추어 지속적인 발열을 완화할 수 있습니다.

* **포그라운드·백그라운드 자동 부하 조절**
  앱이 백그라운드로 전환되면 실행 부하를 일시적으로 줄이고 일부 Dart 성능 샘플링을 중지합니다. 포그라운드로 돌아오면 사용자 설정을 자동으로 복원합니다.

* **60 FPS 상한 모드**와 **고주사율 화면 모드**의 차이를 더 명확히 했습니다.

---

## 12. 상단 정보 표시줄 및 진단 로그 강화

* 상단 정보 표시줄에서 더 많은 자원과 아이템의 표시를 사용자 설정할 수 있으며, 정박 수리 및 노자키 타이머 등의 기능으로 빠르게 연결하는 동작도 강화했습니다.
* 진단 로그에 다음 기능을 추가했습니다.

  * 이전 프로세스 종료 원인(PreviousExitReason)
  * 기기 실행 스냅샷(DeviceSnapshot)
  * 내보내기 파일 이름 표준화
  * 로컬 저장 경로 선택 등

---

# 2부. 성능 최적화

1. **네이티브 직접 렌더링 최적화**
   Android 네이티브 WebView 직접 배치 방식으로 Flutter Platform View 중간 계층의 그래픽 합성과 리소스 부담을 줄여, 메모리 부담을 낮추고 장시간 실행 안정성을 개선했습니다.

2. **로컬 정적 리소스 빠른 로딩**
   내장 캐시 엔진이 일치하는 로컬 이미지, 오디오 및 기타 정적 리소스를 직접 읽어 반복적인 네트워크 요청을 줄이고, 모항과 편성 등의 화면에서 리소스를 더 효율적으로 불러옵니다.

3. **백그라운드 데이터 처리 및 상태 병합**
   출격 이벤트, 전과 통계 및 전투 데이터에 순차 처리와 멱등성 검사를 추가하여, 순서가 뒤바뀌거나 중복된 데이터로 인한 반복 계산과 불필요한 화면 갱신을 줄였습니다.

4. **발열 제어 및 백그라운드 부하 감소**
   기기의 발열 상태와 앱의 포그라운드·백그라운드 상태에 따라 일부 실행 부하와 프레임 레이트를 동적으로 조절하여 장시간 실행 시 발열과 배터리 소비를 줄입니다.

---

# 3부. 문제 수정

이번 업데이트에서는 다음 문제를 수정하거나 개선했습니다.

1. 폴더블 기기의 화면을 펼치거나 접을 때 게임 화면이 늘어나거나 검은 여백이 생길 수 있던 문제를 수정했습니다.
2. 일부 Android 기기에서 특정 상황의 WebGL 네이티브 Surface 렌더링 이상 및 화면 초기화 문제를 수정했습니다.
3. 사이드바 자동 숨김 모드에서 편성 화면의 칸무스를 드래그하여 순서를 바꿀 수 없던 문제를 수정했습니다.
4. 항해일지의 건조 기록이 가끔 제때 동기화되지 않거나 누락되던 문제를 수정하고 로그 데이터베이스 쓰기 안정성을 강화했습니다.
5. 일부 원정 대성공 조건의 판정이 부정확하거나 대성공률이 잘못 표시되던 문제를 수정했습니다.
6. 특정한 순서 뒤바뀜 경험치 스냅샷에서 기본 전과가 중복 누적될 수 있던 문제를 수정했습니다.
7. 임무 상세 텍스트의 일부 \`<br>\` 줄바꿈 태그가 올바르게 해석되지 않아 서식이 흐트러지던 문제를 수정했습니다.
8. 사이드바와 전체 화면 페이지 사이를 전환할 때 네이티브 WebView가 계층에 가려지는 경우가 있던 문제를 수정했습니다.
9. 다양한 해상도와 화면 비율에서 여러 UI의 텍스트 잘림, 넘침 및 배치 이상이 발생하던 문제를 수정했습니다.
10. 여러 알려진 오류를 수정하여 전반적인 안정성과 기종 간 호환성을 더 높였습니다.
11. 원정 평가기를 개선하여 Poi의 원정 판정 규칙에 맞추고, 일부 함종, 레벨, 사기, 장비, 능력치 및 대성공 조건 판정을 수정했습니다.

---

# 4부. 알려진 문제 및 향후 개발 계획

현재까지 접수된 호환성 문제 보고는 여전히 주로 **일부 화웨이 계열 및 아너 기기**에 집중되어 있으며, 다른 브랜드 기기의 관련 보고는 상대적으로 적습니다.

Yahagi는 주로 **Android, Flutter 및 Android WebView의 표준 개발 인터페이스**를 바탕으로 개발하고 기기에 대응합니다. 휴대전화 제조사마다 시스템 하부 구조, WebView, 창 관리, 그래픽 렌더링 및 시스템 구성 요소를 수정하는 정도가 다를 수 있습니다. 따라서 일부 기기의 호환성 문제는 특정 기종이나 시스템 버전에 강하게 의존할 수 있으며, 다른 기기에서 일관되게 재현하기 어려울 수도 있습니다.

이번에 추가한 **「네이티브 직접 렌더링」 모드**와 **「내장 게임 리소스 캐시」** 역시 모바일에서 장시간 실행할 때의 메모리 부담, 그래픽 합성 비용, 반복적인 리소스 로딩 및 일부 기종의 호환성 문제에 대응하기 위한 주요 조정입니다.

사용 중 **비정상 종료, 화면 이상, 잘못된 기능 인식 또는 기타 호환성 문제**가 발생하면 테스트 그룹을 통해 알려 주세요. 가능하면 Yahagi 진단 로그도 함께 내보내 주세요. 전체 로그는 원인을 찾고 문제를 재현하는 효율을 크게 높여 줍니다.

## 향후 개발 방향

이후에도 주로 다음 방향을 중심으로 개발을 이어갈 예정입니다.

* 모바일 칸코레의 조작 및 상호작용 경험을 지속적으로 최적화
* 다양한 기기, Android 버전 및 WebView 환경에서의 호환성 향상
* 클라이언트의 메모리 사용량, 기기 발열 및 전력 소비를 계속 개선
* 기존 보조 기능을 보완하고 유용한 도구를 점차 추가
* 칸코레 게임 시스템, 원정 및 전투 조건의 인식 정확도를 지속적으로 개선
* 테스트 피드백을 바탕으로 네이티브 직접 렌더링 및 로컬 캐시 시스템을 계속 개선

항상 **테스트, 문제 보고, 기능 제안 및 응원**을 보내 주시는 제독 여러분께 감사드립니다.

Yahagi는 여전히 개인이 유지하는 취미 프로젝트이며, 많은 기능은 여러분의 실제 사용 피드백을 통해 조금씩 다듬어 왔습니다. 앞으로도 가능한 범위에서 사용 경험을 최대한 개선해 나가겠습니다.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.4/README.ko.md`},en:{body:`This update brings substantial upgrades to **Native Direct rendering, the built-in game resource cache, a complete Senka Center redesign, the Nozaki sparkling timer, multi-level sorting in the owned ship list, pre-sortie checks and map gauges, expedition rules, battle mechanics and Fleet Command Facility evacuation warnings, touch compatibility, and security protections**.

It also fixes several known issues and further optimizes **memory usage, device heat, stability during extended sessions, and compatibility across different Android devices**.

Based on actual usage feedback from the current test group, **“Native Direct + Full Cache” is currently one of the better-performing combinations overall**. Before this version's release, no crash reports had been received that could clearly be attributed to Native Direct mode itself, and most testers reported less device heat than before.

Please bear in mind that **Yahagi is fundamentally still a KanColle WebView browser client with integrated assistance features**. KanColle itself is an HTML5 game. When mobile devices continuously render animation, Canvas / WebGL, and audio and video resources through WebView for extended periods, they continue to use CPU, GPU, and memory resources, so **some device heat after a long play session is normal**. The aim of these optimizations is to reduce additional overhead as much as possible, rather than eliminate device heat entirely. Yahagi currently has no dedicated support for Android split-screen, multi-window, or picture-in-picture (PiP) modes. In these display modes, the app window's dimensions and aspect ratio may change frequently, and some interface layouts, WebView dimensions, and native view layers may not be recalculated in time. This may cause misplaced interface elements, display issues, or a black screen; in very rare cases, it may also cause an abnormal exit or crash. **For now, we recommend using Yahagi in full-screen mode whenever possible. Compatibility with these modes will be improved gradually as circumstances allow.**

**QQ test and feedback group: 1104904097**

---

# I. New and enhanced features

## 1. New “Native Direct” rendering mode

In addition to the existing **Standard, High Performance, and Compatibility modes**, this release adds a fourth rendering mode: **“Native Direct”** (Native Activity WebView).

This mode uses a **direct native WebView rendering approach** similar to GOTO's, further shortening the rendering path between Flutter and Android's native views. Reducing extra graphics compositing and intermediate-layer resource overhead can help reduce runtime memory pressure, device heat, and abnormal exits caused by resource pressure.

* **A more direct native rendering path**
  The game WebView is attached directly to a native Android Activity and displayed by the system's native View layer, bypassing Flutter Platform View embedding and multiple layers of graphics compositing. Compared with the existing Flutter WebView modes, this gives a simpler overall rendering path and can reduce the extra performance overhead introduced by intermediate layers.

* **Lower runtime memory pressure**
  By reducing the intermediate compositing layers between Flutter and Android's native views, this mode can generally reduce additional memory and graphics resource usage. It is particularly helpful for devices with limited memory, and may alleviate problems such as steadily increasing memory usage during long sessions, the system reclaiming background processes, and abnormal exits caused by resource pressure.

* **Good stability in testing so far**
  Following extended real-world use in the test group, no abnormal crash reports have yet been received that could clearly be attributed to this mode itself, and its overall stability has been good.
  Therefore, **Yahagi currently uses “Native Direct” as its default rendering mode**.

* **Relatively limited automatic screen sizing**
  Native Direct mode bypasses some of the Flutter layer's existing layout constraints and automatic screen-sizing logic. As a result, it may not determine the game display dimensions accurately on certain unusual devices, when the resolution changes, when a foldable device changes state, or when switching system windows. **In very rare cases, the game display may become abnormally enlarged**.

  In addition, because this mode displays content directly through a native Android Activity and WebView, **brief residual images or refresh delays may occasionally occur** when switching pages, changing orientation, or relaying out views. This is a normal phenomenon that may occur while native views and Surfaces are recomposited, and usually resolves quickly. **It does not affect game controls or game data**.

  If the display dimensions are incorrect, try the **“Reset display” button** or **reload the game page**. The app will briefly switch between landscape ↔ portrait to trigger the system's layout and dimension calculations again, which will usually restore the normal display.

  Later versions will continue to improve dimension detection and automatic screen sizing in native mode.

---

## 2. New built-in game resource cache system

This release adds Yahagi's own **local game resource cache system**, which works similarly to Shimakaze GO's local cache mode.

Frequently used static resources, including ship portraits, equipment, furniture, maps, and sound effects, can be saved directly on the device. When needed again, they are read locally first, reducing repeated downloads of the same resources from the official KanColle servers.

**Enabling the local cache system is strongly recommended.**

For long-term Yahagi users, the local cache can effectively reduce repeated data usage, while also reducing the extra processing, storage, and I/O pressure caused by WebView repeatedly downloading, parsing, and caching large amounts of static resources. This may help alleviate stuttering, increased resource usage, and abnormal exits during extended sessions.

In particular, **users who run KanColle for long periods, frequently switch game screens, or often use mobile data** are encouraged to choose **“Full Cache” mode** for more consistent resource loading and further reductions in data usage.

The game resources used by this feature still come directly from the **official KanColle resource servers**. **It does not rely on external proxies, HTTPS certificates, or third-party cache programs**. All cached data is managed locally on the device by Yahagi.

* **Less repeated data usage**
  Cached game resources can be read directly from local storage when used again, avoiding repeated downloads of the same files when opening screens such as the home port, fleet composition, resupply, and factory. This can significantly reduce repeated resource traffic on devices that frequently use mobile data.

* **Less performance overhead from repeated loading**
  Saving large amounts of infrequently changing static resources locally in advance reduces the extra overhead of repeated network requests, downloads, parsing, and caching during gameplay, making screen transitions and resource loading more consistent.

* **Less pressure on WebView's own cache**
  In normal mode, most game resources are handled by Android WebView's own caching mechanism. During extended use, its cache directory and related resource usage may gradually grow.

  With Yahagi's built-in cache enabled, a separate cache engine can centrally manage large amounts of static game resources. This reduces WebView's repeated caching of the same resources and the storage, I/O, and runtime pressure caused by continuous cache growth, lowering the likelihood of stuttering or abnormal exits after long sessions.

* **Two cache modes**

  * **No Local Cache**: Completely bypasses Yahagi's own cache system, retaining the original method of loading resources from the official servers over the network.
  * **Full Cache**: Uses the known game resource list to pre-download static resources such as ships, equipment, furniture, maps, and sound effects with one action. Resources that already exist and pass verification will not be downloaded again.

* **Smart incremental updates and network controls**
  Supports automatic checks for new or updated official resources. Missing resources can be filled in automatically over Wi-Fi. When using mobile data, the estimated download size is shown in advance, and downloading starts only after the user confirms. Downloads support **pause, resume, and resuming from the point of interruption**.

* **Cache maintenance and integrity checks**
  Check the current cache's **storage usage, resource count, and completeness** with one action. Missing or corrupted files are detected and repaired automatically, and Yahagi's local resource cache can be safely cleared at any time.

---

## 3. Complete Senka Center redesign

The Senka Center has been rebuilt into three separate pages: **“Senka information,” “Senka calendar,” and “Senka calculator.”** Responsive layouts have also been optimized for phones in portrait and landscape, tablets, and foldable devices.

* **Senka information and sortie statistics**

  * Combines server information, current senka, historical ranking trends, and the baseline for ranking changes.
  * Adds **“Sortie map senka statistics,”** automatically recording this month's sortie counts, boss encounters, S-rank victories, and A-rank victories for each map in real time, with options to favorite or hide commonly used maps.

* **Senka calendar**

  * A separate page displays a 6×7 monthly senka calendar, daily senka details, and the monthly cumulative total.
  * All senka values are shown to two decimal places.

* **Senka calculator**

  * Supports a custom **“Target senka,”** with real-time displays of projected senka progress and key figures such as selected EOs, selected quests, days remaining, base senka, senka needed per day, and today's remaining target.
  * Integrates EOs, quarterly senka quests, annual senka quests (AL Operation and Mobile Task Force Decisive Battle), and one-time senka quests (such as the “fireball cannon” quest).
  * Supports three states: **Unplanned / Planned / Completed (settled)**. It automatically synchronizes recognizable in-game clear states and calculates projected senka and the gap to the target in real time.

* **Safe base senka accumulation and manual correction**

  * Optimizes the base senka accumulation algorithm (admiral EXP gained × 7 / 10000), adding protection against out-of-order and duplicate snapshots to prevent abnormal EXP data from being counted twice.
  * Adds a **“Base senka accumulated this month”** correction option under “Settings → Data,” allowing manual value entry or a reset to zero with one action.
  * Corrections automatically adjust the related ranking-change baseline accordingly.
  * All senka-related times use **JST (Japan Standard Time)**.

---

## 4. Official launch of “Nozaki sparkling / timer”

Sparkling detection and timing are now officially integrated for the food supply ship **“Nozaki”** (unremodeled / Kai).

* **Smart fleet composition detection**
  Automatically detects Nozaki's position and status in Fleet 1 / Fleet 2 and applies the corresponding bonus for her form (unremodeled +2, Kai +3, with a 15-minute tick interval).

* **Real-time benefit estimates**
  Uses the fleet's current Cond values to calculate the time each ship needs to reach Cond 54, the estimated number of ticks, and fuel consumption in real time.

* **Status indicators and fleet switching**
  Displays states such as sparkling in progress, target reached, Nozaki herself, in repair dock, unable to sparkle, and conditions not yet met. Fleets can be switched quickly within the interface for viewing.

---

## 5. “Locked multi-level sorting” for the owned ship list

Sorting interactions in the owned ship list headers have been completely redesigned around **“tap for a temporary sort, long-press to lock a priority.”**

* **Quick single-column sorting**
  Tap any unlocked header to sort by that field in ascending / descending order.

* **Locked multi-level sorting**
  Long-press a header to lock that field as a sorting priority, showing its priority number and locked state. You can then add a second, third, or further sorting condition.

* **Long-press to unlock and restore with one action**
  Long-press a locked header to remove that condition; the remaining sorting priorities move up automatically. The filter bar gains a **restore sorting** button that preserves the current ship-type filter.

* Standardizes attribute column widths, text alignment, and horizontal scrolling behavior to improve overall list readability.

---

## 6. Enhanced pre-sortie checks and map gauges

The home page's pre-sortie check card now lets you switch between **“Ship checks”** and **“Map gauges.”**

* **Ship check mode**
  Checks each fleet for risks including missing resupply (insufficient fuel / ammunition), moderate / heavy damage, fatigue (red / orange faces), and repair ship anchorage repair status. Tap a warning to jump quickly to the relevant fleet.

* **Map gauge mode**
  Displays defeat counts and clear progress for regular and EO maps in real time (such as 1-6, 2-5, and 7-2), and supports displaying remaining event map gauge HP and percentages.
  You can also choose whether to show maps that have already been cleared.

---

## 7. Enhanced battle mechanic detection and Fleet Command Facility evacuation warnings

* **Fleet Command Facility (FCF) evacuation warnings**
  Improves detection of evacuation and escort towing information in battle results. Once an evacuation is confirmed, evacuated ships are automatically excluded from subsequent battle nodes, reducing false heavy-damage advance warnings caused by fleet-state desynchronization. The state resets automatically upon returning to port or starting a new sortie.

* **Battle mechanics and special attack checks**
  Adds or improves static condition detection and estimates for some activation probabilities for the following mechanics:

  * Opening anti-submarine warfare
  * Anti-air cut-ins
  * Anti-air rocket barrage
  * Carrier night attack cut-ins
  * Nelson Touch
  * Nagato / Mutsu special attacks
  * Colorado Touch
  * Yamato-class special attacks
  * Kongou-class / Haruna consort night battle assault
  * Queen Elizabeth-class special attacks
  * Richelieu-class special attacks
  * Submarine fleet special attacks, and more

---

## 8. Security protections and login compatibility adjustments

* **DMM PT top-up page blocking**
  Improves the DMM store and item purchase flow. You can view products, confirm purchases, and pay with the DMM PT balance already held in your account within the app.

* Blocks **“ポイントをチャージする”** and related redirects to external top-up pages to prevent accidentally opening a top-up page inside the app, while **preserving the normal purchase flow using existing DMM PT balances and the ability to return to the game**.

* **Previous login page restrictions removed**
  DMM accounts and other available login methods can now be used normally; login pages are no longer blocked across the board.

* **Google account login is not currently supported**
  Because Google places security restrictions on OAuth login environments, **Google account authentication cannot be completed directly within a standard Android WebView**. As a result, logging into DMM with a Google account still does not work normally in Yahagi.
  If your account also has another available DMM login method, please use that method instead.

---

## 9. Android touch compatibility improvements

* Optimizes PixiJS touch event mapping and InteractionManager compatibility handling in Android WebView.
* Fixes the mobile issue where **long-pressing the “Factory” button at the home port could not open Akashi's Improvement Arsenal**.
* Maintains normal responses to regular taps, dragging, and other in-game touch controls.

---

## 10. Improvements to improvement planning and Quest Center details

* **Improvement planning costs by stage**

  * Displays development material and improvement material costs separately for \`0 → +6\` and \`+6 → MAX\`.
  * Distinguishes costs for normal improvements and guaranteed-success improvements.
  * Shows fixed and additional costs at each star level.

* **Chinese translation fallback in the Quest Center**

  * Adds a local Simplified Chinese translation fallback mechanism.
  * Supplies Chinese descriptions for some limited-time and daily quests whose upstream translations are currently missing or incomplete.
  * Improves line break handling and formatting in quest details.

---

## 11. Frame rate setting adjustments and thermal management

* **Setting label changes**
  The Chinese power-saving setting is now consistently named **“低耗” (Low consumption)** and fixed at 30 FPS, to avoid confusion with Android's system-level battery saver mode.

* **Smart thermal management in Automatic mode**
  Automatic mode responds to Android's system power-saving state and the device's thermal state. When the device reaches a certain thermal state, it can proactively reduce the frame rate to 30 FPS to ease continued heating.

* **Automatic load reduction in the foreground / background**
  When the app enters the background, it temporarily reduces its runtime load and pauses some Dart performance sampling. User settings are restored automatically when it returns to the foreground.

* Further clarifies the difference between **60 FPS capped mode** and **high refresh rate display mode**.

---

## 12. Enhanced top information bar and diagnostic logs

* The top information bar supports custom displays for more resources and items, with improved shortcuts linking to features such as anchorage repair and the Nozaki timer.
* Diagnostic log additions include:

  * Previous process exit reason (PreviousExitReason)
  * Device runtime snapshot (DeviceSnapshot)
  * Standardized export filenames
  * Local storage path selection, and more

---

# II. Performance improvements

1. **Native Direct rendering optimizations**
   Attaching the Android native WebView directly reduces graphics compositing and resource overhead in the Flutter Platform View intermediate layer, lowering memory pressure and improving stability during extended use.

2. **Fast loading of local static resources**
   The built-in cache engine directly reads matching local images, audio, and other static resources, reducing repeated network requests and improving resource loading efficiency on screens such as the home port and fleet composition.

3. **Background data processing and state merging**
   Adds serial processing and idempotency checks for sortie events, senka statistics, and battle data, reducing repeated calculations and unnecessary interface refreshes caused by out-of-order or duplicate data.

4. **Thermal management and background load reduction**
   Dynamically adjusts some runtime workloads and frame rates based on device thermal state and whether the app is in the foreground or background, reducing heat and battery use during extended sessions.

---

# III. Bug fixes

This update fixes or improves the following issues:

1. Fixes possible stretching or black borders in the game display when unfolding / folding foldable devices.
2. Fixes abnormal native WebGL Surface rendering and display reset issues under certain conditions on some Android devices.
3. Fixes an issue that prevented dragging ships to reorder them on the fleet composition screen when sidebar auto-hide mode was enabled.
4. Fixes construction records in the Logbook occasionally failing to synchronize in time or going missing, and improves the reliability of log database writes.
5. Fixes inaccurate checks for some expedition great success conditions and incorrect great success rate displays.
6. Fixes possible double-counting of base senka with certain out-of-order EXP snapshots.
7. Fixes formatting problems caused by some \`<br>\` line break tags not being parsed correctly in quest detail text.
8. Fixes occasional native WebView layer occlusion when switching between the sidebar and full-screen pages.
9. Fixes text truncation, overflow, and layout issues in multiple UI elements at different resolutions and screen aspect ratios.
10. Fixes several known errors, further improving overall stability and compatibility across device models.
11. Improves the expedition evaluator, aligning it with Poi's expedition rules and correcting some checks for ship types, levels, morale, equipment, stats, and great success conditions.

---

# IV. Known issues and future development plans

Compatibility reports received so far remain concentrated mainly on **some Huawei-family and Honor devices**, with relatively few related reports from other brands.

Yahagi is developed and adapted primarily using the **standard development interfaces of Android, Flutter, and Android WebView**. Different phone manufacturers may customize the underlying system, WebView, window management, graphics rendering, and system components to varying degrees. As a result, compatibility issues on some devices may be strongly tied to a particular model or system version and may be difficult to reproduce reliably on other devices.

The new **“Native Direct” rendering mode** and **built-in game resource cache** are also significant adjustments aimed at memory pressure, graphics compositing overhead, repeated resource loading, and compatibility issues on some devices during extended mobile use.

If you encounter **crashes, display issues, incorrect feature detection, or other compatibility problems**, please report them through the test group and, where possible, export Yahagi's diagnostic logs at the same time. Complete logs can greatly improve the efficiency of locating and reproducing problems.

## Future development directions

Development will continue to focus mainly on the following areas:

* Continue optimizing controls and interaction when playing KanColle on mobile devices
* Improve compatibility across devices, Android versions, and WebView environments
* Continue improving client memory usage, device heat, and power consumption
* Refine existing assistance features and gradually add more practical tools
* Continue improving detection accuracy for KanColle mechanics, expeditions, and battle conditions
* Continue refining Native Direct rendering and the local cache system based on test feedback

Many thanks to all admirals for your continued **testing, issue reports, feature suggestions, and support**.

Yahagi remains a personally maintained hobby project. Many of its features have been refined little by little through your real-world usage feedback. I will continue to improve the user experience as much as I can within my abilities.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.4/README.en.md`}}},{id:369999341,tag:`1.0.3`,name:`ヤハギ v1.0.3`,publishedAt:`2026-08-13T15:01:32Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.3`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.3/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.3/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.3/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.3/README.ko.md)

# ヤハギ v1.0.3 更新说明

本次更新主要围绕 **客户端诊断、改修规划、战果管理、任务中心、航海日志、游戏渲染与性能优化** 等方面进行完善，同时修复了多项已知问题，并进一步提升客户端在不同设备上的稳定性与兼容性。

**8 月 14 日 0 点发布的 v1.0.3 存在打包错误，旧1.0.3已经删除，目前已经重新上传「真・v1.0.3」！请在 8 月 14 日 0:00～3:00 期间下载过的提督重新下载一次。不要用旧的1.0.3！！！！**

收到很多提督的建议，本次创建了 QQ 群，方便各位提督交流、提供意见和反馈。

**QQ群：1104904097**

---

## 一、新增功能与功能增强

### 1. 新增客户端诊断日志

新增客户端诊断日志功能，用于协助排查卡顿、崩溃、数据处理异常及部分设备兼容性问题。

诊断日志具有以下特点：

* **默认开启，可由用户随时手动关闭**
* 日志不会自动上传
* 仅记录性能数据、错误摘要及匿名设备运行信息
* 不记录账号、密码、Cookie、令牌、请求正文、响应正文或游戏截图
* 支持保存至本地或通过系统分享面板导出
* 支持随时清除设备上的诊断日志
* 关闭诊断日志后，应用将停止相关性能采样与诊断记录

如果在使用过程中遇到异常，建议导出诊断日志，并附上问题描述、发生步骤及相关截图发送至：

**yamatosaki123[at]gmail.com**

这些信息可以帮助我更准确地定位和排查问题。

---

### 2. 新增「改修规划」

新增改修规划功能，可根据日期查看当前可进行改修的装备，并集中展示：

* 改修所需的开发资材与改修资材
* 不同改修阶段所需的装备及资源
* 可改修日期与辅助舰要求
* 装备收藏与快速筛选

同时新增改修资料手动更新功能。

更新后的资料无需重启应用即可立即生效；如果下载或资料校验失败，将自动继续使用当前本地资料，不影响原有功能。

---

### 3. 新增「战果」功能

新增独立的战果页面，用于记录和规划每月战果获取情况。

主要包括：

* 当前战果信息与历史记录
* EO 海域战果规划
* 战果任务选择与统计
* 月度战果日历

该功能仅用于辅助战果规划，不会修改任何游戏数据。

需要注意的是，战果数据需要在游戏内 **手动进入战果页面** 后才能获取最新信息，并刷新客户端的本地缓存。

---

### 4. 升级任务中心

任务中心新增「全任务」目录，不再仅显示当前游戏中已经接受的任务。

新增以下功能：

* 按任务编号、名称或说明进行搜索
* 按任务类型、周期及解锁状态进行筛选
* 查看任务完成条件
* 查看前置任务与后置任务关系

同时新增任务资料更新功能。

应用可以检查并下载新版任务资料，更新完成后无需重启即可立即生效。

---

### 5. 增强航海日志

航海日志现在可以记录和查看更多类型的游戏操作，包括：

* 出击记录
* 远征记录
* 建造记录
* 开发记录
* 改修与解体记录
* 舰娘除籍记录
* 资源变化记录

各类日志同时新增对应的筛选功能，方便根据时间或操作类型快速查找记录。

航海日志仅保存在当前设备本地，不会自动上传。

---

### 6. 新增游戏渲染模式

新增三种游戏渲染模式，可根据设备性能与兼容性进行选择。

#### 高性能模式

使用 **Texture Layer + WebGL** 渲染，并保留工具栏背景模糊效果。

该模式可以保留较完整的界面效果，但在部分设备上可能出现卡顿、功耗增加或较高的性能损耗。

#### 标准模式（推荐）

使用 **Hybrid Composition + WebGL** 渲染，在性能、稳定性与兼容性之间取得平衡。

该模式会关闭工具栏背景模糊效果，推荐大多数设备使用。

#### 兼容模式

使用 **Hybrid Composition + Canvas** 渲染，以兼容性为优先。

适用于出现 WebGL 显示异常、黑屏、闪烁或画面不稳定的设备，但游戏画面性能可能会有所降低。

切换渲染模式后，应用会自动重新载入游戏页面。

> **建议不要在战斗或其他重要操作过程中切换渲染模式。**

---

### 7. 调整游戏帧率设置

原有「高帧模式」调整为三种帧率策略。

#### 自动

优先以 **60 FPS** 运行。

如果检测到当前设备持续无法稳定运行，将自动降低至 **30 FPS**。

#### 稳定 30 FPS

固定以 **30 FPS** 为目标运行，优先降低掉帧、设备发热及耗电。

#### 优先 60 FPS

尽可能保持 **60 FPS**，不主动降低帧率，但可能增加设备发热、耗电及性能负载。

如果当前 Android WebView 不支持相关帧率控制能力，应用将保留游戏原始帧率。

---

### 8. 增强战斗信息与提醒

本次更新继续完善战斗信息展示及提醒功能，包括：

* 新增基地空袭信息展示
* 新增敌方舰队前 3 位预测信息
* 完善敌方舰队及联合舰队信息显示
* 优化战斗阶段、舰队状态及血条同步
* 新增中破、大破震动提醒
* 加强舰娘受损状态的动态呼吸提示
* 优化战斗预测的执行效率

---

### 9. 增强泊地修理功能

泊地修理页面现在支持选择实际参与泊地修理的舰队，并进一步完善修理状态及计时显示。

从首页的泊地修理提示进入时，将自动定位至对应舰队，方便快速确认当前泊地修理进度。

---

### 10. 优化菜单与设置界面

设置页面重新按照功能进行分类，并进一步整理界面结构。

同时新增及完善以下功能：

* 顶部信息栏支持自由调整显示内容
* 长按顶部信息栏即可进入编辑模式
* 支持自由选择显示项目
* 支持拖动调整显示顺序
* 支持一键恢复默认设置
* 支持拖动调整侧边菜单顺序
* 支持将菜单栏放置于屏幕右侧
* 支持应用推荐的游戏区域与菜单显示比例
* 优化部分筛选控件及页面布局
* 补全简体中文、繁体中文及日文界面文案

顶部信息栏除原有的基础资源外，本次还新增以下信息：

* 战果与排名
* 泊地修理计时
* 家具箱
* 间宫
* 伊良湖
* 勋章
* 甲种勋章
* 战斗详报
* 各类新型兵装资材
* 其他常用道具与资源

方便根据个人需求快速查看常用资源及道具持有数量。

---

## 二、性能优化

### 1. 优化游戏画面渲染

进一步隔离游戏 WebView 与工具栏等客户端界面的刷新流程，减少工具栏及其他界面更新对游戏画面渲染的影响。

主要改善：

* 掉帧
* 动画不流畅
* 操作延迟
* 界面刷新互相影响

---

### 2. 优化游戏数据处理

较大的游戏响应数据现在会优先在后台进行预处理，降低数据解析过程对主界面渲染的影响。

同时合并短时间内连续产生的状态更新，减少不必要的重复刷新与界面重建。

---

### 3. 优化战斗预测性能

战斗预测中的主要计算任务调整至后台执行，降低增强模式计算过程中对游戏画面及客户端界面操作的影响。

---

### 4. 优化兼容模式性能

改善 Android 兼容模式下的画面合成方式，降低部分设备在使用兼容模式时产生的额外性能损耗。

---

## 三、问题修复

本次更新修复及改善以下问题：

* 修复「未卜先知」在游击部队及联合舰队编成下可能出现战斗结果预判错误的问题，并完善特殊舰队编成的识别与计算逻辑
* 修复任务目录尚未加载完成时进入任务中心可能发生异常或崩溃的问题
* 修复不同任务资料来源使用不同编号格式，导致部分任务无法正确匹配的问题
* 修复部分前置任务、后置任务关系显示不正确的问题
* 修复任务详情中的字体、正文颜色及编号标签显示不一致的问题
* 修复首次进入游戏页面时，数据捕获功能可能未及时启用的问题
* 修复连续接收游戏数据时，事件顺序或状态刷新可能出现异常的问题
* 修复帧率自动调整与游戏数据捕获同时运行时可能出现的边界问题
* 修复部分渲染模式切换失败后未能正确回退的问题
* 修复部分战斗状态、敌方舰队及基地空袭信息同步异常的问题
* 优化网络设置输入校验，并补充地址、端口、协议及 IPv6 格式提示
* 优化部分 UI 的布局、字体、颜色及显示效果
* 修复若干已知问题，并进一步提升整体稳定性

---

## 四、已知问题与后续开发计划

目前收到的问题反馈主要集中在 **华为系设备（包括荣耀）**，其他品牌设备出现 BUG 的情况相对较少。

本客户端主要依据 Android 与 Flutter 官方开发文档进行开发和适配。

不过，由于华为系设备在系统底层、WebView 以及部分系统组件方面可能存在较多定制，与标准 Android 环境存在一定差异，因此部分功能在这些设备上可能会出现难以稳定复现或判断的兼容性问题。

目前我也在尽可能针对相关问题进行优化和适配，但受限于设备型号、系统版本以及底层实现差异，部分问题暂时可能无法完全解决，还请大家理解。

如果在使用过程中遇到问题，也欢迎提供：

* 设备型号
* 系统版本
* 问题发生步骤
* 相关截图
* 客户端诊断日志

这些信息都可以帮助后续进一步排查问题。

---

### 关于「野琦计时器」

目前比较遗憾的是，我自己的游戏账号并没有野琦。

虽然相关功能代码已经基本完成，但由于缺少实际账号环境，目前还无法进行完整的功能测试。

因此后续可能需要寻找一位拥有野琦的玩家协助测试，确认计时逻辑及实际运行状态正常后，再进一步完善并开放该功能。

---

### 后续开发方向

之后的开发仍将以以下几个方向为主：

* 持续优化移动端的游戏体验
* 提高不同设备与系统版本的兼容性
* 改善客户端性能与稳定性
* 完善现有辅助功能
* 逐步加入更多实用功能

非常感谢大家一直以来提供的问题反馈、建议与支持。

作为个人开发项目，我会继续在能力范围内尽可能完善这个客户端，也希望能够让移动端游玩和管理《舰队Collection》的体验变得更加方便。
`,notes:{"zh-CN":{body:`本次更新主要围绕 **客户端诊断、改修规划、战果管理、任务中心、航海日志、游戏渲染与性能优化** 等方面进行完善，同时修复了多项已知问题，并进一步提升客户端在不同设备上的稳定性与兼容性。

**8 月 14 日 0 点发布的 v1.0.3 存在打包错误，旧1.0.3已经删除，目前已经重新上传「真・v1.0.3」！请在 8 月 14 日 0:00～3:00 期间下载过的提督重新下载一次。不要用旧的1.0.3！！！！**

收到很多提督的建议，本次创建了 QQ 群，方便各位提督交流、提供意见和反馈。

**QQ群：1104904097**

---

## 一、新增功能与功能增强

### 1. 新增客户端诊断日志

新增客户端诊断日志功能，用于协助排查卡顿、崩溃、数据处理异常及部分设备兼容性问题。

诊断日志具有以下特点：

* **默认开启，可由用户随时手动关闭**
* 日志不会自动上传
* 仅记录性能数据、错误摘要及匿名设备运行信息
* 不记录账号、密码、Cookie、令牌、请求正文、响应正文或游戏截图
* 支持保存至本地或通过系统分享面板导出
* 支持随时清除设备上的诊断日志
* 关闭诊断日志后，应用将停止相关性能采样与诊断记录

如果在使用过程中遇到异常，建议导出诊断日志，并附上问题描述、发生步骤及相关截图发送至：

**yamatosaki123[at]gmail.com**

这些信息可以帮助我更准确地定位和排查问题。

---

### 2. 新增「改修规划」

新增改修规划功能，可根据日期查看当前可进行改修的装备，并集中展示：

* 改修所需的开发资材与改修资材
* 不同改修阶段所需的装备及资源
* 可改修日期与辅助舰要求
* 装备收藏与快速筛选

同时新增改修资料手动更新功能。

更新后的资料无需重启应用即可立即生效；如果下载或资料校验失败，将自动继续使用当前本地资料，不影响原有功能。

---

### 3. 新增「战果」功能

新增独立的战果页面，用于记录和规划每月战果获取情况。

主要包括：

* 当前战果信息与历史记录
* EO 海域战果规划
* 战果任务选择与统计
* 月度战果日历

该功能仅用于辅助战果规划，不会修改任何游戏数据。

需要注意的是，战果数据需要在游戏内 **手动进入战果页面** 后才能获取最新信息，并刷新客户端的本地缓存。

---

### 4. 升级任务中心

任务中心新增「全任务」目录，不再仅显示当前游戏中已经接受的任务。

新增以下功能：

* 按任务编号、名称或说明进行搜索
* 按任务类型、周期及解锁状态进行筛选
* 查看任务完成条件
* 查看前置任务与后置任务关系

同时新增任务资料更新功能。

应用可以检查并下载新版任务资料，更新完成后无需重启即可立即生效。

---

### 5. 增强航海日志

航海日志现在可以记录和查看更多类型的游戏操作，包括：

* 出击记录
* 远征记录
* 建造记录
* 开发记录
* 改修与解体记录
* 舰娘除籍记录
* 资源变化记录

各类日志同时新增对应的筛选功能，方便根据时间或操作类型快速查找记录。

航海日志仅保存在当前设备本地，不会自动上传。

---

### 6. 新增游戏渲染模式

新增三种游戏渲染模式，可根据设备性能与兼容性进行选择。

#### 高性能模式

使用 **Texture Layer + WebGL** 渲染，并保留工具栏背景模糊效果。

该模式可以保留较完整的界面效果，但在部分设备上可能出现卡顿、功耗增加或较高的性能损耗。

#### 标准模式（推荐）

使用 **Hybrid Composition + WebGL** 渲染，在性能、稳定性与兼容性之间取得平衡。

该模式会关闭工具栏背景模糊效果，推荐大多数设备使用。

#### 兼容模式

使用 **Hybrid Composition + Canvas** 渲染，以兼容性为优先。

适用于出现 WebGL 显示异常、黑屏、闪烁或画面不稳定的设备，但游戏画面性能可能会有所降低。

切换渲染模式后，应用会自动重新载入游戏页面。

> **建议不要在战斗或其他重要操作过程中切换渲染模式。**

---

### 7. 调整游戏帧率设置

原有「高帧模式」调整为三种帧率策略。

#### 自动

优先以 **60 FPS** 运行。

如果检测到当前设备持续无法稳定运行，将自动降低至 **30 FPS**。

#### 稳定 30 FPS

固定以 **30 FPS** 为目标运行，优先降低掉帧、设备发热及耗电。

#### 优先 60 FPS

尽可能保持 **60 FPS**，不主动降低帧率，但可能增加设备发热、耗电及性能负载。

如果当前 Android WebView 不支持相关帧率控制能力，应用将保留游戏原始帧率。

---

### 8. 增强战斗信息与提醒

本次更新继续完善战斗信息展示及提醒功能，包括：

* 新增基地空袭信息展示
* 新增敌方舰队前 3 位预测信息
* 完善敌方舰队及联合舰队信息显示
* 优化战斗阶段、舰队状态及血条同步
* 新增中破、大破震动提醒
* 加强舰娘受损状态的动态呼吸提示
* 优化战斗预测的执行效率

---

### 9. 增强泊地修理功能

泊地修理页面现在支持选择实际参与泊地修理的舰队，并进一步完善修理状态及计时显示。

从首页的泊地修理提示进入时，将自动定位至对应舰队，方便快速确认当前泊地修理进度。

---

### 10. 优化菜单与设置界面

设置页面重新按照功能进行分类，并进一步整理界面结构。

同时新增及完善以下功能：

* 顶部信息栏支持自由调整显示内容
* 长按顶部信息栏即可进入编辑模式
* 支持自由选择显示项目
* 支持拖动调整显示顺序
* 支持一键恢复默认设置
* 支持拖动调整侧边菜单顺序
* 支持将菜单栏放置于屏幕右侧
* 支持应用推荐的游戏区域与菜单显示比例
* 优化部分筛选控件及页面布局
* 补全简体中文、繁体中文及日文界面文案

顶部信息栏除原有的基础资源外，本次还新增以下信息：

* 战果与排名
* 泊地修理计时
* 家具箱
* 间宫
* 伊良湖
* 勋章
* 甲种勋章
* 战斗详报
* 各类新型兵装资材
* 其他常用道具与资源

方便根据个人需求快速查看常用资源及道具持有数量。

---

## 二、性能优化

### 1. 优化游戏画面渲染

进一步隔离游戏 WebView 与工具栏等客户端界面的刷新流程，减少工具栏及其他界面更新对游戏画面渲染的影响。

主要改善：

* 掉帧
* 动画不流畅
* 操作延迟
* 界面刷新互相影响

---

### 2. 优化游戏数据处理

较大的游戏响应数据现在会优先在后台进行预处理，降低数据解析过程对主界面渲染的影响。

同时合并短时间内连续产生的状态更新，减少不必要的重复刷新与界面重建。

---

### 3. 优化战斗预测性能

战斗预测中的主要计算任务调整至后台执行，降低增强模式计算过程中对游戏画面及客户端界面操作的影响。

---

### 4. 优化兼容模式性能

改善 Android 兼容模式下的画面合成方式，降低部分设备在使用兼容模式时产生的额外性能损耗。

---

## 三、问题修复

本次更新修复及改善以下问题：

* 修复「未卜先知」在游击部队及联合舰队编成下可能出现战斗结果预判错误的问题，并完善特殊舰队编成的识别与计算逻辑
* 修复任务目录尚未加载完成时进入任务中心可能发生异常或崩溃的问题
* 修复不同任务资料来源使用不同编号格式，导致部分任务无法正确匹配的问题
* 修复部分前置任务、后置任务关系显示不正确的问题
* 修复任务详情中的字体、正文颜色及编号标签显示不一致的问题
* 修复首次进入游戏页面时，数据捕获功能可能未及时启用的问题
* 修复连续接收游戏数据时，事件顺序或状态刷新可能出现异常的问题
* 修复帧率自动调整与游戏数据捕获同时运行时可能出现的边界问题
* 修复部分渲染模式切换失败后未能正确回退的问题
* 修复部分战斗状态、敌方舰队及基地空袭信息同步异常的问题
* 优化网络设置输入校验，并补充地址、端口、协议及 IPv6 格式提示
* 优化部分 UI 的布局、字体、颜色及显示效果
* 修复若干已知问题，并进一步提升整体稳定性

---

## 四、已知问题与后续开发计划

目前收到的问题反馈主要集中在 **华为系设备（包括荣耀）**，其他品牌设备出现 BUG 的情况相对较少。

本客户端主要依据 Android 与 Flutter 官方开发文档进行开发和适配。

不过，由于华为系设备在系统底层、WebView 以及部分系统组件方面可能存在较多定制，与标准 Android 环境存在一定差异，因此部分功能在这些设备上可能会出现难以稳定复现或判断的兼容性问题。

目前我也在尽可能针对相关问题进行优化和适配，但受限于设备型号、系统版本以及底层实现差异，部分问题暂时可能无法完全解决，还请大家理解。

如果在使用过程中遇到问题，也欢迎提供：

* 设备型号
* 系统版本
* 问题发生步骤
* 相关截图
* 客户端诊断日志

这些信息都可以帮助后续进一步排查问题。

---

### 关于「野琦计时器」

目前比较遗憾的是，我自己的游戏账号并没有野琦。

虽然相关功能代码已经基本完成，但由于缺少实际账号环境，目前还无法进行完整的功能测试。

因此后续可能需要寻找一位拥有野琦的玩家协助测试，确认计时逻辑及实际运行状态正常后，再进一步完善并开放该功能。

---

### 后续开发方向

之后的开发仍将以以下几个方向为主：

* 持续优化移动端的游戏体验
* 提高不同设备与系统版本的兼容性
* 改善客户端性能与稳定性
* 完善现有辅助功能
* 逐步加入更多实用功能

非常感谢大家一直以来提供的问题反馈、建议与支持。

作为个人开发项目，我会继续在能力范围内尽可能完善这个客户端，也希望能够让移动端游玩和管理《舰队Collection》的体验变得更加方便。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.3/README.md`},"zh-TW":{body:`本次更新主要圍繞 **用戶端診斷、改修規劃、戰果管理、任務中心、航海日誌、遊戲繪製與效能最佳化** 等方面進行完善，同時修復了多項已知問題，並進一步提升用戶端在不同裝置上的穩定性與相容性。

**8 月 14 日 0 點發布的 v1.0.3 存在打包錯誤，舊 1.0.3 已經刪除，目前已經重新上傳「真・v1.0.3」！請在 8 月 14 日 0:00～3:00 期間下載過的提督重新下載一次。不要用舊的 1.0.3！！！！**

收到很多提督的建議，本次建立了 QQ 群，方便各位提督交流、提供意見和回饋。

**QQ 群：1104904097**

---

## 一、新增功能與功能增強

### 1. 新增用戶端診斷日誌

新增用戶端診斷日誌功能，用於協助排查卡頓、當機、資料處理異常及部分裝置相容性問題。

診斷日誌具有以下特點：

* **預設開啟，可由使用者隨時手動關閉**
* 日誌不會自動上傳
* 僅記錄效能資料、錯誤摘要及匿名裝置執行資訊
* 不記錄帳號、密碼、Cookie、權杖、請求本文、回應本文或遊戲截圖
* 支援儲存至本機或透過系統分享面板匯出
* 支援隨時清除裝置上的診斷日誌
* 關閉診斷日誌後，應用程式將停止相關效能取樣與診斷記錄

如果在使用過程中遇到異常，建議匯出診斷日誌，並附上問題描述、發生步驟及相關截圖寄送至：

**yamatosaki123[at]gmail.com**

這些資訊可以幫助我更準確地定位和排查問題。

---

### 2. 新增「改修規劃」

新增改修規劃功能，可根據日期查看當前可進行改修的裝備，並集中顯示：

* 改修所需的開發資材與改修資材
* 不同改修階段所需的裝備及資源
* 可改修日期與輔助艦要求
* 裝備收藏與快速篩選

同時新增改修資料手動更新功能。

更新後的資料無需重新啟動應用程式即可立即生效；如果下載或資料驗證失敗，將自動繼續使用當前本機資料，不影響原有功能。

---

### 3. 新增「戰果」功能

新增獨立的戰果頁面，用於記錄和規劃每月戰果獲取情況。

主要包括：

* 當前戰果資訊與歷史記錄
* EO 海域戰果規劃
* 戰果任務選擇與統計
* 月度戰果日曆

該功能僅用於輔助戰果規劃，不會修改任何遊戲資料。

需要注意的是，戰果資料需要在遊戲內 **手動進入戰果頁面** 後才能獲取最新資訊，並重新整理用戶端的本機快取。

---

### 4. 升級任務中心

任務中心新增「全任務」目錄，不再僅顯示當前遊戲中已經接受的任務。

新增以下功能：

* 按任務編號、名稱或說明進行搜尋
* 按任務類型、週期及解鎖狀態進行篩選
* 查看任務完成條件
* 查看前置任務與後續任務關係

同時新增任務資料更新功能。

應用程式可以檢查並下載新版任務資料，更新完成後無需重新啟動即可立即生效。

---

### 5. 增強航海日誌

航海日誌現在可以記錄和查看更多類型的遊戲操作，包括：

* 出擊記錄
* 遠征記錄
* 建造記錄
* 開發記錄
* 改修與廢棄記錄
* 艦娘除籍記錄
* 資源變化記錄

各類日誌同時新增對應的篩選功能，方便根據時間或操作類型快速尋找記錄。

航海日誌僅儲存在當前裝置本機，不會自動上傳。

---

### 6. 新增遊戲繪製模式

新增三種遊戲繪製模式，可根據裝置效能與相容性進行選擇。

#### 高效能模式

使用 **Texture Layer + WebGL** 繪製，並保留工具列背景模糊效果。

該模式可以保留較完整的介面效果，但在部分裝置上可能出現卡頓、耗電增加或較高的效能損耗。

#### 標準模式（推薦）

使用 **Hybrid Composition + WebGL** 繪製，在效能、穩定性與相容性之間取得平衡。

該模式會關閉工具列背景模糊效果，推薦大多數裝置使用。

#### 相容模式

使用 **Hybrid Composition + Canvas** 繪製，以相容性為優先。

適用於出現 WebGL 顯示異常、黑畫面、閃爍或畫面不穩定的裝置，但遊戲畫面效能可能會有所降低。

切換繪製模式後，應用程式會自動重新載入遊戲頁面。

> **建議不要在戰鬥或其他重要操作過程中切換繪製模式。**

---

### 7. 調整遊戲影格率設定

原有「高影格率模式」調整為三種影格率策略。

#### 自動

優先以 **60 FPS** 執行。

如果偵測到當前裝置持續無法穩定執行，將自動降低至 **30 FPS**。

#### 穩定 30 FPS

固定以 **30 FPS** 為目標執行，優先降低掉幀、裝置發熱及耗電。

#### 優先 60 FPS

盡可能保持 **60 FPS**，不主動降低影格率，但可能增加裝置發熱、耗電及效能負載。

如果當前 Android WebView 不支援相關影格率控制能力，應用程式將保留遊戲原始影格率。

---

### 8. 增強戰鬥資訊與提醒

本次更新繼續完善戰鬥資訊顯示及提醒功能，包括：

* 新增基地空襲資訊顯示
* 新增敵方艦隊前 3 位預測資訊
* 完善敵方艦隊及聯合艦隊資訊顯示
* 最佳化戰鬥階段、艦隊狀態及血條同步
* 新增中破、大破震動提醒
* 加強艦娘受損狀態的動態呼吸提示
* 最佳化戰鬥預測的執行效率

---

### 9. 增強泊地修理功能

泊地修理頁面現在支援選擇實際參與泊地修理的艦隊，並進一步完善修理狀態及計時顯示。

從首頁的泊地修理提示進入時，將自動定位至對應艦隊，方便快速確認當前泊地修理進度。

---

### 10. 最佳化選單與設定介面

設定頁面重新按照功能進行分類，並進一步整理介面結構。

同時新增及完善以下功能：

* 頂部資訊列支援自由調整顯示內容
* 長按頂部資訊列即可進入編輯模式
* 支援自由選擇顯示項目
* 支援拖曳調整顯示順序
* 支援一鍵恢復預設設定
* 支援拖曳調整側邊選單順序
* 支援將選單列放置於螢幕右側
* 支援套用推薦的遊戲區域與選單顯示比例
* 最佳化部分篩選控制項及頁面配置
* 補全簡體中文、繁體中文及日文介面文案

頂部資訊列除原有的基礎資源外，本次還新增以下資訊：

* 戰果與排名
* 泊地修理計時
* 家具箱
* 間宮
* 伊良湖
* 勳章
* 甲種勳章
* 戰鬥詳報
* 各類新型兵裝資材
* 其他常用道具與資源

方便根據個人需求快速查看常用資源及道具持有數量。

---

## 二、效能最佳化

### 1. 最佳化遊戲畫面繪製

進一步隔離遊戲 WebView 與工具列等用戶端介面的重新整理流程，減少工具列及其他介面更新對遊戲畫面繪製的影響。

主要改善：

* 掉幀
* 動畫不流暢
* 操作延遲
* 介面重新整理互相影響

---

### 2. 最佳化遊戲資料處理

較大的遊戲回應資料現在會優先在背景進行預處理，降低資料解析過程對主介面繪製的影響。

同時合併短時間內連續產生的狀態更新，減少不必要的重複重新整理與介面重建。

---

### 3. 最佳化戰鬥預測效能

戰鬥預測中的主要計算工作調整至背景執行，降低增強模式計算過程中對遊戲畫面及用戶端介面操作的影響。

---

### 4. 最佳化相容模式效能

改善 Android 相容模式下的畫面合成方式，降低部分裝置在使用相容模式時產生的額外效能損耗。

---

## 三、問題修復

本次更新修復及改善以下問題：

* 修復「未卜先知」在遊擊部隊及聯合艦隊編成下可能出現戰鬥結果預判錯誤的問題，並完善特殊艦隊編成的識別與計算邏輯
* 修復任務目錄尚未載入完成時進入任務中心可能發生異常或當機的問題
* 修復不同任務資料來源使用不同編號格式，導致部分任務無法正確比對的問題
* 修復部分前置任務、後續任務關係顯示不正確的問題
* 修復任務詳情中的字型、本文顏色及編號標籤顯示不一致的問題
* 修復首次進入遊戲頁面時，資料擷取功能可能未及時啟用的問題
* 修復連續接收遊戲資料時，事件順序或狀態重新整理可能出現異常的問題
* 修復影格率自動調整與遊戲資料擷取同時執行時可能出現的邊界問題
* 修復部分繪製模式切換失敗後未能正確回復的問題
* 修復部分戰鬥狀態、敵方艦隊及基地空襲資訊同步異常的問題
* 最佳化網路設定輸入驗證，並補充位址、連接埠、通訊協定及 IPv6 格式提示
* 最佳化部分 UI 的配置、字型、顏色及顯示效果
* 修復若干已知問題，並進一步提升整體穩定性

---

## 四、已知問題與後續開發計畫

目前收到的問題回饋主要集中在 **華為系裝置（包括榮耀）**，其他品牌裝置出現 BUG 的情況相對較少。

本用戶端主要依據 Android 與 Flutter 官方開發文件進行開發和適配。

不過，由於華為系裝置在系統底層、WebView 以及部分系統元件方面可能存在較多客製化，與標準 Android 環境存在一定差異，因此部分功能在這些裝置上可能會出現難以穩定重現或判斷的相容性問題。

目前我也在盡可能針對相關問題進行最佳化和適配，但受限於裝置型號、系統版本以及底層實作差異，部分問題暫時可能無法完全解決，還請大家理解。

如果在使用過程中遇到問題，也歡迎提供：

* 裝置型號
* 系統版本
* 問題發生步驟
* 相關截圖
* 用戶端診斷日誌

這些資訊都可以幫助後續進一步排查問題。

---

### 關於「野琦計時器」

目前比較遺憾的是，我自己的遊戲帳號並沒有野琦。

雖然相關功能程式碼已經基本完成，但由於缺少實際帳號環境，目前還無法進行完整的功能測試。

因此後續可能需要尋找一位擁有野琦的玩家協助測試，確認計時邏輯及實際執行狀態正常後，再進一步完善並開放該功能。

---

### 後續開發方向

之後的開發仍將以以下幾個方向為主：

* 持續最佳化行動端的遊戲體驗
* 提高不同裝置與系統版本的相容性
* 改善用戶端效能與穩定性
* 完善現有輔助功能
* 逐步加入更多實用功能

非常感謝大家一直以來提供的問題回饋、建議與支持。

作為個人開發專案，我會繼續在能力範圍內盡可能完善這個用戶端，也希望能夠讓行動端遊玩和管理《艦隊 Collection》的體驗變得更加方便。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.3/README.zh-Hant.md`},ja:{body:`今回のアップデートでは、主に **クライアント診断、改修計画、戦果管理、任務センター、航海日誌、ゲーム描画、パフォーマンス最適化** を改善しました。あわせて複数の既知の問題を修正し、さまざまな端末での安定性と互換性をさらに向上させました。

**8月14日0時に公開した v1.0.3 にはパッケージングの不備がありました。旧1.0.3は削除し、現在は「真・v1.0.3」を再アップロードしています！8月14日0:00～3:00の間にダウンロードした提督は、もう一度ダウンロードしてください。旧1.0.3は使わないでください！！！！**

多くの提督からのご提案を受け、今回 QQ グループを開設しました。提督同士の交流や、ご意見・不具合のフィードバックにご利用ください。

**QQ グループ：1104904097**

---

## 一、新機能と機能強化

### 1. クライアント診断ログの追加

動作のかくつき、クラッシュ、データ処理の異常、一部端末の互換性問題の調査に役立つクライアント診断ログを追加しました。

診断ログには、次の特徴があります。

* **既定で有効になっており、いつでも手動で無効にできます**
* ログが自動でアップロードされることはありません
* 記録するのはパフォーマンスデータ、エラーの概要、匿名の端末動作情報のみです
* アカウント、パスワード、Cookie、トークン、リクエスト本文、レスポンス本文、ゲームのスクリーンショットは記録しません
* ローカルへの保存や、システムの共有画面からのエクスポートに対応しています
* 端末内の診断ログはいつでも消去できます
* 診断ログを無効にすると、関連するパフォーマンスのサンプリングと診断記録を停止します

使用中に異常が発生した場合は、診断ログをエクスポートし、問題の説明、発生手順、関連するスクリーンショットを添えて、次の宛先へお送りいただけると助かります。

**yamatosaki123[at]gmail.com**

これらの情報は、問題の特定と調査をより正確に進めるために役立ちます。

---

### 2. 「改修計画」の追加

日付ごとに改修可能な装備を確認できる改修計画機能を追加しました。次の情報をまとめて表示します。

* 改修に必要な開発資材と改修資材
* 改修段階ごとに必要な装備と資源
* 改修可能な曜日と二番艦の条件
* 装備のお気に入り登録とクイック絞り込み

あわせて、改修データの手動更新機能も追加しました。

更新したデータは、アプリを再起動せずにすぐ反映されます。ダウンロードやデータ検証に失敗した場合は、現在のローカルデータをそのまま自動で使用し、既存の機能には影響しません。

---

### 3. 「戦果」機能の追加

毎月の戦果獲得状況を記録・計画するための、独立した戦果ページを追加しました。

主な内容は次のとおりです。

* 現在の戦果情報と過去の記録
* EO 海域の戦果計画
* 戦果任務の選択と集計
* 月間戦果カレンダー

この機能は戦果計画の補助のみを目的としており、ゲームデータを変更することはありません。

最新の情報を取得してクライアントのローカルキャッシュを更新するには、ゲーム内で **戦果画面を手動で開く** 必要があります。

---

### 4. 任務センターの強化

任務センターに「全任務」カタログを追加しました。ゲーム内で現在受注している任務以外も表示できるようになりました。

次の機能を追加しました。

* 任務番号、名前、説明による検索
* 任務の種類、周期、解放状態による絞り込み
* 任務の達成条件の確認
* 前提任務と後続任務の関係の確認

あわせて、任務データの更新機能も追加しました。

新しい任務データの確認とダウンロードができ、更新後は再起動せずにすぐ反映されます。

---

### 5. 航海日誌の強化

航海日誌で、より多くのゲーム操作を記録・確認できるようになりました。

* 出撃記録
* 遠征記録
* 建造記録
* 開発記録
* 改修・廃棄記録
* 艦娘の除籍記録
* 資源変動記録

各種ログに対応した絞り込み機能も追加し、時間や操作の種類から記録を探しやすくしました。

航海日誌は現在の端末内にのみ保存され、自動でアップロードされることはありません。

---

### 6. ゲーム描画モードの追加

端末の性能と互換性に応じて選べる、3種類のゲーム描画モードを追加しました。

#### 高性能モード

**Texture Layer + WebGL** で描画し、ツールバー背景のぼかし効果も維持します。

画面の視覚効果を比較的多く維持できますが、一部端末ではかくつき、消費電力の増加、大きな処理負荷が発生する場合があります。

#### 標準モード（推奨）

**Hybrid Composition + WebGL** で描画し、性能・安定性・互換性のバランスを取ります。

ツールバー背景のぼかし効果は無効になります。多くの端末におすすめするモードです。

#### 互換モード

**Hybrid Composition + Canvas** で描画し、互換性を優先します。

WebGL の表示異常、黒い画面、ちらつき、表示の不安定さが発生する端末向けです。ただし、ゲーム画面の描画性能が低下する場合があります。

描画モードを切り替えると、ゲームページが自動で再読み込みされます。

> **戦闘中や重要な操作の途中では、描画モードを切り替えないことをおすすめします。**

---

### 7. ゲームのフレームレート設定の調整

従来の「高フレームレートモード」を、3種類のフレームレート方針に変更しました。

#### 自動

**60 FPS** での動作を優先します。

端末が安定した動作を継続できないと検出した場合は、自動で **30 FPS** に下げます。

#### 安定 30 FPS

目標を **30 FPS** に固定し、フレーム落ち、端末の発熱、電池消費の低減を優先します。

#### 60 FPS 優先

できる限り **60 FPS** を維持し、自動ではフレームレートを下げません。ただし、端末の発熱、電池消費、処理負荷が増える場合があります。

使用中の Android WebView が該当するフレームレート制御に対応していない場合は、ゲーム本来のフレームレートを維持します。

---

### 8. 戦闘情報と通知の強化

今回も戦闘情報の表示と通知機能を改善しました。

* 基地空襲情報の表示を追加
* 敵艦隊予測の上位3候補を追加
* 敵艦隊と連合艦隊の情報表示を改善
* 戦闘フェーズ、艦隊状態、HP バーの同期を最適化
* 中破・大破時の振動通知を追加
* 艦娘の損傷状態を示す明滅表示を強化
* 戦闘予測の実行効率を最適化

---

### 9. 泊地修理機能の強化

泊地修理ページで、実際に泊地修理に参加している艦隊を選択できるようになりました。修理状態とタイマー表示もさらに改善しました。

ホームの泊地修理表示から開いた場合は、対応する艦隊へ自動で移動し、現在の修理進捗をすぐ確認できます。

---

### 10. メニューと設定画面の最適化

設定ページを機能別に分類し直し、画面構成もさらに整理しました。

あわせて、次の機能を追加・改善しました。

* 上部情報バーの表示内容を自由に変更
* 上部情報バーの長押しで編集モードへ移行
* 表示項目の自由な選択
* ドラッグによる表示順の変更
* ワンタップで既定の設定へ復元
* ドラッグによるサイドメニューの並べ替え
* メニューバーを画面右側へ配置
* ゲーム領域とメニューに推奨の表示比率を適用
* 一部の絞り込み操作とページレイアウトを最適化
* 簡体字中国語、繁体字中国語、日本語の画面文言を補完

上部情報バーには、従来の基本資源に加えて、次の情報も追加しました。

* 戦果と順位
* 泊地修理タイマー
* 家具箱
* 間宮
* 伊良湖
* 勲章
* 甲種勲章
* 戦闘詳報
* 各種新型兵装資材
* その他のよく使うアイテムと資源

自分の用途に合わせて、よく使う資源やアイテムの所持数を手早く確認できます。

---

## 二、パフォーマンス最適化

### 1. ゲーム画面の描画を最適化

ゲーム WebView と、ツールバーなどクライアント側の画面の更新処理をさらに分離し、ツールバーや他の画面の更新がゲーム描画に与える影響を減らしました。

主な改善点：

* フレーム落ち
* アニメーションのかくつき
* 操作の遅延
* 画面更新の相互干渉

---

### 2. ゲームデータ処理の最適化

大きなゲームレスポンスデータは、優先的にバックグラウンドで前処理するようにし、データ解析がメイン画面の描画に与える影響を減らしました。

また、短時間に連続して発生する状態更新をまとめ、不要な再更新や画面の再構築を削減しました。

---

### 3. 戦闘予測のパフォーマンス最適化

戦闘予測の主要な計算処理をバックグラウンドで実行するように変更し、強化モードの計算がゲーム画面やクライアント画面の操作に与える影響を減らしました。

---

### 4. 互換モードのパフォーマンス最適化

Android の互換モードで画面合成方式を改善し、一部端末で互換モードを使用した際に生じる追加の処理負荷を減らしました。

---

## 三、不具合修正

今回のアップデートでは、次の問題を修正・改善しました。

* 「戦闘予測」で遊撃部隊や連合艦隊の編成時に戦闘結果の予測を誤る場合がある問題を修正し、特殊な艦隊編成の識別・計算ロジックを改善
* 任務カタログの読み込み完了前に任務センターを開くと、異常やクラッシュが発生する場合がある問題を修正
* 任務データの提供元によって番号形式が異なり、一部任務を正しく照合できない問題を修正
* 一部の前提任務・後続任務の関係が正しく表示されない問題を修正
* 任務詳細のフォント、本文色、番号ラベルの表示が統一されていない問題を修正
* ゲームページを初めて開いた際に、データ取得機能の有効化が間に合わない場合がある問題を修正
* ゲームデータを連続で受信した際に、イベントの順序や状態更新が異常になる場合がある問題を修正
* フレームレートの自動調整とゲームデータ取得が同時に動作する際の、一部の境界条件の問題を修正
* 一部の描画モード切り替えに失敗した後、正しく元に戻れない問題を修正
* 一部の戦闘状態、敵艦隊、基地空襲情報の同期異常を修正
* ネットワーク設定の入力検証を改善し、アドレス、ポート、プロトコル、IPv6 形式の案内を追加
* 一部 UI のレイアウト、フォント、色、表示効果を最適化
* 複数の既知の問題を修正し、全体的な安定性をさらに向上

---

## 四、既知の問題と今後の開発計画

現在寄せられている問題の報告は、主に **Huawei 系端末（Honor を含む）** に集中しています。他社端末での不具合は比較的少ない状況です。

このクライアントは、主に Android と Flutter の公式開発ドキュメントに沿って開発・対応を進めています。

ただし、Huawei 系端末ではシステム基盤、WebView、一部のシステムコンポーネントに多くの独自変更が加えられ、標準的な Android 環境と差がある場合があります。そのため、一部機能で安定した再現や原因の判断が難しい互換性の問題が発生することがあります。

現在もできる限り関連する問題の最適化と対応を進めていますが、端末の機種、システムのバージョン、基盤部分の実装の違いにより、一部の問題は当面完全には解決できない可能性があります。ご理解いただけると幸いです。

使用中に問題が発生した場合は、次の情報をお寄せください。

* 端末の機種
* システムのバージョン
* 問題が発生する手順
* 関連するスクリーンショット
* クライアント診断ログ

これらの情報は、今後の詳しい調査に役立ちます。

---

### 「野埼タイマー」について

残念ながら、私自身のゲームアカウントには現在、野埼がいません。

関連する機能のコードはおおむね完成していますが、実際のアカウント環境がないため、まだ十分な動作テストを行えていません。

そのため、今後は野埼を所持しているプレイヤーにテストの協力をお願いする必要があるかもしれません。計時ロジックと実際の動作が正常であることを確認してから、さらに調整して機能を公開する予定です。

---

### 今後の開発方針

今後も、主に次の方向で開発を進めていきます。

* モバイルでのゲーム体験の継続的な最適化
* さまざまな端末とシステムバージョンへの互換性向上
* クライアントの性能と安定性の改善
* 既存の補助機能の充実
* 実用的な機能の段階的な追加

いつも不具合報告、ご提案、ご支援をいただき、本当にありがとうございます。

個人開発のプロジェクトとして、これからもできる範囲でクライアントを改善していきます。モバイルで『艦隊これくしょん』をプレイ・管理する体験を、より便利なものにできればと思っています。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.3/README.ja.md`},ko:{body:`이번 업데이트에서는 주로 **클라이언트 진단, 개수 계획, 전과 관리, 임무 센터, 항해 일지, 게임 렌더링 및 성능 최적화**를 개선했습니다. 여러 알려진 문제를 수정하고 다양한 기기에서의 안정성과 호환성도 더욱 높였습니다.

**8월 14일 0시에 배포한 v1.0.3에 패키징 오류가 있었습니다. 기존 1.0.3은 삭제했으며, 현재 「진・v1.0.3」을 다시 업로드했습니다! 8월 14일 0:00~3:00 사이에 다운로드한 제독 여러분은 다시 다운로드해 주세요. 기존 1.0.3은 사용하지 마세요!!!!**

많은 제독의 제안을 받아, 이번에 QQ 그룹을 만들었습니다. 제독 간 교류, 의견 제안 및 피드백에 활용해 주세요.

**QQ 그룹: 1104904097**

---

## 1. 새로운 기능 및 기능 개선

### 1. 클라이언트 진단 로그 추가

끊김, 충돌, 데이터 처리 이상 및 일부 기기의 호환성 문제를 조사하는 데 도움을 주는 클라이언트 진단 로그를 추가했습니다.

진단 로그의 특징은 다음과 같습니다.

* **기본으로 활성화되며 사용자가 언제든 직접 끌 수 있습니다**
* 로그는 자동으로 업로드되지 않습니다
* 성능 데이터, 오류 요약 및 익명화된 기기 작동 정보만 기록합니다
* 계정, 비밀번호, Cookie, 토큰, 요청 본문, 응답 본문 및 게임 스크린샷은 기록하지 않습니다
* 로컬 저장 또는 시스템 공유 패널을 통한 내보내기를 지원합니다
* 기기의 진단 로그를 언제든 삭제할 수 있습니다
* 진단 로그를 끄면 관련 성능 샘플링과 진단 기록을 중단합니다

사용 중 이상이 발생하면 진단 로그를 내보낸 뒤, 문제 설명, 발생 절차 및 관련 스크린샷을 함께 다음 주소로 보내 주시면 도움이 됩니다.

**yamatosaki123[at]gmail.com**

이 정보는 문제의 원인을 더 정확하게 파악하고 조사하는 데 도움이 됩니다.

---

### 2. 「개수 계획」 추가

날짜별로 개수할 수 있는 장비를 확인하는 개수 계획 기능을 추가했습니다. 다음 정보를 한곳에서 보여 줍니다.

* 개수에 필요한 개발 자재와 개수 자재
* 개수 단계별로 필요한 장비와 자원
* 개수 가능한 요일 및 보조함 조건
* 장비 즐겨찾기와 빠른 필터

개수 데이터 수동 업데이트 기능도 추가했습니다.

업데이트된 데이터는 앱을 다시 시작하지 않아도 즉시 적용됩니다. 다운로드나 데이터 검증에 실패하면 현재 로컬 데이터를 자동으로 계속 사용하며, 기존 기능에는 영향을 주지 않습니다.

---

### 3. 「전과」 기능 추가

매월 전과 획득 현황을 기록하고 계획하는 전용 전과 페이지를 추가했습니다.

주요 내용은 다음과 같습니다.

* 현재 전과 정보와 과거 기록
* EO 해역 전과 계획
* 전과 임무 선택과 집계
* 월간 전과 달력

이 기능은 전과 계획을 돕기 위한 용도이며 게임 데이터를 변경하지 않습니다.

최신 정보를 받아 클라이언트의 로컬 캐시를 갱신하려면, 게임 내에서 **전과 페이지를 직접 열어야** 합니다.

---

### 4. 임무 센터 개선

임무 센터에 「전체 임무」 목록을 추가했습니다. 이제 게임에서 현재 수락한 임무 외의 임무도 표시합니다.

다음 기능을 추가했습니다.

* 임무 번호, 이름 또는 설명으로 검색
* 임무 유형, 주기 및 해금 상태로 필터링
* 임무 완료 조건 확인
* 선행 임무와 후속 임무 관계 확인

임무 데이터 업데이트 기능도 추가했습니다.

앱에서 새 임무 데이터를 확인하고 다운로드할 수 있으며, 업데이트가 끝나면 재시작 없이 즉시 적용됩니다.

---

### 5. 항해 일지 개선

항해 일지가 더 다양한 게임 조작을 기록하고 표시할 수 있게 되었습니다.

* 출격 기록
* 원정 기록
* 건조 기록
* 개발 기록
* 개수 및 폐기 기록
* 칸무스 제적 기록
* 자원 변동 기록

각 로그에 맞는 필터도 추가하여 시간이나 조작 유형별로 기록을 빠르게 찾을 수 있습니다.

항해 일지는 현재 기기의 로컬에만 저장되며 자동으로 업로드되지 않습니다.

---

### 6. 게임 렌더링 모드 추가

기기 성능과 호환성에 따라 선택할 수 있는 세 가지 게임 렌더링 모드를 추가했습니다.

#### 고성능 모드

**Texture Layer + WebGL** 렌더링을 사용하며 도구 모음 배경 흐림 효과를 유지합니다.

인터페이스의 시각 효과를 비교적 온전히 유지할 수 있지만, 일부 기기에서는 끊김, 전력 소비 증가 또는 높은 성능 부담이 발생할 수 있습니다.

#### 표준 모드 (권장)

**Hybrid Composition + WebGL** 렌더링을 사용하여 성능, 안정성, 호환성 사이의 균형을 맞춥니다.

도구 모음 배경 흐림 효과가 꺼집니다. 대부분의 기기에 권장하는 모드입니다.

#### 호환 모드

**Hybrid Composition + Canvas** 렌더링을 사용하여 호환성을 우선합니다.

WebGL 표시 이상, 검은 화면, 깜빡임 또는 화면 불안정이 발생하는 기기에 적합하지만, 게임 화면 성능이 낮아질 수 있습니다.

렌더링 모드를 바꾸면 앱이 게임 페이지를 자동으로 다시 불러옵니다.

> **전투나 그 밖의 중요한 조작 중에는 렌더링 모드를 바꾸지 않는 것을 권장합니다.**

---

### 7. 게임 프레임률 설정 조정

기존 「고프레임 모드」를 세 가지 프레임률 정책으로 변경했습니다.

#### 자동

**60 FPS**로 실행하는 것을 우선합니다.

현재 기기가 지속적으로 안정적인 실행을 유지하지 못한다고 감지하면 **30 FPS**로 자동으로 낮춥니다.

#### 안정적인 30 FPS

목표를 **30 FPS**로 고정하여 프레임 드롭, 기기 발열 및 배터리 소모 감소를 우선합니다.

#### 60 FPS 우선

가능한 한 **60 FPS**를 유지하며 스스로 프레임률을 낮추지 않지만, 기기 발열, 배터리 소모 및 처리 부하가 증가할 수 있습니다.

현재 Android WebView가 해당 프레임률 제어를 지원하지 않으면 게임의 원래 프레임률을 유지합니다.

---

### 8. 전투 정보와 알림 개선

이번 업데이트에서도 전투 정보 표시와 알림 기능을 계속 개선했습니다.

* 기지 공습 정보 표시 추가
* 적 함대 예측 상위 3개 후보 정보 추가
* 적 함대 및 연합함대 정보 표시 개선
* 전투 단계, 함대 상태 및 HP 바 동기화 최적화
* 중파·대파 진동 알림 추가
* 칸무스 손상 상태의 맥동 표시 강화
* 전투 예측 실행 효율 최적화

---

### 9. 정박지 수리 기능 개선

정박지 수리 페이지에서 실제로 정박지 수리에 참여하는 함대를 선택할 수 있게 되었으며, 수리 상태와 타이머 표시도 더욱 개선했습니다.

홈 화면의 정박지 수리 안내로 진입하면 해당 함대로 자동 이동하여 현재 수리 진행 상황을 빠르게 확인할 수 있습니다.

---

### 10. 메뉴와 설정 화면 최적화

설정 페이지를 기능별로 다시 분류하고 화면 구조를 더욱 정리했습니다.

다음 기능도 추가하거나 개선했습니다.

* 상단 정보 바에 표시할 내용 자유롭게 변경
* 상단 정보 바를 길게 눌러 편집 모드 진입
* 표시 항목 자유롭게 선택
* 드래그하여 표시 순서 변경
* 한 번의 탭으로 기본 설정 복원
* 드래그하여 사이드 메뉴 순서 변경
* 메뉴 바를 화면 오른쪽에 배치
* 권장 게임 영역 및 메뉴 표시 비율 적용
* 일부 필터 컨트롤 및 페이지 레이아웃 최적화
* 중국어 간체, 중국어 번체 및 일본어 인터페이스 문구 보완

상단 정보 바에는 기존 기본 자원 외에 다음 정보도 추가했습니다.

* 전과와 순위
* 정박지 수리 타이머
* 가구 상자
* 마미야
* 이라코
* 훈장
* 갑종 훈장
* 전투상보
* 각종 신형 병장 자재
* 그 밖의 자주 쓰는 아이템과 자원

개인 필요에 따라 자주 쓰는 자원과 아이템의 보유 수량을 빠르게 확인할 수 있습니다.

---

## 2. 성능 최적화

### 1. 게임 화면 렌더링 최적화

게임 WebView와 도구 모음 등 클라이언트 인터페이스의 갱신 과정을 더욱 분리하여, 도구 모음이나 다른 화면의 업데이트가 게임 화면 렌더링에 미치는 영향을 줄였습니다.

주요 개선 사항:

* 프레임 드롭
* 부드럽지 않은 애니메이션
* 조작 지연
* 화면 갱신 간 상호 간섭

---

### 2. 게임 데이터 처리 최적화

큰 게임 응답 데이터는 우선 백그라운드에서 전처리하여, 데이터 분석이 메인 화면 렌더링에 미치는 영향을 줄입니다.

짧은 시간에 연속으로 발생하는 상태 업데이트도 묶어서 처리하여 불필요한 반복 갱신과 화면 재구성을 줄였습니다.

---

### 3. 전투 예측 성능 최적화

전투 예측의 주요 계산 작업을 백그라운드에서 실행하도록 바꾸어, 강화 모드 계산이 게임 화면과 클라이언트 인터페이스 조작에 미치는 영향을 줄였습니다.

---

### 4. 호환 모드 성능 최적화

Android 호환 모드의 화면 합성 방식을 개선하여, 일부 기기에서 호환 모드 사용 시 발생하는 추가 성능 부담을 줄였습니다.

---

## 3. 문제 수정

이번 업데이트에서 다음 문제를 수정하거나 개선했습니다.

* 「전투 예측」이 유격부대와 연합함대 편성에서 전투 결과를 잘못 예측할 수 있는 문제를 수정하고, 특수 함대 편성의 인식 및 계산 로직 개선
* 임무 목록 로딩이 끝나기 전에 임무 센터에 들어가면 오류나 충돌이 발생할 수 있는 문제 수정
* 임무 데이터 출처마다 번호 형식이 달라 일부 임무를 올바르게 대응시키지 못하는 문제 수정
* 일부 선행 임무 및 후속 임무 관계가 잘못 표시되는 문제 수정
* 임무 상세의 글꼴, 본문 색상 및 번호 태그 표시가 일관되지 않은 문제 수정
* 게임 페이지에 처음 진입할 때 데이터 수집 기능이 제때 활성화되지 않을 수 있는 문제 수정
* 게임 데이터를 연속 수신할 때 이벤트 순서 또는 상태 갱신에 이상이 발생할 수 있는 문제 수정
* 자동 프레임률 조절과 게임 데이터 수집이 동시에 실행될 때의 일부 경계 조건 문제 수정
* 일부 렌더링 모드 전환 실패 후 올바르게 이전 상태로 돌아가지 못하는 문제 수정
* 일부 전투 상태, 적 함대 및 기지 공습 정보의 동기화 이상 수정
* 네트워크 설정 입력 검증을 최적화하고 주소, 포트, 프로토콜 및 IPv6 형식 안내 추가
* 일부 UI의 레이아웃, 글꼴, 색상 및 표시 효과 최적화
* 여러 알려진 문제를 수정하고 전반적인 안정성을 더욱 향상

---

## 4. 알려진 문제 및 향후 개발 계획

현재 접수된 문제 보고는 주로 **Huawei 계열 기기 (Honor 포함)**에 집중되어 있습니다. 다른 브랜드 기기에서는 버그가 비교적 적게 발생하고 있습니다.

이 클라이언트는 주로 Android와 Flutter의 공식 개발 문서를 기준으로 개발하고 호환 작업을 진행합니다.

하지만 Huawei 계열 기기는 시스템 하부, WebView 및 일부 시스템 구성 요소에 많은 자체 수정이 적용되어 표준 Android 환경과 차이가 있을 수 있습니다. 이 때문에 일부 기능에서 일관되게 재현하거나 원인을 판단하기 어려운 호환성 문제가 발생할 수 있습니다.

현재도 가능한 한 관련 문제를 최적화하고 대응하고 있지만, 기기 모델, 시스템 버전 및 하부 구현의 차이 때문에 일부 문제는 당분간 완전히 해결하지 못할 수 있습니다. 이해해 주시면 감사하겠습니다.

사용 중 문제가 발생하면 다음 정보를 제공해 주시면 도움이 됩니다.

* 기기 모델
* 시스템 버전
* 문제 발생 절차
* 관련 스크린샷
* 클라이언트 진단 로그

이러한 정보는 이후 문제를 더 자세히 조사하는 데 도움이 됩니다.

---

### 「노자키 타이머」에 대하여

아쉽게도 제 게임 계정에는 현재 노자키가 없습니다.

관련 기능 코드는 대부분 완성했지만, 실제 계정 환경이 없어 아직 전체 기능 테스트를 진행하지 못했습니다.

따라서 이후 노자키를 보유한 플레이어에게 테스트 협조를 구해야 할 수 있습니다. 타이머 로직과 실제 작동 상태가 정상임을 확인한 뒤 기능을 더 다듬어 공개할 예정입니다.

---

### 향후 개발 방향

이후 개발도 주로 다음 방향으로 진행합니다.

* 모바일 게임 경험의 지속적인 최적화
* 다양한 기기와 시스템 버전의 호환성 향상
* 클라이언트 성능과 안정성 개선
* 기존 보조 기능 개선
* 실용적인 기능을 단계적으로 추가

항상 문제 보고, 제안 및 지원을 보내 주셔서 진심으로 감사합니다.

개인 개발 프로젝트인 만큼 제 능력이 닿는 범위에서 계속 클라이언트를 개선하고, 모바일에서 「함대 컬렉션」을 플레이하고 관리하는 경험이 더 편리해지기를 바랍니다.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.3/README.ko.md`},en:{body:`This update focuses on improvements to **client diagnostics, improvement planning, senka management, the quest center, the logbook, game rendering, and performance**, while fixing a number of known issues and further improving stability and compatibility across devices.

**The v1.0.3 released at 00:00 on August 14 had a packaging error. The old 1.0.3 has been removed, and the “True v1.0.3” has now been uploaded again! Admirals who downloaded it between 00:00 and 03:00 on August 14, please download it again. Do not use the old 1.0.3!!!!**

Following suggestions from many admirals, a QQ group has been created with this update so that everyone can chat, share suggestions, and provide feedback.

**QQ group: 1104904097**

---

## I. New features and enhancements

### 1. Client diagnostic logs

Added client diagnostic logs to help investigate stuttering, crashes, data processing errors, and compatibility issues on some devices.

Diagnostic logs have the following characteristics:

* **Enabled by default; users can turn them off manually at any time**
* Logs are never uploaded automatically
* Only performance data, error summaries, and anonymous information about device operation are recorded
* Accounts, passwords, cookies, tokens, request bodies, response bodies, and game screenshots are not recorded
* Logs can be saved locally or exported through the system share sheet
* Diagnostic logs on the device can be cleared at any time
* Turning off diagnostic logging stops the associated performance sampling and diagnostic recording

If you encounter an issue while using the app, please consider exporting the diagnostic logs and sending them, along with a description of the problem, steps to reproduce it, and relevant screenshots, to:

**yamatosaki123[at]gmail.com**

This information can help me locate and investigate problems more accurately.

---

### 2. Improvement planning

Added improvement planning, which lets you check equipment available for improvement on a given date and brings together:

* Development materials and improvement materials required
* Equipment and resources required at different improvement stages
* Available improvement days and assistant ship requirements
* Equipment favorites and quick filters

Also added manual updates for improvement data.

Updated data takes effect immediately without restarting the app. If downloading or data validation fails, the app automatically continues using the existing local data, without affecting existing functionality.

---

### 3. Senka

Added a dedicated senka page for recording and planning monthly senka gains.

It mainly includes:

* Current senka information and historical records
* Senka planning for EO maps
* Senka quest selection and totals
* A monthly senka calendar

This feature only assists with senka planning and does not modify any game data.

Please note that you need to **manually open the senka page in the game** to obtain the latest information and refresh the client's local cache.

---

### 4. Quest center upgrade

The quest center now has an “All quests” catalog, instead of only showing quests currently accepted in the game.

Added the following features:

* Search by quest ID, name, or description
* Filter by quest type, cycle, and unlock status
* View quest completion conditions
* View relationships between prerequisite and follow-up quests

Also added quest data updates.

The app can check for and download new quest data, which takes effect immediately after updating without a restart.

---

### 5. Logbook enhancements

The logbook can now record and display more types of game actions, including:

* Sortie records
* Expedition records
* Construction records
* Development records
* Improvement and dismantling records
* Ship removal records
* Resource change records

Each type of log also has corresponding filters, making it easier to find records by time or action type.

The logbook is stored only locally on the current device and is never uploaded automatically.

---

### 6. Game rendering modes

Added three game rendering modes to choose from according to your device's performance and compatibility.

#### High performance mode

Uses **Texture Layer + WebGL** rendering and retains the toolbar background blur effect.

This mode preserves more of the interface's visual effects, but may cause stuttering, increased power consumption, or greater performance overhead on some devices.

#### Standard mode (recommended)

Uses **Hybrid Composition + WebGL** rendering to balance performance, stability, and compatibility.

This mode disables the toolbar background blur effect and is recommended for most devices.

#### Compatibility mode

Uses **Hybrid Composition + Canvas** rendering, prioritizing compatibility.

Suitable for devices that experience WebGL display issues, black screens, flickering, or unstable visuals, though game rendering performance may be lower.

The app automatically reloads the game page after switching rendering modes.

> **Avoid switching rendering modes during battle or other important actions.**

---

### 7. Game frame rate settings

The previous “High frame rate mode” has been replaced with three frame rate policies.

#### Auto

Prioritizes running at **60 FPS**.

If the app detects that the device is persistently unable to maintain stable performance, it automatically reduces the frame rate to **30 FPS**.

#### Stable 30 FPS

Uses a fixed target of **30 FPS**, prioritizing fewer dropped frames, less device heat, and lower battery use.

#### Prefer 60 FPS

Maintains **60 FPS** whenever possible without proactively lowering the frame rate, but may increase device heat, battery use, and processing load.

If the current Android WebView does not support the relevant frame rate controls, the app retains the game's original frame rate.

---

### 8. Battle information and alert enhancements

This update continues to improve battle information and alerts, including:

* Added land base air raid information
* Added predictions for the top 3 possible enemy fleet compositions
* Improved enemy fleet and combined fleet information displays
* Improved synchronization of battle phases, fleet status, and HP bars
* Added vibration alerts for moderate and heavy damage
* Strengthened the animated pulsing indicators for damaged ships
* Improved battle prediction execution efficiency

---

### 9. Anchorage repair enhancements

The anchorage repair page now lets you select the fleets actually participating in anchorage repair, with further improvements to repair status and timer displays.

Opening the page from an anchorage repair hint on the home page automatically takes you to the corresponding fleet, making it easier to check current repair progress.

---

### 10. Menu and settings interface improvements

The settings page has been reorganized by function, with further refinements to its structure.

Also added or improved the following:

* Freely customize what the top information bar displays
* Long-press the top information bar to enter edit mode
* Freely choose the items to display
* Drag to change the display order
* Restore defaults with one tap
* Drag to reorder the side menu
* Place the menu bar on the right side of the screen
* Apply recommended proportions for the game area and menu
* Improved some filter controls and page layouts
* Completed interface text in Simplified Chinese, Traditional Chinese, and Japanese

In addition to the existing basic resources, the top information bar now supports:

* Senka and ranking
* Anchorage repair timers
* Furniture boxes
* Mamiya
* Irako
* Medals
* First-class medals
* Action reports
* Various new-model armament materials
* Other commonly used items and resources

This makes it easier to check quantities of frequently used resources and items according to your needs.

---

## II. Performance improvements

### 1. Game rendering improvements

Further separated the refresh processes for the game WebView and client interface elements such as the toolbar, reducing the impact of toolbar and other interface updates on game rendering.

Main improvements:

* Dropped frames
* Unsmooth animations
* Input lag
* Interference between interface refreshes

---

### 2. Game data processing improvements

Larger game responses are now preferentially preprocessed in the background, reducing the impact of data parsing on main interface rendering.

Successive state updates generated within a short period are also combined to reduce unnecessary repeated refreshes and interface rebuilds.

---

### 3. Battle prediction performance improvements

The main battle prediction calculations now run in the background, reducing the impact of enhanced-mode calculations on the game display and client interface interactions.

---

### 4. Compatibility mode performance improvements

Improved display composition in Android compatibility mode, reducing the extra performance overhead experienced on some devices when using this mode.

---

## III. Fixes

This update fixes or improves the following:

* Fixed possible incorrect battle result predictions in “Battle prediction” for striking force and combined fleet formations, and improved recognition and calculation logic for special fleet formations
* Fixed possible errors or crashes when opening the quest center before the quest catalog had finished loading
* Fixed some quests failing to match correctly because different quest data sources used different ID formats
* Fixed incorrect prerequisite and follow-up quest relationships in some cases
* Fixed inconsistent fonts, body text colors, and ID labels in quest details
* Fixed data capture potentially not being enabled promptly when first opening the game page
* Fixed possible event ordering or state refresh errors when receiving game data continuously
* Fixed possible edge cases when automatic frame rate adjustment and game data capture ran together
* Fixed failure to fall back correctly after some rendering mode switches failed
* Fixed synchronization errors in some battle statuses, enemy fleets, and land base air raid information
* Improved network setting input validation and added hints for addresses, ports, protocols, and IPv6 formats
* Improved the layout, fonts, colors, and display effects of parts of the UI
* Fixed several known issues and further improved overall stability

---

## IV. Known issues and future development plans

Most issue reports received so far concern **Huawei-family devices (including Honor)**. Bugs appear relatively less frequently on devices from other brands.

This client is developed and adapted primarily according to the official Android and Flutter development documentation.

However, Huawei-family devices may include extensive customization of the underlying system, WebView, and some system components, creating differences from a standard Android environment. As a result, some features may encounter compatibility issues that are difficult to reproduce consistently or diagnose on these devices.

I am doing my best to optimize and adapt the app for these issues, but differences in device models, system versions, and underlying implementations mean that some problems may not be fully resolvable for now. Thank you for your understanding.

If you encounter a problem while using the app, the following information is welcome:

* Device model
* System version
* Steps leading to the problem
* Relevant screenshots
* Client diagnostic logs

All of this information can help with further investigation.

---

### About the “Nozaki timer”

Unfortunately, my own game account currently does not have Nozaki.

Although the feature's code is largely complete, I cannot fully test it yet because I lack an actual account environment with her.

I may therefore need to find a player who owns Nozaki to help test it. After confirming that the timing logic and actual operation work correctly, I can further refine and make this feature available.

---

### Future development directions

Future development will continue to focus on:

* Continuously improving the mobile gameplay experience
* Improving compatibility across devices and system versions
* Improving client performance and stability
* Refining existing helper features
* Gradually adding more useful features

Thank you very much for all your issue reports, suggestions, and support.

As this is a personal development project, I will continue improving the client as much as I can within my abilities, and hope to make playing and managing Kantai Collection on mobile more convenient.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.3/README.en.md`}}},{id:366815041,tag:`1.0.2`,name:`ヤハギ v1.0.2`,publishedAt:`2026-08-07T14:46:28Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.2`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.2/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.2/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.2/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.2/README.ko.md)

## ヤハギ v1.0.2
## 一、新增功能与功能增强
### 1. 新增「持有一览」
新增「持有一览」页面，可集中查看当前账号实际持有的全部舰娘与装备。  
该页面仅用于数据查看，不提供任何会改变游戏状态的操作。
### 2. 新增「泊地修理」提示
修理详情页面新增「泊地修理（明石修理）」相关状态提示，方便确认当前泊地修理情况。
### 3. 新增多项设置
新增以下设置选项：
- 后台声音
- 工具栏模式
- 屏幕常亮
- 其他相关显示与使用设置
### 4. 新增高帧模式（实验性）
新增高帧模式，通过 rAF（requestAnimationFrame）提高页面渲染帧率。
开启后将尝试以 60 FPS 或设备屏幕支持的刷新率运行，以改善部分动画及界面的流畅度。
该功能目前仍处于实验阶段，不同设备上的实际效果可能存在差异。
### 5. 新增战斗预测计算模式（实验性）
针对目前战斗结果预测中 S / A / B / C / D 评分偶尔存在误判的问题，本次新增两种计算模式：
- **增强模式**  
  使用更加完整的战斗模拟与判断规则，预测准确度更高，但理论上会增加一定性能开销。  
  目前实际测试中暂未发现明显的额外性能影响，**推荐使用该模式**。
- **轻量模式**  
  简化部分战斗计算流程，降低性能开销，但预测准确度可能低于增强模式。
战斗预测功能仍处于持续完善阶段，如遇特殊战斗机制，结果可能与游戏最终判定存在差异。
### 6. 增强首页编队信息展示
首页编队区域现在可以更加完整地显示舰娘状态，包括：
- 当前耐久
- 主要属性
- 装备
- 燃料
- 弹药
进一步减少进入详细页面确认信息的操作。
### 7. 增强舰队页面显示效果
舰队页面新增及调整以下显示效果：
- 舰娘头像外框增加耐久血条显示
- 舰娘进入中破、大破状态时增加动态呼吸效果
- 舰娘疲劳值高于 50 时，头像区域增加动态闪光效果
- 「平均疲劳」调整为「最低疲劳」，更方便判断舰队当前最低士气状态
### 8. 加强出击前检查
新增舰娘装备状态检查。
当舰娘存在以下情况时，将在出击前进行提示：
- 未装备任何装备
- 装备槽未装满
用于降低因疏忽导致舰娘空装或装备不完整出击的情况。
## 二、问题修复与优化
- 修复「未卜先知」中敌方舰队名称被省略的问题，标题现在会根据卡片实际宽度自动适配。
- 修复「情报面板宽度」设置不生效的问题。
  - 该设置仅对横屏模式生效。
  - 竖屏模式下将自动适配屏幕宽度，无需手动设置。
- 更新「未卜先知」战斗判断规则，修复以下问题：
  - 夜战阶段已被击沉的敌舰错误恢复满血
  - 击沉状态与血条显示不一致
  - 部分活动海域点位显示错误
  - 其他战斗状态同步异常
- 修复舰队页面制空值计算错误。
  - 此前计算公式中遗漏了舰载机熟练度相关修正，导致部分情况下制空值计算不准确。
  - 本次已将熟练度纳入计算。
- 优化部分 UI 的布局及显示效果。
- 修复若干已知 BUG。
`,notes:{"zh-CN":{body:`## 一、新增功能与功能增强
### 1. 新增「持有一览」
新增「持有一览」页面，可集中查看当前账号实际持有的全部舰娘与装备。\\
该页面仅用于数据查看，不提供任何会改变游戏状态的操作。
### 2. 新增「泊地修理」提示
修理详情页面新增「泊地修理（明石修理）」相关状态提示，方便确认当前泊地修理情况。
### 3. 新增多项设置
新增以下设置选项：
- 后台声音
- 工具栏模式
- 屏幕常亮
- 其他相关显示与使用设置
### 4. 新增高帧模式（实验性）
新增高帧模式，通过 rAF（requestAnimationFrame）提高页面渲染帧率。
开启后将尝试以 60 FPS 或设备屏幕支持的刷新率运行，以改善部分动画及界面的流畅度。
该功能目前仍处于实验阶段，不同设备上的实际效果可能存在差异。
### 5. 新增战斗预测计算模式（实验性）
针对目前战斗结果预测中 S / A / B / C / D 评分偶尔存在误判的问题，本次新增两种计算模式：
- **增强模式**\\
  使用更加完整的战斗模拟与判断规则，预测准确度更高，但理论上会增加一定性能开销。\\
  目前实际测试中暂未发现明显的额外性能影响，**推荐使用该模式**。
- **轻量模式**\\
  简化部分战斗计算流程，降低性能开销，但预测准确度可能低于增强模式。
战斗预测功能仍处于持续完善阶段，如遇特殊战斗机制，结果可能与游戏最终判定存在差异。
### 6. 增强首页编队信息展示
首页编队区域现在可以更加完整地显示舰娘状态，包括：
- 当前耐久
- 主要属性
- 装备
- 燃料
- 弹药
进一步减少进入详细页面确认信息的操作。
### 7. 增强舰队页面显示效果
舰队页面新增及调整以下显示效果：
- 舰娘头像外框增加耐久血条显示
- 舰娘进入中破、大破状态时增加动态呼吸效果
- 舰娘疲劳值高于 50 时，头像区域增加动态闪光效果
- 「平均疲劳」调整为「最低疲劳」，更方便判断舰队当前最低士气状态
### 8. 加强出击前检查
新增舰娘装备状态检查。
当舰娘存在以下情况时，将在出击前进行提示：
- 未装备任何装备
- 装备槽未装满
用于降低因疏忽导致舰娘空装或装备不完整出击的情况。
## 二、问题修复与优化
- 修复「未卜先知」中敌方舰队名称被省略的问题，标题现在会根据卡片实际宽度自动适配。
- 修复「情报面板宽度」设置不生效的问题。
  - 该设置仅对横屏模式生效。
  - 竖屏模式下将自动适配屏幕宽度，无需手动设置。
- 更新「未卜先知」战斗判断规则，修复以下问题：
  - 夜战阶段已被击沉的敌舰错误恢复满血
  - 击沉状态与血条显示不一致
  - 部分活动海域点位显示错误
  - 其他战斗状态同步异常
- 修复舰队页面制空值计算错误。
  - 此前计算公式中遗漏了舰载机熟练度相关修正，导致部分情况下制空值计算不准确。
  - 本次已将熟练度纳入计算。
- 优化部分 UI 的布局及显示效果。
- 修复若干已知 BUG。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.2/README.md`},"zh-TW":{body:`## 一、新增功能與功能增強
### 1. 新增「持有一覽」
新增「持有一覽」頁面，可集中查看目前帳號實際持有的全部艦娘與裝備。\\
該頁面僅用於資料查看，不提供任何會改變遊戲狀態的操作。
### 2. 新增「泊地修理」提示
修理詳情頁面新增「泊地修理（明石修理）」相關狀態提示，方便確認目前的泊地修理情況。
### 3. 新增多項設定
新增以下設定選項：
- 背景音效
- 工具列模式
- 螢幕保持常亮
- 其他相關顯示與使用設定
### 4. 新增高幀率模式（實驗性）
新增高幀率模式，透過 rAF（requestAnimationFrame）提高頁面渲染幀率。
開啟後將嘗試以 60 FPS 或裝置螢幕支援的更新率執行，以改善部分動畫及介面的流暢度。
該功能目前仍處於實驗階段，不同裝置上的實際效果可能存在差異。
### 5. 新增戰鬥預測計算模式（實驗性）
針對目前戰鬥結果預測中 S / A / B / C / D 評分偶爾出現誤判的問題，本次新增兩種計算模式：
- **增強模式**\\
  使用更加完整的戰鬥模擬與判定規則，預測準確度更高，但理論上會增加一定的效能開銷。\\
  目前實際測試中暫未發現明顯的額外效能影響，推薦使用此模式。
- **輕量模式**\\
  簡化部分戰鬥計算流程，降低效能開銷，但預測準確度可能低於增強模式。
戰鬥預測功能仍處於持續完善階段，如遇特殊戰鬥機制，結果可能與遊戲最終判定存在差異。
### 6. 增強首頁編隊資訊顯示
首頁編隊區域現在可以更加完整地顯示艦娘狀態，包括：
- 目前耐久
- 主要屬性
- 裝備
- 燃料
- 彈藥
進一步減少進入詳細頁面確認資訊的操作。
### 7. 增強艦隊頁面顯示效果
艦隊頁面新增及調整以下顯示效果：
- 艦娘頭像外框新增耐久血條顯示
- 艦娘進入中破、大破狀態時新增動態呼吸效果
- 艦娘疲勞值高於 50 時，頭像區域新增動態閃光效果
- 「平均疲勞」調整為「最低疲勞」，更方便判斷艦隊目前最低士氣狀態
### 8. 加強出擊前檢查
新增艦娘裝備狀態檢查。
當艦娘存在以下情況時，將在出擊前進行提示：
- 未裝備任何裝備
- 裝備欄位未裝滿
用於降低因疏忽導致艦娘空裝或裝備不完整出擊的情況。
## 二、問題修正與最佳化
- 修正「未卜先知」中敵方艦隊名稱被省略的問題，標題現在會依照卡片實際寬度自動調整。
- 修正「情報面板寬度」設定未生效的問題。
  - 該設定僅對橫向畫面模式生效。
  - 直向畫面模式下將自動適應螢幕寬度，無需手動設定。
- 更新「未卜先知」戰鬥判定規則，修正以下問題：
  - 夜戰階段已被擊沉的敵艦錯誤恢復滿血
  - 擊沉狀態與血條顯示不一致
  - 部分活動海域點位顯示錯誤
  - 其他戰鬥狀態同步異常
- 修正艦隊頁面制空值計算錯誤。
  - 此前計算公式中遺漏了艦載機熟練度相關修正，導致部分情況下制空值計算不準確。
  - 本次已將熟練度納入計算。
- 最佳化部分 UI 的版面配置及顯示效果。
- 修正若干已知 BUG。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.2/README.zh-Hant.md`},ja:{body:`## 一、新機能・機能強化
### 1. 「所持一覧」を追加
現在のアカウントが実際に所持しているすべての艦娘・装備をまとめて確認できる「所持一覧」ページを追加しました。\\
このページはデータの閲覧専用であり、ゲーム内の状態を変更する操作は行いません。
### 2. 「泊地修理」表示を追加
修理詳細ページに「泊地修理（明石修理）」に関するステータス表示を追加し、現在の泊地修理状況を確認しやすくしました。
### 3. 各種設定項目を追加
以下の設定項目を追加しました。
- バックグラウンドサウンド
- ツールバーモード
- 画面常時点灯
- その他の表示・操作関連設定
### 4. 高フレームレートモードを追加（実験的機能）
rAF（requestAnimationFrame）を利用して描画フレームレートを向上させる、高フレームレートモードを追加しました。
有効にすると、60 FPS または端末のディスプレイが対応するリフレッシュレートでの動作を試み、アニメーションや一部UIの表示をより滑らかにします。
本機能は現在も実験段階のため、端末によって実際の効果が異なる場合があります。
### 5. 戦闘予測の計算モードを追加（実験的機能）
現在の戦闘結果予測において、S / A / B / C / D の勝利判定が一部正確でない場合がある問題に対応するため、2種類の計算モードを追加しました。
- **強化モード**\\
  より詳細な戦闘シミュレーションおよび判定ルールを使用し、予測精度を向上させます。理論上は一定の処理負荷が増加します。\\
  現時点の実機テストでは目立った追加負荷は確認されておらず、**こちらのモードを推奨します**。
- **軽量モード**\\
  一部の戦闘計算処理を簡略化し、処理負荷を抑えますが、予測精度は強化モードより低くなる場合があります。
戦闘予測機能は現在も継続的に改善中です。特殊な戦闘システムなどでは、ゲーム内の最終判定と異なる結果になる場合があります。
### 6. ホーム画面の編成情報表示を強化
ホーム画面の編成欄で、艦娘の状態をより詳細に表示できるようになりました。
表示内容：
- 現在耐久
- 主要ステータス
- 装備
- 燃料
- 弾薬
詳細画面を開かなくても、より多くの情報を確認できるようになりました。
### 7. 艦隊ページの表示演出を強化
艦隊ページに以下の表示・演出を追加、調整しました。
- 艦娘アイコンの外枠に耐久ゲージを追加
- 中破・大破状態の艦娘に動的なパルス表示を追加
- 疲労値が50を超えている艦娘のアイコン内に動的な光沢エフェクトを追加
- 「平均疲労」を「最低疲労」に変更し、艦隊内で最も低いコンディションを確認しやすくしました
### 8. 出撃前チェックを強化
艦娘の装備状態を確認する機能を追加しました。
以下の状態の場合、出撃前に警告を表示します。
- 装備を1つも装備していない
- 装備スロットがすべて埋まっていない
装備忘れや、装備が不完全な状態で出撃してしまうミスを減らすことを目的としています。
## 二、不具合修正・改善
- 「未卜先知」で敵艦隊名が省略される問題を修正しました。タイトルがカードの実際の横幅に応じて自動調整されるようになりました。
- 「情報パネル幅」の設定が反映されない問題を修正しました。
  - この設定は横画面モードでのみ有効です。
  - 縦画面モードでは画面幅に自動で最適化されるため、手動設定は不要です。
- 「未卜先知」の戦闘判定ルールを更新し、以下の問題を修正しました。
  - 夜戦フェーズで撃沈済みの敵艦が誤って耐久全快として表示される問題
  - 撃沈状態と耐久ゲージの表示が一致しない問題
  - 一部イベント海域でマス表示が正しくない問題
  - その他の戦闘状態同期に関する問題
- 艦隊ページの制空値計算に関する不具合を修正しました。
  - これまでの計算式では艦載機熟練度による補正が含まれておらず、一部の状況で制空値が正しく計算されない問題がありました。
  - 今回の更新で熟練度補正を計算に反映しました。
- 一部UIのレイアウトおよび表示を改善しました。
- その他、複数の既知の不具合を修正しました。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.2/README.ja.md`},ko:{body:`## 1. 새 기능 및 기능 강화

### 1. 「보유 목록」 추가

현재 계정이 실제로 보유한 모든 칸무스와 장비를 한곳에서 확인할 수 있는 「보유 목록」 페이지를 추가했습니다.\\
이 페이지는 데이터 조회 전용이며 게임 상태를 바꾸는 조작은 제공하지 않습니다.

### 2. 「정박지 수리」 표시 추가

수리 상세 페이지에 「정박지 수리(아카시 수리)」 관련 상태 표시를 추가하여 현재 정박지 수리 상황을 쉽게 확인할 수 있습니다.

### 3. 여러 설정 추가

다음 설정 항목을 추가했습니다.

- 백그라운드 사운드
- 도구 모음 모드
- 화면 켜짐 유지
- 기타 관련 표시 및 사용 설정

### 4. 고프레임 모드 추가(실험적 기능)

rAF(requestAnimationFrame)를 통해 페이지 렌더링 프레임 속도를 높이는 고프레임 모드를 추가했습니다.
활성화하면 60 FPS 또는 기기 화면이 지원하는 주사율로 실행을 시도하여 일부 애니메이션과 화면을 더 부드럽게 표시합니다.
현재 실험 단계인 기능이므로 실제 효과는 기기마다 다를 수 있습니다.

### 5. 전투 예측 계산 모드 추가(실험적 기능)

현재 전투 결과 예측에서 S / A / B / C / D 평가를 간혹 잘못 판정하는 문제에 대응하여 두 가지 계산 모드를 추가했습니다.

- **강화 모드**\\
  더 완전한 전투 시뮬레이션과 판정 규칙을 사용하여 예측 정확도를 높이지만, 이론상 처리 부하가 다소 증가합니다.\\
  현재까지 실제 테스트에서는 뚜렷한 추가 성능 영향이 발견되지 않았으며, **이 모드를 권장합니다**.
- **경량 모드**\\
  전투 계산 과정의 일부를 간소화하여 처리 부하를 줄이지만, 예측 정확도는 강화 모드보다 낮을 수 있습니다.

전투 예측 기능은 계속 개선 중입니다. 특수한 전투 기믹에서는 게임의 최종 판정과 결과가 다를 수 있습니다.

### 6. 홈 화면 편성 정보 표시 강화

홈 화면의 편성 영역에서 다음을 포함한 칸무스 상태를 더 완전하게 표시합니다.

- 현재 내구
- 주요 능력치
- 장비
- 연료
- 탄약

정보를 확인하기 위해 상세 페이지로 들어가야 하는 조작을 더욱 줄였습니다.

### 7. 함대 페이지 표시 효과 강화

함대 페이지에 다음 표시 효과를 추가하거나 조정했습니다.

- 칸무스 초상화 테두리에 내구 게이지 추가
- 칸무스가 중파 또는 대파 상태일 때 동적인 점멸 효과 추가
- 칸무스의 피로도 수치가 50을 초과하면 초상화 영역에 동적인 반짝임 효과 추가
- 「평균 피로도」를 「최저 피로도」로 변경하여 현재 함대의 가장 낮은 사기 상태를 쉽게 확인

### 8. 출격 전 점검 강화

칸무스의 장비 상태 점검을 추가했습니다.
칸무스가 다음 상태일 때 출격 전에 알려 줍니다.

- 장비를 하나도 장착하지 않은 경우
- 장비 슬롯을 모두 채우지 않은 경우

부주의로 장비가 없거나 불완전한 상태에서 출격하는 일을 줄이기 위한 기능입니다.

## 2. 문제 수정 및 최적화

- 「전투 예측」에서 적 함대 이름이 생략되던 문제를 수정했습니다. 이제 제목이 카드의 실제 너비에 맞춰 자동으로 조정됩니다.
- 「정보 패널 너비」 설정이 적용되지 않던 문제를 수정했습니다.
  - 이 설정은 가로 화면 모드에만 적용됩니다.
  - 세로 화면 모드에서는 화면 너비에 자동으로 맞추므로 수동 설정이 필요하지 않습니다.
- 「전투 예측」의 전투 판정 규칙을 갱신하여 다음 문제를 수정했습니다.
  - 야간전 단계에서 이미 격침된 적함의 내구가 잘못 최대로 복구되던 문제
  - 격침 상태와 내구 게이지 표시가 일치하지 않던 문제
  - 일부 이벤트 해역 지점이 잘못 표시되던 문제
  - 기타 전투 상태 동기화 이상
- 함대 페이지의 제공 수치 계산 오류를 수정했습니다.
  - 이전 계산식에는 함재기 숙련도 관련 보정이 빠져 있어 일부 상황에서 제공 수치가 부정확했습니다.
  - 이번 업데이트에서는 숙련도를 계산에 반영했습니다.
- 일부 UI의 레이아웃과 표시 효과를 개선했습니다.
- 몇 가지 알려진 버그를 수정했습니다.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.2/README.ko.md`},en:{body:`## 1. New features and enhancements

### 1. Inventory page

Added an Inventory page that brings together all ships and equipment actually owned by the current account.\\
This page is for viewing data only and offers no actions that change the game's state.

### 2. Anchorage repair indicators

Added status indicators for Anchorage repair (Akashi repair) to the repair details page, making it easier to check the current anchorage repair status.

### 3. Additional settings

Added the following settings:

- Background sound
- Toolbar mode
- Keep screen on
- Other related display and usage settings

### 4. High frame rate mode (experimental)

Added a high frame rate mode that uses rAF (requestAnimationFrame) to increase the page rendering frame rate.
When enabled, it attempts to run at 60 FPS or the refresh rate supported by the device's screen, making some animations and interface elements smoother.
This feature is still experimental, and its actual effect may vary between devices.

### 5. Battle prediction calculation modes (experimental)

To address occasional incorrect S / A / B / C / D ratings in battle result predictions, this update adds two calculation modes:

- **Enhanced mode**\\
  Uses more complete battle simulation and judgment rules for more accurate predictions, with a theoretical increase in processing overhead.\\
  Actual testing so far has found no noticeable additional performance impact. **This is the recommended mode.**
- **Lightweight mode**\\
  Simplifies parts of the battle calculation process to reduce processing overhead, but predictions may be less accurate than in Enhanced mode.

Battle prediction is still being improved. Special battle mechanics may produce results that differ from the game's final judgment.

### 6. More fleet information on the home page

The fleet section on the home page can now show more complete ship status information, including:

- Current HP
- Main stats
- Equipment
- Fuel
- Ammunition

This further reduces the need to open detail pages to check information.

### 7. Improved fleet page visuals

Added or adjusted the following visuals on the fleet page:

- HP bars around ship portraits
- Animated pulsing when ships are moderately or heavily damaged
- Animated sparkle in the portrait area when a ship's morale value is above 50
- Changed Average morale to Minimum morale, making it easier to check the fleet's lowest current morale

### 8. Stronger pre-sortie checks

Added checks for ship equipment status.
A warning appears before a sortie when a ship:

- Has no equipment
- Has unfilled equipment slots

This helps reduce accidental sorties with no equipment or incomplete equipment loadouts.

## 2. Fixes and improvements

- Fixed truncated enemy fleet names in Battle prediction. Titles now adapt automatically to the card's actual width.
- Fixed the Information panel width setting having no effect.
  - This setting applies only in landscape mode.
  - In portrait mode, the panel automatically fits the screen width without manual adjustment.
- Updated Battle prediction judgment rules to fix:
  - Sunk enemy ships incorrectly returning to full HP during the night battle phase
  - Inconsistencies between sunk status and HP bars
  - Incorrect node displays in some event maps
  - Other battle state synchronization issues
- Fixed air power calculations on the fleet page.
  - The previous formula omitted aircraft proficiency modifiers, causing inaccurate air power values in some situations.
  - Proficiency is now included in the calculation.
- Improved some UI layouts and visual presentation.
- Fixed several known bugs.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.2/README.en.md`}}},{id:364954386,tag:`1.0.1`,name:`ヤハギ v1.0.1`,publishedAt:`2026-08-04T15:00:47Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.1`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.1/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.1/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.1/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.1/README.ko.md)

## ヤハギ v1.0.1

本次更新主要完善了舰队信息展示和数据捕获体验，并修复了多个界面与状态同步问题。

### 更新内容

- 重做舰队详情界面，使舰娘、装备及各项状态的展示更加清晰紧凑。
- 完善舰队、远征、入渠、建造和任务页面。
- 增强「未卜先知」战斗面板，优化战斗信息及联合舰队展示。
- 新增远征检查与资源历史趋势功能。
- 优化舰娘头像、装备图标、状态颜色及多尺寸布局。
- 改进游戏数据实时同步，编队发生变化后无需返回母港即可更新。
- 修复建造进度、任务布局及部分界面溢出问题。
- 提升手机、平板、折叠屏及不同横屏尺寸下的显示效果。

请下载下方 APK 安装。首次安装需要允许浏览器安装未知来源应用。
当前版本仍处于学习与测试阶段，建议更新前保留必要数据。软件仅读取游戏接口信息，不执行自动操作。
`,notes:{"zh-CN":{body:`本次更新主要完善了舰队信息展示和数据捕获体验，并修复了多个界面与状态同步问题。

### 更新内容

- 重做舰队详情界面，使舰娘、装备及各项状态的展示更加清晰紧凑。
- 完善舰队、远征、入渠、建造和任务页面。
- 增强「未卜先知」战斗面板，优化战斗信息及联合舰队展示。
- 新增远征检查与资源历史趋势功能。
- 优化舰娘头像、装备图标、状态颜色及多尺寸布局。
- 改进游戏数据实时同步，编队发生变化后无需返回母港即可更新。
- 修复建造进度、任务布局及部分界面溢出问题。
- 提升手机、平板、折叠屏及不同横屏尺寸下的显示效果。

请下载下方 APK 安装。首次安装需要允许浏览器安装未知来源应用。
当前版本仍处于学习与测试阶段，建议更新前保留必要数据。软件仅读取游戏接口信息，不执行自动操作。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.1/README.md`},"zh-TW":{body:`本次更新主要改善了艦隊資訊的顯示方式與遊戲資料擷取體驗，並修正多項介面及狀態同步問題。

### 更新內容

- 重新設計艦隊詳細資訊介面，使艦娘、裝備及各項狀態的顯示更加清晰緊湊。
- 完善艦隊、遠征、入渠、建造及任務頁面。
- 強化「未卜先知」戰鬥面板，改善戰鬥資訊及聯合艦隊的顯示效果。
- 新增遠征檢查及資源歷史趨勢功能。
- 優化艦娘頭像、裝備圖示、狀態顏色及多尺寸介面配置。
- 改善遊戲資料的即時同步，編成發生變化後無須返回母港即可更新。
- 修正建造進度、任務版面及部分介面內容溢出的問題。
- 提升手機、平板、摺疊螢幕及不同橫向螢幕尺寸下的顯示效果。

請下載下方的 APK 檔案進行安裝。首次安裝時，需要允許瀏覽器安裝來源不明的應用程式。

目前版本仍處於學習與測試階段，建議更新前妥善保留必要資料。本軟體僅讀取遊戲介面所提供的資訊，不會執行任何自動操作。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.1/README.zh-Hant.md`},ja:{body:`今回のアップデートでは、艦隊情報の表示およびゲームデータ取得機能を中心に改善し、複数の画面表示や状態同期に関する問題を修正しました。

### 更新内容

- 艦隊詳細画面を刷新し、艦娘、装備、各種ステータスをより見やすくコンパクトに表示できるよう改善しました。
- 艦隊、遠征、入渠、建造、任務の各画面を改善しました。
- 「未卜先知」戦闘パネルを強化し、戦闘情報および連合艦隊の表示を最適化しました。
- 遠征チェック機能および資源履歴の推移表示機能を追加しました。
- 艦娘のアイコン、装備アイコン、状態を示す色、および各種画面サイズに応じたレイアウトを改善しました。
- ゲームデータのリアルタイム同期を改善し、編成変更後に母港へ戻らなくても情報が更新されるようになりました。
- 建造進捗、任務画面のレイアウト、および一部画面で表示内容がはみ出す問題を修正しました。
- スマートフォン、タブレット、折りたたみ端末、および各種横画面サイズでの表示を改善しました。

下記の APK ファイルをダウンロードしてインストールしてください。初回インストール時には、ブラウザから提供元不明のアプリをインストールする権限を許可する必要があります。

現在のバージョンは、引き続き学習およびテスト段階にあります。アップデート前に必要なデータを保存しておくことを推奨します。本アプリはゲームのインターフェースから取得した情報を読み取るのみで、自動操作は行いません。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.1/README.ja.md`},ko:{body:`이번 업데이트에서는 함대 정보 표시와 게임 데이터 수집 경험을 주로 개선하고, 여러 화면 및 상태 동기화 문제를 수정했습니다.

### 업데이트 내용

- 함대 상세 화면을 새롭게 구성하여 칸무스, 장비 및 각종 상태를 더 명확하고 간결하게 표시합니다.
- 함대, 원정, 입거, 건조 및 임무 페이지를 개선했습니다.
- 「전투 예측」 패널을 강화하고 전투 정보와 연합함대 표시를 개선했습니다.
- 원정 점검 및 자원 이력 추이 기능을 추가했습니다.
- 칸무스 초상화, 장비 아이콘, 상태 색상 및 다양한 화면 크기의 레이아웃을 개선했습니다.
- 게임 데이터의 실시간 동기화를 개선하여, 편성이 바뀐 뒤 모항으로 돌아가지 않아도 정보가 갱신됩니다.
- 건조 진행 상황, 임무 레이아웃 및 일부 화면의 내용 넘침 문제를 수정했습니다.
- 휴대전화, 태블릿, 폴더블 기기 및 다양한 가로 화면 크기에서의 표시를 개선했습니다.

아래 APK를 다운로드하여 설치해 주세요. 처음 설치할 때는 브라우저에서 출처를 알 수 없는 앱을 설치할 수 있도록 허용해야 합니다.
현재 버전은 여전히 학습 및 테스트 단계입니다. 업데이트 전에 필요한 데이터를 보관하는 것을 권장합니다. 이 앱은 게임 API 정보를 읽기만 하며 자동 조작을 실행하지 않습니다.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.1/README.ko.md`},en:{body:`This update mainly improves fleet information displays and the data capture experience, and fixes several interface and state synchronization issues.

### What's new

- Redesigned the fleet details screen to present ships, equipment, and their status more clearly and compactly.
- Improved the fleet, expedition, repair dock, construction, and quest pages.
- Enhanced the Battle prediction panel, improving battle information and combined fleet displays.
- Added expedition checks and resource history trends.
- Improved ship portraits, equipment icons, status colors, and layouts for different screen sizes.
- Improved real-time game data synchronization: changes to fleet composition now update without returning to the home port.
- Fixed construction progress, quest layouts, and content overflowing in parts of the interface.
- Improved displays on phones, tablets, foldable devices, and different landscape screen sizes.

Download the APK below to install. On first installation, you must allow your browser to install apps from unknown sources.
This version is still in the learning and testing stage. Keep any necessary data before updating. The app only reads information from the game's API and does not perform automated actions.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.1/README.en.md`}}},{id:363585987,tag:`1.0.0`,name:`ヤハギ v1.0.0`,publishedAt:`2026-08-01T17:42:45Z`,url:`https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.0`,prerelease:!1,body:`简体中文 ｜ [繁體中文](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.0/README.zh-Hant.md) ｜ [日本語](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.0/README.ja.md) ｜ [English](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.0/README.en.md) ｜ [한국어](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/docs/releases/1.0.0/README.ko.md)

## ヤハギ v1.0.0

首个公开发布版本。

### 主要功能

- 支持游戏信息模式与纯浏览模式
- 提供舰队、远征、入渠、建造和任务信息
- 提供战斗辅助与本地战斗日志
- 适配手机、平板和折叠屏
- 支持简体中文、繁体中文和日语

请下载下方 APK 安装。首次安装需要允许浏览器安装未知来源应用。
`,notes:{"zh-CN":{body:`首个公开发布版本。

### 主要功能

- 支持游戏信息模式与纯浏览模式
- 提供舰队、远征、入渠、建造和任务信息
- 提供战斗辅助与本地战斗日志
- 适配手机、平板和折叠屏
- 支持简体中文、繁体中文和日语

请下载下方 APK 安装。首次安装需要允许浏览器安装未知来源应用。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.0/README.md`},"zh-TW":{body:`首個公開發布版本。

### 主要功能

- 支援遊戲資訊模式與純瀏覽模式
- 提供艦隊、遠征、入渠、建造和任務資訊
- 提供戰鬥輔助與本機戰鬥日誌
- 適配手機、平板和摺疊螢幕
- 支援簡體中文、繁體中文和日語

請下載下方 APK 安裝。首次安裝需要允許瀏覽器安裝未知來源應用程式。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.0/README.zh-Hant.md`},ja:{body:`初の一般公開リリースです。

### 主な機能

- ゲーム情報モードとブラウズ専用モードに対応
- 艦隊、遠征、入渠、建造、任務の情報を表示
- 戦闘支援機能とローカル戦闘ログを提供
- スマートフォン、タブレット、折りたたみ端末に対応
- 簡体字中国語、繁体字中国語、日本語に対応

下の APK をダウンロードしてインストールしてください。初回インストール時は、ブラウザーによる提供元不明のアプリのインストールを許可する必要があります。`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.0/README.ja.md`},ko:{body:`첫 공개 릴리스입니다.

### 주요 기능

- 게임 정보 모드와 탐색 전용 모드 지원
- 함대, 원정, 입거, 건조 및 임무 정보 제공
- 전투 보조 기능 및 로컬 전투 로그 제공
- 스마트폰, 태블릿 및 폴더블 기기 화면에 대응
- 중국어 간체, 중국어 번체 및 일본어 지원

아래 APK를 다운로드하여 설치해 주세요. 처음 설치할 때는 브라우저의 출처를 알 수 없는 앱 설치를 허용해야 합니다.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.0/README.ko.md`},en:{body:`The first public release.

### Main features

- Supports game information mode and browse-only mode
- Provides fleet, expedition, repair dock, construction, and quest information
- Provides battle assistance and local battle logs
- Adapts to phones, tablets, and foldable devices
- Supports Simplified Chinese, Traditional Chinese, and Japanese

Download and install the APK below. For the first installation, allow your browser to install apps from unknown sources.`,sourceUrl:`https://github.com/yamatosaki/yahagi-kancolle-browser/blob/245aaccf06233251450f587934eebbed145dbf10/docs/releases/1.0.0/README.en.md`}}}]};function Nn(e,t){for(let n of[...new Set([t,`en`,`zh-CN`])]){let t=e.notes?.[n];if(typeof t?.body==`string`&&t.body.trim())return{...t,locale:n}}return{body:typeof e.body==`string`?e.body:``,locale:`zh-CN`,sourceUrl:e.url}}var Pn={"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`,ko:`한국어`,en:`English`},Fn=new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Tokyo`,year:`numeric`,month:`2-digit`,day:`2-digit`});function Q(e){let t=new Date(e);if(!Number.isFinite(t.getTime()))return``;let n=Object.fromEntries(Fn.formatToParts(t).map(({type:e,value:t})=>[e,t]));return`${n.year}.${n.month}.${n.day}`}function In(e){return/^v/i.test(e)?e:`v${e}`}function $(e,t){try{let n=new URL(e,t);return[`http:`,`https:`].includes(n.protocol)?n.href:null}catch{return null}}function Ln(e,n){let r=Mn.sanitize(z.parse(e,{gfm:!0,async:!1}),{USE_PROFILES:{html:!0},RETURN_DOM_FRAGMENT:!0,FORBID_TAGS:[`style`,`form`,`input`,`button`,`textarea`,`select`,`iframe`,`object`,`embed`],FORBID_ATTR:[`style`,`id`,`name`],ALLOW_DATA_ATTR:!1}),i=[...r.querySelectorAll(`h1, h2, h3, h4, h5, h6`)],a=Math.min(...i.map(e=>Number(e.tagName.slice(1))));i.forEach(e=>{let t=Math.min(6,Number(e.tagName.slice(1))-a+3),n=document.createElement(`h${t}`);n.append(...e.childNodes),e.replaceWith(n)});let o=n||`${Z.repositoryUrl.replace(/\/$/,``)}/blob/master/`;return r.querySelectorAll(`a`).forEach(e=>{let t=e.getAttribute(`href`),n=t?.trim()?$(t,o):null;n?(e.href=n,e.target=`_blank`,e.rel=`noopener noreferrer`):e.replaceWith(...e.childNodes)}),r.querySelectorAll(`table`).forEach(e=>{let n=document.createElement(`div`);n.className=`release-table-scroll`,n.tabIndex=0,n.setAttribute(`role`,`region`),n.setAttribute(`aria-label`,t(`发布说明表格，可左右滚动`)),e.replaceWith(n),n.append(e)}),r}function Rn(){let r=document.querySelector(`#release-body`);if(!r)return;let i=document.querySelector(`#release-list`),a=document.querySelector(`#release-select`),o=document.querySelector(`#release-count`),s=document.querySelector(`#release-sync-date`),c=document.querySelector(`#release-title`),l=document.querySelector(`#release-date`),u=document.querySelector(`#release-badge`),d=document.querySelector(`#release-original`),f=Array.isArray(Z.releases)?Z.releases:[],p=f.find(e=>!e.prerelease),m=new Map,h=null,g=null;if(o.textContent=t(`{count} 个版本`,{count:f.length}),s.textContent=Q(Z.syncedAt),s.textContent&&(s.dateTime=Z.syncedAt),i.replaceChildren(),a.replaceChildren(),!f.length){a.disabled=!0,l.textContent=``,l.removeAttribute(`datetime`),u.hidden=!0,d.hidden=!0,d.removeAttribute(`href`);let i=()=>{o.textContent=t(`{count} 个版本`,{count:0}),c.textContent=t(`暂无发布记录`),r.textContent=t(`发布说明准备中，稍后可在这里查看各版本更新。`),r.lang=n()};i(),e(i);return}function _(){let e=c.getBoundingClientRect(),t=Number.parseFloat(getComputedStyle(c).scrollMarginTop)||0;(e.top<t||e.bottom>window.innerHeight)&&c.scrollIntoView({block:`start`,behavior:`auto`})}function ee(e,i=!1){let o=n();if(h===e.tag&&g===o)return;h=e.tag,g=o,c.textContent=e.name||In(e.tag),l.textContent=Q(e.publishedAt),l.dateTime=e.publishedAt,u.hidden=!1,u.textContent=t(e.prerelease?`预发布`:e.id===p?.id?`最新稳定版`:`正式版`),u.classList.toggle(`is-prerelease`,e.prerelease),u.classList.toggle(`is-latest`,!e.prerelease&&e.id===p?.id);let s=$(e.url,Z.repositoryUrl);d.hidden=!s,s?(d.href=s,d.target=`_blank`,d.rel=`noopener noreferrer`):d.removeAttribute(`href`);let f=Nn(e,o);if(r.lang=f.locale,f.body.trim())try{if(r.replaceChildren(Ln(f.body,f.sourceUrl)),f.locale!==o){let e=document.createElement(`p`);e.className=`release-translation-notice`,e.lang=o,e.setAttribute(`role`,`status`),e.textContent=t(`此版本尚无{language}发布说明，以下显示{fallbackLanguage}原文。`,{language:Pn[o],fallbackLanguage:Pn[f.locale]}),r.prepend(e)}}catch{r.lang=o,r.textContent=t(`此版本发布说明暂时无法显示，请查看 GitHub 原始记录。`)}else r.lang=o,r.textContent=t(`此版本未提供发布说明，可通过 GitHub 原始记录查看版本详情。`);m.forEach((t,n)=>{let r=n===e.tag;t.classList.toggle(`is-active`,r),r?t.setAttribute(`aria-current`,`true`):t.removeAttribute(`aria-current`)}),a.value=e.tag,i&&_()}function te(e){let t=`#${encodeURIComponent(e.tag)}`;window.location.hash!==t&&window.history.pushState(window.history.state,``,t),ee(e,!0)}f.forEach(e=>{let n=document.createElement(`a`);n.className=`release-version`,n.href=`#${encodeURIComponent(e.tag)}`;let r=document.createElement(`span`);r.textContent=In(e.tag);let o=document.createElement(`time`);o.dateTime=e.publishedAt,o.textContent=Q(e.publishedAt),n.append(r,o),n.addEventListener(`click`,t=>{t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||(t.preventDefault(),te(e))}),m.set(e.tag,n),i.append(n);let s=document.createElement(`option`);s.value=e.tag,s.textContent=`${In(e.tag)} · ${Q(e.publishedAt)}${e.prerelease?` · ${t(`预发布`)}`:``}`,a.append(s)}),a.addEventListener(`change`,()=>{let e=f.find(e=>e.tag===a.value);e&&te(e)});function v(e){let t;try{t=decodeURIComponent(window.location.hash.slice(1))}catch{t=null}let n=f.find(e=>e.tag===t);!n&&window.location.hash&&window.history.replaceState(window.history.state,``,`#${encodeURIComponent(f[0].tag)}`),ee(n||f[0],e)}window.addEventListener(`hashchange`,()=>v(!0)),window.addEventListener(`popstate`,()=>v(!0)),e(()=>{o.textContent=t(`{count} 个版本`,{count:f.length}),[...a.options].forEach(e=>{let n=f.find(t=>t.tag===e.value);e.textContent=`${In(n.tag)} · ${Q(n.publishedAt)}${n.prerelease?` · ${t(`预发布`)}`:``}`}),ee(f.find(e=>e.tag===h)||f[0])}),v(!1)}export{Rn as initReleaseNotes};