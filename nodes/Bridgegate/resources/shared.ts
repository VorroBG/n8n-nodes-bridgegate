// nodes/Bridgegate/resources/shared.ts

// String that will be injected into an n8n expression.
// NOTE the outer (...) are important so the ternary evaluates correctly.
export const ehrSegmentExpression =
	'($parameter["ehr"] === "athena" ? "athena-be" :' +
	' $parameter["ehr"] === "epic" ? "epic-care" :' +
	' $parameter["ehr"] === "cerner" ? "cerner" :' +
	' $parameter["ehr"])';
