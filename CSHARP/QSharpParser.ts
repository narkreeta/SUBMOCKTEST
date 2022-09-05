// Generated from ./CSHARP/QSharpParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { QSharpParserListener } from "./QSharpParserListener";
import { QSharpParserVisitor } from "./QSharpParserVisitor";


export class QSharpParser extends Parser {
	public static readonly Adj = 1;
	public static readonly AdjointFunctor = 2;
	public static readonly AdjointGenerator = 3;
	public static readonly And = 4;
	public static readonly Apply = 5;
	public static readonly As = 6;
	public static readonly Auto = 7;
	public static readonly BigInt = 8;
	public static readonly Body = 9;
	public static readonly Bool = 10;
	public static readonly Borrow = 11;
	public static readonly Borrowing = 12;
	public static readonly ControlledFunctor = 13;
	public static readonly ControlledGenerator = 14;
	public static readonly Ctl = 15;
	public static readonly Distribute = 16;
	public static readonly Double = 17;
	public static readonly Elif = 18;
	public static readonly Else = 19;
	public static readonly Fail = 20;
	public static readonly False = 21;
	public static readonly Fixup = 22;
	public static readonly For = 23;
	public static readonly Function = 24;
	public static readonly If = 25;
	public static readonly In = 26;
	public static readonly Int = 27;
	public static readonly Internal = 28;
	public static readonly Intrinsic = 29;
	public static readonly Invert = 30;
	public static readonly Is = 31;
	public static readonly Let = 32;
	public static readonly Mutable = 33;
	public static readonly Namespace = 34;
	public static readonly New = 35;
	public static readonly Newtype = 36;
	public static readonly Not = 37;
	public static readonly One = 38;
	public static readonly Open = 39;
	public static readonly Operation = 40;
	public static readonly Or = 41;
	public static readonly Pauli = 42;
	public static readonly PauliI = 43;
	public static readonly PauliX = 44;
	public static readonly PauliY = 45;
	public static readonly PauliZ = 46;
	public static readonly Qubit = 47;
	public static readonly Range = 48;
	public static readonly Repeat = 49;
	public static readonly Result = 50;
	public static readonly Return = 51;
	public static readonly Self = 52;
	public static readonly Set = 53;
	public static readonly String = 54;
	public static readonly True = 55;
	public static readonly Unit = 56;
	public static readonly Until = 57;
	public static readonly Use = 58;
	public static readonly Using = 59;
	public static readonly While = 60;
	public static readonly Within = 61;
	public static readonly Zero = 62;
	public static readonly AndEqual = 63;
	public static readonly ArrowLeft = 64;
	public static readonly ArrowRight = 65;
	public static readonly Asterisk = 66;
	public static readonly AsteriskEqual = 67;
	public static readonly At = 68;
	public static readonly Bang = 69;
	public static readonly BraceLeft = 70;
	public static readonly BraceRight = 71;
	public static readonly BracketLeft = 72;
	public static readonly BracketRight = 73;
	public static readonly Caret = 74;
	public static readonly CaretEqual = 75;
	public static readonly Colon = 76;
	public static readonly Comma = 77;
	public static readonly DollarQuote = 78;
	public static readonly Dot = 79;
	public static readonly DoubleAmpersand = 80;
	public static readonly DoubleColon = 81;
	public static readonly DoubleDot = 82;
	public static readonly DoubleEqual = 83;
	public static readonly DoublePipe = 84;
	public static readonly DoubleQuote = 85;
	public static readonly Ellipsis = 86;
	public static readonly Equal = 87;
	public static readonly FatArrowRight = 88;
	public static readonly Greater = 89;
	public static readonly GreaterEqual = 90;
	public static readonly Less = 91;
	public static readonly LessEqual = 92;
	public static readonly Minus = 93;
	public static readonly MinusEqual = 94;
	public static readonly NotEqual = 95;
	public static readonly OrEqual = 96;
	public static readonly ParenLeft = 97;
	public static readonly ParenRight = 98;
	public static readonly Percent = 99;
	public static readonly PercentEqual = 100;
	public static readonly Pipe = 101;
	public static readonly Plus = 102;
	public static readonly PlusEqual = 103;
	public static readonly Question = 104;
	public static readonly Semicolon = 105;
	public static readonly Slash = 106;
	public static readonly SlashEqual = 107;
	public static readonly TripleAmpersand = 108;
	public static readonly TripleAmpersandEqual = 109;
	public static readonly TripleCaret = 110;
	public static readonly TripleCaretEqual = 111;
	public static readonly TripleGreater = 112;
	public static readonly TripleGreaterEqual = 113;
	public static readonly TripleLess = 114;
	public static readonly TripleLessEqual = 115;
	public static readonly TriplePipe = 116;
	public static readonly TriplePipeEqual = 117;
	public static readonly TripleTilde = 118;
	public static readonly Underscore = 119;
	public static readonly With = 120;
	public static readonly WithEqual = 121;
	public static readonly IntegerLiteral = 122;
	public static readonly BigIntegerLiteral = 123;
	public static readonly DoubleLiteral = 124;
	public static readonly Identifier = 125;
	public static readonly IdentifierStart = 126;
	public static readonly IdentifierContinuation = 127;
	public static readonly TypeParameter = 128;
	public static readonly Whitespace = 129;
	public static readonly Comment = 130;
	public static readonly Invalid = 131;
	public static readonly StringEscape = 132;
	public static readonly StringText = 133;
	public static readonly StringDoubleQuote = 134;
	public static readonly InterpStringEscape = 135;
	public static readonly InterpBraceLeft = 136;
	public static readonly InterpStringText = 137;
	public static readonly InterpDoubleQuote = 138;
	public static readonly RULE_document = 0;
	public static readonly RULE_namespace = 1;
	public static readonly RULE_qualifiedName = 2;
	public static readonly RULE_namespaceElement = 3;
	public static readonly RULE_openDirective = 4;
	public static readonly RULE_attribute = 5;
	public static readonly RULE_access = 6;
	public static readonly RULE_declarationPrefix = 7;
	public static readonly RULE_typeDeclaration = 8;
	public static readonly RULE_underlyingType = 9;
	public static readonly RULE_typeDeclarationTuple = 10;
	public static readonly RULE_typeTupleItem = 11;
	public static readonly RULE_namedItem = 12;
	public static readonly RULE_callableDeclaration = 13;
	public static readonly RULE_typeParameterBinding = 14;
	public static readonly RULE_parameterTuple = 15;
	public static readonly RULE_parameter = 16;
	public static readonly RULE_characteristics = 17;
	public static readonly RULE_characteristicsExpression = 18;
	public static readonly RULE_callableBody = 19;
	public static readonly RULE_specialization = 20;
	public static readonly RULE_specializationName = 21;
	public static readonly RULE_specializationGenerator = 22;
	public static readonly RULE_providedSpecialization = 23;
	public static readonly RULE_specializationParameterTuple = 24;
	public static readonly RULE_specializationParameter = 25;
	public static readonly RULE_type = 26;
	public static readonly RULE_statement = 27;
	public static readonly RULE_scope = 28;
	public static readonly RULE_symbolBinding = 29;
	public static readonly RULE_updateOperator = 30;
	public static readonly RULE_forBinding = 31;
	public static readonly RULE_qubitBinding = 32;
	public static readonly RULE_qubitInitializer = 33;
	public static readonly RULE_expression = 34;
	public static readonly RULE_size = 35;
	public static readonly RULE_typeTuple = 36;
	public static readonly RULE_boolLiteral = 37;
	public static readonly RULE_resultLiteral = 38;
	public static readonly RULE_pauliLiteral = 39;
	public static readonly RULE_stringContent = 40;
	public static readonly RULE_interpStringContent = 41;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "namespace", "qualifiedName", "namespaceElement", "openDirective", 
		"attribute", "access", "declarationPrefix", "typeDeclaration", "underlyingType", 
		"typeDeclarationTuple", "typeTupleItem", "namedItem", "callableDeclaration", 
		"typeParameterBinding", "parameterTuple", "parameter", "characteristics", 
		"characteristicsExpression", "callableBody", "specialization", "specializationName", 
		"specializationGenerator", "providedSpecialization", "specializationParameterTuple", 
		"specializationParameter", "type", "statement", "scope", "symbolBinding", 
		"updateOperator", "forBinding", "qubitBinding", "qubitInitializer", "expression", 
		"size", "typeTuple", "boolLiteral", "resultLiteral", "pauliLiteral", "stringContent", 
		"interpStringContent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Adj'", "'Adjoint'", "'adjoint'", "'and'", "'apply'", "'as'", 
		"'auto'", "'BigInt'", "'body'", "'Bool'", "'borrow'", "'borrowing'", "'Controlled'", 
		"'controlled'", "'Ctl'", "'distribute'", "'Double'", "'elif'", "'else'", 
		"'fail'", "'false'", "'fixup'", "'for'", "'function'", "'if'", "'in'", 
		"'Int'", "'internal'", "'intrinsic'", "'invert'", "'is'", "'let'", "'mutable'", 
		"'namespace'", "'new'", "'newtype'", "'not'", "'One'", "'open'", "'operation'", 
		"'or'", "'Pauli'", "'PauliI'", "'PauliX'", "'PauliY'", "'PauliZ'", "'Qubit'", 
		"'Range'", "'repeat'", "'Result'", "'return'", "'self'", "'set'", "'String'", 
		"'true'", "'Unit'", "'until'", "'use'", "'using'", "'while'", "'within'", 
		"'Zero'", "'and='", "'<-'", "'->'", "'*'", "'*='", "'@'", "'!'", undefined, 
		"'}'", "'['", "']'", "'^'", "'^='", "':'", "','", "'$\"'", "'.'", "'&&'", 
		"'::'", "'..'", "'=='", "'||'", undefined, "'...'", "'='", "'=>'", "'>'", 
		"'>='", "'<'", "'<='", "'-'", "'-='", "'!='", "'or='", "'('", "')'", "'%'", 
		"'%='", "'|'", "'+'", "'+='", "'?'", "';'", "'/'", "'/='", "'&&&'", "'&&&='", 
		"'^^^'", "'^^^='", "'>>>'", "'>>>='", "'<<<'", "'<<<='", "'|||'", "'|||='", 
		"'~~~'", "'_'", "'w/'", "'w/='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Adj", "AdjointFunctor", "AdjointGenerator", "And", "Apply", 
		"As", "Auto", "BigInt", "Body", "Bool", "Borrow", "Borrowing", "ControlledFunctor", 
		"ControlledGenerator", "Ctl", "Distribute", "Double", "Elif", "Else", 
		"Fail", "False", "Fixup", "For", "Function", "If", "In", "Int", "Internal", 
		"Intrinsic", "Invert", "Is", "Let", "Mutable", "Namespace", "New", "Newtype", 
		"Not", "One", "Open", "Operation", "Or", "Pauli", "PauliI", "PauliX", 
		"PauliY", "PauliZ", "Qubit", "Range", "Repeat", "Result", "Return", "Self", 
		"Set", "String", "True", "Unit", "Until", "Use", "Using", "While", "Within", 
		"Zero", "AndEqual", "ArrowLeft", "ArrowRight", "Asterisk", "AsteriskEqual", 
		"At", "Bang", "BraceLeft", "BraceRight", "BracketLeft", "BracketRight", 
		"Caret", "CaretEqual", "Colon", "Comma", "DollarQuote", "Dot", "DoubleAmpersand", 
		"DoubleColon", "DoubleDot", "DoubleEqual", "DoublePipe", "DoubleQuote", 
		"Ellipsis", "Equal", "FatArrowRight", "Greater", "GreaterEqual", "Less", 
		"LessEqual", "Minus", "MinusEqual", "NotEqual", "OrEqual", "ParenLeft", 
		"ParenRight", "Percent", "PercentEqual", "Pipe", "Plus", "PlusEqual", 
		"Question", "Semicolon", "Slash", "SlashEqual", "TripleAmpersand", "TripleAmpersandEqual", 
		"TripleCaret", "TripleCaretEqual", "TripleGreater", "TripleGreaterEqual", 
		"TripleLess", "TripleLessEqual", "TriplePipe", "TriplePipeEqual", "TripleTilde", 
		"Underscore", "With", "WithEqual", "IntegerLiteral", "BigIntegerLiteral", 
		"DoubleLiteral", "Identifier", "IdentifierStart", "IdentifierContinuation", 
		"TypeParameter", "Whitespace", "Comment", "Invalid", "StringEscape", "StringText", 
		"StringDoubleQuote", "InterpStringEscape", "InterpBraceLeft", "InterpStringText", 
		"InterpDoubleQuote",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QSharpParser._LITERAL_NAMES, QSharpParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return QSharpParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "QSharpParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return QSharpParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return QSharpParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(QSharpParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, QSharpParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === QSharpParser.Namespace) {
				{
				{
				this.state = 84;
				this.namespace();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
			this.match(QSharpParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, QSharpParser.RULE_namespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(QSharpParser.Namespace);
			this.state = 93;
			this.qualifiedName();
			this.state = 94;
			this.match(QSharpParser.BraceLeft);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (QSharpParser.Function - 24)) | (1 << (QSharpParser.Internal - 24)) | (1 << (QSharpParser.Newtype - 24)) | (1 << (QSharpParser.Open - 24)) | (1 << (QSharpParser.Operation - 24)))) !== 0) || _la === QSharpParser.At) {
				{
				{
				this.state = 95;
				this.namespaceElement();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(QSharpParser.BraceRight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, QSharpParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(QSharpParser.Identifier);
			this.state = 108;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 104;
					this.match(QSharpParser.Dot);
					this.state = 105;
					this.match(QSharpParser.Identifier);
					}
					}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceElement(): NamespaceElementContext {
		let _localctx: NamespaceElementContext = new NamespaceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, QSharpParser.RULE_namespaceElement);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new OpenElementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.openDirective();
				}
				break;

			case 2:
				_localctx = new TypeElementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 112;
				this.typeDeclaration();
				}
				break;

			case 3:
				_localctx = new CallableElementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 113;
				this.callableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public openDirective(): OpenDirectiveContext {
		let _localctx: OpenDirectiveContext = new OpenDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, QSharpParser.RULE_openDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(QSharpParser.Open);
			this.state = 117;
			_localctx._name = this.qualifiedName();
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.As) {
				{
				this.state = 118;
				this.match(QSharpParser.As);
				this.state = 119;
				_localctx._alias = this.qualifiedName();
				}
			}

			this.state = 122;
			this.match(QSharpParser.Semicolon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, QSharpParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(QSharpParser.At);
			this.state = 125;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public access(): AccessContext {
		let _localctx: AccessContext = new AccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, QSharpParser.RULE_access);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(QSharpParser.Internal);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationPrefix(): DeclarationPrefixContext {
		let _localctx: DeclarationPrefixContext = new DeclarationPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, QSharpParser.RULE_declarationPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === QSharpParser.At) {
				{
				{
				this.state = 129;
				this.attribute();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.Internal) {
				{
				this.state = 135;
				this.access();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, QSharpParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.declarationPrefix();
			this.state = 139;
			this.match(QSharpParser.Newtype);
			this.state = 140;
			this.match(QSharpParser.Identifier);
			this.state = 141;
			this.match(QSharpParser.Equal);
			this.state = 142;
			this.underlyingType();
			this.state = 143;
			this.match(QSharpParser.Semicolon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public underlyingType(): UnderlyingTypeContext {
		let _localctx: UnderlyingTypeContext = new UnderlyingTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, QSharpParser.RULE_underlyingType);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new TupleUnderlyingTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this.typeDeclarationTuple();
				}
				break;

			case 2:
				_localctx = new UnnamedTypeItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 146;
				this.type(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclarationTuple(): TypeDeclarationTupleContext {
		let _localctx: TypeDeclarationTupleContext = new TypeDeclarationTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, QSharpParser.RULE_typeDeclarationTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(QSharpParser.ParenLeft);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.BigInt) | (1 << QSharpParser.Bool) | (1 << QSharpParser.Double) | (1 << QSharpParser.Int))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (QSharpParser.Pauli - 42)) | (1 << (QSharpParser.Qubit - 42)) | (1 << (QSharpParser.Range - 42)) | (1 << (QSharpParser.Result - 42)) | (1 << (QSharpParser.String - 42)) | (1 << (QSharpParser.Unit - 42)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (QSharpParser.ParenLeft - 97)) | (1 << (QSharpParser.Underscore - 97)) | (1 << (QSharpParser.Identifier - 97)) | (1 << (QSharpParser.TypeParameter - 97)))) !== 0)) {
				{
				this.state = 150;
				this.typeTupleItem();
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === QSharpParser.Comma) {
					{
					{
					this.state = 151;
					this.match(QSharpParser.Comma);
					this.state = 152;
					this.typeTupleItem();
					}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 160;
			this.match(QSharpParser.ParenRight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTupleItem(): TypeTupleItemContext {
		let _localctx: TypeTupleItemContext = new TypeTupleItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, QSharpParser.RULE_typeTupleItem);
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new NamedTypeItemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.namedItem();
				}
				break;

			case 2:
				_localctx = new UnderlyingTypeItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.underlyingType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedItem(): NamedItemContext {
		let _localctx: NamedItemContext = new NamedItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, QSharpParser.RULE_namedItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(QSharpParser.Identifier);
			this.state = 167;
			this.match(QSharpParser.Colon);
			this.state = 168;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callableDeclaration(): CallableDeclarationContext {
		let _localctx: CallableDeclarationContext = new CallableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, QSharpParser.RULE_callableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.declarationPrefix();
			this.state = 171;
			_localctx._keyword = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === QSharpParser.Function || _la === QSharpParser.Operation)) {
				_localctx._keyword = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 172;
			this.match(QSharpParser.Identifier);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.Less) {
				{
				this.state = 173;
				this.typeParameterBinding();
				}
			}

			this.state = 176;
			this.parameterTuple();
			this.state = 177;
			this.match(QSharpParser.Colon);
			this.state = 178;
			_localctx._returnType = this.type(0);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.Is) {
				{
				this.state = 179;
				this.characteristics();
				}
			}

			this.state = 182;
			this.callableBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterBinding(): TypeParameterBindingContext {
		let _localctx: TypeParameterBindingContext = new TypeParameterBindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, QSharpParser.RULE_typeParameterBinding);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(QSharpParser.Less);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.TypeParameter) {
				{
				this.state = 185;
				this.match(QSharpParser.TypeParameter);
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === QSharpParser.Comma) {
					{
					{
					this.state = 186;
					this.match(QSharpParser.Comma);
					this.state = 187;
					this.match(QSharpParser.TypeParameter);
					}
					}
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 195;
			this.match(QSharpParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTuple(): ParameterTupleContext {
		let _localctx: ParameterTupleContext = new ParameterTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, QSharpParser.RULE_parameterTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(QSharpParser.ParenLeft);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.ParenLeft || _la === QSharpParser.Identifier) {
				{
				this.state = 198;
				this.parameter();
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === QSharpParser.Comma) {
					{
					{
					this.state = 199;
					this.match(QSharpParser.Comma);
					this.state = 200;
					this.parameter();
					}
					}
					this.state = 205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 208;
			this.match(QSharpParser.ParenRight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, QSharpParser.RULE_parameter);
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QSharpParser.Identifier:
				_localctx = new NamedParameterContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.namedItem();
				}
				break;
			case QSharpParser.ParenLeft:
				_localctx = new TupledParameterContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.parameterTuple();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characteristics(): CharacteristicsContext {
		let _localctx: CharacteristicsContext = new CharacteristicsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, QSharpParser.RULE_characteristics);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(QSharpParser.Is);
			this.state = 215;
			this.characteristicsExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public characteristicsExpression(): CharacteristicsExpressionContext;
	public characteristicsExpression(_p: number): CharacteristicsExpressionContext;
	// @RuleVersion(0)
	public characteristicsExpression(_p?: number): CharacteristicsExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CharacteristicsExpressionContext = new CharacteristicsExpressionContext(this._ctx, _parentState);
		let _prevctx: CharacteristicsExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, QSharpParser.RULE_characteristicsExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QSharpParser.Adj:
				{
				_localctx = new AdjointCharacteristicsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 218;
				this.match(QSharpParser.Adj);
				}
				break;
			case QSharpParser.Ctl:
				{
				_localctx = new ControlledCharacteristicsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 219;
				this.match(QSharpParser.Ctl);
				}
				break;
			case QSharpParser.ParenLeft:
				{
				_localctx = new CharacteristicGroupContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.match(QSharpParser.ParenLeft);
				this.state = 221;
				this.characteristicsExpression(0);
				this.state = 222;
				this.match(QSharpParser.ParenRight);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 232;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectCharacteristicsContext(new CharacteristicsExpressionContext(_parentctx, _parentState));
						(_localctx as IntersectCharacteristicsContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_characteristicsExpression);
						this.state = 226;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 227;
						this.match(QSharpParser.Asterisk);
						this.state = 228;
						(_localctx as IntersectCharacteristicsContext)._right = this.characteristicsExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new UnionCharacteristicsContext(new CharacteristicsExpressionContext(_parentctx, _parentState));
						(_localctx as UnionCharacteristicsContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_characteristicsExpression);
						this.state = 229;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 230;
						this.match(QSharpParser.Plus);
						this.state = 231;
						(_localctx as UnionCharacteristicsContext)._right = this.characteristicsExpression(2);
						}
						break;
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callableBody(): CallableBodyContext {
		let _localctx: CallableBodyContext = new CallableBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, QSharpParser.RULE_callableBody);
		let _la: number;
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new CallableStatementsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.scope();
				}
				break;

			case 2:
				_localctx = new CallableSpecializationsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.match(QSharpParser.BraceLeft);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointGenerator) | (1 << QSharpParser.Body) | (1 << QSharpParser.ControlledGenerator))) !== 0)) {
					{
					{
					this.state = 239;
					this.specialization();
					}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 245;
				this.match(QSharpParser.BraceRight);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialization(): SpecializationContext {
		let _localctx: SpecializationContext = new SpecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, QSharpParser.RULE_specialization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 248;
				this.specializationName();
				}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointGenerator) | (1 << QSharpParser.Body) | (1 << QSharpParser.ControlledGenerator))) !== 0));
			this.state = 253;
			this.specializationGenerator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specializationName(): SpecializationNameContext {
		let _localctx: SpecializationNameContext = new SpecializationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, QSharpParser.RULE_specializationName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointGenerator) | (1 << QSharpParser.Body) | (1 << QSharpParser.ControlledGenerator))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specializationGenerator(): SpecializationGeneratorContext {
		let _localctx: SpecializationGeneratorContext = new SpecializationGeneratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, QSharpParser.RULE_specializationGenerator);
		try {
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QSharpParser.Auto:
				_localctx = new AutoGeneratorContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 257;
				this.match(QSharpParser.Auto);
				this.state = 258;
				this.match(QSharpParser.Semicolon);
				}
				break;
			case QSharpParser.Self:
				_localctx = new SelfGeneratorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.match(QSharpParser.Self);
				this.state = 260;
				this.match(QSharpParser.Semicolon);
				}
				break;
			case QSharpParser.Invert:
				_localctx = new InvertGeneratorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.match(QSharpParser.Invert);
				this.state = 262;
				this.match(QSharpParser.Semicolon);
				}
				break;
			case QSharpParser.Distribute:
				_localctx = new DistributeGeneratorContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 263;
				this.match(QSharpParser.Distribute);
				this.state = 264;
				this.match(QSharpParser.Semicolon);
				}
				break;
			case QSharpParser.Intrinsic:
				_localctx = new IntrinsicGeneratorContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 265;
				this.match(QSharpParser.Intrinsic);
				this.state = 266;
				this.match(QSharpParser.Semicolon);
				}
				break;
			case QSharpParser.BraceLeft:
			case QSharpParser.ParenLeft:
				_localctx = new ProvidedGeneratorContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 267;
				this.providedSpecialization();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public providedSpecialization(): ProvidedSpecializationContext {
		let _localctx: ProvidedSpecializationContext = new ProvidedSpecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, QSharpParser.RULE_providedSpecialization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.ParenLeft) {
				{
				this.state = 270;
				this.specializationParameterTuple();
				}
			}

			this.state = 273;
			this.scope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specializationParameterTuple(): SpecializationParameterTupleContext {
		let _localctx: SpecializationParameterTupleContext = new SpecializationParameterTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, QSharpParser.RULE_specializationParameterTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(QSharpParser.ParenLeft);
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QSharpParser.Ellipsis || _la === QSharpParser.Identifier) {
				{
				this.state = 276;
				this.specializationParameter();
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === QSharpParser.Comma) {
					{
					{
					this.state = 277;
					this.match(QSharpParser.Comma);
					this.state = 278;
					this.specializationParameter();
					}
					}
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 286;
			this.match(QSharpParser.ParenRight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specializationParameter(): SpecializationParameterContext {
		let _localctx: SpecializationParameterContext = new SpecializationParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, QSharpParser.RULE_specializationParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			_la = this._input.LA(1);
			if (!(_la === QSharpParser.Ellipsis || _la === QSharpParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 52;
		this.enterRecursionRule(_localctx, 52, QSharpParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QSharpParser.Underscore:
				{
				_localctx = new MissingTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 291;
				this.match(QSharpParser.Underscore);
				}
				break;
			case QSharpParser.ParenLeft:
				{
				_localctx = new TupleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(QSharpParser.ParenLeft);
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.BigInt) | (1 << QSharpParser.Bool) | (1 << QSharpParser.Double) | (1 << QSharpParser.Int))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (QSharpParser.Pauli - 42)) | (1 << (QSharpParser.Qubit - 42)) | (1 << (QSharpParser.Range - 42)) | (1 << (QSharpParser.Result - 42)) | (1 << (QSharpParser.String - 42)) | (1 << (QSharpParser.Unit - 42)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (QSharpParser.ParenLeft - 97)) | (1 << (QSharpParser.Underscore - 97)) | (1 << (QSharpParser.Identifier - 97)) | (1 << (QSharpParser.TypeParameter - 97)))) !== 0)) {
					{
					this.state = 293;
					this.type(0);
					this.state = 298;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 294;
							this.match(QSharpParser.Comma);
							this.state = 295;
							this.type(0);
							}
							}
						}
						this.state = 300;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					}
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === QSharpParser.Comma) {
						{
						this.state = 301;
						this.match(QSharpParser.Comma);
						}
					}

					}
				}

				this.state = 306;
				this.match(QSharpParser.ParenRight);
				}
				break;
			case QSharpParser.TypeParameter:
				{
				_localctx = new TypeParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 307;
				this.match(QSharpParser.TypeParameter);
				}
				break;
			case QSharpParser.BigInt:
				{
				_localctx = new BigIntTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 308;
				this.match(QSharpParser.BigInt);
				}
				break;
			case QSharpParser.Bool:
				{
				_localctx = new BoolTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 309;
				this.match(QSharpParser.Bool);
				}
				break;
			case QSharpParser.Double:
				{
				_localctx = new DoubleTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 310;
				this.match(QSharpParser.Double);
				}
				break;
			case QSharpParser.Int:
				{
				_localctx = new IntTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 311;
				this.match(QSharpParser.Int);
				}
				break;
			case QSharpParser.Pauli:
				{
				_localctx = new PauliTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 312;
				this.match(QSharpParser.Pauli);
				}
				break;
			case QSharpParser.Qubit:
				{
				_localctx = new QubitTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 313;
				this.match(QSharpParser.Qubit);
				}
				break;
			case QSharpParser.Range:
				{
				_localctx = new RangeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(QSharpParser.Range);
				}
				break;
			case QSharpParser.Result:
				{
				_localctx = new ResultTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 315;
				this.match(QSharpParser.Result);
				}
				break;
			case QSharpParser.String:
				{
				_localctx = new StringTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 316;
				this.match(QSharpParser.String);
				}
				break;
			case QSharpParser.Unit:
				{
				_localctx = new UnitTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 317;
				this.match(QSharpParser.Unit);
				}
				break;
			case QSharpParser.Identifier:
				{
				_localctx = new UserDefinedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 318;
				this.qualifiedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 332;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 330;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_type);
						this.state = 321;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 322;
						this.match(QSharpParser.BracketLeft);
						this.state = 323;
						this.match(QSharpParser.BracketRight);
						}
						break;

					case 2:
						{
						_localctx = new CallableTypeContext(new TypeContext(_parentctx, _parentState));
						(_localctx as CallableTypeContext)._from = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_type);
						this.state = 324;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 325;
						(_localctx as CallableTypeContext)._arrow = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.ArrowRight || _la === QSharpParser.FatArrowRight)) {
							(_localctx as CallableTypeContext)._arrow = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 326;
						(_localctx as CallableTypeContext)._to = this.type(0);
						this.state = 328;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
						case 1:
							{
							this.state = 327;
							this.characteristics();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, QSharpParser.RULE_statement);
		let _la: number;
		try {
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.expression(0);
				this.state = 336;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 2:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 338;
				this.match(QSharpParser.Return);
				this.state = 339;
				this.expression(0);
				this.state = 340;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 3:
				_localctx = new FailStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 342;
				this.match(QSharpParser.Fail);
				this.state = 343;
				this.expression(0);
				this.state = 344;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 4:
				_localctx = new LetStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 346;
				this.match(QSharpParser.Let);
				this.state = 347;
				this.symbolBinding();
				this.state = 348;
				this.match(QSharpParser.Equal);
				this.state = 349;
				this.expression(0);
				this.state = 350;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 5:
				_localctx = new MutableStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 352;
				this.match(QSharpParser.Mutable);
				this.state = 353;
				this.symbolBinding();
				this.state = 354;
				this.match(QSharpParser.Equal);
				this.state = 355;
				this.expression(0);
				this.state = 356;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 6:
				_localctx = new SetStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 358;
				this.match(QSharpParser.Set);
				this.state = 359;
				this.symbolBinding();
				this.state = 360;
				this.match(QSharpParser.Equal);
				this.state = 361;
				this.expression(0);
				this.state = 362;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 7:
				_localctx = new UpdateStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 364;
				this.match(QSharpParser.Set);
				this.state = 365;
				this.match(QSharpParser.Identifier);
				this.state = 366;
				this.updateOperator();
				this.state = 367;
				this.expression(0);
				this.state = 368;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 8:
				_localctx = new UpdateWithStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 370;
				this.match(QSharpParser.Set);
				this.state = 371;
				this.match(QSharpParser.Identifier);
				this.state = 372;
				this.match(QSharpParser.WithEqual);
				this.state = 373;
				(_localctx as UpdateWithStatementContext)._index = this.expression(0);
				this.state = 374;
				this.match(QSharpParser.ArrowLeft);
				this.state = 375;
				(_localctx as UpdateWithStatementContext)._value = this.expression(0);
				this.state = 376;
				this.match(QSharpParser.Semicolon);
				}
				break;

			case 9:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 378;
				this.match(QSharpParser.If);
				this.state = 379;
				this.expression(0);
				this.state = 380;
				this.scope();
				}
				break;

			case 10:
				_localctx = new ElifStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 382;
				this.match(QSharpParser.Elif);
				this.state = 383;
				this.expression(0);
				this.state = 384;
				this.scope();
				}
				break;

			case 11:
				_localctx = new ElseStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 386;
				this.match(QSharpParser.Else);
				this.state = 387;
				this.scope();
				}
				break;

			case 12:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 388;
				this.match(QSharpParser.For);
				this.state = 394;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 389;
					this.forBinding();
					}
					break;

				case 2:
					{
					this.state = 390;
					this.match(QSharpParser.ParenLeft);
					this.state = 391;
					this.forBinding();
					this.state = 392;
					this.match(QSharpParser.ParenRight);
					}
					break;
				}
				this.state = 396;
				this.scope();
				}
				break;

			case 13:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 398;
				this.match(QSharpParser.While);
				this.state = 399;
				this.expression(0);
				this.state = 400;
				this.scope();
				}
				break;

			case 14:
				_localctx = new RepeatStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 402;
				this.match(QSharpParser.Repeat);
				this.state = 403;
				this.scope();
				}
				break;

			case 15:
				_localctx = new UntilStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 404;
				this.match(QSharpParser.Until);
				this.state = 405;
				this.expression(0);
				this.state = 409;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case QSharpParser.Semicolon:
					{
					this.state = 406;
					this.match(QSharpParser.Semicolon);
					}
					break;
				case QSharpParser.Fixup:
					{
					this.state = 407;
					this.match(QSharpParser.Fixup);
					this.state = 408;
					this.scope();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 16:
				_localctx = new WithinStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 411;
				this.match(QSharpParser.Within);
				this.state = 412;
				this.scope();
				}
				break;

			case 17:
				_localctx = new ApplyStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 413;
				this.match(QSharpParser.Apply);
				this.state = 414;
				this.scope();
				}
				break;

			case 18:
				_localctx = new QubitDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 415;
				(_localctx as QubitDeclarationContext)._keyword = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === QSharpParser.Borrow || _la === QSharpParser.Borrowing || _la === QSharpParser.Use || _la === QSharpParser.Using)) {
					(_localctx as QubitDeclarationContext)._keyword = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 416;
					this.qubitBinding();
					}
					break;

				case 2:
					{
					this.state = 417;
					this.match(QSharpParser.ParenLeft);
					this.state = 418;
					this.qubitBinding();
					this.state = 419;
					this.match(QSharpParser.ParenRight);
					}
					break;
				}
				this.state = 425;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case QSharpParser.BraceLeft:
					{
					this.state = 423;
					this.scope();
					}
					break;
				case QSharpParser.Semicolon:
					{
					this.state = 424;
					this.match(QSharpParser.Semicolon);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, QSharpParser.RULE_scope);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(QSharpParser.BraceLeft);
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointFunctor) | (1 << QSharpParser.Apply) | (1 << QSharpParser.Borrow) | (1 << QSharpParser.Borrowing) | (1 << QSharpParser.ControlledFunctor) | (1 << QSharpParser.Elif) | (1 << QSharpParser.Else) | (1 << QSharpParser.Fail) | (1 << QSharpParser.False) | (1 << QSharpParser.For) | (1 << QSharpParser.If))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (QSharpParser.Let - 32)) | (1 << (QSharpParser.Mutable - 32)) | (1 << (QSharpParser.New - 32)) | (1 << (QSharpParser.Not - 32)) | (1 << (QSharpParser.One - 32)) | (1 << (QSharpParser.PauliI - 32)) | (1 << (QSharpParser.PauliX - 32)) | (1 << (QSharpParser.PauliY - 32)) | (1 << (QSharpParser.PauliZ - 32)) | (1 << (QSharpParser.Repeat - 32)) | (1 << (QSharpParser.Return - 32)) | (1 << (QSharpParser.Set - 32)) | (1 << (QSharpParser.True - 32)) | (1 << (QSharpParser.Until - 32)) | (1 << (QSharpParser.Use - 32)) | (1 << (QSharpParser.Using - 32)) | (1 << (QSharpParser.While - 32)) | (1 << (QSharpParser.Within - 32)) | (1 << (QSharpParser.Zero - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (QSharpParser.Bang - 69)) | (1 << (QSharpParser.BracketLeft - 69)) | (1 << (QSharpParser.DollarQuote - 69)) | (1 << (QSharpParser.DoubleQuote - 69)) | (1 << (QSharpParser.Ellipsis - 69)) | (1 << (QSharpParser.Minus - 69)) | (1 << (QSharpParser.ParenLeft - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (QSharpParser.Plus - 102)) | (1 << (QSharpParser.TripleTilde - 102)) | (1 << (QSharpParser.Underscore - 102)) | (1 << (QSharpParser.IntegerLiteral - 102)) | (1 << (QSharpParser.BigIntegerLiteral - 102)) | (1 << (QSharpParser.DoubleLiteral - 102)) | (1 << (QSharpParser.Identifier - 102)))) !== 0)) {
				{
				{
				this.state = 430;
				this.statement();
				}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 436;
			this.match(QSharpParser.BraceRight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolBinding(): SymbolBindingContext {
		let _localctx: SymbolBindingContext = new SymbolBindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, QSharpParser.RULE_symbolBinding);
		let _la: number;
		try {
			let _alt: number;
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QSharpParser.Underscore:
				_localctx = new DiscardSymbolContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 438;
				this.match(QSharpParser.Underscore);
				}
				break;
			case QSharpParser.Identifier:
				_localctx = new SymbolNameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				this.match(QSharpParser.Identifier);
				}
				break;
			case QSharpParser.ParenLeft:
				_localctx = new SymbolTupleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 440;
				this.match(QSharpParser.ParenLeft);
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (QSharpParser.ParenLeft - 97)) | (1 << (QSharpParser.Underscore - 97)) | (1 << (QSharpParser.Identifier - 97)))) !== 0)) {
					{
					this.state = 441;
					this.symbolBinding();
					this.state = 446;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 442;
							this.match(QSharpParser.Comma);
							this.state = 443;
							this.symbolBinding();
							}
							}
						}
						this.state = 448;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					}
					this.state = 450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === QSharpParser.Comma) {
						{
						this.state = 449;
						this.match(QSharpParser.Comma);
						}
					}

					}
				}

				this.state = 454;
				this.match(QSharpParser.ParenRight);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateOperator(): UpdateOperatorContext {
		let _localctx: UpdateOperatorContext = new UpdateOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, QSharpParser.RULE_updateOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (QSharpParser.AndEqual - 63)) | (1 << (QSharpParser.AsteriskEqual - 63)) | (1 << (QSharpParser.CaretEqual - 63)) | (1 << (QSharpParser.MinusEqual - 63)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (QSharpParser.OrEqual - 96)) | (1 << (QSharpParser.PercentEqual - 96)) | (1 << (QSharpParser.PlusEqual - 96)) | (1 << (QSharpParser.SlashEqual - 96)) | (1 << (QSharpParser.TripleAmpersandEqual - 96)) | (1 << (QSharpParser.TripleCaretEqual - 96)) | (1 << (QSharpParser.TripleGreaterEqual - 96)) | (1 << (QSharpParser.TripleLessEqual - 96)) | (1 << (QSharpParser.TriplePipeEqual - 96)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forBinding(): ForBindingContext {
		let _localctx: ForBindingContext = new ForBindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, QSharpParser.RULE_forBinding);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.symbolBinding();
			this.state = 460;
			this.match(QSharpParser.In);
			this.state = 461;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qubitBinding(): QubitBindingContext {
		let _localctx: QubitBindingContext = new QubitBindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, QSharpParser.RULE_qubitBinding);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.symbolBinding();
			this.state = 464;
			this.match(QSharpParser.Equal);
			this.state = 465;
			this.qubitInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qubitInitializer(): QubitInitializerContext {
		let _localctx: QubitInitializerContext = new QubitInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, QSharpParser.RULE_qubitInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				_localctx = new SingleQubitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this.match(QSharpParser.Qubit);
				this.state = 468;
				this.match(QSharpParser.ParenLeft);
				this.state = 469;
				this.match(QSharpParser.ParenRight);
				}
				break;

			case 2:
				_localctx = new QubitArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 470;
				this.match(QSharpParser.Qubit);
				this.state = 471;
				this.match(QSharpParser.BracketLeft);
				this.state = 472;
				(_localctx as QubitArrayContext)._length = this.expression(0);
				this.state = 473;
				this.match(QSharpParser.BracketRight);
				}
				break;

			case 3:
				_localctx = new QubitTupleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 475;
				this.match(QSharpParser.ParenLeft);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === QSharpParser.Qubit || _la === QSharpParser.ParenLeft) {
					{
					this.state = 476;
					this.qubitInitializer();
					this.state = 481;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 477;
							this.match(QSharpParser.Comma);
							this.state = 478;
							this.qubitInitializer();
							}
							}
						}
						this.state = 483;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === QSharpParser.Comma) {
						{
						this.state = 484;
						this.match(QSharpParser.Comma);
						}
					}

					}
				}

				this.state = 489;
				this.match(QSharpParser.ParenRight);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, QSharpParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				_localctx = new MissingExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 493;
				this.match(QSharpParser.Underscore);
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 494;
				this.qualifiedName();
				this.state = 496;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 495;
					this.typeTuple();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new IntegerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 498;
				this.match(QSharpParser.IntegerLiteral);
				}
				break;

			case 4:
				{
				_localctx = new BigIntegerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 499;
				this.match(QSharpParser.BigIntegerLiteral);
				}
				break;

			case 5:
				{
				_localctx = new DoubleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 500;
				this.match(QSharpParser.DoubleLiteral);
				}
				break;

			case 6:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 501;
				this.match(QSharpParser.DoubleQuote);
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === QSharpParser.StringEscape || _la === QSharpParser.StringText) {
					{
					{
					this.state = 502;
					this.stringContent();
					}
					}
					this.state = 507;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 508;
				this.match(QSharpParser.StringDoubleQuote);
				}
				break;

			case 7:
				{
				_localctx = new InterpStringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 509;
				this.match(QSharpParser.DollarQuote);
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (QSharpParser.InterpStringEscape - 135)) | (1 << (QSharpParser.InterpBraceLeft - 135)) | (1 << (QSharpParser.InterpStringText - 135)))) !== 0)) {
					{
					{
					this.state = 510;
					this.interpStringContent();
					}
					}
					this.state = 515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 516;
				this.match(QSharpParser.InterpDoubleQuote);
				}
				break;

			case 8:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 517;
				this.boolLiteral();
				}
				break;

			case 9:
				{
				_localctx = new ResultExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 518;
				this.resultLiteral();
				}
				break;

			case 10:
				{
				_localctx = new PauliExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 519;
				this.pauliLiteral();
				}
				break;

			case 11:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 520;
				this.match(QSharpParser.ParenLeft);
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointFunctor) | (1 << QSharpParser.ControlledFunctor) | (1 << QSharpParser.False))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (QSharpParser.New - 35)) | (1 << (QSharpParser.Not - 35)) | (1 << (QSharpParser.One - 35)) | (1 << (QSharpParser.PauliI - 35)) | (1 << (QSharpParser.PauliX - 35)) | (1 << (QSharpParser.PauliY - 35)) | (1 << (QSharpParser.PauliZ - 35)) | (1 << (QSharpParser.True - 35)) | (1 << (QSharpParser.Zero - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (QSharpParser.Bang - 69)) | (1 << (QSharpParser.BracketLeft - 69)) | (1 << (QSharpParser.DollarQuote - 69)) | (1 << (QSharpParser.DoubleQuote - 69)) | (1 << (QSharpParser.Ellipsis - 69)) | (1 << (QSharpParser.Minus - 69)) | (1 << (QSharpParser.ParenLeft - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (QSharpParser.Plus - 102)) | (1 << (QSharpParser.TripleTilde - 102)) | (1 << (QSharpParser.Underscore - 102)) | (1 << (QSharpParser.IntegerLiteral - 102)) | (1 << (QSharpParser.BigIntegerLiteral - 102)) | (1 << (QSharpParser.DoubleLiteral - 102)) | (1 << (QSharpParser.Identifier - 102)))) !== 0)) {
					{
					this.state = 521;
					this.expression(0);
					this.state = 526;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 522;
							this.match(QSharpParser.Comma);
							this.state = 523;
							this.expression(0);
							}
							}
						}
						this.state = 528;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
					}
					this.state = 530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === QSharpParser.Comma) {
						{
						this.state = 529;
						this.match(QSharpParser.Comma);
						}
					}

					}
				}

				this.state = 534;
				this.match(QSharpParser.ParenRight);
				}
				break;

			case 12:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 535;
				this.match(QSharpParser.BracketLeft);
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointFunctor) | (1 << QSharpParser.ControlledFunctor) | (1 << QSharpParser.False))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (QSharpParser.New - 35)) | (1 << (QSharpParser.Not - 35)) | (1 << (QSharpParser.One - 35)) | (1 << (QSharpParser.PauliI - 35)) | (1 << (QSharpParser.PauliX - 35)) | (1 << (QSharpParser.PauliY - 35)) | (1 << (QSharpParser.PauliZ - 35)) | (1 << (QSharpParser.True - 35)) | (1 << (QSharpParser.Zero - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (QSharpParser.Bang - 69)) | (1 << (QSharpParser.BracketLeft - 69)) | (1 << (QSharpParser.DollarQuote - 69)) | (1 << (QSharpParser.DoubleQuote - 69)) | (1 << (QSharpParser.Ellipsis - 69)) | (1 << (QSharpParser.Minus - 69)) | (1 << (QSharpParser.ParenLeft - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (QSharpParser.Plus - 102)) | (1 << (QSharpParser.TripleTilde - 102)) | (1 << (QSharpParser.Underscore - 102)) | (1 << (QSharpParser.IntegerLiteral - 102)) | (1 << (QSharpParser.BigIntegerLiteral - 102)) | (1 << (QSharpParser.DoubleLiteral - 102)) | (1 << (QSharpParser.Identifier - 102)))) !== 0)) {
					{
					this.state = 536;
					this.expression(0);
					this.state = 541;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 537;
							this.match(QSharpParser.Comma);
							this.state = 538;
							this.expression(0);
							}
							}
						}
						this.state = 543;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					}
					this.state = 545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === QSharpParser.Comma) {
						{
						this.state = 544;
						this.match(QSharpParser.Comma);
						}
					}

					}
				}

				this.state = 549;
				this.match(QSharpParser.BracketRight);
				}
				break;

			case 13:
				{
				_localctx = new SizedArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 550;
				this.match(QSharpParser.BracketLeft);
				this.state = 551;
				(_localctx as SizedArrayExpressionContext)._value = this.expression(0);
				this.state = 552;
				this.match(QSharpParser.Comma);
				this.state = 553;
				this.size();
				this.state = 554;
				this.match(QSharpParser.Equal);
				this.state = 555;
				(_localctx as SizedArrayExpressionContext)._length = this.expression(0);
				this.state = 556;
				this.match(QSharpParser.BracketRight);
				}
				break;

			case 14:
				{
				_localctx = new NewArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 558;
				this.match(QSharpParser.New);
				this.state = 559;
				this.type(0);
				this.state = 560;
				this.match(QSharpParser.BracketLeft);
				this.state = 561;
				(_localctx as NewArrayExpressionContext)._length = this.expression(0);
				this.state = 562;
				this.match(QSharpParser.BracketRight);
				}
				break;

			case 15:
				{
				_localctx = new ControlledExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 564;
				this.match(QSharpParser.ControlledFunctor);
				this.state = 565;
				this.expression(22);
				}
				break;

			case 16:
				{
				_localctx = new AdjointExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 566;
				this.match(QSharpParser.AdjointFunctor);
				this.state = 567;
				this.expression(21);
				}
				break;

			case 17:
				{
				_localctx = new PrefixOpExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 568;
				(_localctx as PrefixOpExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === QSharpParser.Not || _la === QSharpParser.Bang || _la === QSharpParser.Minus || _la === QSharpParser.Plus || _la === QSharpParser.TripleTilde)) {
					(_localctx as PrefixOpExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 569;
				this.expression(19);
				}
				break;

			case 18:
				{
				_localctx = new LeftOpenRangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 570;
				this.match(QSharpParser.Ellipsis);
				this.state = 571;
				this.expression(4);
				}
				break;

			case 19:
				{
				_localctx = new OpenRangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 572;
				this.match(QSharpParser.Ellipsis);
				}
				break;

			case 20:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 573;
				this.symbolBinding();
				this.state = 574;
				(_localctx as LambdaExpressionContext)._arrow = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === QSharpParser.ArrowRight || _la === QSharpParser.FatArrowRight)) {
					(_localctx as LambdaExpressionContext)._arrow = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 575;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 657;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 655;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
					case 1:
						{
						_localctx = new ExponentExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExponentExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 579;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 580;
						this.match(QSharpParser.Caret);
						this.state = 581;
						(_localctx as ExponentExpressionContext)._right = this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 582;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 583;
						(_localctx as MultiplyExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.Asterisk || _la === QSharpParser.Percent || _la === QSharpParser.Slash)) {
							(_localctx as MultiplyExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 584;
						(_localctx as MultiplyExpressionContext)._right = this.expression(18);
						}
						break;

					case 3:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 585;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 586;
						(_localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.Minus || _la === QSharpParser.Plus)) {
							(_localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 587;
						(_localctx as AddExpressionContext)._right = this.expression(17);
						}
						break;

					case 4:
						{
						_localctx = new ShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 588;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 589;
						(_localctx as ShiftExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.TripleGreater || _la === QSharpParser.TripleLess)) {
							(_localctx as ShiftExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 590;
						(_localctx as ShiftExpressionContext)._right = this.expression(16);
						}
						break;

					case 5:
						{
						_localctx = new CompareExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 591;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 592;
						(_localctx as CompareExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (QSharpParser.Greater - 89)) | (1 << (QSharpParser.GreaterEqual - 89)) | (1 << (QSharpParser.Less - 89)) | (1 << (QSharpParser.LessEqual - 89)))) !== 0))) {
							(_localctx as CompareExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 593;
						(_localctx as CompareExpressionContext)._right = this.expression(15);
						}
						break;

					case 6:
						{
						_localctx = new EqualsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 594;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 595;
						(_localctx as EqualsExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.DoubleEqual || _la === QSharpParser.NotEqual)) {
							(_localctx as EqualsExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 596;
						(_localctx as EqualsExpressionContext)._right = this.expression(14);
						}
						break;

					case 7:
						{
						_localctx = new BitwiseAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitwiseAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 597;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 598;
						this.match(QSharpParser.TripleAmpersand);
						this.state = 599;
						(_localctx as BitwiseAndExpressionContext)._right = this.expression(13);
						}
						break;

					case 8:
						{
						_localctx = new BitwiseXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitwiseXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 600;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 601;
						this.match(QSharpParser.TripleCaret);
						this.state = 602;
						(_localctx as BitwiseXorExpressionContext)._right = this.expression(12);
						}
						break;

					case 9:
						{
						_localctx = new BitwiseOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitwiseOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 603;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 604;
						this.match(QSharpParser.TriplePipe);
						this.state = 605;
						(_localctx as BitwiseOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 10:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 606;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 607;
						(_localctx as AndExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.And || _la === QSharpParser.DoubleAmpersand)) {
							(_localctx as AndExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 608;
						(_localctx as AndExpressionContext)._right = this.expression(10);
						}
						break;

					case 11:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 609;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 610;
						(_localctx as OrExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === QSharpParser.Or || _la === QSharpParser.DoublePipe)) {
							(_localctx as OrExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 611;
						(_localctx as OrExpressionContext)._right = this.expression(9);
						}
						break;

					case 12:
						{
						_localctx = new ConditionalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConditionalExpressionContext)._cond = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 612;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 613;
						this.match(QSharpParser.Question);
						this.state = 614;
						(_localctx as ConditionalExpressionContext)._then = this.expression(0);
						this.state = 615;
						this.match(QSharpParser.Pipe);
						this.state = 616;
						(_localctx as ConditionalExpressionContext)._else = this.expression(7);
						}
						break;

					case 13:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 618;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 619;
						this.match(QSharpParser.DoubleDot);
						this.state = 620;
						(_localctx as RangeExpressionContext)._right = this.expression(7);
						}
						break;

					case 14:
						{
						_localctx = new UpdateExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as UpdateExpressionContext)._record = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 621;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 622;
						this.match(QSharpParser.With);
						this.state = 623;
						(_localctx as UpdateExpressionContext)._index = this.expression(0);
						this.state = 624;
						this.match(QSharpParser.ArrowLeft);
						this.state = 625;
						(_localctx as UpdateExpressionContext)._value = this.expression(3);
						}
						break;

					case 15:
						{
						_localctx = new NamedItemAccessExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 627;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 628;
						this.match(QSharpParser.DoubleColon);
						this.state = 629;
						this.match(QSharpParser.Identifier);
						}
						break;

					case 16:
						{
						_localctx = new ArrayAccessExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ArrayAccessExpressionContext)._array = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 630;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 631;
						this.match(QSharpParser.BracketLeft);
						this.state = 632;
						(_localctx as ArrayAccessExpressionContext)._index = this.expression(0);
						this.state = 633;
						this.match(QSharpParser.BracketRight);
						}
						break;

					case 17:
						{
						_localctx = new UnwrapExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 635;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 636;
						this.match(QSharpParser.Bang);
						}
						break;

					case 18:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as CallExpressionContext)._callable = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 637;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 638;
						this.match(QSharpParser.ParenLeft);
						this.state = 650;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.AdjointFunctor) | (1 << QSharpParser.ControlledFunctor) | (1 << QSharpParser.False))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (QSharpParser.New - 35)) | (1 << (QSharpParser.Not - 35)) | (1 << (QSharpParser.One - 35)) | (1 << (QSharpParser.PauliI - 35)) | (1 << (QSharpParser.PauliX - 35)) | (1 << (QSharpParser.PauliY - 35)) | (1 << (QSharpParser.PauliZ - 35)) | (1 << (QSharpParser.True - 35)) | (1 << (QSharpParser.Zero - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (QSharpParser.Bang - 69)) | (1 << (QSharpParser.BracketLeft - 69)) | (1 << (QSharpParser.DollarQuote - 69)) | (1 << (QSharpParser.DoubleQuote - 69)) | (1 << (QSharpParser.Ellipsis - 69)) | (1 << (QSharpParser.Minus - 69)) | (1 << (QSharpParser.ParenLeft - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (QSharpParser.Plus - 102)) | (1 << (QSharpParser.TripleTilde - 102)) | (1 << (QSharpParser.Underscore - 102)) | (1 << (QSharpParser.IntegerLiteral - 102)) | (1 << (QSharpParser.BigIntegerLiteral - 102)) | (1 << (QSharpParser.DoubleLiteral - 102)) | (1 << (QSharpParser.Identifier - 102)))) !== 0)) {
							{
							this.state = 639;
							(_localctx as CallExpressionContext)._expression = this.expression(0);
							(_localctx as CallExpressionContext)._args.push((_localctx as CallExpressionContext)._expression);
							this.state = 644;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 640;
									this.match(QSharpParser.Comma);
									this.state = 641;
									(_localctx as CallExpressionContext)._expression = this.expression(0);
									(_localctx as CallExpressionContext)._args.push((_localctx as CallExpressionContext)._expression);
									}
									}
								}
								this.state = 646;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
							}
							this.state = 648;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === QSharpParser.Comma) {
								{
								this.state = 647;
								this.match(QSharpParser.Comma);
								}
							}

							}
						}

						this.state = 652;
						this.match(QSharpParser.ParenRight);
						}
						break;

					case 19:
						{
						_localctx = new RightOpenRangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
						this.state = 653;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 654;
						this.match(QSharpParser.Ellipsis);
						}
						break;
					}
					}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public size(): SizeContext {
		let _localctx: SizeContext = new SizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, QSharpParser.RULE_size);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.match(QSharpParser.Identifier);
			this.state = 661;
			if (!( _localctx.Identifier().Symbol.Text == "size" )) {
				throw this.createFailedPredicateException(" _localctx.Identifier().Symbol.Text == \"size\" ");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTuple(): TypeTupleContext {
		let _localctx: TypeTupleContext = new TypeTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, QSharpParser.RULE_typeTuple);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.match(QSharpParser.Less);
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QSharpParser.BigInt) | (1 << QSharpParser.Bool) | (1 << QSharpParser.Double) | (1 << QSharpParser.Int))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (QSharpParser.Pauli - 42)) | (1 << (QSharpParser.Qubit - 42)) | (1 << (QSharpParser.Range - 42)) | (1 << (QSharpParser.Result - 42)) | (1 << (QSharpParser.String - 42)) | (1 << (QSharpParser.Unit - 42)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (QSharpParser.ParenLeft - 97)) | (1 << (QSharpParser.Underscore - 97)) | (1 << (QSharpParser.Identifier - 97)) | (1 << (QSharpParser.TypeParameter - 97)))) !== 0)) {
				{
				this.state = 664;
				this.type(0);
				this.state = 669;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 665;
						this.match(QSharpParser.Comma);
						this.state = 666;
						this.type(0);
						}
						}
					}
					this.state = 671;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === QSharpParser.Comma) {
					{
					this.state = 672;
					this.match(QSharpParser.Comma);
					}
				}

				}
			}

			this.state = 677;
			this.match(QSharpParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolLiteral(): BoolLiteralContext {
		let _localctx: BoolLiteralContext = new BoolLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, QSharpParser.RULE_boolLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			_la = this._input.LA(1);
			if (!(_la === QSharpParser.False || _la === QSharpParser.True)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resultLiteral(): ResultLiteralContext {
		let _localctx: ResultLiteralContext = new ResultLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, QSharpParser.RULE_resultLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			_la = this._input.LA(1);
			if (!(_la === QSharpParser.One || _la === QSharpParser.Zero)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pauliLiteral(): PauliLiteralContext {
		let _localctx: PauliLiteralContext = new PauliLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, QSharpParser.RULE_pauliLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (QSharpParser.PauliI - 43)) | (1 << (QSharpParser.PauliX - 43)) | (1 << (QSharpParser.PauliY - 43)) | (1 << (QSharpParser.PauliZ - 43)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringContent(): StringContentContext {
		let _localctx: StringContentContext = new StringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, QSharpParser.RULE_stringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			_la = this._input.LA(1);
			if (!(_la === QSharpParser.StringEscape || _la === QSharpParser.StringText)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interpStringContent(): InterpStringContentContext {
		let _localctx: InterpStringContentContext = new InterpStringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, QSharpParser.RULE_interpStringContent);
		try {
			this.state = 693;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QSharpParser.InterpStringEscape:
				_localctx = new InterpStringEscapeContentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 687;
				this.match(QSharpParser.InterpStringEscape);
				}
				break;
			case QSharpParser.InterpBraceLeft:
				_localctx = new InterpExpressionContentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 688;
				this.match(QSharpParser.InterpBraceLeft);
				this.state = 689;
				this.expression(0);
				this.state = 690;
				this.match(QSharpParser.BraceRight);
				}
				break;
			case QSharpParser.InterpStringText:
				_localctx = new InterpTextContentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 692;
				this.match(QSharpParser.InterpStringText);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.characteristicsExpression_sempred(_localctx as CharacteristicsExpressionContext, predIndex);

		case 26:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 34:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 35:
			return this.size_sempred(_localctx as SizeContext, predIndex);
		}
		return true;
	}
	private characteristicsExpression_sempred(_localctx: CharacteristicsExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 18);

		case 5:
			return this.precpred(this._ctx, 17);

		case 6:
			return this.precpred(this._ctx, 16);

		case 7:
			return this.precpred(this._ctx, 15);

		case 8:
			return this.precpred(this._ctx, 14);

		case 9:
			return this.precpred(this._ctx, 13);

		case 10:
			return this.precpred(this._ctx, 12);

		case 11:
			return this.precpred(this._ctx, 11);

		case 12:
			return this.precpred(this._ctx, 10);

		case 13:
			return this.precpred(this._ctx, 9);

		case 14:
			return this.precpred(this._ctx, 8);

		case 15:
			return this.precpred(this._ctx, 7);

		case 16:
			return this.precpred(this._ctx, 6);

		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 25);

		case 19:
			return this.precpred(this._ctx, 24);

		case 20:
			return this.precpred(this._ctx, 23);

		case 21:
			return this.precpred(this._ctx, 20);

		case 22:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private size_sempred(_localctx: SizeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return  _localctx.Identifier().Symbol.Text == "size" ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8C\u02BA\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x03\x02\x07\x02X\n\x02\f\x02\x0E\x02[\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03c\n\x03\f\x03\x0E\x03f\v\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x07\x04m\n\x04\f\x04\x0E\x04p\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x05\x05u\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"{\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x07" +
		"\t\x85\n\t\f\t\x0E\t\x88\v\t\x03\t\x05\t\x8B\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\x96\n\v\x03\f\x03\f\x03\f\x03\f" +
		"\x07\f\x9C\n\f\f\f\x0E\f\x9F\v\f\x05\f\xA1\n\f\x03\f\x03\f\x03\r\x03\r" +
		"\x05\r\xA7\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xB1\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB7" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xBF\n\x10" +
		"\f\x10\x0E\x10\xC2\v\x10\x05\x10\xC4\n\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\xCC\n\x11\f\x11\x0E\x11\xCF\v\x11\x05\x11" +
		"\xD1\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\xD7\n\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\xE3\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\xEB\n\x14\f\x14\x0E\x14\xEE\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xF3" +
		"\n\x15\f\x15\x0E\x15\xF6\v\x15\x03\x15\x05\x15\xF9\n\x15\x03\x16\x06\x16" +
		"\xFC\n\x16\r\x16\x0E\x16\xFD\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u010F\n\x18\x03\x19\x05\x19\u0112\n\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u011A\n\x1A\f\x1A\x0E\x1A\u011D\v" +
		"\x1A\x05\x1A\u011F\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u012B\n\x1C\f\x1C\x0E\x1C\u012E" +
		"\v\x1C\x03\x1C\x05\x1C\u0131\n\x1C\x05\x1C\u0133\n\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u0142\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u014B\n\x1C\x07\x1C\u014D\n\x1C\f\x1C\x0E" +
		"\x1C\u0150\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u018D" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u019C\n\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u01A8\n\x1D\x03\x1D\x03\x1D\x05\x1D\u01AC\n\x1D\x05\x1D\u01AE\n\x1D" +
		"\x03\x1E\x03\x1E\x07\x1E\u01B2\n\x1E\f\x1E\x0E\x1E\u01B5\v\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01BF" +
		"\n\x1F\f\x1F\x0E\x1F\u01C2\v\x1F\x03\x1F\x05\x1F\u01C5\n\x1F\x05\x1F\u01C7" +
		"\n\x1F\x03\x1F\x05\x1F\u01CA\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03\"" +
		"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x07#\u01E2\n#\f#\x0E#\u01E5\v#\x03#\x05#\u01E8\n#\x05#\u01EA\n" +
		"#\x03#\x05#\u01ED\n#\x03$\x03$\x03$\x03$\x05$\u01F3\n$\x03$\x03$\x03$" +
		"\x03$\x03$\x07$\u01FA\n$\f$\x0E$\u01FD\v$\x03$\x03$\x03$\x07$\u0202\n" +
		"$\f$\x0E$\u0205\v$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u020F" +
		"\n$\f$\x0E$\u0212\v$\x03$\x05$\u0215\n$\x05$\u0217\n$\x03$\x03$\x03$\x03" +
		"$\x03$\x07$\u021E\n$\f$\x0E$\u0221\v$\x03$\x05$\u0224\n$\x05$\u0226\n" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x05$\u0244\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u0285\n$\f$\x0E" +
		"$\u0288\v$\x03$\x05$\u028B\n$\x05$\u028D\n$\x03$\x03$\x03$\x07$\u0292" +
		"\n$\f$\x0E$\u0295\v$\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u029E\n&" +
		"\f&\x0E&\u02A1\v&\x03&\x05&\u02A4\n&\x05&\u02A6\n&\x03&\x03&\x03\'\x03" +
		"\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02B8" +
		"\n+\x03+\x02\x02\x05&6F,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02" +
		"\x14\x04\x02\x1A\x1A**\x05\x02\x05\x05\v\v\x10\x10\x04\x02XX\x7F\x7F\x04" +
		"\x02CCZZ\x04\x02\r\x0E<=\x0F\x02AAEEMM``bbffiimmooqqssuuww\x07\x02\'\'" +
		"GG__hhxx\x05\x02DDeell\x04\x02__hh\x04\x02rrtt\x03\x02[^\x04\x02UUaa\x04" +
		"\x02\x06\x06RR\x04\x02++VV\x04\x02\x17\x1799\x04\x02((@@\x03\x02-0\x03" +
		"\x02\x86\x87\x02\u031B\x02Y\x03\x02\x02\x02\x04^\x03\x02\x02\x02\x06i" +
		"\x03\x02\x02\x02\bt\x03\x02\x02\x02\nv\x03\x02\x02\x02\f~\x03\x02\x02" +
		"\x02\x0E\x81\x03\x02\x02\x02\x10\x86\x03\x02\x02\x02\x12\x8C\x03\x02\x02" +
		"\x02\x14\x95\x03\x02\x02\x02\x16\x97\x03\x02\x02\x02\x18\xA6\x03\x02\x02" +
		"\x02\x1A\xA8\x03\x02\x02\x02\x1C\xAC\x03\x02\x02\x02\x1E\xBA\x03\x02\x02" +
		"\x02 \xC7\x03\x02\x02\x02\"\xD6\x03\x02\x02\x02$\xD8\x03\x02\x02\x02&" +
		"\xE2\x03\x02\x02\x02(\xF8\x03\x02\x02\x02*\xFB\x03\x02\x02\x02,\u0101" +
		"\x03\x02\x02\x02.\u010E\x03\x02\x02\x020\u0111\x03\x02\x02\x022\u0115" +
		"\x03\x02\x02\x024\u0122\x03\x02\x02\x026\u0141\x03\x02\x02\x028\u01AD" +
		"\x03\x02\x02\x02:\u01AF\x03\x02\x02\x02<\u01C9\x03\x02\x02\x02>\u01CB" +
		"\x03\x02\x02\x02@\u01CD\x03\x02\x02\x02B\u01D1\x03\x02\x02\x02D\u01EC" +
		"\x03\x02\x02\x02F\u0243\x03\x02\x02\x02H\u0296\x03\x02\x02\x02J\u0299" +
		"\x03\x02\x02\x02L\u02A9\x03\x02\x02\x02N\u02AB\x03\x02\x02\x02P\u02AD" +
		"\x03\x02\x02\x02R\u02AF\x03\x02\x02\x02T\u02B7\x03\x02\x02\x02VX\x05\x04" +
		"\x03\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02" +
		"\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\x02\x02\x03]\x03" +
		"\x03\x02\x02\x02^_\x07$\x02\x02_`\x05\x06\x04\x02`d\x07H\x02\x02ac\x05" +
		"\b\x05\x02ba\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03" +
		"\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x07I\x02\x02h\x05\x03" +
		"\x02\x02\x02in\x07\x7F\x02\x02jk\x07Q\x02\x02km\x07\x7F\x02\x02lj\x03" +
		"\x02\x02\x02mp\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x07" +
		"\x03\x02\x02\x02pn\x03\x02\x02\x02qu\x05\n\x06\x02ru\x05\x12\n\x02su\x05" +
		"\x1C\x0F\x02tq\x03\x02\x02\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02u\t" +
		"\x03\x02\x02\x02vw\x07)\x02\x02wz\x05\x06\x04\x02xy\x07\b\x02\x02y{\x05" +
		"\x06\x04\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x07" +
		"k\x02\x02}\v\x03\x02\x02\x02~\x7F\x07F\x02\x02\x7F\x80\x05F$\x02\x80\r" +
		"\x03\x02\x02\x02\x81\x82\x07\x1E\x02\x02\x82\x0F\x03\x02\x02\x02\x83\x85" +
		"\x05\f\x07\x02\x84\x83\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84" +
		"\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86" +
		"\x03\x02\x02\x02\x89\x8B\x05\x0E\b\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B" +
		"\x03\x02\x02\x02\x8B\x11\x03\x02\x02\x02\x8C\x8D\x05\x10\t\x02\x8D\x8E" +
		"\x07&\x02\x02\x8E\x8F\x07\x7F\x02\x02\x8F\x90\x07Y\x02\x02\x90\x91\x05" +
		"\x14\v\x02\x91\x92\x07k\x02\x02\x92\x13\x03\x02\x02\x02\x93\x96\x05\x16" +
		"\f\x02\x94\x96\x056\x1C\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02" +
		"\x02\x96\x15\x03\x02\x02\x02\x97\xA0\x07c\x02\x02\x98\x9D\x05\x18\r\x02" +
		"\x99\x9A\x07O\x02\x02\x9A\x9C\x05\x18\r\x02\x9B\x99\x03\x02\x02\x02\x9C" +
		"\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\x98\x03\x02\x02\x02\xA0" +
		"\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07d\x02\x02\xA3" +
		"\x17\x03\x02\x02\x02\xA4\xA7\x05\x1A\x0E\x02\xA5\xA7\x05\x14\v\x02\xA6" +
		"\xA4\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\x19\x03\x02\x02\x02\xA8" +
		"\xA9\x07\x7F\x02\x02\xA9\xAA\x07N\x02\x02\xAA\xAB\x056\x1C\x02\xAB\x1B" +
		"\x03\x02\x02\x02\xAC\xAD\x05\x10\t\x02\xAD\xAE\t\x02\x02\x02\xAE\xB0\x07" +
		"\x7F\x02\x02\xAF\xB1\x05\x1E\x10\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03" +
		"\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x05 \x11\x02\xB3\xB4\x07" +
		"N\x02\x02\xB4\xB6\x056\x1C\x02\xB5\xB7\x05$\x13\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x05(\x15" +
		"\x02\xB9\x1D\x03\x02\x02\x02\xBA\xC3\x07]\x02\x02\xBB\xC0\x07\x82\x02" +
		"\x02\xBC\xBD\x07O\x02\x02\xBD\xBF\x07\x82\x02\x02\xBE\xBC\x03\x02\x02" +
		"\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02" +
		"\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xBB\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x07[\x02" +
		"\x02\xC6\x1F\x03\x02\x02\x02\xC7\xD0\x07c\x02\x02\xC8\xCD\x05\"\x12\x02" +
		"\xC9\xCA\x07O\x02\x02\xCA\xCC\x05\"\x12\x02\xCB\xC9\x03\x02\x02\x02\xCC" +
		"\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
		"\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x07d\x02\x02\xD3" +
		"!\x03\x02\x02\x02\xD4\xD7\x05\x1A\x0E\x02\xD5\xD7\x05 \x11\x02\xD6\xD4" +
		"\x03\x02\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7#\x03\x02\x02\x02\xD8\xD9" +
		"\x07!\x02\x02\xD9\xDA\x05&\x14\x02\xDA%\x03\x02\x02\x02\xDB\xDC\b\x14" +
		"\x01\x02\xDC\xE3\x07\x03\x02\x02\xDD\xE3\x07\x11\x02\x02\xDE\xDF\x07c" +
		"\x02\x02\xDF\xE0\x05&\x14\x02\xE0\xE1\x07d\x02\x02\xE1\xE3\x03\x02\x02" +
		"\x02\xE2\xDB\x03\x02\x02\x02\xE2\xDD\x03\x02\x02\x02\xE2\xDE\x03\x02\x02" +
		"\x02\xE3\xEC\x03\x02\x02\x02\xE4\xE5\f\x04\x02\x02\xE5\xE6\x07D\x02\x02" +
		"\xE6\xEB\x05&\x14\x05\xE7\xE8\f\x03\x02\x02\xE8\xE9\x07h\x02\x02\xE9\xEB" +
		"\x05&\x14\x04\xEA\xE4\x03\x02\x02\x02\xEA\xE7\x03\x02\x02\x02\xEB\xEE" +
		"\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\'" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF9\x05:\x1E\x02\xF0\xF4" +
		"\x07H\x02\x02\xF1\xF3\x05*\x16\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03" +
		"\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03" +
		"\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x07I\x02\x02\xF8\xEF\x03" +
		"\x02\x02\x02\xF8\xF0\x03\x02\x02\x02\xF9)\x03\x02\x02\x02\xFA\xFC\x05" +
		",\x17\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFB\x03" +
		"\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100" +
		"\x05.\x18\x02\u0100+\x03\x02\x02\x02\u0101\u0102\t\x03\x02\x02\u0102-" +
		"\x03\x02\x02\x02\u0103\u0104\x07\t\x02\x02\u0104\u010F\x07k\x02\x02\u0105" +
		"\u0106\x076\x02\x02\u0106\u010F\x07k\x02\x02\u0107\u0108\x07 \x02\x02" +
		"\u0108\u010F\x07k\x02\x02\u0109\u010A\x07\x12\x02\x02\u010A\u010F\x07" +
		"k\x02\x02\u010B\u010C\x07\x1F\x02\x02\u010C\u010F\x07k\x02\x02\u010D\u010F" +
		"\x050\x19\x02\u010E\u0103\x03\x02\x02\x02\u010E\u0105\x03\x02\x02\x02" +
		"\u010E\u0107\x03\x02\x02\x02\u010E\u0109\x03\x02\x02\x02\u010E\u010B\x03" +
		"\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F/\x03\x02\x02\x02\u0110" +
		"\u0112\x052\x1A\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02" +
		"\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x05:\x1E\x02\u01141\x03\x02" +
		"\x02\x02\u0115\u011E\x07c\x02\x02\u0116\u011B\x054\x1B\x02\u0117\u0118" +
		"\x07O\x02\x02\u0118\u011A\x054\x1B\x02\u0119\u0117\x03\x02\x02\x02\u011A" +
		"\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E" +
		"\u0116\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x03\x02" +
		"\x02\x02\u0120\u0121\x07d\x02\x02\u01213\x03\x02\x02\x02\u0122\u0123\t" +
		"\x04\x02\x02\u01235\x03\x02\x02\x02\u0124\u0125\b\x1C\x01\x02\u0125\u0142" +
		"\x07y\x02\x02\u0126\u0132\x07c\x02\x02\u0127\u012C\x056\x1C\x02\u0128" +
		"\u0129\x07O\x02\x02\u0129\u012B\x056\x1C\x02\u012A\u0128\x03\x02\x02\x02" +
		"\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F" +
		"\u0131\x07O\x02\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02" +
		"\x02\u0131\u0133\x03\x02\x02\x02\u0132\u0127\x03\x02\x02\x02\u0132\u0133" +
		"\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0142\x07d\x02\x02" +
		"\u0135\u0142\x07\x82\x02\x02\u0136\u0142\x07\n\x02\x02\u0137\u0142\x07" +
		"\f\x02\x02\u0138\u0142\x07\x13\x02\x02\u0139\u0142\x07\x1D\x02\x02\u013A" +
		"\u0142\x07,\x02\x02\u013B\u0142\x071\x02\x02\u013C\u0142\x072\x02\x02" +
		"\u013D\u0142\x074\x02\x02\u013E\u0142\x078\x02\x02\u013F\u0142\x07:\x02" +
		"\x02\u0140\u0142\x05\x06\x04\x02\u0141\u0124\x03\x02\x02\x02\u0141\u0126" +
		"\x03\x02\x02\x02\u0141\u0135\x03\x02\x02\x02\u0141\u0136\x03\x02\x02\x02" +
		"\u0141\u0137\x03\x02\x02\x02\u0141\u0138\x03\x02\x02\x02\u0141\u0139\x03" +
		"\x02\x02\x02\u0141\u013A\x03\x02\x02\x02\u0141\u013B\x03\x02\x02\x02\u0141" +
		"\u013C\x03\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u0141\u013E\x03\x02" +
		"\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0140\x03\x02\x02\x02\u0142" +
		"\u014E\x03\x02\x02\x02\u0143\u0144\f\x0F\x02\x02\u0144\u0145\x07J\x02" +
		"\x02\u0145\u014D\x07K\x02\x02\u0146\u0147\f\x0E\x02\x02\u0147\u0148\t" +
		"\x05\x02\x02\u0148\u014A\x056\x1C\x02\u0149\u014B\x05$\x13\x02\u014A\u0149" +
		"\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02" +
		"\u014C\u0143\x03\x02\x02\x02\u014C\u0146\x03\x02\x02\x02\u014D\u0150\x03" +
		"\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"7\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0152\x05F$\x02\u0152" +
		"\u0153\x07k\x02\x02\u0153\u01AE\x03\x02\x02\x02\u0154\u0155\x075\x02\x02" +
		"\u0155\u0156\x05F$\x02\u0156\u0157\x07k\x02\x02\u0157\u01AE\x03\x02\x02" +
		"\x02\u0158\u0159\x07\x16\x02\x02\u0159\u015A\x05F$\x02\u015A\u015B\x07" +
		"k\x02\x02\u015B\u01AE\x03\x02\x02\x02\u015C\u015D\x07\"\x02\x02\u015D" +
		"\u015E\x05<\x1F\x02\u015E\u015F\x07Y\x02\x02\u015F\u0160\x05F$\x02\u0160" +
		"\u0161\x07k\x02\x02\u0161\u01AE\x03\x02\x02\x02\u0162\u0163\x07#\x02\x02" +
		"\u0163\u0164\x05<\x1F\x02\u0164\u0165\x07Y\x02\x02\u0165\u0166\x05F$\x02" +
		"\u0166\u0167\x07k\x02\x02\u0167\u01AE\x03\x02\x02\x02\u0168\u0169\x07" +
		"7\x02\x02\u0169\u016A\x05<\x1F\x02\u016A\u016B\x07Y\x02\x02\u016B\u016C" +
		"\x05F$\x02\u016C\u016D\x07k\x02\x02\u016D\u01AE\x03\x02\x02\x02\u016E" +
		"\u016F\x077\x02\x02\u016F\u0170\x07\x7F\x02\x02\u0170\u0171\x05> \x02" +
		"\u0171\u0172\x05F$\x02\u0172\u0173\x07k\x02\x02\u0173\u01AE\x03\x02\x02" +
		"\x02\u0174\u0175\x077\x02\x02\u0175\u0176\x07\x7F\x02\x02\u0176\u0177" +
		"\x07{\x02\x02\u0177\u0178\x05F$\x02\u0178\u0179\x07B\x02\x02\u0179\u017A" +
		"\x05F$\x02\u017A\u017B\x07k\x02\x02\u017B\u01AE\x03\x02\x02\x02\u017C" +
		"\u017D\x07\x1B\x02\x02\u017D\u017E\x05F$\x02\u017E\u017F\x05:\x1E\x02" +
		"\u017F\u01AE\x03\x02\x02\x02\u0180\u0181\x07\x14\x02\x02\u0181\u0182\x05" +
		"F$\x02\u0182\u0183\x05:\x1E\x02\u0183\u01AE\x03\x02\x02\x02\u0184\u0185" +
		"\x07\x15\x02\x02\u0185\u01AE\x05:\x1E\x02\u0186\u018C\x07\x19\x02\x02" +
		"\u0187\u018D\x05@!\x02\u0188\u0189\x07c\x02\x02\u0189\u018A\x05@!\x02" +
		"\u018A\u018B\x07d\x02\x02\u018B\u018D\x03\x02\x02\x02\u018C\u0187\x03" +
		"\x02\x02\x02\u018C\u0188\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		"\u018F\x05:\x1E\x02\u018F\u01AE\x03\x02\x02\x02\u0190\u0191\x07>\x02\x02" +
		"\u0191\u0192\x05F$\x02\u0192\u0193\x05:\x1E\x02\u0193\u01AE\x03\x02\x02" +
		"\x02\u0194\u0195\x073\x02\x02\u0195\u01AE\x05:\x1E\x02\u0196\u0197\x07" +
		";\x02\x02\u0197\u019B\x05F$\x02\u0198\u019C\x07k\x02\x02\u0199\u019A\x07" +
		"\x18\x02\x02\u019A\u019C\x05:\x1E\x02\u019B\u0198\x03\x02\x02\x02\u019B" +
		"\u0199\x03\x02\x02\x02\u019C\u01AE\x03\x02\x02\x02\u019D\u019E\x07?\x02" +
		"\x02\u019E\u01AE\x05:\x1E\x02\u019F\u01A0\x07\x07\x02\x02\u01A0\u01AE" +
		"\x05:\x1E\x02\u01A1\u01A7\t\x06\x02\x02\u01A2\u01A8\x05B\"\x02\u01A3\u01A4" +
		"\x07c\x02\x02\u01A4\u01A5\x05B\"\x02\u01A5\u01A6\x07d\x02\x02\u01A6\u01A8" +
		"\x03\x02\x02\x02\u01A7\u01A2\x03\x02\x02\x02\u01A7\u01A3\x03\x02\x02\x02" +
		"\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01AC\x05:\x1E\x02\u01AA\u01AC\x07" +
		"k\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC" +
		"\u01AE\x03\x02\x02\x02\u01AD\u0151\x03\x02\x02\x02\u01AD\u0154\x03\x02" +
		"\x02\x02\u01AD\u0158\x03\x02\x02\x02\u01AD\u015C\x03\x02\x02\x02\u01AD" +
		"\u0162\x03\x02\x02\x02\u01AD\u0168\x03\x02\x02\x02\u01AD\u016E\x03\x02" +
		"\x02\x02\u01AD\u0174\x03\x02\x02\x02\u01AD\u017C\x03\x02\x02\x02\u01AD" +
		"\u0180\x03\x02\x02\x02\u01AD\u0184\x03\x02\x02\x02\u01AD\u0186\x03\x02" +
		"\x02\x02\u01AD\u0190\x03\x02\x02\x02\u01AD\u0194\x03\x02\x02\x02\u01AD" +
		"\u0196\x03\x02\x02\x02\u01AD\u019D\x03\x02\x02\x02\u01AD\u019F\x03\x02" +
		"\x02\x02\u01AD\u01A1\x03\x02\x02\x02\u01AE9\x03\x02\x02\x02\u01AF\u01B3" +
		"\x07H\x02\x02\u01B0\u01B2\x058\x1D\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02" +
		"\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6" +
		"\u01B7\x07I\x02\x02\u01B7;\x03\x02\x02\x02\u01B8\u01CA\x07y\x02\x02\u01B9" +
		"\u01CA\x07\x7F\x02\x02\u01BA\u01C6\x07c\x02\x02\u01BB\u01C0\x05<\x1F\x02" +
		"\u01BC\u01BD\x07O\x02\x02\u01BD\u01BF\x05<\x1F\x02\u01BE\u01BC\x03\x02" +
		"\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0" +
		"\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02" +
		"\x02\x02\u01C3\u01C5\x07O\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C4\u01C5" +
		"\x03\x02\x02\x02\u01C5\u01C7\x03\x02\x02\x02\u01C6\u01BB\x03\x02\x02\x02" +
		"\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CA\x07" +
		"d\x02\x02\u01C9\u01B8\x03\x02\x02\x02\u01C9\u01B9\x03\x02\x02\x02\u01C9" +
		"\u01BA\x03\x02\x02\x02\u01CA=\x03\x02\x02\x02\u01CB\u01CC\t\x07\x02\x02" +
		"\u01CC?\x03\x02\x02\x02\u01CD\u01CE\x05<\x1F\x02\u01CE\u01CF\x07\x1C\x02" +
		"\x02\u01CF\u01D0\x05F$\x02\u01D0A\x03\x02\x02\x02\u01D1\u01D2\x05<\x1F" +
		"\x02\u01D2\u01D3\x07Y\x02\x02\u01D3\u01D4\x05D#\x02\u01D4C\x03\x02\x02" +
		"\x02\u01D5\u01D6\x071\x02\x02\u01D6\u01D7\x07c\x02\x02\u01D7\u01ED\x07" +
		"d\x02\x02\u01D8\u01D9\x071\x02\x02\u01D9\u01DA\x07J\x02\x02\u01DA\u01DB" +
		"\x05F$\x02\u01DB\u01DC\x07K\x02\x02\u01DC\u01ED\x03\x02\x02\x02\u01DD" +
		"\u01E9\x07c\x02\x02\u01DE\u01E3\x05D#\x02\u01DF\u01E0\x07O\x02\x02\u01E0" +
		"\u01E2\x05D#\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02" +
		"\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E7\x03" +
		"\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E8\x07O\x02\x02\u01E7" +
		"\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x03\x02" +
		"\x02\x02\u01E9\u01DE\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA" +
		"\u01EB\x03\x02\x02\x02\u01EB\u01ED\x07d\x02\x02\u01EC\u01D5\x03\x02\x02" +
		"\x02\u01EC\u01D8\x03\x02\x02\x02\u01EC\u01DD\x03\x02\x02\x02\u01EDE\x03" +
		"\x02\x02\x02\u01EE\u01EF\b$\x01\x02\u01EF\u0244\x07y\x02\x02\u01F0\u01F2" +
		"\x05\x06\x04\x02\u01F1\u01F3\x05J&\x02\u01F2\u01F1\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u0244\x03\x02\x02\x02\u01F4\u0244\x07|\x02" +
		"\x02\u01F5\u0244\x07}\x02\x02\u01F6\u0244\x07~\x02\x02\u01F7\u01FB\x07" +
		"W\x02\x02\u01F8\u01FA\x05";
	private static readonly _serializedATNSegment1: string =
		"R*\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9" +
		"\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02" +
		"\u01FD\u01FB\x03\x02\x02\x02\u01FE\u0244\x07\x88\x02\x02\u01FF\u0203\x07" +
		"P\x02\x02\u0200\u0202\x05T+\x02\u0201\u0200\x03\x02\x02\x02\u0202\u0205" +
		"\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02" +
		"\u0204\u0206\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0244\x07" +
		"\x8C\x02\x02\u0207\u0244\x05L\'\x02\u0208\u0244\x05N(\x02\u0209\u0244" +
		"\x05P)\x02\u020A\u0216\x07c\x02\x02\u020B\u0210\x05F$\x02\u020C\u020D" +
		"\x07O\x02\x02\u020D\u020F\x05F$\x02\u020E\u020C\x03\x02\x02\x02\u020F" +
		"\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02" +
		"\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213" +
		"\u0215\x07O\x02\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02" +
		"\x02\u0215\u0217\x03\x02\x02\x02\u0216\u020B\x03\x02\x02\x02\u0216\u0217" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0244\x07d\x02\x02" +
		"\u0219\u0225\x07J\x02\x02\u021A\u021F\x05F$\x02\u021B\u021C\x07O\x02\x02" +
		"\u021C\u021E\x05F$\x02\u021D\u021B\x03\x02\x02\x02\u021E\u0221\x03\x02" +
		"\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220" +
		"\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0222\u0224\x07O\x02" +
		"\x02\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226" +
		"\x03\x02\x02\x02\u0225\u021A\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02" +
		"\u0226\u0227\x03\x02\x02\x02\u0227\u0244\x07K\x02\x02\u0228\u0229\x07" +
		"J\x02\x02\u0229\u022A\x05F$\x02\u022A\u022B\x07O\x02\x02\u022B\u022C\x05" +
		"H%\x02\u022C\u022D\x07Y\x02\x02\u022D\u022E\x05F$\x02\u022E\u022F\x07" +
		"K\x02\x02\u022F\u0244\x03\x02\x02\x02\u0230\u0231\x07%\x02\x02\u0231\u0232" +
		"\x056\x1C\x02\u0232\u0233\x07J\x02\x02\u0233\u0234\x05F$\x02\u0234\u0235" +
		"\x07K\x02\x02\u0235\u0244\x03\x02\x02\x02\u0236\u0237\x07\x0F\x02\x02" +
		"\u0237\u0244\x05F$\x18\u0238\u0239\x07\x04\x02\x02\u0239\u0244\x05F$\x17" +
		"\u023A\u023B\t\b\x02\x02\u023B\u0244\x05F$\x15\u023C\u023D\x07X\x02\x02" +
		"\u023D\u0244\x05F$\x06\u023E\u0244\x07X\x02\x02\u023F\u0240\x05<\x1F\x02" +
		"\u0240\u0241\t\x05\x02\x02\u0241\u0242\x05F$\x03\u0242\u0244\x03\x02\x02" +
		"\x02\u0243\u01EE\x03\x02\x02\x02\u0243\u01F0\x03\x02\x02\x02\u0243\u01F4" +
		"\x03\x02\x02\x02\u0243\u01F5\x03\x02\x02\x02\u0243\u01F6\x03\x02\x02\x02" +
		"\u0243\u01F7\x03\x02\x02\x02\u0243\u01FF\x03\x02\x02\x02\u0243\u0207\x03" +
		"\x02\x02\x02\u0243\u0208\x03\x02\x02\x02\u0243\u0209\x03\x02\x02\x02\u0243" +
		"\u020A\x03\x02\x02\x02\u0243\u0219\x03\x02\x02\x02\u0243\u0228\x03\x02" +
		"\x02\x02\u0243\u0230\x03\x02\x02\x02\u0243\u0236\x03\x02\x02\x02\u0243" +
		"\u0238\x03\x02\x02\x02\u0243\u023A\x03\x02\x02\x02\u0243\u023C\x03\x02" +
		"\x02\x02\u0243\u023E\x03\x02\x02\x02\u0243\u023F\x03\x02\x02\x02\u0244" +
		"\u0293\x03\x02\x02\x02\u0245\u0246\f\x14\x02\x02\u0246\u0247\x07L\x02" +
		"\x02\u0247\u0292\x05F$\x14\u0248\u0249\f\x13\x02\x02\u0249\u024A\t\t\x02" +
		"\x02\u024A\u0292\x05F$\x14\u024B\u024C\f\x12\x02\x02\u024C\u024D\t\n\x02" +
		"\x02\u024D\u0292\x05F$\x13\u024E\u024F\f\x11\x02\x02\u024F\u0250\t\v\x02" +
		"\x02\u0250\u0292\x05F$\x12\u0251\u0252\f\x10\x02\x02\u0252\u0253\t\f\x02" +
		"\x02\u0253\u0292\x05F$\x11\u0254\u0255\f\x0F\x02\x02\u0255\u0256\t\r\x02" +
		"\x02\u0256\u0292\x05F$\x10\u0257\u0258\f\x0E\x02\x02\u0258\u0259\x07n" +
		"\x02\x02\u0259\u0292\x05F$\x0F\u025A\u025B\f\r\x02\x02\u025B\u025C\x07" +
		"p\x02\x02\u025C\u0292\x05F$\x0E\u025D\u025E\f\f\x02\x02\u025E\u025F\x07" +
		"v\x02\x02\u025F\u0292\x05F$\r\u0260\u0261\f\v\x02\x02\u0261\u0262\t\x0E" +
		"\x02\x02\u0262\u0292\x05F$\f\u0263\u0264\f\n\x02\x02\u0264\u0265\t\x0F" +
		"\x02\x02\u0265\u0292\x05F$\v\u0266\u0267\f\t\x02\x02\u0267\u0268\x07j" +
		"\x02\x02\u0268\u0269\x05F$\x02\u0269\u026A\x07g\x02\x02\u026A\u026B\x05" +
		"F$\t\u026B\u0292\x03\x02\x02\x02\u026C\u026D\f\b\x02\x02\u026D\u026E\x07" +
		"T\x02\x02\u026E\u0292\x05F$\t\u026F\u0270\f\x04\x02\x02\u0270\u0271\x07" +
		"z\x02\x02\u0271\u0272\x05F$\x02\u0272\u0273\x07B\x02\x02\u0273\u0274\x05" +
		"F$\x05\u0274\u0292\x03\x02\x02\x02\u0275\u0276\f\x1B\x02\x02\u0276\u0277" +
		"\x07S\x02\x02\u0277\u0292\x07\x7F\x02\x02\u0278\u0279\f\x1A\x02\x02\u0279" +
		"\u027A\x07J\x02\x02\u027A\u027B\x05F$\x02\u027B\u027C\x07K\x02\x02\u027C" +
		"\u0292\x03\x02\x02\x02\u027D\u027E\f\x19\x02\x02\u027E\u0292\x07G\x02" +
		"\x02\u027F\u0280\f\x16\x02\x02\u0280\u028C\x07c\x02\x02\u0281\u0286\x05" +
		"F$\x02\u0282\u0283\x07O\x02\x02\u0283\u0285\x05F$\x02\u0284\u0282\x03" +
		"\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286" +
		"\u0287\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03\x02" +
		"\x02\x02\u0289\u028B\x07O\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B" +
		"\x03\x02\x02\x02\u028B\u028D\x03\x02\x02\x02\u028C\u0281\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u0292\x07" +
		"d\x02\x02\u028F\u0290\f\x07\x02\x02\u0290\u0292\x07X\x02\x02\u0291\u0245" +
		"\x03\x02\x02\x02\u0291\u0248\x03\x02\x02\x02\u0291\u024B\x03\x02\x02\x02" +
		"\u0291\u024E\x03\x02\x02\x02\u0291\u0251\x03\x02\x02\x02\u0291\u0254\x03" +
		"\x02\x02\x02\u0291\u0257\x03\x02\x02\x02\u0291\u025A\x03\x02\x02\x02\u0291" +
		"\u025D\x03\x02\x02\x02\u0291\u0260\x03\x02\x02\x02\u0291\u0263\x03\x02" +
		"\x02\x02\u0291\u0266\x03\x02\x02\x02\u0291\u026C\x03\x02\x02\x02\u0291" +
		"\u026F\x03\x02\x02\x02\u0291\u0275\x03\x02\x02\x02\u0291\u0278\x03\x02" +
		"\x02\x02\u0291\u027D\x03\x02\x02\x02\u0291\u027F\x03\x02\x02\x02\u0291" +
		"\u028F\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02" +
		"\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294G\x03\x02\x02\x02\u0295\u0293" +
		"\x03\x02\x02\x02\u0296\u0297\x07\x7F\x02\x02\u0297\u0298\x06%\x19\x02" +
		"\u0298I\x03\x02\x02\x02\u0299\u02A5\x07]\x02\x02\u029A\u029F\x056\x1C" +
		"\x02\u029B\u029C\x07O\x02\x02\u029C\u029E\x056\x1C\x02\u029D\u029B\x03" +
		"\x02\x02\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F" +
		"\u02A0\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02" +
		"\x02\x02\u02A2\u02A4\x07O\x02\x02\u02A3\u02A2\x03\x02\x02\x02\u02A3\u02A4" +
		"\x03\x02\x02\x02\u02A4\u02A6\x03\x02\x02\x02\u02A5\u029A\x03\x02\x02\x02" +
		"\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x07" +
		"[\x02\x02\u02A8K\x03\x02\x02\x02\u02A9\u02AA\t\x10\x02\x02\u02AAM\x03" +
		"\x02\x02\x02\u02AB\u02AC\t\x11\x02\x02\u02ACO\x03\x02\x02\x02\u02AD\u02AE" +
		"\t\x12\x02\x02\u02AEQ\x03\x02\x02\x02\u02AF\u02B0\t\x13\x02\x02\u02B0" +
		"S\x03\x02\x02\x02\u02B1\u02B8\x07\x89\x02\x02\u02B2\u02B3\x07\x8A\x02" +
		"\x02\u02B3\u02B4\x05F$\x02\u02B4\u02B5\x07I\x02\x02\u02B5\u02B8\x03\x02" +
		"\x02\x02\u02B6\u02B8\x07\x8B\x02\x02\u02B7\u02B1\x03\x02\x02\x02\u02B7" +
		"\u02B2\x03\x02\x02\x02\u02B7\u02B6\x03\x02\x02\x02\u02B8U\x03\x02\x02" +
		"\x02FYdntz\x86\x8A\x95\x9D\xA0\xA6\xB0\xB6\xC0\xC3\xCD\xD0\xD6\xE2\xEA" +
		"\xEC\xF4\xF8\xFD\u010E\u0111\u011B\u011E\u012C\u0130\u0132\u0141\u014A" +
		"\u014C\u014E\u018C\u019B\u01A7\u01AB\u01AD\u01B3\u01C0\u01C4\u01C6\u01C9" +
		"\u01E3\u01E7\u01E9\u01EC\u01F2\u01FB\u0203\u0210\u0214\u0216\u021F\u0223" +
		"\u0225\u0243\u0286\u028A\u028C\u0291\u0293\u029F\u02A3\u02A5\u02B7";
	public static readonly _serializedATN: string = Utils.join(
		[
			QSharpParser._serializedATNSegment0,
			QSharpParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QSharpParser.__ATN) {
			QSharpParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QSharpParser._serializedATN));
		}

		return QSharpParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(QSharpParser.EOF, 0); }
	public namespace(): NamespaceContext[];
	public namespace(i: number): NamespaceContext;
	public namespace(i?: number): NamespaceContext | NamespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceContext);
		} else {
			return this.getRuleContext(i, NamespaceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_document; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(QSharpParser.Namespace, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public BraceLeft(): TerminalNode { return this.getToken(QSharpParser.BraceLeft, 0); }
	public BraceRight(): TerminalNode { return this.getToken(QSharpParser.BraceRight, 0); }
	public namespaceElement(): NamespaceElementContext[];
	public namespaceElement(i: number): NamespaceElementContext;
	public namespaceElement(i?: number): NamespaceElementContext | NamespaceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceElementContext);
		} else {
			return this.getRuleContext(i, NamespaceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_namespace; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Identifier);
		} else {
			return this.getToken(QSharpParser.Identifier, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Dot);
		} else {
			return this.getToken(QSharpParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_namespaceElement; }
	public copyFrom(ctx: NamespaceElementContext): void {
		super.copyFrom(ctx);
	}
}
export class OpenElementContext extends NamespaceElementContext {
	public openDirective(): OpenDirectiveContext {
		return this.getRuleContext(0, OpenDirectiveContext);
	}
	constructor(ctx: NamespaceElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterOpenElement) {
			listener.enterOpenElement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitOpenElement) {
			listener.exitOpenElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitOpenElement) {
			return visitor.visitOpenElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeElementContext extends NamespaceElementContext {
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	constructor(ctx: NamespaceElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTypeElement) {
			listener.enterTypeElement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTypeElement) {
			listener.exitTypeElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeElement) {
			return visitor.visitTypeElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallableElementContext extends NamespaceElementContext {
	public callableDeclaration(): CallableDeclarationContext {
		return this.getRuleContext(0, CallableDeclarationContext);
	}
	constructor(ctx: NamespaceElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCallableElement) {
			listener.enterCallableElement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCallableElement) {
			listener.exitCallableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCallableElement) {
			return visitor.visitCallableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenDirectiveContext extends ParserRuleContext {
	public _name!: QualifiedNameContext;
	public _alias!: QualifiedNameContext;
	public Open(): TerminalNode { return this.getToken(QSharpParser.Open, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_openDirective; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterOpenDirective) {
			listener.enterOpenDirective(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitOpenDirective) {
			listener.exitOpenDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitOpenDirective) {
			return visitor.visitOpenDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(QSharpParser.At, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_attribute; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessContext extends ParserRuleContext {
	public Internal(): TerminalNode { return this.getToken(QSharpParser.Internal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_access; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAccess) {
			listener.enterAccess(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAccess) {
			listener.exitAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAccess) {
			return visitor.visitAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationPrefixContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public access(): AccessContext | undefined {
		return this.tryGetRuleContext(0, AccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_declarationPrefix; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterDeclarationPrefix) {
			listener.enterDeclarationPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitDeclarationPrefix) {
			listener.exitDeclarationPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitDeclarationPrefix) {
			return visitor.visitDeclarationPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public declarationPrefix(): DeclarationPrefixContext {
		return this.getRuleContext(0, DeclarationPrefixContext);
	}
	public Newtype(): TerminalNode { return this.getToken(QSharpParser.Newtype, 0); }
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	public Equal(): TerminalNode { return this.getToken(QSharpParser.Equal, 0); }
	public underlyingType(): UnderlyingTypeContext {
		return this.getRuleContext(0, UnderlyingTypeContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnderlyingTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_underlyingType; }
	public copyFrom(ctx: UnderlyingTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TupleUnderlyingTypeContext extends UnderlyingTypeContext {
	public typeDeclarationTuple(): TypeDeclarationTupleContext {
		return this.getRuleContext(0, TypeDeclarationTupleContext);
	}
	constructor(ctx: UnderlyingTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTupleUnderlyingType) {
			listener.enterTupleUnderlyingType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTupleUnderlyingType) {
			listener.exitTupleUnderlyingType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTupleUnderlyingType) {
			return visitor.visitTupleUnderlyingType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnnamedTypeItemContext extends UnderlyingTypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: UnderlyingTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUnnamedTypeItem) {
			listener.enterUnnamedTypeItem(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUnnamedTypeItem) {
			listener.exitUnnamedTypeItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUnnamedTypeItem) {
			return visitor.visitUnnamedTypeItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationTupleContext extends ParserRuleContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public typeTupleItem(): TypeTupleItemContext[];
	public typeTupleItem(i: number): TypeTupleItemContext;
	public typeTupleItem(i?: number): TypeTupleItemContext | TypeTupleItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTupleItemContext);
		} else {
			return this.getRuleContext(i, TypeTupleItemContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_typeDeclarationTuple; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTypeDeclarationTuple) {
			listener.enterTypeDeclarationTuple(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTypeDeclarationTuple) {
			listener.exitTypeDeclarationTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclarationTuple) {
			return visitor.visitTypeDeclarationTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTupleItemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_typeTupleItem; }
	public copyFrom(ctx: TypeTupleItemContext): void {
		super.copyFrom(ctx);
	}
}
export class NamedTypeItemContext extends TypeTupleItemContext {
	public namedItem(): NamedItemContext {
		return this.getRuleContext(0, NamedItemContext);
	}
	constructor(ctx: TypeTupleItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterNamedTypeItem) {
			listener.enterNamedTypeItem(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitNamedTypeItem) {
			listener.exitNamedTypeItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitNamedTypeItem) {
			return visitor.visitNamedTypeItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnderlyingTypeItemContext extends TypeTupleItemContext {
	public underlyingType(): UnderlyingTypeContext {
		return this.getRuleContext(0, UnderlyingTypeContext);
	}
	constructor(ctx: TypeTupleItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUnderlyingTypeItem) {
			listener.enterUnderlyingTypeItem(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUnderlyingTypeItem) {
			listener.exitUnderlyingTypeItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUnderlyingTypeItem) {
			return visitor.visitUnderlyingTypeItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedItemContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(QSharpParser.Colon, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_namedItem; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterNamedItem) {
			listener.enterNamedItem(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitNamedItem) {
			listener.exitNamedItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitNamedItem) {
			return visitor.visitNamedItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallableDeclarationContext extends ParserRuleContext {
	public _keyword!: Token;
	public _returnType!: TypeContext;
	public declarationPrefix(): DeclarationPrefixContext {
		return this.getRuleContext(0, DeclarationPrefixContext);
	}
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	public parameterTuple(): ParameterTupleContext {
		return this.getRuleContext(0, ParameterTupleContext);
	}
	public Colon(): TerminalNode { return this.getToken(QSharpParser.Colon, 0); }
	public callableBody(): CallableBodyContext {
		return this.getRuleContext(0, CallableBodyContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Function(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Function, 0); }
	public Operation(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Operation, 0); }
	public typeParameterBinding(): TypeParameterBindingContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterBindingContext);
	}
	public characteristics(): CharacteristicsContext | undefined {
		return this.tryGetRuleContext(0, CharacteristicsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_callableDeclaration; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCallableDeclaration) {
			listener.enterCallableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCallableDeclaration) {
			listener.exitCallableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCallableDeclaration) {
			return visitor.visitCallableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterBindingContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(QSharpParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(QSharpParser.Greater, 0); }
	public TypeParameter(): TerminalNode[];
	public TypeParameter(i: number): TerminalNode;
	public TypeParameter(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.TypeParameter);
		} else {
			return this.getToken(QSharpParser.TypeParameter, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_typeParameterBinding; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTypeParameterBinding) {
			listener.enterTypeParameterBinding(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTypeParameterBinding) {
			listener.exitTypeParameterBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterBinding) {
			return visitor.visitTypeParameterBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTupleContext extends ParserRuleContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_parameterTuple; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterParameterTuple) {
			listener.enterParameterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitParameterTuple) {
			listener.exitParameterTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitParameterTuple) {
			return visitor.visitParameterTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_parameter; }
	public copyFrom(ctx: ParameterContext): void {
		super.copyFrom(ctx);
	}
}
export class NamedParameterContext extends ParameterContext {
	public namedItem(): NamedItemContext {
		return this.getRuleContext(0, NamedItemContext);
	}
	constructor(ctx: ParameterContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterNamedParameter) {
			listener.enterNamedParameter(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitNamedParameter) {
			listener.exitNamedParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitNamedParameter) {
			return visitor.visitNamedParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupledParameterContext extends ParameterContext {
	public parameterTuple(): ParameterTupleContext {
		return this.getRuleContext(0, ParameterTupleContext);
	}
	constructor(ctx: ParameterContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTupledParameter) {
			listener.enterTupledParameter(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTupledParameter) {
			listener.exitTupledParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTupledParameter) {
			return visitor.visitTupledParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacteristicsContext extends ParserRuleContext {
	public Is(): TerminalNode { return this.getToken(QSharpParser.Is, 0); }
	public characteristicsExpression(): CharacteristicsExpressionContext {
		return this.getRuleContext(0, CharacteristicsExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_characteristics; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCharacteristics) {
			listener.enterCharacteristics(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCharacteristics) {
			listener.exitCharacteristics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCharacteristics) {
			return visitor.visitCharacteristics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacteristicsExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_characteristicsExpression; }
	public copyFrom(ctx: CharacteristicsExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AdjointCharacteristicsContext extends CharacteristicsExpressionContext {
	public Adj(): TerminalNode { return this.getToken(QSharpParser.Adj, 0); }
	constructor(ctx: CharacteristicsExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAdjointCharacteristics) {
			listener.enterAdjointCharacteristics(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAdjointCharacteristics) {
			listener.exitAdjointCharacteristics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAdjointCharacteristics) {
			return visitor.visitAdjointCharacteristics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ControlledCharacteristicsContext extends CharacteristicsExpressionContext {
	public Ctl(): TerminalNode { return this.getToken(QSharpParser.Ctl, 0); }
	constructor(ctx: CharacteristicsExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterControlledCharacteristics) {
			listener.enterControlledCharacteristics(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitControlledCharacteristics) {
			listener.exitControlledCharacteristics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitControlledCharacteristics) {
			return visitor.visitControlledCharacteristics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharacteristicGroupContext extends CharacteristicsExpressionContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public characteristicsExpression(): CharacteristicsExpressionContext {
		return this.getRuleContext(0, CharacteristicsExpressionContext);
	}
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	constructor(ctx: CharacteristicsExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCharacteristicGroup) {
			listener.enterCharacteristicGroup(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCharacteristicGroup) {
			listener.exitCharacteristicGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCharacteristicGroup) {
			return visitor.visitCharacteristicGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntersectCharacteristicsContext extends CharacteristicsExpressionContext {
	public _left!: CharacteristicsExpressionContext;
	public _right!: CharacteristicsExpressionContext;
	public Asterisk(): TerminalNode { return this.getToken(QSharpParser.Asterisk, 0); }
	public characteristicsExpression(): CharacteristicsExpressionContext[];
	public characteristicsExpression(i: number): CharacteristicsExpressionContext;
	public characteristicsExpression(i?: number): CharacteristicsExpressionContext | CharacteristicsExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CharacteristicsExpressionContext);
		} else {
			return this.getRuleContext(i, CharacteristicsExpressionContext);
		}
	}
	constructor(ctx: CharacteristicsExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterIntersectCharacteristics) {
			listener.enterIntersectCharacteristics(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitIntersectCharacteristics) {
			listener.exitIntersectCharacteristics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitIntersectCharacteristics) {
			return visitor.visitIntersectCharacteristics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionCharacteristicsContext extends CharacteristicsExpressionContext {
	public _left!: CharacteristicsExpressionContext;
	public _right!: CharacteristicsExpressionContext;
	public Plus(): TerminalNode { return this.getToken(QSharpParser.Plus, 0); }
	public characteristicsExpression(): CharacteristicsExpressionContext[];
	public characteristicsExpression(i: number): CharacteristicsExpressionContext;
	public characteristicsExpression(i?: number): CharacteristicsExpressionContext | CharacteristicsExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CharacteristicsExpressionContext);
		} else {
			return this.getRuleContext(i, CharacteristicsExpressionContext);
		}
	}
	constructor(ctx: CharacteristicsExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUnionCharacteristics) {
			listener.enterUnionCharacteristics(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUnionCharacteristics) {
			listener.exitUnionCharacteristics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUnionCharacteristics) {
			return visitor.visitUnionCharacteristics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallableBodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_callableBody; }
	public copyFrom(ctx: CallableBodyContext): void {
		super.copyFrom(ctx);
	}
}
export class CallableStatementsContext extends CallableBodyContext {
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: CallableBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCallableStatements) {
			listener.enterCallableStatements(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCallableStatements) {
			listener.exitCallableStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCallableStatements) {
			return visitor.visitCallableStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallableSpecializationsContext extends CallableBodyContext {
	public BraceLeft(): TerminalNode { return this.getToken(QSharpParser.BraceLeft, 0); }
	public BraceRight(): TerminalNode { return this.getToken(QSharpParser.BraceRight, 0); }
	public specialization(): SpecializationContext[];
	public specialization(i: number): SpecializationContext;
	public specialization(i?: number): SpecializationContext | SpecializationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecializationContext);
		} else {
			return this.getRuleContext(i, SpecializationContext);
		}
	}
	constructor(ctx: CallableBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCallableSpecializations) {
			listener.enterCallableSpecializations(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCallableSpecializations) {
			listener.exitCallableSpecializations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCallableSpecializations) {
			return visitor.visitCallableSpecializations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecializationContext extends ParserRuleContext {
	public specializationGenerator(): SpecializationGeneratorContext {
		return this.getRuleContext(0, SpecializationGeneratorContext);
	}
	public specializationName(): SpecializationNameContext[];
	public specializationName(i: number): SpecializationNameContext;
	public specializationName(i?: number): SpecializationNameContext | SpecializationNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecializationNameContext);
		} else {
			return this.getRuleContext(i, SpecializationNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_specialization; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSpecialization) {
			listener.enterSpecialization(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSpecialization) {
			listener.exitSpecialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSpecialization) {
			return visitor.visitSpecialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecializationNameContext extends ParserRuleContext {
	public Body(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Body, 0); }
	public AdjointGenerator(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.AdjointGenerator, 0); }
	public ControlledGenerator(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ControlledGenerator, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_specializationName; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSpecializationName) {
			listener.enterSpecializationName(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSpecializationName) {
			listener.exitSpecializationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSpecializationName) {
			return visitor.visitSpecializationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecializationGeneratorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_specializationGenerator; }
	public copyFrom(ctx: SpecializationGeneratorContext): void {
		super.copyFrom(ctx);
	}
}
export class AutoGeneratorContext extends SpecializationGeneratorContext {
	public Auto(): TerminalNode { return this.getToken(QSharpParser.Auto, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: SpecializationGeneratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAutoGenerator) {
			listener.enterAutoGenerator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAutoGenerator) {
			listener.exitAutoGenerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAutoGenerator) {
			return visitor.visitAutoGenerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelfGeneratorContext extends SpecializationGeneratorContext {
	public Self(): TerminalNode { return this.getToken(QSharpParser.Self, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: SpecializationGeneratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSelfGenerator) {
			listener.enterSelfGenerator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSelfGenerator) {
			listener.exitSelfGenerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSelfGenerator) {
			return visitor.visitSelfGenerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InvertGeneratorContext extends SpecializationGeneratorContext {
	public Invert(): TerminalNode { return this.getToken(QSharpParser.Invert, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: SpecializationGeneratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterInvertGenerator) {
			listener.enterInvertGenerator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitInvertGenerator) {
			listener.exitInvertGenerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitInvertGenerator) {
			return visitor.visitInvertGenerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistributeGeneratorContext extends SpecializationGeneratorContext {
	public Distribute(): TerminalNode { return this.getToken(QSharpParser.Distribute, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: SpecializationGeneratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterDistributeGenerator) {
			listener.enterDistributeGenerator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitDistributeGenerator) {
			listener.exitDistributeGenerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitDistributeGenerator) {
			return visitor.visitDistributeGenerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntrinsicGeneratorContext extends SpecializationGeneratorContext {
	public Intrinsic(): TerminalNode { return this.getToken(QSharpParser.Intrinsic, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: SpecializationGeneratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterIntrinsicGenerator) {
			listener.enterIntrinsicGenerator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitIntrinsicGenerator) {
			listener.exitIntrinsicGenerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitIntrinsicGenerator) {
			return visitor.visitIntrinsicGenerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProvidedGeneratorContext extends SpecializationGeneratorContext {
	public providedSpecialization(): ProvidedSpecializationContext {
		return this.getRuleContext(0, ProvidedSpecializationContext);
	}
	constructor(ctx: SpecializationGeneratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterProvidedGenerator) {
			listener.enterProvidedGenerator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitProvidedGenerator) {
			listener.exitProvidedGenerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitProvidedGenerator) {
			return visitor.visitProvidedGenerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProvidedSpecializationContext extends ParserRuleContext {
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public specializationParameterTuple(): SpecializationParameterTupleContext | undefined {
		return this.tryGetRuleContext(0, SpecializationParameterTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_providedSpecialization; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterProvidedSpecialization) {
			listener.enterProvidedSpecialization(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitProvidedSpecialization) {
			listener.exitProvidedSpecialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitProvidedSpecialization) {
			return visitor.visitProvidedSpecialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecializationParameterTupleContext extends ParserRuleContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public specializationParameter(): SpecializationParameterContext[];
	public specializationParameter(i: number): SpecializationParameterContext;
	public specializationParameter(i?: number): SpecializationParameterContext | SpecializationParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecializationParameterContext);
		} else {
			return this.getRuleContext(i, SpecializationParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_specializationParameterTuple; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSpecializationParameterTuple) {
			listener.enterSpecializationParameterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSpecializationParameterTuple) {
			listener.exitSpecializationParameterTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSpecializationParameterTuple) {
			return visitor.visitSpecializationParameterTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecializationParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Identifier, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_specializationParameter; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSpecializationParameter) {
			listener.enterSpecializationParameter(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSpecializationParameter) {
			listener.exitSpecializationParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSpecializationParameter) {
			return visitor.visitSpecializationParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class MissingTypeContext extends TypeContext {
	public Underscore(): TerminalNode { return this.getToken(QSharpParser.Underscore, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterMissingType) {
			listener.enterMissingType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitMissingType) {
			listener.exitMissingType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitMissingType) {
			return visitor.visitMissingType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTypeContext extends TypeContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParameterContext extends TypeContext {
	public TypeParameter(): TerminalNode { return this.getToken(QSharpParser.TypeParameter, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public BracketLeft(): TerminalNode { return this.getToken(QSharpParser.BracketLeft, 0); }
	public BracketRight(): TerminalNode { return this.getToken(QSharpParser.BracketRight, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallableTypeContext extends TypeContext {
	public _from!: TypeContext;
	public _arrow!: Token;
	public _to!: TypeContext;
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public ArrowRight(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ArrowRight, 0); }
	public FatArrowRight(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.FatArrowRight, 0); }
	public characteristics(): CharacteristicsContext | undefined {
		return this.tryGetRuleContext(0, CharacteristicsContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCallableType) {
			listener.enterCallableType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCallableType) {
			listener.exitCallableType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCallableType) {
			return visitor.visitCallableType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BigIntTypeContext extends TypeContext {
	public BigInt(): TerminalNode { return this.getToken(QSharpParser.BigInt, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBigIntType) {
			listener.enterBigIntType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBigIntType) {
			listener.exitBigIntType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBigIntType) {
			return visitor.visitBigIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolTypeContext extends TypeContext {
	public Bool(): TerminalNode { return this.getToken(QSharpParser.Bool, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBoolType) {
			listener.enterBoolType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBoolType) {
			listener.exitBoolType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBoolType) {
			return visitor.visitBoolType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleTypeContext extends TypeContext {
	public Double(): TerminalNode { return this.getToken(QSharpParser.Double, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterDoubleType) {
			listener.enterDoubleType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitDoubleType) {
			listener.exitDoubleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitDoubleType) {
			return visitor.visitDoubleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntTypeContext extends TypeContext {
	public Int(): TerminalNode { return this.getToken(QSharpParser.Int, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterIntType) {
			listener.enterIntType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitIntType) {
			listener.exitIntType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitIntType) {
			return visitor.visitIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PauliTypeContext extends TypeContext {
	public Pauli(): TerminalNode { return this.getToken(QSharpParser.Pauli, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterPauliType) {
			listener.enterPauliType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitPauliType) {
			listener.exitPauliType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitPauliType) {
			return visitor.visitPauliType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QubitTypeContext extends TypeContext {
	public Qubit(): TerminalNode { return this.getToken(QSharpParser.Qubit, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterQubitType) {
			listener.enterQubitType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitQubitType) {
			listener.exitQubitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitQubitType) {
			return visitor.visitQubitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeTypeContext extends TypeContext {
	public Range(): TerminalNode { return this.getToken(QSharpParser.Range, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterRangeType) {
			listener.enterRangeType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitRangeType) {
			listener.exitRangeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitRangeType) {
			return visitor.visitRangeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResultTypeContext extends TypeContext {
	public Result(): TerminalNode { return this.getToken(QSharpParser.Result, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterResultType) {
			listener.enterResultType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitResultType) {
			listener.exitResultType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitResultType) {
			return visitor.visitResultType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringTypeContext extends TypeContext {
	public String(): TerminalNode { return this.getToken(QSharpParser.String, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterStringType) {
			listener.enterStringType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitStringType) {
			listener.exitStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitStringType) {
			return visitor.visitStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitTypeContext extends TypeContext {
	public Unit(): TerminalNode { return this.getToken(QSharpParser.Unit, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUnitType) {
			listener.enterUnitType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUnitType) {
			listener.exitUnitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUnitType) {
			return visitor.visitUnitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserDefinedTypeContext extends TypeContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUserDefinedType) {
			listener.enterUserDefinedType(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUserDefinedType) {
			listener.exitUserDefinedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUserDefinedType) {
			return visitor.visitUserDefinedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(QSharpParser.Return, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailStatementContext extends StatementContext {
	public Fail(): TerminalNode { return this.getToken(QSharpParser.Fail, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterFailStatement) {
			listener.enterFailStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitFailStatement) {
			listener.exitFailStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitFailStatement) {
			return visitor.visitFailStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetStatementContext extends StatementContext {
	public Let(): TerminalNode { return this.getToken(QSharpParser.Let, 0); }
	public symbolBinding(): SymbolBindingContext {
		return this.getRuleContext(0, SymbolBindingContext);
	}
	public Equal(): TerminalNode { return this.getToken(QSharpParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterLetStatement) {
			listener.enterLetStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitLetStatement) {
			listener.exitLetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitLetStatement) {
			return visitor.visitLetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MutableStatementContext extends StatementContext {
	public Mutable(): TerminalNode { return this.getToken(QSharpParser.Mutable, 0); }
	public symbolBinding(): SymbolBindingContext {
		return this.getRuleContext(0, SymbolBindingContext);
	}
	public Equal(): TerminalNode { return this.getToken(QSharpParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterMutableStatement) {
			listener.enterMutableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitMutableStatement) {
			listener.exitMutableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitMutableStatement) {
			return visitor.visitMutableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetStatementContext extends StatementContext {
	public Set(): TerminalNode { return this.getToken(QSharpParser.Set, 0); }
	public symbolBinding(): SymbolBindingContext {
		return this.getRuleContext(0, SymbolBindingContext);
	}
	public Equal(): TerminalNode { return this.getToken(QSharpParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSetStatement) {
			listener.enterSetStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSetStatement) {
			listener.exitSetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSetStatement) {
			return visitor.visitSetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateStatementContext extends StatementContext {
	public Set(): TerminalNode { return this.getToken(QSharpParser.Set, 0); }
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	public updateOperator(): UpdateOperatorContext {
		return this.getRuleContext(0, UpdateOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUpdateStatement) {
			listener.enterUpdateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUpdateStatement) {
			listener.exitUpdateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUpdateStatement) {
			return visitor.visitUpdateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateWithStatementContext extends StatementContext {
	public _index!: ExpressionContext;
	public _value!: ExpressionContext;
	public Set(): TerminalNode { return this.getToken(QSharpParser.Set, 0); }
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	public WithEqual(): TerminalNode { return this.getToken(QSharpParser.WithEqual, 0); }
	public ArrowLeft(): TerminalNode { return this.getToken(QSharpParser.ArrowLeft, 0); }
	public Semicolon(): TerminalNode { return this.getToken(QSharpParser.Semicolon, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUpdateWithStatement) {
			listener.enterUpdateWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUpdateWithStatement) {
			listener.exitUpdateWithStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUpdateWithStatement) {
			return visitor.visitUpdateWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStatementContext extends StatementContext {
	public If(): TerminalNode { return this.getToken(QSharpParser.If, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ElifStatementContext extends StatementContext {
	public Elif(): TerminalNode { return this.getToken(QSharpParser.Elif, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterElifStatement) {
			listener.enterElifStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitElifStatement) {
			listener.exitElifStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitElifStatement) {
			return visitor.visitElifStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ElseStatementContext extends StatementContext {
	public Else(): TerminalNode { return this.getToken(QSharpParser.Else, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitElseStatement) {
			listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends StatementContext {
	public For(): TerminalNode { return this.getToken(QSharpParser.For, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public forBinding(): ForBindingContext | undefined {
		return this.tryGetRuleContext(0, ForBindingContext);
	}
	public ParenLeft(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ParenRight, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends StatementContext {
	public While(): TerminalNode { return this.getToken(QSharpParser.While, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeatStatementContext extends StatementContext {
	public Repeat(): TerminalNode { return this.getToken(QSharpParser.Repeat, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterRepeatStatement) {
			listener.enterRepeatStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitRepeatStatement) {
			listener.exitRepeatStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitRepeatStatement) {
			return visitor.visitRepeatStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UntilStatementContext extends StatementContext {
	public Until(): TerminalNode { return this.getToken(QSharpParser.Until, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Semicolon, 0); }
	public Fixup(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Fixup, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUntilStatement) {
			listener.enterUntilStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUntilStatement) {
			listener.exitUntilStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUntilStatement) {
			return visitor.visitUntilStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WithinStatementContext extends StatementContext {
	public Within(): TerminalNode { return this.getToken(QSharpParser.Within, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterWithinStatement) {
			listener.enterWithinStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitWithinStatement) {
			listener.exitWithinStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitWithinStatement) {
			return visitor.visitWithinStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyStatementContext extends StatementContext {
	public Apply(): TerminalNode { return this.getToken(QSharpParser.Apply, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterApplyStatement) {
			listener.enterApplyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitApplyStatement) {
			listener.exitApplyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitApplyStatement) {
			return visitor.visitApplyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QubitDeclarationContext extends StatementContext {
	public _keyword!: Token;
	public Use(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Use, 0); }
	public Using(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Using, 0); }
	public Borrow(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Borrow, 0); }
	public Borrowing(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Borrowing, 0); }
	public qubitBinding(): QubitBindingContext | undefined {
		return this.tryGetRuleContext(0, QubitBindingContext);
	}
	public ParenLeft(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ParenRight, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Semicolon, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterQubitDeclaration) {
			listener.enterQubitDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitQubitDeclaration) {
			listener.exitQubitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitQubitDeclaration) {
			return visitor.visitQubitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public BraceLeft(): TerminalNode { return this.getToken(QSharpParser.BraceLeft, 0); }
	public BraceRight(): TerminalNode { return this.getToken(QSharpParser.BraceRight, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_scope; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterScope) {
			listener.enterScope(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitScope) {
			listener.exitScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolBindingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_symbolBinding; }
	public copyFrom(ctx: SymbolBindingContext): void {
		super.copyFrom(ctx);
	}
}
export class DiscardSymbolContext extends SymbolBindingContext {
	public Underscore(): TerminalNode { return this.getToken(QSharpParser.Underscore, 0); }
	constructor(ctx: SymbolBindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterDiscardSymbol) {
			listener.enterDiscardSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitDiscardSymbol) {
			listener.exitDiscardSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitDiscardSymbol) {
			return visitor.visitDiscardSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SymbolNameContext extends SymbolBindingContext {
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	constructor(ctx: SymbolBindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSymbolName) {
			listener.enterSymbolName(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSymbolName) {
			listener.exitSymbolName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSymbolName) {
			return visitor.visitSymbolName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SymbolTupleContext extends SymbolBindingContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public symbolBinding(): SymbolBindingContext[];
	public symbolBinding(i: number): SymbolBindingContext;
	public symbolBinding(i?: number): SymbolBindingContext | SymbolBindingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolBindingContext);
		} else {
			return this.getRuleContext(i, SymbolBindingContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(ctx: SymbolBindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSymbolTuple) {
			listener.enterSymbolTuple(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSymbolTuple) {
			listener.exitSymbolTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSymbolTuple) {
			return visitor.visitSymbolTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateOperatorContext extends ParserRuleContext {
	public CaretEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.CaretEqual, 0); }
	public AsteriskEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.AsteriskEqual, 0); }
	public SlashEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.SlashEqual, 0); }
	public PercentEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.PercentEqual, 0); }
	public PlusEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.PlusEqual, 0); }
	public MinusEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.MinusEqual, 0); }
	public TripleGreaterEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleGreaterEqual, 0); }
	public TripleLessEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleLessEqual, 0); }
	public TripleAmpersandEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleAmpersandEqual, 0); }
	public TripleCaretEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleCaretEqual, 0); }
	public TriplePipeEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TriplePipeEqual, 0); }
	public AndEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.AndEqual, 0); }
	public OrEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.OrEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_updateOperator; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUpdateOperator) {
			listener.enterUpdateOperator(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUpdateOperator) {
			listener.exitUpdateOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUpdateOperator) {
			return visitor.visitUpdateOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForBindingContext extends ParserRuleContext {
	public symbolBinding(): SymbolBindingContext {
		return this.getRuleContext(0, SymbolBindingContext);
	}
	public In(): TerminalNode { return this.getToken(QSharpParser.In, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_forBinding; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterForBinding) {
			listener.enterForBinding(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitForBinding) {
			listener.exitForBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitForBinding) {
			return visitor.visitForBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QubitBindingContext extends ParserRuleContext {
	public symbolBinding(): SymbolBindingContext {
		return this.getRuleContext(0, SymbolBindingContext);
	}
	public Equal(): TerminalNode { return this.getToken(QSharpParser.Equal, 0); }
	public qubitInitializer(): QubitInitializerContext {
		return this.getRuleContext(0, QubitInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_qubitBinding; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterQubitBinding) {
			listener.enterQubitBinding(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitQubitBinding) {
			listener.exitQubitBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitQubitBinding) {
			return visitor.visitQubitBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QubitInitializerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_qubitInitializer; }
	public copyFrom(ctx: QubitInitializerContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleQubitContext extends QubitInitializerContext {
	public Qubit(): TerminalNode { return this.getToken(QSharpParser.Qubit, 0); }
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	constructor(ctx: QubitInitializerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSingleQubit) {
			listener.enterSingleQubit(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSingleQubit) {
			listener.exitSingleQubit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSingleQubit) {
			return visitor.visitSingleQubit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QubitArrayContext extends QubitInitializerContext {
	public _length!: ExpressionContext;
	public Qubit(): TerminalNode { return this.getToken(QSharpParser.Qubit, 0); }
	public BracketLeft(): TerminalNode { return this.getToken(QSharpParser.BracketLeft, 0); }
	public BracketRight(): TerminalNode { return this.getToken(QSharpParser.BracketRight, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: QubitInitializerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterQubitArray) {
			listener.enterQubitArray(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitQubitArray) {
			listener.exitQubitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitQubitArray) {
			return visitor.visitQubitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QubitTupleContext extends QubitInitializerContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public qubitInitializer(): QubitInitializerContext[];
	public qubitInitializer(i: number): QubitInitializerContext;
	public qubitInitializer(i?: number): QubitInitializerContext | QubitInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QubitInitializerContext);
		} else {
			return this.getRuleContext(i, QubitInitializerContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(ctx: QubitInitializerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterQubitTuple) {
			listener.enterQubitTuple(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitQubitTuple) {
			listener.exitQubitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitQubitTuple) {
			return visitor.visitQubitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MissingExpressionContext extends ExpressionContext {
	public Underscore(): TerminalNode { return this.getToken(QSharpParser.Underscore, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterMissingExpression) {
			listener.enterMissingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitMissingExpression) {
			listener.exitMissingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitMissingExpression) {
			return visitor.visitMissingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public typeTuple(): TypeTupleContext | undefined {
		return this.tryGetRuleContext(0, TypeTupleContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerExpressionContext extends ExpressionContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(QSharpParser.IntegerLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterIntegerExpression) {
			listener.enterIntegerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitIntegerExpression) {
			listener.exitIntegerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitIntegerExpression) {
			return visitor.visitIntegerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BigIntegerExpressionContext extends ExpressionContext {
	public BigIntegerLiteral(): TerminalNode { return this.getToken(QSharpParser.BigIntegerLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBigIntegerExpression) {
			listener.enterBigIntegerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBigIntegerExpression) {
			listener.exitBigIntegerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBigIntegerExpression) {
			return visitor.visitBigIntegerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleExpressionContext extends ExpressionContext {
	public DoubleLiteral(): TerminalNode { return this.getToken(QSharpParser.DoubleLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterDoubleExpression) {
			listener.enterDoubleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitDoubleExpression) {
			listener.exitDoubleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitDoubleExpression) {
			return visitor.visitDoubleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public DoubleQuote(): TerminalNode { return this.getToken(QSharpParser.DoubleQuote, 0); }
	public StringDoubleQuote(): TerminalNode { return this.getToken(QSharpParser.StringDoubleQuote, 0); }
	public stringContent(): StringContentContext[];
	public stringContent(i: number): StringContentContext;
	public stringContent(i?: number): StringContentContext | StringContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContentContext);
		} else {
			return this.getRuleContext(i, StringContentContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InterpStringExpressionContext extends ExpressionContext {
	public DollarQuote(): TerminalNode { return this.getToken(QSharpParser.DollarQuote, 0); }
	public InterpDoubleQuote(): TerminalNode { return this.getToken(QSharpParser.InterpDoubleQuote, 0); }
	public interpStringContent(): InterpStringContentContext[];
	public interpStringContent(i: number): InterpStringContentContext;
	public interpStringContent(i?: number): InterpStringContentContext | InterpStringContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterpStringContentContext);
		} else {
			return this.getRuleContext(i, InterpStringContentContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterInterpStringExpression) {
			listener.enterInterpStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitInterpStringExpression) {
			listener.exitInterpStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpStringExpression) {
			return visitor.visitInterpStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolExpressionContext extends ExpressionContext {
	public boolLiteral(): BoolLiteralContext {
		return this.getRuleContext(0, BoolLiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBoolExpression) {
			listener.enterBoolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBoolExpression) {
			listener.exitBoolExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBoolExpression) {
			return visitor.visitBoolExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResultExpressionContext extends ExpressionContext {
	public resultLiteral(): ResultLiteralContext {
		return this.getRuleContext(0, ResultLiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterResultExpression) {
			listener.enterResultExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitResultExpression) {
			listener.exitResultExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitResultExpression) {
			return visitor.visitResultExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PauliExpressionContext extends ExpressionContext {
	public pauliLiteral(): PauliLiteralContext {
		return this.getRuleContext(0, PauliLiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterPauliExpression) {
			listener.enterPauliExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitPauliExpression) {
			listener.exitPauliExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitPauliExpression) {
			return visitor.visitPauliExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExpressionContext extends ExpressionContext {
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public BracketLeft(): TerminalNode { return this.getToken(QSharpParser.BracketLeft, 0); }
	public BracketRight(): TerminalNode { return this.getToken(QSharpParser.BracketRight, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SizedArrayExpressionContext extends ExpressionContext {
	public _value!: ExpressionContext;
	public _length!: ExpressionContext;
	public BracketLeft(): TerminalNode { return this.getToken(QSharpParser.BracketLeft, 0); }
	public Comma(): TerminalNode { return this.getToken(QSharpParser.Comma, 0); }
	public size(): SizeContext {
		return this.getRuleContext(0, SizeContext);
	}
	public Equal(): TerminalNode { return this.getToken(QSharpParser.Equal, 0); }
	public BracketRight(): TerminalNode { return this.getToken(QSharpParser.BracketRight, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSizedArrayExpression) {
			listener.enterSizedArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSizedArrayExpression) {
			listener.exitSizedArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSizedArrayExpression) {
			return visitor.visitSizedArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewArrayExpressionContext extends ExpressionContext {
	public _length!: ExpressionContext;
	public New(): TerminalNode { return this.getToken(QSharpParser.New, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public BracketLeft(): TerminalNode { return this.getToken(QSharpParser.BracketLeft, 0); }
	public BracketRight(): TerminalNode { return this.getToken(QSharpParser.BracketRight, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterNewArrayExpression) {
			listener.enterNewArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitNewArrayExpression) {
			listener.exitNewArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitNewArrayExpression) {
			return visitor.visitNewArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedItemAccessExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DoubleColon(): TerminalNode { return this.getToken(QSharpParser.DoubleColon, 0); }
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterNamedItemAccessExpression) {
			listener.enterNamedItemAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitNamedItemAccessExpression) {
			listener.exitNamedItemAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitNamedItemAccessExpression) {
			return visitor.visitNamedItemAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayAccessExpressionContext extends ExpressionContext {
	public _array!: ExpressionContext;
	public _index!: ExpressionContext;
	public BracketLeft(): TerminalNode { return this.getToken(QSharpParser.BracketLeft, 0); }
	public BracketRight(): TerminalNode { return this.getToken(QSharpParser.BracketRight, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterArrayAccessExpression) {
			listener.enterArrayAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitArrayAccessExpression) {
			listener.exitArrayAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitArrayAccessExpression) {
			return visitor.visitArrayAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnwrapExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Bang(): TerminalNode { return this.getToken(QSharpParser.Bang, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUnwrapExpression) {
			listener.enterUnwrapExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUnwrapExpression) {
			listener.exitUnwrapExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUnwrapExpression) {
			return visitor.visitUnwrapExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ControlledExpressionContext extends ExpressionContext {
	public ControlledFunctor(): TerminalNode { return this.getToken(QSharpParser.ControlledFunctor, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterControlledExpression) {
			listener.enterControlledExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitControlledExpression) {
			listener.exitControlledExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitControlledExpression) {
			return visitor.visitControlledExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdjointExpressionContext extends ExpressionContext {
	public AdjointFunctor(): TerminalNode { return this.getToken(QSharpParser.AdjointFunctor, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAdjointExpression) {
			listener.enterAdjointExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAdjointExpression) {
			listener.exitAdjointExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAdjointExpression) {
			return visitor.visitAdjointExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExpressionContext extends ExpressionContext {
	public _callable!: ExpressionContext;
	public _expression!: ExpressionContext;
	public _args: ExpressionContext[] = [];
	public ParenLeft(): TerminalNode { return this.getToken(QSharpParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(QSharpParser.ParenRight, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCallExpression) {
			listener.enterCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCallExpression) {
			listener.exitCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrefixOpExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Bang(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Bang, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Minus, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Not, 0); }
	public TripleTilde(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleTilde, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterPrefixOpExpression) {
			listener.enterPrefixOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitPrefixOpExpression) {
			listener.exitPrefixOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitPrefixOpExpression) {
			return visitor.visitPrefixOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExponentExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public Caret(): TerminalNode { return this.getToken(QSharpParser.Caret, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterExponentExpression) {
			listener.enterExponentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitExponentExpression) {
			listener.exitExponentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitExponentExpression) {
			return visitor.visitExponentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Slash, 0); }
	public Percent(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Percent, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterMultiplyExpression) {
			listener.enterMultiplyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitMultiplyExpression) {
			listener.exitMultiplyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitMultiplyExpression) {
			return visitor.visitMultiplyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAddExpression) {
			listener.enterAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAddExpression) {
			listener.exitAddExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAddExpression) {
			return visitor.visitAddExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TripleGreater(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleGreater, 0); }
	public TripleLess(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.TripleLess, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompareExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Greater, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Less, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.GreaterEqual, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.LessEqual, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterCompareExpression) {
			listener.enterCompareExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitCompareExpression) {
			listener.exitCompareExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitCompareExpression) {
			return visitor.visitCompareExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DoubleEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.DoubleEqual, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.NotEqual, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterEqualsExpression) {
			listener.enterEqualsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitEqualsExpression) {
			listener.exitEqualsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitEqualsExpression) {
			return visitor.visitEqualsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public TripleAmpersand(): TerminalNode { return this.getToken(QSharpParser.TripleAmpersand, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBitwiseAndExpression) {
			listener.enterBitwiseAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBitwiseAndExpression) {
			listener.exitBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBitwiseAndExpression) {
			return visitor.visitBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseXorExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public TripleCaret(): TerminalNode { return this.getToken(QSharpParser.TripleCaret, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBitwiseXorExpression) {
			listener.enterBitwiseXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBitwiseXorExpression) {
			listener.exitBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBitwiseXorExpression) {
			return visitor.visitBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public TriplePipe(): TerminalNode { return this.getToken(QSharpParser.TriplePipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBitwiseOrExpression) {
			listener.enterBitwiseOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBitwiseOrExpression) {
			listener.exitBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBitwiseOrExpression) {
			return visitor.visitBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DoubleAmpersand(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.DoubleAmpersand, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.And, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DoublePipe(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.DoublePipe, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Or, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalExpressionContext extends ExpressionContext {
	public _cond!: ExpressionContext;
	public _then!: ExpressionContext;
	public _else!: ExpressionContext;
	public Question(): TerminalNode { return this.getToken(QSharpParser.Question, 0); }
	public Pipe(): TerminalNode { return this.getToken(QSharpParser.Pipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public DoubleDot(): TerminalNode { return this.getToken(QSharpParser.DoubleDot, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterRangeExpression) {
			listener.enterRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitRangeExpression) {
			listener.exitRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitRangeExpression) {
			return visitor.visitRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RightOpenRangeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Ellipsis(): TerminalNode { return this.getToken(QSharpParser.Ellipsis, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterRightOpenRangeExpression) {
			listener.enterRightOpenRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitRightOpenRangeExpression) {
			listener.exitRightOpenRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitRightOpenRangeExpression) {
			return visitor.visitRightOpenRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LeftOpenRangeExpressionContext extends ExpressionContext {
	public Ellipsis(): TerminalNode { return this.getToken(QSharpParser.Ellipsis, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterLeftOpenRangeExpression) {
			listener.enterLeftOpenRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitLeftOpenRangeExpression) {
			listener.exitLeftOpenRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitLeftOpenRangeExpression) {
			return visitor.visitLeftOpenRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpenRangeExpressionContext extends ExpressionContext {
	public Ellipsis(): TerminalNode { return this.getToken(QSharpParser.Ellipsis, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterOpenRangeExpression) {
			listener.enterOpenRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitOpenRangeExpression) {
			listener.exitOpenRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitOpenRangeExpression) {
			return visitor.visitOpenRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateExpressionContext extends ExpressionContext {
	public _record!: ExpressionContext;
	public _index!: ExpressionContext;
	public _value!: ExpressionContext;
	public With(): TerminalNode { return this.getToken(QSharpParser.With, 0); }
	public ArrowLeft(): TerminalNode { return this.getToken(QSharpParser.ArrowLeft, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterUpdateExpression) {
			listener.enterUpdateExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitUpdateExpression) {
			listener.exitUpdateExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitUpdateExpression) {
			return visitor.visitUpdateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public _arrow!: Token;
	public symbolBinding(): SymbolBindingContext {
		return this.getRuleContext(0, SymbolBindingContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ArrowRight(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.ArrowRight, 0); }
	public FatArrowRight(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.FatArrowRight, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(QSharpParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_size; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterSize) {
			listener.enterSize(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitSize) {
			listener.exitSize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitSize) {
			return visitor.visitSize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTupleContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(QSharpParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(QSharpParser.Greater, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QSharpParser.Comma);
		} else {
			return this.getToken(QSharpParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_typeTuple; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterTypeTuple) {
			listener.enterTypeTuple(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitTypeTuple) {
			listener.exitTypeTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolLiteralContext extends ParserRuleContext {
	public False(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.False, 0); }
	public True(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.True, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_boolLiteral; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterBoolLiteral) {
			listener.enterBoolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitBoolLiteral) {
			listener.exitBoolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitBoolLiteral) {
			return visitor.visitBoolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultLiteralContext extends ParserRuleContext {
	public Zero(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.Zero, 0); }
	public One(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.One, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_resultLiteral; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterResultLiteral) {
			listener.enterResultLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitResultLiteral) {
			listener.exitResultLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitResultLiteral) {
			return visitor.visitResultLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PauliLiteralContext extends ParserRuleContext {
	public PauliI(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.PauliI, 0); }
	public PauliX(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.PauliX, 0); }
	public PauliY(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.PauliY, 0); }
	public PauliZ(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.PauliZ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_pauliLiteral; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterPauliLiteral) {
			listener.enterPauliLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitPauliLiteral) {
			listener.exitPauliLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitPauliLiteral) {
			return visitor.visitPauliLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContentContext extends ParserRuleContext {
	public StringEscape(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.StringEscape, 0); }
	public StringText(): TerminalNode | undefined { return this.tryGetToken(QSharpParser.StringText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_stringContent; }
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterStringContent) {
			listener.enterStringContent(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitStringContent) {
			listener.exitStringContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitStringContent) {
			return visitor.visitStringContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpStringContentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QSharpParser.RULE_interpStringContent; }
	public copyFrom(ctx: InterpStringContentContext): void {
		super.copyFrom(ctx);
	}
}
export class InterpStringEscapeContentContext extends InterpStringContentContext {
	public InterpStringEscape(): TerminalNode { return this.getToken(QSharpParser.InterpStringEscape, 0); }
	constructor(ctx: InterpStringContentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterInterpStringEscapeContent) {
			listener.enterInterpStringEscapeContent(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitInterpStringEscapeContent) {
			listener.exitInterpStringEscapeContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpStringEscapeContent) {
			return visitor.visitInterpStringEscapeContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InterpExpressionContentContext extends InterpStringContentContext {
	public InterpBraceLeft(): TerminalNode { return this.getToken(QSharpParser.InterpBraceLeft, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public BraceRight(): TerminalNode { return this.getToken(QSharpParser.BraceRight, 0); }
	constructor(ctx: InterpStringContentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterInterpExpressionContent) {
			listener.enterInterpExpressionContent(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitInterpExpressionContent) {
			listener.exitInterpExpressionContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpExpressionContent) {
			return visitor.visitInterpExpressionContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InterpTextContentContext extends InterpStringContentContext {
	public InterpStringText(): TerminalNode { return this.getToken(QSharpParser.InterpStringText, 0); }
	constructor(ctx: InterpStringContentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: QSharpParserListener): void {
		if (listener.enterInterpTextContent) {
			listener.enterInterpTextContent(this);
		}
	}
	// @Override
	public exitRule(listener: QSharpParserListener): void {
		if (listener.exitInterpTextContent) {
			listener.exitInterpTextContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpTextContent) {
			return visitor.visitInterpTextContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


