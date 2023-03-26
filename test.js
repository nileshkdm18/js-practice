const replaceNewLineChars = ((someString, replacementString = ``) => {
  const LF = `\u{000a}`; // Line Feed (\n)
  const VT = `\u{000b}`; // Vertical Tab
  const FF = `\u{000c}`; // Form Feed
  const CR = `\u{000d}`; // Carriage Return (\r)
  const CRLF = `${CR}${LF}`; // (\r\n)
  const NEL = `\u{0085}`; // Next Line
  const LS = `\u{2028}`; // Line Separator
  const PS = `\u{2029}`; // Paragraph Separator
  // all Unicode `lineTerminators`
  const lineTerminators = [LF, VT, FF, CR, CRLF, NEL, LS, PS];
  // better safe than sorry? Or is it?
  let finalString = someString.normalize(`NFD`);
  for (let lineTerminator of lineTerminators) {
    // check if the string contains the current `lineTerminator`
    if (finalString.includes(lineTerminator)) {
      // create the `regex` for the current `lineTerminator`
      let regex = new RegExp(lineTerminator.normalize(`NFD`), `gu`);
      // perform the replacement
      finalString = finalString.replace(regex, replacementString);
    };
  };
  // return the `finalString` (without any Unicode `lineTerminators`)
  return finalString.normalize(`NFC`).trim();
});

let str = `mbs_loannum 
`;
console.log(replaceNewLineChars(str))
