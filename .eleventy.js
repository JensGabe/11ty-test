import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { parse } from "csv-parse/sync";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/*.*");

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addDataExtension("csv", (contents) => {
		const records = parse(contents, {
			columns: true,
			skip_empty_lines: true,
			relax_column_count: true,
			delimiter: ",",
			trim: true,
		});
		return records;
	});
	return {
		// When a passthrough file is modified, rebuild the pages:
        markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
		dir: {
			input: "src",
			includes: "../_includes",
			layouts: "../_layouts",
			xdata: "_data",
			output: "_site"
		}
	};
};