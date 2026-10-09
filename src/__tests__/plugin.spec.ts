import { describe, expect, it } from "vitest";

import { longBlocks } from "../plugin.ts";

const comment = (first: number, last = first) => ({
	loc: { start: { line: first, column: 2 }, end: { line: last, column: 40 } },
});

const range = (first: number, last: number) => ({
	start: { line: first, column: 2 },
	end: { line: last, column: 40 },
});

describe("longBlocks", () => {
	it.each([
		{ name: "a file with no comments", comments: [] },
		{ name: "three line comments in a row", comments: [comment(4), comment(5), comment(6)] },
		{ name: "a three-line block comment", comments: [comment(12, 14)] },
		{
			name: "two short runs split by code",
			comments: [comment(1), comment(2), comment(3), comment(7), comment(8), comment(9)],
		},
	])("allows $name", ({ comments }) => {
		const blocks = longBlocks(comments);

		expect(blocks).toEqual([]);
	});

	it.each([
		{
			name: "four line comments in a row",
			comments: [comment(18), comment(19), comment(20), comment(21)],
			expected: [range(18, 21)],
		},
		{
			name: "a four-line block comment",
			comments: [comment(33, 36)],
			expected: [range(33, 36)],
		},
		{
			name: "line comments running into a block comment as one block",
			comments: [comment(2), comment(3), comment(4, 5)],
			expected: [range(2, 5)],
		},
		{
			name: "each long block on its own",
			comments: [comment(1, 4), comment(9), comment(10, 14)],
			expected: [range(1, 4), range(9, 14)],
		},
	])("flags $name", ({ comments, expected }) => {
		const blocks = longBlocks(comments);

		expect(blocks).toEqual(expected);
	});
});
