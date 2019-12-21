import { isString, isObject } from 'lodash';
import { Guards } from '../../utils/monads';
import {
  Comparator, DataType, PositionType, StatusItem,
} from './types';
import { DATA_TYPES, STEP_POSITION } from './constants';

const less: Comparator = firstItem => (secondItem): secondItem is typeof firstItem => (firstItem < secondItem);

const greater: Comparator = firstItem => (secondItem): secondItem is typeof firstItem => (firstItem > secondItem);

const equals: Comparator = firstItem => (secondItem): secondItem is typeof firstItem => (firstItem === secondItem);

export const contains = (type: typeof DATA_TYPES[keyof typeof DATA_TYPES]) => (data: string[] | StatusItem[]) => Guards(type)
  .when(equals(DATA_TYPES.OBJECT), () => (data as (string | StatusItem)[]).every(item => isObject(item)))
  .when(equals(DATA_TYPES.STRING), () => (data as (string | StatusItem)[]).every(item => isString(item)))
  .getValue();

/** если в data объекты и хотя бы один из них содержит поле type - компонент является "кастомным" - тип шага задается пользователем через поле type */
export const isCustom = (data: string[] | StatusItem[]): boolean => Guards(data)
  .when((inwards: (string | StatusItem)[] | undefined) => (inwards as StatusItem[]).some(item => !!item.type), () => true)
  .otherwise(() => false)
  .getValue();

export const getLabelText = (dataType: DataType, item: string | StatusItem, textField?: string): string => Guards(dataType)
  .when(equals(DATA_TYPES.OBJECT), () => (textField ? (item as StatusItem)[textField] : ''))
  .when(equals(DATA_TYPES.STRING), () => item as string)
  .otherwise(() => '')
  .getValue();

export const getStepPosition = (index: number, currentIndex: number, isCustomChildren: boolean): PositionType | null => Guards(currentIndex)
  .when(() => isCustomChildren, () => null)
  .when(greater(index), () => STEP_POSITION.NEXT)
  .when(less(index), () => STEP_POSITION.PREV)
  .otherwise(() => STEP_POSITION.CURRENT)
  .getValue();

export const getDataType = (data: string[] | StatusItem[]): DataType => Guards(data)
  .when(contains(DATA_TYPES.OBJECT), () => DATA_TYPES.OBJECT)
  .when(contains(DATA_TYPES.STRING), () => DATA_TYPES.STRING)
  .otherwise(() => { throw new Error('StatusBar: unacceptable data type, data must be an array of object or strings!'); })
  .getValue();
