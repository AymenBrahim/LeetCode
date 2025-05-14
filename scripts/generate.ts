// scripts/generate.ts
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";

const name = process.argv[2]
  .replace(/\s+/g, "-") // convert spaces to hyphens
  .replace(/[^A-Za-z0-9\-]/g, "") // keep only letters and hyphens
  .toLowerCase();
console.log(name, name);
if (!name) {
  console.error("❌ Please provide a problem name (e.g. twoSum)");
  process.exit(1);
}

const toCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace("-", " ")
    .replace(/[^A-Za-z-]/g, "")
    .replace(/[^\w]+(.)/g, (ltr) => ltr.toUpperCase())
    .replace(/[^a-zA-Z]/g, "");
const camelName = toCamelCase(name);

const problemsDir = join(__dirname, "..", "problems");
if (!existsSync(problemsDir)) mkdirSync(problemsDir);

const problemDir = join(problemsDir, name);
if (!existsSync(problemDir)) mkdirSync(problemDir);

/* const solutionsDir = join(__dirname, "..", "solutions");
const testsDir = join(__dirname, "..", "tests");

// Ensure dirs exist
if (!existsSync(solutionsDir)) mkdirSync(solutionsDir);
if (!existsSync(testsDir)) mkdirSync(testsDir);
console.log(testsDir); */

// Create solution file
const solutionPath = join(problemDir, `index.ts`);
if (!existsSync(solutionPath)) {
  writeFileSync(
    solutionPath,
    `export function ${camelName}(): void {\n  // TODO: Implement\n}\n`
  );
  console.log(`✅ Created solutions/${name}.ts`);
} else {
  console.log(`⚠️  solutions/${name}.ts already exists`);
}

// Create test file
const testPath = join(problemDir, `index.test.ts`);
if (!existsSync(testPath)) {
  writeFileSync(
    testPath,
    /* `import { ${camelName} } from "../solutions/${name}";\n\n` +
      `console.log("✅ Test runner placeholder for ${camelName}");\n` +
      `// You can call ${camelName} here with manual or parsed input.\n` */
    `import { ${camelName} } from "./index";
      
      // You can call ${camelName} here with manual or parsed input.
      const testCases = [["input", "output"]] as const;
      
      describe("testing ${camelName}", () => {
          test.each(testCases)("${camelName}(%s)", (input, output) => {
            expect(${camelName}(input)).toBe(output);
          });
      });
      `
  );
  console.log(`✅ Created tests/${name}.test.ts`);
} else {
  console.log(`⚠️  tests/${name}.test.ts already exists`);
}
