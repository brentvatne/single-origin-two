import React from 'react';
import { Svg, G, Path } from 'react-native-svg';

import { Icon } from './types';

function CleverIcon({ fill, size = 1 }: Icon) {
  return (
    <Svg width={size * 36} height={size * 24} viewBox="0 0 36 24">
      <G fill={fill} fillRule="nonzero">
        <Path d="M15.653 16.53a1 1 0 1 1-2 0V7.625a1 1 0 1 1 2 0v8.907zM18.227 16.53a1 1 0 1 1-2 0v-6.519a1 1 0 0 1 2 0v6.52zM13.08 16.52a1 1 0 1 1-2 0v-6.519a1 1 0 0 1 2 0v6.52z" />
        <Path d="M2.968 2.284l8.091 16.418h7.17l8.577-16.418H2.968zm-1.607-2h27.095a1 1 0 0 1 .886 1.463l-9.62 18.418a1 1 0 0 1-.887.537h-8.398a1 1 0 0 1-.897-.558L.464 1.726A1 1 0 0 1 1.36.284z" />
        <Path d="M27.422 2.283a1 1 0 0 1-.051-2c4.999-.127 7.794 1.428 7.794 4.767 0 3.232-4.146 6.197-12.336 9.293a1 1 0 0 1-.707-1.87c7.396-2.797 11.043-5.404 11.043-7.423 0-1.914-1.718-2.87-5.743-2.767zM20.254 20.725H8.712c-.871 0-1.626.5-1.992 1.23h15.527a2.229 2.229 0 0 0-1.993-1.23zm-11.542-2h11.542a4.229 4.229 0 0 1 4.23 4.23 1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1 4.229 4.229 0 0 1 4.228-4.23z" />
      </G>
    </Svg>
  );
}

export default CleverIcon;
