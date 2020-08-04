import React, { ReactElement } from 'react';
import { useComponent } from '../../../redux';
import Composite from '../../../structures/Composite';
import { Container } from '../../RPComponents/Container';

export function Renderer() {
    const { mainComponent } = useComponent();
    return Recurse(mainComponent);
}

function Recurse(component: Composite) {
    const renderedChildren: ReactElement[] = component.children.map((childComponent) => {
        return Recurse(childComponent);
    });

    if (component.type.toLowerCase() === 'container') {
        return (
            <Container
                divChildren={renderedChildren}
                css={{ ...component.css }}
                id={component.id}
                key={component.id}
            />
        );
    } else {
        return React.createElement(toHtmlName(component.type), {
            style: { ...component.css },
            children: component.content,
            key: component.id,
        });
    }
}

function toHtmlName(componentName: string) {
    switch (componentName) {
        case 'container':
            return 'div';

        case 'text':
            return 'p';

        case 'heading':
            return 'h1';

        case 'button':
            return 'button';

        case 'textfield':
            return 'input';

        case 'image':
            return 'img';

        default:
            return 'p';
    }
}
