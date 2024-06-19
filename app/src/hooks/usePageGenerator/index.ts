import React, { useCallback } from 'react';
import { PageConfig, PageElement } from './interfaces';

const usePageGenerator = (pageConfig: PageConfig): React.ReactElement | null => {
    const handleClick = useCallback(() => {
        alert('Button clicked!');
    }, []);

    const renderElement = (config: PageElement): React.ReactElement | null => {
        const { type, props, children } = config;

        if (!type) return null;

        const elementProps = {
            ...props,
            ...(props?.onClick === 'handleClick' && { onClick: handleClick }),
        };

        if (Array.isArray(children)) {
            return React.createElement(
                type,
                elementProps,
                children.map((child, index) => renderElement(child as PageElement))
            );
        } else {
            return React.createElement(type, elementProps, children);
        }
    };

    return renderElement(pageConfig);
};

export default usePageGenerator;
