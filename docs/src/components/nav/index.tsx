import { NavLi } from './NavLi';

export const MainNav = () => (
  <nav>
    <div className="pb-4 font-bold">
      Basics
    </div>
    <ul>
      <NavLi to="/basics/styles">Styles</NavLi>
      <NavLi to="/basics/customization">Customization</NavLi>
      <NavLi to="/basics/css-classes-props">CSS classes props</NavLi>
      <NavLi to="/basics/forms">Forms</NavLi>
      <NavLi to="/basics/validation">Validation</NavLi>
    </ul>

    <div className="py-4 font-bold">
      Form components
    </div>
    <ul>
      <NavLi to="/form-components/autocomplete">AutoComplete</NavLi>
      <NavLi to="/form-components/button">Button</NavLi>
      <NavLi to="/form-components/button-group">ButtonGroup</NavLi>
      <NavLi to="/form-components/calendar">Calendar</NavLi>
      <NavLi to="/form-components/check-box">CheckBox</NavLi>
      <NavLi to="/form-components/date-picker">DatePicker</NavLi>
      <NavLi to="/form-components/date-range">DateRange</NavLi>
      <NavLi to="/form-components/date-time-picker">DateTimePicker</NavLi>
      <NavLi to="/form-components/date-time-range">DateTimeRange</NavLi>
      <NavLi to="/form-components/dropdown-select">DropDownSelect</NavLi>
      <NavLi to="/form-components/input">Input</NavLi>
      <NavLi to="/form-components/masked-input">MaskedInput</NavLi>
      <NavLi to="/form-components/multi-select">MultiSelect</NavLi>
      <NavLi to="/form-components/numeric-text-box">NumericTextBox</NavLi>
      <NavLi to="/form-components/numeric-range">NumericRange</NavLi>
      <NavLi to="/form-components/password">Password</NavLi>
      <NavLi to="/form-components/radio">Radio</NavLi>
      <NavLi to="/form-components/rating">Rating</NavLi>
      <NavLi to="/form-components/switcher">Switcher</NavLi>
      <NavLi to="/form-components/textarea">Textarea</NavLi>
      <NavLi to="/form-components/time-picker">TimePicker</NavLi>
      <NavLi to="/form-components/time-range">TimeRange</NavLi>
    </ul>

    <div className="py-4 font-bold">
      Form helpers
    </div>
    <ul>
      <NavLi to="/form-helpers/form">form</NavLi>
      <NavLi to="/form-helpers/validate">validate</NavLi>
    </ul>

    <div className="py-4 font-bold">
      Validation examples
    </div>
    <ul>
      {/* <NavLi to='/examples/is-required'>isRequired</NavLi> */}
      <NavLi to="/validation-examples/predefined-validators">predefined validators</NavLi>
    </ul>

    <div className="py-4 font-bold">
      Layout components
    </div>
    <ul>
      <NavLi to="/layout-components/collapse">Collapse</NavLi>
      <NavLi to="/layout-components/collapsible">Collapsible</NavLi>
      <NavLi to="/layout-components/icon">Icon</NavLi>
      <NavLi to="/layout-components/loader">Loader</NavLi>
      <NavLi to="/layout-components/modal">Modal</NavLi>
      {/* <NavLi to='/components/notifications'>Notifications</NavLi> */}
      <NavLi to="/layout-components/pagination">Pagination</NavLi>
      <NavLi to="/layout-components/progress-bar">ProgressBar</NavLi>
      <NavLi to="/layout-components/tabs">Tabs</NavLi>
      <NavLi to="/layout-components/tags">Tags</NavLi>
      <NavLi to="/layout-components/tooltip">Tooltip</NavLi>
    </ul>

    <div className="py-4 font-bold">
      Other
    </div>
    <ul>
      <NavLi to="/other/html">HTML</NavLi>
      <NavLi to="/other/leda-provider">Leda provider</NavLi>
      <NavLi to="/other/utils">utils</NavLi>
    </ul>
  </nav>
);
