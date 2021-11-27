import { useSelector, useDispatch } from 'react-redux';

import { grinders, getVerboseSetting } from '../constants/grinders';
import { units } from '../constants/units';
import { settingUpdated } from '../state/settings/actions';
import { selectSettings } from '../state/settings/selectors';

export function useSettings() {
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();
  const conversions = {
    grams: {
      preferredConversion: (value: number) => Math.round(value),
      standardConversion: (value: number) => Math.round(value),
    },
    fahrenheit: {
      preferredConversion: (value: number) => Math.round(value),
      standardConversion: (value: number) => Math.round(value),
    },
    celsius: {
      preferredConversion: (value: number) => Math.round((value - 32) / 1.8),
      standardConversion: (value: number) => Math.round(value * 1.8 + 32),
    },
    ounces: {
      preferredConversion: (value: number) => (value * 0.035274).toFixed(1),
      standardConversion: (value: number) => Math.round(value / 0.035274),
    },
    cups: {
      preferredConversion: (value: number) => (value * 0.01).toFixed(2),
      standardConversion: (value: number) => Math.round(value / 0.01),
    },
  };

  function getUnitHelper(unit: string) {
    return {
      getPreferredValue: getPreferredValue(unit),
      getStandardValue: getStandardValue(unit),
      unit: units[settings[unit]],
    };
  }

  function getGrindHelper() {
    return {
      getPreferredValue: (v: number) => v,
      getPreferredValueBasedOnPercent: (percent: number) => {
        const grinder = grinders[settings.grinderType];
        const range = grinder.max - grinder.min;
        return Math.round(range * percent);
      },
      getStandardValue: (v: number) => v,
      getGrindSetting: (percent: number) => {
        const { grinderType } = settings;

        if (grinderType === 'generic') {
          return getVerboseSetting(percent);
        }

        const grinder = grinders[grinderType];
        const range = grinder.max - grinder.min;
        return {
          title: `#${Math.round(range * percent)}`,
        };
      },
      grinder: grinders[settings.grinderType],
      unit: { symbol: 'grind' },
    };
  }

  function getPreferredValue(unit: string) {
    return function getPreferredValueInner(value: number) {
      return conversions[settings[unit]].preferredConversion(value);
    };
  }

  function getStandardValue(unit: string) {
    return function getStandardValueInner(value: number) {
      return conversions[settings[unit]].standardConversion(value);
    };
  }

  return {
    settings,
    settingUpdated: (args) => dispatch(settingUpdated(args)),
    unitHelpers: {
      brewedVolumeUnit: getUnitHelper('brewedVolumeUnit'),
      coffeeWeightUnit: getUnitHelper('coffeeWeightUnit'),
      waterVolumeUnit: getUnitHelper('waterVolumeUnit'),
      temperatureUnit: getUnitHelper('temperatureUnit'),
      grindUnit: getGrindHelper(),
    },
  };
}
