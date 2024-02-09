import csv from "csv-parser";
import fs from "fs";
const results: any[] = [];
const mappedResult: any[] = [];

fs.createReadStream("./data.csv")
	.pipe(csv())
	.on("data", (data) => results.push(data))
	.on("end", () => {
		for (let rows of results) {
			mappedResult.push({
				...rows,
				directory_category: rows["directory_category"]?.split(";") || [],
				content_children_count:
					rows["content_children_count"]?.split(";") || [],
			});
		}

		console.log(mappedResult);
	});
