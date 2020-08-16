import React from 'react';
import { render } from '@testing-library/react';
import { Calendar } from './index';

const months = [''];
const weekdaysShortNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

describe('Calendar initial render', () => {
  describe('in controlled mode', () => {
    test('should have all date cells in 6-weeks view', () => {
      const container = render(
        <Calendar
          onChange={() => {}}
          value={new Date('08.14.2020')}
        />,
      );
      const dateCells = container.queryAllByText(/^\d{1,2}$/);

      expect(dateCells).toHaveLength(42); // 6-weeks view
    });
    test('should have all date cells in 5-weeks view', () => {
      const container = render(
        <Calendar
          onChange={() => {}}
          value={new Date('09.14.2020')}
        />,
      );
      const dateCells = container.queryAllByText(/^\d{1,2}$/);

      expect(dateCells).toHaveLength(35); // 5-weeks view
    });
    test('should have month name and year in the header', () => {
      const container = render(
        <Calendar
          onChange={() => {}}
          value={new Date('09.14.2020')}
        />,
      );
      const header = container.getByText('Сентябрь 2020');

      expect(header).toBeDefined();
    });
    test('should have weekdays names', () => {
      const container = render(
        <Calendar
          onChange={() => {}}
          value={new Date('09.14.2020')}
        />,
      );

      const weekdays = weekdaysShortNames.map((weekday) => container.queryByText(weekday));

      weekdays.forEach((weekday) => expect(weekday).not.toBeNull());
    });
  });
});

describe('Calendar props', () => {
  describe('hasTodayButton', () => {
    test('should show today button', () => {
      const container = render((
        <Calendar
          hasTodayButton
          value={new Date('09.14.2020')}
          onChange={() => {}}
        />
      ));

      const todayButton = container.queryByText(/^\d\d\s[а-я]+\s\d{4}$/);

      expect(todayButton).not.toBeNull();
    });
    test('should not show today button without hasTodayButton prop', () => {
      const container = render((
        <Calendar
          value={new Date('09.14.2020')}
          onChange={() => {}}
        />
      ));

      const todayButton = container.queryByText(/^\d\d\s[а-я]+\s\d{4}$/);

      expect(todayButton).toBeNull();
    });
  });
});
