import { v4 as uuid } from 'uuid';

export default class Composite {
    id: string = '-1';
    type: string = '?';
    name: string = '!';
    value: string = '_';
    css: React.CSSProperties = {};
    classes: string = '';
    children: Composite[] = [];

    constructor(type: string, value: string, css: React.CSSProperties) {
        this.id = uuid();
        this.type = type;
        this.name = `${this.type}${this.id}`;
        this.value = value;
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
