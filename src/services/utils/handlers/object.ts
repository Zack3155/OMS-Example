export const isEmpty = (obj: object) => {
	for (const itm in obj) return false;
	return true;
};

export const update = (key: string, val: any, setObj) =>
	setObj((prev) => ({ ...prev, [key]: val }));

export const remove = (key: string, setObj) =>
	setObj((prev) => {
		const copy = { ...prev };
		delete copy[key];
		return isEmpty(copy) ? null : copy;
	});

export const deepClone = (obj: object) => {
	return JSON.parse(JSON.stringify(obj));
};

export const transformLanguage = (lang: string) => {
	return lang == "zh" ? "cn" : lang;
};
