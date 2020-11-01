import * as logger from "./modules/logger";
import * as number from "./modules/number";
import * as regular from "./modules/regular";
import * as array from "./modules/array";
import * as time from "./modules/time";
import * as string from "./modules/string";
import * as vk_io from "./modules/vk-io";

export const utils = {
	logger: logger,
	number: number,
	regular: regular,
	array: array,
	time: time,
	string: string,
	vk_io: vk_io,
};

export { logger, number, regular, array, time, string, vk_io };
export default { logger, number, regular, array, time, string, vk_io };
