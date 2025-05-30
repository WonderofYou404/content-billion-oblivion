import * as React from 'react';
import classNames from 'classnames';
import ScrambleText from './ScrambleText';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function Badge(props) {
    const { label, color = 'text-primary', styles, className } = props;
    const fieldPath = props['data-sb-field-path'];
    if (!label) {
        return null;
    }

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-badge',
                color,
                className,
                styles?.self ? mapStyles(styles?.self) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            <ScrambleText words={['Wonder of You', 'Creative Direction', 'Graphic Design Services', 'Business Consultation', 'Investments', 'Social Media Building' ]} />
        </div>
    );
}
