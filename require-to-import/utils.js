"use strict";
exports.__esModule = true;
exports.process = void 0;
var parser = require("@babel/parser");
var generator_1 = require("@babel/generator");
function process(content) {
    var result = parser.parse(content, {
        sourceType: "module"
    });
    requireToImport(result.program.body);
    return generator_1["default"](result).code;
}
// exports.process = process;
module.exports = process;
function requireToImport(nodes) {
    nodes.forEach(function (_node, _idx) {
        if (_node.type === "VariableDeclaration") {
            _node.declarations.forEach(function (__node) {
                if (__node.init.type === "CallExpression" &&
                    __node.init.callee.type === "Identifier" &&
                    __node.init.callee.name === "require") {
                    var info_1 = {
                        filePath: "",
                        id: ""
                    };
                    if (__node.id.type === "Identifier") {
                        info_1.id = __node.id.name;
                    }
                    var requireCallExpression = __node.init;
                    requireCallExpression.arguments.forEach(function (___node) {
                        if (___node.type === "StringLiteral") {
                            info_1.filePath = ___node.value;
                        }
                    });
                    nodes[_idx] = genImportNode(info_1);
                }
            });
        }
    });
}
function genImportNode(info) {
    return parser.parse("import " + info.id + " from '" + info.filePath + "'", {
        sourceType: "module"
    }).program.body[0];
}
