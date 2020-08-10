import React, { ReactElement } from 'react';
import { useComponent } from '../../../redux';
import Composite from '../../../structures/Composite';
import { RPContainer, RPComponent } from '../../rp-components';
import { ComponentActions } from '../../../redux/actions/componentActions';

export function Renderer() {
    const { mainComponent, componentDispatch } = useComponent();
    return Recurse(mainComponent, componentDispatch);
}

function Recurse(component: Composite, dispatch: React.Dispatch<ComponentActions>) {
    const renderedChildren: ReactElement[] = component.children.map((childComponent) => {
        return Recurse(childComponent, dispatch);
    });

    if (component.type.toLowerCase() === 'container') {
        return <RPContainer key={component.id} data={component} divChildren={renderedChildren} />;
    } else {
        return <RPComponent key={component.id} data={component} />;
    }
}
