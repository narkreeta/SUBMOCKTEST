// Generated from ./CSHARP/QSharpParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { InterpStringEscapeContentContext } from "./QSharpParser";
import { InterpExpressionContentContext } from "./QSharpParser";
import { InterpTextContentContext } from "./QSharpParser";
import { AdjointCharacteristicsContext } from "./QSharpParser";
import { ControlledCharacteristicsContext } from "./QSharpParser";
import { CharacteristicGroupContext } from "./QSharpParser";
import { IntersectCharacteristicsContext } from "./QSharpParser";
import { UnionCharacteristicsContext } from "./QSharpParser";
import { MissingTypeContext } from "./QSharpParser";
import { TupleTypeContext } from "./QSharpParser";
import { TypeParameterContext } from "./QSharpParser";
import { ArrayTypeContext } from "./QSharpParser";
import { CallableTypeContext } from "./QSharpParser";
import { BigIntTypeContext } from "./QSharpParser";
import { BoolTypeContext } from "./QSharpParser";
import { DoubleTypeContext } from "./QSharpParser";
import { IntTypeContext } from "./QSharpParser";
import { PauliTypeContext } from "./QSharpParser";
import { QubitTypeContext } from "./QSharpParser";
import { RangeTypeContext } from "./QSharpParser";
import { ResultTypeContext } from "./QSharpParser";
import { StringTypeContext } from "./QSharpParser";
import { UnitTypeContext } from "./QSharpParser";
import { UserDefinedTypeContext } from "./QSharpParser";
import { DiscardSymbolContext } from "./QSharpParser";
import { SymbolNameContext } from "./QSharpParser";
import { SymbolTupleContext } from "./QSharpParser";
import { NamedTypeItemContext } from "./QSharpParser";
import { UnderlyingTypeItemContext } from "./QSharpParser";
import { NamedParameterContext } from "./QSharpParser";
import { TupledParameterContext } from "./QSharpParser";
import { ExpressionStatementContext } from "./QSharpParser";
import { ReturnStatementContext } from "./QSharpParser";
import { FailStatementContext } from "./QSharpParser";
import { LetStatementContext } from "./QSharpParser";
import { MutableStatementContext } from "./QSharpParser";
import { SetStatementContext } from "./QSharpParser";
import { UpdateStatementContext } from "./QSharpParser";
import { UpdateWithStatementContext } from "./QSharpParser";
import { IfStatementContext } from "./QSharpParser";
import { ElifStatementContext } from "./QSharpParser";
import { ElseStatementContext } from "./QSharpParser";
import { ForStatementContext } from "./QSharpParser";
import { WhileStatementContext } from "./QSharpParser";
import { RepeatStatementContext } from "./QSharpParser";
import { UntilStatementContext } from "./QSharpParser";
import { WithinStatementContext } from "./QSharpParser";
import { ApplyStatementContext } from "./QSharpParser";
import { QubitDeclarationContext } from "./QSharpParser";
import { CallableStatementsContext } from "./QSharpParser";
import { CallableSpecializationsContext } from "./QSharpParser";
import { MissingExpressionContext } from "./QSharpParser";
import { IdentifierExpressionContext } from "./QSharpParser";
import { IntegerExpressionContext } from "./QSharpParser";
import { BigIntegerExpressionContext } from "./QSharpParser";
import { DoubleExpressionContext } from "./QSharpParser";
import { StringExpressionContext } from "./QSharpParser";
import { InterpStringExpressionContext } from "./QSharpParser";
import { BoolExpressionContext } from "./QSharpParser";
import { ResultExpressionContext } from "./QSharpParser";
import { PauliExpressionContext } from "./QSharpParser";
import { TupleExpressionContext } from "./QSharpParser";
import { ArrayExpressionContext } from "./QSharpParser";
import { SizedArrayExpressionContext } from "./QSharpParser";
import { NewArrayExpressionContext } from "./QSharpParser";
import { NamedItemAccessExpressionContext } from "./QSharpParser";
import { ArrayAccessExpressionContext } from "./QSharpParser";
import { UnwrapExpressionContext } from "./QSharpParser";
import { ControlledExpressionContext } from "./QSharpParser";
import { AdjointExpressionContext } from "./QSharpParser";
import { CallExpressionContext } from "./QSharpParser";
import { PrefixOpExpressionContext } from "./QSharpParser";
import { ExponentExpressionContext } from "./QSharpParser";
import { MultiplyExpressionContext } from "./QSharpParser";
import { AddExpressionContext } from "./QSharpParser";
import { ShiftExpressionContext } from "./QSharpParser";
import { CompareExpressionContext } from "./QSharpParser";
import { EqualsExpressionContext } from "./QSharpParser";
import { BitwiseAndExpressionContext } from "./QSharpParser";
import { BitwiseXorExpressionContext } from "./QSharpParser";
import { BitwiseOrExpressionContext } from "./QSharpParser";
import { AndExpressionContext } from "./QSharpParser";
import { OrExpressionContext } from "./QSharpParser";
import { ConditionalExpressionContext } from "./QSharpParser";
import { RangeExpressionContext } from "./QSharpParser";
import { RightOpenRangeExpressionContext } from "./QSharpParser";
import { LeftOpenRangeExpressionContext } from "./QSharpParser";
import { OpenRangeExpressionContext } from "./QSharpParser";
import { UpdateExpressionContext } from "./QSharpParser";
import { LambdaExpressionContext } from "./QSharpParser";
import { OpenElementContext } from "./QSharpParser";
import { TypeElementContext } from "./QSharpParser";
import { CallableElementContext } from "./QSharpParser";
import { AutoGeneratorContext } from "./QSharpParser";
import { SelfGeneratorContext } from "./QSharpParser";
import { InvertGeneratorContext } from "./QSharpParser";
import { DistributeGeneratorContext } from "./QSharpParser";
import { IntrinsicGeneratorContext } from "./QSharpParser";
import { ProvidedGeneratorContext } from "./QSharpParser";
import { TupleUnderlyingTypeContext } from "./QSharpParser";
import { UnnamedTypeItemContext } from "./QSharpParser";
import { SingleQubitContext } from "./QSharpParser";
import { QubitArrayContext } from "./QSharpParser";
import { QubitTupleContext } from "./QSharpParser";
import { DocumentContext } from "./QSharpParser";
import { NamespaceContext } from "./QSharpParser";
import { QualifiedNameContext } from "./QSharpParser";
import { NamespaceElementContext } from "./QSharpParser";
import { OpenDirectiveContext } from "./QSharpParser";
import { AttributeContext } from "./QSharpParser";
import { AccessContext } from "./QSharpParser";
import { DeclarationPrefixContext } from "./QSharpParser";
import { TypeDeclarationContext } from "./QSharpParser";
import { UnderlyingTypeContext } from "./QSharpParser";
import { TypeDeclarationTupleContext } from "./QSharpParser";
import { TypeTupleItemContext } from "./QSharpParser";
import { NamedItemContext } from "./QSharpParser";
import { CallableDeclarationContext } from "./QSharpParser";
import { TypeParameterBindingContext } from "./QSharpParser";
import { ParameterTupleContext } from "./QSharpParser";
import { ParameterContext } from "./QSharpParser";
import { CharacteristicsContext } from "./QSharpParser";
import { CharacteristicsExpressionContext } from "./QSharpParser";
import { CallableBodyContext } from "./QSharpParser";
import { SpecializationContext } from "./QSharpParser";
import { SpecializationNameContext } from "./QSharpParser";
import { SpecializationGeneratorContext } from "./QSharpParser";
import { ProvidedSpecializationContext } from "./QSharpParser";
import { SpecializationParameterTupleContext } from "./QSharpParser";
import { SpecializationParameterContext } from "./QSharpParser";
import { TypeContext } from "./QSharpParser";
import { StatementContext } from "./QSharpParser";
import { ScopeContext } from "./QSharpParser";
import { SymbolBindingContext } from "./QSharpParser";
import { UpdateOperatorContext } from "./QSharpParser";
import { ForBindingContext } from "./QSharpParser";
import { QubitBindingContext } from "./QSharpParser";
import { QubitInitializerContext } from "./QSharpParser";
import { ExpressionContext } from "./QSharpParser";
import { SizeContext } from "./QSharpParser";
import { TypeTupleContext } from "./QSharpParser";
import { BoolLiteralContext } from "./QSharpParser";
import { ResultLiteralContext } from "./QSharpParser";
import { PauliLiteralContext } from "./QSharpParser";
import { StringContentContext } from "./QSharpParser";
import { InterpStringContentContext } from "./QSharpParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `QSharpParser`.
 */
