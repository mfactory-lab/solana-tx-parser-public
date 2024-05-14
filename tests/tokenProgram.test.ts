import "mocha";

import { clusterApiUrl, Connection } from "@solana/web3.js";

import { SolanaParser } from "../src";

describe("Test parse transaction", () => {
	it("should work", async () => {
		const rpcConnection = new Connection(clusterApiUrl("mainnet-beta"), {
			commitment: "confirmed",
		});

		// const sig = "3UuiMdX632x6K7skV7kFyv7MTGHm73HCPJueWQMBMA2KL2ABwLE4an7BymAwQxD3JikPnsmUdbLmWtZ4vvrVBTHG"
		const sig = "4zAxJqZK7MMixKXBNW4p663ef9nuw7njzy4aeeErig56eXU5Yq3zaba4WcAdQr9cUgnjaZcW7x8QTWcjA3nnhETW";

		const txParser = new SolanaParser([]);

		const res = await txParser.parseTransaction(rpcConnection, sig, true);

		console.log(res);
	});
});
