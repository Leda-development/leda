'use client'
import * as L from '@leda';
import { H1, P } from '@/components/typography';
import { Live } from '@/components/live';

const CSSClassesProps = () => {
  return (
    <div>
      <H1>CSS classes props</H1>
      
      <P className='mb-4'>
        Each Leda component can have an attribute/attributes starting with _.
      </P>
      <P className='mb-4'>
        It is transformed to a css class so you can write:
      </P>

        <Live scope={{ L }}>
{`
() => {
  const [isColored, setIsColored] = React.useState(false)
  const [isLarge, setIsLarge] = React.useState(false)

  return (
    <>
      <L.Div
        _mb-4
        _text-sky-600={isColored}
        _text-xl={isLarge}
      >
        Hello world!
      </Div>

      <L.Button
        onClick={() => setIsColored(!isColored)}
      >
        Toggle color
      </Button>
      
      <L.Button
        onClick={() => setIsLarge(!isLarge)}
        _ml-2
      >
        Toggle size
      </Button>
    </>
  );
}
  `
          }
        </Live>
      
      <P>
        Leda components can have both className and _yourClassName props.
      </P> 
    </div>
  )
}

export default CSSClassesProps;