export interface QSharpParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `InterpStringEscapeContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	enterInterpStringEscapeContent?: (ctx: InterpStringEscapeContentContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpStringEscapeContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	exitInterpStringEscapeContent?: (ctx: InterpStringEscapeContentContext) => void;

	/**
	 * Enter a parse tree produced by the `InterpExpressionContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	enterInterpExpressionContent?: (ctx: InterpExpressionContentContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpExpressionContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	exitInterpExpressionContent?: (ctx: InterpExpressionContentContext) => void;

	/**
	 * Enter a parse tree produced by the `InterpTextContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	enterInterpTextContent?: (ctx: InterpTextContentContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpTextContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	exitInterpTextContent?: (ctx: InterpTextContentContext) => void;

	/**
	 * Enter a parse tree produced by the `AdjointCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	enterAdjointCharacteristics?: (ctx: AdjointCharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by the `AdjointCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	exitAdjointCharacteristics?: (ctx: AdjointCharacteristicsContext) => void;

	/**
	 * Enter a parse tree produced by the `ControlledCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	enterControlledCharacteristics?: (ctx: ControlledCharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by the `ControlledCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	exitControlledCharacteristics?: (ctx: ControlledCharacteristicsContext) => void;

	/**
	 * Enter a parse tree produced by the `CharacteristicGroup`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	enterCharacteristicGroup?: (ctx: CharacteristicGroupContext) => void;
	/**
	 * Exit a parse tree produced by the `CharacteristicGroup`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	exitCharacteristicGroup?: (ctx: CharacteristicGroupContext) => void;

	/**
	 * Enter a parse tree produced by the `IntersectCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	enterIntersectCharacteristics?: (ctx: IntersectCharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by the `IntersectCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	exitIntersectCharacteristics?: (ctx: IntersectCharacteristicsContext) => void;

	/**
	 * Enter a parse tree produced by the `UnionCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	enterUnionCharacteristics?: (ctx: UnionCharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by the `UnionCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	exitUnionCharacteristics?: (ctx: UnionCharacteristicsContext) => void;

	/**
	 * Enter a parse tree produced by the `MissingType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterMissingType?: (ctx: MissingTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `MissingType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitMissingType?: (ctx: MissingTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeParameter`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeParameter`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `CallableType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterCallableType?: (ctx: CallableTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `CallableType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitCallableType?: (ctx: CallableTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `BigIntType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterBigIntType?: (ctx: BigIntTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `BigIntType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitBigIntType?: (ctx: BigIntTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `BoolType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterBoolType?: (ctx: BoolTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `BoolType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitBoolType?: (ctx: BoolTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `DoubleType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterDoubleType?: (ctx: DoubleTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `DoubleType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitDoubleType?: (ctx: DoubleTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `IntType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterIntType?: (ctx: IntTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `IntType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitIntType?: (ctx: IntTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `PauliType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterPauliType?: (ctx: PauliTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `PauliType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitPauliType?: (ctx: PauliTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `QubitType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterQubitType?: (ctx: QubitTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `QubitType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitQubitType?: (ctx: QubitTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `RangeType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitRangeType?: (ctx: RangeTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `ResultType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterResultType?: (ctx: ResultTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ResultType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitResultType?: (ctx: ResultTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `StringType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterStringType?: (ctx: StringTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `StringType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitStringType?: (ctx: StringTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `UnitType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterUnitType?: (ctx: UnitTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `UnitType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitUnitType?: (ctx: UnitTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `UserDefinedType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedType?: (ctx: UserDefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `UserDefinedType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedType?: (ctx: UserDefinedTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `DiscardSymbol`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	enterDiscardSymbol?: (ctx: DiscardSymbolContext) => void;
	/**
	 * Exit a parse tree produced by the `DiscardSymbol`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	exitDiscardSymbol?: (ctx: DiscardSymbolContext) => void;

	/**
	 * Enter a parse tree produced by the `SymbolName`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	enterSymbolName?: (ctx: SymbolNameContext) => void;
	/**
	 * Exit a parse tree produced by the `SymbolName`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	exitSymbolName?: (ctx: SymbolNameContext) => void;

	/**
	 * Enter a parse tree produced by the `SymbolTuple`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	enterSymbolTuple?: (ctx: SymbolTupleContext) => void;
	/**
	 * Exit a parse tree produced by the `SymbolTuple`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	exitSymbolTuple?: (ctx: SymbolTupleContext) => void;

	/**
	 * Enter a parse tree produced by the `NamedTypeItem`
	 * labeled alternative in `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 */
	enterNamedTypeItem?: (ctx: NamedTypeItemContext) => void;
	/**
	 * Exit a parse tree produced by the `NamedTypeItem`
	 * labeled alternative in `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 */
	exitNamedTypeItem?: (ctx: NamedTypeItemContext) => void;

	/**
	 * Enter a parse tree produced by the `UnderlyingTypeItem`
	 * labeled alternative in `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 */
	enterUnderlyingTypeItem?: (ctx: UnderlyingTypeItemContext) => void;
	/**
	 * Exit a parse tree produced by the `UnderlyingTypeItem`
	 * labeled alternative in `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 */
	exitUnderlyingTypeItem?: (ctx: UnderlyingTypeItemContext) => void;

	/**
	 * Enter a parse tree produced by the `NamedParameter`
	 * labeled alternative in `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterNamedParameter?: (ctx: NamedParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `NamedParameter`
	 * labeled alternative in `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitNamedParameter?: (ctx: NamedParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `TupledParameter`
	 * labeled alternative in `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterTupledParameter?: (ctx: TupledParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `TupledParameter`
	 * labeled alternative in `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitTupledParameter?: (ctx: TupledParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpressionStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpressionStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `FailStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterFailStatement?: (ctx: FailStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `FailStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitFailStatement?: (ctx: FailStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `LetStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLetStatement?: (ctx: LetStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `LetStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLetStatement?: (ctx: LetStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `MutableStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterMutableStatement?: (ctx: MutableStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `MutableStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitMutableStatement?: (ctx: MutableStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `SetStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetStatement?: (ctx: SetStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `SetStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetStatement?: (ctx: SetStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `UpdateStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `UpdateStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `UpdateWithStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUpdateWithStatement?: (ctx: UpdateWithStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `UpdateWithStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUpdateWithStatement?: (ctx: UpdateWithStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `IfStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `IfStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ElifStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterElifStatement?: (ctx: ElifStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ElifStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitElifStatement?: (ctx: ElifStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ElseStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ElseStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `WhileStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `RepeatStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `RepeatStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRepeatStatement?: (ctx: RepeatStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `UntilStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUntilStatement?: (ctx: UntilStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `UntilStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUntilStatement?: (ctx: UntilStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `WithinStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterWithinStatement?: (ctx: WithinStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WithinStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitWithinStatement?: (ctx: WithinStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ApplyStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterApplyStatement?: (ctx: ApplyStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ApplyStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitApplyStatement?: (ctx: ApplyStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `QubitDeclaration`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterQubitDeclaration?: (ctx: QubitDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `QubitDeclaration`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitQubitDeclaration?: (ctx: QubitDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `CallableStatements`
	 * labeled alternative in `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 */
	enterCallableStatements?: (ctx: CallableStatementsContext) => void;
	/**
	 * Exit a parse tree produced by the `CallableStatements`
	 * labeled alternative in `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 */
	exitCallableStatements?: (ctx: CallableStatementsContext) => void;

	/**
	 * Enter a parse tree produced by the `CallableSpecializations`
	 * labeled alternative in `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 */
	enterCallableSpecializations?: (ctx: CallableSpecializationsContext) => void;
	/**
	 * Exit a parse tree produced by the `CallableSpecializations`
	 * labeled alternative in `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 */
	exitCallableSpecializations?: (ctx: CallableSpecializationsContext) => void;

	/**
	 * Enter a parse tree produced by the `MissingExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMissingExpression?: (ctx: MissingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MissingExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMissingExpression?: (ctx: MissingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IntegerExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIntegerExpression?: (ctx: IntegerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IntegerExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIntegerExpression?: (ctx: IntegerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BigIntegerExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBigIntegerExpression?: (ctx: BigIntegerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BigIntegerExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBigIntegerExpression?: (ctx: BigIntegerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `DoubleExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDoubleExpression?: (ctx: DoubleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DoubleExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDoubleExpression?: (ctx: DoubleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `StringExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `StringExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InterpStringExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInterpStringExpression?: (ctx: InterpStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpStringExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInterpStringExpression?: (ctx: InterpStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BoolExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBoolExpression?: (ctx: BoolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BoolExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBoolExpression?: (ctx: BoolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ResultExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterResultExpression?: (ctx: ResultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ResultExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitResultExpression?: (ctx: ResultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PauliExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPauliExpression?: (ctx: PauliExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PauliExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPauliExpression?: (ctx: PauliExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTupleExpression?: (ctx: TupleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTupleExpression?: (ctx: TupleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SizedArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSizedArrayExpression?: (ctx: SizedArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SizedArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSizedArrayExpression?: (ctx: SizedArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NewArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNewArrayExpression?: (ctx: NewArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NewArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNewArrayExpression?: (ctx: NewArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NamedItemAccessExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNamedItemAccessExpression?: (ctx: NamedItemAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NamedItemAccessExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNamedItemAccessExpression?: (ctx: NamedItemAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayAccessExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayAccessExpression?: (ctx: ArrayAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayAccessExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayAccessExpression?: (ctx: ArrayAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnwrapExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnwrapExpression?: (ctx: UnwrapExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnwrapExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnwrapExpression?: (ctx: UnwrapExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ControlledExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterControlledExpression?: (ctx: ControlledExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ControlledExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitControlledExpression?: (ctx: ControlledExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdjointExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdjointExpression?: (ctx: AdjointExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdjointExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdjointExpression?: (ctx: AdjointExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CallExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CallExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCallExpression?: (ctx: CallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PrefixOpExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrefixOpExpression?: (ctx: PrefixOpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PrefixOpExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrefixOpExpression?: (ctx: PrefixOpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ExponentExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExponentExpression?: (ctx: ExponentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ExponentExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExponentExpression?: (ctx: ExponentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplyExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplyExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AddExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AddExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ShiftExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ShiftExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CompareExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompareExpression?: (ctx: CompareExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CompareExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompareExpression?: (ctx: CompareExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualsExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualsExpression?: (ctx: EqualsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualsExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualsExpression?: (ctx: EqualsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitwiseAndExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitwiseAndExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitwiseXorExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitwiseXorExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitwiseOrExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitwiseOrExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AndExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `OrExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRangeExpression?: (ctx: RangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRangeExpression?: (ctx: RangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RightOpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRightOpenRangeExpression?: (ctx: RightOpenRangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RightOpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRightOpenRangeExpression?: (ctx: RightOpenRangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LeftOpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLeftOpenRangeExpression?: (ctx: LeftOpenRangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LeftOpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLeftOpenRangeExpression?: (ctx: LeftOpenRangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `OpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOpenRangeExpression?: (ctx: OpenRangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `OpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOpenRangeExpression?: (ctx: OpenRangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UpdateExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUpdateExpression?: (ctx: UpdateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UpdateExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUpdateExpression?: (ctx: UpdateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LambdaExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LambdaExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `OpenElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	enterOpenElement?: (ctx: OpenElementContext) => void;
	/**
	 * Exit a parse tree produced by the `OpenElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	exitOpenElement?: (ctx: OpenElementContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	enterTypeElement?: (ctx: TypeElementContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	exitTypeElement?: (ctx: TypeElementContext) => void;

	/**
	 * Enter a parse tree produced by the `CallableElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	enterCallableElement?: (ctx: CallableElementContext) => void;
	/**
	 * Exit a parse tree produced by the `CallableElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	exitCallableElement?: (ctx: CallableElementContext) => void;

	/**
	 * Enter a parse tree produced by the `AutoGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterAutoGenerator?: (ctx: AutoGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by the `AutoGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitAutoGenerator?: (ctx: AutoGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by the `SelfGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterSelfGenerator?: (ctx: SelfGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by the `SelfGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitSelfGenerator?: (ctx: SelfGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by the `InvertGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterInvertGenerator?: (ctx: InvertGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by the `InvertGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitInvertGenerator?: (ctx: InvertGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by the `DistributeGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterDistributeGenerator?: (ctx: DistributeGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by the `DistributeGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitDistributeGenerator?: (ctx: DistributeGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by the `IntrinsicGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterIntrinsicGenerator?: (ctx: IntrinsicGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by the `IntrinsicGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitIntrinsicGenerator?: (ctx: IntrinsicGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by the `ProvidedGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterProvidedGenerator?: (ctx: ProvidedGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by the `ProvidedGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitProvidedGenerator?: (ctx: ProvidedGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleUnderlyingType`
	 * labeled alternative in `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 */
	enterTupleUnderlyingType?: (ctx: TupleUnderlyingTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleUnderlyingType`
	 * labeled alternative in `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 */
	exitTupleUnderlyingType?: (ctx: TupleUnderlyingTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `UnnamedTypeItem`
	 * labeled alternative in `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 */
	enterUnnamedTypeItem?: (ctx: UnnamedTypeItemContext) => void;
	/**
	 * Exit a parse tree produced by the `UnnamedTypeItem`
	 * labeled alternative in `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 */
	exitUnnamedTypeItem?: (ctx: UnnamedTypeItemContext) => void;

	/**
	 * Enter a parse tree produced by the `SingleQubit`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	enterSingleQubit?: (ctx: SingleQubitContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleQubit`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	exitSingleQubit?: (ctx: SingleQubitContext) => void;

	/**
	 * Enter a parse tree produced by the `QubitArray`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	enterQubitArray?: (ctx: QubitArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `QubitArray`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	exitQubitArray?: (ctx: QubitArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `QubitTuple`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	enterQubitTuple?: (ctx: QubitTupleContext) => void;
	/**
	 * Exit a parse tree produced by the `QubitTuple`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	exitQubitTuple?: (ctx: QubitTupleContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceElement?: (ctx: NamespaceElementContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceElement?: (ctx: NamespaceElementContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.openDirective`.
	 * @param ctx the parse tree
	 */
	enterOpenDirective?: (ctx: OpenDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.openDirective`.
	 * @param ctx the parse tree
	 */
	exitOpenDirective?: (ctx: OpenDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.access`.
	 * @param ctx the parse tree
	 */
	enterAccess?: (ctx: AccessContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.access`.
	 * @param ctx the parse tree
	 */
	exitAccess?: (ctx: AccessContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.declarationPrefix`.
	 * @param ctx the parse tree
	 */
	enterDeclarationPrefix?: (ctx: DeclarationPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.declarationPrefix`.
	 * @param ctx the parse tree
	 */
	exitDeclarationPrefix?: (ctx: DeclarationPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 */
	enterUnderlyingType?: (ctx: UnderlyingTypeContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 */
	exitUnderlyingType?: (ctx: UnderlyingTypeContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.typeDeclarationTuple`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclarationTuple?: (ctx: TypeDeclarationTupleContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.typeDeclarationTuple`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclarationTuple?: (ctx: TypeDeclarationTupleContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 */
	enterTypeTupleItem?: (ctx: TypeTupleItemContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 */
	exitTypeTupleItem?: (ctx: TypeTupleItemContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.namedItem`.
	 * @param ctx the parse tree
	 */
	enterNamedItem?: (ctx: NamedItemContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.namedItem`.
	 * @param ctx the parse tree
	 */
	exitNamedItem?: (ctx: NamedItemContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.callableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCallableDeclaration?: (ctx: CallableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.callableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCallableDeclaration?: (ctx: CallableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.typeParameterBinding`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterBinding?: (ctx: TypeParameterBindingContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.typeParameterBinding`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterBinding?: (ctx: TypeParameterBindingContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.parameterTuple`.
	 * @param ctx the parse tree
	 */
	enterParameterTuple?: (ctx: ParameterTupleContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.parameterTuple`.
	 * @param ctx the parse tree
	 */
	exitParameterTuple?: (ctx: ParameterTupleContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.characteristics`.
	 * @param ctx the parse tree
	 */
	enterCharacteristics?: (ctx: CharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.characteristics`.
	 * @param ctx the parse tree
	 */
	exitCharacteristics?: (ctx: CharacteristicsContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	enterCharacteristicsExpression?: (ctx: CharacteristicsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 */
	exitCharacteristicsExpression?: (ctx: CharacteristicsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 */
	enterCallableBody?: (ctx: CallableBodyContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 */
	exitCallableBody?: (ctx: CallableBodyContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.specialization`.
	 * @param ctx the parse tree
	 */
	enterSpecialization?: (ctx: SpecializationContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.specialization`.
	 * @param ctx the parse tree
	 */
	exitSpecialization?: (ctx: SpecializationContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.specializationName`.
	 * @param ctx the parse tree
	 */
	enterSpecializationName?: (ctx: SpecializationNameContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.specializationName`.
	 * @param ctx the parse tree
	 */
	exitSpecializationName?: (ctx: SpecializationNameContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	enterSpecializationGenerator?: (ctx: SpecializationGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 */
	exitSpecializationGenerator?: (ctx: SpecializationGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.providedSpecialization`.
	 * @param ctx the parse tree
	 */
	enterProvidedSpecialization?: (ctx: ProvidedSpecializationContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.providedSpecialization`.
	 * @param ctx the parse tree
	 */
	exitProvidedSpecialization?: (ctx: ProvidedSpecializationContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.specializationParameterTuple`.
	 * @param ctx the parse tree
	 */
	enterSpecializationParameterTuple?: (ctx: SpecializationParameterTupleContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.specializationParameterTuple`.
	 * @param ctx the parse tree
	 */
	exitSpecializationParameterTuple?: (ctx: SpecializationParameterTupleContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.specializationParameter`.
	 * @param ctx the parse tree
	 */
	enterSpecializationParameter?: (ctx: SpecializationParameterContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.specializationParameter`.
	 * @param ctx the parse tree
	 */
	exitSpecializationParameter?: (ctx: SpecializationParameterContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.scope`.
	 * @param ctx the parse tree
	 */
	enterScope?: (ctx: ScopeContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.scope`.
	 * @param ctx the parse tree
	 */
	exitScope?: (ctx: ScopeContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	enterSymbolBinding?: (ctx: SymbolBindingContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 */
	exitSymbolBinding?: (ctx: SymbolBindingContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.updateOperator`.
	 * @param ctx the parse tree
	 */
	enterUpdateOperator?: (ctx: UpdateOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.updateOperator`.
	 * @param ctx the parse tree
	 */
	exitUpdateOperator?: (ctx: UpdateOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.forBinding`.
	 * @param ctx the parse tree
	 */
	enterForBinding?: (ctx: ForBindingContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.forBinding`.
	 * @param ctx the parse tree
	 */
	exitForBinding?: (ctx: ForBindingContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.qubitBinding`.
	 * @param ctx the parse tree
	 */
	enterQubitBinding?: (ctx: QubitBindingContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.qubitBinding`.
	 * @param ctx the parse tree
	 */
	exitQubitBinding?: (ctx: QubitBindingContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	enterQubitInitializer?: (ctx: QubitInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 */
	exitQubitInitializer?: (ctx: QubitInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.size`.
	 * @param ctx the parse tree
	 */
	enterSize?: (ctx: SizeContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.size`.
	 * @param ctx the parse tree
	 */
	exitSize?: (ctx: SizeContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.typeTuple`.
	 * @param ctx the parse tree
	 */
	enterTypeTuple?: (ctx: TypeTupleContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.typeTuple`.
	 * @param ctx the parse tree
	 */
	exitTypeTuple?: (ctx: TypeTupleContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.boolLiteral`.
	 * @param ctx the parse tree
	 */
	enterBoolLiteral?: (ctx: BoolLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.boolLiteral`.
	 * @param ctx the parse tree
	 */
	exitBoolLiteral?: (ctx: BoolLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.resultLiteral`.
	 * @param ctx the parse tree
	 */
	enterResultLiteral?: (ctx: ResultLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.resultLiteral`.
	 * @param ctx the parse tree
	 */
	exitResultLiteral?: (ctx: ResultLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.pauliLiteral`.
	 * @param ctx the parse tree
	 */
	enterPauliLiteral?: (ctx: PauliLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.pauliLiteral`.
	 * @param ctx the parse tree
	 */
	exitPauliLiteral?: (ctx: PauliLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.stringContent`.
	 * @param ctx the parse tree
	 */
	enterStringContent?: (ctx: StringContentContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.stringContent`.
	 * @param ctx the parse tree
	 */
	exitStringContent?: (ctx: StringContentContext) => void;

	/**
	 * Enter a parse tree produced by `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	enterInterpStringContent?: (ctx: InterpStringContentContext) => void;
	/**
	 * Exit a parse tree produced by `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 */
	exitInterpStringContent?: (ctx: InterpStringContentContext) => void;
}

