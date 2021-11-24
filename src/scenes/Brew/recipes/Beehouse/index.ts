import AddGrounds from './images/addgrounds.png';
import AfterBloom from './images/afterbloom.gif';
import AfterPour from './images/afterpour.gif';
import Bloom from './images/bloom.gif';
import Default from './images/default.png';
import Finish from './images/finish.gif';
import Pour from './images/pour.gif';
import WetFilter from './images/wetfilter.png';

import { StepType } from '../types';

export default {
  id: 'Beehouse',
  title: 'Beehouse',
  minYield: 142,
  maxYield: 567,
  defaultGrind: 0.5,
  defaultTotalVolume: 340,
  defaultSource: Default,
  iced: true,
  preparation: [
    {
      image: WetFilter,
      text: 'Rinse the entire filter with hot water, then discard the excess water.',
    },
    {
      image: AddGrounds,
      text: 'Place the filter inside the Beehouse, add the coffee grouds, then place on top of a carafe or mug.',
    },
    {
      text: 'Then put it all on a scale and zero the scale.',
    },
  ],
  steps: [
    {
      start: true,
      type: StepType.Pour,
      volumePercent: 0.118,
      image: Bloom,
      afterImage: AfterBloom,
    },
    {
      second: 0,
      type: StepType.Pour,
      volumePercent: 0.412,
      image: Pour,
      afterImage: AfterPour,
    },
    {
      second: 45,
      type: StepType.Pour,
      volumePercent: 0.706,
      image: Pour,
      afterImage: AfterPour,
    },
    {
      second: 90,
      type: StepType.Pour,
      volumePercent: 1,
      image: Pour,
      afterImage: AfterPour,
    },
    {
      second: 150,
      type: StepType.Finish,
      image: Finish,
      afterImage: Finish,
    },
  ],
};
