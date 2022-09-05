import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {QSharpLexer} from "./CSHARP/QSharpLexer.ts"
import {QSharpParser} from "./CSHARP/QSharpParser.ts"
import { QSharpParserVisitor } from './CSHARP/QSharpParserVisitor.ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

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
}`

// Create the lexer and parser
let inputStream = new ANTLRInputStream(input);
let lexer = new QSharpLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new QSharpParser(tokenStream);

let tree = parser.document()

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class CountFunctionsVisitor extends AbstractParseTreeVisitor implements QSharpParserVisitor {

  defaultResult() {
    return 0
  }

  visitFunctionDeclaration(context: FunctionDeclarationContext): number {
    if(context.children){
      console.log(context.children.length)
    }
    return 0;
  }
}

// Create the visitor
const countFunctionsVisitor = new CountFunctionsVisitor()
// Use the visitor entry point
countFunctionsVisitor.visitFunctionDeclaration(tree)