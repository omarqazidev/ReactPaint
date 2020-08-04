import { v4 as uuid } from 'uuid';

export default class Composite {
    id: string = '-1';
    type: string = '?';
    content: string = '';
    css: React.CSSProperties = {};
    children: Composite[] = [];

    constructor(type: string, content: string, css: React.CSSProperties) {
        this.id = uuid();
        this.type = type;
        this.content = content;
        this.css = css;
    }

    addChild(child: Composite): void {
        this.children.push(child);
    }

    removeChild(id: string): void {
        // eslint-disable-next-line
        this.children = this.children.filter((child) => {
            if (child.id !== id) {
                return child;
            }
        });
    }
}
