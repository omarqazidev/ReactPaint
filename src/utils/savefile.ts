import domtoimage from 'dom-to-image';
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

export function saveBlob(blobToSave: Blob, filename: string) {
    let csvURL = window.URL.createObjectURL(blobToSave);
    let tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', filename);
    tempLink.click();
}

export function saveHtmlElementAsPng(domElement: HTMLElement | null) {
    let blobToDownload: Blob;
    const htmlElement = domElement;
    if (htmlElement) {
        domtoimage.toBlob(htmlElement).then(function (blob) {
            blobToDownload = blob;
            saveBlob(blobToDownload, 'ReactPaintImage.png');
        });
    }
}
