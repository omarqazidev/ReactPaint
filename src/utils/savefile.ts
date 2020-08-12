export function savefile(content: string, filename: string) {
    let data = new Blob([content], {
        type: 'data:attachment/text,',
    });
    let csvURL = window.URL.createObjectURL(data);
    let tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', filename);
    tempLink.click();
}
