let count = 123;

export function load() {
	return { count };
}

export const actions = {
	increment: () => count++
};
