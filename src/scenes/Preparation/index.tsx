import { RouteProp } from '@react-navigation/core';
import React from 'react';

import InstructionalCard from '../../components/InstructionalCard';
import ResponsiveScrollView from '../../components/ResponsiveScrollView';
import { RootStackParamList } from '../../navigation';
import { PreparationStep } from '../Brew/recipes/types';

interface Props {
  route: RouteProp<RootStackParamList, 'Preparation'>;
  preparation: PreparationStep[];
}

function Preparation(props: Props) {
  const { route } = props;
  const preparation = route.params;

  return (
    <ResponsiveScrollView>
      {preparation.map((prepStep) => (
        <InstructionalCard
          key={prepStep.text}
          step={{ image: prepStep.image, description: prepStep.text }}
        />
      ))}
    </ResponsiveScrollView>
  );
}

export default Preparation;
