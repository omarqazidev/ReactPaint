export const parseCSS = (css: string) => {
    const transformedCss: React.CSSProperties = css
        .replace(/ /g, '')
        .split(';')
        .filter((record) => record)
        .reduce((acc, record) => {
            const colonIndex = record.indexOf(':');
            const key = record.slice(0, colonIndex);
            const value = record.slice(colonIndex + 1, record.length);

            return { ...acc, [key]: `${value}` };
        }, {});

    return transformedCss;
};

export const parseStyleObject = (css: React.CSSProperties) => {
    const styleString = Object.entries(css)
        .map(([k, v]) => `${k}:${v}`)
        .join(';');
    return styleString;
};

export function cssObjectToString(cssObject: any) {
    let cssString = '';
    Object.keys(cssObject).forEach((key) => {
        if (cssObject[key] !== undefined) {
            cssString = cssString + `${key}:"${cssObject[key]}", `;
        }
    });
    return cssString;
}
