'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import { UnderscoreClasses } from '@/components/commonProps';
import { CodeBlock, H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection } from '@/sections';

const ModalPage = () => (
  <article>
    <H1>Modal</H1>

    <PropsTableSection>
      <tr>
        <Td>children</Td>
        <Td>React.ReactNode</Td>
        <Td>Child elements</Td>
      </tr>
      <tr>
        <Td>className</Td>
        <Td>string</Td>
        <Td>In case you want to add some classes</Td>
      </tr>
      <tr>
        <Td><b>isOpen</b></Td>
        <Td>boolean</Td>
        <Td>Wether the modal is open</Td>
      </tr>
      <tr>
        <Td>onClose</Td>
        <Td>{'(ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void'}</Td>
        <Td>Close handler, works ony type of closing</Td>
      </tr>
      <tr>
        <Td>onCloseButtonClick</Td>
        <Td>{'CustomEventHandler<React.MouseEvent<HTMLElement>>'}</Td>
        <Td>Close button click handler</Td>
      </tr>
      <tr>
        <Td>onEscapePress</Td>
        <Td>{'CustomEventHandler<React.KeyboardEvent<HTMLElement>>'}</Td>
        <Td>Escape press handler</Td>
      </tr>
      <tr>
        <Td>onOverlayClick</Td>
        <Td>{'CustomEventHandler<React.MouseEvent<HTMLElement>>'}</Td>
        <Td>Click on the outside of the modal handler</Td>
      </tr>
      <tr>
        <Td>size</Td>
        <Td>
          <CodeBlock>
            {`WindowSizeType | string

===
type WindowSizeType = 'sm' | 'md' | 'lg'                  
              `}
          </CodeBlock>
        </Td>
        <Td>
          <p>Window size.</p>
          <p>Tere are three standard sizes: sm=480, md=608, lg=868.</p>
          <p>{'Any custom values can be put as "50%", "50px", "50rem" etc.'}</p>
          <p>md=608 is the default value</p>
        </Td>
      </tr>
      <tr>
        <Td>theme</Td>
        <Td>...</Td>
        <Td>Theme</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <L.Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        // onCloseButtonClick={() => {
        //   console.log('click on close icon');
        //   setIsOpen(false);
        // }}
        // onOverlayClick={() => {
        //   console.log('click on overlay');
        //   setIsOpen(false);
        // }}
        // onEscapePress={() => {
        //   console.log('esc pressed');
        //   setIsOpen(false);
        // }}
        size="sm"
      >
        <L.ModalHeader>New user</L.ModalHeader>
        <L.ModalBody _p-4>
          <L.Div _mb-2>
            <L.Span>Name</L.Span>
            <L.Input form="modal-form" name="first-name" isRequired />
          </L.Div>
          <L.Div _mb-2>
            <L.Span>Family name</L.Span>
            <L.Input form="modal-form" name="last-name" isRequired />
          </L.Div>
          <L.Div _mb-2>
            <L.Span>Date of birth</L.Span>
            <L.DatePicker _colMd10 isRequired form="modal-form" name="birth-date" />
          </L.Div>
          <L.Div>
            <L.Span>Passport</L.Span>
            <L.MaskedInput mask="####-######" form="modal-form" name="passport" isRequired />
          </L.Div>
        </L.ModalBody>
        <L.ModalFooter>
          <L.Button onClick={() => setIsOpen(false)}>Cancel</L.Button>
          {' '}
          <L.Button form="modal-form" onClick={() => setIsOpen(false)} onValidationFail={() => alert('Fill out the form please')}>Add</L.Button>
        </L.ModalFooter>
      </L.Modal>
      <br />
      <L.Button onClick={() => setIsOpen(true)}>Open</L.Button>
    </>
  );
}`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>wrapperRender</Td>
        <Td>
          <p>{'CustomRender<ModalWindowProps, {}, WrapperProps>'}</p>
          <p>{'CustomRender<ModalElementsProps, {}, React.HTMLAttributes<HTMLDivElement>>'}</p>
        </Td>
        <Td>...</Td>
      </tr>
    </CustomizationPropsTableSection>
  </article>
);

export default ModalPage;
