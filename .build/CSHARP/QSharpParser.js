var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  AccessContext: () => AccessContext,
  AddExpressionContext: () => AddExpressionContext,
  AdjointCharacteristicsContext: () => AdjointCharacteristicsContext,
  AdjointExpressionContext: () => AdjointExpressionContext,
  AndExpressionContext: () => AndExpressionContext,
  ApplyStatementContext: () => ApplyStatementContext,
  ArrayAccessExpressionContext: () => ArrayAccessExpressionContext,
  ArrayExpressionContext: () => ArrayExpressionContext,
  ArrayTypeContext: () => ArrayTypeContext,
  AttributeContext: () => AttributeContext,
  AutoGeneratorContext: () => AutoGeneratorContext,
  BigIntTypeContext: () => BigIntTypeContext,
  BigIntegerExpressionContext: () => BigIntegerExpressionContext,
  BitwiseAndExpressionContext: () => BitwiseAndExpressionContext,
  BitwiseOrExpressionContext: () => BitwiseOrExpressionContext,
  BitwiseXorExpressionContext: () => BitwiseXorExpressionContext,
  BoolExpressionContext: () => BoolExpressionContext,
  BoolLiteralContext: () => BoolLiteralContext,
  BoolTypeContext: () => BoolTypeContext,
  CallExpressionContext: () => CallExpressionContext,
  CallableBodyContext: () => CallableBodyContext,
  CallableDeclarationContext: () => CallableDeclarationContext,
  CallableElementContext: () => CallableElementContext,
  CallableSpecializationsContext: () => CallableSpecializationsContext,
  CallableStatementsContext: () => CallableStatementsContext,
  CallableTypeContext: () => CallableTypeContext,
  CharacteristicGroupContext: () => CharacteristicGroupContext,
  CharacteristicsContext: () => CharacteristicsContext,
  CharacteristicsExpressionContext: () => CharacteristicsExpressionContext,
  CompareExpressionContext: () => CompareExpressionContext,
  ConditionalExpressionContext: () => ConditionalExpressionContext,
  ControlledCharacteristicsContext: () => ControlledCharacteristicsContext,
  ControlledExpressionContext: () => ControlledExpressionContext,
  DeclarationPrefixContext: () => DeclarationPrefixContext,
  DiscardSymbolContext: () => DiscardSymbolContext,
  DistributeGeneratorContext: () => DistributeGeneratorContext,
  DocumentContext: () => DocumentContext,
  DoubleExpressionContext: () => DoubleExpressionContext,
  DoubleTypeContext: () => DoubleTypeContext,
  ElifStatementContext: () => ElifStatementContext,
  ElseStatementContext: () => ElseStatementContext,
  EqualsExpressionContext: () => EqualsExpressionContext,
  ExponentExpressionContext: () => ExponentExpressionContext,
  ExpressionContext: () => ExpressionContext,
  ExpressionStatementContext: () => ExpressionStatementContext,
  FailStatementContext: () => FailStatementContext,
  ForBindingContext: () => ForBindingContext,
  ForStatementContext: () => ForStatementContext,
  IdentifierExpressionContext: () => IdentifierExpressionContext,
  IfStatementContext: () => IfStatementContext,
  IntTypeContext: () => IntTypeContext,
  IntegerExpressionContext: () => IntegerExpressionContext,
  InterpExpressionContentContext: () => InterpExpressionContentContext,
  InterpStringContentContext: () => InterpStringContentContext,
  InterpStringEscapeContentContext: () => InterpStringEscapeContentContext,
  InterpStringExpressionContext: () => InterpStringExpressionContext,
  InterpTextContentContext: () => InterpTextContentContext,
  IntersectCharacteristicsContext: () => IntersectCharacteristicsContext,
  IntrinsicGeneratorContext: () => IntrinsicGeneratorContext,
  InvertGeneratorContext: () => InvertGeneratorContext,
  LambdaExpressionContext: () => LambdaExpressionContext,
  LeftOpenRangeExpressionContext: () => LeftOpenRangeExpressionContext,
  LetStatementContext: () => LetStatementContext,
  MissingExpressionContext: () => MissingExpressionContext,
  MissingTypeContext: () => MissingTypeContext,
  MultiplyExpressionContext: () => MultiplyExpressionContext,
  MutableStatementContext: () => MutableStatementContext,
  NamedItemAccessExpressionContext: () => NamedItemAccessExpressionContext,
  NamedItemContext: () => NamedItemContext,
  NamedParameterContext: () => NamedParameterContext,
  NamedTypeItemContext: () => NamedTypeItemContext,
  NamespaceContext: () => NamespaceContext,
  NamespaceElementContext: () => NamespaceElementContext,
  NewArrayExpressionContext: () => NewArrayExpressionContext,
  OpenDirectiveContext: () => OpenDirectiveContext,
  OpenElementContext: () => OpenElementContext,
  OpenRangeExpressionContext: () => OpenRangeExpressionContext,
  OrExpressionContext: () => OrExpressionContext,
  ParameterContext: () => ParameterContext,
  ParameterTupleContext: () => ParameterTupleContext,
  PauliExpressionContext: () => PauliExpressionContext,
  PauliLiteralContext: () => PauliLiteralContext,
  PauliTypeContext: () => PauliTypeContext,
  PrefixOpExpressionContext: () => PrefixOpExpressionContext,
  ProvidedGeneratorContext: () => ProvidedGeneratorContext,
  ProvidedSpecializationContext: () => ProvidedSpecializationContext,
  QSharpParser: () => QSharpParser,
  QualifiedNameContext: () => QualifiedNameContext,
  QubitArrayContext: () => QubitArrayContext,
  QubitBindingContext: () => QubitBindingContext,
  QubitDeclarationContext: () => QubitDeclarationContext,
  QubitInitializerContext: () => QubitInitializerContext,
  QubitTupleContext: () => QubitTupleContext,
  QubitTypeContext: () => QubitTypeContext,
  RangeExpressionContext: () => RangeExpressionContext,
  RangeTypeContext: () => RangeTypeContext,
  RepeatStatementContext: () => RepeatStatementContext,
  ResultExpressionContext: () => ResultExpressionContext,
  ResultLiteralContext: () => ResultLiteralContext,
  ResultTypeContext: () => ResultTypeContext,
  ReturnStatementContext: () => ReturnStatementContext,
  RightOpenRangeExpressionContext: () => RightOpenRangeExpressionContext,
  ScopeContext: () => ScopeContext,
  SelfGeneratorContext: () => SelfGeneratorContext,
  SetStatementContext: () => SetStatementContext,
  ShiftExpressionContext: () => ShiftExpressionContext,
  SingleQubitContext: () => SingleQubitContext,
  SizeContext: () => SizeContext,
  SizedArrayExpressionContext: () => SizedArrayExpressionContext,
  SpecializationContext: () => SpecializationContext,
  SpecializationGeneratorContext: () => SpecializationGeneratorContext,
  SpecializationNameContext: () => SpecializationNameContext,
  SpecializationParameterContext: () => SpecializationParameterContext,
  SpecializationParameterTupleContext: () => SpecializationParameterTupleContext,
  StatementContext: () => StatementContext,
  StringContentContext: () => StringContentContext,
  StringExpressionContext: () => StringExpressionContext,
  StringTypeContext: () => StringTypeContext,
  SymbolBindingContext: () => SymbolBindingContext,
  SymbolNameContext: () => SymbolNameContext,
  SymbolTupleContext: () => SymbolTupleContext,
  TupleExpressionContext: () => TupleExpressionContext,
  TupleTypeContext: () => TupleTypeContext,
  TupleUnderlyingTypeContext: () => TupleUnderlyingTypeContext,
  TupledParameterContext: () => TupledParameterContext,
  TypeContext: () => TypeContext,
  TypeDeclarationContext: () => TypeDeclarationContext,
  TypeDeclarationTupleContext: () => TypeDeclarationTupleContext,
  TypeElementContext: () => TypeElementContext,
  TypeParameterBindingContext: () => TypeParameterBindingContext,
  TypeParameterContext: () => TypeParameterContext,
  TypeTupleContext: () => TypeTupleContext,
  TypeTupleItemContext: () => TypeTupleItemContext,
  UnderlyingTypeContext: () => UnderlyingTypeContext,
  UnderlyingTypeItemContext: () => UnderlyingTypeItemContext,
  UnionCharacteristicsContext: () => UnionCharacteristicsContext,
  UnitTypeContext: () => UnitTypeContext,
  UnnamedTypeItemContext: () => UnnamedTypeItemContext,
  UntilStatementContext: () => UntilStatementContext,
  UnwrapExpressionContext: () => UnwrapExpressionContext,
  UpdateExpressionContext: () => UpdateExpressionContext,
  UpdateOperatorContext: () => UpdateOperatorContext,
  UpdateStatementContext: () => UpdateStatementContext,
  UpdateWithStatementContext: () => UpdateWithStatementContext,
  UserDefinedTypeContext: () => UserDefinedTypeContext,
  WhileStatementContext: () => WhileStatementContext,
  WithinStatementContext: () => WithinStatementContext
});
var import_ATN = __toModule(require("antlr4ts/atn/ATN"));
var import_ATNDeserializer = __toModule(require("antlr4ts/atn/ATNDeserializer"));
var import_FailedPredicateException = __toModule(require("antlr4ts/FailedPredicateException"));
var import_NoViableAltException = __toModule(require("antlr4ts/NoViableAltException"));
var import_Parser = __toModule(require("antlr4ts/Parser"));
var import_ParserRuleContext = __toModule(require("antlr4ts/ParserRuleContext"));
var import_ParserATNSimulator = __toModule(require("antlr4ts/atn/ParserATNSimulator"));
var import_RecognitionException = __toModule(require("antlr4ts/RecognitionException"));
var import_Token = __toModule(require("antlr4ts/Token"));
var import_VocabularyImpl = __toModule(require("antlr4ts/VocabularyImpl"));
var Utils = __toModule(require("antlr4ts/misc/Utils"));
class QSharpParser extends import_Parser.Parser {
  static Adj = 1;
  static AdjointFunctor = 2;
  static AdjointGenerator = 3;
  static And = 4;
  static Apply = 5;
  static As = 6;
  static Auto = 7;
  static BigInt = 8;
  static Body = 9;
  static Bool = 10;
  static Borrow = 11;
  static Borrowing = 12;
  static ControlledFunctor = 13;
  static ControlledGenerator = 14;
  static Ctl = 15;
  static Distribute = 16;
  static Double = 17;
  static Elif = 18;
  static Else = 19;
  static Fail = 20;
  static False = 21;
  static Fixup = 22;
  static For = 23;
  static Function = 24;
  static If = 25;
  static In = 26;
  static Int = 27;
  static Internal = 28;
  static Intrinsic = 29;
  static Invert = 30;
  static Is = 31;
  static Let = 32;
  static Mutable = 33;
  static Namespace = 34;
  static New = 35;
  static Newtype = 36;
  static Not = 37;
  static One = 38;
  static Open = 39;
  static Operation = 40;
  static Or = 41;
  static Pauli = 42;
  static PauliI = 43;
  static PauliX = 44;
  static PauliY = 45;
  static PauliZ = 46;
  static Qubit = 47;
  static Range = 48;
  static Repeat = 49;
  static Result = 50;
  static Return = 51;
  static Self = 52;
  static Set = 53;
  static String = 54;
  static True = 55;
  static Unit = 56;
  static Until = 57;
  static Use = 58;
  static Using = 59;
  static While = 60;
  static Within = 61;
  static Zero = 62;
  static AndEqual = 63;
  static ArrowLeft = 64;
  static ArrowRight = 65;
  static Asterisk = 66;
  static AsteriskEqual = 67;
  static At = 68;
  static Bang = 69;
  static BraceLeft = 70;
  static BraceRight = 71;
  static BracketLeft = 72;
  static BracketRight = 73;
  static Caret = 74;
  static CaretEqual = 75;
  static Colon = 76;
  static Comma = 77;
  static DollarQuote = 78;
  static Dot = 79;
  static DoubleAmpersand = 80;
  static DoubleColon = 81;
  static DoubleDot = 82;
  static DoubleEqual = 83;
  static DoublePipe = 84;
  static DoubleQuote = 85;
  static Ellipsis = 86;
  static Equal = 87;
  static FatArrowRight = 88;
  static Greater = 89;
  static GreaterEqual = 90;
  static Less = 91;
  static LessEqual = 92;
  static Minus = 93;
  static MinusEqual = 94;
  static NotEqual = 95;
  static OrEqual = 96;
  static ParenLeft = 97;
  static ParenRight = 98;
  static Percent = 99;
  static PercentEqual = 100;
  static Pipe = 101;
  static Plus = 102;
  static PlusEqual = 103;
  static Question = 104;
  static Semicolon = 105;
  static Slash = 106;
  static SlashEqual = 107;
  static TripleAmpersand = 108;
  static TripleAmpersandEqual = 109;
  static TripleCaret = 110;
  static TripleCaretEqual = 111;
  static TripleGreater = 112;
  static TripleGreaterEqual = 113;
  static TripleLess = 114;
  static TripleLessEqual = 115;
  static TriplePipe = 116;
  static TriplePipeEqual = 117;
  static TripleTilde = 118;
  static Underscore = 119;
  static With = 120;
  static WithEqual = 121;
  static IntegerLiteral = 122;
  static BigIntegerLiteral = 123;
  static DoubleLiteral = 124;
  static Identifier = 125;
  static IdentifierStart = 126;
  static IdentifierContinuation = 127;
  static TypeParameter = 128;
  static Whitespace = 129;
  static Comment = 130;
  static Invalid = 131;
  static StringEscape = 132;
  static StringText = 133;
  static StringDoubleQuote = 134;
  static InterpStringEscape = 135;
  static InterpBraceLeft = 136;
  static InterpStringText = 137;
  static InterpDoubleQuote = 138;
  static RULE_document = 0;
  static RULE_namespace = 1;
  static RULE_qualifiedName = 2;
  static RULE_namespaceElement = 3;
  static RULE_openDirective = 4;
  static RULE_attribute = 5;
  static RULE_access = 6;
  static RULE_declarationPrefix = 7;
  static RULE_typeDeclaration = 8;
  static RULE_underlyingType = 9;
  static RULE_typeDeclarationTuple = 10;
  static RULE_typeTupleItem = 11;
  static RULE_namedItem = 12;
  static RULE_callableDeclaration = 13;
  static RULE_typeParameterBinding = 14;
  static RULE_parameterTuple = 15;
  static RULE_parameter = 16;
  static RULE_characteristics = 17;
  static RULE_characteristicsExpression = 18;
  static RULE_callableBody = 19;
  static RULE_specialization = 20;
  static RULE_specializationName = 21;
  static RULE_specializationGenerator = 22;
  static RULE_providedSpecialization = 23;
  static RULE_specializationParameterTuple = 24;
  static RULE_specializationParameter = 25;
  static RULE_type = 26;
  static RULE_statement = 27;
  static RULE_scope = 28;
  static RULE_symbolBinding = 29;
  static RULE_updateOperator = 30;
  static RULE_forBinding = 31;
  static RULE_qubitBinding = 32;
  static RULE_qubitInitializer = 33;
  static RULE_expression = 34;
  static RULE_size = 35;
  static RULE_typeTuple = 36;
  static RULE_boolLiteral = 37;
  static RULE_resultLiteral = 38;
  static RULE_pauliLiteral = 39;
  static RULE_stringContent = 40;
  static RULE_interpStringContent = 41;
  static ruleNames = [
    "document",
    "namespace",
    "qualifiedName",
    "namespaceElement",
    "openDirective",
    "attribute",
    "access",
    "declarationPrefix",
    "typeDeclaration",
    "underlyingType",
    "typeDeclarationTuple",
    "typeTupleItem",
    "namedItem",
    "callableDeclaration",
    "typeParameterBinding",
    "parameterTuple",
    "parameter",
    "characteristics",
    "characteristicsExpression",
    "callableBody",
    "specialization",
    "specializationName",
    "specializationGenerator",
    "providedSpecialization",
    "specializationParameterTuple",
    "specializationParameter",
    "type",
    "statement",
    "scope",
    "symbolBinding",
    "updateOperator",
    "forBinding",
    "qubitBinding",
    "qubitInitializer",
    "expression",
    "size",
    "typeTuple",
    "boolLiteral",
    "resultLiteral",
    "pauliLiteral",
    "stringContent",
    "interpStringContent"
  ];
  static _LITERAL_NAMES = [
    void 0,
    "'Adj'",
    "'Adjoint'",
    "'adjoint'",
    "'and'",
    "'apply'",
    "'as'",
    "'auto'",
    "'BigInt'",
    "'body'",
    "'Bool'",
    "'borrow'",
    "'borrowing'",
    "'Controlled'",
    "'controlled'",
    "'Ctl'",
    "'distribute'",
    "'Double'",
    "'elif'",
    "'else'",
    "'fail'",
    "'false'",
    "'fixup'",
    "'for'",
    "'function'",
    "'if'",
    "'in'",
    "'Int'",
    "'internal'",
    "'intrinsic'",
    "'invert'",
    "'is'",
    "'let'",
    "'mutable'",
    "'namespace'",
    "'new'",
    "'newtype'",
    "'not'",
    "'One'",
    "'open'",
    "'operation'",
    "'or'",
    "'Pauli'",
    "'PauliI'",
    "'PauliX'",
    "'PauliY'",
    "'PauliZ'",
    "'Qubit'",
    "'Range'",
    "'repeat'",
    "'Result'",
    "'return'",
    "'self'",
    "'set'",
    "'String'",
    "'true'",
    "'Unit'",
    "'until'",
    "'use'",
    "'using'",
    "'while'",
    "'within'",
    "'Zero'",
    "'and='",
    "'<-'",
    "'->'",
    "'*'",
    "'*='",
    "'@'",
    "'!'",
    void 0,
    "'}'",
    "'['",
    "']'",
    "'^'",
    "'^='",
    "':'",
    "','",
    `'$"'`,
    "'.'",
    "'&&'",
    "'::'",
    "'..'",
    "'=='",
    "'||'",
    void 0,
    "'...'",
    "'='",
    "'=>'",
    "'>'",
    "'>='",
    "'<'",
    "'<='",
    "'-'",
    "'-='",
    "'!='",
    "'or='",
    "'('",
    "')'",
    "'%'",
    "'%='",
    "'|'",
    "'+'",
    "'+='",
    "'?'",
    "';'",
    "'/'",
    "'/='",
    "'&&&'",
    "'&&&='",
    "'^^^'",
    "'^^^='",
    "'>>>'",
    "'>>>='",
    "'<<<'",
    "'<<<='",
    "'|||'",
    "'|||='",
    "'~~~'",
    "'_'",
    "'w/'",
    "'w/='"
  ];
  static _SYMBOLIC_NAMES = [
    void 0,
    "Adj",
    "AdjointFunctor",
    "AdjointGenerator",
    "And",
    "Apply",
    "As",
    "Auto",
    "BigInt",
    "Body",
    "Bool",
    "Borrow",
    "Borrowing",
    "ControlledFunctor",
    "ControlledGenerator",
    "Ctl",
    "Distribute",
    "Double",
    "Elif",
    "Else",
    "Fail",
    "False",
    "Fixup",
    "For",
    "Function",
    "If",
    "In",
    "Int",
    "Internal",
    "Intrinsic",
    "Invert",
    "Is",
    "Let",
    "Mutable",
    "Namespace",
    "New",
    "Newtype",
    "Not",
    "One",
    "Open",
    "Operation",
    "Or",
    "Pauli",
    "PauliI",
    "PauliX",
    "PauliY",
    "PauliZ",
    "Qubit",
    "Range",
    "Repeat",
    "Result",
    "Return",
    "Self",
    "Set",
    "String",
    "True",
    "Unit",
    "Until",
    "Use",
    "Using",
    "While",
    "Within",
    "Zero",
    "AndEqual",
    "ArrowLeft",
    "ArrowRight",
    "Asterisk",
    "AsteriskEqual",
    "At",
    "Bang",
    "BraceLeft",
    "BraceRight",
    "BracketLeft",
    "BracketRight",
    "Caret",
    "CaretEqual",
    "Colon",
    "Comma",
    "DollarQuote",
    "Dot",
    "DoubleAmpersand",
    "DoubleColon",
    "DoubleDot",
    "DoubleEqual",
    "DoublePipe",
    "DoubleQuote",
    "Ellipsis",
    "Equal",
    "FatArrowRight",
    "Greater",
    "GreaterEqual",
    "Less",
    "LessEqual",
    "Minus",
    "MinusEqual",
    "NotEqual",
    "OrEqual",
    "ParenLeft",
    "ParenRight",
    "Percent",
    "PercentEqual",
    "Pipe",
    "Plus",
    "PlusEqual",
    "Question",
    "Semicolon",
    "Slash",
    "SlashEqual",
    "TripleAmpersand",
    "TripleAmpersandEqual",
    "TripleCaret",
    "TripleCaretEqual",
    "TripleGreater",
    "TripleGreaterEqual",
    "TripleLess",
    "TripleLessEqual",
    "TriplePipe",
    "TriplePipeEqual",
    "TripleTilde",
    "Underscore",
    "With",
    "WithEqual",
    "IntegerLiteral",
    "BigIntegerLiteral",
    "DoubleLiteral",
    "Identifier",
    "IdentifierStart",
    "IdentifierContinuation",
    "TypeParameter",
    "Whitespace",
    "Comment",
    "Invalid",
    "StringEscape",
    "StringText",
    "StringDoubleQuote",
    "InterpStringEscape",
    "InterpBraceLeft",
    "InterpStringText",
    "InterpDoubleQuote"
  ];
  static VOCABULARY = new import_VocabularyImpl.VocabularyImpl(QSharpParser._LITERAL_NAMES, QSharpParser._SYMBOLIC_NAMES, []);
  get vocabulary() {
    return QSharpParser.VOCABULARY;
  }
  get grammarFileName() {
    return "QSharpParser.g4";
  }
  get ruleNames() {
    return QSharpParser.ruleNames;
  }
  get serializedATN() {
    return QSharpParser._serializedATN;
  }
  createFailedPredicateException(predicate, message) {
    return new import_FailedPredicateException.FailedPredicateException(this, predicate, message);
  }
  constructor(input) {
    super(input);
    this._interp = new import_ParserATNSimulator.ParserATNSimulator(QSharpParser._ATN, this);
  }
  document() {
    let _localctx = new DocumentContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, QSharpParser.RULE_document);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namespace() {
    let _localctx = new NamespaceContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, QSharpParser.RULE_namespace);
    let _la;
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
        while ((_la - 24 & ~31) === 0 && (1 << _la - 24 & (1 << QSharpParser.Function - 24 | 1 << QSharpParser.Internal - 24 | 1 << QSharpParser.Newtype - 24 | 1 << QSharpParser.Open - 24 | 1 << QSharpParser.Operation - 24)) !== 0 || _la === QSharpParser.At) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  qualifiedName() {
    let _localctx = new QualifiedNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, QSharpParser.RULE_qualifiedName);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 103;
        this.match(QSharpParser.Identifier);
        this.state = 108;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
        while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namespaceElement() {
    let _localctx = new NamespaceElementContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, QSharpParser.RULE_namespaceElement);
    try {
      this.state = 114;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  openDirective() {
    let _localctx = new OpenDirectiveContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, QSharpParser.RULE_openDirective);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attribute() {
    let _localctx = new AttributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, QSharpParser.RULE_attribute);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 124;
        this.match(QSharpParser.At);
        this.state = 125;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  access() {
    let _localctx = new AccessContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, QSharpParser.RULE_access);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 127;
        this.match(QSharpParser.Internal);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declarationPrefix() {
    let _localctx = new DeclarationPrefixContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, QSharpParser.RULE_declarationPrefix);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeDeclaration() {
    let _localctx = new TypeDeclarationContext(this._ctx, this.state);
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  underlyingType() {
    let _localctx = new UnderlyingTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, QSharpParser.RULE_underlyingType);
    try {
      this.state = 147;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeDeclarationTuple() {
    let _localctx = new TypeDeclarationTupleContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, QSharpParser.RULE_typeDeclarationTuple);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 149;
        this.match(QSharpParser.ParenLeft);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.BigInt | 1 << QSharpParser.Bool | 1 << QSharpParser.Double | 1 << QSharpParser.Int)) !== 0 || (_la - 42 & ~31) === 0 && (1 << _la - 42 & (1 << QSharpParser.Pauli - 42 | 1 << QSharpParser.Qubit - 42 | 1 << QSharpParser.Range - 42 | 1 << QSharpParser.Result - 42 | 1 << QSharpParser.String - 42 | 1 << QSharpParser.Unit - 42)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << QSharpParser.ParenLeft - 97 | 1 << QSharpParser.Underscore - 97 | 1 << QSharpParser.Identifier - 97 | 1 << QSharpParser.TypeParameter - 97)) !== 0) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeTupleItem() {
    let _localctx = new TypeTupleItemContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, QSharpParser.RULE_typeTupleItem);
    try {
      this.state = 164;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namedItem() {
    let _localctx = new NamedItemContext(this._ctx, this.state);
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  callableDeclaration() {
    let _localctx = new CallableDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, QSharpParser.RULE_callableDeclaration);
    let _la;
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
          if (this._input.LA(1) === import_Token.Token.EOF) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeParameterBinding() {
    let _localctx = new TypeParameterBindingContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, QSharpParser.RULE_typeParameterBinding);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  parameterTuple() {
    let _localctx = new ParameterTupleContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, QSharpParser.RULE_parameterTuple);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  parameter() {
    let _localctx = new ParameterContext(this._ctx, this.state);
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
          throw new import_NoViableAltException.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  characteristics() {
    let _localctx = new CharacteristicsContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, QSharpParser.RULE_characteristics);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 214;
        this.match(QSharpParser.Is);
        this.state = 215;
        this.characteristicsExpression(0);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  characteristicsExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new CharacteristicsExpressionContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 36;
    this.enterRecursionRule(_localctx, 36, QSharpParser.RULE_characteristicsExpression, _p);
    try {
      let _alt;
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
            throw new import_NoViableAltException.NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 234;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
        while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 232;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                  {
                    _localctx = new IntersectCharacteristicsContext(new CharacteristicsExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_characteristicsExpression);
                    this.state = 226;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                    }
                    this.state = 227;
                    this.match(QSharpParser.Asterisk);
                    this.state = 228;
                    _localctx._right = this.characteristicsExpression(3);
                  }
                  break;
                case 2:
                  {
                    _localctx = new UnionCharacteristicsContext(new CharacteristicsExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_characteristicsExpression);
                    this.state = 229;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                    }
                    this.state = 230;
                    this.match(QSharpParser.Plus);
                    this.state = 231;
                    _localctx._right = this.characteristicsExpression(2);
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  callableBody() {
    let _localctx = new CallableBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, QSharpParser.RULE_callableBody);
    let _la;
    try {
      this.state = 246;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
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
            while ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointGenerator | 1 << QSharpParser.Body | 1 << QSharpParser.ControlledGenerator)) !== 0) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  specialization() {
    let _localctx = new SpecializationContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, QSharpParser.RULE_specialization);
    let _la;
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
        } while ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointGenerator | 1 << QSharpParser.Body | 1 << QSharpParser.ControlledGenerator)) !== 0);
        this.state = 253;
        this.specializationGenerator();
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  specializationName() {
    let _localctx = new SpecializationNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, QSharpParser.RULE_specializationName);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 255;
        _la = this._input.LA(1);
        if (!((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointGenerator | 1 << QSharpParser.Body | 1 << QSharpParser.ControlledGenerator)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  specializationGenerator() {
    let _localctx = new SpecializationGeneratorContext(this._ctx, this.state);
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
          throw new import_NoViableAltException.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  providedSpecialization() {
    let _localctx = new ProvidedSpecializationContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, QSharpParser.RULE_providedSpecialization);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  specializationParameterTuple() {
    let _localctx = new SpecializationParameterTupleContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, QSharpParser.RULE_specializationParameterTuple);
    let _la;
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  specializationParameter() {
    let _localctx = new SpecializationParameterContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, QSharpParser.RULE_specializationParameter);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 288;
        _la = this._input.LA(1);
        if (!(_la === QSharpParser.Ellipsis || _la === QSharpParser.Identifier)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  type(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new TypeContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 52;
    this.enterRecursionRule(_localctx, 52, QSharpParser.RULE_type, _p);
    let _la;
    try {
      let _alt;
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
              if ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.BigInt | 1 << QSharpParser.Bool | 1 << QSharpParser.Double | 1 << QSharpParser.Int)) !== 0 || (_la - 42 & ~31) === 0 && (1 << _la - 42 & (1 << QSharpParser.Pauli - 42 | 1 << QSharpParser.Qubit - 42 | 1 << QSharpParser.Range - 42 | 1 << QSharpParser.Result - 42 | 1 << QSharpParser.String - 42 | 1 << QSharpParser.Unit - 42)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << QSharpParser.ParenLeft - 97 | 1 << QSharpParser.Underscore - 97 | 1 << QSharpParser.Identifier - 97 | 1 << QSharpParser.TypeParameter - 97)) !== 0) {
                {
                  this.state = 293;
                  this.type(0);
                  this.state = 298;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                  while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
            throw new import_NoViableAltException.NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 332;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
        while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 330;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                  {
                    _localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_type);
                    this.state = 321;
                    if (!this.precpred(this._ctx, 13)) {
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
                    _localctx._from = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_type);
                    this.state = 324;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                    }
                    this.state = 325;
                    _localctx._arrow = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.ArrowRight || _la === QSharpParser.FatArrowRight)) {
                      _localctx._arrow = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 326;
                    _localctx._to = this.type(0);
                    this.state = 328;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  statement() {
    let _localctx = new StatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, QSharpParser.RULE_statement);
    let _la;
    try {
      this.state = 427;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
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
            _localctx._index = this.expression(0);
            this.state = 374;
            this.match(QSharpParser.ArrowLeft);
            this.state = 375;
            _localctx._value = this.expression(0);
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
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
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
                throw new import_NoViableAltException.NoViableAltException(this);
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
            _localctx._keyword = this._input.LT(1);
            _la = this._input.LA(1);
            if (!(_la === QSharpParser.Borrow || _la === QSharpParser.Borrowing || _la === QSharpParser.Use || _la === QSharpParser.Using)) {
              _localctx._keyword = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === import_Token.Token.EOF) {
                this.matchedEOF = true;
              }
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 421;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
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
                throw new import_NoViableAltException.NoViableAltException(this);
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  scope() {
    let _localctx = new ScopeContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, QSharpParser.RULE_scope);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 429;
        this.match(QSharpParser.BraceLeft);
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointFunctor | 1 << QSharpParser.Apply | 1 << QSharpParser.Borrow | 1 << QSharpParser.Borrowing | 1 << QSharpParser.ControlledFunctor | 1 << QSharpParser.Elif | 1 << QSharpParser.Else | 1 << QSharpParser.Fail | 1 << QSharpParser.False | 1 << QSharpParser.For | 1 << QSharpParser.If)) !== 0 || (_la - 32 & ~31) === 0 && (1 << _la - 32 & (1 << QSharpParser.Let - 32 | 1 << QSharpParser.Mutable - 32 | 1 << QSharpParser.New - 32 | 1 << QSharpParser.Not - 32 | 1 << QSharpParser.One - 32 | 1 << QSharpParser.PauliI - 32 | 1 << QSharpParser.PauliX - 32 | 1 << QSharpParser.PauliY - 32 | 1 << QSharpParser.PauliZ - 32 | 1 << QSharpParser.Repeat - 32 | 1 << QSharpParser.Return - 32 | 1 << QSharpParser.Set - 32 | 1 << QSharpParser.True - 32 | 1 << QSharpParser.Until - 32 | 1 << QSharpParser.Use - 32 | 1 << QSharpParser.Using - 32 | 1 << QSharpParser.While - 32 | 1 << QSharpParser.Within - 32 | 1 << QSharpParser.Zero - 32)) !== 0 || (_la - 69 & ~31) === 0 && (1 << _la - 69 & (1 << QSharpParser.Bang - 69 | 1 << QSharpParser.BracketLeft - 69 | 1 << QSharpParser.DollarQuote - 69 | 1 << QSharpParser.DoubleQuote - 69 | 1 << QSharpParser.Ellipsis - 69 | 1 << QSharpParser.Minus - 69 | 1 << QSharpParser.ParenLeft - 69)) !== 0 || (_la - 102 & ~31) === 0 && (1 << _la - 102 & (1 << QSharpParser.Plus - 102 | 1 << QSharpParser.TripleTilde - 102 | 1 << QSharpParser.Underscore - 102 | 1 << QSharpParser.IntegerLiteral - 102 | 1 << QSharpParser.BigIntegerLiteral - 102 | 1 << QSharpParser.DoubleLiteral - 102 | 1 << QSharpParser.Identifier - 102)) !== 0) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  symbolBinding() {
    let _localctx = new SymbolBindingContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, QSharpParser.RULE_symbolBinding);
    let _la;
    try {
      let _alt;
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
            if ((_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << QSharpParser.ParenLeft - 97 | 1 << QSharpParser.Underscore - 97 | 1 << QSharpParser.Identifier - 97)) !== 0) {
              {
                this.state = 441;
                this.symbolBinding();
                this.state = 446;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
          throw new import_NoViableAltException.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  updateOperator() {
    let _localctx = new UpdateOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, QSharpParser.RULE_updateOperator);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 457;
        _la = this._input.LA(1);
        if (!((_la - 63 & ~31) === 0 && (1 << _la - 63 & (1 << QSharpParser.AndEqual - 63 | 1 << QSharpParser.AsteriskEqual - 63 | 1 << QSharpParser.CaretEqual - 63 | 1 << QSharpParser.MinusEqual - 63)) !== 0 || (_la - 96 & ~31) === 0 && (1 << _la - 96 & (1 << QSharpParser.OrEqual - 96 | 1 << QSharpParser.PercentEqual - 96 | 1 << QSharpParser.PlusEqual - 96 | 1 << QSharpParser.SlashEqual - 96 | 1 << QSharpParser.TripleAmpersandEqual - 96 | 1 << QSharpParser.TripleCaretEqual - 96 | 1 << QSharpParser.TripleGreaterEqual - 96 | 1 << QSharpParser.TripleLessEqual - 96 | 1 << QSharpParser.TriplePipeEqual - 96)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  forBinding() {
    let _localctx = new ForBindingContext(this._ctx, this.state);
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  qubitBinding() {
    let _localctx = new QubitBindingContext(this._ctx, this.state);
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  qubitInitializer() {
    let _localctx = new QubitInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, QSharpParser.RULE_qubitInitializer);
    let _la;
    try {
      let _alt;
      this.state = 490;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
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
            _localctx._length = this.expression(0);
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
                while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  expression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new ExpressionContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 68;
    this.enterRecursionRule(_localctx, 68, QSharpParser.RULE_expression, _p);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 577;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
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
              switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
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
              while ((_la - 135 & ~31) === 0 && (1 << _la - 135 & (1 << QSharpParser.InterpStringEscape - 135 | 1 << QSharpParser.InterpBraceLeft - 135 | 1 << QSharpParser.InterpStringText - 135)) !== 0) {
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
              if ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointFunctor | 1 << QSharpParser.ControlledFunctor | 1 << QSharpParser.False)) !== 0 || (_la - 35 & ~31) === 0 && (1 << _la - 35 & (1 << QSharpParser.New - 35 | 1 << QSharpParser.Not - 35 | 1 << QSharpParser.One - 35 | 1 << QSharpParser.PauliI - 35 | 1 << QSharpParser.PauliX - 35 | 1 << QSharpParser.PauliY - 35 | 1 << QSharpParser.PauliZ - 35 | 1 << QSharpParser.True - 35 | 1 << QSharpParser.Zero - 35)) !== 0 || (_la - 69 & ~31) === 0 && (1 << _la - 69 & (1 << QSharpParser.Bang - 69 | 1 << QSharpParser.BracketLeft - 69 | 1 << QSharpParser.DollarQuote - 69 | 1 << QSharpParser.DoubleQuote - 69 | 1 << QSharpParser.Ellipsis - 69 | 1 << QSharpParser.Minus - 69 | 1 << QSharpParser.ParenLeft - 69)) !== 0 || (_la - 102 & ~31) === 0 && (1 << _la - 102 & (1 << QSharpParser.Plus - 102 | 1 << QSharpParser.TripleTilde - 102 | 1 << QSharpParser.Underscore - 102 | 1 << QSharpParser.IntegerLiteral - 102 | 1 << QSharpParser.BigIntegerLiteral - 102 | 1 << QSharpParser.DoubleLiteral - 102 | 1 << QSharpParser.Identifier - 102)) !== 0) {
                {
                  this.state = 521;
                  this.expression(0);
                  this.state = 526;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                  while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
              if ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointFunctor | 1 << QSharpParser.ControlledFunctor | 1 << QSharpParser.False)) !== 0 || (_la - 35 & ~31) === 0 && (1 << _la - 35 & (1 << QSharpParser.New - 35 | 1 << QSharpParser.Not - 35 | 1 << QSharpParser.One - 35 | 1 << QSharpParser.PauliI - 35 | 1 << QSharpParser.PauliX - 35 | 1 << QSharpParser.PauliY - 35 | 1 << QSharpParser.PauliZ - 35 | 1 << QSharpParser.True - 35 | 1 << QSharpParser.Zero - 35)) !== 0 || (_la - 69 & ~31) === 0 && (1 << _la - 69 & (1 << QSharpParser.Bang - 69 | 1 << QSharpParser.BracketLeft - 69 | 1 << QSharpParser.DollarQuote - 69 | 1 << QSharpParser.DoubleQuote - 69 | 1 << QSharpParser.Ellipsis - 69 | 1 << QSharpParser.Minus - 69 | 1 << QSharpParser.ParenLeft - 69)) !== 0 || (_la - 102 & ~31) === 0 && (1 << _la - 102 & (1 << QSharpParser.Plus - 102 | 1 << QSharpParser.TripleTilde - 102 | 1 << QSharpParser.Underscore - 102 | 1 << QSharpParser.IntegerLiteral - 102 | 1 << QSharpParser.BigIntegerLiteral - 102 | 1 << QSharpParser.DoubleLiteral - 102 | 1 << QSharpParser.Identifier - 102)) !== 0) {
                {
                  this.state = 536;
                  this.expression(0);
                  this.state = 541;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                  while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
              _localctx._value = this.expression(0);
              this.state = 552;
              this.match(QSharpParser.Comma);
              this.state = 553;
              this.size();
              this.state = 554;
              this.match(QSharpParser.Equal);
              this.state = 555;
              _localctx._length = this.expression(0);
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
              _localctx._length = this.expression(0);
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
              _localctx._op = this._input.LT(1);
              _la = this._input.LA(1);
              if (!(_la === QSharpParser.Not || _la === QSharpParser.Bang || _la === QSharpParser.Minus || _la === QSharpParser.Plus || _la === QSharpParser.TripleTilde)) {
                _localctx._op = this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === import_Token.Token.EOF) {
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
              _localctx._arrow = this._input.LT(1);
              _la = this._input.LA(1);
              if (!(_la === QSharpParser.ArrowRight || _la === QSharpParser.FatArrowRight)) {
                _localctx._arrow = this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === import_Token.Token.EOF) {
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
        while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 655;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                case 1:
                  {
                    _localctx = new ExponentExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 579;
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                    }
                    this.state = 580;
                    this.match(QSharpParser.Caret);
                    this.state = 581;
                    _localctx._right = this.expression(18);
                  }
                  break;
                case 2:
                  {
                    _localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 582;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                    }
                    this.state = 583;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.Asterisk || _la === QSharpParser.Percent || _la === QSharpParser.Slash)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 584;
                    _localctx._right = this.expression(18);
                  }
                  break;
                case 3:
                  {
                    _localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 585;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                    }
                    this.state = 586;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.Minus || _la === QSharpParser.Plus)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 587;
                    _localctx._right = this.expression(17);
                  }
                  break;
                case 4:
                  {
                    _localctx = new ShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 588;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                    }
                    this.state = 589;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.TripleGreater || _la === QSharpParser.TripleLess)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 590;
                    _localctx._right = this.expression(16);
                  }
                  break;
                case 5:
                  {
                    _localctx = new CompareExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 591;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                    }
                    this.state = 592;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!((_la - 89 & ~31) === 0 && (1 << _la - 89 & (1 << QSharpParser.Greater - 89 | 1 << QSharpParser.GreaterEqual - 89 | 1 << QSharpParser.Less - 89 | 1 << QSharpParser.LessEqual - 89)) !== 0)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 593;
                    _localctx._right = this.expression(15);
                  }
                  break;
                case 6:
                  {
                    _localctx = new EqualsExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 594;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                    }
                    this.state = 595;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.DoubleEqual || _la === QSharpParser.NotEqual)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 596;
                    _localctx._right = this.expression(14);
                  }
                  break;
                case 7:
                  {
                    _localctx = new BitwiseAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 597;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                    }
                    this.state = 598;
                    this.match(QSharpParser.TripleAmpersand);
                    this.state = 599;
                    _localctx._right = this.expression(13);
                  }
                  break;
                case 8:
                  {
                    _localctx = new BitwiseXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 600;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                    }
                    this.state = 601;
                    this.match(QSharpParser.TripleCaret);
                    this.state = 602;
                    _localctx._right = this.expression(12);
                  }
                  break;
                case 9:
                  {
                    _localctx = new BitwiseOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 603;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                    }
                    this.state = 604;
                    this.match(QSharpParser.TriplePipe);
                    this.state = 605;
                    _localctx._right = this.expression(11);
                  }
                  break;
                case 10:
                  {
                    _localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 606;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                    }
                    this.state = 607;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.And || _la === QSharpParser.DoubleAmpersand)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 608;
                    _localctx._right = this.expression(10);
                  }
                  break;
                case 11:
                  {
                    _localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 609;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                    }
                    this.state = 610;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === QSharpParser.Or || _la === QSharpParser.DoublePipe)) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === import_Token.Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 611;
                    _localctx._right = this.expression(9);
                  }
                  break;
                case 12:
                  {
                    _localctx = new ConditionalExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._cond = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 612;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                    }
                    this.state = 613;
                    this.match(QSharpParser.Question);
                    this.state = 614;
                    _localctx._then = this.expression(0);
                    this.state = 615;
                    this.match(QSharpParser.Pipe);
                    this.state = 616;
                    _localctx._else = this.expression(7);
                  }
                  break;
                case 13:
                  {
                    _localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._left = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 618;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                    }
                    this.state = 619;
                    this.match(QSharpParser.DoubleDot);
                    this.state = 620;
                    _localctx._right = this.expression(7);
                  }
                  break;
                case 14:
                  {
                    _localctx = new UpdateExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._record = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 621;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                    }
                    this.state = 622;
                    this.match(QSharpParser.With);
                    this.state = 623;
                    _localctx._index = this.expression(0);
                    this.state = 624;
                    this.match(QSharpParser.ArrowLeft);
                    this.state = 625;
                    _localctx._value = this.expression(3);
                  }
                  break;
                case 15:
                  {
                    _localctx = new NamedItemAccessExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 627;
                    if (!this.precpred(this._ctx, 25)) {
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
                    _localctx._array = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 630;
                    if (!this.precpred(this._ctx, 24)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
                    }
                    this.state = 631;
                    this.match(QSharpParser.BracketLeft);
                    this.state = 632;
                    _localctx._index = this.expression(0);
                    this.state = 633;
                    this.match(QSharpParser.BracketRight);
                  }
                  break;
                case 17:
                  {
                    _localctx = new UnwrapExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 635;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
                    }
                    this.state = 636;
                    this.match(QSharpParser.Bang);
                  }
                  break;
                case 18:
                  {
                    _localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
                    _localctx._callable = _prevctx;
                    this.pushNewRecursionContext(_localctx, _startState, QSharpParser.RULE_expression);
                    this.state = 637;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                    }
                    this.state = 638;
                    this.match(QSharpParser.ParenLeft);
                    this.state = 650;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.AdjointFunctor | 1 << QSharpParser.ControlledFunctor | 1 << QSharpParser.False)) !== 0 || (_la - 35 & ~31) === 0 && (1 << _la - 35 & (1 << QSharpParser.New - 35 | 1 << QSharpParser.Not - 35 | 1 << QSharpParser.One - 35 | 1 << QSharpParser.PauliI - 35 | 1 << QSharpParser.PauliX - 35 | 1 << QSharpParser.PauliY - 35 | 1 << QSharpParser.PauliZ - 35 | 1 << QSharpParser.True - 35 | 1 << QSharpParser.Zero - 35)) !== 0 || (_la - 69 & ~31) === 0 && (1 << _la - 69 & (1 << QSharpParser.Bang - 69 | 1 << QSharpParser.BracketLeft - 69 | 1 << QSharpParser.DollarQuote - 69 | 1 << QSharpParser.DoubleQuote - 69 | 1 << QSharpParser.Ellipsis - 69 | 1 << QSharpParser.Minus - 69 | 1 << QSharpParser.ParenLeft - 69)) !== 0 || (_la - 102 & ~31) === 0 && (1 << _la - 102 & (1 << QSharpParser.Plus - 102 | 1 << QSharpParser.TripleTilde - 102 | 1 << QSharpParser.Underscore - 102 | 1 << QSharpParser.IntegerLiteral - 102 | 1 << QSharpParser.BigIntegerLiteral - 102 | 1 << QSharpParser.DoubleLiteral - 102 | 1 << QSharpParser.Identifier - 102)) !== 0) {
                      {
                        this.state = 639;
                        _localctx._expression = this.expression(0);
                        _localctx._args.push(_localctx._expression);
                        this.state = 644;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                        while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
                          if (_alt === 1) {
                            {
                              {
                                this.state = 640;
                                this.match(QSharpParser.Comma);
                                this.state = 641;
                                _localctx._expression = this.expression(0);
                                _localctx._args.push(_localctx._expression);
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
                    if (!this.precpred(this._ctx, 5)) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  size() {
    let _localctx = new SizeContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, QSharpParser.RULE_size);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 660;
        this.match(QSharpParser.Identifier);
        this.state = 661;
        if (!(_localctx.Identifier().Symbol.Text == "size")) {
          throw this.createFailedPredicateException(' _localctx.Identifier().Symbol.Text == "size" ');
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeTuple() {
    let _localctx = new TypeTupleContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, QSharpParser.RULE_typeTuple);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 663;
        this.match(QSharpParser.Less);
        this.state = 675;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << QSharpParser.BigInt | 1 << QSharpParser.Bool | 1 << QSharpParser.Double | 1 << QSharpParser.Int)) !== 0 || (_la - 42 & ~31) === 0 && (1 << _la - 42 & (1 << QSharpParser.Pauli - 42 | 1 << QSharpParser.Qubit - 42 | 1 << QSharpParser.Range - 42 | 1 << QSharpParser.Result - 42 | 1 << QSharpParser.String - 42 | 1 << QSharpParser.Unit - 42)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << QSharpParser.ParenLeft - 97 | 1 << QSharpParser.Underscore - 97 | 1 << QSharpParser.Identifier - 97 | 1 << QSharpParser.TypeParameter - 97)) !== 0) {
          {
            this.state = 664;
            this.type(0);
            this.state = 669;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
            while (_alt !== 2 && _alt !== import_ATN.ATN.INVALID_ALT_NUMBER) {
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
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  boolLiteral() {
    let _localctx = new BoolLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, QSharpParser.RULE_boolLiteral);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 679;
        _la = this._input.LA(1);
        if (!(_la === QSharpParser.False || _la === QSharpParser.True)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  resultLiteral() {
    let _localctx = new ResultLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, QSharpParser.RULE_resultLiteral);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 681;
        _la = this._input.LA(1);
        if (!(_la === QSharpParser.One || _la === QSharpParser.Zero)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pauliLiteral() {
    let _localctx = new PauliLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, QSharpParser.RULE_pauliLiteral);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 683;
        _la = this._input.LA(1);
        if (!((_la - 43 & ~31) === 0 && (1 << _la - 43 & (1 << QSharpParser.PauliI - 43 | 1 << QSharpParser.PauliX - 43 | 1 << QSharpParser.PauliY - 43 | 1 << QSharpParser.PauliZ - 43)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  stringContent() {
    let _localctx = new StringContentContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, QSharpParser.RULE_stringContent);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 685;
        _la = this._input.LA(1);
        if (!(_la === QSharpParser.StringEscape || _la === QSharpParser.StringText)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === import_Token.Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  interpStringContent() {
    let _localctx = new InterpStringContentContext(this._ctx, this.state);
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
          throw new import_NoViableAltException.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  sempred(_localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 18:
        return this.characteristicsExpression_sempred(_localctx, predIndex);
      case 26:
        return this.type_sempred(_localctx, predIndex);
      case 34:
        return this.expression_sempred(_localctx, predIndex);
      case 35:
        return this.size_sempred(_localctx, predIndex);
    }
    return true;
  }
  characteristicsExpression_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2);
      case 1:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  type_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 13);
      case 3:
        return this.precpred(this._ctx, 12);
    }
    return true;
  }
  expression_sempred(_localctx, predIndex) {
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
  size_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 23:
        return _localctx.Identifier().Symbol.Text == "size";
    }
    return true;
  }
  static _serializedATNSegments = 2;
  static _serializedATNSegment0 = `\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x8C\u02BA					\x07	\x07\b	\b			
	
\v	\v\f	\f\r	\r																		 	 !	!"	"#	#$	$%	%&	&'	'(	()	)*	*+	+\x07X
\f[\v\x07c
\ff\v\x07m
\fp\vu
{
\x07\x07\x07\b\b	\x07	\x85
	\f		\x88\v			\x8B
	






\v\v\v\x96
\v\f\f\f\f\x07\f\x9C
\f\f\f\f\x9F\v\f\f\xA1
\f\f\f\r\r\r\xA7
\r\xB1
\xB7
\x07\xBF
\f\xC2\v\xC4
\x07\xCC
\f\xCF\v\xD1
\xD7
\xE3
\x07\xEB
\f\xEE\v\x07\xF3
\f\xF6\v\xF9
\xFC
\r\xFD\u010F
\u0112
\x07\u011A
\f\u011D\v\u011F
\x07\u012B
\f\u012E\v\u0131
\u0133
\u0142
\u014B
\x07\u014D
\f\u0150\v\u018D
\u019C
\u01A8
\u01AC
\u01AE
\x07\u01B2
\f\u01B5\v\x07\u01BF
\f\u01C2\v\u01C5
\u01C7
\u01CA
  !!!!""""############\x07#\u01E2
#\f##\u01E5\v###\u01E8
##\u01EA
###\u01ED
#$$$$$\u01F3
$$$$$$\x07$\u01FA
$\f$$\u01FD\v$$$$\x07$\u0202
$\f$$\u0205\v$$$$$$$$$\x07$\u020F
$\f$$\u0212\v$$$\u0215
$$\u0217
$$$$$$\x07$\u021E
$\f$$\u0221\v$$$\u0224
$$\u0226
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\u0244
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\x07$\u0285
$\f$$\u0288\v$$$\u028B
$$\u028D
$$$$\x07$\u0292
$\f$$\u0295\v$%%%&&&&\x07&\u029E
&\f&&\u02A1\v&&&\u02A4
&&\u02A6
&&&''(())**+++++++\u02B8
++&6F,\b
\f "$&(*,.02468:<>@BDFHJLNPRT**\v\vXX\x7F\x7FCCZZ\r<=AAEEMM\`\`bbffiimmooqqssuuww\x07''GG__hhxxDDeell__hhrrtt[^UUaaRR++VV99((@@-0\x86\x87\u031BY^i\bt
v\f~\x81\x86\x8C\x95\x97\xA6\xA8\xAC\xBA \xC7"\xD6$\xD8&\xE2(\xF8*\xFB,\u0101.\u010E0\u01112\u01154\u01226\u01418\u01AD:\u01AF<\u01C9>\u01CB@\u01CDB\u01D1D\u01ECF\u0243H\u0296J\u0299L\u02A9N\u02ABP\u02ADR\u02AFT\u02B7VXWVX[YWYZZ\\[Y\\]\x07]^_\x07$_\`\`d\x07Hac\bbacfdbdeegfdgh\x07Ihin\x07\x7Fjk\x07Qkm\x07\x7Fljmpnlnoo\x07pnqu
ru
sutqtrtsu	vw\x07)wzxy\x07\by{zxz{{||}\x07k}\v~\x7F\x07F\x7F\x80F$\x80\r\x81\x82\x07\x82\x83\x85\f\x07\x84\x83\x85\x88\x86\x84\x86\x87\x87\x8A\x88\x86\x89\x8B\b\x8A\x89\x8A\x8B\x8B\x8C\x8D	\x8D\x8E\x07&\x8E\x8F\x07\x7F\x8F\x90\x07Y\x90\x91\v\x91\x92\x07k\x92\x93\x96\f\x94\x966\x95\x93\x95\x94\x96\x97\xA0\x07c\x98\x9D\r\x99\x9A\x07O\x9A\x9C\r\x9B\x99\x9C\x9F\x9D\x9B\x9D\x9E\x9E\xA1\x9F\x9D\xA0\x98\xA0\xA1\xA1\xA2\xA2\xA3\x07d\xA3\xA4\xA7\xA5\xA7\v\xA6\xA4\xA6\xA5\xA7\xA8\xA9\x07\x7F\xA9\xAA\x07N\xAA\xAB6\xAB\xAC\xAD	\xAD\xAE	\xAE\xB0\x07\x7F\xAF\xB1\xB0\xAF\xB0\xB1\xB1\xB2\xB2\xB3 \xB3\xB4\x07N\xB4\xB66\xB5\xB7$\xB6\xB5\xB6\xB7\xB7\xB8\xB8\xB9(\xB9\xBA\xC3\x07]\xBB\xC0\x07\x82\xBC\xBD\x07O\xBD\xBF\x07\x82\xBE\xBC\xBF\xC2\xC0\xBE\xC0\xC1\xC1\xC4\xC2\xC0\xC3\xBB\xC3\xC4\xC4\xC5\xC5\xC6\x07[\xC6\xC7\xD0\x07c\xC8\xCD"\xC9\xCA\x07O\xCA\xCC"\xCB\xC9\xCC\xCF\xCD\xCB\xCD\xCE\xCE\xD1\xCF\xCD\xD0\xC8\xD0\xD1\xD1\xD2\xD2\xD3\x07d\xD3!\xD4\xD7\xD5\xD7 \xD6\xD4\xD6\xD5\xD7#\xD8\xD9\x07!\xD9\xDA&\xDA%\xDB\xDC\b\xDC\xE3\x07\xDD\xE3\x07\xDE\xDF\x07c\xDF\xE0&\xE0\xE1\x07d\xE1\xE3\xE2\xDB\xE2\xDD\xE2\xDE\xE3\xEC\xE4\xE5\f\xE5\xE6\x07D\xE6\xEB&\xE7\xE8\f\xE8\xE9\x07h\xE9\xEB&\xEA\xE4\xEA\xE7\xEB\xEE\xEC\xEA\xEC\xED\xED'\xEE\xEC\xEF\xF9:\xF0\xF4\x07H\xF1\xF3*\xF2\xF1\xF3\xF6\xF4\xF2\xF4\xF5\xF5\xF7\xF6\xF4\xF7\xF9\x07I\xF8\xEF\xF8\xF0\xF9)\xFA\xFC,\xFB\xFA\xFC\xFD\xFD\xFB\xFD\xFE\xFE\xFF\xFF\u0100.\u0100+\u0101\u0102	\u0102-\u0103\u0104\x07	\u0104\u010F\x07k\u0105\u0106\x076\u0106\u010F\x07k\u0107\u0108\x07 \u0108\u010F\x07k\u0109\u010A\x07\u010A\u010F\x07k\u010B\u010C\x07\u010C\u010F\x07k\u010D\u010F0\u010E\u0103\u010E\u0105\u010E\u0107\u010E\u0109\u010E\u010B\u010E\u010D\u010F/\u0110\u01122\u0111\u0110\u0111\u0112\u0112\u0113\u0113\u0114:\u01141\u0115\u011E\x07c\u0116\u011B4\u0117\u0118\x07O\u0118\u011A4\u0119\u0117\u011A\u011D\u011B\u0119\u011B\u011C\u011C\u011F\u011D\u011B\u011E\u0116\u011E\u011F\u011F\u0120\u0120\u0121\x07d\u01213\u0122\u0123	\u01235\u0124\u0125\b\u0125\u0142\x07y\u0126\u0132\x07c\u0127\u012C6\u0128\u0129\x07O\u0129\u012B6\u012A\u0128\u012B\u012E\u012C\u012A\u012C\u012D\u012D\u0130\u012E\u012C\u012F\u0131\x07O\u0130\u012F\u0130\u0131\u0131\u0133\u0132\u0127\u0132\u0133\u0133\u0134\u0134\u0142\x07d\u0135\u0142\x07\x82\u0136\u0142\x07
\u0137\u0142\x07\f\u0138\u0142\x07\u0139\u0142\x07\u013A\u0142\x07,\u013B\u0142\x071\u013C\u0142\x072\u013D\u0142\x074\u013E\u0142\x078\u013F\u0142\x07:\u0140\u0142\u0141\u0124\u0141\u0126\u0141\u0135\u0141\u0136\u0141\u0137\u0141\u0138\u0141\u0139\u0141\u013A\u0141\u013B\u0141\u013C\u0141\u013D\u0141\u013E\u0141\u013F\u0141\u0140\u0142\u014E\u0143\u0144\f\u0144\u0145\x07J\u0145\u014D\x07K\u0146\u0147\f\u0147\u0148	\u0148\u014A6\u0149\u014B$\u014A\u0149\u014A\u014B\u014B\u014D\u014C\u0143\u014C\u0146\u014D\u0150\u014E\u014C\u014E\u014F\u014F7\u0150\u014E\u0151\u0152F$\u0152\u0153\x07k\u0153\u01AE\u0154\u0155\x075\u0155\u0156F$\u0156\u0157\x07k\u0157\u01AE\u0158\u0159\x07\u0159\u015AF$\u015A\u015B\x07k\u015B\u01AE\u015C\u015D\x07"\u015D\u015E<\u015E\u015F\x07Y\u015F\u0160F$\u0160\u0161\x07k\u0161\u01AE\u0162\u0163\x07#\u0163\u0164<\u0164\u0165\x07Y\u0165\u0166F$\u0166\u0167\x07k\u0167\u01AE\u0168\u0169\x077\u0169\u016A<\u016A\u016B\x07Y\u016B\u016CF$\u016C\u016D\x07k\u016D\u01AE\u016E\u016F\x077\u016F\u0170\x07\x7F\u0170\u0171> \u0171\u0172F$\u0172\u0173\x07k\u0173\u01AE\u0174\u0175\x077\u0175\u0176\x07\x7F\u0176\u0177\x07{\u0177\u0178F$\u0178\u0179\x07B\u0179\u017AF$\u017A\u017B\x07k\u017B\u01AE\u017C\u017D\x07\u017D\u017EF$\u017E\u017F:\u017F\u01AE\u0180\u0181\x07\u0181\u0182F$\u0182\u0183:\u0183\u01AE\u0184\u0185\x07\u0185\u01AE:\u0186\u018C\x07\u0187\u018D@!\u0188\u0189\x07c\u0189\u018A@!\u018A\u018B\x07d\u018B\u018D\u018C\u0187\u018C\u0188\u018D\u018E\u018E\u018F:\u018F\u01AE\u0190\u0191\x07>\u0191\u0192F$\u0192\u0193:\u0193\u01AE\u0194\u0195\x073\u0195\u01AE:\u0196\u0197\x07;\u0197\u019BF$\u0198\u019C\x07k\u0199\u019A\x07\u019A\u019C:\u019B\u0198\u019B\u0199\u019C\u01AE\u019D\u019E\x07?\u019E\u01AE:\u019F\u01A0\x07\x07\u01A0\u01AE:\u01A1\u01A7	\u01A2\u01A8B"\u01A3\u01A4\x07c\u01A4\u01A5B"\u01A5\u01A6\x07d\u01A6\u01A8\u01A7\u01A2\u01A7\u01A3\u01A8\u01AB\u01A9\u01AC:\u01AA\u01AC\x07k\u01AB\u01A9\u01AB\u01AA\u01AC\u01AE\u01AD\u0151\u01AD\u0154\u01AD\u0158\u01AD\u015C\u01AD\u0162\u01AD\u0168\u01AD\u016E\u01AD\u0174\u01AD\u017C\u01AD\u0180\u01AD\u0184\u01AD\u0186\u01AD\u0190\u01AD\u0194\u01AD\u0196\u01AD\u019D\u01AD\u019F\u01AD\u01A1\u01AE9\u01AF\u01B3\x07H\u01B0\u01B28\u01B1\u01B0\u01B2\u01B5\u01B3\u01B1\u01B3\u01B4\u01B4\u01B6\u01B5\u01B3\u01B6\u01B7\x07I\u01B7;\u01B8\u01CA\x07y\u01B9\u01CA\x07\x7F\u01BA\u01C6\x07c\u01BB\u01C0<\u01BC\u01BD\x07O\u01BD\u01BF<\u01BE\u01BC\u01BF\u01C2\u01C0\u01BE\u01C0\u01C1\u01C1\u01C4\u01C2\u01C0\u01C3\u01C5\x07O\u01C4\u01C3\u01C4\u01C5\u01C5\u01C7\u01C6\u01BB\u01C6\u01C7\u01C7\u01C8\u01C8\u01CA\x07d\u01C9\u01B8\u01C9\u01B9\u01C9\u01BA\u01CA=\u01CB\u01CC	\x07\u01CC?\u01CD\u01CE<\u01CE\u01CF\x07\u01CF\u01D0F$\u01D0A\u01D1\u01D2<\u01D2\u01D3\x07Y\u01D3\u01D4D#\u01D4C\u01D5\u01D6\x071\u01D6\u01D7\x07c\u01D7\u01ED\x07d\u01D8\u01D9\x071\u01D9\u01DA\x07J\u01DA\u01DBF$\u01DB\u01DC\x07K\u01DC\u01ED\u01DD\u01E9\x07c\u01DE\u01E3D#\u01DF\u01E0\x07O\u01E0\u01E2D#\u01E1\u01DF\u01E2\u01E5\u01E3\u01E1\u01E3\u01E4\u01E4\u01E7\u01E5\u01E3\u01E6\u01E8\x07O\u01E7\u01E6\u01E7\u01E8\u01E8\u01EA\u01E9\u01DE\u01E9\u01EA\u01EA\u01EB\u01EB\u01ED\x07d\u01EC\u01D5\u01EC\u01D8\u01EC\u01DD\u01EDE\u01EE\u01EF\b$\u01EF\u0244\x07y\u01F0\u01F2\u01F1\u01F3J&\u01F2\u01F1\u01F2\u01F3\u01F3\u0244\u01F4\u0244\x07|\u01F5\u0244\x07}\u01F6\u0244\x07~\u01F7\u01FB\x07W\u01F8\u01FA`;
  static _serializedATNSegment1 = "R*\u01F9\u01F8\u01FA\u01FD\u01FB\u01F9\u01FB\u01FC\u01FC\u01FE\u01FD\u01FB\u01FE\u0244\x07\x88\u01FF\u0203\x07P\u0200\u0202T+\u0201\u0200\u0202\u0205\u0203\u0201\u0203\u0204\u0204\u0206\u0205\u0203\u0206\u0244\x07\x8C\u0207\u0244L'\u0208\u0244N(\u0209\u0244P)\u020A\u0216\x07c\u020B\u0210F$\u020C\u020D\x07O\u020D\u020FF$\u020E\u020C\u020F\u0212\u0210\u020E\u0210\u0211\u0211\u0214\u0212\u0210\u0213\u0215\x07O\u0214\u0213\u0214\u0215\u0215\u0217\u0216\u020B\u0216\u0217\u0217\u0218\u0218\u0244\x07d\u0219\u0225\x07J\u021A\u021FF$\u021B\u021C\x07O\u021C\u021EF$\u021D\u021B\u021E\u0221\u021F\u021D\u021F\u0220\u0220\u0223\u0221\u021F\u0222\u0224\x07O\u0223\u0222\u0223\u0224\u0224\u0226\u0225\u021A\u0225\u0226\u0226\u0227\u0227\u0244\x07K\u0228\u0229\x07J\u0229\u022AF$\u022A\u022B\x07O\u022B\u022CH%\u022C\u022D\x07Y\u022D\u022EF$\u022E\u022F\x07K\u022F\u0244\u0230\u0231\x07%\u0231\u02326\u0232\u0233\x07J\u0233\u0234F$\u0234\u0235\x07K\u0235\u0244\u0236\u0237\x07\u0237\u0244F$\u0238\u0239\x07\u0239\u0244F$\u023A\u023B	\b\u023B\u0244F$\u023C\u023D\x07X\u023D\u0244F$\u023E\u0244\x07X\u023F\u0240<\u0240\u0241	\u0241\u0242F$\u0242\u0244\u0243\u01EE\u0243\u01F0\u0243\u01F4\u0243\u01F5\u0243\u01F6\u0243\u01F7\u0243\u01FF\u0243\u0207\u0243\u0208\u0243\u0209\u0243\u020A\u0243\u0219\u0243\u0228\u0243\u0230\u0243\u0236\u0243\u0238\u0243\u023A\u0243\u023C\u0243\u023E\u0243\u023F\u0244\u0293\u0245\u0246\f\u0246\u0247\x07L\u0247\u0292F$\u0248\u0249\f\u0249\u024A		\u024A\u0292F$\u024B\u024C\f\u024C\u024D	\n\u024D\u0292F$\u024E\u024F\f\u024F\u0250	\v\u0250\u0292F$\u0251\u0252\f\u0252\u0253	\f\u0253\u0292F$\u0254\u0255\f\u0255\u0256	\r\u0256\u0292F$\u0257\u0258\f\u0258\u0259\x07n\u0259\u0292F$\u025A\u025B\f\r\u025B\u025C\x07p\u025C\u0292F$\u025D\u025E\f\f\u025E\u025F\x07v\u025F\u0292F$\r\u0260\u0261\f\v\u0261\u0262	\u0262\u0292F$\f\u0263\u0264\f\n\u0264\u0265	\u0265\u0292F$\v\u0266\u0267\f	\u0267\u0268\x07j\u0268\u0269F$\u0269\u026A\x07g\u026A\u026BF$	\u026B\u0292\u026C\u026D\f\b\u026D\u026E\x07T\u026E\u0292F$	\u026F\u0270\f\u0270\u0271\x07z\u0271\u0272F$\u0272\u0273\x07B\u0273\u0274F$\u0274\u0292\u0275\u0276\f\u0276\u0277\x07S\u0277\u0292\x07\x7F\u0278\u0279\f\u0279\u027A\x07J\u027A\u027BF$\u027B\u027C\x07K\u027C\u0292\u027D\u027E\f\u027E\u0292\x07G\u027F\u0280\f\u0280\u028C\x07c\u0281\u0286F$\u0282\u0283\x07O\u0283\u0285F$\u0284\u0282\u0285\u0288\u0286\u0284\u0286\u0287\u0287\u028A\u0288\u0286\u0289\u028B\x07O\u028A\u0289\u028A\u028B\u028B\u028D\u028C\u0281\u028C\u028D\u028D\u028E\u028E\u0292\x07d\u028F\u0290\f\x07\u0290\u0292\x07X\u0291\u0245\u0291\u0248\u0291\u024B\u0291\u024E\u0291\u0251\u0291\u0254\u0291\u0257\u0291\u025A\u0291\u025D\u0291\u0260\u0291\u0263\u0291\u0266\u0291\u026C\u0291\u026F\u0291\u0275\u0291\u0278\u0291\u027D\u0291\u027F\u0291\u028F\u0292\u0295\u0293\u0291\u0293\u0294\u0294G\u0295\u0293\u0296\u0297\x07\x7F\u0297\u0298%\u0298I\u0299\u02A5\x07]\u029A\u029F6\u029B\u029C\x07O\u029C\u029E6\u029D\u029B\u029E\u02A1\u029F\u029D\u029F\u02A0\u02A0\u02A3\u02A1\u029F\u02A2\u02A4\x07O\u02A3\u02A2\u02A3\u02A4\u02A4\u02A6\u02A5\u029A\u02A5\u02A6\u02A6\u02A7\u02A7\u02A8\x07[\u02A8K\u02A9\u02AA	\u02AAM\u02AB\u02AC	\u02ACO\u02AD\u02AE	\u02AEQ\u02AF\u02B0	\u02B0S\u02B1\u02B8\x07\x89\u02B2\u02B3\x07\x8A\u02B3\u02B4F$\u02B4\u02B5\x07I\u02B5\u02B8\u02B6\u02B8\x07\x8B\u02B7\u02B1\u02B7\u02B2\u02B7\u02B6\u02B8UFYdntz\x86\x8A\x95\x9D\xA0\xA6\xB0\xB6\xC0\xC3\xCD\xD0\xD6\xE2\xEA\xEC\xF4\xF8\xFD\u010E\u0111\u011B\u011E\u012C\u0130\u0132\u0141\u014A\u014C\u014E\u018C\u019B\u01A7\u01AB\u01AD\u01B3\u01C0\u01C4\u01C6\u01C9\u01E3\u01E7\u01E9\u01EC\u01F2\u01FB\u0203\u0210\u0214\u0216\u021F\u0223\u0225\u0243\u0286\u028A\u028C\u0291\u0293\u029F\u02A3\u02A5\u02B7";
  static _serializedATN = Utils.join([
    QSharpParser._serializedATNSegment0,
    QSharpParser._serializedATNSegment1
  ], "");
  static __ATN;
  static get _ATN() {
    if (!QSharpParser.__ATN) {
      QSharpParser.__ATN = new import_ATNDeserializer.ATNDeserializer().deserialize(Utils.toCharArray(QSharpParser._serializedATN));
    }
    return QSharpParser.__ATN;
  }
}
class DocumentContext extends import_ParserRuleContext.ParserRuleContext {
  EOF() {
    return this.getToken(QSharpParser.EOF, 0);
  }
  namespace(i) {
    if (i === void 0) {
      return this.getRuleContexts(NamespaceContext);
    } else {
      return this.getRuleContext(i, NamespaceContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_document;
  }
  enterRule(listener) {
    if (listener.enterDocument) {
      listener.enterDocument(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDocument) {
      listener.exitDocument(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDocument) {
      return visitor.visitDocument(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class NamespaceContext extends import_ParserRuleContext.ParserRuleContext {
  Namespace() {
    return this.getToken(QSharpParser.Namespace, 0);
  }
  qualifiedName() {
    return this.getRuleContext(0, QualifiedNameContext);
  }
  BraceLeft() {
    return this.getToken(QSharpParser.BraceLeft, 0);
  }
  BraceRight() {
    return this.getToken(QSharpParser.BraceRight, 0);
  }
  namespaceElement(i) {
    if (i === void 0) {
      return this.getRuleContexts(NamespaceElementContext);
    } else {
      return this.getRuleContext(i, NamespaceElementContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_namespace;
  }
  enterRule(listener) {
    if (listener.enterNamespace) {
      listener.enterNamespace(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamespace) {
      listener.exitNamespace(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamespace) {
      return visitor.visitNamespace(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QualifiedNameContext extends import_ParserRuleContext.ParserRuleContext {
  Identifier(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Identifier);
    } else {
      return this.getToken(QSharpParser.Identifier, i);
    }
  }
  Dot(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Dot);
    } else {
      return this.getToken(QSharpParser.Dot, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_qualifiedName;
  }
  enterRule(listener) {
    if (listener.enterQualifiedName) {
      listener.enterQualifiedName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQualifiedName) {
      listener.exitQualifiedName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQualifiedName) {
      return visitor.visitQualifiedName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class NamespaceElementContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_namespaceElement;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class OpenElementContext extends NamespaceElementContext {
  openDirective() {
    return this.getRuleContext(0, OpenDirectiveContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterOpenElement) {
      listener.enterOpenElement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOpenElement) {
      listener.exitOpenElement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOpenElement) {
      return visitor.visitOpenElement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeElementContext extends NamespaceElementContext {
  typeDeclaration() {
    return this.getRuleContext(0, TypeDeclarationContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterTypeElement) {
      listener.enterTypeElement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeElement) {
      listener.exitTypeElement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeElement) {
      return visitor.visitTypeElement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CallableElementContext extends NamespaceElementContext {
  callableDeclaration() {
    return this.getRuleContext(0, CallableDeclarationContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCallableElement) {
      listener.enterCallableElement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCallableElement) {
      listener.exitCallableElement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCallableElement) {
      return visitor.visitCallableElement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class OpenDirectiveContext extends import_ParserRuleContext.ParserRuleContext {
  _name;
  _alias;
  Open() {
    return this.getToken(QSharpParser.Open, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  qualifiedName(i) {
    if (i === void 0) {
      return this.getRuleContexts(QualifiedNameContext);
    } else {
      return this.getRuleContext(i, QualifiedNameContext);
    }
  }
  As() {
    return this.tryGetToken(QSharpParser.As, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_openDirective;
  }
  enterRule(listener) {
    if (listener.enterOpenDirective) {
      listener.enterOpenDirective(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOpenDirective) {
      listener.exitOpenDirective(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOpenDirective) {
      return visitor.visitOpenDirective(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class AttributeContext extends import_ParserRuleContext.ParserRuleContext {
  At() {
    return this.getToken(QSharpParser.At, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_attribute;
  }
  enterRule(listener) {
    if (listener.enterAttribute) {
      listener.enterAttribute(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttribute) {
      listener.exitAttribute(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttribute) {
      return visitor.visitAttribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class AccessContext extends import_ParserRuleContext.ParserRuleContext {
  Internal() {
    return this.getToken(QSharpParser.Internal, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_access;
  }
  enterRule(listener) {
    if (listener.enterAccess) {
      listener.enterAccess(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAccess) {
      listener.exitAccess(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAccess) {
      return visitor.visitAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class DeclarationPrefixContext extends import_ParserRuleContext.ParserRuleContext {
  attribute(i) {
    if (i === void 0) {
      return this.getRuleContexts(AttributeContext);
    } else {
      return this.getRuleContext(i, AttributeContext);
    }
  }
  access() {
    return this.tryGetRuleContext(0, AccessContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_declarationPrefix;
  }
  enterRule(listener) {
    if (listener.enterDeclarationPrefix) {
      listener.enterDeclarationPrefix(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclarationPrefix) {
      listener.exitDeclarationPrefix(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclarationPrefix) {
      return visitor.visitDeclarationPrefix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeDeclarationContext extends import_ParserRuleContext.ParserRuleContext {
  declarationPrefix() {
    return this.getRuleContext(0, DeclarationPrefixContext);
  }
  Newtype() {
    return this.getToken(QSharpParser.Newtype, 0);
  }
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  Equal() {
    return this.getToken(QSharpParser.Equal, 0);
  }
  underlyingType() {
    return this.getRuleContext(0, UnderlyingTypeContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_typeDeclaration;
  }
  enterRule(listener) {
    if (listener.enterTypeDeclaration) {
      listener.enterTypeDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeDeclaration) {
      listener.exitTypeDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeDeclaration) {
      return visitor.visitTypeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UnderlyingTypeContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_underlyingType;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class TupleUnderlyingTypeContext extends UnderlyingTypeContext {
  typeDeclarationTuple() {
    return this.getRuleContext(0, TypeDeclarationTupleContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterTupleUnderlyingType) {
      listener.enterTupleUnderlyingType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTupleUnderlyingType) {
      listener.exitTupleUnderlyingType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTupleUnderlyingType) {
      return visitor.visitTupleUnderlyingType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UnnamedTypeItemContext extends UnderlyingTypeContext {
  type() {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUnnamedTypeItem) {
      listener.enterUnnamedTypeItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnnamedTypeItem) {
      listener.exitUnnamedTypeItem(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnnamedTypeItem) {
      return visitor.visitUnnamedTypeItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeDeclarationTupleContext extends import_ParserRuleContext.ParserRuleContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  typeTupleItem(i) {
    if (i === void 0) {
      return this.getRuleContexts(TypeTupleItemContext);
    } else {
      return this.getRuleContext(i, TypeTupleItemContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_typeDeclarationTuple;
  }
  enterRule(listener) {
    if (listener.enterTypeDeclarationTuple) {
      listener.enterTypeDeclarationTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeDeclarationTuple) {
      listener.exitTypeDeclarationTuple(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeDeclarationTuple) {
      return visitor.visitTypeDeclarationTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeTupleItemContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_typeTupleItem;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class NamedTypeItemContext extends TypeTupleItemContext {
  namedItem() {
    return this.getRuleContext(0, NamedItemContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterNamedTypeItem) {
      listener.enterNamedTypeItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamedTypeItem) {
      listener.exitNamedTypeItem(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamedTypeItem) {
      return visitor.visitNamedTypeItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UnderlyingTypeItemContext extends TypeTupleItemContext {
  underlyingType() {
    return this.getRuleContext(0, UnderlyingTypeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUnderlyingTypeItem) {
      listener.enterUnderlyingTypeItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnderlyingTypeItem) {
      listener.exitUnderlyingTypeItem(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnderlyingTypeItem) {
      return visitor.visitUnderlyingTypeItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class NamedItemContext extends import_ParserRuleContext.ParserRuleContext {
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  Colon() {
    return this.getToken(QSharpParser.Colon, 0);
  }
  type() {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_namedItem;
  }
  enterRule(listener) {
    if (listener.enterNamedItem) {
      listener.enterNamedItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamedItem) {
      listener.exitNamedItem(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamedItem) {
      return visitor.visitNamedItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CallableDeclarationContext extends import_ParserRuleContext.ParserRuleContext {
  _keyword;
  _returnType;
  declarationPrefix() {
    return this.getRuleContext(0, DeclarationPrefixContext);
  }
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  parameterTuple() {
    return this.getRuleContext(0, ParameterTupleContext);
  }
  Colon() {
    return this.getToken(QSharpParser.Colon, 0);
  }
  callableBody() {
    return this.getRuleContext(0, CallableBodyContext);
  }
  type() {
    return this.getRuleContext(0, TypeContext);
  }
  Function() {
    return this.tryGetToken(QSharpParser.Function, 0);
  }
  Operation() {
    return this.tryGetToken(QSharpParser.Operation, 0);
  }
  typeParameterBinding() {
    return this.tryGetRuleContext(0, TypeParameterBindingContext);
  }
  characteristics() {
    return this.tryGetRuleContext(0, CharacteristicsContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_callableDeclaration;
  }
  enterRule(listener) {
    if (listener.enterCallableDeclaration) {
      listener.enterCallableDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCallableDeclaration) {
      listener.exitCallableDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCallableDeclaration) {
      return visitor.visitCallableDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeParameterBindingContext extends import_ParserRuleContext.ParserRuleContext {
  Less() {
    return this.getToken(QSharpParser.Less, 0);
  }
  Greater() {
    return this.getToken(QSharpParser.Greater, 0);
  }
  TypeParameter(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.TypeParameter);
    } else {
      return this.getToken(QSharpParser.TypeParameter, i);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_typeParameterBinding;
  }
  enterRule(listener) {
    if (listener.enterTypeParameterBinding) {
      listener.enterTypeParameterBinding(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeParameterBinding) {
      listener.exitTypeParameterBinding(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeParameterBinding) {
      return visitor.visitTypeParameterBinding(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ParameterTupleContext extends import_ParserRuleContext.ParserRuleContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  parameter(i) {
    if (i === void 0) {
      return this.getRuleContexts(ParameterContext);
    } else {
      return this.getRuleContext(i, ParameterContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_parameterTuple;
  }
  enterRule(listener) {
    if (listener.enterParameterTuple) {
      listener.enterParameterTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitParameterTuple) {
      listener.exitParameterTuple(this);
    }
  }
  accept(visitor) {
    if (visitor.visitParameterTuple) {
      return visitor.visitParameterTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ParameterContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_parameter;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class NamedParameterContext extends ParameterContext {
  namedItem() {
    return this.getRuleContext(0, NamedItemContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterNamedParameter) {
      listener.enterNamedParameter(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamedParameter) {
      listener.exitNamedParameter(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamedParameter) {
      return visitor.visitNamedParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TupledParameterContext extends ParameterContext {
  parameterTuple() {
    return this.getRuleContext(0, ParameterTupleContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterTupledParameter) {
      listener.enterTupledParameter(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTupledParameter) {
      listener.exitTupledParameter(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTupledParameter) {
      return visitor.visitTupledParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CharacteristicsContext extends import_ParserRuleContext.ParserRuleContext {
  Is() {
    return this.getToken(QSharpParser.Is, 0);
  }
  characteristicsExpression() {
    return this.getRuleContext(0, CharacteristicsExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_characteristics;
  }
  enterRule(listener) {
    if (listener.enterCharacteristics) {
      listener.enterCharacteristics(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCharacteristics) {
      listener.exitCharacteristics(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCharacteristics) {
      return visitor.visitCharacteristics(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CharacteristicsExpressionContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_characteristicsExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class AdjointCharacteristicsContext extends CharacteristicsExpressionContext {
  Adj() {
    return this.getToken(QSharpParser.Adj, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterAdjointCharacteristics) {
      listener.enterAdjointCharacteristics(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAdjointCharacteristics) {
      listener.exitAdjointCharacteristics(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAdjointCharacteristics) {
      return visitor.visitAdjointCharacteristics(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ControlledCharacteristicsContext extends CharacteristicsExpressionContext {
  Ctl() {
    return this.getToken(QSharpParser.Ctl, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterControlledCharacteristics) {
      listener.enterControlledCharacteristics(this);
    }
  }
  exitRule(listener) {
    if (listener.exitControlledCharacteristics) {
      listener.exitControlledCharacteristics(this);
    }
  }
  accept(visitor) {
    if (visitor.visitControlledCharacteristics) {
      return visitor.visitControlledCharacteristics(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CharacteristicGroupContext extends CharacteristicsExpressionContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  characteristicsExpression() {
    return this.getRuleContext(0, CharacteristicsExpressionContext);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCharacteristicGroup) {
      listener.enterCharacteristicGroup(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCharacteristicGroup) {
      listener.exitCharacteristicGroup(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCharacteristicGroup) {
      return visitor.visitCharacteristicGroup(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IntersectCharacteristicsContext extends CharacteristicsExpressionContext {
  _left;
  _right;
  Asterisk() {
    return this.getToken(QSharpParser.Asterisk, 0);
  }
  characteristicsExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(CharacteristicsExpressionContext);
    } else {
      return this.getRuleContext(i, CharacteristicsExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterIntersectCharacteristics) {
      listener.enterIntersectCharacteristics(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIntersectCharacteristics) {
      listener.exitIntersectCharacteristics(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIntersectCharacteristics) {
      return visitor.visitIntersectCharacteristics(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UnionCharacteristicsContext extends CharacteristicsExpressionContext {
  _left;
  _right;
  Plus() {
    return this.getToken(QSharpParser.Plus, 0);
  }
  characteristicsExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(CharacteristicsExpressionContext);
    } else {
      return this.getRuleContext(i, CharacteristicsExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUnionCharacteristics) {
      listener.enterUnionCharacteristics(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnionCharacteristics) {
      listener.exitUnionCharacteristics(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnionCharacteristics) {
      return visitor.visitUnionCharacteristics(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CallableBodyContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_callableBody;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class CallableStatementsContext extends CallableBodyContext {
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCallableStatements) {
      listener.enterCallableStatements(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCallableStatements) {
      listener.exitCallableStatements(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCallableStatements) {
      return visitor.visitCallableStatements(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CallableSpecializationsContext extends CallableBodyContext {
  BraceLeft() {
    return this.getToken(QSharpParser.BraceLeft, 0);
  }
  BraceRight() {
    return this.getToken(QSharpParser.BraceRight, 0);
  }
  specialization(i) {
    if (i === void 0) {
      return this.getRuleContexts(SpecializationContext);
    } else {
      return this.getRuleContext(i, SpecializationContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCallableSpecializations) {
      listener.enterCallableSpecializations(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCallableSpecializations) {
      listener.exitCallableSpecializations(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCallableSpecializations) {
      return visitor.visitCallableSpecializations(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SpecializationContext extends import_ParserRuleContext.ParserRuleContext {
  specializationGenerator() {
    return this.getRuleContext(0, SpecializationGeneratorContext);
  }
  specializationName(i) {
    if (i === void 0) {
      return this.getRuleContexts(SpecializationNameContext);
    } else {
      return this.getRuleContext(i, SpecializationNameContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_specialization;
  }
  enterRule(listener) {
    if (listener.enterSpecialization) {
      listener.enterSpecialization(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSpecialization) {
      listener.exitSpecialization(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSpecialization) {
      return visitor.visitSpecialization(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SpecializationNameContext extends import_ParserRuleContext.ParserRuleContext {
  Body() {
    return this.tryGetToken(QSharpParser.Body, 0);
  }
  AdjointGenerator() {
    return this.tryGetToken(QSharpParser.AdjointGenerator, 0);
  }
  ControlledGenerator() {
    return this.tryGetToken(QSharpParser.ControlledGenerator, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_specializationName;
  }
  enterRule(listener) {
    if (listener.enterSpecializationName) {
      listener.enterSpecializationName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSpecializationName) {
      listener.exitSpecializationName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSpecializationName) {
      return visitor.visitSpecializationName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SpecializationGeneratorContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_specializationGenerator;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class AutoGeneratorContext extends SpecializationGeneratorContext {
  Auto() {
    return this.getToken(QSharpParser.Auto, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterAutoGenerator) {
      listener.enterAutoGenerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAutoGenerator) {
      listener.exitAutoGenerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAutoGenerator) {
      return visitor.visitAutoGenerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SelfGeneratorContext extends SpecializationGeneratorContext {
  Self() {
    return this.getToken(QSharpParser.Self, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterSelfGenerator) {
      listener.enterSelfGenerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSelfGenerator) {
      listener.exitSelfGenerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSelfGenerator) {
      return visitor.visitSelfGenerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class InvertGeneratorContext extends SpecializationGeneratorContext {
  Invert() {
    return this.getToken(QSharpParser.Invert, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterInvertGenerator) {
      listener.enterInvertGenerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInvertGenerator) {
      listener.exitInvertGenerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInvertGenerator) {
      return visitor.visitInvertGenerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class DistributeGeneratorContext extends SpecializationGeneratorContext {
  Distribute() {
    return this.getToken(QSharpParser.Distribute, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterDistributeGenerator) {
      listener.enterDistributeGenerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDistributeGenerator) {
      listener.exitDistributeGenerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDistributeGenerator) {
      return visitor.visitDistributeGenerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IntrinsicGeneratorContext extends SpecializationGeneratorContext {
  Intrinsic() {
    return this.getToken(QSharpParser.Intrinsic, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterIntrinsicGenerator) {
      listener.enterIntrinsicGenerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIntrinsicGenerator) {
      listener.exitIntrinsicGenerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIntrinsicGenerator) {
      return visitor.visitIntrinsicGenerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ProvidedGeneratorContext extends SpecializationGeneratorContext {
  providedSpecialization() {
    return this.getRuleContext(0, ProvidedSpecializationContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterProvidedGenerator) {
      listener.enterProvidedGenerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitProvidedGenerator) {
      listener.exitProvidedGenerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitProvidedGenerator) {
      return visitor.visitProvidedGenerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ProvidedSpecializationContext extends import_ParserRuleContext.ParserRuleContext {
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  specializationParameterTuple() {
    return this.tryGetRuleContext(0, SpecializationParameterTupleContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_providedSpecialization;
  }
  enterRule(listener) {
    if (listener.enterProvidedSpecialization) {
      listener.enterProvidedSpecialization(this);
    }
  }
  exitRule(listener) {
    if (listener.exitProvidedSpecialization) {
      listener.exitProvidedSpecialization(this);
    }
  }
  accept(visitor) {
    if (visitor.visitProvidedSpecialization) {
      return visitor.visitProvidedSpecialization(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SpecializationParameterTupleContext extends import_ParserRuleContext.ParserRuleContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  specializationParameter(i) {
    if (i === void 0) {
      return this.getRuleContexts(SpecializationParameterContext);
    } else {
      return this.getRuleContext(i, SpecializationParameterContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_specializationParameterTuple;
  }
  enterRule(listener) {
    if (listener.enterSpecializationParameterTuple) {
      listener.enterSpecializationParameterTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSpecializationParameterTuple) {
      listener.exitSpecializationParameterTuple(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSpecializationParameterTuple) {
      return visitor.visitSpecializationParameterTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SpecializationParameterContext extends import_ParserRuleContext.ParserRuleContext {
  Identifier() {
    return this.tryGetToken(QSharpParser.Identifier, 0);
  }
  Ellipsis() {
    return this.tryGetToken(QSharpParser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_specializationParameter;
  }
  enterRule(listener) {
    if (listener.enterSpecializationParameter) {
      listener.enterSpecializationParameter(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSpecializationParameter) {
      listener.exitSpecializationParameter(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSpecializationParameter) {
      return visitor.visitSpecializationParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_type;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class MissingTypeContext extends TypeContext {
  Underscore() {
    return this.getToken(QSharpParser.Underscore, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterMissingType) {
      listener.enterMissingType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMissingType) {
      listener.exitMissingType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMissingType) {
      return visitor.visitMissingType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TupleTypeContext extends TypeContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  type(i) {
    if (i === void 0) {
      return this.getRuleContexts(TypeContext);
    } else {
      return this.getRuleContext(i, TypeContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterTupleType) {
      listener.enterTupleType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTupleType) {
      listener.exitTupleType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTupleType) {
      return visitor.visitTupleType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeParameterContext extends TypeContext {
  TypeParameter() {
    return this.getToken(QSharpParser.TypeParameter, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterTypeParameter) {
      listener.enterTypeParameter(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeParameter) {
      listener.exitTypeParameter(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeParameter) {
      return visitor.visitTypeParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ArrayTypeContext extends TypeContext {
  type() {
    return this.getRuleContext(0, TypeContext);
  }
  BracketLeft() {
    return this.getToken(QSharpParser.BracketLeft, 0);
  }
  BracketRight() {
    return this.getToken(QSharpParser.BracketRight, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterArrayType) {
      listener.enterArrayType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitArrayType) {
      listener.exitArrayType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitArrayType) {
      return visitor.visitArrayType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CallableTypeContext extends TypeContext {
  _from;
  _arrow;
  _to;
  type(i) {
    if (i === void 0) {
      return this.getRuleContexts(TypeContext);
    } else {
      return this.getRuleContext(i, TypeContext);
    }
  }
  ArrowRight() {
    return this.tryGetToken(QSharpParser.ArrowRight, 0);
  }
  FatArrowRight() {
    return this.tryGetToken(QSharpParser.FatArrowRight, 0);
  }
  characteristics() {
    return this.tryGetRuleContext(0, CharacteristicsContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCallableType) {
      listener.enterCallableType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCallableType) {
      listener.exitCallableType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCallableType) {
      return visitor.visitCallableType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BigIntTypeContext extends TypeContext {
  BigInt() {
    return this.getToken(QSharpParser.BigInt, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBigIntType) {
      listener.enterBigIntType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBigIntType) {
      listener.exitBigIntType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBigIntType) {
      return visitor.visitBigIntType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BoolTypeContext extends TypeContext {
  Bool() {
    return this.getToken(QSharpParser.Bool, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBoolType) {
      listener.enterBoolType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBoolType) {
      listener.exitBoolType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBoolType) {
      return visitor.visitBoolType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class DoubleTypeContext extends TypeContext {
  Double() {
    return this.getToken(QSharpParser.Double, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterDoubleType) {
      listener.enterDoubleType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDoubleType) {
      listener.exitDoubleType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDoubleType) {
      return visitor.visitDoubleType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IntTypeContext extends TypeContext {
  Int() {
    return this.getToken(QSharpParser.Int, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterIntType) {
      listener.enterIntType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIntType) {
      listener.exitIntType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIntType) {
      return visitor.visitIntType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class PauliTypeContext extends TypeContext {
  Pauli() {
    return this.getToken(QSharpParser.Pauli, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterPauliType) {
      listener.enterPauliType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPauliType) {
      listener.exitPauliType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPauliType) {
      return visitor.visitPauliType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QubitTypeContext extends TypeContext {
  Qubit() {
    return this.getToken(QSharpParser.Qubit, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterQubitType) {
      listener.enterQubitType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQubitType) {
      listener.exitQubitType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQubitType) {
      return visitor.visitQubitType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class RangeTypeContext extends TypeContext {
  Range() {
    return this.getToken(QSharpParser.Range, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterRangeType) {
      listener.enterRangeType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRangeType) {
      listener.exitRangeType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitRangeType) {
      return visitor.visitRangeType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ResultTypeContext extends TypeContext {
  Result() {
    return this.getToken(QSharpParser.Result, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterResultType) {
      listener.enterResultType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResultType) {
      listener.exitResultType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitResultType) {
      return visitor.visitResultType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class StringTypeContext extends TypeContext {
  String() {
    return this.getToken(QSharpParser.String, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterStringType) {
      listener.enterStringType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStringType) {
      listener.exitStringType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStringType) {
      return visitor.visitStringType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UnitTypeContext extends TypeContext {
  Unit() {
    return this.getToken(QSharpParser.Unit, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUnitType) {
      listener.enterUnitType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnitType) {
      listener.exitUnitType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnitType) {
      return visitor.visitUnitType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UserDefinedTypeContext extends TypeContext {
  qualifiedName() {
    return this.getRuleContext(0, QualifiedNameContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUserDefinedType) {
      listener.enterUserDefinedType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUserDefinedType) {
      listener.exitUserDefinedType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUserDefinedType) {
      return visitor.visitUserDefinedType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class StatementContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_statement;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class ExpressionStatementContext extends StatementContext {
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ReturnStatementContext extends StatementContext {
  Return() {
    return this.getToken(QSharpParser.Return, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterReturnStatement) {
      listener.enterReturnStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitReturnStatement) {
      listener.exitReturnStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitReturnStatement) {
      return visitor.visitReturnStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class FailStatementContext extends StatementContext {
  Fail() {
    return this.getToken(QSharpParser.Fail, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterFailStatement) {
      listener.enterFailStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFailStatement) {
      listener.exitFailStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitFailStatement) {
      return visitor.visitFailStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class LetStatementContext extends StatementContext {
  Let() {
    return this.getToken(QSharpParser.Let, 0);
  }
  symbolBinding() {
    return this.getRuleContext(0, SymbolBindingContext);
  }
  Equal() {
    return this.getToken(QSharpParser.Equal, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterLetStatement) {
      listener.enterLetStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLetStatement) {
      listener.exitLetStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLetStatement) {
      return visitor.visitLetStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class MutableStatementContext extends StatementContext {
  Mutable() {
    return this.getToken(QSharpParser.Mutable, 0);
  }
  symbolBinding() {
    return this.getRuleContext(0, SymbolBindingContext);
  }
  Equal() {
    return this.getToken(QSharpParser.Equal, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterMutableStatement) {
      listener.enterMutableStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMutableStatement) {
      listener.exitMutableStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMutableStatement) {
      return visitor.visitMutableStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SetStatementContext extends StatementContext {
  Set() {
    return this.getToken(QSharpParser.Set, 0);
  }
  symbolBinding() {
    return this.getRuleContext(0, SymbolBindingContext);
  }
  Equal() {
    return this.getToken(QSharpParser.Equal, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterSetStatement) {
      listener.enterSetStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSetStatement) {
      listener.exitSetStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSetStatement) {
      return visitor.visitSetStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UpdateStatementContext extends StatementContext {
  Set() {
    return this.getToken(QSharpParser.Set, 0);
  }
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  updateOperator() {
    return this.getRuleContext(0, UpdateOperatorContext);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUpdateStatement) {
      listener.enterUpdateStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUpdateStatement) {
      listener.exitUpdateStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUpdateStatement) {
      return visitor.visitUpdateStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UpdateWithStatementContext extends StatementContext {
  _index;
  _value;
  Set() {
    return this.getToken(QSharpParser.Set, 0);
  }
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  WithEqual() {
    return this.getToken(QSharpParser.WithEqual, 0);
  }
  ArrowLeft() {
    return this.getToken(QSharpParser.ArrowLeft, 0);
  }
  Semicolon() {
    return this.getToken(QSharpParser.Semicolon, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUpdateWithStatement) {
      listener.enterUpdateWithStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUpdateWithStatement) {
      listener.exitUpdateWithStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUpdateWithStatement) {
      return visitor.visitUpdateWithStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IfStatementContext extends StatementContext {
  If() {
    return this.getToken(QSharpParser.If, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterIfStatement) {
      listener.enterIfStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIfStatement) {
      listener.exitIfStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIfStatement) {
      return visitor.visitIfStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ElifStatementContext extends StatementContext {
  Elif() {
    return this.getToken(QSharpParser.Elif, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterElifStatement) {
      listener.enterElifStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitElifStatement) {
      listener.exitElifStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitElifStatement) {
      return visitor.visitElifStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ElseStatementContext extends StatementContext {
  Else() {
    return this.getToken(QSharpParser.Else, 0);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterElseStatement) {
      listener.enterElseStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitElseStatement) {
      listener.exitElseStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitElseStatement) {
      return visitor.visitElseStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ForStatementContext extends StatementContext {
  For() {
    return this.getToken(QSharpParser.For, 0);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  forBinding() {
    return this.tryGetRuleContext(0, ForBindingContext);
  }
  ParenLeft() {
    return this.tryGetToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.tryGetToken(QSharpParser.ParenRight, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterForStatement) {
      listener.enterForStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitForStatement) {
      listener.exitForStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitForStatement) {
      return visitor.visitForStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class WhileStatementContext extends StatementContext {
  While() {
    return this.getToken(QSharpParser.While, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterWhileStatement) {
      listener.enterWhileStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitWhileStatement) {
      listener.exitWhileStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitWhileStatement) {
      return visitor.visitWhileStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class RepeatStatementContext extends StatementContext {
  Repeat() {
    return this.getToken(QSharpParser.Repeat, 0);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterRepeatStatement) {
      listener.enterRepeatStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRepeatStatement) {
      listener.exitRepeatStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitRepeatStatement) {
      return visitor.visitRepeatStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UntilStatementContext extends StatementContext {
  Until() {
    return this.getToken(QSharpParser.Until, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Semicolon() {
    return this.tryGetToken(QSharpParser.Semicolon, 0);
  }
  Fixup() {
    return this.tryGetToken(QSharpParser.Fixup, 0);
  }
  scope() {
    return this.tryGetRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUntilStatement) {
      listener.enterUntilStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUntilStatement) {
      listener.exitUntilStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUntilStatement) {
      return visitor.visitUntilStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class WithinStatementContext extends StatementContext {
  Within() {
    return this.getToken(QSharpParser.Within, 0);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterWithinStatement) {
      listener.enterWithinStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitWithinStatement) {
      listener.exitWithinStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitWithinStatement) {
      return visitor.visitWithinStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ApplyStatementContext extends StatementContext {
  Apply() {
    return this.getToken(QSharpParser.Apply, 0);
  }
  scope() {
    return this.getRuleContext(0, ScopeContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterApplyStatement) {
      listener.enterApplyStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitApplyStatement) {
      listener.exitApplyStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitApplyStatement) {
      return visitor.visitApplyStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QubitDeclarationContext extends StatementContext {
  _keyword;
  Use() {
    return this.tryGetToken(QSharpParser.Use, 0);
  }
  Using() {
    return this.tryGetToken(QSharpParser.Using, 0);
  }
  Borrow() {
    return this.tryGetToken(QSharpParser.Borrow, 0);
  }
  Borrowing() {
    return this.tryGetToken(QSharpParser.Borrowing, 0);
  }
  qubitBinding() {
    return this.tryGetRuleContext(0, QubitBindingContext);
  }
  ParenLeft() {
    return this.tryGetToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.tryGetToken(QSharpParser.ParenRight, 0);
  }
  scope() {
    return this.tryGetRuleContext(0, ScopeContext);
  }
  Semicolon() {
    return this.tryGetToken(QSharpParser.Semicolon, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterQubitDeclaration) {
      listener.enterQubitDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQubitDeclaration) {
      listener.exitQubitDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQubitDeclaration) {
      return visitor.visitQubitDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ScopeContext extends import_ParserRuleContext.ParserRuleContext {
  BraceLeft() {
    return this.getToken(QSharpParser.BraceLeft, 0);
  }
  BraceRight() {
    return this.getToken(QSharpParser.BraceRight, 0);
  }
  statement(i) {
    if (i === void 0) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_scope;
  }
  enterRule(listener) {
    if (listener.enterScope) {
      listener.enterScope(this);
    }
  }
  exitRule(listener) {
    if (listener.exitScope) {
      listener.exitScope(this);
    }
  }
  accept(visitor) {
    if (visitor.visitScope) {
      return visitor.visitScope(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SymbolBindingContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_symbolBinding;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class DiscardSymbolContext extends SymbolBindingContext {
  Underscore() {
    return this.getToken(QSharpParser.Underscore, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterDiscardSymbol) {
      listener.enterDiscardSymbol(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDiscardSymbol) {
      listener.exitDiscardSymbol(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDiscardSymbol) {
      return visitor.visitDiscardSymbol(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SymbolNameContext extends SymbolBindingContext {
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterSymbolName) {
      listener.enterSymbolName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSymbolName) {
      listener.exitSymbolName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSymbolName) {
      return visitor.visitSymbolName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SymbolTupleContext extends SymbolBindingContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  symbolBinding(i) {
    if (i === void 0) {
      return this.getRuleContexts(SymbolBindingContext);
    } else {
      return this.getRuleContext(i, SymbolBindingContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterSymbolTuple) {
      listener.enterSymbolTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSymbolTuple) {
      listener.exitSymbolTuple(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSymbolTuple) {
      return visitor.visitSymbolTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UpdateOperatorContext extends import_ParserRuleContext.ParserRuleContext {
  CaretEqual() {
    return this.tryGetToken(QSharpParser.CaretEqual, 0);
  }
  AsteriskEqual() {
    return this.tryGetToken(QSharpParser.AsteriskEqual, 0);
  }
  SlashEqual() {
    return this.tryGetToken(QSharpParser.SlashEqual, 0);
  }
  PercentEqual() {
    return this.tryGetToken(QSharpParser.PercentEqual, 0);
  }
  PlusEqual() {
    return this.tryGetToken(QSharpParser.PlusEqual, 0);
  }
  MinusEqual() {
    return this.tryGetToken(QSharpParser.MinusEqual, 0);
  }
  TripleGreaterEqual() {
    return this.tryGetToken(QSharpParser.TripleGreaterEqual, 0);
  }
  TripleLessEqual() {
    return this.tryGetToken(QSharpParser.TripleLessEqual, 0);
  }
  TripleAmpersandEqual() {
    return this.tryGetToken(QSharpParser.TripleAmpersandEqual, 0);
  }
  TripleCaretEqual() {
    return this.tryGetToken(QSharpParser.TripleCaretEqual, 0);
  }
  TriplePipeEqual() {
    return this.tryGetToken(QSharpParser.TriplePipeEqual, 0);
  }
  AndEqual() {
    return this.tryGetToken(QSharpParser.AndEqual, 0);
  }
  OrEqual() {
    return this.tryGetToken(QSharpParser.OrEqual, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_updateOperator;
  }
  enterRule(listener) {
    if (listener.enterUpdateOperator) {
      listener.enterUpdateOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUpdateOperator) {
      listener.exitUpdateOperator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUpdateOperator) {
      return visitor.visitUpdateOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ForBindingContext extends import_ParserRuleContext.ParserRuleContext {
  symbolBinding() {
    return this.getRuleContext(0, SymbolBindingContext);
  }
  In() {
    return this.getToken(QSharpParser.In, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_forBinding;
  }
  enterRule(listener) {
    if (listener.enterForBinding) {
      listener.enterForBinding(this);
    }
  }
  exitRule(listener) {
    if (listener.exitForBinding) {
      listener.exitForBinding(this);
    }
  }
  accept(visitor) {
    if (visitor.visitForBinding) {
      return visitor.visitForBinding(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QubitBindingContext extends import_ParserRuleContext.ParserRuleContext {
  symbolBinding() {
    return this.getRuleContext(0, SymbolBindingContext);
  }
  Equal() {
    return this.getToken(QSharpParser.Equal, 0);
  }
  qubitInitializer() {
    return this.getRuleContext(0, QubitInitializerContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_qubitBinding;
  }
  enterRule(listener) {
    if (listener.enterQubitBinding) {
      listener.enterQubitBinding(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQubitBinding) {
      listener.exitQubitBinding(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQubitBinding) {
      return visitor.visitQubitBinding(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QubitInitializerContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_qubitInitializer;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class SingleQubitContext extends QubitInitializerContext {
  Qubit() {
    return this.getToken(QSharpParser.Qubit, 0);
  }
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterSingleQubit) {
      listener.enterSingleQubit(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSingleQubit) {
      listener.exitSingleQubit(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSingleQubit) {
      return visitor.visitSingleQubit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QubitArrayContext extends QubitInitializerContext {
  _length;
  Qubit() {
    return this.getToken(QSharpParser.Qubit, 0);
  }
  BracketLeft() {
    return this.getToken(QSharpParser.BracketLeft, 0);
  }
  BracketRight() {
    return this.getToken(QSharpParser.BracketRight, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterQubitArray) {
      listener.enterQubitArray(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQubitArray) {
      listener.exitQubitArray(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQubitArray) {
      return visitor.visitQubitArray(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class QubitTupleContext extends QubitInitializerContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  qubitInitializer(i) {
    if (i === void 0) {
      return this.getRuleContexts(QubitInitializerContext);
    } else {
      return this.getRuleContext(i, QubitInitializerContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterQubitTuple) {
      listener.enterQubitTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQubitTuple) {
      listener.exitQubitTuple(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQubitTuple) {
      return visitor.visitQubitTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExpressionContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_expression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class MissingExpressionContext extends ExpressionContext {
  Underscore() {
    return this.getToken(QSharpParser.Underscore, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterMissingExpression) {
      listener.enterMissingExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMissingExpression) {
      listener.exitMissingExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMissingExpression) {
      return visitor.visitMissingExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IdentifierExpressionContext extends ExpressionContext {
  qualifiedName() {
    return this.getRuleContext(0, QualifiedNameContext);
  }
  typeTuple() {
    return this.tryGetRuleContext(0, TypeTupleContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterIdentifierExpression) {
      listener.enterIdentifierExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIdentifierExpression) {
      listener.exitIdentifierExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIdentifierExpression) {
      return visitor.visitIdentifierExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IntegerExpressionContext extends ExpressionContext {
  IntegerLiteral() {
    return this.getToken(QSharpParser.IntegerLiteral, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterIntegerExpression) {
      listener.enterIntegerExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIntegerExpression) {
      listener.exitIntegerExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIntegerExpression) {
      return visitor.visitIntegerExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BigIntegerExpressionContext extends ExpressionContext {
  BigIntegerLiteral() {
    return this.getToken(QSharpParser.BigIntegerLiteral, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBigIntegerExpression) {
      listener.enterBigIntegerExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBigIntegerExpression) {
      listener.exitBigIntegerExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBigIntegerExpression) {
      return visitor.visitBigIntegerExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class DoubleExpressionContext extends ExpressionContext {
  DoubleLiteral() {
    return this.getToken(QSharpParser.DoubleLiteral, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterDoubleExpression) {
      listener.enterDoubleExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDoubleExpression) {
      listener.exitDoubleExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDoubleExpression) {
      return visitor.visitDoubleExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class StringExpressionContext extends ExpressionContext {
  DoubleQuote() {
    return this.getToken(QSharpParser.DoubleQuote, 0);
  }
  StringDoubleQuote() {
    return this.getToken(QSharpParser.StringDoubleQuote, 0);
  }
  stringContent(i) {
    if (i === void 0) {
      return this.getRuleContexts(StringContentContext);
    } else {
      return this.getRuleContext(i, StringContentContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterStringExpression) {
      listener.enterStringExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStringExpression) {
      listener.exitStringExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStringExpression) {
      return visitor.visitStringExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class InterpStringExpressionContext extends ExpressionContext {
  DollarQuote() {
    return this.getToken(QSharpParser.DollarQuote, 0);
  }
  InterpDoubleQuote() {
    return this.getToken(QSharpParser.InterpDoubleQuote, 0);
  }
  interpStringContent(i) {
    if (i === void 0) {
      return this.getRuleContexts(InterpStringContentContext);
    } else {
      return this.getRuleContext(i, InterpStringContentContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterInterpStringExpression) {
      listener.enterInterpStringExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterpStringExpression) {
      listener.exitInterpStringExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInterpStringExpression) {
      return visitor.visitInterpStringExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BoolExpressionContext extends ExpressionContext {
  boolLiteral() {
    return this.getRuleContext(0, BoolLiteralContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBoolExpression) {
      listener.enterBoolExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBoolExpression) {
      listener.exitBoolExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBoolExpression) {
      return visitor.visitBoolExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ResultExpressionContext extends ExpressionContext {
  resultLiteral() {
    return this.getRuleContext(0, ResultLiteralContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterResultExpression) {
      listener.enterResultExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResultExpression) {
      listener.exitResultExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitResultExpression) {
      return visitor.visitResultExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class PauliExpressionContext extends ExpressionContext {
  pauliLiteral() {
    return this.getRuleContext(0, PauliLiteralContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterPauliExpression) {
      listener.enterPauliExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPauliExpression) {
      listener.exitPauliExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPauliExpression) {
      return visitor.visitPauliExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TupleExpressionContext extends ExpressionContext {
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterTupleExpression) {
      listener.enterTupleExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTupleExpression) {
      listener.exitTupleExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTupleExpression) {
      return visitor.visitTupleExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ArrayExpressionContext extends ExpressionContext {
  BracketLeft() {
    return this.getToken(QSharpParser.BracketLeft, 0);
  }
  BracketRight() {
    return this.getToken(QSharpParser.BracketRight, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterArrayExpression) {
      listener.enterArrayExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitArrayExpression) {
      listener.exitArrayExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitArrayExpression) {
      return visitor.visitArrayExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SizedArrayExpressionContext extends ExpressionContext {
  _value;
  _length;
  BracketLeft() {
    return this.getToken(QSharpParser.BracketLeft, 0);
  }
  Comma() {
    return this.getToken(QSharpParser.Comma, 0);
  }
  size() {
    return this.getRuleContext(0, SizeContext);
  }
  Equal() {
    return this.getToken(QSharpParser.Equal, 0);
  }
  BracketRight() {
    return this.getToken(QSharpParser.BracketRight, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterSizedArrayExpression) {
      listener.enterSizedArrayExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSizedArrayExpression) {
      listener.exitSizedArrayExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSizedArrayExpression) {
      return visitor.visitSizedArrayExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class NewArrayExpressionContext extends ExpressionContext {
  _length;
  New() {
    return this.getToken(QSharpParser.New, 0);
  }
  type() {
    return this.getRuleContext(0, TypeContext);
  }
  BracketLeft() {
    return this.getToken(QSharpParser.BracketLeft, 0);
  }
  BracketRight() {
    return this.getToken(QSharpParser.BracketRight, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterNewArrayExpression) {
      listener.enterNewArrayExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNewArrayExpression) {
      listener.exitNewArrayExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNewArrayExpression) {
      return visitor.visitNewArrayExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class NamedItemAccessExpressionContext extends ExpressionContext {
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  DoubleColon() {
    return this.getToken(QSharpParser.DoubleColon, 0);
  }
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterNamedItemAccessExpression) {
      listener.enterNamedItemAccessExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamedItemAccessExpression) {
      listener.exitNamedItemAccessExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamedItemAccessExpression) {
      return visitor.visitNamedItemAccessExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ArrayAccessExpressionContext extends ExpressionContext {
  _array;
  _index;
  BracketLeft() {
    return this.getToken(QSharpParser.BracketLeft, 0);
  }
  BracketRight() {
    return this.getToken(QSharpParser.BracketRight, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterArrayAccessExpression) {
      listener.enterArrayAccessExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitArrayAccessExpression) {
      listener.exitArrayAccessExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitArrayAccessExpression) {
      return visitor.visitArrayAccessExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UnwrapExpressionContext extends ExpressionContext {
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Bang() {
    return this.getToken(QSharpParser.Bang, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUnwrapExpression) {
      listener.enterUnwrapExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnwrapExpression) {
      listener.exitUnwrapExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnwrapExpression) {
      return visitor.visitUnwrapExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ControlledExpressionContext extends ExpressionContext {
  ControlledFunctor() {
    return this.getToken(QSharpParser.ControlledFunctor, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterControlledExpression) {
      listener.enterControlledExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitControlledExpression) {
      listener.exitControlledExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitControlledExpression) {
      return visitor.visitControlledExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class AdjointExpressionContext extends ExpressionContext {
  AdjointFunctor() {
    return this.getToken(QSharpParser.AdjointFunctor, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterAdjointExpression) {
      listener.enterAdjointExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAdjointExpression) {
      listener.exitAdjointExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAdjointExpression) {
      return visitor.visitAdjointExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CallExpressionContext extends ExpressionContext {
  _callable;
  _expression;
  _args = [];
  ParenLeft() {
    return this.getToken(QSharpParser.ParenLeft, 0);
  }
  ParenRight() {
    return this.getToken(QSharpParser.ParenRight, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCallExpression) {
      listener.enterCallExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCallExpression) {
      listener.exitCallExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCallExpression) {
      return visitor.visitCallExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class PrefixOpExpressionContext extends ExpressionContext {
  _op;
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Bang() {
    return this.tryGetToken(QSharpParser.Bang, 0);
  }
  Plus() {
    return this.tryGetToken(QSharpParser.Plus, 0);
  }
  Minus() {
    return this.tryGetToken(QSharpParser.Minus, 0);
  }
  Not() {
    return this.tryGetToken(QSharpParser.Not, 0);
  }
  TripleTilde() {
    return this.tryGetToken(QSharpParser.TripleTilde, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterPrefixOpExpression) {
      listener.enterPrefixOpExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPrefixOpExpression) {
      listener.exitPrefixOpExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPrefixOpExpression) {
      return visitor.visitPrefixOpExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExponentExpressionContext extends ExpressionContext {
  _left;
  _right;
  Caret() {
    return this.getToken(QSharpParser.Caret, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterExponentExpression) {
      listener.enterExponentExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExponentExpression) {
      listener.exitExponentExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExponentExpression) {
      return visitor.visitExponentExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class MultiplyExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  Asterisk() {
    return this.tryGetToken(QSharpParser.Asterisk, 0);
  }
  Slash() {
    return this.tryGetToken(QSharpParser.Slash, 0);
  }
  Percent() {
    return this.tryGetToken(QSharpParser.Percent, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterMultiplyExpression) {
      listener.enterMultiplyExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMultiplyExpression) {
      listener.exitMultiplyExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMultiplyExpression) {
      return visitor.visitMultiplyExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class AddExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  Plus() {
    return this.tryGetToken(QSharpParser.Plus, 0);
  }
  Minus() {
    return this.tryGetToken(QSharpParser.Minus, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterAddExpression) {
      listener.enterAddExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAddExpression) {
      listener.exitAddExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAddExpression) {
      return visitor.visitAddExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ShiftExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  TripleGreater() {
    return this.tryGetToken(QSharpParser.TripleGreater, 0);
  }
  TripleLess() {
    return this.tryGetToken(QSharpParser.TripleLess, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterShiftExpression) {
      listener.enterShiftExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitShiftExpression) {
      listener.exitShiftExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitShiftExpression) {
      return visitor.visitShiftExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class CompareExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  Greater() {
    return this.tryGetToken(QSharpParser.Greater, 0);
  }
  Less() {
    return this.tryGetToken(QSharpParser.Less, 0);
  }
  GreaterEqual() {
    return this.tryGetToken(QSharpParser.GreaterEqual, 0);
  }
  LessEqual() {
    return this.tryGetToken(QSharpParser.LessEqual, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterCompareExpression) {
      listener.enterCompareExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCompareExpression) {
      listener.exitCompareExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCompareExpression) {
      return visitor.visitCompareExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class EqualsExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  DoubleEqual() {
    return this.tryGetToken(QSharpParser.DoubleEqual, 0);
  }
  NotEqual() {
    return this.tryGetToken(QSharpParser.NotEqual, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterEqualsExpression) {
      listener.enterEqualsExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEqualsExpression) {
      listener.exitEqualsExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEqualsExpression) {
      return visitor.visitEqualsExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BitwiseAndExpressionContext extends ExpressionContext {
  _left;
  _right;
  TripleAmpersand() {
    return this.getToken(QSharpParser.TripleAmpersand, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBitwiseAndExpression) {
      listener.enterBitwiseAndExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBitwiseAndExpression) {
      listener.exitBitwiseAndExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBitwiseAndExpression) {
      return visitor.visitBitwiseAndExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BitwiseXorExpressionContext extends ExpressionContext {
  _left;
  _right;
  TripleCaret() {
    return this.getToken(QSharpParser.TripleCaret, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBitwiseXorExpression) {
      listener.enterBitwiseXorExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBitwiseXorExpression) {
      listener.exitBitwiseXorExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBitwiseXorExpression) {
      return visitor.visitBitwiseXorExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BitwiseOrExpressionContext extends ExpressionContext {
  _left;
  _right;
  TriplePipe() {
    return this.getToken(QSharpParser.TriplePipe, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterBitwiseOrExpression) {
      listener.enterBitwiseOrExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBitwiseOrExpression) {
      listener.exitBitwiseOrExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBitwiseOrExpression) {
      return visitor.visitBitwiseOrExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class AndExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  DoubleAmpersand() {
    return this.tryGetToken(QSharpParser.DoubleAmpersand, 0);
  }
  And() {
    return this.tryGetToken(QSharpParser.And, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterAndExpression) {
      listener.enterAndExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAndExpression) {
      listener.exitAndExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAndExpression) {
      return visitor.visitAndExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class OrExpressionContext extends ExpressionContext {
  _left;
  _op;
  _right;
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  DoublePipe() {
    return this.tryGetToken(QSharpParser.DoublePipe, 0);
  }
  Or() {
    return this.tryGetToken(QSharpParser.Or, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterOrExpression) {
      listener.enterOrExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOrExpression) {
      listener.exitOrExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOrExpression) {
      return visitor.visitOrExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ConditionalExpressionContext extends ExpressionContext {
  _cond;
  _then;
  _else;
  Question() {
    return this.getToken(QSharpParser.Question, 0);
  }
  Pipe() {
    return this.getToken(QSharpParser.Pipe, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class RangeExpressionContext extends ExpressionContext {
  _left;
  _right;
  DoubleDot() {
    return this.getToken(QSharpParser.DoubleDot, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterRangeExpression) {
      listener.enterRangeExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRangeExpression) {
      listener.exitRangeExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitRangeExpression) {
      return visitor.visitRangeExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class RightOpenRangeExpressionContext extends ExpressionContext {
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  Ellipsis() {
    return this.getToken(QSharpParser.Ellipsis, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterRightOpenRangeExpression) {
      listener.enterRightOpenRangeExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRightOpenRangeExpression) {
      listener.exitRightOpenRangeExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitRightOpenRangeExpression) {
      return visitor.visitRightOpenRangeExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class LeftOpenRangeExpressionContext extends ExpressionContext {
  Ellipsis() {
    return this.getToken(QSharpParser.Ellipsis, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterLeftOpenRangeExpression) {
      listener.enterLeftOpenRangeExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLeftOpenRangeExpression) {
      listener.exitLeftOpenRangeExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLeftOpenRangeExpression) {
      return visitor.visitLeftOpenRangeExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class OpenRangeExpressionContext extends ExpressionContext {
  Ellipsis() {
    return this.getToken(QSharpParser.Ellipsis, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterOpenRangeExpression) {
      listener.enterOpenRangeExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOpenRangeExpression) {
      listener.exitOpenRangeExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOpenRangeExpression) {
      return visitor.visitOpenRangeExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class UpdateExpressionContext extends ExpressionContext {
  _record;
  _index;
  _value;
  With() {
    return this.getToken(QSharpParser.With, 0);
  }
  ArrowLeft() {
    return this.getToken(QSharpParser.ArrowLeft, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterUpdateExpression) {
      listener.enterUpdateExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUpdateExpression) {
      listener.exitUpdateExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUpdateExpression) {
      return visitor.visitUpdateExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class LambdaExpressionContext extends ExpressionContext {
  _arrow;
  symbolBinding() {
    return this.getRuleContext(0, SymbolBindingContext);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  ArrowRight() {
    return this.tryGetToken(QSharpParser.ArrowRight, 0);
  }
  FatArrowRight() {
    return this.tryGetToken(QSharpParser.FatArrowRight, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterLambdaExpression) {
      listener.enterLambdaExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLambdaExpression) {
      listener.exitLambdaExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLambdaExpression) {
      return visitor.visitLambdaExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class SizeContext extends import_ParserRuleContext.ParserRuleContext {
  Identifier() {
    return this.getToken(QSharpParser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_size;
  }
  enterRule(listener) {
    if (listener.enterSize) {
      listener.enterSize(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSize) {
      listener.exitSize(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSize) {
      return visitor.visitSize(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class TypeTupleContext extends import_ParserRuleContext.ParserRuleContext {
  Less() {
    return this.getToken(QSharpParser.Less, 0);
  }
  Greater() {
    return this.getToken(QSharpParser.Greater, 0);
  }
  type(i) {
    if (i === void 0) {
      return this.getRuleContexts(TypeContext);
    } else {
      return this.getRuleContext(i, TypeContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(QSharpParser.Comma);
    } else {
      return this.getToken(QSharpParser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_typeTuple;
  }
  enterRule(listener) {
    if (listener.enterTypeTuple) {
      listener.enterTypeTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeTuple) {
      listener.exitTypeTuple(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeTuple) {
      return visitor.visitTypeTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BoolLiteralContext extends import_ParserRuleContext.ParserRuleContext {
  False() {
    return this.tryGetToken(QSharpParser.False, 0);
  }
  True() {
    return this.tryGetToken(QSharpParser.True, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_boolLiteral;
  }
  enterRule(listener) {
    if (listener.enterBoolLiteral) {
      listener.enterBoolLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBoolLiteral) {
      listener.exitBoolLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBoolLiteral) {
      return visitor.visitBoolLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ResultLiteralContext extends import_ParserRuleContext.ParserRuleContext {
  Zero() {
    return this.tryGetToken(QSharpParser.Zero, 0);
  }
  One() {
    return this.tryGetToken(QSharpParser.One, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_resultLiteral;
  }
  enterRule(listener) {
    if (listener.enterResultLiteral) {
      listener.enterResultLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResultLiteral) {
      listener.exitResultLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor.visitResultLiteral) {
      return visitor.visitResultLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class PauliLiteralContext extends import_ParserRuleContext.ParserRuleContext {
  PauliI() {
    return this.tryGetToken(QSharpParser.PauliI, 0);
  }
  PauliX() {
    return this.tryGetToken(QSharpParser.PauliX, 0);
  }
  PauliY() {
    return this.tryGetToken(QSharpParser.PauliY, 0);
  }
  PauliZ() {
    return this.tryGetToken(QSharpParser.PauliZ, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_pauliLiteral;
  }
  enterRule(listener) {
    if (listener.enterPauliLiteral) {
      listener.enterPauliLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPauliLiteral) {
      listener.exitPauliLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPauliLiteral) {
      return visitor.visitPauliLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class StringContentContext extends import_ParserRuleContext.ParserRuleContext {
  StringEscape() {
    return this.tryGetToken(QSharpParser.StringEscape, 0);
  }
  StringText() {
    return this.tryGetToken(QSharpParser.StringText, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_stringContent;
  }
  enterRule(listener) {
    if (listener.enterStringContent) {
      listener.enterStringContent(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStringContent) {
      listener.exitStringContent(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStringContent) {
      return visitor.visitStringContent(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class InterpStringContentContext extends import_ParserRuleContext.ParserRuleContext {
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return QSharpParser.RULE_interpStringContent;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}
class InterpStringEscapeContentContext extends InterpStringContentContext {
  InterpStringEscape() {
    return this.getToken(QSharpParser.InterpStringEscape, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterInterpStringEscapeContent) {
      listener.enterInterpStringEscapeContent(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterpStringEscapeContent) {
      listener.exitInterpStringEscapeContent(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInterpStringEscapeContent) {
      return visitor.visitInterpStringEscapeContent(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class InterpExpressionContentContext extends InterpStringContentContext {
  InterpBraceLeft() {
    return this.getToken(QSharpParser.InterpBraceLeft, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  BraceRight() {
    return this.getToken(QSharpParser.BraceRight, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterInterpExpressionContent) {
      listener.enterInterpExpressionContent(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterpExpressionContent) {
      listener.exitInterpExpressionContent(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInterpExpressionContent) {
      return visitor.visitInterpExpressionContent(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class InterpTextContentContext extends InterpStringContentContext {
  InterpStringText() {
    return this.getToken(QSharpParser.InterpStringText, 0);
  }
  constructor(ctx) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  enterRule(listener) {
    if (listener.enterInterpTextContent) {
      listener.enterInterpTextContent(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterpTextContent) {
      listener.exitInterpTextContent(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInterpTextContent) {
      return visitor.visitInterpTextContent(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccessContext,
  AddExpressionContext,
  AdjointCharacteristicsContext,
  AdjointExpressionContext,
  AndExpressionContext,
  ApplyStatementContext,
  ArrayAccessExpressionContext,
  ArrayExpressionContext,
  ArrayTypeContext,
  AttributeContext,
  AutoGeneratorContext,
  BigIntTypeContext,
  BigIntegerExpressionContext,
  BitwiseAndExpressionContext,
  BitwiseOrExpressionContext,
  BitwiseXorExpressionContext,
  BoolExpressionContext,
  BoolLiteralContext,
  BoolTypeContext,
  CallExpressionContext,
  CallableBodyContext,
  CallableDeclarationContext,
  CallableElementContext,
  CallableSpecializationsContext,
  CallableStatementsContext,
  CallableTypeContext,
  CharacteristicGroupContext,
  CharacteristicsContext,
  CharacteristicsExpressionContext,
  CompareExpressionContext,
  ConditionalExpressionContext,
  ControlledCharacteristicsContext,
  ControlledExpressionContext,
  DeclarationPrefixContext,
  DiscardSymbolContext,
  DistributeGeneratorContext,
  DocumentContext,
  DoubleExpressionContext,
  DoubleTypeContext,
  ElifStatementContext,
  ElseStatementContext,
  EqualsExpressionContext,
  ExponentExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  FailStatementContext,
  ForBindingContext,
  ForStatementContext,
  IdentifierExpressionContext,
  IfStatementContext,
  IntTypeContext,
  IntegerExpressionContext,
  InterpExpressionContentContext,
  InterpStringContentContext,
  InterpStringEscapeContentContext,
  InterpStringExpressionContext,
  InterpTextContentContext,
  IntersectCharacteristicsContext,
  IntrinsicGeneratorContext,
  InvertGeneratorContext,
  LambdaExpressionContext,
  LeftOpenRangeExpressionContext,
  LetStatementContext,
  MissingExpressionContext,
  MissingTypeContext,
  MultiplyExpressionContext,
  MutableStatementContext,
  NamedItemAccessExpressionContext,
  NamedItemContext,
  NamedParameterContext,
  NamedTypeItemContext,
  NamespaceContext,
  NamespaceElementContext,
  NewArrayExpressionContext,
  OpenDirectiveContext,
  OpenElementContext,
  OpenRangeExpressionContext,
  OrExpressionContext,
  ParameterContext,
  ParameterTupleContext,
  PauliExpressionContext,
  PauliLiteralContext,
  PauliTypeContext,
  PrefixOpExpressionContext,
  ProvidedGeneratorContext,
  ProvidedSpecializationContext,
  QSharpParser,
  QualifiedNameContext,
  QubitArrayContext,
  QubitBindingContext,
  QubitDeclarationContext,
  QubitInitializerContext,
  QubitTupleContext,
  QubitTypeContext,
  RangeExpressionContext,
  RangeTypeContext,
  RepeatStatementContext,
  ResultExpressionContext,
  ResultLiteralContext,
  ResultTypeContext,
  ReturnStatementContext,
  RightOpenRangeExpressionContext,
  ScopeContext,
  SelfGeneratorContext,
  SetStatementContext,
  ShiftExpressionContext,
  SingleQubitContext,
  SizeContext,
  SizedArrayExpressionContext,
  SpecializationContext,
  SpecializationGeneratorContext,
  SpecializationNameContext,
  SpecializationParameterContext,
  SpecializationParameterTupleContext,
  StatementContext,
  StringContentContext,
  StringExpressionContext,
  StringTypeContext,
  SymbolBindingContext,
  SymbolNameContext,
  SymbolTupleContext,
  TupleExpressionContext,
  TupleTypeContext,
  TupleUnderlyingTypeContext,
  TupledParameterContext,
  TypeContext,
  TypeDeclarationContext,
  TypeDeclarationTupleContext,
  TypeElementContext,
  TypeParameterBindingContext,
  TypeParameterContext,
  TypeTupleContext,
  TypeTupleItemContext,
  UnderlyingTypeContext,
  UnderlyingTypeItemContext,
  UnionCharacteristicsContext,
  UnitTypeContext,
  UnnamedTypeItemContext,
  UntilStatementContext,
  UnwrapExpressionContext,
  UpdateExpressionContext,
  UpdateOperatorContext,
  UpdateStatementContext,
  UpdateWithStatementContext,
  UserDefinedTypeContext,
  WhileStatementContext,
  WithinStatementContext
});
//# sourceMappingURL=QSharpParser.js.map
