import {expectType} from 'tsd';
import ansiEscapes = require('.');

expectType<string>(ansiEscapes.cursorTo(0));
expectType<string>(ansiEscapes.cursorTo(0, 1));
expectType<string>(ansiEscapes.cursorMove(0));
expectType<string>(ansiEscapes.cursorMove(0, 1));
expectType<string>(ansiEscapes.cursorUp());
expectType<string>(ansiEscapes.cursorUp(1));
expectType<string>(ansiEscapes.cursorDown());
expectType<string>(ansiEscapes.cursorDown(1));
expectType<string>(ansiEscapes.cursorForward());
expectType<string>(ansiEscapes.cursorForward(1));
expectType<string>(ansiEscapes.cursorBackward());
expectType<string>(ansiEscapes.cursorBackward(1));
expectType<string>(ansiEscapes.cursorLeft);
expectType<string>(ansiEscapes.cursorSavePosition);
expectType<string>(ansiEscapes.cursorRestorePosition);
expectType<string>(ansiEscapes.cursorGetPosition);
expectType<string>(ansiEscapes.cursorNextLine);
expectType<string>(ansiEscapes.cursorPrevLine);
expectType<string>(ansiEscapes.cursorHide);
expectType<string>(ansiEscapes.cursorShow);
expectType<string>(ansiEscapes.eraseLines(2));
expectType<string>(ansiEscapes.eraseEndLine);
expectType<string>(ansiEscapes.eraseStartLine);
expectType<string>(ansiEscapes.eraseLine);
expectType<string>(ansiEscapes.eraseDown);
expectType<string>(ansiEscapes.eraseUp);
expectType<string>(ansiEscapes.eraseScreen);
expectType<string>(ansiEscapes.scrollUp);
expectType<string>(ansiEscapes.scrollDown);
expectType<string>(ansiEscapes.clearScreen);
expectType<string>(ansiEscapes.clearTerminal);
expectType<string>(ansiEscapes.beep);
expectType<string>(ansiEscapes.link('foo', 'https://foo.bar'));
expectType<string>(ansiEscapes.image(Buffer.from('1')));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {width: 1}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {width: '1px'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {width: 'auto'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: 1}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: '1px'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: 'auto'}));
expectType<string>(
	ansiEscapes.image(Buffer.from('1'), {preserveAspectRatio: false})
);
expectType<string>(ansiEscapes.iTerm.setCwd('/foo/bar'));
expectType<string>(ansiEscapes.iTerm.annotation('foo bar'));
