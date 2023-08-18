import { NavLi } from './NavLi';

export const MainNav = () => {
  return (
    <nav>
      <div className='pb-4 font-bold'>
        Basics
      </div>
      <ul>
        <NavLi to='/basics/styles'>Styles</NavLi>
        <NavLi to='/basics/customization'>Customization</NavLi>
        <NavLi to='/basics/css-classes-props'>CSS classes props</NavLi>
        <NavLi to='/basics/forms'>Forms</NavLi>
        <NavLi to='/basics/validation'>Validation</NavLi>
      </ul>
      
      <div className='py-4 font-bold'>
        Form components
      </div>
      <ul>
        <NavLi to='/components/autocomplete'>AutoComplete</NavLi>
        <NavLi to='/components/button'>Button</NavLi>
        <NavLi to='/components/button-group'>ButtonGroup</NavLi>
        <NavLi to='/components/calendar'>Calendar</NavLi>
        <NavLi to='/components/check-box'>CheckBox</NavLi>
        <NavLi to='/components/date-picker'>DatePicker</NavLi>
        <NavLi to='/components/date-range'>DateRange</NavLi>
        <NavLi to='/components/date-time-picker'>DateTimePicker</NavLi>
        <NavLi to='/components/date-time-range'>DateTimeRange</NavLi>
        <NavLi to='/components/dropdown-select'>DropDownSelect</NavLi>
        <NavLi to='/components/drop-zone'>DropZone</NavLi>
        <NavLi to='/components/file-drop'>FileDrop</NavLi>
        <NavLi to='/components/file-upload'>FileUpload</NavLi>
        <NavLi to='/components/input'>Input</NavLi>
        <NavLi to='/components/masked-input'>MaskedInput</NavLi>
        <NavLi to='/components/multi-select'>MultiSelect</NavLi>
        <NavLi to='/components/numeric-text-box'>NumericTextBox</NavLi>
        <NavLi to='/components/numeric-range'>NumericRange</NavLi>
        <NavLi to='/components/password'>Password</NavLi>
        <NavLi to='/components/radio'>Radio</NavLi>
        <NavLi to='/components/rating'>Rating</NavLi>
        <NavLi to='/components/slider'>Slider</NavLi>
        <NavLi to='/components/switcher'>Switcher</NavLi>
        <NavLi to='/components/textarea'>Textarea</NavLi>
        <NavLi to='/components/time-picker'>TimePicker</NavLi>
        <NavLi to='/components/time-range'>TimeRange</NavLi>
      </ul>

      <div className='py-4 font-bold'>
        Form helpers
      </div>
      <ul>
        <NavLi to='/components/form'>form</NavLi>
        <NavLi to='/components/validate'>validate</NavLi>
      </ul>

      <div className='py-4 font-bold'>
        Validation examples
      </div>
      <ul>
        <NavLi to='/examples/is-required'>isRequired</NavLi>
        <NavLi to='/examples/predefined-validators'>predefined validators</NavLi>
      </ul>

      <div className='py-4 font-bold'>
        Layout components
      </div>
      <ul>
        <NavLi to='/components/collapse'>Collapse</NavLi>
        <NavLi to='/components/collapsible'>Collapsible</NavLi>
        <NavLi to='/components/currency'>Currency</NavLi>
        <NavLi to='/components/drop-down'>DropDown</NavLi>
        <NavLi to='/components/drop-down-link'>DropDownLink</NavLi>
        <NavLi to='/components/icon'>Icon</NavLi>
        <NavLi to='/components/loader'>Loader</NavLi>
        <NavLi to='/components/modal'>Modal</NavLi>
        {/* <NavLi to='/components/notifications'>Notifications</NavLi> */}
        <NavLi to='/components/pagination'>Pagination</NavLi>
        <NavLi to='/components/progress-bar'>ProgressBar</NavLi>
        <NavLi to='/components/status-bar'>StatusBar</NavLi>
        <NavLi to='/components/sticky-panel'>StickyPanel</NavLi>
        <NavLi to='/components/tabs'>Tabs</NavLi>
        <NavLi to='/components/tags'>Tags</NavLi>
        <NavLi to='/components/tooltip'>Tooltip</NavLi>
        {/* <NavLi to='/components/tour'>Tour</NavLi> */}
        {/* <NavLi to='/components/v-stepper'>VStepper</NavLi> */}
      </ul>
      
      <div className='py-4 font-bold'>
        Other
      </div>
      <ul>
        <NavLi to='/components/html'>HTML</NavLi>
        <NavLi to='/components/leda-provider'>Leda</NavLi>
        <NavLi to='/components/utils'>utils</NavLi>
      </ul>
    </nav>
  )
}