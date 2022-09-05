// Generated from ./CSHARP/QSharpParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `QSharpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface QSharpParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `InterpStringEscapeContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpStringEscapeContent?: (ctx: InterpStringEscapeContentContext) => Result;

	/**
	 * Visit a parse tree produced by the `InterpExpressionContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpExpressionContent?: (ctx: InterpExpressionContentContext) => Result;

	/**
	 * Visit a parse tree produced by the `InterpTextContent`
	 * labeled alternative in `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpTextContent?: (ctx: InterpTextContentContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdjointCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdjointCharacteristics?: (ctx: AdjointCharacteristicsContext) => Result;

	/**
	 * Visit a parse tree produced by the `ControlledCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlledCharacteristics?: (ctx: ControlledCharacteristicsContext) => Result;

	/**
	 * Visit a parse tree produced by the `CharacteristicGroup`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacteristicGroup?: (ctx: CharacteristicGroupContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntersectCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectCharacteristics?: (ctx: IntersectCharacteristicsContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnionCharacteristics`
	 * labeled alternative in `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionCharacteristics?: (ctx: UnionCharacteristicsContext) => Result;

	/**
	 * Visit a parse tree produced by the `MissingType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMissingType?: (ctx: MissingTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeParameter`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallableType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableType?: (ctx: CallableTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `BigIntType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigIntType?: (ctx: BigIntTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `BoolType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolType?: (ctx: BoolTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `DoubleType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleType?: (ctx: DoubleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntType?: (ctx: IntTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `PauliType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPauliType?: (ctx: PauliTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `QubitType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitType?: (ctx: QubitTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `RangeType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeType?: (ctx: RangeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ResultType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResultType?: (ctx: ResultTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringType?: (ctx: StringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnitType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitType?: (ctx: UnitTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `UserDefinedType`
	 * labeled alternative in `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDefinedType?: (ctx: UserDefinedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `DiscardSymbol`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiscardSymbol?: (ctx: DiscardSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by the `SymbolName`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolName?: (ctx: SymbolNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `SymbolTuple`
	 * labeled alternative in `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolTuple?: (ctx: SymbolTupleContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedTypeItem`
	 * labeled alternative in `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTypeItem?: (ctx: NamedTypeItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnderlyingTypeItem`
	 * labeled alternative in `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnderlyingTypeItem?: (ctx: UnderlyingTypeItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedParameter`
	 * labeled alternative in `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedParameter?: (ctx: NamedParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupledParameter`
	 * labeled alternative in `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupledParameter?: (ctx: TupledParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpressionStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `FailStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailStatement?: (ctx: FailStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `LetStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStatement?: (ctx: LetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `MutableStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMutableStatement?: (ctx: MutableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStatement?: (ctx: SetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `UpdateStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `UpdateWithStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateWithStatement?: (ctx: UpdateWithStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ElifStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElifStatement?: (ctx: ElifStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ElseStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `RepeatStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `UntilStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntilStatement?: (ctx: UntilStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `WithinStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithinStatement?: (ctx: WithinStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ApplyStatement`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyStatement?: (ctx: ApplyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `QubitDeclaration`
	 * labeled alternative in `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitDeclaration?: (ctx: QubitDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallableStatements`
	 * labeled alternative in `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableStatements?: (ctx: CallableStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallableSpecializations`
	 * labeled alternative in `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableSpecializations?: (ctx: CallableSpecializationsContext) => Result;

	/**
	 * Visit a parse tree produced by the `MissingExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMissingExpression?: (ctx: MissingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntegerExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerExpression?: (ctx: IntegerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BigIntegerExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigIntegerExpression?: (ctx: BigIntegerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DoubleExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleExpression?: (ctx: DoubleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InterpStringExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpStringExpression?: (ctx: InterpStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BoolExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ResultExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResultExpression?: (ctx: ResultExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PauliExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPauliExpression?: (ctx: PauliExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SizedArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizedArrayExpression?: (ctx: SizedArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewArrayExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewArrayExpression?: (ctx: NewArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedItemAccessExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedItemAccessExpression?: (ctx: NamedItemAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayAccessExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccessExpression?: (ctx: ArrayAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnwrapExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnwrapExpression?: (ctx: UnwrapExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ControlledExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlledExpression?: (ctx: ControlledExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdjointExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdjointExpression?: (ctx: AdjointExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrefixOpExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixOpExpression?: (ctx: PrefixOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExponentExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponentExpression?: (ctx: ExponentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplyExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExpression?: (ctx: MultiplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ShiftExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompareExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareExpression?: (ctx: CompareExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualsExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualsExpression?: (ctx: EqualsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseAndExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseXorExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseOrExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeExpression?: (ctx: RangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RightOpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightOpenRangeExpression?: (ctx: RightOpenRangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LeftOpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftOpenRangeExpression?: (ctx: LeftOpenRangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `OpenRangeExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenRangeExpression?: (ctx: OpenRangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UpdateExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateExpression?: (ctx: UpdateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LambdaExpression`
	 * labeled alternative in `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `OpenElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenElement?: (ctx: OpenElementContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeElement?: (ctx: TypeElementContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallableElement`
	 * labeled alternative in `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableElement?: (ctx: CallableElementContext) => Result;

	/**
	 * Visit a parse tree produced by the `AutoGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAutoGenerator?: (ctx: AutoGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by the `SelfGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfGenerator?: (ctx: SelfGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by the `InvertGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvertGenerator?: (ctx: InvertGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by the `DistributeGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistributeGenerator?: (ctx: DistributeGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntrinsicGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntrinsicGenerator?: (ctx: IntrinsicGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by the `ProvidedGenerator`
	 * labeled alternative in `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProvidedGenerator?: (ctx: ProvidedGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleUnderlyingType`
	 * labeled alternative in `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleUnderlyingType?: (ctx: TupleUnderlyingTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnnamedTypeItem`
	 * labeled alternative in `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnamedTypeItem?: (ctx: UnnamedTypeItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `SingleQubit`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleQubit?: (ctx: SingleQubitContext) => Result;

	/**
	 * Visit a parse tree produced by the `QubitArray`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitArray?: (ctx: QubitArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `QubitTuple`
	 * labeled alternative in `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitTuple?: (ctx: QubitTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.namespaceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceElement?: (ctx: NamespaceElementContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.openDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenDirective?: (ctx: OpenDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess?: (ctx: AccessContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.declarationPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationPrefix?: (ctx: DeclarationPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.underlyingType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnderlyingType?: (ctx: UnderlyingTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.typeDeclarationTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclarationTuple?: (ctx: TypeDeclarationTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.typeTupleItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTupleItem?: (ctx: TypeTupleItemContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.namedItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedItem?: (ctx: NamedItemContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.callableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableDeclaration?: (ctx: CallableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.typeParameterBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterBinding?: (ctx: TypeParameterBindingContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.parameterTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterTuple?: (ctx: ParameterTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.characteristics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacteristics?: (ctx: CharacteristicsContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.characteristicsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacteristicsExpression?: (ctx: CharacteristicsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.callableBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableBody?: (ctx: CallableBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.specialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialization?: (ctx: SpecializationContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.specializationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializationName?: (ctx: SpecializationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.specializationGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializationGenerator?: (ctx: SpecializationGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.providedSpecialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProvidedSpecialization?: (ctx: ProvidedSpecializationContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.specializationParameterTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializationParameterTuple?: (ctx: SpecializationParameterTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.specializationParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializationParameter?: (ctx: SpecializationParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.symbolBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolBinding?: (ctx: SymbolBindingContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.updateOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateOperator?: (ctx: UpdateOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.forBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForBinding?: (ctx: ForBindingContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.qubitBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitBinding?: (ctx: QubitBindingContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.qubitInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitInitializer?: (ctx: QubitInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.size`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSize?: (ctx: SizeContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.typeTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTuple?: (ctx: TypeTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.boolLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLiteral?: (ctx: BoolLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.resultLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResultLiteral?: (ctx: ResultLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.pauliLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPauliLiteral?: (ctx: PauliLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.stringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringContent?: (ctx: StringContentContext) => Result;

	/**
	 * Visit a parse tree produced by `QSharpParser.interpStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpStringContent?: (ctx: InterpStringContentContext) => Result;
}

