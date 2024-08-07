import { A, H1, P } from '@/components/typography';

const Contacts = () => (
  <div>
    <H1>Contacts</H1>
    <P>
      Got a question?
    </P>
    <P>
      Telegram:
      <A
        href="https://t.me/tom_in_the_shell"
        target="_blank"
        className="ml-2"
      >
        @tom_in_the_shell
      </A>
    </P>
  </div>
);

export default Contacts;
