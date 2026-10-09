import type { Context, Location, Plugin } from "@oxlint/plugins";

const MAX_COMMENT_LINES = 3;

type Commented = { loc: Location };

const lineCount = ({ start, end }: Location) => end.line - start.line + 1;

// Back-to-back comments read as one block, so `//` lines are grouped the same as a `/* */`.
function blocksOf(comments: readonly Commented[]): Commented[][] {
	return comments.reduce<Commented[][]>((blocks, comment) => {
		const block = blocks.at(-1);
		const last = block?.at(-1);
		if (block && last && comment.loc.start.line === last.loc.end.line + 1) block.push(comment);
		else blocks.push([comment]);

		return blocks;
	}, []);
}

export function longBlocks(comments: readonly Commented[]): Location[] {
	return blocksOf(comments).flatMap((block) => {
		const start = block[0]?.loc.start;
		const end = block.at(-1)?.loc.end;

		return start && end && lineCount({ start, end }) > MAX_COMMENT_LINES
			? [{ start, end }]
			: [];
	});
}

function report(context: Context) {
	for (const loc of longBlocks(context.sourceCode.getAllComments())) {
		context.report({
			loc,
			message: `Comment block has too many lines (${lineCount(loc)}). Maximum allowed is ${MAX_COMMENT_LINES}.`,
		});
	}
}

export default {
	meta: { name: "dragunovartem99" },
	rules: {
		"max-comment-lines": {
			create: (context) => ({ Program: () => report(context) }),
		},
	},
} satisfies Plugin;
