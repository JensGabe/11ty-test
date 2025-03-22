import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import fg from "fast-glob";
import { parse } from "csv-parse/sync";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/*.*");
	eleventyConfig.addPassthroughCopy("src/assets/billeder/*.*");

	eleventyConfig.addFilter("removeSpaces", (value) => value.replace(' ', ''));  
	eleventyConfig.addFilter("postDate", (dateObj) => new Intl.DateTimeFormat("da-DK").format(dateObj));

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addCollection('images', async collectionApi => {

		const files = await fg('./src/assets/billeder/*.jpg');
		//Now filter to non thumb-
		const images = files.filter(f => {
			return f.indexOf('./src/assets/billeder/thumb-') !== 0;
		});

		return images.map(i => {
			return {
				path: i.replace('./src/assets/billeder/', '/assets/billeder/')
			}
		});

	});

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