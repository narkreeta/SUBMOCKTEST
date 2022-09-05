var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_antlr4ts = __toModule(require("antlr4ts"));
var import_QSharpLexer = __toModule(require("./CSHARP/QSharpLexer.ts"));
var import_QSharpParser = __toModule(require("./CSHARP/QSharpParser.ts"));
var import_AbstractParseTreeVisitor = __toModule(require("antlr4ts/tree/AbstractParseTreeVisitor"));
const input = `using System;

namespace Conditional
{
	class Ternary
	{
		public static void Main(string[] args)
		{
			int number = 2;
			bool isEven;

			isEven = (number % 2 == 0) ? true : false ;  
			Console.WriteLine(isEven);
		}
	}
}`;
let inputStream = new import_antlr4ts.ANTLRInputStream(input);
let lexer = new import_QSharpLexer.QSharpLexer(inputStream);
let tokenStream = new import_antlr4ts.CommonTokenStream(lexer);
let parser = new import_QSharpParser.QSharpParser(tokenStream);
let tree = parser.document();
class CountFunctionsVisitor extends import_AbstractParseTreeVisitor.AbstractParseTreeVisitor {
  defaultResult() {
    return 0;
  }
  visitFunctionDeclaration(context) {
    if (context.children) {
      console.log(context.children.length);
    }
    return 0;
  }
}
const countFunctionsVisitor = new CountFunctionsVisitor();
countFunctionsVisitor.visitFunctionDeclaration(tree);
//# sourceMappingURL=index.js.map
