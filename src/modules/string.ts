export async function levenshtein(
	s1: string | any[],
	s2: string | any[],
	costs: { replace?: any; replaceCase?: any; insert?: any; remove?: any },
) {
	var l1: number,
		l2: number,
		flip: number,
		ch: string,
		chl: any,
		ii: number,
		ii2: number,
		cost: any,
		cutHalf: number;
	l1 = s1.length;
	l2 = s2.length;

	costs = costs || {};
	var cr = costs.replace || 1;
	var cri = costs.replaceCase || costs.replace || 1;
	var ci = costs.insert || 1;
	var cd = costs.remove || 1;

	cutHalf = flip = Math.max(l1, l2);

	var minCost = Math.min(cd, ci, cr);
	var minD = Math.max(minCost, (l1 - l2) * cd);
	var minI = Math.max(minCost, (l2 - l1) * ci);
	var buf = new Array(cutHalf * 2 - 1);

	for (let i = 0; i <= l2; ++i) {
		buf[i] = i * minD;
	}

	for (let i = 0; i < l1; ++i, flip = cutHalf - flip) {
		ch = s1[i];
		chl = ch.toLowerCase();

		buf[flip] = (i + 1) * minI;

		ii = flip;
		ii2 = cutHalf - flip;

		for (let j = 0; j < l2; ++j, ++ii, ++ii2) {
			cost = ch === s2[j] ? 0 : chl === s2[j].toLowerCase() ? cri : cr;
			buf[ii + 1] = Math.min(buf[ii2 + 1] + cd, buf[ii] + ci, buf[ii2] + cost);
		}
	}
	return buf[l2 + cutHalf - flip];
}
